import { DataTypes, RhinoCommonApi } from './RhinoCommonApi'

let _viewmodel = null
const _selectedItemChangedCallbacks = {}

function icon (dataType) {
  switch (dataType) {
    case DataTypes.CLASS:
      return 'mdi-alpha-c-circle-outline'
    case DataTypes.ENUM:
      return 'mdi-alpha-e-box-outline'
    case DataTypes.EVENT:
      return 'mdi-alpha-e-circle-outline'
    case DataTypes.INTERFACE:
      return 'mdi-alpha-i-circle-outline'
    case DataTypes.STRUCT:
      return 'mdi-alpha-s-circle-outline'
    case DataTypes.NAMESPACE:
      return 'mdi-code-braces'
    default:
      return null
  }
}

const ViewModel = {
  getTree () {
    if (!_viewmodel) {
      // console.log('creating viewodel')
      const namespaces = []
      RhinoCommonApi.forEach(type => {
        if (type.dataType === DataTypes.NAMESPACE) {
          namespaces.push({
            label: type.name,
            path: type.name,
            children: []
          })
        }
      })
      namespaces.sort(function (a, b) {
        return a.label.localeCompare(b.label)
      })

      RhinoCommonApi.forEach(type => {
        if (type.dataType !== DataTypes.NAMESPACE) {
          const index = type.name.lastIndexOf('.')
          const testNamespace = type.name.substring(0, index)
          namespaces.forEach(ns => {
            if (ns.label === testNamespace) {
              const typeName = type.name.substring(index + 1)
              ns.children.push({
                label: typeName,
                path: type.name,
                summary: type.summary,
                icon: icon(type.dataType)
              })
            }
          })
        }
      })
      _viewmodel = namespaces
    }
    return _viewmodel
  },
  setSelectedItemChangedCallback (source, callback) {
    _selectedItemChangedCallbacks[source] = callback
  },
  setSelectedItem (item) {
    const typename = item.toLowerCase()
    for (let i = 0; i < RhinoCommonApi.length; i++) {
      const node = RhinoCommonApi[i]
      if (node.name.toLowerCase() === typename) {
        for (const [, callback] of Object.entries(_selectedItemChangedCallbacks)) {
          callback(node)
        }
        return
      }
    }
    // No item found. Check to see if this is a namespace
    let tree = this.getTree()
    const tokens = item.split('.')
    if (tree.label.toLowerCase() === tokens[0].toLowerCase()) {
      for (let i = 1; i < tokens.length; i++) {
        let found = false
        for (let j = 0; j < tree.children.length; j++) {
          if (tree.children[j].label.toLowerCase() === tokens[i].toLowerCase()) {
            tree = tree.children[j]
            found = true
            break
          }
        }
        if (!found) return
      }
      const children = []
      for (let i = 0; i < tree.children.length; i++) {
        children.push(tree.children[i].label)
      }
      const obj = {
        isNamespace: true,
        name: item,
        children: children
      }
      for (const [, callback] of Object.entries(_selectedItemChangedCallbacks)) {
        callback(obj)
      }
    }
  },
  namespaceFromItem (item) {
    const index = item.name.lastIndexOf('.')
    return item.name.substring(0, index)
  }
}

export default ViewModel
