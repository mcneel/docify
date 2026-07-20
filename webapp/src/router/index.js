import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.js'

// HTML5 history mode (clean URLs like /api/rhinocommon/rhino.geometry.brep).
// Hash mode was tried but broke every existing permalink (they gained a "/#/").
// Requires the host to serve index.html for unknown deep paths — see server.js.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// Carry the ?version filter across navigations that would otherwise drop it.
router.beforeEach((to, from, next) => {
  const hasVersion = (q) => Object.keys(q).includes('version')
  if (!hasVersion(to.query) && hasVersion(from.query)) {
    next({ path: to.path, query: { ...to.query, version: from.query.version }, hash: to.hash })
  } else {
    next()
  }
})

export default router
