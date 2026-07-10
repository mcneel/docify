# docify
Project for generating Rhino/Grasshopper API documentation. This repo is split into the following parts:

# src 
src contains a Visual Studio project (api_docify) that parses source code and generates markdown and json files that represent the public facing API for a project
# webapp
a Vue 3 + Vite + Tailwind + Pinia SPA that creates a web site based on the json files created. This site currently gets published to heroku and can be viewed at

https://mcneel-apidocs.herokuapp.com/api/rhinocommon/

Instructions for building and testing the web app can be found at
[web app readme](webapp/README.md)


## Usage

```shell
$ api_docify --name=<proj_name> <proj_path> <proj_output_js>
$ api_docify --name=<proj_name> <proj_path> <proj_output_js> <examples_path> <examples_output_js>
```

**Example**

```shell
$ api_docify.exe --name="RhinoCommon" "%RHINO4SRC%/rhinocommon/dotnet" "src/modules/docify/webapp/src/RhinoCommonApi.js"
```

# VS Code (Mac) setup instructions

1. Ensure node and yarn are installed
2. Open this folder in VS Code
3. Run `cd webapp && yarn` to install dependencies
4. Run `CMD+Shift+P > Run Task > docify build` (or run the generator) to produce the JSON
5. Run `cd webapp && yarn dev` to start the site

## Troubleshooting

Some namespaces may need `methodgen` to be run on the source first before documentation can be extracted. You can do this by building Rhino from source.
