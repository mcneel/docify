<template>
    <q-layout view="hHh Lpr lff">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />
          <q-toolbar-title>
            <q-btn no-caps size="lg" :to="baseUrl" :label="apiTitle + ' API'" />
          </q-toolbar-title>
          <q-btn flat round :to="baseUrl + 'search'" icon="search">
            <q-tooltip>Search</q-tooltip>
          </q-btn>
          <q-btn flat round @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'">
            <q-tooltip>Toggle dark mode</q-tooltip>
          </q-btn>
          <q-btn dense flat no-caps size="md" class="q-pa-sm" :label="version" :to="baseUrl + 'whatsnew/' + version">
            <q-tooltip>What's new in version {{ version }}</q-tooltip>
          </q-btn>
        </q-toolbar>
      </q-header>
      <q-drawer v-model="leftDrawerOpen" behavior="desktop" show-if-above bordered id="myDrawer">
        <q-tree class="q-pt-sm" :nodes="api" accordion dense node-key="path" selected-color="accent"
          v-model:selected="selectedNode" v-model:expanded="expanded" :duration="200" @lazy-load="onLazyLoad">
          <template v-slot:header-secondary="prop">
            <div class="row items-center">
              <div :id="`TOC:${prop.node.path}`" class="text-weight-light toc-secondary-header"
                :class="prop.node.deprecated ? 'toc-deprecated' : ''">{{ prop.node.label }}</div>
            </div>
          </template>
        </q-tree>
        <div v-touch-pan.preserveCursor.prevent.mouse.horizontal="resizeDrawer" class="q-drawer__resizer"></div>
      </q-drawer>

      <q-page-container id="myPage">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ViewModel from '../ViewModel'

let initialDrawerWidth;

export default {
  props: {
    apiTitle: { type: String },
    baseUrl: { type: String }
  },
  data() {
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
      routePushEnabled: true,
    }
  },
  created() {
    ViewModel.setSelectedItemChangedCallback('MainLayout.vue', this.onChangeSelectedItem)
  },
  methods: {
    // onExpandComplete(expanded) {
    //   console.log("expand:", `TOC:${this.selectedNode}`)
    //   //TODO: scrollto selectedNode
    //   const el = document.getElementById(`TOC:${this.selectedNode}`)
    //   console.log("ELLLL:", el)
    //   if (el) {
    //     console.log("EL:", el)
    //     el.scrollIntoView()
    //   }
    // },
    resizeDrawer(ev) {
      const drawerEl = document.getElementById("myDrawer");
      const drawerParent = drawerEl.parentElement;
      if (ev.isFirst === true) {
        initialDrawerWidth = parseInt(drawerParent.style.width);
      }
      const newWidth = `${initialDrawerWidth + ev.offset.x}px`;;
      drawerParent.style.width = newWidth;
      const pageEl = document.getElementById("myPage");
      pageEl.style.paddingLeft = newWidth;
    },
    onChangeSelectedItem(item, updateRoute) {
      const newSelectedNode = ViewModel.itemPath(item)
      console.log('onchangeselecteditem')
      if (newSelectedNode !== this.selectedNode) {
        this.routePushEnabled = updateRoute
        this.selectedNode = newSelectedNode
      }
      if (item.dataType !== 'namespace') {
        const expandedNamespace = item.namespace.toLowerCase()
        const expandedParents = item.parents || []
        const expandedNodes = [expandedNamespace, ...expandedParents]
        // for (let i = 0; i < this.expanded.length; i++) {
        //   if (this.expanded[1] === expandedNamespace) {
        //     return
        //   }
        // }
        this.expanded = [this.expanded, ...expandedNodes]
      }
      // const el = document.getElementById(`TOC:${newSelectedNode}`)
      // if (el) {
      //   el.scrollIntoView()
      // }
      // console.log(`TOC:${newSelectedNode}`, el)
    },
    onLazyLoad({ node, key, done, fail }) {
      const childNodes = ViewModel.lazyChildForPath(node.path);
      done(childNodes);
    }
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

      const newPath = `${this.baseUrl}${newState}`.toLowerCase()

      console.log("selected:", newState)

      if (this.$route.path.toLowerCase() === newPath) return
      this.$router.push(newPath)
      ViewModel.setSelectedItem(newState)
    }
  }
}
</script>

<style>
body.body--dark,
.q-list--dark,
.q-item--dark {
  color: #e6e6e6;
}

a.routerlink {
  color: #518ae7;
}

.q-item__label--caption {
  color: rgba(0, 0, 0, 0.75);
}

.q-tree__node--selected {
  font-weight: bold;
}

.toc-secondary-header {
  /* max-width: 220px; */
  /* overflow: hidden; */
  white-space: nowrap;
  /* text-overflow: ellipsis; */
}

.toc-deprecated {
  text-decoration: line-through;
}

.q-drawer__resizer {
  position: absolute;
  top: 0;
  bottom: 0;
  right: -2px;
  width: 4px;
  cursor: ew-resize;
}
</style>
