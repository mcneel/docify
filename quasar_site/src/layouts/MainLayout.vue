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
      <q-scroll-area class="fit">
        <q-tree
        :nodes="api"
        accordion
        node-key="path"
        selected-color="accent"
        :selected.sync="selectedNode"
        :duration="200"
        />
      </q-scroll-area>
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
      api: vm,
      selectedNode: [],
      watcherEnabled: true
    }
  },
  created () {
    ViewModel.setSelectedItemChangedCallback('MainLayout.vue', this.onChangeSelectedItem)
  },
  methods: {
    onChangeSelectedItem (item) {
      this.watcherEnabled = false
      this.selectedNode = item.name
      this.watcherEnabled = true
    }
  },
  watch: {
    selectedNode: function (newState, oldState) {
      if (this.watcherEnabled && newState) {
        console.log(newState)
        this.$router.push('/' + newState)
        ViewModel.setSelectedItem(newState)
      }
    }
  }
}
</script>
