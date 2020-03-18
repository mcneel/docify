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
