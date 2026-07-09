// Legacy Sandcastle URL translation. Pure — ported from SandcastleRedirect.vue.
// Maps old rhinocommon-api-docs URLs (e.g. T_Rhino_Geometry_Brep.htm) to new paths.

// Returns the lowercase target path to redirect to, or null if `ref` isn't a .htm.
export function refToPath(ref, fullPath) {
  if (ref.endsWith('.htm')) {
    ref = ref.slice(0, -4)
  } else {
    return null
  }

  // strip trailing overload index, e.g. M_..._CreateFromBox_1 -> ..._CreateFromBox
  ref = ref.replace(/_[0-9]+$/, '')

  const r = ref.split('_')
  let t

  switch (r[0]) {
    case 'T': // T_Rhino_AngleUnitSystem
    case 'N': // N_Rhino
      t = r.slice(1).join('.')
      break
    case 'P': // property
    case 'M': // method
    case 'E': // event
      t = r.slice(1, -1).join('.') + '/' + r[r.length - 1]
      break
    case 'Overload':
      t = r.slice(1, -1).join('.')
      break
    case 'Methods':
    case 'Properties':
    case 'Events':
      t = r.slice(2).join('.') + '#' + r[0]
      break
    case 'Operators':
      t = r.slice(2).join('.')
      break
    default:
      // F_ fields (names may contain underscores), GeneralError, PageNotFound, R_Project, etc.
      t = ''
      break
  }

  let p = fullPath.split('/').slice(0, -2).join('/') + '/' + t
  return p.toLowerCase()
}
