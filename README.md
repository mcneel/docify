# docify
Project for generating Rhino/Grasshopper API documentation. This repo is split into the following parts:

# src 
src contains a Visual Studio project (api_docify) that parses source code and generates markdown and json files that represent the public facing API for a project
# quasar_site
a quasar project that creates a web site based on the json files created. This site currently gets published to heroku and can be viewed at

https://mcneel-apidocs.herokuapp.com/rhinocommon/

Instructions for building and testing the quasar site can be found at
[quasar site readme](quasar_site/readme.md)
