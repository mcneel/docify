<script setup>
import { computed, ref, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useApiStore } from '@/stores/api'
import { useSettingsStore } from '@/stores/settings'
import { useVersionFilter } from '@/composables/useVersionFilter'
import { useDocumentMeta } from '@/composables/useDocumentMeta'
import { memberName, signatureAnchorRef } from '@/utils/signatures'
import MemberSignature from '@/components/MemberSignature.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Btn from '@/components/Btn.vue'
import Icon from '@/components/Icon.vue'

const props = defineProps({ baseUrl: { type: String, default: '/' } })
const route = useRoute()
const apiStore = useApiStore()
const settings = useSettingsStore()
const { matchesVersion } = useVersionFilter()

const activeId = ref('')
const forScriptEditor = computed(() => settings.forScriptEditor)

const datatype = computed(() => apiStore.findByPath(route.params.datatype))
const memberParam = computed(() => (route.params.member || '').toLowerCase())

// Local member resolver (matches by member name) — ported from the old page.
// Spreads into clones (never mutates source) and tags isX for signature rendering.
function resolveMembers(dt, member) {
  if (!dt) return {}
  if (dt.name.toLowerCase() === member) {
    return { isConstructor: true, items: (dt.constructors || []).map((c) => ({ ...c, isConstructor: true })) }
  }
  if (dt.properties) {
    const found = []
    for (const prop of dt.properties) {
      const chunks = prop.signature.split(' ')
      const nm = chunks[chunks.length - 1]
      if (nm.toLowerCase() === member) found.push(prop)
      else if (member === 'item' && prop.signature.includes('this[int')) found.push(prop)
    }
    if (found.length) {
      found.sort((a, b) => memberName(a, '').localeCompare(memberName(b, '')))
      return { isProperty: true, items: found.map((p) => ({ ...p, isProperty: true })) }
    }
  }
  if (dt.methods) {
    const found = []
    for (const m of dt.methods) {
      const idx = m.signature.indexOf('(')
      const chunks = m.signature.substring(0, idx).split(' ')
      const nm = chunks[chunks.length - 1]
      if (nm.toLowerCase() === member) found.push(m)
    }
    if (found.length) {
      found.sort((a, b) => memberName(a, '').localeCompare(memberName(b, '')))
      return { isMethod: true, items: found.map((m) => ({ ...m, isMethod: true })) }
    }
  }
  if (dt.events) {
    const found = dt.events.filter((e) => {
      const chunks = e.signature.split(' ')
      return chunks[chunks.length - 1].toLowerCase() === member
    })
    if (found.length) return { isEvent: true, items: found.map((e) => ({ ...e, isEvent: true })) }
  }
  if (dt.operators) {
    const found = dt.operators.filter((o) => {
      const match = o.signature.match(/\S*\(.*\)/g)
      return match[0].split('(')[0].toLowerCase() === member
    })
    if (found.length) return { isOperator: true, items: found.map((o) => ({ ...o, isOperator: true })) }
  }
  if (dt.fields) {
    const found = dt.fields.filter((f) => {
      const declaration = f.signature.split('=')[0].trim()
      return declaration.split(' ').slice(-1)[0].toLowerCase() === member
    })
    if (found.length) return { isField: true, items: found.map((f) => ({ ...f, isField: true })) }
  }
  return {}
}

function getExamples(parentType, item) {
  if (!parentType) return []
  const fullname = parentType.namespace ? parentType.namespace + '.' + parentType.name : parentType.name
  const out = []
  for (const example of apiStore.examples) {
    for (const m of example.members) {
      if (m[0] === fullname && m[1] === item.signature) {
        out.push(example)
        break
      }
    }
  }
  return out
}

const members = computed(() => {
  const base = resolveMembers(datatype.value, memberParam.value)
  if (!base.items || !base.items.length) return base
  let items = base.items
  if (route.query.overload) {
    items = [items[route.query.overload - 1]].filter(Boolean)
  }
  items = items.map((it) => ({ ...it, examples: getExamples(datatype.value, it) }))
  // Version filter (fixed boundary: show when member.since <= selected version).
  items = items.filter(matchesVersion)
  // If a specific overload is targeted via the URL hash, show only that one;
  // with no hash (the top-level member is selected) show all overloads.
  const anchor = currentAnchor()
  if (anchor) {
    const selected = items.filter((it) => signatureAnchorRef(it.signature) === anchor)
    if (selected.length) items = selected
  }
  return { ...base, items }
})

