import RhinoCommonApi from './RhinoCommonApi.json'

const DataTypes = {
  NAMESPACE: 'namespace',
  CLASS: 'class',
  ENUM: 'enum',
  EVENT: 'event',
  INTERFACE: 'interface',
  STRUCT: 'struct'
}

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
      let index = item.baseclass.lastIndexOf('.')
      let baseclass = item.baseclass.substring(index + 1)
      index = baseclass.indexOf('<')
      if (index > 0) {
        baseclass = baseclass.substring(0, index + 1) + 'T>'
      }
      const link = item.baseclass.toLowerCase()
      const node = { name: item.baseclass }
      item = typemap[baseclass]
      if (baseclass === 'EventArgs') item = null
      if (item) {
        node.link = link
        node.item = item
      }
      rc.push(node)
    }
    rc.reverse()
    return rc
  },
  mostRecentSince () {
    let since = '0.0'
    const sinceIsGreater = function (test, existing) {
      if (test === existing) return false
      const testVersion = test.split('.')
      const existingVersion = existing.split('.')
      if (testVersion[0] < existingVersion[0]) return false
      if (testVersion[0] === existingVersion[0] && testVersion[1] < existingVersion[1]) return false
      return true
    }
    RhinoCommonApi.forEach(type => {
      if (type.constructors) {
        type.constructors.forEach(c => {
          if (c.since && sinceIsGreater(c.since, since)) since = c.since
        })
      }
      if (type.properties) {
        type.properties.forEach(prop => {
          if (prop.since && sinceIsGreater(prop.since, since)) since = prop.since
        })
      }
      if (type.methods) {
        type.methods.forEach(m => {
          if (m.since && sinceIsGreater(m.since, since)) since = m.since
        })
      }
    })
    return since
  },
  /*   getExamples (parentType, item) {
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
      item.examples = Object.freeze(item.examples)
    }
    return item.examples
  },
 */getFilteredSet (test) {
    const api = []
    RhinoCommonApi.forEach(type => {
      const localApi = {
        name: type.name,
        dataType: type.dataType,
        summary: type.summary,
        constructors: [],
        methods: [],
        properties: [],
        values: []
      }
      if (type.namespace) localApi.namespace = type.namespace
      let added = test(type, type.constructors, localApi.constructors)
      added += test(type, type.properties, localApi.properties)
      added += test(type, type.methods, localApi.methods)
      if (type.values && type.since === '7.0') {
        added += test(type, type.values, localApi.values)
      }
      if (added > 0) {
        api.push(localApi)
      }
    })
    return api
  },
  getFilteredApi (version) {
    const test = function (type, inputList, outputList) {
      let count = 0
      if (inputList) {
        inputList.forEach(item => {
          if (item.since === version || type.since === version) {
            outputList.push(item)
            count++
          }
        })
      }
      return count
    }
    return this.getFilteredSet(test)
  },
  getReferences (item) {
    // console.log('get references')
    const searchName = item.name
    const test = function (type, inputList, outputList) {
      let count = 0
      if (inputList) {
        inputList.forEach(member => {
          if (member.signature.indexOf(searchName) >= 0) {
            let found = false
            if (type.properties === inputList || type.methods === inputList) {
              // check on match for return type
              const tokens = member.signature.split(' ')
              found = tokens[0] === searchName
              found = found || (tokens[0] === 'static' && tokens[1] === searchName)
            }
            if (!found) {
              if (type.methods === inputList || type.constructors === inputList) {
                const index = member.signature.indexOf('(')
                const parameters = member.signature.substring(index + 1, member.signature.length - 1)
                const paramTokens = parameters.split(',')
                for (let i = 0; i < paramTokens.length; i++) {
                  if (paramTokens[i].startsWith(searchName)) {
                    found = found || paramTokens[i] === searchName
                    if (paramTokens[i].length > searchName.length) {
                      found = paramTokens[i][searchName.length] === ' '
                    }
                  }
                }
              }
            }

            if (found) {
              outputList.push(member)
              count++
            }
          }
        })
      }
      return count
    }
    return this.getFilteredSet(test)
  }
}

export default ViewModel
