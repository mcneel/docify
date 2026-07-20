import { defineStore } from 'pinia'
import { shallowRef, ref, computed, markRaw } from 'vue'
import projInfo from '@/proj_info.json'
import { buildTree, buildMemberGroups } from '@/utils/tree.js'
import { buildTypeMap, getInheritance, getDerivedClasses } from '@/utils/typemap.js'
import { collectMembers, getFilteredApi, references } from '@/utils/members.js'
import { mostRecentSince, majorVersionList } from '@/utils/version.js'

const BASE = import.meta.env.BASE_URL

// The data core. Holds the raw API dataset (never made deeply reactive — see
// shallowRef + markRaw) and exposes memoized derived indexes + query actions.
export const useApiStore = defineStore('api', () => {
  const raw = shallowRef([])
  const examples = shallowRef([])
  const status = ref('idle') // idle | loading | ready | error
  const error = ref(null)

  let loadPromise = null
  async function load() {
    if (status.value === 'ready') return
    if (loadPromise) return loadPromise
    status.value = 'loading'
    loadPromise = (async () => {
      try {
        const [info, ex] = await Promise.all([
          fetch(`${BASE}data/api_info.json`).then((r) => {
            if (!r.ok) throw new Error(`api_info.json ${r.status}`)
            return r.json()
          }),
          fetch(`${BASE}data/api_examples.json`).then((r) => (r.ok ? r.json() : [])),
        ])
        raw.value = markRaw(info)
        examples.value = markRaw(ex)
        status.value = 'ready'
      } catch (e) {
        error.value = e
        status.value = 'error'
        throw e
      }
    })()
    return loadPromise
  }

  // Derived indexes — computed once over the stable raw reference, recomputed
  // only if raw is replaced (i.e. never, after load).
  const _treeData = computed(() => buildTree(raw.value))
  const tree = computed(() => _treeData.value.tree)
  const pathMap = computed(() => _treeData.value.pathMap)
  const typeMap = computed(() => buildTypeMap(raw.value))
  const majorVersions = computed(() => majorVersionList(raw.value))
  const recentSince = computed(() => mostRecentSince(raw.value))
  const projectInfo = computed(() => projInfo)

  function findByPath(path) {
    if (!path) return null
    return pathMap.value[path.toLowerCase()] || null
  }
  function memberGroupsForType(type) {
    return buildMemberGroups(type, typeMap.value)
  }
  function membersFor(type, memberType, includeInherited = true) {
    return collectMembers(type, memberType, typeMap.value, includeInherited)
  }
  function inheritanceOf(type) {
    return getInheritance(type, typeMap.value)
  }
  function derivedClassesOf(type) {
    return getDerivedClasses(type, typeMap.value)
  }
  function filteredApi(version) {
    return getFilteredApi(raw.value, version)
  }
  function referencesOf(type) {
    return references(raw.value, type)
  }

  return {
    raw,
    examples,
    status,
    error,
    load,
    tree,
    pathMap,
    typeMap,
    majorVersions,
    recentSince,
    projectInfo,
    findByPath,
    memberGroupsForType,
    membersFor,
    inheritanceOf,
    derivedClassesOf,
    filteredApi,
    referencesOf,
  }
})
