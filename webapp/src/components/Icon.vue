<script setup>
import { computed } from 'vue'
// Offline, tree-shaken SVG icons via unplugin-icons + @iconify-json/mdi.
import IconMenu from '~icons/mdi/menu'
import IconSearch from '~icons/mdi/magnify'
import IconFilter from '~icons/mdi/filter-variant'
import IconNewReleases from '~icons/mdi/new-box'
import IconStar from '~icons/mdi/star'
import IconMoon from '~icons/mdi/weather-night'
import IconSun from '~icons/mdi/white-balance-sunny'
import IconHome from '~icons/mdi/home'
import IconArrowForward from '~icons/mdi/arrow-right'
import IconLink from '~icons/mdi/link'
import IconCopy from '~icons/mdi/content-copy'
import IconFileTree from '~icons/mdi/file-tree'
import IconKey from '~icons/mdi/key-variant'
import IconAlphaV from '~icons/mdi/alpha-v'
import IconAlphaS from '~icons/mdi/alpha-s'
import IconAlert from '~icons/mdi/alert'
import IconCodeTags from '~icons/mdi/code-tags'
import IconClose from '~icons/mdi/close'
import IconChevronRight from '~icons/mdi/chevron-right'
import IconChevronDown from '~icons/mdi/chevron-down'

const MAP = {
  menu: IconMenu,
  search: IconSearch,
  filter: IconFilter,
  'new-releases': IconNewReleases,
  star: IconStar,
  moon: IconMoon,
  sun: IconSun,
  home: IconHome,
  'arrow-forward': IconArrowForward,
  link: IconLink,
  copy: IconCopy,
  'file-tree': IconFileTree,
  'key-variant': IconKey,
  'alpha-v': IconAlphaV,
  'alpha-s': IconAlphaS,
  alert: IconAlert,
  'code-tags': IconCodeTags,
  close: IconClose,
  'chevron-right': IconChevronRight,
  'chevron-down': IconChevronDown,
}

const props = defineProps({ name: { type: String, required: true } })
const cmp = computed(() => MAP[props.name] || null)
</script>

<template>
  <component :is="cmp" v-if="cmp" aria-hidden="true" />
</template>
