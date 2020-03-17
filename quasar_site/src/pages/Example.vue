<template>
  <q-page>
    <h1>{{title}}</h1>
    <q-markdown v-for="markdown in exampleMarkdown" :key="markdown"
      no-line-numbers
      :src="markdown"
    />
  </q-page>
</template>

<script>
import { Examples } from '../Examples'

export default {
  data () {
    return {
      title: '',
      exampleMarkdown: []
    }
  },
  mounted () {
    if (this.$route.params && this.$route.params.example) {
      console.log('mounted example')
      this.title = this.$route.params.example
      const search = this.title + '.'
      this.exampleMarkdown = []
      Examples.forEach(item => {
        if (item.name.startsWith(search)) {
          const code = ['```cs', item.code, '```'].join('\n')
          this.exampleMarkdown.push(code)
        }
      })
    }
  }
}
</script>
