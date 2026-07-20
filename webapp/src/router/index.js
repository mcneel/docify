import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes.js'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
