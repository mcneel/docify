<template>
  <q-page>
    <h1>New in RhinoCommon {{version}} - ({{memberCount}} new items)</h1>
    <q-separator/>
    <ul>
      <li v-for="type in api" :key="type.name">
        <router-link :to="itemPath(type)">{{type.name}}</router-link>
        <ul>
          <li v-for="constructor in type.constructors" :key="constructor.signature">{{constructor.signature}}</li>
          <li v-for="property in type.properties" :key="property.signature">{{property.signature}}</li>
          <li v-for="method in type.methods" :key="method.signature">{{method.signature}}</li>
        </ul>
      </li>
    </ul>
  </q-page>
</template>

<script>
import ViewModel from '../ViewModel'

export default {
  props: {
    baseUrl: { type: String }
  },
  data () {
    return {
      version: '0',
      memberCount: 0,
      api: []
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
        memberCount += type.constructors.length + type.properties.length + type.methods.length
      })
      this.memberCount = memberCount
    }
  }
}
</script>
