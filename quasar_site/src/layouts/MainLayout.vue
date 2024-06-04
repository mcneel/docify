<template>
    <q-layout view="hHh Lpr lff">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />
          <q-toolbar-title>
            <q-btn no-caps size="lg" :to="baseUrl">
              <q-avatar left class="q-mr-md">
                <img style="width:fit-content;" src="/api/rhinocommon/rhinodevlogo.png">
              </q-avatar>
              <div>{{apiTitle + ' API'}}</div>
            </q-btn>
          </q-toolbar-title>
          <q-input dark dense standout v-model="searchText" label="search" debounce="200">
            <template v-slot:append>
              <q-icon color="white" name="search" />
            </template>
          </q-input>
          <q-btn-dropdown color="primary" :label="`V${filterVersion.split('.')[0]} and older`" class="q-ml-sm">
            <q-list>
              <q-item v-for="version in ['8.x','7.x','6.x','5.x']" :key="version" clickable v-close-popup @click="onChangeVersionFilter(version)">
                <q-item-section>
                  <q-item-label>{{ version.split(".")[0] }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn v-if="filterVersion.split('.')[0]== version.split('.')[0]" dense flat no-caps size="md" class="q-pa-sm" icon="new_releases" :to="baseUrl + 'whatsnew/' + version">
            <q-tooltip>What's new in version {{ version }}</q-tooltip>
          </q-btn>
          <q-btn flat round @click="toggleDarkMode()" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'">
            <q-tooltip>Toggle dark mode</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-banner v-if="bannerVisible" inline-actions dense class="bg-blue text-white">
          {{ apiTitle }} documentation has a new look. The old site can still be found <span><a
              href="https://mcneel.github.io/rhinocommon-api-docs/api/RhinoCommon/">here</a></span>.
          <template v-slot:action>
            <q-btn flat label="Close" @click="bannerVisible = false" />
          </template>
        </q-banner>
      </q-header>
      <q-drawer v-model="leftDrawerOpen" behavior="desktop" show-if-above bordered id="myDrawer" :width="drawerWidth"
        @mouseover="() => shouldAutoScroll = false" @mouseout="() => shouldAutoScroll = true">
        <q-tree no-transition ref=myTree :nodes="api" accordion dense node-key="path" selected-color="accent" :filter="filterVersion" :filter-method="filterTocByVersion"
          v-model:selected="selectedNode" v-model:expanded="expanded" :duration="200" @lazy-load="onLazyLoad">
          <template v-slot:default-header="prop" >
            <div class="row items-center">
              <a :id="`TOC:${prop.node.path}`" :class="prop.node.deprecated ? 'toc-deprecated' : ''" >{{ prop.node.label }}
              </a>
            </div>
          </template>
          <template v-slot:header-secondary="prop">
            <div class="row items-center">
                <router-link :id="`TOC:${prop.node.path}`" class="toc-secondary-header"
                  style="text-decoration: none; color: inherit;" :class="prop.node.deprecated ? 'toc-deprecated' : ''"
                  :to="baseUrl + prop.node.path.toLowerCase()" ><span>{{ prop.node.label }}</span>
                  <!--<span class="text-weight-light">{{ prop.node.labelSecondary }}</span>--> <!--hiding overloads: WWW-2046-->
                </router-link>
            </div>
          </template>
        </q-tree>
        <div v-touch-pan.preserveCursor.prevent.mouse.horizontal="resizeDrawer" class="q-drawer__resizer"></div>
      </q-drawer>
      <q-page-container id="pageContainer">
        <router-view v-show="!searchText" />
        <SearchPage :query="searchText" :base-url="baseUrl" v-show="searchText" />
      </q-page-container>
  </q-layout>
</template>

<script>
import ViewModel from '../ViewModel'
import SearchPage from 'src/pages/SearchPage.vue';
import { scroll } from 'quasar'
import { useQuasar } from 'quasar'
const { getScrollTarget } = scroll

let initialDrawerWidth;

export default {
  props: {
    apiTitle: { type: String },
    baseUrl: { type: String }
  },
  data() {
    const mostRecent = ViewModel.mostRecentSince();
    ViewModel.setMaxVersion(mostRecent);
    const vm = ViewModel.getTree(mostRecent);
    const $q = useQuasar();
    return {
      leftDrawerOpen: false,
      drawerWidth: 300,
      api: vm,
      selectedNode: [],
      watcherEnabled: true,
      version: mostRecent,
      model: null,
      expanded: [],
      routePushEnabled: true,
      searchText: "",
      shouldAutoScroll: true,
      bannerVisible: true,
      filterVersion: `${mostRecent.split(".")[0]}.x`,
      $q
    };
  },
  created() {
    ViewModel.setSelectedItemChangedCallback("MainLayout.vue", this.onChangeSelectedItem);
  },
  mounted() {
    if (this.$route.query.version){
        this.onChangeVersionFilter(this.$route.query.version);
    }
      const wasDark = localStorage.getItem('darkMode');
      if (this.$q.dark.isActive.toString() != wasDark){
        this.$q.dark.toggle()
      }
  },
  methods: {
    onChangeVersionFilter (item) {
      this.filterVersion = item;
      if (this.$route.query["version"] != item){
        ViewModel.resetTree();
        ViewModel.setMaxVersion(item);
        this.api = ViewModel.getTree();
        this.$router.push({ query: { version: item } }).then( () =>{
          window.location.reload(); //
        })
      }
    },
    filterTocByVersion (node, filter) {
        if(node.since){
          return !ViewModel.sinceIsGreater(node.since, filter)
        }
        return true
    },
    resizeDrawer(ev) {
      const drawerEl = document.getElementById("myDrawer");
      const drawerParent = drawerEl.parentElement;
      if (ev.isFirst === true) {
        initialDrawerWidth = parseInt(drawerParent.style.width);
      }
      //Don't update the props on every frame, this is very slow, update css instead
      const newWidth = `${initialDrawerWidth + ev.offset.x}px`;
      ;
      drawerParent.style.width = newWidth;
      const pageEl = document.getElementById("pageContainer");
      pageEl.style.paddingLeft = newWidth;
      //Finally update the prop
      if (ev.isFinal === true) {
        this.drawerWidth = initialDrawerWidth + ev.offset.x;
      }
    },
    onChangeSelectedItem(item, updateRoute) {
      const newSelectedNode = ViewModel.itemPath(item);
      if (newSelectedNode !== this.selectedNode) {
        this.routePushEnabled = updateRoute;
        this.selectedNode = newSelectedNode;
      }
      if (item.dataType !== "namespace") {
        const expandedNamespace = item.namespace.toLowerCase();
        const expandedParents = item.parents || [];
        const expandedNodes = [expandedNamespace, ...expandedParents];
        // for (let i = 0; i < this.expanded.length; i++) {
        //   if (this.expanded[1] === expandedNamespace) {
        //     return
        //   }
        // }
        this.expanded = [...this.expanded, ...expandedNodes];
      }
    },
    onLazyLoad({ node, key, done, fail }) {
      const childNodes = ViewModel.lazyChildForPath(node.path, this.filterVersion);
      done(childNodes);
    },
    toggleDarkMode(){
      console.log("toggling")
      this.$q.dark.toggle();
      localStorage.setItem('darkMode', this.$q.dark.isActive)
    }
  },
  watch: {
    selectedNode: function (newState, oldState) {
      console.log("node selected:", newState)
      const node = this.$refs.myTree.getNodeByKey(newState);

      //Set scoll height when selected. only doing this on fresh load
      if (this.shouldAutoScroll) {
        this.$nextTick(() => {
          const el = document.getElementById(`TOC:${node.path}`)
          if (el) {
            el.scrollIntoView({
              behavior: 'auto',
              block: 'center',
              inline: 'center'
            })
            const target = getScrollTarget(el);
            target.scrollLeft = 0;
          }
        })
      }

      if (!this.watcherEnabled)
        return;
      if (!newState) {
        const selectItem = this.$route.fullPath.substring(this.baseUrl.length);
        if (selectItem) {
          this.watcherEnabled = false;
          this.selectedNode = selectItem;
          this.watcherEnabled = true;
        }
        return;
      }
      const updateRoute = this.routePushEnabled;
      this.routePushEnabled = true;
      if (!updateRoute)
        return;
      const newPath = `${this.baseUrl}${newState}`.toLowerCase();

      if (this.$route.path.toLowerCase() !== newPath) {
        this.$router.push(newPath);
      }
      ViewModel.setSelectedItem(newState);

      if (!this.expanded.includes[newState]) {
        this.expanded = [...this.expanded, newState];
      }
    },
    searchText(val) {
      if (val) {
        this.$router.push({ query: { search: val } })
      }
      else {
        this.$router.push({ query: {} })
      }
    },
    $route(to, from) {
      if (to.path !== from.path) {
        this.searchText = "";
      }
      if (to.query["search"]) {
        this.searchText = to.query["search"];
      }
      else {
        this.searchText = "";
      }
    }
  },
  components: { SearchPage }
}
</script>

<style>
body.body--dark,
.q-list--dark,
.q-item--dark {
  color: #e6e6e6;
}

a.routerlink {
  color: #1364c4;
  text-decoration: none;
}
body.body--dark a.routerlink {
  color:  #2196f3;
}

.disabledLink {
  color: #1364c4;
}
body.body--dark .disabledLink {
  color:  #2196f3;
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
