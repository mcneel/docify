<template>
  <q-page>
    <h1>New in RhinoCommon {{version.toFixed(1)}} - ({{memberCount}} new items)</h1>
    <q-separator/>
    <ul>
      <li v-for="type in api" :key="type.name">
        {{type.name}}
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
  data () {
    return {
      version: null,
      memberCount: 0,
      api: []
    }
  },
  mounted () {
    if (this.$route.params && this.$route.params.version) {
      console.log('mounted whatsnew')
      this.version = parseFloat(this.$route.params.version)
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
