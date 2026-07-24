<script setup>
import { computed, ref, watch, onMounted, nextTick } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from 'reka-ui'
import { useApiStore } from '@/stores/api'
import { useVersionFilter } from '@/composables/useVersionFilter'
import { useDocumentMeta } from '@/composables/useDocumentMeta'
import { memberName, signatureHash } from '@/utils/signatures'
import MemberSignature from '@/components/MemberSignature.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Badge from '@/components/Badge.vue'
import Tip from '@/components/Tip.vue'
import Icon from '@/components/Icon.vue'

const props = defineProps({ baseUrl: { type: String, default: '/' } })
const route = useRoute()
const apiStore = useApiStore()
const { keep: filterFunc } = useVersionFilter()

const node = computed(() => apiStore.findByPath(route.params.datatype))
const dataType = computed(() => node.value?.dataType)
const name = computed(() => node.value?.name)
const namespace = computed(() => node.value?.namespace || node.value?.name)
const summary = computed(() => node.value?.summary)
const remarks = computed(() => node.value?.remarks)
const inheritance = computed(() => (node.value ? apiStore.inheritanceOf(node.value) : []))
const derivedClasses = computed(() => (node.value ? apiStore.derivedClassesOf(node.value) : []))

// ---- member sections (order matches the original) ----
const memberSections = computed(() => {
  const item = node.value
  if (!item || item.dataType === 'namespace') return []
  const rc = []
  const add = (title, type, items) => {
    if (items && items.length) rc.push({ title, type, items })
  }

  add('Constructors', 'constructors', apiStore.membersFor(item, 'constructors', true))

  // enum values: own + inherited, cloned and numbered (never mutate source)
  let values = [...(item.values || [])]
  inheritance.value.forEach((h) => {
    if (h.item?.values) values = values.concat(h.item.values)
  })
  values = values
    .filter(Boolean)
    .map((v, i) => ({
      ...v,
      signature: v.signature.includes('=') ? v.signature : `${v.signature} = ${i}`,
    }))
  add('Values', 'values', values)

  add('Properties', 'properties', apiStore.membersFor(item, 'properties', true))
  add('Methods', 'methods', apiStore.membersFor(item, 'methods', true))
  add('Operators', 'operators', apiStore.membersFor(item, 'operators', true))
  add('Fields', 'fields', apiStore.membersFor(item, 'fields', true))
  add('Events', 'events', apiStore.membersFor(item, 'events', true))
  return rc
})

// ---- accordion open state driven by URL hash ----
const openSections = ref([])
function computeOpen() {
  const hash = route.hash ? route.hash.substring(1) : ''
  const types = memberSections.value.map((s) => s.type)
  let open = hash ? types.filter((t) => t === hash) : types.slice()
  if (types.includes('values') && !open.includes('values')) open.push('values') // enums always open
  openSections.value = open
}

// ---- namespace-page listings ----
const childNamespaces = computed(() => {
  const item = node.value
  if (!item || item.dataType !== 'namespace') return null
  const children = []
  for (const t of apiStore.tree) {
    if (t.label.startsWith(item.name + '.') && t.label.indexOf('.', item.name.length + 1) < 0) {
      children.push({ label: t.label, path: t.path, summary: t.summary })
    }
  }
  return children.length ? children : null
})
const namespaceItems = computed(() => {
  const item = node.value
  if (!item || item.dataType !== 'namespace') return null
  const found = apiStore.tree.find((t) => t.label === item.name)
  return found ? found.children : null
})

const crumbs = computed(() => {
  if (!node.value || !namespace.value) return []
  const items = [{ icon: 'home', to: props.baseUrl }]
  if (dataType.value !== 'namespace')
    items.push({ label: namespace.value, to: props.baseUrl + namespace.value.toLowerCase() })
  items.push({ label: name.value })
  return items
})

useDocumentMeta(
  () => (node.value ? `${node.value.name} ${node.value.dataType}` : 'RhinoCommon API'),
  () => {
    const n = node.value
    if (!n) return ''
    let d = n.namespace ? n.namespace + '.' + n.name : n.name
    if (n.dataType === 'namespace') d += ' namespace'
    if (n.summary) d += ': ' + n.summary
    return d
  }
)

