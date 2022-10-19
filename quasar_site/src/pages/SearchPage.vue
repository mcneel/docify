<template>
  <q-page>
    <q-item class="q-gutter-y-md column" style="max-width: 300px">
      <q-input
        outlined
        v-model="searchText"
        label="search"
        debounce="200"
        autofocus
      >
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-input>
    </q-item>
    <q-list padding>
      <q-item clickable v-for="item in searchResults"
        :key="item.label"
        :to="item.url">
        <q-item-section>
          <q-item-label>{{searchItemTitle(item)}}</q-item-label>
          <q-item-label caption>{{item.type.toUpperCase()}}</q-item-label>
          <q-item-label caption>{{item.summary}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import ViewModel from '../ViewModel'
import ProjInfo from '../proj_info.json'
import Fuse from 'fuse.js'

export default {
  props: {
    baseUrl: { type: String }
  },
  data () {
    return {
      searchText: '',
      searchResults: []
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
  watch: {
    searchText (val) {
      this.search(val)
    }
  },
  methods: {
    search (text) {
      console.log('searching')
      const timeStart = performance.now()
      let fuse = ViewModel.getSearchInstance()
      if (fuse == null) {
        const options = {
          includeScore: true,
          keys: [
            { name: 'typename', weight: 1.0 },
            { name: 'member', weight: 1.0 }
          ]
        }
        const searchList = ViewModel.getSearchList()
        fuse = new Fuse(searchList, options)
        ViewModel.setSearchInstance(fuse)
      }
      const timeBuild = performance.now()
      const result = fuse.search(text)
      // console.log(result)
      const timeEnd = performance.now()
      console.log(`build time ${timeBuild - timeStart} ms`)
      console.log(`search time ${timeEnd - timeBuild} ms`)
      let count = 15
      if (result.length < count) count = result.length
      const rc = []
      for (let i = 0; i < count; i++) {
        rc.push(result[i].item)
      }
      this.searchResults = rc
    },
    searchItemTitle (item) {
      if (item.type !== 'property' && item.type !== 'method' && item.type !== 'event') {
        return item.typename
      }
      return item.typename + ' ' + item.member
    }
  }
}
</script>
