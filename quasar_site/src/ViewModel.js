import ApiInfo from './api_info.json'

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
let _searchInstance = null
let _selectedPath = ''
let _lastFound = null
let _pathMap = {}

const ViewModel = {
  itemPath (item) {
    if (item.path){
      return item.path
    }
    let path = null
    if (item.namespace) path = item.namespace + '.' + item.name
    else path = item.name
    return path.toLowerCase()
  },
  childTree (parent, childType){
    const childrenGroupPath =  `${this.itemPath(parent)}#${childType.toLowerCase()}`
    const includeInherited = childType.toLowerCase() == "constructors" ? false : true
    const members =  this.getMembers(parent, childType.toLowerCase(), includeInherited)
    if (members.length <1){
      return
    }
    const children = members.map(x => {
      return {label:this.memberName(x, childType.toLowerCase()), path: x.path, header: 'secondary', deprecated: x.deprecated}
    })
    const childrenGroup = { label: childType, namespace: parent.namespace, parents: [this.itemPath(parent)], path: childrenGroupPath, children }
    _pathMap[childrenGroupPath]= childrenGroup
    return childrenGroup
  },
  getTree () {
    console.log("start tree")
    if (_viewmodel) return _viewmodel
    let viewmodel = null
    {
      // console.log('creating viewodel')
      const namespaceDict = {}
      ApiInfo.forEach(type => {
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
            children : []
          }
          const constructors = this.childTree(type, "Constructors")
          if (constructors){ item.children.push(constructors)}
          const properties = this.childTree(type, "Properties")
          if (properties){ item.children.push(properties)}
          const methods = this.childTree(type, "Methods")
          if (methods){ item.children.push(methods)}
          const events = this.childTree(type, "Events")
          if (events){ item.children.push(events)}

          if (type.inherits) item.inherits = type.inherits
          const node = namespaceDict[type.namespace]
          if (!node) {
            console.warn('no namespace for ' + type.name)
          } else {
            namespaceDict[type.namespace].children.push(item)
          }
        }
        _pathMap[this.itemPath(type)]= type
      })
      viewmodel = []
      const namespaceKeys = Object.keys(namespaceDict).sort()
      namespaceKeys.forEach(ns => {
        viewmodel.push(namespaceDict[ns])
      })
    }
    console.log("end tree")
    _viewmodel = viewmodel
    return viewmodel
  },
  getTypeMap () {
    if (_typemap) return _typemap
    const typemap = {}
    ApiInfo.forEach(type => {
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

    if (_lastFound && this.itemPath(_lastFound) === path) {
      return _lastFound
    }

    ApiInfo.forEach(type => {
      if (found) return
      if (this.itemPath(type) === path) found = type
    })
    _lastFound = found
    return found
  },
  setSelectedItem (item, updateRoute = true) {
    let path = item.dataType ? this.itemPath(item) : item
    path = path.toLowerCase()
    if (path === _selectedPath) return // no change
    _selectedPath = path
    const node = item.dataType ? item :  _pathMap[path]
    if (node) {
      for (const [, callback] of Object.entries(_selectedItemChangedCallbacks)) {
        callback(node, updateRoute)
      }
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
    ApiInfo.forEach(type => {
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
  getFilteredSet (test) {
    const api = []
    ApiInfo.forEach(type => {
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
  },
  getSearchInstance () {
    return _searchInstance
  },
  setSearchInstance (searchInstance) {
    _searchInstance = searchInstance
  },
  getSearchList () {
    const items = []
    ApiInfo.forEach(entry => {
      // skip namespaces
      if (entry.dataType === 'namespace') return
      const dataTypeUrl = (entry.namespace + '.' + entry.name).toLowerCase()
      const typename = entry.namespace + '.' + entry.name
      let node = {
        typename: typename,
        member: entry.name,
        type: entry.dataType,
        url: dataTypeUrl
      }
      if (entry.summary) node.summary = entry.summary
      items.push(node)
      if (entry.properties) {
        entry.properties.forEach(prop => {
          const chunks = prop.signature.split(' ')
          node = { typename: typename, member: chunks[chunks.length - 1] }
          if (items[items.length - 1].member === node.member) return
          node.type = 'property'
          node.url = dataTypeUrl + '/' + node.member.toLowerCase()
          if (prop.summary) node.summary = prop.summary
          items.push(node)
        })
      }
      if (entry.methods) {
        entry.methods.forEach(method => {
          let chunks = method.signature.split('(')
          chunks = chunks[0].split(' ')
          node = { typename: typename, member: chunks[chunks.length - 1] }
          if (items[items.length - 1].member === node.member) return
          node.type = 'method'
          node.url = dataTypeUrl + '/' + node.member.toLowerCase()
          if (method.summary) node.summary = method.summary
          items.push(node)
        })
      }
      if (entry.events) {
        entry.events.forEach(event => {
          const chunks = event.signature.split(' ')
          node = { typename: typename, member: chunks[chunks.length - 1] }
          if (items[items.length - 1].member === node.member) return
          node.type = 'event'
          node.url = dataTypeUrl + '/' + node.member.toLowerCase()
          if (event.summary) node.summary = event.summary
          items.push(node)
        })
      }
    })
    return items
  },

  getMembers (node, memberType, inherited=true) {
    const inheritence = this.getInheritence(node)
    let members = [].concat(node[memberType])
    if (node[memberType]) {
      for (let i = 0; i < members.length; i++) {
        members[i].parent = node.namespace + '.' + node.name
        members[i].namespace = node.namespace
        const url = this.memberUrl(memberType, members[i])
        members[i].path = url
        members[i].parents = [`${this.itemPath(node)}#${memberType}`, this.itemPath(node)]
        _pathMap[url]= members[i]
      }
    }
    members = members.filter(m => m != null)
    if (inherited){
      for (const i in inheritence) {
        if (!inheritence[i].item) continue
        const inheritedMembers = inheritence[i].item[memberType]
        if (inheritedMembers == null) continue

        for (let j = 0; j < inheritedMembers.length; j++) {
            inheritedMembers[j].parent = inheritence[i].item.namespace + '.' + inheritence[i].item.name
            inheritedMembers[j].namespace = inheritence[i].item.namespace

            const url = this.memberUrl(memberType, inheritedMembers[j])
            inheritedMembers[j].path = url
            _pathMap[url]= inheritedMembers[j]
        }

        members = members.concat(inheritedMembers)
        members = members.filter(m => m != null)
        if (memberType == "methods")
        {
          const m = { methods: true }
          members.sort((a, b) => this.memberName(a, m).localeCompare(this.memberName(b, m)))
        }
        if (memberType == "properties")
        {
          const m = { properties: true }
          members.sort((a, b) => this.memberName(a, m).localeCompare(this.memberName(b, m)))
        }
      }
    }
    return members
  },
  memberName (member, memberType) {
    if (memberType == "constructors" || memberType == "values") return member.signature
    if (memberType == "methods"){
      const match = member.signature.match(/\S*\(.*\)/g)
      return match[0]
    }
    const tokens = member.signature.split(' ')
    let name = tokens[1]
    if (tokens[0] === 'static' && memberType != "events") {
      name = tokens[2]
    }
    if (!name){
      return ""
    }
    let index = name.indexOf('(')
    if (index > 0) {
      index = member.signature.indexOf(name)
      return member.signature.substring(index)
    }
    return name
  },
  memberUrl (memberType, member) {
    if (memberType == "values") return ''
    let name = this.memberName(member, memberType).toLowerCase()
    const index = name.indexOf('(')
    if (index > 0) name = name.substring(0, index)
    if (memberType == "constructors") {
      const url =  member.namespace + '.' + name + '/' + name
      return url.toLowerCase()
    }
    const url = member.parent + '/' + name
    return url.toLowerCase()
  }
}

export default ViewModel
