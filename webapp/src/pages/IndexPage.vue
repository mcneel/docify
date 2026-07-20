<script setup>
import { computed } from 'vue'
import { useApiStore } from '@/stores/api'
import { useDocumentMeta } from '@/composables/useDocumentMeta'

const props = defineProps({ baseUrl: { type: String, default: '/' } })
const apiStore = useApiStore()
const namespaces = computed(() => apiStore.tree)

useDocumentMeta(
  () => (apiStore.projectInfo?.name || 'RhinoCommon') + ' API',
  () => apiStore.projectInfo?.description || ''
)
</script>

<template>
  <div class="p-3">
    <h1>Namespaces</h1>
    <ul class="mt-2 divide-y divide-neutral-100 dark:divide-neutral-800">
      <li v-for="ns in namespaces" :key="ns.path" class="py-2">
        <RouterLink :to="baseUrl + ns.path" class="font-bold text-accent hover:underline">{{
          ns.label
        }}</RouterLink>
        <div class="text-sm text-neutral-600 dark:text-neutral-400">{{ ns.summary }}</div>
      </li>
    </ul>
  </div>
</template>
