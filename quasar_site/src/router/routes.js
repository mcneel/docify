const apiBase = '/api/'
import ProjInfo from '../proj_info.json'

const apiUrl = ProjInfo.name.toLowerCase()
const apiPath = apiBase + apiUrl + '/'

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
      { path: '', component: () => import('pages/Index.vue'), props: apiProps },
      { path: 'examples/:example', component: () => import('pages/Example.vue') },
      { path: 'whatsnew/:version', component: () => import('pages/WhatsNew.vue'), props: apiProps },
      { path: 'references/:datatype', component: () => import('pages/References.vue'), props: apiProps },
      { path: 'html/:ref', component: () => import('pages/SandcastleRedirect.vue') },
      { path: ':datatype/:member', component: () => import('pages/MemberDetail.vue'), props: apiProps },
      { path: ':datatype', component: () => import('pages/DataType.vue'), props: apiProps }
    ]
  }
]

// Always leave this as last one
routes.push({
  path: '*',
  component: () => import('pages/Error404.vue')
})

export default routes
