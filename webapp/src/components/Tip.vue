<script setup>
// Reka UI tooltip wrapper. Requires a <TooltipProvider> ancestor (mounted in App.vue).
import { TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from 'reka-ui'

defineProps({ text: { type: [String, Array], default: '' } })
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger as-child>
      <slot />
    </TooltipTrigger>
    <TooltipPortal>
      <TooltipContent
        :side-offset="4"
        class="z-50 max-w-xs rounded bg-neutral-800 px-2 py-1 text-xs text-white shadow-lg"
      >
        <slot name="content">{{ Array.isArray(text) ? text.join(', ') : text }}</slot>
        <TooltipArrow class="fill-neutral-800" />
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>
