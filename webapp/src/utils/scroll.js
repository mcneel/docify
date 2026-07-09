// Small scroll helpers replacing Quasar's scroll utils.

// Smoothly scroll the window so `el` sits at viewport top + `padding`
// (negative padding accounts for the sticky member header, e.g. -125).
export function scrollToElement(el, padding = 0) {
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY + padding
  window.scrollTo({ top, behavior: 'smooth' })
}

// Center an element within its nearest scroll container (used for the TOC).
export function centerInScrollParent(el) {
  if (!el) return
  el.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'nearest' })
}
