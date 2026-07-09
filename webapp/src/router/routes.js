// In-app link prefix (lives after the "#" in hash mode). Distinct from the Vite
// base ('/api/rhinocommon/'), which the router base handles before the "#".
const baseUrl = '/'
const props = { baseUrl }

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    props,
    children: [
      { path: '', component: () => import('@/pages/IndexPage.vue'), props },
      { path: 'examples/:example', component: () => import('@/pages/ExamplePage.vue'), props },
      { path: 'whatsnew/:version', component: () => import('@/pages/WhatsNewPage.vue'), props },
      { path: 'references/:datatype', component: () => import('@/pages/ReferencesPage.vue'), props },
      { path: ':datatype/:member', component: () => import('@/pages/MemberDetailPage.vue'), props },
      { path: ':datatype', component: () => import('@/pages/DataTypePage.vue'), props },
    ],
  },
  // Legacy Sandcastle redirects render chrome-less (no MainLayout).
  { path: '/html/:ref', component: () => import('@/pages/SandcastleRedirect.vue') },
  { path: '/:catchAll(.*)*', component: () => import('@/pages/NotFoundPage.vue') },
]

export default routes
