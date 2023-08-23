# docify
Project for generating Rhino/Grasshopper API documentation. This repo is split into the following parts:

# src 
src contains a Visual Studio project (api_docify) that parses source code and generates markdown and json files that represent the public facing API for a project
# quasar_site
a quasar project that creates a web site based on the json files created. This site currently gets published to heroku and can be viewed at

https://mcneel-apidocs.herokuapp.com/api/rhinocommon/

Instructions for building and testing the quasar site can be found at
[quasar site readme](quasar_site/readme.md)


## Usage

```shell
$ api_docify --name=<proj_name> <proj_path> <proj_output_js>
$ api_docify --name=<proj_name> <proj_path> <proj_output_js> <examples_path> <examples_output_js>
```

**Example**

```shell
$ api_docify.exe --name="RhinoCommon" "%RHINO4SRC%/rhinocommon/dotnet" "src/modules/docify/quasar_site/src/RhinoCommonApi.js"
```

# VS Code (Mac) setup instructions

1. Ensure node, npm, and quasar are installed
2. Open this folder in VS Code
3. Run `CMD+Shift+P > Run Task > initial setup (npm)` 
4. Run `CMD+Shift+P > Run Task > docify init`, then enter the path where the Rhino source code is located and press enter.
5. Run `CMD+Shift+P > Run Task > docify build`
5. Run `CMD+Shift+P > Run Task > run quasar`

## Troubleshooting

Some namespaces may need `methodgen` to be run on the source first before documentation can be extracted. You can do this by building Rhino from source.
