import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'
import Fuse from 'fuse.js'
import { buildSearchList, fuseOptions } from '@/utils/search.js'
import { useApiStore } from './api.js'

// Search state. The Fuse index (~18k entries) is built lazily on first search,
// never at boot, to keep first paint fast.
export const useSearchStore = defineStore('search', () => {
  const query = ref('')
  const fuse = shallowRef(null)

  function ensureIndex() {
    if (fuse.value) return
    const api = useApiStore()
    fuse.value = new Fuse(buildSearchList(api.raw), fuseOptions)
  }

  function reset() {
    query.value = ''
  }

  return { query, fuse, ensureIndex, reset }
})
