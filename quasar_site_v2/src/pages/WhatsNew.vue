<template>
  <q-page>
    <h1>New in {{apiTitle}} {{version}} - ({{memberCount}} new items)</h1>
    <q-separator/>
    <ul>
      <li v-for="type in api" :key="type.name">
        <router-link class="routerlink" :to="itemPath(type)">{{type.namespace}}.{{type.name}}</router-link>
        <ul>
          <li v-for="constructor in type.constructors" :key="constructor.signature">
            <q-badge v-if="constructor.deprecated" outline color='negative'>deprecated</q-badge>
            {{constructor.signature}}
          </li>
          <li v-for="property in type.properties" :key="property.signature">
            <q-badge v-if="property.deprecated" outline color='negative'>deprecated</q-badge>
            {{property.signature}}
          </li>
          <li v-for="method in type.methods" :key="method.signature">
            <q-badge v-if="method.deprecated" outline color='negative'>deprecated</q-badge>
            {{method.signature}}
          </li>
          <li v-for="value in type.values" :key="value.signature">
            <q-badge v-if="value.deprecated" outline color='negative'>deprecated</q-badge>
            {{value.signature}}
          </li>
        </ul>
      </li>
    </ul>
  </q-page>
</template>

<script>
import ViewModel from '../ViewModel'
import ProjInfo from '../proj_info.json'

export default {
  props: {
    apiTitle: { type: String },
    baseUrl: { type: String }
  },
  data () {
    return {
      version: '0',
      memberCount: 0,
      api: []
    }
  },
  meta () {
    const desc = 'What\'s new in ' + ProjInfo.name + ' version ' + this.version
    return {
      title: ProjInfo.name + ' API - What\'s New',
      meta: {
        description: { name: 'description', content: desc }
      }
    }
  },
  methods: {
    itemPath (item) {
      return this.baseUrl + ViewModel.itemPath(item)
    }
  },
  mounted () {
    if (this.$route.params && this.$route.params.version) {
      console.log('mounted whatsnew')
      this.version = this.$route.params.version
      this.api = ViewModel.getFilteredApi(this.version)
      let memberCount = 0
      this.api.forEach(type => {
        memberCount += type.constructors.length +
         type.properties.length +
         type.methods.length +
         type.values.length
      })
      this.memberCount = memberCount
    }
  }
}
</script>
