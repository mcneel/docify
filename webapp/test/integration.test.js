import { describe, it, expect } from 'vitest'
import info from '../src/api_info.json'
import { buildTree, buildMemberGroups } from '@/utils/tree.js'
import { buildTypeMap, getInheritance, getDerivedClasses } from '@/utils/typemap.js'
import { collectMembers } from '@/utils/members.js'
import { buildSearchList } from '@/utils/search.js'

// Runs the real store pipeline against the actual dataset (what the browser does).
describe('real-data pipeline', () => {
  const { tree, pathMap } = buildTree(info)
  const typeMap = buildTypeMap(info)

  it('tree has namespaces and resolves a known type', () => {
    expect(tree.length).toBeGreaterThan(5)
    expect(tree.every((n) => n.children)).toBe(true)
    expect(pathMap['rhino.geometry.brep']).toBeTruthy()
    expect(pathMap['rhino.geometry.brep'].name).toBe('Brep')
  })

  it('typeMap indexes types by name', () => {
    expect(typeMap['Brep']).toBeTruthy()
    expect(typeMap['Brep'].namespace).toContain('Rhino')
  })

  it('member groups build for a real type without throwing', () => {
    const brep = pathMap['rhino.geometry.brep']
    const groups = buildMemberGroups(brep, typeMap)
    expect(groups.length).toBeGreaterThan(0)
    const labels = groups.map((g) => g.label)
    expect(labels).toContain('Methods')
    // group child paths look like "rhino.geometry.brep/<member>"
    const methods = groups.find((g) => g.label === 'Methods')
    expect(methods.children[0].path.startsWith('rhino.geometry.brep/')).toBe(true)
  })

  it('collectMembers returns inherited clones and never mutates source', () => {
    const brep = pathMap['rhino.geometry.brep']
    const before = JSON.stringify(brep.methods?.[0] || {})
    const members = collectMembers(brep, 'methods', typeMap, true)
    expect(members.length).toBeGreaterThan(0)
    expect(members.every((m) => m.path && m.parent)).toBe(true)
    // source object unchanged
    expect(JSON.stringify(brep.methods?.[0] || {})).toBe(before)
  })

  it('inheritance + derived classes resolve', () => {
    // find any type with a baseclass
    const derived = info.find((t) => t.baseclass && typeMap[t.name])
    expect(derived).toBeTruthy()
    const chain = getInheritance(derived, typeMap)
    expect(Array.isArray(chain)).toBe(true)
    // a widely-subclassed base should have derived classes
    const geometryBase = typeMap['GeometryBase']
    if (geometryBase) {
      expect(getDerivedClasses(geometryBase, typeMap).length).toBeGreaterThan(0)
    }
  })

  it('surfaces BCL-inherited members (WWW-3489: RuntimeDocumentDataTable is a Dictionary)', () => {
    const rd = pathMap['rhino.docobjects.tables.runtimedocumentdatatable']
    expect(rd).toBeTruthy()
    expect(rd.baseclass).toBe('Dictionary<object, object>')

    // Inheritance chain now includes the BCL base, linked out to MS Learn.
    const chain = getInheritance(rd, typeMap)
    const dictNode = chain.find((n) => n.name.startsWith('Dictionary'))
    expect(dictNode).toBeTruthy()
    expect(dictNode.external).toMatch(/learn\.microsoft\.com/)

    // Inherited Dictionary members appear alongside the type's own members.
    const methods = collectMembers(rd, 'methods', typeMap, true)
    const sigs = methods.map((m) => m.signature)
    expect(sigs).toContain('bool ContainsKey(TKey key)')
    expect(sigs).toContain('bool Remove(TKey key)')
    const own = methods.find((m) => m.signature.includes('GetValue'))
    expect(own.inherited).toBeUndefined() // the type's own member, unaffected
    const inheritedCount = methods.filter((m) => m.externalUrl).length
    expect(inheritedCount).toBeGreaterThan(4)

    // ...but external BCL members stay OUT of the in-site nav tree.
    const groups = buildMemberGroups(rd, typeMap)
    const treeMethods = groups.find((g) => g.label === 'Methods')
    const treeLabels = treeMethods ? treeMethods.children.map((c) => c.label) : []
    expect(treeLabels.some((l) => l.startsWith('ContainsKey'))).toBe(false)
  })

  it('search list flattens types + members', () => {
    const list = buildSearchList(info)
    expect(list.length).toBeGreaterThan(5000)
    expect(list.some((i) => i.type === 'method' && i.url.includes('#'))).toBe(true)
  })

  it('indexes enum values (regression: AngleUnitSystem.Radians was unsearchable)', () => {
    const list = buildSearchList(info)
    const values = list.filter((i) => i.type === 'value')
    expect(values.length).toBeGreaterThan(0)
    const radians = values.find((i) => i.member === 'Radians' && i.typename === 'Rhino.AngleUnitSystem')
    expect(radians).toBeTruthy()
    // enum values have no own page — they link to the enum's Values section
    expect(radians.url).toBe('rhino.angleunitsystem#values')
  })

  it('indexes fields by name, not default value (regression: member was "true"/hex)', () => {
    const list = buildSearchList(info)
    const fields = list.filter((i) => i.type === 'field')
    expect(fields.length).toBeGreaterThan(0)
    // the old bug produced members like "true" and "0x0018)"
    expect(fields.some((f) => f.member === 'true')).toBe(false)
    const inc = fields.find((f) => f.member === 'IncludeNormals')
    expect(inc).toBeTruthy()
    expect(inc.url).toMatch(/\/includenormals$/)
  })

  it('parenless member URLs have no dangling "#" (WWW-3482)', () => {
    const list = buildSearchList(info)
    // No search URL should end with a bare '#' (the reported search-result bug).
    expect(list.filter((i) => i.url.endsWith('#'))).toEqual([])
    // Properties/fields/events get a clean, anchorless permalink...
    const prop = list.find((i) => i.type === 'property')
    expect(prop.url).not.toContain('#')
    // ...while overloadable members (methods) keep their overload anchor.
    expect(list.some((i) => i.type === 'method' && i.url.includes('#'))).toBe(true)
  })
})
