<template>
  <q-page>
    <h4>RhinoCommon Namespaces</h4>
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
      vm: tree
    }
  },
  methods: {
    setSelectedItem (name) {
      this.$router.push('/' + name)
      ViewModel.setSelectedItem(name)
    }
  }
}
</script>
