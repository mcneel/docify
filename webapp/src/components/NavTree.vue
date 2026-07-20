<script setup>
import { computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useApiStore } from '@/stores/api'
import { useSelectionStore } from '@/stores/selection'
import { useVersionFilter } from '@/composables/useVersionFilter'
import { centerInScrollParent } from '@/utils/scroll'
import NavTreeNode from './NavTreeNode.vue'

const props = defineProps({ baseUrl: { type: String, default: '/' } })
const route = useRoute()
const apiStore = useApiStore()
const selection = useSelectionStore()
const { keep } = useVersionFilter()

// Selected node is derived from the route — the single source of truth.
// Includes the (decoded) hash so a specific overload node highlights, not just
// its parent. Overload node paths look like "type/member#(argtypes)".
const selectedKey = computed(() => {
  const p = decodeURI(route.path).replace(/^\//, '').toLowerCase()
  const h = route.hash ? decodeURIComponent(route.hash).toLowerCase() : ''
  return p + h
})

// Open the namespace + type + the member's group (+ the member node itself when
// targeting one of its overloads) for the current route.
function expandAncestors(key) {
  if (!key || apiStore.status !== 'ready') return
  const pathNoHash = key.split('#')[0]
  const hasHash = key.includes('#')
  const typePath = pathNoHash.split('/')[0]
  const type = apiStore.findByPath(typePath)
  if (!type) return
  const keys = []
  if (type.namespace) keys.push(type.namespace.toLowerCase())
  keys.push(typePath)
  if (pathNoHash.includes('/')) {
    let groups = selection.childCache[typePath]
    if (!groups) {
      groups = apiStore.memberGroupsForType(type)
      selection.cacheChildren(typePath, groups)
    }
    for (const g of groups) {
      if (g.children.some((c) => c.path === pathNoHash)) {
        keys.push(g.path)
        if (hasHash) keys.push(pathNoHash) // reveal the overload children
        break
      }
    }
  }
  selection.expand(keys)
}

watch(
  [selectedKey, () => apiStore.status],
  ([key]) => {
    expandAncestors(key)
    if (selection.autoScroll) {
      nextTick(() => {
        const el = document.getElementById(`TOC:${key}`)
        if (el) centerInScrollParent(el)
      })
    }
  },
  { immediate: true }
)
</script>

<template>
  <ul class="list-none py-2 pr-1">
    <NavTreeNode
      v-for="ns in apiStore.tree"
      :key="ns.path"
      :node="ns"
      :level="0"
      :base-url="baseUrl"
      :selected-key="selectedKey"
      :filter-fn="keep"
    />
  </ul>
</template>
