<template>
  <q-page>
    <div class="q-pa-sm">
        <q-breadcrumbs v-if="namespace" class="q-mb-sm" active-color="accent">
          <q-breadcrumbs-el icon="home" :to="baseUrl" />
          <q-breadcrumbs-el v-if="dataType !== 'namespace'" :label="namespace" :to="baseUrl + namespace.toLowerCase()" />
          <q-breadcrumbs-el :label="name" />
        </q-breadcrumbs>
        <h1>{{ name }} {{ dataType }}</h1>
        <div v-html="summary" style="width: 100%; overflow: scroll;"></div>
        <p v-if="remarks">
          <span v-for="(line, index) in getLines(remarks)" :key="'remark' + index">
            <br v-if="index > 0">
            {{ line }}
          </span>
        </p>
        <i v-for="(item, index) in inheritence" :key="item.name">
          <i v-if="index === 0">inheritence: </i>
          <router-link v-if="item.link" class="routerlink" :to="baseUrl + item.link.toLowerCase()">{{ item.name
          }}</router-link>
          <i v-else>{{ item.name }}</i>
          <q-icon name="arrow_forward" />
          <i v-if="index === (inheritence.length - 1)">{{ name }}</i>
        </i>
        <p v-if="namespace && dataType !== 'namespace'">
          <i>Namespace: <router-link class="routerlink" :to="baseUrl + namespace.toLowerCase()">{{ namespace
          }}</router-link></i>
          <br>
          <i>{{ name }}: <router-link class="routerlink"
              :to="(baseUrl + 'references/' + namespace + '.' + name).toLowerCase()">references</router-link></i>
        </p>
        <q-expansion-item v-for="section in memberSections" :key="section.title" switch-toggle-side
          :default-opened="section.expanded" v-model="ExpandedSections[section.type]" :label="section.title"
          :content-inset-level="1" :id="anchorId(section)" header-class="bg-secondary text-white">

          <q-list>
            <div v-for="(member, index) in section.items" :key="index">
              <q-item dense :clickable="section.type != 'values'" :to="member.path+'#'+ViewModel.signatureAnchorRef(member.signature)"
                :class="memberClass(member)" class="row">

                <q-item-label :class="section.type == 'values' ? '' : 'text-accent'" class="col"
                  style="overflow-wrap: break-word;">
                  <!--formatting member signature below to show only name as bold and signature non-bold-->
                  <p><span><b>{{ splitSignature(ViewModel.memberName(member, section.type))[0] }}</b></span>{{
                    splitSignature(ViewModel.memberName(member, section.type))[1] }}</p>&nbsp;
                  <q-badge
                    v-if="section.type != 'constructors' && section.type != 'values' && member.parent !== (namespace + '.' + name)"
                    color='info' outline>
                    <q-icon name="mdi-file-tree" />
                    <q-tooltip>From {{ member.parent }}</q-tooltip>
                  </q-badge>
                  <q-badge v-if="section.type == 'methods' && member.protected" color='info' outline>
                    <q-icon name="mdi-key-variant" />
                    <q-tooltip>Protected Member</q-tooltip>
                  </q-badge>
                  <q-badge v-if="section.type == 'methods' && member.virtual" color='info' outline>
                    <q-icon name="mdi-alpha-v" />
                    <q-tooltip>Virtual Member</q-tooltip>
                  </q-badge>
                  <q-badge v-if="member.signature.includes('static')" color='info' outline>
                    <q-icon name="mdi-alpha-s" />
                    <q-tooltip>Static Member</q-tooltip>
                  </q-badge>
                  <q-badge v-if="member.obsolete || member.deprecated" color='negative' outline>
                    <q-icon name="mdi-alert" />
                    <q-tooltip>{{member.obsolete && "Obsolete"}}{{member.obsolete && member.deprecated && " | "}}{{member.deprecated && "Deprecated"}}</q-tooltip>
                  </q-badge>
                </q-item-label>
                <q-item-label caption class="on-right col-8">
                  <span v-for="(line, index) in getLines(member.summary)" :key="10000 + index">
                    <br v-if="index > 0">
                    {{ line }}
                  </span>
                </q-item-label>
              </q-item>
              <q-separator spaced inset />
            </div>
          </q-list>
        </q-expansion-item>
        <q-expansion-item v-if="childNamespaces" switch-toggle-side label="Child Namespaces" :content-inset-level="1"
          default-opened header-class="bg-secondary text-white">
          <q-list>
            <q-item clickable v-for="item in childNamespaces" :key="item.label" :to="baseUrl + item.path.toLowerCase()"
              class="row">
              <q-item-label class="col" style="overflow-wrap: break-word;">
                <b class="text-accent">{{ item.label }}</b>
              </q-item-label>
              <q-item-label caption class="col-8">{{ item.summary }}</q-item-label>
            </q-item>
          </q-list>
        </q-expansion-item>
        <q-item clickable v-for="item in namespaceItems" :key="item.label" :to="baseUrl + item.path.toLowerCase()"
          class="row">
          <q-item-label class="col" style="overflow-wrap: break-word;"><b class="text-accent">{{ item.label
          }}</b></q-item-label>
          <q-item-label caption class="col-8">{{ item.summary }}</q-item-label>
        </q-item>
      </div>
    </q-page>
