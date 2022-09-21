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
        dense
        node-key="path"
        selected-color="accent"
        v-model:selected="selectedNode"
        v-model:expanded="expanded"
        :duration="200"
      >
      <template v-slot:header-secondary="prop">
        <div class="row items-center">
          <div class="text-weight-light text-black toc-secondary-header" :class="prop.node.deprecated ? 'toc-deprecated' : ''">{{ prop.node.label }}</div>
        </div>
      </template>
      </q-tree>
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
      expanded: [],
      routePushEnabled: true
    }
  },
  created () {
    ViewModel.setSelectedItemChangedCallback('MainLayout.vue', this.onChangeSelectedItem)
  },
  methods: {
    onChangeSelectedItem (item, updateRoute) {
      const newSelectedNode = ViewModel.itemPath(item)
      console.log('onchangeselecteditem', item)
      if (newSelectedNode !== this.selectedNode) {
        this.routePushEnabled = updateRoute
        this.selectedNode = newSelectedNode
      }
      if (item.dataType !== 'namespace') {
        const expandedNamespace = item.namespace.toLowerCase()
        const expandedParents = item.parents || []
        const expandedNodes = [expandedNamespace, ...expandedParents]
        console.log("expanded Nodes:", expandedNodes)
        // for (let i = 0; i < this.expanded.length; i++) {
        //   if (this.expanded[1] === expandedNamespace) {
        //     return
        //   }
        // }
        this.expanded= [this.expanded, ...expandedNodes]
      }
    },
  },
  watch: {
    selectedNode: function (newState, oldState) {
      if (!this.watcherEnabled) return

      if (!newState) {
        const selectItem = this.$route.path.substring(this.baseUrl.length)
        if (selectItem) {
          this.watcherEnabled = false
          this.selectedNode = selectItem
          this.watcherEnabled = true
        }
        return
      }

      const updateRoute = this.routePushEnabled
      this.routePushEnabled = true
      if (!updateRoute) return

      // console.log(newState)

      const newPath = `${this.baseUrl}${newState}`.toLowerCase()

      if (this.$route.path.toLowerCase() === newPath) return
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

.toc-secondary-header{
  /* TODO: replace hardcoded width */
  max-width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.toc-deprecated{
  text-decoration: line-through;
}
</style>
