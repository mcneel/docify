---
title: "Rhino.Geometry.MeshFace"
date: 2020-03-10 09:24:55Z
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
# Constructors
## Rhino.Geometry.MeshFace(int a,int b,int c)
- (summary) 
     Constructs a new triangular Mesh face.
     
- (since) 5.0
## Rhino.Geometry.MeshFace(int a,int b,int c,int d)
- (summary) 
     Constructs a new quadrangular Mesh face.
     
- (since) 5.0
# Properties
## static MeshFace Unset
- (summary) 
     Gets an Unset MeshFace. Unset faces have Int32.MinValue for all corner indices.
     
- (since) 5.0
## int A
- (summary) 
     Gets or sets the first corner index of the mesh face.
     
- (since) 5.0
## int B
- (summary) 
     Gets or sets the second corner index of the mesh face.
     
- (since) 5.0
## int C
- (summary) 
     Gets or sets the third corner index of the mesh face.
     
- (since) 5.0
## int D
- (summary) 
     Gets or sets the fourth corner index of the mesh face. 
     If D equals C, the mesh face is considered to be a triangle 
     rather than a quad.
     
- (since) 5.0
## bool IsQuad
- (summary) 
     Gets a value indicating whether or not this mesh face is a quad. 
     A mesh face is considered to be a triangle when C does not equal D, 
     thus it is possible for an Invalid mesh face to also be a quad.
     
- (since) 5.0
## bool IsTriangle
- (summary) 
     Gets a value indicating whether or not this mesh face is a triangle. 
     A mesh face is considered to be a triangle when C equals D, thus it is 
     possible for an Invalid mesh face to also be a triangle.
     
- (since) 5.0
# Methods
## int CompareTo(MeshFace other)
- (summary) 
     Compares this  with another 
     and returns a value of 1, 0, or -1, referring to dictionary order.
     Index evaluation priority is first A, then B, then C, then D.
- (since) 6.0
- (returns) int This is some return comment
## bool Equals(MeshFace other)
- (summary) 
     Returns a value indicating whether the other mesh face
     has precisely the same value as the current one.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
     Returns a value indicating whether the other object obj
     has precisely the same value as the current one.
     
- (since) (unknown)
- (returns) bool This is some return comment
## MeshFace Flip()
- (summary) 
     Reverses the orientation of the face by swapping corners. 
     The first corner is always maintained.
     
- (since) 5.0
- (returns) MeshFace This is some return comment
## int GetHashCode()
- (summary) 
     Returns a runtime-stable hashcode for the current mesh face.
     You are not allowed to rely on persistance of this hashcode in
     serialization, but for each version of RhinoCommon, this hashcode
     will be the same for each mesh face.
     
- (since) (unknown)
- (returns) int This is some return comment
## bool IsValid()
- (summary) 
     Gets a value indicating whether or not this mesh face 
     is considered to be valid. Note that even valid mesh faces 
     could potentially be invalid in the context of a specific Mesh, 
     if one or more of the corner indices exceeds the number of 
     vertices on the mesh. If you want to perform a complete 
     validity check, use IsValid(int) instead.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsValid(int vertexCount)
- (summary) 
     Gets a value indicating whether or not this mesh face 
     is considered to be valid. Unlike the simple IsValid function, 
     this function takes upper bound indices into account.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsValid(Point3d[] points)
- (summary) 
     Gets a value indicating whether or not this mesh face 
     is considered to be valid. Unlike the simple IsValid function, 
     this function takes actual point locations into account.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool IsValidEx(Point3d[] points)
- (summary) 
     Gets a value indicating whether or not this mesh face 
     is considered to be valid. Unlike the simple IsValid function, 
     this function takes actual point locations into account.
     
- (since) 6.5
- (returns) bool This is some return comment
## bool Repair(Point3d[] points)
- (summary) 
     Attempts to repair this mesh face by taking both face indexes and 
     actual vertex locations into account. 
     
- (since) 6.0
- (returns) bool This is some return comment
## bool RepairEx(Point3d[] points)
- (summary) 
     Attempts to repair this mesh face by taking both face indexes and 
     actual vertex locations into account. 
     
- (since) 6.5
- (returns) bool This is some return comment
## void Set(int a,int b,int c)
- (summary) 
     Sets all the corners for this face as a triangle.
     
- (since) 5.0
- (returns) void This is some return comment
## void Set(int a,int b,int c,int d)
- (summary) 
     Sets all the corners for this face as a quad.
     
- (since) 5.0
- (returns) void This is some return comment
## string ToString()
- (summary) 
     Returns a string representation for this .
     This is to provide a meaningful visualization of this structure
     and is subject to change in newer releases.
     
- (since) (unknown)
- (returns) string This is some return comment
