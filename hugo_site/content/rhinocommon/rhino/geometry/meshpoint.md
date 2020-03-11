---
title: "MeshPoint"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a point that is found on a mesh.
```cs
public class MeshPoint
```
## Properties

[ComponentIndex](/rhinocommon/rhino/geometry/componentindex/) ComponentIndex
: Gets the component index of the intersecting element in the mesh.

int EdgeIndex
: When set, EdgeIndex is an index of an edge in the mesh's edge list.

double EdgeParameter
: Edge parameter when found.

int FaceIndex
: FaceIndex is an index of a face in mesh.Faces.
     When ComponentIndex refers to a vertex, any face that uses the vertex
     may appear as FaceIndex.  When ComponenctIndex refers to an Edge or
     EdgeIndex is set, then any face that uses that edge may appear as FaceIndex.

[Mesh](/rhinocommon/rhino/geometry/mesh/) Mesh
: The mesh that is ralated to this point.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Point
: Gets the location (position) of this point.

double[] T
: Barycentric quad coordinates for the point on the mesh
     face mesh.Faces[FaceIndex].  If the face is a triangle
     disregard T[3] (it should be set to 0.0). If the face is
     a quad and is split between vertexes 0 and 2, then T[3]
     will be 0.0 when point is on the triangle defined by vi[0],
     vi[1], vi[2], and T[1] will be 0.0 when point is on the
     triangle defined by vi[0], vi[2], vi[3]. If the face is a
     quad and is split between vertexes 1 and 3, then T[2] will
     be 0.0 when point is on the triangle defined by vi[0],
     vi[1], vi[3], and m_t[0] will be 0.0 when point is on the
     triangle defined by vi[1], vi[2], vi[3].

char Triangle
: Face triangle where the intersection takes place:
     0 is unsetA is 0,1,2B is 0,2,3C is 0,1,3D is 1,2,3
## Methods

bool GetTriangle(int a,int b,int c)
: Gets the mesh face indices of the triangle where the
     intersection is on the face takes into consideration
     the way the quad was split during the intersection.
