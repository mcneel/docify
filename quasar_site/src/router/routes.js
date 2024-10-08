// const apiBase = '/api/'
import ProjInfo from '../proj_info.json'

// const apiUrl = ProjInfo.name.toLowerCase()
// const apiPath = `/${apiUrl}/`

// console.log("API PATH:", apiPath)

const apiPath = "/"

const apiProps = {
  apiTitle: ProjInfo.name,
  baseUrl: apiPath
}

const routes = [
  {
    path: apiPath,
    component: () => import("layouts/MainLayout.vue"),
    props: apiProps,
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        props: apiProps,
      },
      {
        path: "examples/:example",
        component: () => import("pages/ExamplePage.vue"),
      },
      {
        path: "whatsnew/:version",
        component: () => import("pages/WhatsNew.vue"),
        props: apiProps,
      },
      {
        path: "references/:datatype",
        component: () => import("pages/ReferencesPage.vue"),
        props: apiProps,
      },
      {
        path: ":datatype/:member",
        component: () => import("pages/MemberDetail.vue"),
        props: apiProps,
      },
      {
        path: ":datatype",
        component: () => import("pages/DataType.vue"),
        props: apiProps,
      },
    ],
  },

  {
    path: apiPath,
    children: [
      {
        path: "html/:ref",
        component: () => import("pages/SandcastleRedirect.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: "/:catchAll(.*)*",
  //   component: () => import("pages/ErrorNotFound.vue"),
  // },
];

export default routes
