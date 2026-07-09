// C# signature parsing/formatting. Pure — ported from ViewModel.js / MemberSignature.vue.

// The display name for a member, given its member-type bucket.
export function memberName(member, memberType) {
  if (memberType == 'constructors' || memberType == 'values') return member.signature
  if (memberType == 'operators') {
    const match = member.signature.match(/\S*\(.*\)/g)
    return match[0].split('(')[0]
  }
  if (memberType == 'fields') {
    const declaration = member.signature.split('=')[0].trim()
    return declaration.split(' ').slice(-1)[0]
  }
  if (memberType == 'methods') {
    const match = member.signature.match(/\S*\(.*\)/g)
    return match[0]
  }
  if (memberType == 'properties') {
    if (member.signature.includes('this[int')) return 'Item'
  }
  const tokens = member.signature.split(' ')
  let name = tokens[1]
  if (tokens[0] === 'static') name = tokens[2]
  if (!name) return ''
  let index = name.indexOf('(')
  if (index > 0) {
    index = member.signature.indexOf(name)
    return member.signature.substring(index)
  }
  return name
}

// Splits a signature into [name, "(shortArgTypes)"]; arg types are un-namespaced.
export function shortSignature(signature) {
  if (signature.includes('(')) {
    const parts = signature.split('(')
    const name = parts[0]
    const argsTypes = parts[1]
      .replace(/^\)+|\)+$/g, '')
      .split(',')
      .map((a) => a.trim().split(' ')[0].split('.').slice(-1)[0])
    return [name, `(${argsTypes.join(', ')})`]
  }
  return [signature, '']
}

// URL/DOM anchor for a signature's overload, e.g. "(point3d,point3d)".
export function signatureAnchorRef(signature) {
  return shortSignature(signature)[1].toLocaleLowerCase().replace(/\s/g, '')
}

// Breaks a member signature into renderable chunks (return type, params, links).
// `links` supplies { typeUrl, typeFromToken } (from useTypeLinks) to keep this pure.
export function parseSignatureChunks(member, links) {
  const { typeUrl, typeFromToken } = links
  const tokens = member.signature.split(' ')
  const chunks = []
  if (tokens[0] === 'static') {
    chunks.push({ name: tokens[0] + ' ' })
    tokens.shift()
  }
  if (member.isEvent) {
    chunks.push({ name: tokens[0] + ' ' })
    chunks.push({ name: tokens[1] })
    return chunks
  }
  if (member.isProperty || member.isMethod || member.isOperator) {
    const link = typeUrl(tokens[0])
    const returnType = typeFromToken(tokens[0])
    const name = tokens[0].split('.').slice(-1)[0]
    if (link) {
      chunks.push({
        link,
        name,
        isReturn: true,
        enumValues:
          returnType && returnType.dataType == 'enum'
            ? returnType.values.map((v) => v.signature)
            : null,
      })
      chunks.push({ name: ' ' })
    } else {
      chunks.push({ name: name + ' ', isReturn: true })
    }
    tokens.shift()
  }
  const declaration = tokens.join(' ')
  const parenIndex = declaration.indexOf('(')
  if (parenIndex > 0) {
    chunks.push({ name: declaration.substring(0, parenIndex + 1) })
    const parameterTokens = declaration
      .substring(parenIndex + 1, declaration.length - 1)
      .split(',')

    for (let i = 0; i < parameterTokens.length; i++) {
      if (
        parameterTokens[i].indexOf('<') > 0 &&
        parameterTokens[i].indexOf('>') < 0 &&
        i < parameterTokens.length - 1
      ) {
        // Only for args formatted like <a,b> (not just <a>).
        parameterTokens[i] = parameterTokens[i] + ',' + parameterTokens[i + 1]
        parameterTokens[i + 1] = ''
      }
    }

    for (let i = 0; i < parameterTokens.length; i++) {
      if (!parameterTokens[i]) continue
      if (i > 0) chunks.push({ name: ', ' })
      const parameter = parameterTokens[i].trim()
      const paramChunks = parameter.split(' ')
      let typeToken = paramChunks[paramChunks.length - 2]
      const paramName = paramChunks[paramChunks.length - 1]
      const link = typeUrl(typeToken)
      const paramType = typeFromToken(typeToken)
      const enumValues =
        paramType && paramType.dataType == 'enum'
          ? paramType.values.map((v) => v.signature)
          : null

      // Remove namespaced types (usually system.blah.blah).
      typeToken = typeToken.split('.').slice(-1)[0]

      chunks.push({ indent: true })
      for (let j = 0; j < paramChunks.length - 2; j++) {
        chunks.push({ name: paramChunks[j] + ' ' })
      }
      chunks.push({ link, enumValues, name: typeToken + ' ' })
      chunks.push({ name: paramName, role: 'name' })
    }

    chunks.push({
      name: ')',
      break: parameterTokens.filter((p) => p.length > 0).length > 0,
    })
  } else {
    chunks.push({ name: declaration })
  }
  if (member.property) {
    let s = ' {'
    for (let i = 0; i < member.property.length; i++) {
      if (i > 0) s += '|'
      s += member.property[i]
    }
    s += '}'
    chunks.push({ name: s })
  }
  return chunks
}
