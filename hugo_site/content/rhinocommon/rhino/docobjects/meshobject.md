---
title: "MeshObject"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

```cs
public class MeshObject : RhinoObject
```
## Properties

bool IsCustomObject
: 
: since 6.0

[Mesh](/rhinocommon/rhino/geometry/mesh/) MeshGeometry
: 
## Methods

static bool CheckMeshes(IEnumerable<MeshObject> meshObjects,TextLog textLog,MeshCheckParameters parameters)
: Examines mesh objects and logs a description of what it finds right or wrong.
     The various properties the function checks for are described in MeshCheckParameters.
: Returns - True if successful, False otherwise.
: since 7.0

[Mesh](/rhinocommon/rhino/geometry/mesh/) DuplicateMeshGeometry()
: 
