<template>
  <q-page>
    <div class="q-pa-sm">
    <q-breadcrumbs v-if="datatype" class="q-mb-sm" active-color="accent">
      <q-breadcrumbs-el icon="home" :to="baseUrl" />
      <q-breadcrumbs-el :label="datatype.namespace" :to="baseUrl + datatype.namespace.toLowerCase()" />
      <q-breadcrumbs-el :label="datatype.name" :to="(baseUrl + datatype.namespace + '.' + datatype.name).toLowerCase()" />
      <q-breadcrumbs-el :label="getTitle(datatype, members).split(' ')[0]" />
    </q-breadcrumbs>
    <h1>{{getTitle(datatype, members)}}</h1>
    <p v-if="datatype">
      Class:&nbsp;
      <router-link class="routerlink" :to="baseUrl+datatype.namespace.toLowerCase()+'.'+datatype.name.toLowerCase()">
        {{datatype.namespace}}.{{datatype.name}}
      </router-link>
    </p>
    <q-list class="q-mt-md">
      <div v-for="(member, index) in members.items" :key="index">
      <q-item>
        <q-item-section>
          <q-item-label v-if="member.deprecated" class="light-dimmed">
            {{member.signature}}
          </q-item-label>
          <q-item-label v-if="!member.deprecated">
            <span v-for="(chunk, idx) in signature(member)" :key="idx+1000">
              <span v-if="chunk.link">
                <router-link class="routerlink" :to="chunk.link">{{chunk.name}}</router-link>
              </span>
              <span v-else>{{chunk.name}}</span>
            </span>
          </q-item-label>
          <q-item-label caption class="on-right">
            <q-badge v-if="member.deprecated" outline color='negative'>deprecated in {{member.deprecated}}
              <q-tooltip>Deprecated in version {{member.deprecated}}</q-tooltip>
            </q-badge>
          </q-item-label>
          <q-item-label caption class="on-right">
            {{member.summary}}
          </q-item-label>
          <q-item-label caption class="on-right" v-for="parameter in member.parameters" :key="parameter.name">
            <b>{{parameter.name}}</b> - {{parameter.summary}}
          </q-item-label>
          <q-item-label caption class="on-right" v-if="member.returns">
            <b>Returns:</b> {{member.returns}}
          </q-item-label>
          <q-item-label caption class="on-right" v-if="member.since">
            <b>Available since:</b> {{member.since}}
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-if="member.examples && member.examples.length>0" dense class="on-right">
        <q-btn
          no-caps
          outline
          dense
          size="sm"
          icon="mdi-code-tags"
          color="secondary"
          :to="exampleUrl(member)"
          >
          Example
        </q-btn>
      </q-item>
      <q-separator spaced inset />
      </div>
    </q-list>
    </div>
  </q-page>
</template>

<script>
import ViewModel from '../ViewModel'
import Examples from '../api_examples.json'
import ProjInfo from '../proj_info.json'

