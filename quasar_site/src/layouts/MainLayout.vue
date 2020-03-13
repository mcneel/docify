<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/>
        <q-toolbar-title>RhinoCommon API</q-toolbar-title>
        <div>v7.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-3"
    >
      <q-tree
        :nodes="api"
        node-key="path"
        selected-color="accent"
        :selected.sync="selectedNode"
        :expanded.sync="expandedNode"
      />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ViewModel from '../ViewModel'

export default {
  name: 'MainLayout',
  data () {
    const vm = ViewModel.getTree()
    return {
      leftDrawerOpen: false,
      api: [vm],
      selectedNode: [],
      expandedNode: ['Rhino']
    }
  },
  watch: {
    selectedNode: function (newState, oldState) {
      ViewModel.setSelectedItem(newState)
    }
  }
}
</script>
