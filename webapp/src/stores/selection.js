import { defineStore } from 'pinia'
import { ref } from 'vue'

// Tree-highlight UI state. The *selected* node is derived from the route in
// NavTree; this store only tracks expansion + the lazily-built child cache,
// replacing the old ViewModel pub/sub.
export const useSelectionStore = defineStore('selection', () => {
  const expandedKeys = ref([]) // node paths currently expanded
  const autoScroll = ref(true) // paused while hovering the drawer
  const childCache = ref({}) // path -> lazily-built member group nodes

  function setExpanded(keys) {
    expandedKeys.value = keys
  }
  function expand(keys) {
    const set = new Set(expandedKeys.value)
    keys.forEach((k) => set.add(k))
    expandedKeys.value = [...set]
  }
  function cacheChildren(path, children) {
    childCache.value = { ...childCache.value, [path]: children }
  }

  return { expandedKeys, autoScroll, childCache, setExpanded, expand, cacheChildren }
})
