---
title: "MeshVertexNormalList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to the Vertex Normals of a Mesh.
```cs
public class MeshVertexNormalList : IResizableList<Vector3f>, IList, IReadOnlyList<Vector3f>
```
## Properties

int Capacity
: Gets or sets the amount of vertex normals that the list can hold without resizing.
: since 6.0

int Count
: Gets or sets the number of mesh vertex normals.
## Methods

int Add(double x,double y,double z)
: Adds a new vertex normal at the end of the list.
: Returns - The index of the newly added vertex normal.

int Add(float x,float y,float z)
: Adds a new vertex normal at the end of the list.
: Returns - The index of the newly added vertex normal.

int Add(Vector3d normal)
: Adds a new vertex normal at the end of the list.
: Returns - The index of the newly added vertex normal.

int Add(Vector3f normal)
: Adds a new vertex normal at the end of the list.
: Returns - The index of the newly added vertex normal.

bool AddRange(Vector3f[] normals)
: Appends a collection of normal vectors.
: Returns - True on success, False on failure.

void Clear()
: Clears the vertex normal collection on the mesh.

bool ComputeNormals()
: Computes the vertex normals based on the physical shape of the mesh.
: Returns - True on success, False on failure.

void Destroy()
: Releases all memory allocated to store vertex normals. The list capacity will be 0 after this call.
     Subsequent calls can add new items.
: since 6.0

void Flip()
: Reverses direction of all vertex normals
     This is the same as Mesh.Flip(true, false, false)

IEnumerator<Vector3f> GetEnumerator()
: Gets an enumerator that yields all normals (vectors) in this collection.
: Returns - The enumerator.

bool SetNormal(int index,double x,double y,double z)
: Sets or adds a vertex normal to the list.
     If [index] is less than [Count], the existing vertex normal at [index] will be modified.If [index] equals [Count], a new vertex normal is appended to the end of the list.If [index] is larger than [Count], the function will return false.
: Returns - True on success, False on failure.

bool SetNormal(int index,float x,float y,float z)
: Sets or adds a normal to the list.
     If [index] is less than [Count], the existing vertex normal at [index] will be modified.If [index] equals [Count], a new vertex normal is appended to the end of the list.If [index] is larger than [Count], the function will return false.
: Returns - True on success, False on failure.

bool SetNormal(int index,Vector3d normal)
: Sets or adds a vertex normal to the list.
     If [index] is less than [Count], the existing vertex normal at [index] will be modified.If [index] equals [Count], a new vertex normal is appended to the end of the list.If [index] is larger than [Count], the function will return false.
: Returns - True on success, False on failure.

bool SetNormal(int index,Vector3f normal)
: Sets or adds a vertex normal to the list.
     If [index] is less than [Count], the existing vertex normal at [index] will be modified.If [index] equals [Count], a new vertex normal is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
: Returns - True on success, False on failure.

bool SetNormals(Vector3f[] normals)
: Sets all normal vectors in one go. This method destroys the current normal array if it exists.
: Returns - True on success, False on failure.

float[] ToFloatArray()
: Copies all vertex normals to a linear array of float in x,y,z order
: Returns - The float array.
: since 6.0

bool UnitizeNormals()
: Unitizes all vertex normals.
: Returns - True on success, False on failure.
