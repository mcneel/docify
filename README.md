# apidocs
Test project for generating API documentation

This repo is split into two parts:
# src 
src contains a Visual Studio project (api_docify) that parses the RhinoCommon source code and generates a series of markdown files that represent the public facing API for every class, struct and interface in RhinoCommon
# apisite
a hugo project that creates a static web site based on the markdown files generated
