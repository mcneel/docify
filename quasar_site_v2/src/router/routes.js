
const apiBase = '/api/'
import ProjInfo from '../proj_info.json'

const apiUrl = ProjInfo.name.toLowerCase()
const apiPath = apiBase + apiUrl + '/'

console.log("API PATH:", apiPath)

const apiProps = {
  apiTitle: ProjInfo.name,
  baseUrl: apiPath
}

const routes = [
  {
    path: apiPath,
    component: () => import('layouts/MainLayout.vue'),
    props: apiProps,
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), props: apiProps },
      { path: 'search', component: () => import('pages/SearchPage.vue') },
      { path: 'examples/:example', component: () => import('pages/ExamplePage.vue') },
      { path: 'whatsnew/:version', component: () => import('pages/WhatsNew.vue'), props: apiProps }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
