---
title: "MeshFace"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the values of the four indices of a mesh face quad.
   If the third and fourth values are the same, this face represents a
   triangle.

static !=
: Determines whether two  structures have different values.
: Returns - True if the indices of the two points are in any way different; otherwise false.
: since 6.0

static ==
: Determines whether two  structures have equal values.
: Returns - True if the indices of the two points are exactly equal; otherwise false.
: since 6.0
## Constructors

MeshFace(int a,int b,int c)
: Constructs a new triangular Mesh face.

MeshFace(int a,int b,int c,int d)
: Constructs a new quadrangular Mesh face.
## Properties

static MeshFace Unset
: Gets an Unset MeshFace. Unset faces have Int32.MinValue for all corner indices.

int A
: Gets or sets the first corner index of the mesh face.

int B
: Gets or sets the second corner index of the mesh face.

int C
: Gets or sets the third corner index of the mesh face.

int D
: Gets or sets the fourth corner index of the mesh face. 
     If D equals C, the mesh face is considered to be a triangle 
     rather than a quad.

bool IsQuad
: Gets a value indicating whether or not this mesh face is a quad. 
     A mesh face is considered to be a triangle when C does not equal D, 
     thus it is possible for an Invalid mesh face to also be a quad.

bool IsTriangle
: Gets a value indicating whether or not this mesh face is a triangle. 
     A mesh face is considered to be a triangle when C equals D, thus it is 
     possible for an Invalid mesh face to also be a triangle.
## Methods

int CompareTo(MeshFace other)
: Compares this  with another 
     and returns a value of 1, 0, or -1, referring to dictionary order.
     Index evaluation priority is first A, then B, then C, then D.
: Returns - 0: if this is identical to other-1: if this < other. Priority is for index of corner A first, then B, then C, then D.+1: otherwise.
: since 6.0

bool Equals(MeshFace other)
: Returns a value indicating whether the other mesh face
     has precisely the same value as the current one.
: Returns - True if the other face is, also orderly, equal
     to the present one; otherwise false.
: since 6.0

bool Equals(object obj)
: Returns a value indicating whether the other object obj
     has precisely the same value as the current one.
: Returns - True if obj is a mesh face that, also orderly, equals
     to the present one; otherwise false.
: since (unknown)

MeshFace Flip()
: Reverses the orientation of the face by swapping corners. 
     The first corner is always maintained.

int GetHashCode()
: Returns a runtime-stable hashcode for the current mesh face.
     You are not allowed to rely on persistance of this hashcode in
     serialization, but for each version of RhinoCommon, this hashcode
     will be the same for each mesh face.
: Returns - A non-unique integer that represents this mesh face.
: since (unknown)

bool IsValid()
: Gets a value indicating whether or not this mesh face 
     is considered to be valid. Note that even valid mesh faces 
     could potentially be invalid in the context of a specific Mesh, 
     if one or more of the corner indices exceeds the number of 
     vertices on the mesh. If you want to perform a complete 
     validity check, use IsValid(int) instead.

bool IsValid(int vertexCount)
: Gets a value indicating whether or not this mesh face 
     is considered to be valid. Unlike the simple IsValid function, 
     this function takes upper bound indices into account.
: Returns - True if the face is considered valid, False if not.

bool IsValid(Point3d[] points)
: Gets a value indicating whether or not this mesh face 
     is considered to be valid. Unlike the simple IsValid function, 
     this function takes actual point locations into account.
: Returns - True if the face is considered valid, False if not.
: since 6.0

bool IsValidEx(Point3d[] points)
: Gets a value indicating whether or not this mesh face 
     is considered to be valid. Unlike the simple IsValid function, 
     this function takes actual point locations into account.
: Returns - True if the face is considered valid, False if not.
: since 6.5

bool Repair(Point3d[] points)
: Attempts to repair this mesh face by taking both face indexes and 
     actual vertex locations into account.
: Returns - True if the face was repaired, False if not.
: since 6.0

bool RepairEx(Point3d[] points)
: Attempts to repair this mesh face by taking both face indexes and 
     actual vertex locations into account.
: Returns - True if the face was repaired, False if not.
: since 6.5

void Set(int a,int b,int c)
: Sets all the corners for this face as a triangle.

void Set(int a,int b,int c,int d)
: Sets all the corners for this face as a quad.

string ToString()
: Returns a string representation for this .
     This is to provide a meaningful visualization of this structure
     and is subject to change in newer releases.
: Returns - The string representation.
: since (unknown)
