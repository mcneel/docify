import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSettingsStore } from '@/stores/settings.js'
import { sinceIsGreater } from '@/utils/version.js'

// Version + inherited-member filtering predicates, driven by ?version query and
// the inherited toggle. Consolidates the three inconsistent copies from the old
// tree/DataType/Search/MemberDetail code (and fixes MemberDetail's inverted
// boundary — now all views agree: a member is shown when since <= version).
export function useVersionFilter() {
  const route = useRoute()
  const settings = useSettingsStore()
  const version = computed(() => route.query.version || '')

  // Version only (used by search + as the basis of `keep`).
  function matchesVersion(node) {
    if (node.since && version.value) return !sinceIsGreater(node.since, version.value)
    return true
  }

  // Version + inherited toggle (tree, DataType, MemberDetail member lists).
  function keep(node) {
    if (!settings.showInherited && node.inherited) return false
    return matchesVersion(node)
  }

  return { version, matchesVersion, keep }
}
