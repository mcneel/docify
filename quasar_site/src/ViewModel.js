import { DataTypes, RhinoCommonApi } from './RhinoCommonApi'
import { Examples } from './Examples'

const _selectedItemChangedCallbacks = {}
let _viewmodel = null
let _typemap = null
let _optionsList = null

const ViewModel = {
  getTree () {
    if (_viewmodel) return _viewmodel
    let viewmodel = null
    {
      // console.log('creating viewodel')
      const namespaces = []
      RhinoCommonApi.forEach(type => {
        if (type.dataType === DataTypes.NAMESPACE) {
          const typeSummary = type.summary ? type.summary : ''
          namespaces.push({
            label: type.name,
            path: type.name,
            summary: typeSummary,
            children: []
          })
        }
      })

      RhinoCommonApi.forEach(type => {
        if (type.dataType !== DataTypes.NAMESPACE) {
          const index = type.name.lastIndexOf('.')
          const testNamespace = type.name.substring(0, index)
          namespaces.forEach(ns => {
            if (ns.label === testNamespace) {
              const typeName = type.name.substring(index + 1)
              const typeSummary = type.summary ? type.summary : ''
              const item = {
                label: typeName,
                path: type.name,
                summary: typeSummary,
                icon: this.icon(type.dataType)
              }
              if (type.inherits) item.inherits = type.inherits
              ns.children.push(item)
            }
          })
        }
      })
      viewmodel = namespaces
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
    while (item && item.baseclass) {
      const typemap = this.getTypeMap()
      const baseclass = item.baseclass
      item = typemap[baseclass]
      const node = { name: baseclass }
      if (item) {
        node.link = baseclass
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
  getOptionsList () {
    if (_optionsList) return _optionsList
    const rc = []
    RhinoCommonApi.forEach(type => {
      rc.push(type.name)
    })
    _optionsList = rc
    return rc
  },
  getExamples (parentType, item) {
    if (!item.examples) {
      item.examples = []
      Examples.forEach(example => {
        example.members.forEach(member => {
          const type = member[0]
          if (parentType.name === type) {
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
