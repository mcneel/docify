<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { refToPath } from '@/utils/sandcastle'

const route = useRoute()
const router = useRouter()

onMounted(() => {
  const path = refToPath(route.params.ref, route.fullPath)
  if (path) router.replace(path)
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center text-center text-neutral-500">
    <p>Sandcastle… <strong>(404)</strong></p>
  </div>
</template>
