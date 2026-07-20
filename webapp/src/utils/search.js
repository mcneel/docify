// Search index construction. Pure — ported from ViewModel.js#getSearchList.
import { signatureAnchorRef } from './signatures.js'

// Fuse.js options. NOTE: the old code had `{name:'member',weight:10}.name`, which
// silently collapsed to the string "member" (default weight 1). Fixed here so the
// member name properly dominates ranking.
export const fuseOptions = {
  includeScore: true,
  useExtendedSearch: true,
  keys: [
    { name: 'member', weight: 10 },
    { name: 'url', weight: 2 },
    { name: 'keywords', weight: 3 },
  ],
}

// Flattens the API into ~18k searchable entries (types + members).
export function buildSearchList(apiInfo) {
  const items = []
  apiInfo.forEach((entry) => {
    if (entry.dataType === 'namespace') return
    const dataTypeUrl = (entry.namespace + '.' + entry.name).toLowerCase()
    const typename = entry.namespace + '.' + entry.name
    let node = {
      typename,
      member: entry.name,
      type: entry.dataType,
      url: dataTypeUrl,
      keywords: dataTypeUrl.replaceAll('.', ' '),
    }
    if (entry.summary) node.summary = entry.summary
    items.push(node)

    if (entry.properties) {
      entry.properties.forEach((prop) => {
        const chunks = prop.signature.split(' ')
        node = { typename, member: chunks[chunks.length - 1] }
        if (items[items.length - 1].member === node.member) return
        node.type = 'property'
        node.url = `${dataTypeUrl}/${node.member.toLowerCase()}#${signatureAnchorRef(prop.signature)}`
        node.since = entry.since
        node.keywords = dataTypeUrl.replaceAll('.', ' ') + ' ' + node.member.toLowerCase()
        if (prop.summary) node.summary = prop.summary
        items.push(node)
      })
    }
    if (entry.methods) {
      entry.methods.forEach((method) => {
        let chunks = method.signature.split('(')
        chunks = chunks[0].split(' ')
        node = { typename, member: chunks[chunks.length - 1] }
        node.type = 'method'
        node.url = `${dataTypeUrl}/${node.member.toLowerCase()}#${signatureAnchorRef(method.signature)}`
        node.since = method.since
        node.keywords = dataTypeUrl.replaceAll('.', ' ') + ' ' + node.member.toLowerCase()
        if (method.summary) node.summary = method.summary
        items.push(node)
      })
    }
    if (entry.events) {
      entry.events.forEach((event) => {
        const chunks = event.signature.split(' ')
        node = { typename, member: chunks[chunks.length - 1] }
        if (items[items.length - 1].member === node.member) return
        node.type = 'event'
        node.url = `${dataTypeUrl}/${node.member.toLowerCase()}#${signatureAnchorRef(event.signature)}`
        node.since = event.since
        node.keywords = dataTypeUrl.replaceAll('.', ' ') + ' ' + node.member.toLowerCase()
        if (event.summary) node.summary = event.summary
        items.push(node)
      })
    }
    if (entry.operators) {
      entry.operators.forEach((operator) => {
        const chunks = operator.signature.split(' ')
        node = { typename, member: chunks[chunks.length - 1] }
        if (items[items.length - 1].member === node.member) return
        node.type = 'operator'
        node.url = `${dataTypeUrl}/${node.member.toLowerCase()}#${signatureAnchorRef(operator.signature)}`
        node.since = operator.since
        node.keywords = dataTypeUrl.replaceAll('.', ' ') + ' ' + node.member.toLowerCase()
        if (operator.summary) node.summary = operator.summary
        items.push(node)
      })
    }
    if (entry.fields) {
      entry.fields.forEach((field) => {
        const chunks = field.signature.split(' ')
        node = { typename, member: chunks[chunks.length - 1] }
        if (items[items.length - 1].member === node.member) return
        node.type = 'field'
        node.url = `${dataTypeUrl}/${node.member.toLowerCase()}#${signatureAnchorRef(field.signature)}`
        node.since = field.since
        node.keywords = dataTypeUrl.replaceAll('.', ' ') + ' ' + node.member.toLowerCase()
        if (field.summary) node.summary = field.summary
        items.push(node)
      })
    }
  })
  return items
}
