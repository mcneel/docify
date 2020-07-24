<template>
  <q-page>
    <h1>{{getTitle()}}</h1>
    <p v-if="datatype">
      Class:&nbsp;
      <router-link :to="baseUrl+datatype.namespace.toLowerCase()+'.'+datatype.name.toLowerCase()">
        {{datatype.namespace}}.{{datatype.name}}
      </router-link>
    </p>
    <q-list bordered class="rounded-borders q-mt-md">
      <q-item v-for="(member, index) in members.items" :key="index">
        <q-item-section>
          <q-item-label>
            <span v-for="(chunk, idx) in signature(member)" :key="idx+1000">
              <span v-if="chunk.link">
                <router-link :to="chunk.link">{{chunk.name}}</router-link>
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
      memberName: null,
      datatype: null,
      members: {},
      version: mostRecent
    }
  },
  mounted () {
    console.log('mounted member detail')
    this.datatype = ViewModel.findNodeByPath(this.$route.params.datatype)
    this.memberName = this.$route.params.member.toLowerCase()
    this.members = Object.freeze(this.getMembers())
  },
  methods: {
    getMembers () {
      if (this.datatype.name.toLowerCase() === this.memberName) {
        return {
          isConstructor: true,
          items: this.datatype.constructors
        }
      }
      if (this.datatype.properties) {
        const props = []
        for (let i = 0; i < this.datatype.properties.length; i++) {
          const prop = this.datatype.properties[i]
          const chunks = prop.signature.split(' ')
          const name = chunks[chunks.length - 1]
          if (name.toLowerCase() === this.memberName) props.push(prop)
        }
        if (props.length > 0) {
          return {
            isProperty: true,
            items: props
          }
        }
      }
      if (this.datatype.methods) {
        const methods = []
        for (let i = 0; i < this.datatype.methods.length; i++) {
          const m = this.datatype.methods[i]
          const index = m.signature.indexOf('(')
          const chunks = m.signature.substring(0, index).split(' ')
          const name = chunks[chunks.length - 1]
          if (name.toLowerCase() === this.memberName) methods.push(m)
        }
        if (methods.length > 0) {
          return {
            isMethod: true,
            items: methods
          }
        }
      }
      if (this.datatype.events) {
        const events = []
        for (let i = 0; i < this.datatype.events.length; i++) {
          const event = this.datatype.events[i]
          const chunks = event.signature.split(' ')
          const name = chunks[chunks.length - 1]
          if (name.toLowerCase() === this.memberName) events.push(event)
        }
        if (events.length > 0) {
          return {
            isEvent: true,
            items: events
          }
        }
      }

      return {}
    },
    getTitle () {
      if (this.members.isConstructor) {
        return this.datatype.name + ' constructor'
      }
      if (this.members.isProperty) {
        const chunks = this.members.items[0].signature.split(' ')
        return chunks[chunks.length - 1] + ' property'
      }
      if (this.members.isMethod) {
        const name = this.members.items[0].signature
        const index = name.indexOf('(')
        const chunks = name.substring(0, index).split(' ')
        return chunks[chunks.length - 1] + ' method'
      }
      if (this.members.isEvent) {
        const chunks = this.members.items[0].signature.split(' ')
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
    }
  }
}
</script>
