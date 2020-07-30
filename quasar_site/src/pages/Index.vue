<template>
  <q-page>
    <h1>Namespaces</h1>
      <q-item clickable v-for="item in vm" :key="item.label" @click="setSelectedItem(item.path)">
        <q-item-section avatar><q-icon :name="item.icon"/></q-item-section>
        <q-item-section>
          <q-item-label>{{item.label}}</q-item-label>
          <q-item-label caption>{{item.summary}}</q-item-label>
        </q-item-section>
      </q-item>
  </q-page>
</template>

<script>
import ViewModel from '../ViewModel'

export default {
  props: {
    baseUrl: { type: String }
  },
  data () {
    const tree = ViewModel.getTree()
    return {
      vm: tree
    }
  },
  meta () {
    return {
      title: 'RhinoCommon API',
      meta: {
        description: { name: 'description', content: 'API Reference for types, members, and examples in RhinoCommon' }
      }
    }
  },
  methods: {
    setSelectedItem (name) {
      this.$router.push(this.baseUrl + name.toLowerCase())
      ViewModel.setSelectedItem(name)
    }
  }
}
</script>
