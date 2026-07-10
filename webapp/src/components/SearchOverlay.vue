<script setup>
import { ref, computed, watch } from 'vue'
import { useSearchStore } from '@/stores/search'
import { useVersionFilter } from '@/composables/useVersionFilter'
import Btn from './Btn.vue'

defineProps({ baseUrl: { type: String, default: '/' } })

const search = useSearchStore()
const { matchesVersion } = useVersionFilter()

const raw = ref([])
const limit = ref(25)
const theresMore = ref(false)
const results = ref([])

function sort() {
  const rc = []
  for (let i = 0; i < raw.value.length; i++) {
    if (raw.value[i].score < 0.1) {
      if (i > limit.value - 1) {
        theresMore.value = true
        break
      }
      rc.push({ ...raw.value[i].item, score: raw.value[i].score })
    }
  }
  rc.sort((a, b) => a.score - b.score)
  results.value = rc
}
function run() {
  limit.value = 25
  theresMore.value = false
  if (!search.query) {
    raw.value = []
    results.value = []
    return
  }
  search.ensureIndex()
  raw.value = search.fuse.search(search.query)
  sort()
}
watch(() => search.query, run, { immediate: true })
function moreResults() {
  limit.value *= 2
  theresMore.value = false
  sort()
}

const shown = computed(() => results.value.filter(matchesVersion))
function title(item) {
  return item.type !== 'property' && item.type !== 'method' && item.type !== 'event'
    ? item.typename
    : item.typename + ' ' + item.member
}
</script>

<template>
  <div class="p-3">
    <ul class="divide-y divide-neutral-200 dark:divide-neutral-800">
      <template v-if="shown.length">
        <li v-for="(item, i) in shown" :key="i" class="py-2">
          <RouterLink :to="baseUrl + item.url" class="routerlink">{{ title(item) }}</RouterLink>
          <div class="text-xs tracking-wide text-neutral-500 uppercase">{{ item.type }}</div>
          <div
            v-if="item.summary"
            class="text-xs text-neutral-600 dark:text-neutral-400"
            v-html="item.summary"
          />
        </li>
      </template>
      <li v-else class="py-2 text-sm text-neutral-500">Nothing found</li>
      <li v-if="theresMore" class="py-3">
        <Btn variant="outline" color="accent" size="sm" @click="moreResults">Show More</Btn>
      </li>
    </ul>
  </div>
</template>
