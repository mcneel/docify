<template>
  <q-page>
    <h1>{{title}} {{vm.dataType}}</h1>
    <p>{{vm.summary}}</p>
    <p v-if="vm.remarks">{{vm.remarks}}</p>
    <i v-for="(item, index) in inheritence" :key="item.name">
      <i v-if="index===0">Inheritence: </i>
      <router-link v-if="item.link" class="routerlink" :to="baseUrl+item.link.toLowerCase()">{{item.name}}</router-link>
      <i v-else>{{item.name}}</i>
      <q-icon name="arrow_forward"/>
      <i v-if="index===(inheritence.length-1)">{{title}}</i>
    </i>
    <p v-if="namespace">
      <i>Namespace: <router-link class="routerlink" :to="baseUrl+namespace.toLowerCase()">{{namespace}}</router-link></i>
      <br>
      <i>{{title}}: <router-link class="routerlink" :to="baseUrl+'references/'+namespace.toLowerCase() + '.' + title.toLowerCase()">references</router-link></i>
    </p>
    <q-list bordered class="rounded-borders q-mt-md">
      <q-expansion-item v-for="section in memberSections"
        :key="section.title"
        switch-toggle-side
        :value="section.expanded"
        :label="section.title"
        :content-inset-level="1"
        :id="anchorId(section)"
      >
        <q-item v-for="(member, index) in section.items" :key="index"
          :clickable="!section.values"
          :to="memberUrl(section, member)"
        >
          <q-item-section :class="memberClass(member)">
            <q-item-label>
              {{memberName(member, section)}}
              <q-badge v-if="!section.constructors && !section.values && member.parent !== (namespace + '.' + vm.name)" color='info' outline>
                <q-icon name="mdi-file-tree"/>
                <q-tooltip>From {{member.parent}}</q-tooltip>
              </q-badge>
            </q-item-label>
            <q-item-label caption class="on-right">
              {{member.summary}}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>
      <q-item clickable v-for="item in namespaceItems" :key="item.label" :to="baseUrl + item.path.toLowerCase()">
        <q-item-section avatar><q-icon :name="item.icon"/></q-item-section>
        <q-item-section>
          <q-item-label>{{item.label}}</q-item-label>
          <q-item-label caption>{{item.summary}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import ViewModel from '../ViewModel'

export default {
  props: {
    baseUrl: { type: String }
  },
  data () {
    const mostRecent = ViewModel.mostRecentSince()
    return {
      vm: {},
      title: '',
      namespace: '',
      memberSections: [],
      namespaceItems: null,
      inheritence: [],
      version: mostRecent
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
      title: 'RhinoCommon API - ' + node.name + ' ' + node.dataType,
      meta: {
        description: { name: 'description', content: desc }
      }
    }
  },
  created () {
    ViewModel.setSelectedItemChangedCallback('DataType.vue', this.onChangeSelectedItem)
  },
  mounted () {
    if (this.$route.params && this.$route.params.datatype) {
      ViewModel.setSelectedItem(this.$route.params.datatype)
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
      const selectedItem = to.path.substring(this.baseUrl.length)
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
    memberClass (member) {
      if (member.deprecated) return 'light-dimmed'
      return ''
    },
    memberName (member, section) {
      if (section.constructors || section.values) return member.signature
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
      if (section.values) return ''
      let name = this.memberName(member, section).toLowerCase()
      const index = name.indexOf('(')
      if (index > 0) name = name.substring(0, index)
      if (section.constructors) {
        const url = this.baseUrl + this.namespace + '.' + this.title + '/' + name
        return url.toLowerCase()
      }
      const url = this.baseUrl + member.parent + '/' + name
      return url.toLowerCase()
    },
    onChangeSelectedItem (item) {
      // bail if the selected item has not changed
      if (this.vm.name && this.vm.name === item.name) return
      console.log('selected item changed to ' + item.name)
      const start = performance.now()
      this.vm = item
      if (item.dataType === 'namespace') {
        this.title = 'Namespace: ' + item.name
        this.namespace = null
        this.memberSections = []
        const tree = ViewModel.getTree()
        this.namespaceItems = null
        for (let i = 0; i < tree.length; i++) {
          if (tree[i].label === item.name) {
            this.namespaceItems = tree[i].children
            break
          }
        }
        this.inheritence = []
      } else {
        this.title = item.name
        this.namespace = item.namespace
        this.memberSections = []
        this.namespaceItems = null
        this.inheritence = ViewModel.getInheritence(item)

        if (item.constructors) {
          this.memberSections.push({
            title: 'Constructors (' + item.constructors.length + ')',
            items: item.constructors,
            expanded: true,
            constructors: true
          })
        }

        let values = [].concat(item.values)
        for (let i = 0; i < this.inheritence.length; i++) {
          values = values.concat(this.inheritence[i].item.values)
        }
        values = values.filter(v => v != null)
        if (values.length > 0) {
          this.memberSections.push(Object.freeze({
            title: 'Values',
            items: Object.freeze(values),
            expanded: true,
            values: true
          }))
        }

        let parentName = item.namespace + '.' + item.name
        let properties = [].concat(item.properties)
        if (item.properties) {
          for (let i = 0; i < properties.length; i++) {
            properties[i].parent = parentName
          }
        }
        for (let i = 0; i < this.inheritence.length; i++) {
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
          this.memberSections.push(Object.freeze({
            title: 'Properties (' + properties.length + ')',
            items: Object.freeze(properties),
            expanded: true,
            properties: true
          }))
        }

        parentName = item.namespace + '.' + item.name
        let methods = [].concat(item.methods)
        if (item.methods) {
          for (let i = 0; i < methods.length; i++) {
            methods[i].parent = parentName
          }
        }
        for (let i = 0; i < this.inheritence.length; i++) {
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
          this.memberSections.push(Object.freeze({
            title: 'Methods (' + methods.length + ')',
            items: Object.freeze(methods),
            expanded: true,
            methods: true
          }))
        }

        parentName = item.namespace + '.' + item.name
        let events = [].concat(item.events)
        if (item.events) {
          for (let i = 0; i < events.length; i++) {
            events[i].parent = parentName
          }
        }
        for (let i = 0; i < this.inheritence.length; i++) {
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
          this.memberSections.push(Object.freeze({
            title: 'Events (' + events.length + ')',
            items: Object.freeze(events),
            expanded: true,
            events: true
          }))
        }
      }
      const elapsed = performance.now() - start
      console.log(`viewmodel build time for page = ${elapsed.toFixed(2)}ms`)
    }
  }
}
</script>
