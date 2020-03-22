<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/>
        <q-toolbar-title>RhinoCommon API</q-toolbar-title>
        <!--
        <q-select
          bg-color="white"
          color="black"
          dense
          hide-dropdown-icon
          clearable
          v-model="model"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          :options="options"
          style="width: 150px;"
          @input="onInput"
          @filter="filterFn"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                No results
              </q-item-section>
            </q-item>
          </template>
        </q-select>
        -->
        <q-btn dense flat no-caps size="md" class="q-pa-sm"
          :label="'v' + version"
          :to="'/whatsnew/' + version"
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
  name: 'MainLayout',
  data () {
    const vm = ViewModel.getTree()
    const mostRecent = ViewModel.mostRecentSince().toFixed(1)
    const inputOptions = ViewModel.getOptionsList()
    return {
      leftDrawerOpen: false,
      api: vm,
      selectedNode: [],
      watcherEnabled: true,
      version: mostRecent,
      model: null,
      options: inputOptions,
      filter: '',
      expanded: []
    }
  },
  created () {
    ViewModel.setSelectedItemChangedCallback('MainLayout.vue', this.onChangeSelectedItem)
  },
  methods: {
    onInput (value) {
      if (ViewModel.getOptionsList().includes(value)) {
        this.model = ''
        this.selectedNode = value
      }
      // console.log(value)
    },
    onChangeSelectedItem (item) {
      this.watcherEnabled = false
      this.selectedNode = item.name
      this.watcherEnabled = true
    },
    filterFn (val, update) {
      update(() => {
        if (val === '') {
          this.options = ViewModel.getOptionsList()
        } else {
          const needle = val.toLowerCase()
          this.options = ViewModel.getOptionsList().filter(
            v => v.toLowerCase().indexOf(needle) > -1
          )
        }
      })
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
        const selectItem = this.$router.currentRoute.path.substring(1)
        if (selectItem) {
          this.watcherEnabled = false
          this.selectedNode = selectItem
          this.watcherEnabled = true
        }
        return
      }

      console.log(newState)
      const newPath = '/' + newState
      if (this.$router.currentRoute.path === newPath) return
      this.$router.push(newPath)
      ViewModel.setSelectedItem(newState)
    }
  }
}
</script>
