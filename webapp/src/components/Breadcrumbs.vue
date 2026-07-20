<script setup>
import { RouterLink } from 'vue-router'
import Icon from './Icon.vue'
// items: [{ label?, to?, icon? }] — entries without `to` render as plain text.
defineProps({ items: { type: Array, default: () => [] } })
</script>

<template>
  <nav class="mb-2 flex flex-wrap items-center gap-1.5 text-sm">
    <template v-for="(it, i) in items" :key="i">
      <span v-if="i > 0" class="text-neutral-400 select-none">/</span>
      <RouterLink
        v-if="it.to"
        :to="it.to"
        class="inline-flex items-center gap-1 text-accent hover:underline"
      >
        <Icon v-if="it.icon" :name="it.icon" />
        <span v-if="it.label">{{ it.label }}</span>
      </RouterLink>
      <span v-else class="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-300">
        <Icon v-if="it.icon" :name="it.icon" />
        <span v-if="it.label">{{ it.label }}</span>
      </span>
    </template>
  </nav>
</template>
