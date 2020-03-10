---
title: "Rhino.Geometry.MeshPoint"
draft: false
---

# Properties
## ComponentIndex ComponentIndex
- (summary) 
     Gets the component index of the intersecting element in the mesh.
     
- (since) 5.0
## int EdgeIndex
- (summary) 
     When set, EdgeIndex is an index of an edge in the mesh's edge list.
     
- (since) 5.0
## double EdgeParameter
- (summary) 
     Edge parameter when found.
     
- (since) 5.0
## int FaceIndex
- (summary) 
     FaceIndex is an index of a face in mesh.Faces.
     When ComponentIndex refers to a vertex, any face that uses the vertex
     may appear as FaceIndex.  When ComponenctIndex refers to an Edge or
     EdgeIndex is set, then any face that uses that edge may appear as FaceIndex.
     
- (since) 5.0
## Mesh Mesh
- (summary) 
     The mesh that is ralated to this point.
     
- (since) 5.0
## Point3d Point
- (summary) 
     Gets the location (position) of this point.
     
- (since) 5.0
## double[] T
- (summary) 
     Barycentric quad coordinates for the point on the mesh
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
     
- (since) 5.0
## char Triangle
- (summary) 
     Face triangle where the intersection takes place:
     0 is unsetA is 0,1,2B is 0,2,3C is 0,1,3D is 1,2,3
- (since) 5.0
# Methods
## bool GetTriangle(int a,int b,int c)
- (summary) 
     Gets the mesh face indices of the triangle where the
     intersection is on the face takes into consideration
     the way the quad was split during the intersection.
     
- (since) 5.0
- (returns) bool This is some return comment
