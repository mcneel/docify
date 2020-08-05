<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/>
        <q-toolbar-title>
          <q-btn no-caps size="lg" :to="baseUrl" :label="apiTitle + ' API'"/>
        </q-toolbar-title>
        <q-btn flat round
          :to="baseUrl + 'search'"
          icon="search"
        >
          <q-tooltip>Search</q-tooltip>
        </q-btn>
        <q-btn flat round
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
        >
          <q-tooltip>Toggle dark mode</q-tooltip>
        </q-btn>
        <q-btn dense flat no-caps size="md" class="q-pa-sm"
          :label="version"
          :to="baseUrl + 'whatsnew/' + version"
        >
          <q-tooltip>What's new in version {{version}}</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-tree
        class="q-pt-sm"
        :nodes="api"
        accordion
        node-key="path"
        selected-color="accent"
        :selected.sync="selectedNode"
        :expanded.sync="expanded"
        :duration="200"
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
      expanded: []
    }
  },
  created () {
    ViewModel.setSelectedItemChangedCallback('MainLayout.vue', this.onChangeSelectedItem)
  },
  methods: {
    onChangeSelectedItem (item) {
      console.log('onchangeselecteditem')
      const newSelectedNode = ViewModel.itemPath(item)
      if (newSelectedNode !== this.selectedNode) {
        this.selectedNode = newSelectedNode
      }
      if (item.dataType !== 'namespace') {
        const expandedNode = item.namespace.toLowerCase()
        for (let i = 0; i < this.expanded.length; i++) {
          if (this.expanded[1] === expandedNode) {
            return
          }
        }
        this.expanded.push(expandedNode)
      }
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

<style>
body.body--dark, .q-list--dark, .q-item--dark {
  color: #e6e6e6;
}

a.routerlink {
  color: #518ae7;
}

.q-item__label--caption {
  color: rgba(0,0,0,0.75);
}

.q-tree__node--selected {
  font-weight: bold;
}
</style>
