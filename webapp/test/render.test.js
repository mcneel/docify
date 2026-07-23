// @vitest-environment happy-dom
import { describe, it, expect, beforeAll, vi } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import { mount, flushPromises } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createPinia, setActivePinia } from 'pinia'
import routes from '@/router/routes.js'
import App from '@/App.vue'
import { useApiStore } from '@/stores/api.js'
import { useSearchStore } from '@/stores/search.js'
import { useSettingsStore } from '@/stores/settings.js'
import SearchOverlay from '@/components/SearchOverlay.vue'
import MemberSignature from '@/components/MemberSignature.vue'

const info = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src/api_info.json'), 'utf8'))
const examples = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'src/api_examples.json'), 'utf8')
)

beforeAll(() => {
  // happy-dom lacks a few browser APIs Reka UI touches; stub them.
  globalThis.ResizeObserver ||= class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  globalThis.fetch = vi.fn((url) =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(String(url).includes('examples') ? examples : info),
    })
  )
})

async function settle(n = 4) {
  for (let i = 0; i < n; i++) await flushPromises()
}

describe('app renders and navigates (happy-dom mount)', () => {
  it('drives the real app end-to-end', async () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const router = createRouter({ history: createMemoryHistory('/'), routes })

    const wrapper = mount(App, { global: { plugins: [pinia, router] } })
    await router.push('/')
    await router.isReady()
    await settle()

    // (1) index shows the namespace list
    expect(wrapper.text()).toContain('Namespaces')
    expect(wrapper.text()).toMatch(/Rhino/)

    // NavTree rendered namespace nodes (RouterLinks with TOC ids)
    expect(wrapper.findAll('[id^="TOC:"]').length).toBeGreaterThan(3)

    // (2)+(3) navigate to a real type -> DataType accordion sections
    const apiStore = useApiStore()
    expect(apiStore.status).toBe('ready')
    const brep = apiStore.findByPath('rhino.geometry.brep')
    expect(brep).toBeTruthy()
    await router.push('/rhino.geometry.brep')
    await settle()
    expect(wrapper.text()).toContain('Brep class')
    expect(wrapper.text()).toMatch(/Methods \(\d+\)/)

    // (4) navigate to a real member -> MemberDetail signatures
    const groups = apiStore.memberGroupsForType(brep)
    const methods = groups.find((g) => g.label === 'Methods')
    const memberPath = methods.children[0].path
    await router.push('/' + memberPath)
    await settle()
    expect(wrapper.text()).toContain('Syntax:')
    expect(wrapper.text()).toContain('Description:')

    // no unexpected render crash left the app empty
    expect(wrapper.html().length).toBeGreaterThan(500)
  })

  it('highlights the specific overload node (not just the parent)', async () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const router = createRouter({ history: createMemoryHistory('/'), routes })
    const wrapper = mount(App, { global: { plugins: [pinia, router] } })
    await router.push('/')
    await router.isReady()
    await settle()

    const apiStore = useApiStore()
    // find any member with >1 overload
    let parent = null
    let overload = null
    for (const t of apiStore.raw) {
      if (t.dataType === 'namespace') continue
      const groups = apiStore.memberGroupsForType(t)
      for (const g of groups) {
        const p = g.children.find((c) => c.children && c.children.length > 1)
        if (p) {
          parent = p
          overload = p.children[0] // path = "type/member#(argtypes)"
          break
        }
      }
      if (parent) break
    }
    expect(overload).toBeTruthy()
    expect(overload.path).toContain('#')

    await router.push('/' + overload.path)
    await settle()

    // the overload's own TOC node is highlighted (font-bold), the fix's target
    const nodes = wrapper.findAll('[id^="TOC:"]')
    const overloadNode = nodes.find((n) => n.attributes('id') === 'TOC:' + overload.path)
    expect(overloadNode, 'overload TOC node rendered').toBeTruthy()
    expect(overloadNode.classes()).toContain('font-bold')

    // the member content anchor for that overload exists (scroll target)
    const anchor = overload.path.split('#')[1]
    expect(wrapper.html()).toContain(`id="${anchor}"`)
  }, 20000)

  it('search overlay returns results', async () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const router = createRouter({ history: createMemoryHistory('/'), routes })
    router.push('/')
    await router.isReady()

    const apiStore = useApiStore()
    await apiStore.load()
    await settle()

    const search = useSearchStore()
    search.query = 'Brep'
    const wrapper = mount(SearchOverlay, { global: { plugins: [pinia, router] } })
    await settle()
    const links = wrapper.findAll('a')
    expect(links.length).toBeGreaterThan(0)
    expect(wrapper.text().toLowerCase()).toContain('brep')
    // WWW-3482: clicking a result must not land on a URL ending with a bare '#'.
    for (const a of links) {
      expect((a.attributes('href') || '').endsWith('#')).toBe(false)
    }
  })

  // WWW-3482: the "link to this member" button on a parenless member (property/field/
  // event) must produce a clean, hashless permalink.
  it('permalink button yields a hashless URL for a parenless member', async () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const router = createRouter({ history: createMemoryHistory('/'), routes })
    const member = {
      signature: 'MeshTopologyVertexList TopologyVertices',
      modifiers: ['public'],
      property: ['get'],
      isProperty: true,
    }
    router.push('/rhino.geometry.mesh/topologyvertices')
    await router.isReady()
    const wrapper = mount(MemberSignature, {
      props: { member, baseUrl: '/' },
      global: { plugins: [pinia, router] },
    })
    await settle()
    await wrapper.find('button[aria-label="Link to this member"]').trigger('click')
    await settle()
    expect(router.currentRoute.value.hash).toBe('')
    expect(router.currentRoute.value.fullPath.endsWith('#')).toBe(false)
  })

  it('dark mode toggles the html class', () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const settings = useSettingsStore()
    const before = document.documentElement.classList.contains('dark')
    settings.toggleDark()
    expect(document.documentElement.classList.contains('dark')).toBe(!before)
    expect(localStorage.getItem('darkMode')).toBe(String(!before))
  })
})
