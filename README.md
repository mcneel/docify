# apidocs
Project for generating API documentation. This repo is split into the following parts:

# src 
src contains a Visual Studio project (api_docify) that parses source code and generates markdown and json files that represent the public facing API for a project
# quasar_site
a quasar project that creates a web site based on the json files created. This site gets published to the gh-pages branch and can be viewed at

https://mcneel.github.io/apidocs/quasar/#/

Instructions for building and testing the quasar site can be found at
[quasar site readme](quasar_site/readme.md)

# hugo_site (not currently being worked on)
a hugo project that creates a web site based on the markdown files generated. This site has not had much work done on it as the quasar version appears to be a more flexible solution
