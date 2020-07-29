<template>
  <q-page>
    <h1>References for {{title}}</h1>
    <q-separator/>
    <ul>
      <li v-for="type in api" :key="type.name">
        <router-link class="routerlink" :to="itemPath(type)">{{type.name}}</router-link>
        <ul>
          <li v-for="constructor in type.constructors" :key="constructor.signature">{{constructor.signature}}</li>
          <li v-for="property in type.properties" :key="property.signature">{{property.signature}}</li>
          <li v-for="method in type.methods" :key="method.signature">{{method.signature}}</li>
        </ul>
      </li>
    </ul>
  </q-page>
</template>

<script>
import ViewModel from '../ViewModel'

export default {
  props: {
    baseUrl: { type: String }
  },
  data () {
    return {
      title: '',
      api: []
    }
  },
  meta () {
    return {
      // set the actual page title
      title: 'RhinoCommon - ' + this.title
    }
  },
  mounted () {
    if (this.$route.params && this.$route.params.datatype) {
      const item = ViewModel.findNodeByPath(this.$route.params.datatype)
      this.onChangeSelectedItem(item)
    }
  },
  watch: {
    '$route' (to, from) {
      // react to route changes...
      console.log('route watch ' + to.path + ' | ' + from.path)
      const index = to.path.lastIndexOf('/')
      const selectedItem = to.path.substring(index + 1)
      const item = ViewModel.findNodeByPath(selectedItem)
      this.onChangeSelectedItem(item)
    }
  },
  methods: {
    onChangeSelectedItem (item) {
      if (item) {
        console.log('selected item changed to ' + item)
        this.title = item.name
        this.api = ViewModel.getReferences(item)
      }
    },
    itemPath (item) {
      return this.baseUrl + ViewModel.itemPath(item)
    }
  }
}
</script>
