---
title: "Rhino.Geometry.MeshExtruder"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.Geometry.MeshExtruder(Mesh inputMesh,IEnumerable<ComponentIndex> componentIndices)
- (summary) 
         Construct object to extrude given mesh faces, edges and ngons.
         
- (since) 6.3
# Properties
## bool EdgeBasedUVN
- (summary) 
         Edge based UVN defines UVN directions according to boundary edge directions
         
- (since) 6.4
## MeshExtruderFaceDirectionMode FaceDirectionMode
- (summary) 
         Face direction mode determines how faces are oriented
         
- (since) 6.3
## bool KeepOriginalFaces
- (summary) 
         Whether or not to keep original faces.
         
- (since) 6.3
## Line[] PreviewLines
- (summary) 
         Gets Line objects to preview extruded mesh.
         
- (since) 6.3
## MeshExtruderParameterMode SurfaceParameterMode
- (summary) 
         Mode for creating surface parameters for extruded areas
         
- (since) 6.3
## MeshExtruderParameterMode TextureCoordinateMode
- (summary) 
         Mode for creating texture coordinates for extruded areas
         
- (since) 6.3
## Transform Transform
- (summary) 
         Transform of extrusion
         
- (since) 6.3
## bool UVN
- (summary) 
         Whether or not to perform extrude in UVN basis.
         
- (since) 6.3
# Methods
## void Dispose()
- (summary) 
         Dispose of this object and any unmanaged memory associated with it.
         
- (since) 6.3
- (returns) void This is some return comment
## bool ExtrudedMesh(Mesh extrudedMeshOut)
- (summary) 
         Creates new extruded mesh. Returns True if any edges or faces were extruded.
         
- (since) 6.3
- (returns) bool This is some return comment
## bool ExtrudedMesh(Mesh extrudedMeshOut,List<ComponentIndex> componentIndicesOut)
- (summary) 
         Creates new extruded mesh. Returns True if any edges or faces were extruded.
         
- (since) (unknown)
- (returns) bool This is some return comment
## List<int> GetWallFaces()
- (summary) 
         Return list of faces that were added to connect transformed edges/faces to non-transformed edges/faces.
         
- (since) 6.16
- (returns) List<int> This is some return comment
