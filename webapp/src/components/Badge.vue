<script setup>
defineProps({
  color: { type: String, default: 'info' },
  outline: { type: Boolean, default: false },
})
const MAP = {
  info: { outline: 'border border-info text-info', solid: 'bg-info text-white' },
  negative: { outline: 'border border-negative text-negative', solid: 'bg-negative text-white' },
  warning: { outline: 'border border-warning text-warning', solid: 'bg-warning text-black' },
  neutral: {
    outline: 'border border-neutral-400 text-neutral-600 dark:text-neutral-300',
    solid: 'bg-neutral-500 text-white',
  },
}
</script>

<template>
  <span
    class="inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 align-middle text-xs font-medium leading-tight"
    :class="(MAP[color] || MAP.info)[outline ? 'outline' : 'solid']"
  >
    <slot />
  </span>
</template>