export default {
  props: {
    baseUrl: { type: String }
  },
  data () {
    const mostRecent = ViewModel.mostRecentSince()
    return {
      memberName: null,
      datatype: null,
      members: {},
      version: mostRecent
    }
  },
  meta () {
    const node = ViewModel.findNodeByPath(this.$route.params.datatype)
    const memberName = this.$route.params.member.toLowerCase()
    const members = this.getMembers(node, memberName)
    const desc = node.name + '.' + this.getTitle(node, members)
    return {
      title: ProjInfo.name + ' API - ' + node.name + ' ' + node.dataType,
      meta: {
        description: { name: 'description', content: desc }
      }
    }
  },
  mounted () {
    console.log('mounted member detail')
    this.datatype = ViewModel.findNodeByPath(this.$route.params.datatype)
    this.memberName = this.$route.params.member.toLowerCase()
    const members = this.getMembers(this.datatype, this.memberName)
    members.items.forEach(m => this.getExamples(this.datatype, m))
    this.members = Object.freeze(members)
    ViewModel.setSelectedItem(this.datatype)
  },
  methods: {
    getMembers (datatype, memberName) {
      if (datatype.name.toLowerCase() === memberName) {
        datatype.constructors.sort((a, b) => {
          if (a.deprecated && !b.deprecated) return 1
          if (!a.deprecated && b.deprecated) return -1
          return 0
        })
        return {
          isConstructor: true,
          items: datatype.constructors
        }
      }
      if (datatype.properties) {
        const props = []
        for (let i = 0; i < datatype.properties.length; i++) {
          const prop = datatype.properties[i]
          const chunks = prop.signature.split(' ')
          const name = chunks[chunks.length - 1]
          if (name.toLowerCase() === memberName) props.push(prop)
        }
        if (props.length > 0) {
          props.sort((a, b) => {
            if (a.deprecated && !b.deprecated) return 1
            if (!a.deprecated && b.deprecated) return -1
            return 0
          })
          return {
            isProperty: true,
            items: props
          }
        }
      }
      if (datatype.methods) {
        const methods = []
        for (let i = 0; i < datatype.methods.length; i++) {
          const m = datatype.methods[i]
          const index = m.signature.indexOf('(')
          const chunks = m.signature.substring(0, index).split(' ')
          const name = chunks[chunks.length - 1]
          if (name.toLowerCase() === memberName) methods.push(m)
        }
        if (methods.length > 0) {
          methods.sort((a, b) => {
            if (a.deprecated && !b.deprecated) return 1
            if (!a.deprecated && b.deprecated) return -1
            return 0
          })
          return {
            isMethod: true,
            items: methods
          }
        }
      }
      if (datatype.events) {
        const events = []
        for (let i = 0; i < datatype.events.length; i++) {
          const event = datatype.events[i]
          const chunks = event.signature.split(' ')
          const name = chunks[chunks.length - 1]
          if (name.toLowerCase() === memberName) events.push(event)
        }
        if (events.length > 0) {
          events.sort((a, b) => {
            if (a.deprecated && !b.deprecated) return 1
            if (!a.deprecated && b.deprecated) return -1
            return 0
          })
          return {
            isEvent: true,
            items: events
          }
        }
      }

      return {}
    },
    getTitle (datatype, members) {
      if (members.isConstructor) {
        return datatype.name + ' constructor'
      }
      if (members.isProperty) {
        const chunks = members.items[0].signature.split(' ')
        return chunks[chunks.length - 1] + ' property'
      }
      if (members.isMethod) {
        const name = members.items[0].signature
        const index = name.indexOf('(')
        const chunks = name.substring(0, index).split(' ')
        return chunks[chunks.length - 1] + ' method'
      }
      if (members.isEvent) {
        const chunks = members.items[0].signature.split(' ')
        return chunks[chunks.length - 1] + ' event'
      }
      return this.memberName
    },
    tokenLink (token) {
      // skip tokens that start with a lower case letter
      if (token.length < 1 || token[0] === token[0].toLowerCase()) return null
      if (token.endsWith('[]')) token = token.substring(0, token.length - 2)
      if (token === this.datatype.name) return null
      const typeMap = ViewModel.getTypeMap()
      const type = typeMap[token]
      if (!type) return null
      return this.baseUrl + ViewModel.itemPath(type)
    },
    signature (member) {
      const tokens = member.signature.split(' ')
      const chunks = []
      if (tokens[0] === 'static') {
        chunks.push({ name: tokens[0] + ' ' })
        tokens.shift()
      }
      if (this.members.isEvent) {
        chunks.push({ name: tokens[0] })
        return chunks
      }
      if (this.members.isProperty || this.members.isMethod) {
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
          if (parameterTokens[i].indexOf('<') > 0 && i < (parameterTokens.length - 1)) {
            parameterTokens[i] = parameterTokens[i] + ',' + parameterTokens[i + 1]
            parameterTokens[i + 1] = ''
          }
        }
        for (let i = 0; i < parameterTokens.length; i++) {
          if (!parameterTokens[i]) continue
          if (i > 0) chunks.push({ name: ', ' })
          const parameter = parameterTokens[i].trim()
          const paramChunks = parameter.split(' ')
          const typeToken = paramChunks[paramChunks.length - 2]
          const link = this.tokenLink(typeToken)
          if (link) {
            for (let j = 0; j < paramChunks.length - 2; j++) {
              chunks.push({ name: paramChunks[j] + ' ' })
            }
            chunks.push({
              link: link,
              name: typeToken + ' '
            })
            chunks.push({ name: paramChunks[paramChunks.length - 1] })
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
    getExamples (parentType, item) {
      if (!item.examples) {
        item.examples = []
        let fullname = null
        if (parentType.namespace) fullname = parentType.namespace + '.' + parentType.name
        else fullname = parentType.name
        Examples.forEach(example => {
          example.members.forEach(member => {
            const type = member[0]
            if (fullname === type) {
              const signature = member[1]
              if (signature === item.signature) {
                item.examples.push(example)
              }
            }
          })
        })
        item.examples = Object.freeze(item.examples)
      }
      return item.examples
    }
  }
}
</script>
