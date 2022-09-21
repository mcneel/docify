<template>
  <q-page>
    <div class="q-pa-sm">
    <q-breadcrumbs v-if="namespace" class="q-mb-sm" active-color="accent">
      <q-breadcrumbs-el icon="home" :to="baseUrl" />
      <q-breadcrumbs-el v-if="dataType !== 'namespace'" :label="namespace" :to="baseUrl + namespace.toLowerCase()" />
      <q-breadcrumbs-el :label="name" />
    </q-breadcrumbs>
    <h1>{{name}} {{dataType}}</h1>
    <p>
      <span v-for="(line, index) in getLines(summary)" :key="'summary' + index">
        <br v-if="index>0">
        {{line}}
      </span>
    </p>
    <p v-if="remarks">
      <span v-for="(line, index) in getLines(remarks)" :key="'remark' + index">
        <br v-if="index>0">
        {{line}}
      </span>
    </p>
    <i v-for="(item, index) in inheritence" :key="item.name">
      <i v-if="index===0">Inheritence: </i>
      <router-link v-if="item.link" class="routerlink" :to="baseUrl+item.link.toLowerCase()">{{item.name}}</router-link>
      <i v-else>{{item.name}}</i>
      <q-icon name="arrow_forward"/>
      <i v-if="index===(inheritence.length-1)">{{name}}</i>
    </i>
    <p v-if="namespace && dataType !== 'namespace'">
      <i>Namespace: <router-link class="routerlink" :to="baseUrl+namespace.toLowerCase()">{{namespace}}</router-link></i>
      <br>
      <i>{{name}}: <router-link class="routerlink" :to="(baseUrl+'references/'+namespace+'.'+name).toLowerCase()">references</router-link></i>
    </p>
    <q-expansion-item v-for="section in memberSections"
      :key="section.title"
      switch-toggle-side
      :default-opened = "this.$route.hash ? this.$route.hash.substring(1) == anchorId(section) : section.expanded"
      :model="section.expanded"
      :label="section.title"
      :content-inset-level="1"
      :id="anchorId(section)"
      header-class="bg-secondary text-white"
    >
      <q-list>
        <div v-for="(member, index) in section.items" :key="index">
          <q-item
            dense
            :clickable="!section.values"
            :to="memberUrl(section, member)"
          >
            <q-item-section :class="memberClass(member)">
              <q-item-label :class="section.values ? '' : 'text-accent'">
                <b>{{memberName(member, section)}}</b>&nbsp;
                <q-badge v-if="!section.constructors && !section.values && member.parent !== (namespace + '.' + name)" color='info' outline>
                  <q-icon name="mdi-file-tree"/>
                  <q-tooltip>From {{member.parent}}</q-tooltip>
                </q-badge>
              </q-item-label>
              <q-item-label caption class="on-right">
                <span v-for="(line, index) in getLines(member.summary)" :key="10000 + index">
                  <br v-if="index>0">
                  {{line}}
                </span>
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator spaced inset />
        </div>
      </q-list>
    </q-expansion-item>
    <q-expansion-item v-if="childNamespaces"
      switch-toggle-side
      label="Child Namespaces"
      :content-inset-level="1"
      default-opened
      header-class="bg-secondary text-white"
    >
      <q-list>
        <q-item clickable v-for="item in childNamespaces" :key="item.label" :to="baseUrl + item.path.toLowerCase()">
          <q-item-section>
            <q-item-label>
              <b class="text-accent">{{item.label}}</b>
            </q-item-label>
            <q-item-label caption>{{item.summary}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>
    <q-item clickable v-for="item in namespaceItems" :key="item.label" :to="baseUrl + item.path.toLowerCase()">
      <q-item-section>
        <q-item-label><b class="text-accent">{{item.label}}</b></q-item-label>
        <q-item-label caption>{{item.summary}}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
  </q-page>
</template>

<script>
import ViewModel from '../ViewModel'
import ProjInfo from '../proj_info.json'

export default {
  props: {
    baseUrl: { type: String }
  },
  data () {
    return {
    }
  },
  meta () {
    const node = ViewModel.findNodeByPath(this.$route.params.datatype)
    let desc = node.namespace ? node.namespace + '.' + node.name : node.name
    if (node.dataType === 'namespace') {
      desc += ' namespace'
    }
    if (node.summary) {
      desc += ': ' + node.summary
    }
    return {
      title: ProjInfo.name + ' API - ' + node.name + ' ' + node.dataType,
      meta: {
        description: { name: 'description', content: desc }
      }
    }
  },
  computed: {
    dataType: function () {
      const node = ViewModel.findNodeByPath(this.$route.params.datatype)
      return node.dataType
    },
    inheritence: function () {
      const node = ViewModel.findNodeByPath(this.$route.params.datatype)
      return ViewModel.getInheritence(node)
    },
    memberSections: function () {
      const item = ViewModel.findNodeByPath(this.$route.params.datatype)
      const rc = []

      if (item.dataType !== 'namespace') {
        if (item.constructors) {
          rc.push({
            title: 'Constructors (' + item.constructors.length + ')',
            items: item.constructors,
            expanded: true,
            constructors: true
          })
        }

        let values = [].concat(item.values)
        for (let i = 0; i < this.inheritence.length; i++) {
          if (this.inheritence[i].item) {
            values = values.concat(this.inheritence[i].item.values)
          }
        }
        values = values.filter(v => v != null)
        if (values.length > 0) {
          rc.push(Object.freeze({
            title: 'Values',
            items: Object.freeze(values),
            expanded: true,
            values: true
          }))
        }

        let parentName = item.namespace + '.' + item.name
        //TODO: use ViewModel getMembers method
        let properties = [].concat(item.properties)
        if (item.properties) {
          for (let i = 0; i < properties.length; i++) {
            properties[i].parent = parentName
          }
        }
        for (let i = 0; i < this.inheritence.length; i++) {
          if (!this.inheritence[i].item) continue
          const inheritedProps = this.inheritence[i].item.properties
          if (inheritedProps == null) continue
          parentName = this.inheritence[i].item.namespace + '.' + this.inheritence[i].item.name
          for (let j = 0; j < inheritedProps.length; j++) {
            inheritedProps[j].parent = parentName
          }
          properties = properties.concat(this.inheritence[i].item.properties)
        }
        properties = properties.filter(p => p != null)
        const p = { properties: true }
        properties.sort((a, b) => this.memberName(a, p).localeCompare(this.memberName(b, p)))
        if (properties.length > 0) {
          rc.push(Object.freeze({
            title: 'Properties (' + properties.length + ')',
            items: Object.freeze(properties),
            expanded: true,
            properties: true
          }))
        }

        parentName = item.namespace + '.' + item.name
        //TODO: use ViewModel getMembers method
        let methods = [].concat(item.methods)
        if (item.methods) {
          for (let i = 0; i < methods.length; i++) {
            methods[i].parent = parentName
          }
        }
        for (let i = 0; i < this.inheritence.length; i++) {
          if (!this.inheritence[i].item) continue
          const inheritedMethods = this.inheritence[i].item.methods
          if (inheritedMethods == null) continue
          parentName = this.inheritence[i].item.namespace + '.' + this.inheritence[i].item.name
          for (let j = 0; j < inheritedMethods.length; j++) {
            inheritedMethods[j].parent = parentName
          }
          methods = methods.concat(this.inheritence[i].item.methods)
        }
        methods = methods.filter(m => m != null)
        const m = { methods: true }
        methods.sort((a, b) => this.memberName(a, m).localeCompare(this.memberName(b, m)))
        if (methods.length > 0) {
          rc.push(Object.freeze({
            title: 'Methods (' + methods.length + ')',
            items: Object.freeze(methods),
            expanded: true,
            methods: true
          }))
        }

        parentName = item.namespace + '.' + item.name
        //TODO: use ViewModel getMembers method
        let events = [].concat(item.events)
        if (item.events) {
          for (let i = 0; i < events.length; i++) {
            events[i].parent = parentName
          }
        }
        for (let i = 0; i < this.inheritence.length; i++) {
          if (!this.inheritence[i].item) continue
          const inheritedEvents = this.inheritence[i].item.events
          if (inheritedEvents == null) continue
          parentName = this.inheritence[i].item.namespace + '.' + this.inheritence[i].item.name
          for (let j = 0; j < inheritedEvents.length; j++) {
            inheritedEvents[j].parent = parentName
          }
          events = events.concat(this.inheritence[i].item.events)
        }
        events = events.filter(e => e != null)
        if (events.length > 0) {
          rc.push(Object.freeze({
            title: 'Events (' + events.length + ')',
            items: Object.freeze(events),
            expanded: true,
            events: true
          }))
        }
      }
      return rc
    },
    name: function () {
      const node = ViewModel.findNodeByPath(this.$route.params.datatype)
      return node.name
    },
    namespace: function () {
      const node = ViewModel.findNodeByPath(this.$route.params.datatype)
      if (node.namespace) return node.namespace
      return node.name
    },
    childNamespaces: function () {
      const node = ViewModel.findNodeByPath(this.$route.params.datatype)
      if (node.dataType === 'namespace') {
        const tree = ViewModel.getTree()
        const children = []
        for (let i = 0; i < tree.length; i++) {
          if (tree[i].label.startsWith(node.name + '.')) {
            if (tree[i].label.indexOf('.', node.name.length + 1) < 0) {
              children.push({
                label: tree[i].label,
                path: tree[i].path,
                summary: tree[i].summary
              })
            }
          }
        }
        return children.length > 0 ? children : null
      }
      return null
    },
    namespaceItems: function () {
      const node = ViewModel.findNodeByPath(this.$route.params.datatype)
      if (node.dataType === 'namespace') {
        const tree = ViewModel.getTree()
        for (let i = 0; i < tree.length; i++) {
          if (tree[i].label === node.name) {
            return tree[i].children
          }
        }
      }
      return null
    },
    remarks: function () {
      const node = ViewModel.findNodeByPath(this.$route.params.datatype)
      return node.remarks
    },
    summary: function () {
      const node = ViewModel.findNodeByPath(this.$route.params.datatype)
      return node.summary
    }
  },
  mounted () {
    if (this.$route.params && this.$route.params.datatype) {
      const selectedItem = this.$route.fullPath.substring(this.baseUrl.length)
      ViewModel.setSelectedItem(selectedItem)
    }
    // If this page is loaded with an anchor URL, attempt to scroll to
    // it right after the page is loaded
    if (this.$route.hash) {
      this.$nextTick(() => {
        const el = document.getElementById(this.$route.hash.substring(1))
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 65
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      })
    }
  },
  watch: {
    '$route' (to, from) {
      // react to route changes...
      const selectedItem = to.fullPath.substring(this.baseUrl.length)
      ViewModel.setSelectedItem(selectedItem)
    }
  },
  methods: {
    anchorId (section) {
      if (section.constructors) {
        return 'constructors'
      }
      if (section.properties) {
        return 'properties'
      }
      if (section.methods) {
        return 'methods'
      }
      if (section.events) {
        return 'events'
      }
      return ''
    },
    getLines (text) {
      if (text == null) return text
      const lines = text.split('  \n')
      // if (lines.length > 1) console.log('split worked')
      return lines
    },
    memberClass (member) {
      if (member.deprecated) return 'light-dimmed'
      return ''
    },
    memberName (member, section) {
      //TODO: use ViewModel method
      if (section.constructors || section.values) return member.signature
      if (section.methods){
      const match = member.signature.match(/\S*\(.*\)/g)
      return match[0]
      }
      const tokens = member.signature.split(' ')
      let name = tokens[1]
      if (tokens[0] === 'static' && !section.events) {
        name = tokens[2]
      }
      let index = name.indexOf('(')
      if (index > 0) {
        index = member.signature.indexOf(name)
        return member.signature.substring(index)
      }
      return name
    },
    memberUrl (section, member) {
      //TODO: use ViewModel method
      if (section.values) return ''
      let name = this.memberName(member, section).toLowerCase()
      const index = name.indexOf('(')
      if (index > 0) name = name.substring(0, index)
      if (section.constructors) {
        const url = this.baseUrl + this.namespace + '.' + name + '/' + name
        return url.toLowerCase()
      }
      const url = this.baseUrl + member.parent + '/' + name
      return url.toLowerCase()
    }
  }
}
</script>
