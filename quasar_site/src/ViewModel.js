import { RhinoCommonApi } from './RhinoCommonApi'

let _viewmodel = null
let _selectedItemChangedCallback = null

function buildClassTree (tokens, node, fullName) {
  if (!tokens || tokens.length < 1) return
  const title = tokens.splice(0, 1)[0]
  if (tokens.length < 1) {
    // title represents a leaf (class, struct, interface, enum)
    if (!node.children) {
      node.children = []
    }
    node.children.push({
      label: title,
      path: fullName
    })
    return
  }

  if (!node.label) {
    node.label = title
    node.path = fullName
    node.children = []
  }
  for (let i = 0; i < node.children.length; i++) {
    if (node.children[i].label === title) {
      buildClassTree(tokens, node.children[i], fullName)
      return
    }
  }

  const index = fullName.indexOf(title)
  const namespace = fullName.substring(0, index) + title
  node.children.push({
    label: title,
    path: namespace,
    children: []
  })
  buildClassTree(tokens, node.children[node.children.length - 1], fullName)
}

const ViewModel = {
  getTree () {
    if (!_viewmodel) {
      // console.log('creating viewodel')
      const namespaces = {
        label: 'Rhino',
        path: 'Rhino',
        children: []
      }
      RhinoCommonApi.forEach(type => {
        const tokens = type.name.split('.')
        const path = type.name
        if (tokens[0] !== 'Rhino') return
        tokens.splice(0, 1)
        buildClassTree(tokens, namespaces, path)
      })
      _viewmodel = namespaces
    }
    return _viewmodel
  },
  setSelectedItemChangedCallback (callback) {
    _selectedItemChangedCallback = callback
  },
  setSelectedItem (item) {
    const typename = item.toLowerCase()
    for (let i = 0; i < RhinoCommonApi.length; i++) {
      const node = RhinoCommonApi[i]
      if (node.name.toLowerCase() === typename) {
        _selectedItemChangedCallback(node)
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
      _selectedItemChangedCallback(obj)
    }
  },
  namespaceFromItem (item) {
    const index = item.name.lastIndexOf('.')
    return item.name.substring(0, index)
  }
}

export default ViewModel
