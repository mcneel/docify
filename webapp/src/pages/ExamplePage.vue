<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from 'reka-ui'
// Only the languages the generator emits — keeps this (lazy) chunk small.
import hljs from 'highlight.js/lib/core'
import csharp from 'highlight.js/lib/languages/csharp'
import python from 'highlight.js/lib/languages/python'
import vbnet from 'highlight.js/lib/languages/vbnet'
import '@/styles/highlight.css'
import { useApiStore } from '@/stores/api'
import { useDocumentMeta } from '@/composables/useDocumentMeta'

hljs.registerLanguage('csharp', csharp)
hljs.registerLanguage('python', python)
hljs.registerLanguage('vbnet', vbnet)

const props = defineProps({ baseUrl: { type: String, default: '/' } })
const route = useRoute()
const apiStore = useApiStore()

const title = computed(() => route.params.example)
// file extension -> { tab label, highlight.js language }
const LANG_MAP = {
  cs: { label: 'cs', lang: 'csharp' },
  vb: { label: 'vb', lang: 'vbnet' },
  py: { label: 'py', lang: 'python' },
}

const examples = computed(() => {
  const search = (title.value || '').toLowerCase() + '.'
  const md = []
  apiStore.examples.forEach((item) => {
    if (item.name.toLowerCase().startsWith(search)) {
      const ext = item.name.substring(item.name.lastIndexOf('.') + 1)
      const info = LANG_MAP[ext] || { label: ext, lang: 'plaintext' }
      md.push({ language: info.lang, label: info.label, code: item.code })
    }
  })
  md.sort((a, b) => a.language.localeCompare(b.language))
  return md
})

const language = ref('csharp')
watch(
  examples,
  (list) => {
    if (list.length && !list.some((m) => m.language === language.value)) {
      language.value = list[0].language
    }
  },
  { immediate: true }
)

function highlightSyntax(code, lang) {
  if (lang === 'plaintext' || !hljs.getLanguage(lang)) {
    return hljs.highlightAuto(code).value
  }
  return hljs.highlight(code, { language: lang, ignoreIllegals: true }).value
}

useDocumentMeta(() => title.value)
</script>

<template>
  <div class="p-3">
    <h1>{{ title }}</h1>
    <TabsRoot v-model="language">
      <TabsList class="flex gap-1 border-b border-neutral-200 dark:border-neutral-800">
        <TabsTrigger
          v-for="m in examples"
          :key="m.language"
          :value="m.language"
          class="cursor-pointer px-3 py-2 text-sm text-neutral-600 data-[state=active]:border-b-2 data-[state=active]:border-accent data-[state=active]:text-accent dark:text-neutral-300"
        >
          {{ m.label }}
        </TabsTrigger>
      </TabsList>
      <TabsContent v-for="m in examples" :key="m.language" :value="m.language" class="mt-3">
        <pre
          class="overflow-x-auto rounded-md border border-neutral-200 bg-neutral-50 p-3 text-sm leading-relaxed dark:border-neutral-700 dark:bg-neutral-900"
        ><code class="hljs" v-html="highlightSyntax(m.code, m.language)" /></pre>
      </TabsContent>
    </TabsRoot>
  </div>
</template>
