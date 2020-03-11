---
title: "SubD"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Subdivision surface
```cs
[Serializable]
public class SubD : GeometryBase
```
## Constructors

SubD()
: Create a new instance of SubD geometry
: since 7.0
## Properties

[SubDEdgeList](/rhinocommon/rhino/geometry/collections/subdedgelist/) Edges
: All edges in this SubD
: since 7.0

[SubDFaceList](/rhinocommon/rhino/geometry/collections/subdfacelist/) Faces
: All faces in this SubD
: since 7.0

bool IsSolid
: Test subd to see if the active level is a solid.  
     A "solid" is a closed oriented manifold, or a closed oriented manifold.
: since 7.0

[SubDVertexList](/rhinocommon/rhino/geometry/collections/subdvertexlist/) Vertices
: All vertices in this SubD
: since 7.0
## Methods

static SubD CreateFromMesh(Mesh mesh)
: Create a new SubD from a mesh
: since 7.0

static SubD CreateFromMesh(Mesh mesh,SubDCreationOptions options)
: Create a new SubD from a mesh
: since 7.0

void ClearEvaluationCache()
: Clear cached information that depends on the location of vertex control points
: since 7.0

bool Subdivide(int count)
: Apply the Catmull-Clark subdivision algorithm and save the results in
     this SubD
: Returns - True on success
: since 7.0

[Brep](/rhinocommon/rhino/geometry/brep/) ToBrep()
: Create a Brep based on this SubD geometry
: since 7.0

uint UpdateAllTagsAndSectorCoefficients()
: Updates vertex tag, edge tag, and edge coefficient values on the active
     level. After completing custom editing operations that modify the
     topology of the SubD control net or changing values of vertex or edge
     tags, the tag and sector coefficients information on nearby components
     in the edited areas need to be updated.
: Returns - Number of vertices and edges that were changed during the update.
: since 7.0
