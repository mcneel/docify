// Navigation tree construction. Pure — ported from ViewModel.js (getTree/childTree/lazyChildForPath).
import { itemPath } from './paths.js'
import { memberName, shortSignature, signatureAnchorRef } from './signatures.js'
import { collectMembers } from './members.js'

// Builds the namespace -> type tree (types start with empty, lazily-loaded children)
// and a pathMap (itemPath -> raw type) for O(1) lookups.
export function buildTree(apiInfo) {
  const pathMap = {}
  const namespaceDict = {}

  apiInfo.forEach((type) => {
    const summary = type.summary || ''
    if (type.dataType === 'namespace') {
      namespaceDict[type.name] = {
        label: type.name,
        path: itemPath(type),
        summary,
        children: [],
      }
    } else {
      const item = { label: type.name, path: itemPath(type), summary, children: [] }
      if (
        type.methods ||
        type.constructors ||
        type.properties ||
        type.events ||
        type.operators ||
        type.fields
      ) {
        item.lazy = true
      }
      if (type.inherits) item.inherits = type.inherits
      const node = namespaceDict[type.namespace]
      if (!node) console.warn('no namespace for ' + type.name)
      else node.children.push(item)
    }
    pathMap[itemPath(type)] = type
  })

  const tree = Object.keys(namespaceDict)
    .sort()
    .map((ns) => namespaceDict[ns])
  return { tree, pathMap }
}

// Member-group child nodes for a type (Constructors/Properties/Methods/Events/
// Operators/Fields), collapsing overloads into secondary children (WWW-2046).
const GROUP_ORDER = ['Constructors', 'Properties', 'Methods', 'Events', 'Operators', 'Fields']

export function buildMemberGroups(type, typeMap) {
  const groups = []
  for (const childType of GROUP_ORDER) {
    const lc = childType.toLowerCase()
    const includeInherited = lc !== 'constructors'
    const members = collectMembers(type, lc, typeMap, includeInherited)
    if (!members || members.length < 1) continue

    const seen = []
    const children = members
      .map((x) => {
        if (seen.includes(x.path)) return null
        seen.push(x.path)
        const labelParts = shortSignature(memberName(x, lc))
        const overloads = members.filter((m) => m.path == x.path)
        return {
          label: labelParts[0],
          labelSecondary: labelParts[1],
          overload: x.overload,
          path: x.path,
          header: 'secondary',
          deprecated: x.deprecated,
          obsolete: x.obsolete,
          since: x.since,
          inherited: x.inherited,
          children:
            overloads.length > 1
              ? overloads.map((o) => ({
                  label: shortSignature(memberName(o, lc))[1],
                  path: `${o.path}#${signatureAnchorRef(o.signature)}`,
                  since: o.since,
                }))
              : [],
        }
      })
      .filter(Boolean)

    groups.push({
      label: childType,
      namespace: type.namespace,
      parents: [itemPath(type)],
      path: `${itemPath(type)}#${lc}`,
      children,
    })
  }
  return groups
}
