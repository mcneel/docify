<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/>
        <q-toolbar-title>RhinoCommon API</q-toolbar-title>
        <!--
        <q-input dense standout bg-color="white" color="black" v-model="text">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
        -->
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
        <div class="q-pa-sm">v{{version}}</div>
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
    const mostRecent = ViewModel.mostRecentSince().toFixed(1)
    const inputOptions = ViewModel.getOptionsList()
    return {
      leftDrawerOpen: false,
      api: vm,
      selectedNode: [],
      watcherEnabled: true,
      version: mostRecent,
      model: null,
      options: inputOptions
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
