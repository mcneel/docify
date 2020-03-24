<template>
  <q-page>
    <h1>{{title}}</h1>
    <p>{{vm.summary}}</p>
    <i v-for="(item, index) in inheritence" :key="item.name">
      <i v-if="index===0">Inheritence: </i>
      <router-link v-if="item.link" :to="baseUrl+item.link.toLowerCase()">{{item.name}}</router-link>
      <i v-else>{{item.name}}</i>
      <q-icon name="arrow_forward"/>
      <i v-if="index===(inheritence.length-1)">{{title}}</i>
    </i>
    <p v-if="namespace"><i>Namespace: <router-link :to="baseUrl+namespace.toLowerCase()">{{namespace}}</router-link></i></p>
    <q-list bordered class="rounded-borders q-mt-md">
      <q-expansion-item v-for="section in memberSections"
        :key="section.title"
        switch-toggle-side
        :value="section.expanded"
        :label="section.title"
        :content-inset-level="1"
      >
        <q-item v-for="member in section.items" :key="member.signature">
          <q-item-section>
            <q-item-label>{{signature(member)}}
              <q-btn v-if="member.examples && member.examples.length>0"
                size="xs"
                dense
                outline
                color="secondary"
                icon="mdi-code-tags"
                :to="exampleUrl(member)"
                >
                <q-tooltip>Show Example</q-tooltip>
              </q-btn>
            </q-item-label>
            <q-item-label caption>
              <q-badge v-if="member.since" outline :color="member.since===version?'accent':'secondary'">{{member.since.toFixed(1)}}
                <q-tooltip>Available since {{member.since.toFixed(1)}}</q-tooltip>
              </q-badge>
              {{member.summary}}
            </q-item-label>
            <q-item v-if="member.parameters">
              <q-item-section>
                <q-item-label inset-level="1" caption v-for="parameter in member.parameters" :key="parameter.name">
                  {{parameter.name}} - {{parameter.summary}}
                </q-item-label>
              </q-item-section>
            </q-item>
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
import { DataTypes } from '../RhinoCommonApi'

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
    return {
      // set the actual page title
      title: 'RhinoCommon - ' + this.title
    }
  },
  created () {
    ViewModel.setSelectedItemChangedCallback('DataType.vue', this.onChangeSelectedItem)
  },
  mounted () {
    if (this.$route.params && this.$route.params.datatype) {
      ViewModel.setSelectedItem(this.$route.params.datatype)
    }
  },
  watch: {
    '$route' (to, from) {
      // react to route changes...
      console.log('route watch ' + to.path + ' | ' + from.path)
      const selectedItem = to.path.substring(this.baseUrl.length)
      ViewModel.setSelectedItem(selectedItem)
    }
  },
  methods: {
    signature (member) {
      if (member.property) {
        let s = member.signature + ' {'
        for (let i = 0; i < member.property.length; i++) {
          if (i > 0) s += '|'
          s += member.property[i]
        }
        s += '}'
        return s
      }
      return member.signature
    },
    exampleUrl (member) {
      let name = member.examples[0].name
      const index = name.lastIndexOf('.')
      name = name.substring(0, index).toLowerCase()
      return this.baseUrl + 'examples/' + name
    },
    onChangeSelectedItem (item) {
      console.log('selected item changed to ' + item)
      this.vm = item
      if (item.dataType === DataTypes.NAMESPACE) {
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
        const index = item.name.lastIndexOf('.')
        this.title = item.name.substring(index + 1)
        this.namespace = item.name.substring(0, index)
        this.memberSections = []
        this.namespaceItems = null
        if (item.constructors) {
          this.memberSections.push({
            title: 'Constructors (' + item.constructors.length + ')',
            items: item.constructors,
            expanded: true
          })
        }
        if (item.values) {
          this.memberSections.push({
            title: 'Values',
            items: item.values,
            expanded: true
          })
        }
        if (item.properties) {
          this.memberSections.push({
            title: 'Properties (' + item.properties.length + ')',
            items: item.properties,
            expanded: true
          })
          item.properties.forEach(m => ViewModel.getExamples(item, m))
        }
        if (item.methods) {
          this.memberSections.push({
            title: 'Methods (' + item.methods.length + ')',
            items: item.methods,
            expanded: true
          })
          item.methods.forEach(m => ViewModel.getExamples(item, m))
        }
        if (item.events) {
          this.memberSections.push({
            title: 'Events (' + item.events.length + ')',
            items: item.events,
            expanded: true
          })
        }
        this.inheritence = ViewModel.getInheritence(item)
      }
    }
  }
}
</script>
