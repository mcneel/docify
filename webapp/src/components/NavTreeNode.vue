<script setup>
import { computed } from 'vue'
import { useSelectionStore } from '@/stores/selection'
import { useApiStore } from '@/stores/api'
import Icon from './Icon.vue'

const props = defineProps({
  node: { type: Object, required: true },
  level: { type: Number, default: 0 },
  baseUrl: { type: String, default: '/' },
  selectedKey: { type: String, default: '' },
  filterFn: { type: Function, default: () => true },
})

const selection = useSelectionStore()
const apiStore = useApiStore()

const expanded = computed(() => selection.expandedKeys.includes(props.node.path))
const rawChildren = computed(() => {
  if (props.node.children && props.node.children.length) return props.node.children
  if (props.node.lazy) return selection.childCache[props.node.path] || []
  return []
})
const visibleChildren = computed(() => rawChildren.value.filter(props.filterFn))
const hasChildren = computed(
  () => props.node.lazy || (props.node.children && props.node.children.length > 0)
)
const isSelected = computed(() => props.node.path === props.selectedKey)

function ensureChildren() {
  if (props.node.lazy && !selection.childCache[props.node.path]) {
    const type = apiStore.findByPath(props.node.path)
    if (type) selection.cacheChildren(props.node.path, apiStore.memberGroupsForType(type))
  }
}
function toggle(e) {
  e?.preventDefault()
  if (expanded.value) {
    selection.setExpanded(selection.expandedKeys.filter((k) => k !== props.node.path))
  } else {
    ensureChildren()
    selection.expand([props.node.path])
  }
}
</script>

<template>
  <li>
    <div
      class="flex items-center gap-0.5 rounded pr-1 hover:bg-black/5 dark:hover:bg-white/5"
      :style="{ paddingLeft: level * 12 + 'px' }"
    >
      <button
        v-if="hasChildren"
        type="button"
        class="flex shrink-0 cursor-pointer items-center p-0.5 text-neutral-500"
        :aria-label="expanded ? 'Collapse' : 'Expand'"
        @click="toggle"
      >
        <Icon :name="expanded ? 'chevron-down' : 'chevron-right'" />
      </button>
      <span v-else class="w-[18px] shrink-0" />
      <RouterLink
        :id="`TOC:${node.path}`"
        :to="baseUrl + node.path"
        class="min-w-0 grow truncate py-0.5 text-sm no-underline"
        :class="[
          isSelected ? 'font-bold text-accent' : 'text-neutral-800 dark:text-neutral-200',
          node.deprecated ? 'toc-deprecated' : '',
        ]"
        :title="node.label"
      >
        {{ node.label }}
      </RouterLink>
    </div>
    <ul v-if="expanded && visibleChildren.length" class="list-none">
      <NavTreeNode
        v-for="child in visibleChildren"
        :key="child.path"
        :node="child"
        :level="level + 1"
        :base-url="baseUrl"
        :selected-key="selectedKey"
        :filter-fn="filterFn"
      />
    </ul>
  </li>
</template>