</template>

<script>
import ViewModel from '../ViewModel'
import ProjInfo from '../proj_info.json'
import { createMetaMixin } from 'quasar'
import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll

export default {
  props: {
    baseUrl: { type: String }
  },
  data() {
    return {
      ViewModel,
      ExpandedSections: {
      }
    }
  },
  mixins: [
    //This is where page meta gets set because why the heck NOT Quasar
    createMetaMixin(function () {
      // "this" here refers to your component
      const node = ViewModel.findNodeByPath(this.$route.params.datatype)
      if(node){
        let desc = node.namespace ? node.namespace + '.' + node.name : node.name
        if (node.dataType === 'namespace') {
          desc += ' namespace'
        }
        if (node.summary) {
          desc += ': ' + node.summary
        }
        return {
          title: node.name + ' ' + node.dataType,
          meta: {
            description: { name: 'description', content: desc }
          }
        }
    }
    })
  ],

  computed: {
    dataType: function () {
      const node = ViewModel.findNodeByPath(this.$route.params.datatype)
      return node.dataType
    },
    inheritence: function () {
      const node = ViewModel.findNodeByPath(this.$route.params.datatype)
      return ViewModel.getinheritence(node)
    },
    memberSections: function () {
      const item = ViewModel.findNodeByPath(this.$route.params.datatype)

      let expandedType;
      if (this.$route.hash) {
        expandedType = this.$route.hash.substring(1);
      }

      const rc = []

      if (item.dataType !== 'namespace') {

        const constructors = ViewModel.getMembers(item, "constructors", true)
        if (constructors.length > 0) {
          rc.push(Object.freeze({
            title: 'Constructors (' + constructors.length + ')',
            items: Object.freeze(constructors),
            expanded: expandedType ?'constructors' == expandedType : true, //expand everything if no hash
            type: 'constructors'
          }))
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
            expanded: true, //Always expand enums
            type: 'values'
          }))
        }
        values.forEach((v, i) => {
          if (!v.signature.includes("=")){
            v.signature = `${v.signature} = ${i}`
          }
        })

        let parentName = item.namespace + '.' + item.name
        const properties = ViewModel.getMembers(item, "properties", true)
        if (properties && properties.length > 0) {
          rc.push(Object.freeze({
            title: 'Properties (' + properties.length + ')',
            items: Object.freeze(properties),
            expanded: expandedType ?'properties' == expandedType : true, //expand everything if no hash
            type: 'properties'
          }))
        }

        parentName = item.namespace + '.' + item.name
        const methods = ViewModel.getMembers(item, "methods", true)
        if (methods && methods.length > 0) {
          rc.push(Object.freeze({
            title: 'Methods (' + methods.length + ')',
            items: Object.freeze(methods),
            expanded: expandedType ?'methods' == expandedType : true, //expand everything if no hash
            type: 'methods'
          }))
        }

        parentName = item.namespace + '.' + item.name
        const operators = ViewModel.getMembers(item, "operators", true)
        if (operators && operators.length > 0) {
          rc.push(Object.freeze({
            title: 'Operators (' + operators.length + ')',
            items: Object.freeze(operators),
            expanded: expandedType ?'operators' == expandedType : true, //expand everything if no hash
            type: 'operators'
          }))
        }

        parentName = item.namespace + '.' + item.name
        const fields = ViewModel.getMembers(item, "fields", true)
        if (fields && fields.length > 0) {
          rc.push(Object.freeze({
            title: 'fields (' + fields.length + ')',
            items: Object.freeze(fields),
            expanded: expandedType ?'fields' == expandedType : true, //expand everything if no hash
            type: 'fields'
          }))
        }

        parentName = item.namespace + '.' + item.name
        const events = ViewModel.getMembers(item, "events", true)
        if (events && events.length > 0) {
          rc.push(Object.freeze({
            title: 'Events (' + events.length + ')',
            items: Object.freeze(events),
            expanded: expandedType ?'events' == expandedType : true, //expand everything if no hash
            type: 'events'
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
  mounted() {
    if (this.$route.params && this.$route.params.datatype) {
      const selectedItem = decodeURI(this.$route.fullPath.substring(this.baseUrl.length))
      ViewModel.setSelectedItem(selectedItem)
    }

    if (this.$route.hash) {
          this.$nextTick(() => {
            const el = document.getElementById(this.$route.hash.substring(1))
            if (el) {
              this.scrollToElement(el, 0)
            }
          })
        }
  },
  watch: {
    '$route'(to, from) {
      // react to route changes...
      const selectedItem = to.fullPath.substring(this.baseUrl.length)
      ViewModel.setSelectedItem(selectedItem)

      let expandedType;
      if (to.hash) {
        expandedType = to.hash.substring(1);
      }
      this.ExpandedSections['constructors'] = expandedType ?'constructors' == expandedType : true //expand everything if no hash
      this.ExpandedSections['methods'] = expandedType ?'methods' == expandedType : true //expand everything if no hash
      this.ExpandedSections['events'] = expandedType ?'events' == expandedType : true //expand everything if no hash
      this.ExpandedSections['properties'] = expandedType ?'properties' == expandedType : true //expand everything if no hash
      this.ExpandedSections['values'] = expandedType ?'values' == expandedType : true //expand everything if no hash
      this.ExpandedSections['operators'] = expandedType ?'operators' == expandedType : true //expand everything if no hash
      this.ExpandedSections['fields'] = expandedType ?'fields' == expandedType : true //expand everything if no hash
    }
  },
  methods: {
      // takes an element object
      scrollToElement (el, padding) {
      console.log("scrolling to:", el)
      const target = getScrollTarget(el)
      const offset = el.offsetTop + padding
      const duration = 250
      setVerticalScrollPosition(target, offset, duration)
    },
    anchorId(section) {
      if (section.type == 'constructors') {
        return 'constructors'
      }
      if (section.type == 'properties') {
        return 'properties'
      }
      if (section.type == 'methods') {
        return 'methods'
      }
      if (section.type == 'events') {
        return 'events'
      }
      if (section.type == 'operators') {
        return 'operators'
      }
      if (section.type == 'fields') {
        return 'fields'
      }
      return ''
    },
    splitSignature(signature) {
      const chunks = signature.split("(");
      const name = chunks[0];
      // let args = chunks[1] ? `(${chunks[1]}` : null
      let  args = chunks[1];
      if(args){
      const argsList = args.split(',').map(a => a.split(".").slice(-1)[0])
      const shortenedArgs = `(${argsList.join(",")}`
      args = shortenedArgs;
      }
      return [name, args];
    },
    getLines(text) {
      if (text == null) return text
      const lines = text.split('  \n')
      // if (lines.length > 1) console.log('split worked')
      return lines
    },
    memberClass(member) {
      if (member.deprecated) return 'disabled'
      if (member.obsolete) return 'disabled'
      return ''
    },
  }
}
</script>
