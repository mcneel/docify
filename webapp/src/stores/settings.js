import { defineStore } from 'pinia'
import { ref } from 'vue'

// UI settings/state that were scattered across MainLayout + $q.dark.
export const useSettingsStore = defineStore('settings', () => {
  // Initial dark value mirrors the class the inline boot script set on <html>.
  const dark = ref(
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  )
  const showInherited = ref(true)
  const drawerWidth = ref(300)
  const forScriptEditor = ref(false)
  const bannerVisible = ref(true)

  function applyDark(val) {
    dark.value = val
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', val)
    }
  }
  function toggleDark() {
    applyDark(!dark.value)
    localStorage.setItem('darkMode', String(dark.value))
  }
  // ?dark=true|false is a transient override (not persisted), re-checked per route.
  function hydrateDarkFromQuery(query) {
    if (query.dark === 'true') applyDark(true)
    else if (query.dark === 'false') applyDark(false)
  }

  return {
    dark,
    showInherited,
    drawerWidth,
    forScriptEditor,
    bannerVisible,
    applyDark,
    toggleDark,
    hydrateDarkFromQuery,
  }
})
