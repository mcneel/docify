<template>
  <q-page>
    <h1>{{title}}</h1>
    <q-tabs
      v-model="language"
    >
      <q-tab v-for="markdown in exampleMarkdown" :key="markdown.language"
        :name="markdown.language"
        :label="markdown.label"
      >
      </q-tab>
    </q-tabs>
    <q-separator/>
    <q-tab-panels v-model="language" animated>
      <q-tab-panel v-for="markdown in exampleMarkdown" :key="markdown.language" :name="markdown.language">
        <q-markdown
          no-line-numbers
          :src="markdown.code"
        />
      </q-tab-panel>
     </q-tab-panels>
  </q-page>
</template>

<script>
import { Examples } from '../RhinoCommonExamples'

export default {
  data () {
    return {
      title: '',
      language: 'cs',
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
        if (item.name.toLowerCase().startsWith(search)) {
          // for now the javascript highlighter seems good enough
          const code = ['```js', item.code, '```'].join('\n')
          const index = item.name.lastIndexOf('.')
          const language = item.name.substring(index + 1)
          const md = {
            language: language,
            label: language,
            code: code
          }
          this.exampleMarkdown.push(md)
        }
        this.exampleMarkdown.sort((a, b) => {
          return a.language.localeCompare(b.language)
        })
      })
    }
  }
}
</script>
