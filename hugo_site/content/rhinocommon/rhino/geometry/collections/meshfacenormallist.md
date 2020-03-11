---
title: "MeshFaceNormalList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to the Face normals of a Mesh.
```cs
public class MeshFaceNormalList : IResizableList<Vector3f>, IList, IReadOnlyList<Vector3f>
```
## Properties

int Capacity
: Gets or sets the total number of face normals the internal data structure can hold without resizing.
: since 6.0

int Count
: Gets or sets the number of mesh face normals.
## Methods

int AddFaceNormal(double x,double y,double z)
: Appends a face normal to the list of mesh face normals.
: Returns - The index of the newly added face normal.

int AddFaceNormal(float x,float y,float z)
: Appends a face normal to the list of mesh face normals.
: Returns - The index of the newly added face normal.

int AddFaceNormal(Vector3d normal)
: Appends a face normal to the list of mesh face normals.
: Returns - The index of the newly added face normal.

int AddFaceNormal(Vector3f normal)
: Appends a face normal to the list of mesh face normals.
: Returns - The index of the newly added face normal.

void Clear()
: Clears the Face Normal list on the mesh.

bool ComputeFaceNormals()
: Computes all the face normals for this mesh based on the physical shape of the mesh.
: Returns - True on success, False on failure.

void Destroy()
: Releases all memory allocated to store face normals. The list capacity will be 0 after this call.
     Subsequent calls can add new items.
: since 6.0

IEnumerator<Vector3f> GetEnumerator()
: Gets an enumerator that yields all normals (vectors) in this collection.
: Returns - The enumerator.

bool SetFaceNormal(int index,double x,double y,double z)
: Sets a face normal vector at an index using three double-precision numbers.
: Returns - True on success; False on error.

bool SetFaceNormal(int index,float x,float y,float z)
: Sets a face normal vector at an index using three single-precision numbers.
: Returns - True on success; False on error.

bool SetFaceNormal(int index,Vector3d normal)
: Sets a face normal vector at an index using a single-precision vector.
: Returns - True on success; False on error.

bool SetFaceNormal(int index,Vector3f normal)
: Sets a face normal vector at an index using a single-precision vector.
: Returns - True on success; False on error.

bool UnitizeFaceNormals()
: Unitizes all the existing face normals.
: Returns - True on success, False on failure.
