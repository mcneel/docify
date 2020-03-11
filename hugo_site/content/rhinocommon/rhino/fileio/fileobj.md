---
title: "FileObj"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Support for obj file format
```cs
public class FileObj
```
## Methods

static bool Read(String filename,RhinoDoc doc,FileObjReadOptions options)
: 
: since 6.0

static [WriteFileResult](/rhinocommon/rhino/plugins/writefileresult/) Write(StreamWriter stream,RhinoDoc doc,FileObjWriteOptions options)
: Write an obj stream based on the contents of a RhinoDoc
: since 7.0

static [WriteFileResult](/rhinocommon/rhino/plugins/writefileresult/) Write(String filename,Mesh[] meshes,FileObjWriteOptions options)
: Write an obj file with an array of meshes
: since 7.0

static [WriteFileResult](/rhinocommon/rhino/plugins/writefileresult/) Write(String filename,RhinoDoc doc,FileObjWriteOptions options)
: Write an obj file based on the contents of a RhinoDoc
: since 6.0
