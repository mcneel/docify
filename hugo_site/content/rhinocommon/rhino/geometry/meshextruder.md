---
title: "MeshExtruder"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Extrudes a mesh and provides preview
```cs
public class MeshExtruder : IDisposable
```
## Constructors

MeshExtruder(Mesh inputMesh,IEnumerable<ComponentIndex> componentIndices)
: Construct object to extrude given mesh faces, edges and ngons.
: since 6.3
## Properties

bool EdgeBasedUVN
: Edge based UVN defines UVN directions according to boundary edge directions
: since 6.4

MeshExtruderFaceDirectionMode FaceDirectionMode
: Face direction mode determines how faces are oriented
: since 6.3

bool KeepOriginalFaces
: Whether or not to keep original faces.
: since 6.3

[Line](/rhinocommon/rhino/geometry/line/)[] PreviewLines
: Gets Line objects to preview extruded mesh.
: since 6.3

MeshExtruderParameterMode SurfaceParameterMode
: Mode for creating surface parameters for extruded areas
: since 6.3

MeshExtruderParameterMode TextureCoordinateMode
: Mode for creating texture coordinates for extruded areas
: since 6.3

[Transform](/rhinocommon/rhino/geometry/transform/) Transform
: Transform of extrusion
: since 6.3

bool UVN
: Whether or not to perform extrude in UVN basis.
: since 6.3
## Methods

void Dispose()
: Dispose of this object and any unmanaged memory associated with it.
: since 6.3

bool ExtrudedMesh(Mesh extrudedMeshOut)
: Creates new extruded mesh. Returns True if any edges or faces were extruded.
: since 6.3

bool ExtrudedMesh(Mesh extrudedMeshOut,List<ComponentIndex> componentIndicesOut)
: Creates new extruded mesh. Returns True if any edges or faces were extruded.
: since (unknown)

List<int> GetWallFaces()
: Return list of faces that were added to connect transformed edges/faces to non-transformed edges/faces.
: Returns - List of wall faces
: since 6.16
