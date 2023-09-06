<template>
  <q-page>
    <h1>Namespaces</h1>
      <q-item clickable v-for="item in vm" :key="item.label" @click="setSelectedItem(item.path)">
        <q-item-section>
          <q-item-label class="text-accent"><b>{{item.label}}</b></q-item-label>
          <q-item-label caption>{{item.summary}}</q-item-label>
        </q-item-section>
      </q-item>
  </q-page>
</template>

<script>
import ViewModel from '../ViewModel'
import ProjInfo from '../proj_info.json'

export default {
  props: {
    baseUrl: { type: String }
  },
  data () {
    const tree = ViewModel.getTree()
    return {
      vm: tree
    }
  },
  meta () {
    return {
      title: ProjInfo.name + ' API',
      meta: {
        description: { name: 'description', content: ProjInfo.description }
      }
    }
  },
  mounted() {
    // console.log("mounted index page")
  },
  methods: {
    setSelectedItem (name) {
      this.$router.push(this.baseUrl + name.toLowerCase())
      ViewModel.setSelectedItem(name)
    }
  }
}
</script>
