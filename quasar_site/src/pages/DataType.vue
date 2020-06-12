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
    <p v-if="namespace">
      <i>Namespace: <router-link :to="baseUrl+namespace.toLowerCase()">{{namespace}}</router-link></i>
      <br>
      <i>{{title}}: <router-link :to="baseUrl+'references/'+namespace.toLowerCase() + '.' + title.toLowerCase()">references</router-link></i>
    </p>
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
            <q-item-label>
              <span v-for="(chunk, index) in signature(member, section)" :key="index">
                <span v-if="chunk.link">
                  <router-link :to="chunk.link">{{chunk.name}}</router-link>
                </span>
                <span v-else>{{chunk.name}}</span>
              </span>
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
              <q-badge v-if="member.since" outline :color="member.since===version?'accent':'secondary'">{{member.since}}
                <q-tooltip>Available since {{member.since}}</q-tooltip>
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
      // console.log('route watch ' + to.path + ' | ' + from.path)
      const selectedItem = to.path.substring(this.baseUrl.length)
      ViewModel.setSelectedItem(selectedItem)
    }
  },
  methods: {
    tokenLink (token) {
      // skip tokens that start with a lower case letter
      if (token.length < 1 || token[0] === token[0].toLowerCase()) return null
      if (token.endsWith('[]')) token = token.substring(0, token.length - 2)
      if (token === this.vm.name) return null
      const typeMap = ViewModel.getTypeMap()
      const type = typeMap[token]
      if (!type) return null
      return this.baseUrl + ViewModel.itemPath(type)
    },
    signature (member, section) {
      const tokens = member.signature.split(' ')
      const chunks = []
      if (tokens[0] === 'static') {
        chunks.push({ name: tokens[0] + ' ' })
        tokens.shift()
      }
      if (section.events) {
        chunks.push({ name: tokens[0] })
        return chunks
      }

      if (section.properties || section.methods) {
        // try to get a link for the return type
        const link = this.tokenLink(tokens[0])
        if (link) {
          chunks.push({
            link: link,
            name: tokens[0]
          })
          chunks.push({ name: ' ' })
        } else {
          chunks.push({ name: tokens[0] + ' ' })
        }
        tokens.shift()
      }

      const declaration = tokens.join(' ')
      const parenIndex = declaration.indexOf('(')
      if (parenIndex > 0) {
        chunks.push({ name: declaration.substring(0, parenIndex + 1) })
        const parameterTokens = declaration.substring(parenIndex + 1, declaration.length - 1).split(',')
        for (let i = 0; i < parameterTokens.length; i++) {
          if (parameterTokens[i].indexOf('<') > 0) {
            parameterTokens[i] = parameterTokens[i] + ',' + parameterTokens[i + 1]
            parameterTokens[i + 1] = ''
          }
        }
        for (let i = 0; i < parameterTokens.length; i++) {
          if (!parameterTokens[i]) continue
          if (i > 0) chunks.push({ name: ', ' })
          const parameter = parameterTokens[i].trim()
          const index = parameter.indexOf(' ')
          const link = this.tokenLink(parameter.substring(0, index))
          if (link) {
            chunks.push({
              link: link,
              name: parameter.substring(0, index)
            })
            chunks.push({ name: parameter.substring(index) })
          } else {
            chunks.push({ name: parameter })
          }
        }
        chunks.push({ name: ')' })
      } else {
        chunks.push({ name: declaration })
      }

      if (member.property) {
        let s = ' {'
        for (let i = 0; i < member.property.length; i++) {
          if (i > 0) s += '|'
          s += member.property[i]
        }
        s += '}'
        chunks.push({ name: s })
      }
      return chunks
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
        if (item.constructors) {
          this.memberSections.push({
            title: 'Constructors (' + item.constructors.length + ')',
            items: item.constructors,
            expanded: true,
            constructors: true
          })
        }
        if (item.values) {
          this.memberSections.push({
            title: 'Values',
            items: item.values,
            expanded: true,
            values: true
          })
        }
        if (item.properties) {
          this.memberSections.push({
            title: 'Properties (' + item.properties.length + ')',
            items: item.properties,
            expanded: true,
            properties: true
          })
          item.properties.forEach(m => ViewModel.getExamples(item, m))
        }
        if (item.methods) {
          this.memberSections.push({
            title: 'Methods (' + item.methods.length + ')',
            items: item.methods,
            expanded: true,
            methods: true
          })
          item.methods.forEach(m => ViewModel.getExamples(item, m))
        }
        if (item.events) {
          this.memberSections.push({
            title: 'Events (' + item.events.length + ')',
            items: item.events,
            expanded: true,
            events: true
          })
        }
        this.inheritence = ViewModel.getInheritence(item)
      }
    }
  }
}
</script>
