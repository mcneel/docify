<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { refDebounced } from '@vueuse/core'
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
} from 'reka-ui'
import { useApiStore } from '@/stores/api'
import { useSettingsStore } from '@/stores/settings'
import { useSearchStore } from '@/stores/search'
import Icon from './Icon.vue'
import Btn from './Btn.vue'
import Tip from './Tip.vue'

const props = defineProps({ baseUrl: { type: String, default: '/' } })
defineEmits(['toggle-drawer'])

const route = useRoute()
const router = useRouter()
const apiStore = useApiStore()
const settings = useSettingsStore()
const search = useSearchStore()

const logoSrc = import.meta.env.BASE_URL + 'rhinodevlogo.png'
const apiTitle = computed(() => apiStore.projectInfo?.name || 'RhinoCommon')

const versions = computed(() => apiStore.majorVersions)
const recent = computed(() => apiStore.recentSince)
const currentVersion = computed(
  () => route.query.version || `${(recent.value || '0.0').split('.')[0]}.x`
)
const currentMajor = computed(() => currentVersion.value.split('.')[0])
const showWhatsNew = computed(
  () => recent.value && currentMajor.value === recent.value.split('.')[0]
)

function onChangeVersion(v) {
  router.push({ query: { ...route.query, version: v } })
}
function setInherited(v) {
  settings.showInherited = v
  router.push({ query: { ...route.query, inherited: String(v) } })
}

// Debounced search input -> committed query in the search store.
const text = ref(search.query)
const debounced = refDebounced(text, 200)
watch(debounced, (v) => {
  search.query = v
})
watch(
  () => search.query,
  (v) => {
    if (v !== text.value) text.value = v
  }
)
</script>

<template>
  <header class="sticky top-0 z-30 flex h-14 items-center gap-2 bg-primary px-2 text-white shadow">
    <button
      type="button"
      class="cursor-pointer rounded-full p-2 hover:bg-white/10"
      aria-label="Toggle navigation"
      @click="$emit('toggle-drawer')"
    >
      <Icon name="menu" />
    </button>

    <RouterLink :to="baseUrl" class="flex items-center gap-2 rounded px-2 py-1 hover:bg-white/10">
      <img :src="logoSrc" alt="" class="h-7 w-auto" />
      <span class="hidden text-lg font-medium sm:inline">{{ apiTitle }} API</span>
    </RouterLink>

    <div class="relative ml-auto w-40 sm:w-64">
      <input
        v-model="text"
        type="text"
        placeholder="search"
        aria-label="Search"
        class="w-full rounded bg-white/15 py-1.5 pr-8 pl-3 text-sm text-white placeholder-white/60 outline-none focus:bg-white/25"
      />
      <Icon name="search" class="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-white/70" />
    </div>

    <!-- Version filter -->
    <DropdownMenuRoot>
      <DropdownMenuTrigger as-child>
        <button
          type="button"
          class="flex h-8 cursor-pointer items-center gap-1 rounded bg-accent px-3 text-sm font-medium text-white hover:brightness-110"
        >
          <span>V{{ currentMajor }}</span>
          <Icon name="chevron-down" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          :side-offset="4"
          class="z-50 min-w-24 rounded border border-neutral-200 bg-white py-1 text-neutral-900 shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
        >
          <DropdownMenuItem
            v-for="v in versions"
            :key="v"
            class="cursor-pointer px-4 py-1.5 text-sm outline-none hover:bg-accent/10 data-[highlighted]:bg-accent/10"
            @select="onChangeVersion(v)"
          >
            {{ v.split('.')[0] }}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>

    <!-- Inherited members toggle -->
    <DropdownMenuRoot>
      <DropdownMenuTrigger as-child>
        <button
          type="button"
          class="flex h-8 cursor-pointer items-center gap-0.5 rounded bg-accent px-3 text-sm text-white hover:brightness-110"
          aria-label="Filters"
        >
          <Icon name="filter" />
          <Icon name="chevron-down" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          :side-offset="4"
          class="z-50 rounded border border-neutral-200 bg-white p-3 text-neutral-900 shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
        >
          <label class="flex cursor-pointer items-center gap-2 text-sm">
            <button
              type="button"
              role="switch"
              :aria-checked="settings.showInherited"
              class="relative h-5 w-9 shrink-0 cursor-pointer rounded-full transition"
              :class="settings.showInherited ? 'bg-accent' : 'bg-neutral-400'"
              @click="setInherited(!settings.showInherited)"
            >
              <span
                class="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition"
                :class="settings.showInherited ? 'translate-x-4' : ''"
              />
            </button>
            Show Inherited Members
          </label>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>

    <Tip v-if="showWhatsNew" :text="`What's new in version ${recent}`">
      <Btn :to="baseUrl + 'whatsnew/' + recent" variant="flat" color="neutral" size="sm" round>
        <Icon name="star" class="text-white" />
      </Btn>
    </Tip>

    <Tip text="Toggle dark mode">
      <button
        type="button"
        class="cursor-pointer rounded-full p-2 hover:bg-white/10"
        aria-label="Toggle dark mode"
        @click="settings.toggleDark()"
      >
        <Icon :name="settings.dark ? 'moon' : 'sun'" />
      </button>
    </Tip>
  </header>
</template>
