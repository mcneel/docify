<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMediaQuery } from '@vueuse/core'
import { useApiData } from '@/composables/useApiData'
import { useApiStore } from '@/stores/api'
import { useSettingsStore } from '@/stores/settings'
import { useSelectionStore } from '@/stores/selection'
import { useSearchStore } from '@/stores/search'
import AppHeader from '@/components/AppHeader.vue'
import NavTree from '@/components/NavTree.vue'
import SearchOverlay from '@/components/SearchOverlay.vue'

const props = defineProps({ baseUrl: { type: String, default: '/' } })

const route = useRoute()
const router = useRouter()
const { status } = useApiData()
const apiStore = useApiStore()
const apiTitleText = computed(() => apiStore.projectInfo?.name || 'RhinoCommon')
const settings = useSettingsStore()
const selection = useSelectionStore()
const search = useSearchStore()

const isDesktop = useMediaQuery('(min-width: 1024px)')
// Open by default on desktop, closed (slide-over) on mobile.
const drawerOpen = ref(isDesktop.value)
const showChrome = computed(() => !settings.forScriptEditor)
const asideStyle = computed(() => (isDesktop.value ? { width: settings.drawerWidth + 'px' } : {}))

// ---- Query-param hydration (dark / inherited / plain), per route ----
function hydrate(q) {
  settings.hydrateDarkFromQuery(q)
  if ('inherited' in q) settings.showInherited = q.inherited === 'true'
  if (q.plain) settings.forScriptEditor = true
}
onMounted(() => hydrate(route.query))
watch(() => route.query, (q) => hydrate(q))

// ---- Search <-> URL sync (overlay shown when search.query is non-empty) ----
watch(() => route.query.search, (s) => (search.query = s || ''), { immediate: true })
watch(() => route.path, () => (search.query = ''))
watch(
  () => search.query,
  (v) => {
    const cur = route.query.search || ''
    if (v === cur) return
    if (v) router.push({ query: { ...route.query, search: v } })
    else {
      const q = { ...route.query }
      delete q.search
      router.push({ query: q })
    }
  }
)

// close mobile drawer on navigation
watch(() => route.fullPath, () => {
  if (!isDesktop.value) drawerOpen.value = false
})
// reset default visibility when crossing the desktop/mobile breakpoint
watch(isDesktop, (d) => {
  drawerOpen.value = d
})

// ---- Drawer resize (desktop) ----
let startX = 0
let startW = 0
function startResize(e) {
  startX = e.clientX
  startW = settings.drawerWidth
  window.addEventListener('pointermove', onResize)
  window.addEventListener('pointerup', endResize)
}
function onResize(e) {
  settings.drawerWidth = Math.min(600, Math.max(180, startW + (e.clientX - startX)))
}
function endResize() {
  window.removeEventListener('pointermove', onResize)
  window.removeEventListener('pointerup', endResize)
}
</script>

<template>
  <div class="min-h-screen">
    <AppHeader v-if="showChrome" :base-url="baseUrl" @toggle-drawer="drawerOpen = !drawerOpen" />

    <div class="flex">
      <!-- Backdrop for mobile drawer -->
      <div
        v-if="showChrome && drawerOpen && !isDesktop"
        class="fixed inset-0 top-14 z-30 bg-black/40"
        @click="drawerOpen = false"
      />

      <aside
        v-if="showChrome"
        class="overflow-y-auto border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-rhino-dark"
        :class="
          isDesktop
            ? ['sticky top-14 h-[calc(100vh-3.5rem)] shrink-0', drawerOpen ? '' : 'hidden']
            : [
                'fixed top-14 bottom-0 left-0 z-40 w-72 shadow-xl transition-transform',
                drawerOpen ? 'translate-x-0' : '-translate-x-full',
              ]
        "
        :style="asideStyle"
        @mouseenter="selection.autoScroll = false"
        @mouseleave="selection.autoScroll = true"
      >
        <NavTree :base-url="baseUrl" />
      </aside>

      <!-- Resize handle (desktop only, when drawer open) -->
      <div
        v-if="showChrome && isDesktop && drawerOpen"
        class="sticky top-14 h-[calc(100vh-3.5rem)] w-1 shrink-0 cursor-ew-resize bg-transparent hover:bg-accent/40"
        @pointerdown="startResize"
      />

      <main class="min-w-0 flex-1">
        <div
          v-if="showChrome && settings.bannerVisible"
          class="flex items-center justify-between gap-2 bg-blue-600 px-3 py-2 text-sm text-white"
        >
          <span>
            {{ apiTitleText }} documentation has a new look. The old site can still be found
            <a
              class="underline"
              href="https://mcneel.github.io/rhinocommon-api-docs/api/RhinoCommon/"
              >here</a
            >.
          </span>
          <button
            type="button"
            class="shrink-0 cursor-pointer rounded px-2 py-1 hover:bg-white/15"
            @click="settings.bannerVisible = false"
          >
            Close
          </button>
        </div>

        <div v-if="status === 'error'" class="p-6 text-negative">Failed to load API data.</div>
        <div v-else-if="status !== 'ready'" class="p-6 text-neutral-500">Loading API…</div>
        <template v-else>
          <SearchOverlay v-show="search.query" :base-url="baseUrl" />
          <div v-show="!search.query"><RouterView /></div>
        </template>
      </main>
    </div>
  </div>
</template>
