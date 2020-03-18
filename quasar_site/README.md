# quasar_site

Site for displaying McNeel SDK documentation. The goal is to make the site general enough to be capable of displaying documentation for all of our SDKs in all supported programming languages. For starters we are just focusing on RhinoCommon.

The site is built using two technologies.

1. **api_docify** - .NET project that parses source code using Roslyn and generates JSON files representing the SDK and examples. Already generated files are saved in git so you don't need to run this application to work on the web site
1. **quasar** - https://quasar.dev/ an application for building Vue based web sites with a set of built-in UI controls. Quasar should be installed once you run yarn (see below), but it is good to use their web site as reference.

## Developer tools
1. Yarn (required) - (https://classic.yarnpkg.com/en/docs/install)

## Install the dependencies
From a command line inside of the `quasar_site` directory run `yarn`. This will download and install all of the external modules this project uses.
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
yarn dev
```

### Build the app for production
```bash
yarn build
```

----

Files:

- layouts
  - MainLayout.vue : UI for the top bar and flyout left side tree view
- pages
  - DataType.vue : UI for an individual class, enum, struct, namespace, of interface. This is the "main" content when you look at the description of a class
  - Error404.vue: hope this is obvious
  - Example.vue: UI for displaying an individual example in different programming languages. This is displayed by taking some contents of Examples.js and showing it as processed markdown
  - Index.vue: Simple home page
  - WhatsNew.vue: UI to list all items added at a single revision of Rhino
- router
  - routes.js: maps urls to vue pages
- statics
  - icons and images
- Examples.js: JSON created by api_docify that represents source code examples and the methods they should be associated with
- RhinoCommonApi.js: JSON created by api_docify that represents all public items in the RhinoCommon SDK
- ViewModel.js: shared javascript that is used by the vue pages to figure out what to show