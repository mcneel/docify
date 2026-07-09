<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  variant: { type: String, default: 'solid' }, // solid | outline | flat
  color: { type: String, default: 'accent' },
  size: { type: String, default: 'md' }, // sm | md | lg
  round: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  type: { type: String, default: 'button' },
})

const tag = computed(() => (props.to ? RouterLink : props.href ? 'a' : 'button'))

const COLORS = {
  accent: {
    solid: 'bg-accent text-white hover:brightness-110',
    outline: 'border border-accent text-accent hover:bg-accent/10',
    flat: 'text-accent hover:bg-accent/10',
  },
  primary: {
    solid: 'bg-primary text-white hover:brightness-125',
    outline: 'border border-primary text-primary dark:text-neutral-200 hover:bg-primary/10',
    flat: 'text-primary dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10',
  },
  secondary: {
    solid: 'bg-secondary text-white hover:brightness-110',
    outline: 'border border-secondary/60 text-neutral-700 dark:text-neutral-200',
    flat: 'text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10',
  },
  blue: {
    solid: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600',
    flat: 'text-blue-600 hover:bg-blue-600/10',
  },
  neutral: {
    solid: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300',
    outline: 'border border-neutral-400 text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10',
    flat: 'text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10',
  },
}

const SIZE = { sm: 'text-sm', md: 'text-base', lg: 'text-lg' }

const classes = computed(() => [
  'inline-flex items-center justify-center gap-1.5 font-medium transition select-none',
  props.round ? 'rounded-full' : 'rounded',
  props.round
    ? props.size === 'sm'
      ? 'p-1'
      : 'p-2'
    : props.size === 'sm'
      ? 'px-2 py-1'
      : 'px-3 py-1.5',
  (COLORS[props.color] || COLORS.accent)[props.variant] || '',
  SIZE[props.size] || SIZE.md,
  props.block ? 'w-full' : '',
  props.disabled ? 'opacity-50 pointer-events-none' : 'cursor-pointer',
])
</script>

<template>
  <component
    :is="tag"
    :to="to || undefined"
    :href="href || undefined"
    :type="tag === 'button' ? type : undefined"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener' : undefined"
    :class="classes"
    :aria-disabled="disabled || undefined"
  >
    <slot />
  </component>
</template>
