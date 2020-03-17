<template>
  <q-page>
    <h1>New in RhinoCommon {{version}} - ({{memberCount}} new items)</h1>
    <q-list bordered class="rounded-borders q-mt-md">
      <q-expansion-item v-for="type in api"
        :key="type.name"
        expand-separator
        switch-toggle-side
        dense
        dense-toggle
        :label="type.name"
        :content-inset-level="1"
      >
        <q-item v-for="constructor in type.constructors" :key="constructor.signature">
          {{constructor.signature}}
        </q-item>
        <q-item v-for="property in type.properties" :key="property.signature">
          {{property.signature}}
        </q-item>
        <q-item v-for="method in type.methods" :key="method.signature">
          {{method.signature}}
        </q-item>
      </q-expansion-item>
    </q-list>
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
