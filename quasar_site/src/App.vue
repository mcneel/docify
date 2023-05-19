<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import ProjInfo from './proj_info.json'

export default defineComponent({
  name: 'App',
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || ProjInfo.name + ' API';
      }
    },
  }
})
</script>
