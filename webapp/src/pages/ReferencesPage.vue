<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useApiStore } from '@/stores/api'
import { itemPath } from '@/utils/paths'
import { useDocumentMeta } from '@/composables/useDocumentMeta'

const props = defineProps({ baseUrl: { type: String, default: '/' } })
const route = useRoute()
const apiStore = useApiStore()

const node = computed(() => apiStore.findByPath(route.params.datatype))
const title = computed(() => node.value?.name || '')
const api = computed(() => (node.value ? apiStore.referencesOf(node.value) : []))

useDocumentMeta(
  () => (apiStore.projectInfo?.name || 'RhinoCommon') + ' API - ' + title.value + ' references',
  () => 'References for ' + title.value
)

function to(type) {
  return props.baseUrl + itemPath(type)
}
</script>

<template>
  <div class="p-3">
    <h1>References for {{ title }}</h1>
    <hr class="my-2 border-neutral-200 dark:border-neutral-700" />
    <ul class="list-disc space-y-1 pl-6">
      <li v-for="type in api" :key="type.name">
        <RouterLink class="routerlink" :to="to(type)">{{ type.name }}</RouterLink>
        <ul class="list-disc pl-6">
          <li v-for="c in type.constructors" :key="'c' + c.signature">{{ c.signature }}</li>
          <li v-for="p in type.properties" :key="'p' + p.signature">{{ p.signature }}</li>
          <li v-for="m in type.methods" :key="'m' + m.signature">{{ m.signature }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