function splitSignature(signature) {
  const chunks = signature.split('(')
  const label = chunks[0]
  let args = chunks[1]
  if (args) {
    const argsList = args.split(',').map((a) => a.split('.').slice(-1)[0])
    args = `(${argsList.join(',')}`
  }
  return [label, args]
}
function getLines(text) {
  if (text == null) return text
  return text.split('  \n')
}
function memberClass(member) {
  return member.deprecated || member.obsolete ? 'is-disabled' : ''
}
function memberTo(section, member) {
  if (section.type === 'values') return undefined
  return props.baseUrl + member.path + signatureHash(member.signature)
}
// Inherited BCL members (WWW-3489) link off-site to MS Learn; everything else is
// an internal RouterLink (values are plain, non-clickable rows).
function memberComponent(section, member) {
  if (section.type === 'values') return 'div'
  if (member.externalUrl) return 'a'
  return RouterLink
}
function memberBindings(section, member) {
  if (section.type === 'values') return {}
  if (member.externalUrl) return { href: member.externalUrl, target: '_blank', rel: 'noopener' }
  return { to: memberTo(section, member) }
}
function isInherited(member) {
  return member.parent !== namespace.value + '.' + name.value
}

function scrollToHash() {
  if (!route.hash) return
  nextTick(() => {
    const el = document.getElementById(decodeURIComponent(route.hash.substring(1)))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  })
}
onMounted(() => {
  computeOpen()
  scrollToHash()
})
watch(
  () => route.fullPath,
  () => {
    computeOpen()
    scrollToHash()
  }
)
watch(memberSections, computeOpen)
</script>

