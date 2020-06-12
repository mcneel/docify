<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/>
        <q-toolbar-title>
          <q-btn no-caps size="lg" :to="baseUrl" :label="apiTitle + ' API'"/>
        </q-toolbar-title>
        <q-btn dense flat no-caps size="md" class="q-pa-sm"
          :label="'v' + version"
          :to="baseUrl + 'whatsnew/' + version"
        >
          <q-tooltip>What's new in v{{version}}</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-input class="q-pa-md q-gutter-sm" ref="filter" filled v-model="filter" label="Filter">
        <template v-slot:append>
          <q-icon v-if="filter !== ''" name="clear" class="cursor-pointer" @click="resetFilter" />
        </template>
      </q-input>
      <q-tree
        :nodes="api"
        accordion
        node-key="path"
        selected-color="accent"
        :selected.sync="selectedNode"
        :expanded.sync="expanded"
        :duration="200"
        :filter="filter"
        :filter-method="nodeFilter"
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
  props: {
    apiTitle: { type: String },
    baseUrl: { type: String }
  },
  data () {
    const vm = ViewModel.getTree()
    const mostRecent = ViewModel.mostRecentSince()
    return {
      leftDrawerOpen: false,
      api: vm,
      selectedNode: [],
      watcherEnabled: true,
      version: mostRecent,
      model: null,
      filter: '',
      expanded: []
    }
  },
  created () {
    ViewModel.setSelectedItemChangedCallback('MainLayout.vue', this.onChangeSelectedItem)
  },
  methods: {
    onChangeSelectedItem (item) {
      this.watcherEnabled = false
      this.selectedNode = ViewModel.itemPath(item)
      this.watcherEnabled = true
    },
    nodeFilter (node, filter) {
      const filt = filter.toLowerCase()
      const passesTest = node.label && node.label.toLowerCase().indexOf(filt) > -1
      if (passesTest && !node.children) {
        const ns = node.path.substring(0, node.path.length - node.label.length - 1)
        let pushit = true
        this.expanded.forEach(name => {
          if (name === ns) pushit = false
        })
        if (pushit) this.expanded.push(ns)
      }
      return passesTest
    },
    resetFilter () {
      this.filter = ''
      this.expanded = []
      this.$refs.filter.focus()
    }
  },
  watch: {
    selectedNode: function (newState, oldState) {
      if (!this.watcherEnabled) return

      if (!newState) {
        const selectItem = this.$router.currentRoute.path.substring(this.baseUrl.length)
        if (selectItem) {
          this.watcherEnabled = false
          this.selectedNode = selectItem
          this.watcherEnabled = true
        }
        return
      }

      // console.log(newState)
      const newPath = this.baseUrl + newState.toLowerCase()
      if (this.$router.currentRoute.path.toLowerCase() === newPath) return
      this.$router.push(newPath)
      ViewModel.setSelectedItem(newState)
    }
  }
}
</script>
