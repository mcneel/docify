<template>
  <q-page>
    <h3>{{title}}</h3>
    <i>Namespace: <a href="#" @click="setSelectedItem(namespace)">{{namespace}}</a></i>
<p>{{vm.summary}}</p>

<q-list bordered class="rounded-borders q-mt-md">
  <q-expansion-item q-if="vm.constructors"
    expand-separator
    switch-toggle-side
    dense
    dense-toggle
    label="Constructors"
    :content-inset-level="1"
  >
    <q-item v-for="constructor in vm.constructors" :key="constructor.signature">
      <q-item-section>
        <q-item-label>{{constructor.signature}}</q-item-label>
        <q-item-label caption>{{constructor.summary}}</q-item-label>
      </q-item-section>
    </q-item>
  </q-expansion-item>
  <q-expansion-item q-if="vm.properties"
    expand-separator
    switch-toggle-side
    dense
    dense-toggle
    label="Properties"
    :content-inset-level="1"
  >
    <q-item v-for="property in vm.properties" :key="property.signature">
      <q-item-section>
        <q-item-label>{{property.signature}}</q-item-label>
        <q-item-label caption>{{property.summary}}</q-item-label>
      </q-item-section>
    </q-item>
  </q-expansion-item>
  <q-expansion-item q-if="vm.methods"
    expand-separator
    switch-toggle-side
    dense
    dense-toggle
    label="Methods"
    :content-inset-level="1"
  >
    <q-item v-for="method in vm.methods" :key="method.signature">
      <q-item-section>
        <q-item-label>{{method.signature}}</q-item-label>
        <q-item-label caption>{{method.summary}}</q-item-label>
      </q-item-section>
    </q-item>
  </q-expansion-item>
  <q-expansion-item q-if="vm.events"
    expand-separator
    switch-toggle-side
    dense
    dense-toggle
    label="Events"
    :content-inset-level="1"
  >
    <q-item v-for="event in vm.events" :key="event.signature">
      <q-item-section>
        <q-item-label>{{event.signature}}</q-item-label>
        <q-item-label caption>{{event.summary}}</q-item-label>
      </q-item-section>
    </q-item>
  </q-expansion-item>
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
      namespace: ''
    }
  },
  created () {
    ViewModel.setSelectedItemChangedCallback(this.onChangeSelectedItem)
  },
  methods: {
    setSelectedItem (name) {
      ViewModel.setSelectedItem(name)
    },
    onChangeSelectedItem (item) {
      console.log('selected item changed to ' + item)
      this.vm = item
      const index = item.name.lastIndexOf('.')
      this.title = item.name.substring(index + 1)
      this.namespace = item.name.substring(0, index)
    }
  }
}
</script>
