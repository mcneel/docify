<template>
  <q-page>
    <h4>{{title}}</h4>
    <i v-if="namespace">Namespace: <a href="#" @click="setSelectedItem(namespace)">{{namespace}}</a></i>
<p>{{vm.summary}}</p>
<q-list bordered class="rounded-borders q-mt-md">
  <q-expansion-item v-for="section in memberSections"
    :key="section.title"
    expand-separator
    switch-toggle-side
    dense
    dense-toggle
    :value="section.expanded"
    :label="section.title"
    :content-inset-level="1"
  >
    <q-item v-for="member in section.items" :key="member.signature">
      <q-item-section>
        <q-item-label>{{member.signature}}</q-item-label>
        <q-item-label caption>
          <q-badge v-if="member.since" outline color="secondary">{{member.since.toFixed(1)}}
            <q-tooltip>Available since {{member.since.toFixed(1)}}</q-tooltip>
          </q-badge>
          {{member.summary}}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-expansion-item>
  <q-item v-for="item in namespaces" :key="item">{{item}}</q-item>
</q-list>
</q-page>
</template>

<script>
import ViewModel from '../ViewModel'

export default {
  data () {
    return {
      vm: {},
      title: '',
      namespace: '',
      memberSections: [],
      namespaces: null
    }
  },
  created () {
    ViewModel.setSelectedItemChangedCallback(this.onChangeSelectedItem)
  },
  mounted () {
    if (this.$route.params && this.$route.params.datatype) {
      ViewModel.setSelectedItem(this.$route.params.datatype)
    }
  },
  methods: {
    setSelectedItem (name) {
      this.$router.push('/' + name)
      ViewModel.setSelectedItem(name)
    },
    onChangeSelectedItem (item) {
      console.log('selected item changed to ' + item)
      this.vm = item
      if (item.isNamespace) {
        this.title = item.name
        this.namespace = null
        this.memberSections = []
        this.namespaces = item.children
      } else {
        const index = item.name.lastIndexOf('.')
        this.title = item.name.substring(index + 1)
        this.namespace = item.name.substring(0, index)
        this.memberSections = []
        this.namespaces = null
        if (item.constructors) {
          this.memberSections.push({
            title: 'Constructors (' + item.constructors.length + ')',
            items: item.constructors,
            expanded: true
          })
        }
        if (item.values) {
          this.memberSections.push({
            title: 'Values',
            items: item.values,
            expanded: true
          })
        }
        if (item.properties) {
          this.memberSections.push({
            title: 'Properties (' + item.properties.length + ')',
            items: item.properties,
            expanded: true
          })
        }
        if (item.methods) {
          this.memberSections.push({
            title: 'Methods (' + item.methods.length + ')',
            items: item.methods,
            expanded: true
          })
        }
        if (item.events) {
          this.memberSections.push({
            title: 'Events (' + item.events.length + ')',
            items: item.events,
            expanded: true
          })
        }
      }
    }
  }
}
</script>
