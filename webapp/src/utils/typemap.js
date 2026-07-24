// Type index + inheritance helpers. Pure — ported from ViewModel.js.
import { lookupBcl } from './bcl.js'

// name -> type. Rhino.Geometry takes precedence on name clashes (RH-80781).
export function buildTypeMap(apiInfo) {
  const typemap = {}
  apiInfo.forEach((type) => {
    if (type.dataType === 'namespace') return
    const existing = typemap[type.name]
    if (existing) {
      if (existing.namespace != 'Rhino.Geometry') typemap[type.name] = type
    } else {
      typemap[type.name] = type
    }
  })
  return typemap
}

// Base-class chain (root first). Each node: { name, link?, item? }.
export function getInheritance(item, typeMap) {
  const rc = []
  let count = 0
  while (item && item.baseclass) {
    count++
    if (count > 10) break // guard against cycles
    let index = item.baseclass.lastIndexOf('.')
    let baseclass = item.baseclass.substring(index + 1)
    index = baseclass.indexOf('<')
    if (index > 0) baseclass = baseclass.substring(0, index + 1) + 'T>'
    const link = item.baseclass.toLowerCase()
    const node = { name: item.baseclass }
    const next = typeMap[baseclass]
    if (baseclass === 'EventArgs') {
      item = null
    } else if (next) {
      node.link = link
      node.item = next
      item = next
    } else {
      // Base type isn't a parsed RhinoCommon type — try the generated BCL metadata
      // (WWW-3489) so the chain links out and inherited members can be listed.
      const bcl = lookupBcl(baseclass)
      if (bcl) {
        node.item = bcl
        node.external = bcl.docsUrl
      }
      item = null // BCL bases don't chain further here
    }
    rc.push(node)
  }
  rc.reverse()
  return rc
}

// Types whose baseclass is `item`, each with a lowercase `link`.
export function getDerivedClasses(item, typeMap) {
  const fullName = `${item.namespace}.${item.name}`.toLocaleLowerCase()
  const children = Object.values(typeMap).filter(
    (c) => c.baseclass && c.baseclass.toLocaleLowerCase() == fullName
  )
  return children.map((c) => ({
    ...c,
    link: `${c.namespace}.${c.name}`.toLocaleLowerCase(),
  }))
}

// Resolve a C# type token to a type node (superset incl. WWW-2523/WWW-2098 fallbacks).
export function resolveToken(token, typeMap, datatypeName) {
  if (token.length < 1 || token[0] === token[0].toLowerCase()) return null
  if (token.endsWith('[]')) token = token.substring(0, token.length - 2)
  let type = typeMap[token]
  if (!type) {
    // enums with dot-separated names (WWW-2098)
    type = typeMap[`${datatypeName}.${token}`]
    if (!type) {
      // last-segment fallback (WWW-2523)
      type = typeMap[token.split('.').slice(-1)[0]]
      if (!type) return null
    }
  }
  return type
}
