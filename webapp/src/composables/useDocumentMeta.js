import { watchEffect, unref } from 'vue'

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Reactively sets document.title + <meta name="description"> for a page,
// replacing Quasar's createMetaMixin/meta(). Accepts values, refs, or getters.
export function useDocumentMeta(title, description) {
  const read = (v) => (typeof v === 'function' ? v() : unref(v))
  watchEffect(() => {
    const t = read(title)
    if (t) document.title = t
    const d = description != null ? read(description) : null
    if (d != null) setMeta('description', d)
  })
}
