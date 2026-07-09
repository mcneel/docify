import { storeToRefs } from 'pinia'
import { useApiStore } from '@/stores/api.js'

// Ensures the dataset is loading/loaded and exposes readiness for skeletons.
export function useApiData() {
  const store = useApiStore()
  store.load() // idempotent
  const { status, error } = storeToRefs(store)
  return { status, error, store }
}
