import { DataTypes, RhinoCommonApi } from './RhinoCommonApi'
import { Examples } from './Examples'

const _selectedItemChangedCallbacks = {}
let _viewmodel = null
let _typemap = null

const ViewModel = {
  itemPath (item) {
    let path = null
    if (item.namespace) path = item.namespace + '.' + item.name
    else path = item.name
    return path.toLowerCase()
  },
  getTree () {
    if (_viewmodel) return _viewmodel
    let viewmodel = null
    {
      // console.log('creating viewodel')
      const namespaceDict = {}
      RhinoCommonApi.forEach(type => {
        let summary = ''
        if (type.summary) summary = type.summary
        if (type.dataType === DataTypes.NAMESPACE) {
          namespaceDict[type.name] = {
            label: type.name,
            path: this.itemPath(type),
            summary: summary,
            children: []
          }
        } else {
          const item = {
            label: type.name,
            path: this.itemPath(type),
            summary: summary,
            icon: this.icon(type.dataType)
          }
          if (type.inherits) item.inherits = type.inherits
          const node = namespaceDict[type.namespace]
          if (!node) {
            console.log('no namespace for ' + type.name)
          } else {
            namespaceDict[type.namespace].children.push(item)
          }
        }
      })
      viewmodel = []
      const namespaceKeys = Object.keys(namespaceDict).sort()
      namespaceKeys.forEach(ns => {
        viewmodel.push(namespaceDict[ns])
      })
    }
    _viewmodel = viewmodel
    return viewmodel
  },
  getTypeMap () {
    if (_typemap) return _typemap
    const typemap = {}
    RhinoCommonApi.forEach(type => {
      if (type.dataType !== DataTypes.NAMESPACE) {
        typemap[type.name] = type
      }
    })
    _typemap = typemap
    return typemap
  },
  setSelectedItemChangedCallback (source, callback) {
    _selectedItemChangedCallbacks[source] = callback
  },
  findNodeByPath (path) {
    path = path.toLowerCase()
    let found = null
    RhinoCommonApi.forEach(type => {
      if (found) return
      if (this.itemPath(type) === path) found = type
    })
    return found
  },
  setSelectedItem (item) {
    const node = this.findNodeByPath(item)
    if (node) {
      for (const [, callback] of Object.entries(_selectedItemChangedCallbacks)) {
        callback(node)
      }
    }
  },
  icon (dataType) {
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
  },
  getInheritence (item) {
    const rc = []
    let count = 0
    while (item && item.baseclass) {
      count++
      if (count > 10) break // don't allow infinite loop due to some bug in my code
      const typemap = this.getTypeMap()
      const index = item.baseclass.lastIndexOf('.')
      const baseclass = item.baseclass.substring(index + 1)
      const link = item.baseclass.toLowerCase()
      const node = { name: item.baseclass }
      item = typemap[baseclass]
      if (baseclass === 'EventArgs') item = null
      if (item) {
        node.link = link
      }
      rc.push(node)
    }
    rc.reverse()
    return rc
  },
  mostRecentSince () {
    let since = 0
    RhinoCommonApi.forEach(type => {
      if (type.constructors) {
        type.constructors.forEach(c => {
          if (c.since && c.since > since) since = c.since
        })
      }
      if (type.properties) {
        type.properties.forEach(prop => {
          if (prop.since && prop.since > since) since = prop.since
        })
      }
      if (type.methods) {
        type.methods.forEach(m => {
          if (m.since && m.since > since) since = m.since
        })
      }
    })
    return since
  },
  getExamples (parentType, item) {
    if (!item.examples) {
      item.examples = []
      let fullname = null
      if (parentType.namespace) fullname = parentType.namespace + '.' + parentType.name
      else fullname = parentType.name
      Examples.forEach(example => {
        example.members.forEach(member => {
          const type = member[0]
          if (fullname === type) {
            const signature = member[1]
            if (signature === item.signature) {
              item.examples.push(example)
            }
          }
        })
      })
    }
    return item.examples
  },
  getFilteredApi (version) {
    const api = []
    RhinoCommonApi.forEach(type => {
      const localApi = {
        name: type.name,
        dataType: type.dataType,
        summary: type.summary,
        constructors: [],
        methods: [],
        properties: []
      }
      if (type.namespace) localApi.namespace = type.namespace
      const test = function (inputList, outputList, version) {
        let count = 0
        if (inputList) {
          inputList.forEach(item => {
            if (item.since === version) {
              outputList.push(item)
              count++
            }
          })
        }
        return count
      }
      let added = test(type.constructors, localApi.constructors, version)
      added += test(type.properties, localApi.properties, version)
      added += test(type.methods, localApi.methods, version)
      if (added > 0) {
        api.push(localApi)
      }
    })
    return api
  }
}

export default ViewModel
