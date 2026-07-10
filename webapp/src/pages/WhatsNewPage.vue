<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useApiStore } from '@/stores/api'
import { itemPath } from '@/utils/paths'
import { useDocumentMeta } from '@/composables/useDocumentMeta'
import Badge from '@/components/Badge.vue'

const props = defineProps({ baseUrl: { type: String, default: '/' } })
const route = useRoute()
const apiStore = useApiStore()

const version = computed(() => route.params.version)
const api = computed(() => apiStore.filteredApi(version.value))
const apiTitle = computed(() => apiStore.projectInfo?.name || 'RhinoCommon')
const memberCount = computed(() =>
  api.value.reduce(
    (n, t) => n + t.constructors.length + t.properties.length + t.methods.length + t.values.length,
    0
  )
)

useDocumentMeta(
  () => apiTitle.value + " API - What's New",
  () => `What's new in ${apiTitle.value} version ${version.value}`
)

function to(type) {
  return props.baseUrl + itemPath(type)
}
</script>

<template>
  <div class="p-3">
    <h1>New in {{ apiTitle }} {{ version }} - ({{ memberCount }} new items)</h1>
    <hr class="my-2 border-neutral-200 dark:border-neutral-700" />
    <ul class="list-disc space-y-1 pl-6">
      <li v-for="type in api" :key="type.name">
        <RouterLink class="routerlink" :to="to(type)">{{ type.namespace }}.{{ type.name }}</RouterLink>
        <ul class="list-disc pl-6">
          <li v-for="c in type.constructors" :key="'c' + c.signature">
            <Badge v-if="c.deprecated" outline color="negative">deprecated</Badge> {{ c.signature }}
          </li>
          <li v-for="p in type.properties" :key="'p' + p.signature">
            <Badge v-if="p.deprecated" outline color="negative">deprecated</Badge> {{ p.signature }}
          </li>
          <li v-for="m in type.methods" :key="'m' + m.signature">
            <Badge v-if="m.deprecated" outline color="negative">deprecated</Badge> {{ m.signature }}
          </li>
          <li v-for="v in type.values" :key="'v' + v.signature">
            <Badge v-if="v.deprecated" outline color="negative">deprecated</Badge> {{ v.signature }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
