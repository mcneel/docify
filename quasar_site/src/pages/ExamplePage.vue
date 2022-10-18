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
        <code-highlight :language="markdown.language">
          <pre>
            {{markdown.code}}
          </pre>
        </code-highlight>
      </q-tab-panel>
     </q-tab-panels>
  </q-page>
</template>

<script>
import Examples from '../api_examples.json'
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import 'prism-es6/components/prism-markup-templating';
import 'prism-es6/components/prism-python';
import 'prism-es6/components/prism-csharp';
import 'prism-es6/components/prism-visual-basic';
import "vue-code-highlight/themes/prism-tomorrow.css";

export default {
  data () {
    return {
      title: '',
      language: 'csharp',
      exampleMarkdown: []
    }
  },
  components: {
    CodeHighlight
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