<template>
  <div v-if="!node" class="p-6 text-neutral-500">Not found.</div>
  <div v-else class="p-3">
    <Breadcrumbs v-if="namespace" :items="crumbs" />
    <h1>{{ name }} {{ dataType }}</h1>

    <div v-if="summary" class="w-full overflow-auto" v-html="summary" />
    <p v-if="remarks">
      <template v-for="(line, i) in getLines(remarks)" :key="'r' + i"
        ><br v-if="i > 0" />{{ line }}</template
      >
    </p>

    <!-- Inheritance chain -->
    <p v-if="inheritance.length" class="italic">
      <span>Inheritence: </span>
      <template v-for="(item, index) in inheritance" :key="item.name">
        <a
          v-if="item.external"
          :href="item.external"
          target="_blank"
          rel="noopener"
          class="routerlink"
          >{{ item.name }}</a
        >
        <RouterLink
          v-else-if="item.link"
          class="routerlink"
          :to="baseUrl + item.link.toLowerCase()"
          >{{ item.name }}</RouterLink
        >
        <span v-else>{{ item.name }}</span>
        <Icon name="arrow-forward" class="inline align-middle" />
        <span v-if="index === inheritance.length - 1">{{ name }}</span>
      </template>
    </p>

    <!-- Derived classes -->
    <p v-if="dataType !== 'delegate' && derivedClasses.length" class="italic">
      <span>Derived Classes: </span>
      <template v-for="(item, index) in derivedClasses" :key="item.name">
        <RouterLink v-if="item.link" class="routerlink" :to="baseUrl + item.link.toLowerCase()">{{
          item.name
        }}</RouterLink>
        <span v-else>{{ item.name }}</span>
        <span v-if="index < derivedClasses.length - 1">, </span>
      </template>
    </p>

    <!-- Namespace + references links -->
    <p v-if="namespace && dataType !== 'namespace'" class="italic">
      <span
        >Namespace:
        <RouterLink class="routerlink" :to="baseUrl + namespace.toLowerCase()">{{
          namespace
        }}</RouterLink></span
      >
      <br />
      <span v-if="dataType !== 'delegate'"
        >{{ name }}:
        <RouterLink
          class="routerlink"
          :to="(baseUrl + 'references/' + namespace + '.' + name).toLowerCase()"
          >references</RouterLink
        ></span
      >
    </p>

    <p v-if="node.since" class="italic">Available since: <b>{{ node.since }}</b></p>

    <!-- Delegate: render the type's own signature -->
    <MemberSignature
      v-if="dataType === 'delegate'"
      :member="node"
      :datatype="node"
      :base-url="baseUrl"
    />

    <!-- Member sections -->
    <AccordionRoot v-model="openSections" type="multiple" class="mt-4 space-y-2">
      <AccordionItem
        v-for="section in memberSections"
        :id="section.type"
        :key="section.type"
        :value="section.type"
        class="scroll-mt-16"
      >
        <AccordionHeader>
          <AccordionTrigger
            class="group flex w-full cursor-pointer items-center justify-between bg-secondary px-3 py-2 text-left font-medium text-white"
          >
            <span>{{ section.title }} ({{ section.items.filter(filterFunc).length }})</span>
            <Icon name="chevron-down" class="transition group-data-[state=open]:rotate-180" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="pl-4">
          <component
            :is="memberComponent(section, member)"
            v-for="(member, i) in section.items.filter(filterFunc)"
            :key="i"
            v-bind="memberBindings(section, member)"
            class="flex flex-col gap-1 border-b border-neutral-100 px-2 py-2 md:flex-row dark:border-neutral-800"
            :class="memberClass(member)"
          >
            <div
              class="break-words md:flex-1"
              :class="section.type === 'values' ? '' : 'text-accent'"
            >
              <b>{{ splitSignature(memberName(member, section.type))[0] }}</b
              >{{ splitSignature(memberName(member, section.type))[1] }}
              <template v-if="section.type !== 'constructors' && section.type !== 'values'">
                <Tip v-if="isInherited(member)" :text="`From ${member.parent}`">
                  <Badge outline color="info"><Icon name="file-tree" /></Badge>
                </Tip>
              </template>
              <Tip v-if="section.type === 'methods' && member.protected" text="Protected member">
                <Badge outline color="info"><Icon name="key-variant" /></Badge>
              </Tip>
              <Tip v-if="section.type === 'methods' && member.virtual" text="Virtual member">
                <Badge outline color="info"><Icon name="alpha-v" /></Badge>
              </Tip>
              <Tip v-if="member.signature.includes('static')" text="Static member">
                <Badge outline color="info"><Icon name="alpha-s" /></Badge>
              </Tip>
              <Tip
                v-if="member.obsolete || member.deprecated"
                :text="`${member.obsolete ? 'Obsolete' : ''}${member.obsolete && member.deprecated ? ' | ' : ''}${member.deprecated ? 'Deprecated' : ''}`"
              >
                <Badge outline color="negative"><Icon name="alert" /></Badge>
              </Tip>
            </div>
            <div class="text-sm text-neutral-600 md:w-2/3 dark:text-neutral-400">
              <template v-for="(line, li) in getLines(member.summary)" :key="li"
                ><br v-if="li > 0" />{{ line }}</template
              >
            </div>
          </component>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>

    <!-- Namespace page: child namespaces -->
    <div v-if="childNamespaces" class="mt-4">
      <div class="bg-secondary px-3 py-2 font-medium text-white">Child Namespaces</div>
      <RouterLink
        v-for="item in childNamespaces"
        :key="item.label"
        :to="baseUrl + item.path.toLowerCase()"
        class="flex flex-col gap-1 border-b border-neutral-100 px-2 py-2 md:flex-row dark:border-neutral-800"
      >
        <b class="text-accent md:flex-1">{{ item.label }}</b>
        <span class="text-sm text-neutral-600 md:w-2/3 dark:text-neutral-400">{{ item.summary }}</span>
      </RouterLink>
    </div>

    <!-- Namespace page: types -->
    <div v-if="namespaceItems" class="mt-2">
      <RouterLink
        v-for="item in namespaceItems"
        :key="item.label"
        :to="baseUrl + item.path.toLowerCase()"
        class="flex flex-col gap-1 border-b border-neutral-100 px-2 py-2 md:flex-row dark:border-neutral-800"
      >
        <b class="text-accent md:flex-1">{{ item.label }}</b>
        <span class="text-sm text-neutral-600 md:w-2/3 dark:text-neutral-400">{{ item.summary }}</span>
      </RouterLink>
    </div>
  </div>
</template>
