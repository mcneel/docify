---
title: "Rhino.Geometry.MeshNgon"
draft: false
---

## static !=
- (summary) 
     Determines whether two  structures have different values.
     
- (since) 6.0
## static ==
- (summary) 
     Determines whether two  structures have equal values.
     
- (since) 6.0
# Properties
## static MeshNgon Empty
- (summary) 
     Gets an empty MeshNgon.
     
- (since) 6.0
## int BoundaryVertexCount
- (summary) 
     Get the number of vertices in this ngon.
      about length information.
     
- (since) 6.0
## int FaceCount
- (summary) 
     Get the number of faces in this ngon.
     
- (since) 6.0
# Methods
## static MeshNgon Create(IList<int> meshVertexIndexList,IList<int> meshFaceIndexList)
- (summary) 
     Constructs an ngon from lists of mesh vertex and face indexes.
     
- (since) 6.0
- (returns) MeshNgon This is some return comment
## uint[] BoundaryVertexIndexList()
- (summary) 
     Get the outer boundary mesh vertex list of the ngon.
     Vertices are sorted counterclockwise with respect to the direction of the face,
     although the degree by which vertex normals will respect this might vary.
- (since) 6.0
- (returns) uint[] This is some return comment
## int CompareTo(MeshNgon otherNgon)
- (summary) 
     Compares this  with otherNgon
     and returns a value of 1, 0, or -1.
     Priority is for vertex count, then face count,
     then vertex index list values, then face index list values.
     
- (since) 6.0
- (returns) int This is some return comment
## bool Equals(MeshNgon otherNgon)
- (summary) 
     Determines if this ngon and otherNgon are identical.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool Equals(object otherObj)
- (summary) 
     Determines if otherObj is a MeshNgon and is identical to this ngon.
     
- (since) (unknown)
- (returns) bool This is some return comment
## uint[] FaceIndexList()
- (summary) 
     Get the ngon's mesh face index list.
     
- (since) 6.0
- (returns) uint[] This is some return comment
## int GetHashCode()
- (summary) 
     Returns a runtime-stable hashcode for the current mesh ngon.
     You are not allowed to rely on persistance of this hashcode in
     serialization, but for each instance of the application, this hashcode
     will be the same for ngons with identical vertex and face lists.
     
- (since) (unknown)
- (returns) int This is some return comment
## void Set(IList<int> meshVertexIndexList,IList<int> meshFaceIndexList)
- (summary) 
     Set the ngon vertex and face index lists.
     
- (since) 6.0
- (returns) void This is some return comment
## string ToString()
- (summary) 
     Returns a string representation for this .
     This is to provide a meaningful visualization of this structure
     and is subject to change in newer releases.
     
- (since) (unknown)
- (returns) string This is some return comment
