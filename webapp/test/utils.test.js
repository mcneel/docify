import { describe, it, expect } from 'vitest'
import { sinceIsGreater, mostRecentSince, majorVersionList } from '@/utils/version.js'
import { memberName, shortSignature, signatureAnchorRef } from '@/utils/signatures.js'
import { itemPath, memberUrl } from '@/utils/paths.js'
import { refToPath } from '@/utils/sandcastle.js'
import { buildTypeMap, getInheritance } from '@/utils/typemap.js'
import { collectMembers } from '@/utils/members.js'

describe('version.sinceIsGreater', () => {
  it('strictly greater', () => {
    expect(sinceIsGreater('8.0', '7.0')).toBe(true)
    expect(sinceIsGreater('7.0', '8.0')).toBe(false)
    expect(sinceIsGreater('7.0', '7.0')).toBe(false) // equal -> false
    expect(sinceIsGreater('8.2', '8.1')).toBe(true)
    expect(sinceIsGreater('8.1', '8.2')).toBe(false)
  })
  it('treats minor x as 999', () => {
    expect(sinceIsGreater('7.x', '7.5')).toBe(true)
    expect(sinceIsGreater('7.5', '7.x')).toBe(false)
  })
})

describe('version discovery', () => {
  const api = [
    { methods: [{ since: '7.0' }, { since: '8.3' }] },
    { properties: [{ since: '6.1' }] },
    { constructors: [{ since: '8.10' }] },
  ]
  it('mostRecentSince', () => {
    expect(mostRecentSince(api)).toBe('8.10')
  })
  it('majorVersionList descending', () => {
    expect(majorVersionList(api)).toEqual(['8.x', '7.x', '6.x'])
  })
})

describe('signatures', () => {
  it('memberName for methods returns name+params', () => {
    expect(memberName({ signature: 'System.Int32 Foo(System.Double x)' }, 'methods')).toBe(
      'Foo(System.Double x)'
    )
  })
  it('memberName for properties (static)', () => {
    expect(memberName({ signature: 'static bool BlackWhiteSwitching' }, 'properties')).toBe(
      'BlackWhiteSwitching'
    )
  })
  it('shortSignature un-namespaces arg types', () => {
    expect(shortSignature('Foo(System.Double x, Rhino.Geometry.Point3d p)')).toEqual([
      'Foo',
      '(Double, Point3d)',
    ])
  })
  it('signatureAnchorRef', () => {
    expect(signatureAnchorRef('Foo(System.Double x, Rhino.Geometry.Point3d p)')).toBe(
      '(double,point3d)'
    )
  })
})

describe('paths', () => {
  it('itemPath from namespace+name', () => {
    expect(itemPath({ namespace: 'Rhino.Geometry', name: 'Brep', dataType: 'class' })).toBe(
      'rhino.geometry.brep'
    )
  })
  it('memberUrl for a method', () => {
    const m = { signature: 'double GetArea()', parent: 'Rhino.Geometry.Brep', namespace: 'Rhino.Geometry' }
    expect(memberUrl('methods', m)).toBe('rhino.geometry.brep/getarea')
  })
  it('memberUrl for a constructor', () => {
    const m = { signature: 'Brep()', parent: 'Rhino.Geometry.Brep', namespace: 'Rhino.Geometry' }
    expect(memberUrl('constructors', m)).toBe('rhino.geometry.brep/brep')
  })
})

describe('sandcastle.refToPath', () => {
  it('returns null for non-htm', () => {
    expect(refToPath('whatever', '/html/whatever')).toBeNull()
  })
  it('type page', () => {
    expect(refToPath('T_Rhino_Geometry_Brep.htm', '/html/T_Rhino_Geometry_Brep.htm')).toBe(
      '/rhino.geometry.brep'
    )
  })
  it('method with stripped overload index', () => {
    expect(
      refToPath(
        'M_Rhino_Geometry_Brep_CreateFromBox_1.htm',
        '/html/M_Rhino_Geometry_Brep_CreateFromBox_1.htm'
      )
    ).toBe('/rhino.geometry.brep/createfrombox')
  })
  it('methods listing anchor', () => {
    expect(refToPath('Methods_T_Rhino_Foo.htm', '/html/Methods_T_Rhino_Foo.htm')).toBe(
      '/rhino.foo#methods'
    )
  })
})

describe('members.collectMembers does not mutate source', () => {
  const raw = [
    {
      namespace: 'NS',
      name: 'Base',
      dataType: 'class',
      methods: [{ signature: 'void BaseM()' }],
    },
    {
      namespace: 'NS',
      name: 'Sub',
      dataType: 'class',
      baseclass: 'NS.Base',
      methods: [{ signature: 'void SubM()' }],
    },
  ]
  const typeMap = buildTypeMap(raw)
  it('marks inherited on clones, not on source', () => {
    const sub = raw[1]
    const members = collectMembers(sub, 'methods', typeMap, true)
    const inheritedNames = members.filter((m) => m.inherited).map((m) => m.signature)
    expect(inheritedNames).toContain('void BaseM()')
    // source Base method must NOT have been tagged inherited (the old bug)
    expect(raw[0].methods[0].inherited).toBeUndefined()
    // source objects untouched (no path/parent leaked onto raw)
    expect(raw[1].methods[0].path).toBeUndefined()
  })
  it('inheritance chain resolves', () => {
    expect(getInheritance(raw[1], typeMap).map((n) => n.name)).toEqual(['NS.Base'])
  })
})
