// Member collection + filtering. Pure — ported from ViewModel.js.
// IMPORTANT: unlike the old getMembers, this NEVER mutates the source data.
// It returns cloned view objects (fixes the inherited-flag corruption bug).
import { itemPath, memberUrl } from './paths.js'
import { memberName } from './signatures.js'
import { getInheritance } from './typemap.js'

// Returns cloned member objects for `node[memberType]`, decorated with
// parent/namespace/path/parents (+ inherited for base-class members), sorted.
export function collectMembers(node, memberType, typeMap, includeInherited = true) {
  const ownParent = node.namespace + '.' + node.name
  const ownParents = [`${itemPath(node)}#${memberType}`, itemPath(node)]

  let members = (node[memberType] || []).map((m) => {
    const clone = { ...m, parent: ownParent, namespace: node.namespace }
    clone.path = memberUrl(memberType, clone)
    clone.parents = ownParents
    return clone
  })

  if (includeInherited) {
    const inheritance = getInheritance(node, typeMap)
    for (const entry of inheritance) {
      if (!entry.item) continue
      const inheritedList = entry.item[memberType]
      if (inheritedList == null) continue
      const parent = entry.item.namespace + '.' + entry.item.name
      const inherited = inheritedList.map((m) => {
        const clone = { ...m, parent, namespace: entry.item.namespace, inherited: true }
        clone.path = memberUrl(memberType, clone)
        // BCL members (WWW-3489) have no local page — link out to MS Learn.
        if (entry.external) clone.externalUrl = m.docsUrl || entry.external
        return clone
      })
      members = members.concat(inherited)
    }
  }

  members.sort((a, b) =>
    memberName(a, memberType).localeCompare(memberName(b, memberType))
  )
  return members
}

// Walks every type, running `test(type, inputList, outputList)` over each member
// bucket; keeps types where any member was collected. `test` returns a count.
export function filteredSet(apiInfo, test) {
  const api = []
  apiInfo.forEach((type) => {
    const localApi = {
      name: type.name,
      dataType: type.dataType,
      summary: type.summary,
      constructors: [],
      methods: [],
      properties: [],
      values: [],
      operators: [],
      fields: [],
    }
    if (type.namespace) localApi.namespace = type.namespace
    let added = test(type, type.constructors, localApi.constructors)
    added += test(type, type.properties, localApi.properties)
    added += test(type, type.methods, localApi.methods)
    added += test(type, type.operators, localApi.operators)
    added += test(type, type.fields, localApi.fields)
    if (type.values && type.since === '7.0') {
      added += test(type, type.values, localApi.values)
    }
    if (added > 0) api.push(localApi)
  })
  return api
}

// Members introduced exactly in `version` (used by What's New).
export function getFilteredApi(apiInfo, version) {
  const test = (type, inputList, outputList) => {
    let count = 0
    if (inputList) {
      inputList.forEach((item) => {
        if (item.since === version || type.since === version) {
          outputList.push(item)
          count++
        }
      })
    }
    return count
  }
  return filteredSet(apiInfo, test)
}

// Members across the API that reference `item` by name (used by References page).
export function references(apiInfo, item) {
  const searchName = item.name
  const test = (type, inputList, outputList) => {
    let count = 0
    if (inputList) {
      inputList.forEach((member) => {
        if (member.signature.indexOf(searchName) >= 0) {
          let found = false
          if (type.properties === inputList || type.methods === inputList) {
            // match on return type
            const tokens = member.signature.split(' ')
            found = tokens[0] === searchName
            found = found || (tokens[0] === 'static' && tokens[1] === searchName)
          }
          if (!found) {
            if (type.methods === inputList || type.constructors === inputList) {
              const index = member.signature.indexOf('(')
              const parameters = member.signature.substring(
                index + 1,
                member.signature.length - 1
              )
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
  return filteredSet(apiInfo, test)
}
