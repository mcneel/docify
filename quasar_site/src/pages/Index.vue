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
  data () {
    const tree = ViewModel.getTree()
    return {
      vm: tree,
      apiBase: '/'
    }
  },
  methods: {
    setSelectedItem (name) {
      this.$router.push(this.apiBase + name.toLowerCase())
      ViewModel.setSelectedItem(name)
    }
  }
}
</script>