function getTitle(dt, m) {
  if (!dt || !m.items || !m.items.length) return memberParam.value
  if (m.isConstructor) return dt.name + ' constructor'
  if (m.isProperty) {
    if (m.items[0].signature.includes('this[int')) return 'Item property'
    const chunks = m.items[0].signature.split(' ')
    return chunks[chunks.length - 1] + ' property'
  }
  if (m.isMethod) {
    const name = m.items[0].signature
    const idx = name.indexOf('(')
    const chunks = name.substring(0, idx).split(' ')
    return chunks[chunks.length - 1] + ' method'
  }
  if (m.isEvent) {
    const chunks = m.items[0].signature.split(' ')
    return chunks[chunks.length - 1] + ' event'
  }
  if (m.isOperator) {
    const match = m.items[0].signature.match(/\S*\(.*\)/g)
    return match[0].split('(')[0] + ' operator'
  }
  if (m.isField) {
    const declaration = m.items[0].signature.split('=')[0].trim()
    return declaration.split(' ').slice(-1)[0] + ' field'
  }
  return memberParam.value
}

const title = computed(() => getTitle(datatype.value, members.value))
const hasItems = computed(() => members.value.items && members.value.items.length > 0)

const crumbs = computed(() => {
  const dt = datatype.value
  if (!dt) return []
  return [
    { icon: 'home', to: props.baseUrl },
    { label: dt.namespace, to: props.baseUrl + dt.namespace.toLowerCase() },
    { label: dt.name, to: (props.baseUrl + dt.namespace + '.' + dt.name).toLowerCase() },
    { label: title.value.split(' ')[0] },
  ]
})

function exampleUrl(member) {
  let name = member.examples[0].name
  const idx = name.lastIndexOf('.')
  name = name.substring(0, idx).toLowerCase()
  return props.baseUrl + 'examples/' + name
}

useDocumentMeta(
  () => (datatype.value ? `${datatype.value.name}.${title.value}` : 'RhinoCommon API'),
  () => (datatype.value ? `${datatype.value.name}.${title.value}` : '')
)

// ---- hash scroll + active-anchor dimming ----
// Hash may be percent-encoded (overload anchors contain "(),"). Decode so it
// matches the element ids, which use the raw signatureAnchorRef.
function currentAnchor() {
  return route.hash ? decodeURIComponent(route.hash.substring(1)) : ''
}
function checkHash() {
  activeId.value = currentAnchor()
  if (activeId.value) setTimeout(() => (activeId.value = ''), 2000)
}
function scrollToHashEl() {
  const anchor = currentAnchor()
  if (!anchor) return
  nextTick(() => {
    const el = document.getElementById(anchor)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  })
}
onMounted(() => {
  checkHash()
  scrollToHashEl()
})
watch(
  () => route.fullPath,
  () => {
    checkHash()
    scrollToHashEl()
  }
)
</script>

<template>
  <div>
    <!-- Sticky sub-header -->
    <div
      v-if="!forScriptEditor && hasItems"
      class="sticky top-14 z-20 max-h-[130px] overflow-hidden border-b border-neutral-200 bg-neutral-100 px-3 py-2 dark:border-neutral-800 dark:bg-neutral-800"
    >
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
          <Breadcrumbs v-if="datatype" :items="crumbs" />
          <h1 class="truncate">{{ title }}</h1>
          <p v-if="datatype" class="text-sm">
            Class:
            <RouterLink
              class="routerlink"
              :to="baseUrl + (datatype.namespace + '.' + datatype.name).toLowerCase()"
              >{{ datatype.namespace }}.{{ datatype.name }}</RouterLink
            >
          </p>
        </div>
        <div class="flex flex-col items-end gap-1">
          <template v-for="(member, i) in members.items" :key="i">
            <Btn
              v-if="member.examples && member.examples.length"
              variant="outline"
              color="accent"
              size="sm"
              :to="exampleUrl(member)"
            >
              <Icon name="code-tags" /> Example
            </Btn>
          </template>
        </div>
      </div>
    </div>

    <div class="p-3">
      <template v-if="hasItems">
        <div
          v-for="(member, i) in members.items"
          :id="signatureAnchorRef(member.signature)"
          :key="i"
          class="scroll-mt-[190px] transition-opacity duration-1000"
          :style="{
            opacity: activeId && activeId !== signatureAnchorRef(member.signature) ? 0.5 : 1,
          }"
        >
          <MemberSignature :member="member" :datatype="datatype" :base-url="baseUrl" />
          <hr class="border-neutral-200 dark:border-neutral-800" />
        </div>
      </template>
      <div v-else class="rounded bg-negative p-3 text-white">
        Not Found
        <span v-if="route.query.version"> — Try Increasing Target Version</span>
      </div>
    </div>
  </div>
</template>
