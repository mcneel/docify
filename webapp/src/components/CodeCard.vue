<script setup>
import Icon from './Icon.vue'
defineProps({ text: { type: String, default: '' } })
function copy(t) {
  navigator.clipboard?.writeText(t)
}
</script>

<template>
  <div
    class="mt-2 flex items-start justify-between gap-2 rounded border border-neutral-300 p-3 font-mono text-[18px] leading-relaxed dark:border-neutral-700"
  >
    <div class="min-w-0 grow break-words"><slot /></div>
    <button
      v-if="text"
      type="button"
      class="shrink-0 cursor-pointer rounded-full p-1 text-blue-600 hover:bg-blue-600/10"
      aria-label="Copy to clipboard"
      @click="copy(text)"
    >
      <Icon name="copy" />
    </button>
  </div>
</template>
