// URL/path helpers. Pure — ported from ViewModel.js.
import { memberName } from './signatures.js'

// Canonical lowercase path for a type/namespace node, e.g. "rhino.geometry.brep".
export function itemPath(item) {
  if (item.path) return item.path
  let path = null
  if (item.namespace) path = item.namespace + '.' + item.name
  else path = item.name
  return path.toLowerCase()
}

// Route path for a member (relative to baseUrl), e.g. "rhino.geometry.brep/getarea".
// `member` must carry `.parent` and `.namespace` (set by collectMembers).
export function memberUrl(memberType, member) {
  if (memberType == 'values') return ''
  let name = memberName(member, memberType).toLowerCase()
  const index = name.indexOf('(')
  if (index > 0) name = name.substring(0, index)
  if (memberType == 'constructors') {
    return (member.namespace + '.' + name + '/' + name).toLowerCase()
  }
  return (member.parent + '/' + name).toLowerCase()
}
