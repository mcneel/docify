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
        <pre>
          <div v-html="highlightSyntax(markdown.code)"></div>
        </pre>
      </q-tab-panel>
     </q-tab-panels>
  </q-page>
</template>

<script>
import Examples from '../api_examples.json'
import highlight from "highlight.js"
import "highlight.js/styles/github.css"

export default {
  data () {
    return {
      title: '',
      language: 'csharp',
      exampleMarkdown: []
    }
  },

  methods: {
    highlightSyntax(code){
      const html = highlight.highlightAuto(code)
      return html.value
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
          const code = item.code
          const index = item.name.lastIndexOf('.')
          const language = item.name.substring(index + 1)
          const langMap = {"vb":"visual-basic", "cs": "csharp", "py":"python"}
          const md = {
            language: langMap[language],
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
