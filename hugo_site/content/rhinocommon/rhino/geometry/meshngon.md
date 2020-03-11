---
title: "MeshNgon"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a mesh ngon.
   When retrieved from the Ngon property of a mesh,
   this contains faces that have edge valence strictly higher than 4.When retrieving Ngons from ,
   this might contain also triangles and quads.
```cs
public class MeshNgon : IEquatable<MeshNgon>, IComparable<MeshNgon>, IComparable
```

static !=
: Determines whether two  structures have different values.
: Returns - True if the vertex or face index lists are different in any way; otherwise false.
: since 6.0

static ==
: Determines whether two  structures have equal values.
: Returns - True if the vertex and face index lists are identical; otherwise false.
: since 6.0
## Properties

static MeshNgon Empty
: Gets an empty MeshNgon.
: since 6.0

int BoundaryVertexCount
: Get the number of vertices in this ngon.
      about length information.
: since 6.0

int FaceCount
: Get the number of faces in this ngon.
: since 6.0
## Methods

static MeshNgon Create(IList<int> meshVertexIndexList,IList<int> meshFaceIndexList)
: Constructs an ngon from lists of mesh vertex and face indexes.
: since 6.0

uint[] BoundaryVertexIndexList()
: Get the outer boundary mesh vertex list of the ngon.
     Vertices are sorted counterclockwise with respect to the direction of the face,
     although the degree by which vertex normals will respect this might vary.
: Returns - A list of mesh vertex indexes.
: since 6.0

int CompareTo(MeshNgon otherNgon)
: Compares this  with otherNgon
     and returns a value of 1, 0, or -1.
     Priority is for vertex count, then face count,
     then vertex index list values, then face index list values.
: Returns - 0: if this is identical to otherNgon-1: if this < otherNgon. +1: if this > otherNgon.
: since 6.0

bool Equals(MeshNgon otherNgon)
: Determines if this ngon and otherNgon are identical.
: Returns - True if otherNgon is identical to this ngon; otherwise false.
: since 6.0

bool Equals(object otherObj)
: Determines if otherObj is a MeshNgon and is identical to this ngon.
: Returns - True if otherObj is a MeshNgon and is identical to this ngon; otherwise false.
: since (unknown)

uint[] FaceIndexList()
: Get the ngon's mesh face index list.
: Returns - A list of mesh face indexes.
: since 6.0

int GetHashCode()
: Returns a runtime-stable hashcode for the current mesh ngon.
     You are not allowed to rely on persistance of this hashcode in
     serialization, but for each instance of the application, this hashcode
     will be the same for ngons with identical vertex and face lists.
: Returns - A non-unique integer that represents this mesh ngon.
: since (unknown)

void Set(IList<int> meshVertexIndexList,IList<int> meshFaceIndexList)
: Set the ngon vertex and face index lists.
: since 6.0

string ToString()
: Returns a string representation for this .
     This is to provide a meaningful visualization of this structure
     and is subject to change in newer releases.
: Returns - The string representation.
: since (unknown)
