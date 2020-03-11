---
title: "MeshUnsafeLock"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Permits access to the underlying mesh raw data structures in an unsafe way.
```cs
public class MeshUnsafeLock : IDisposable
```
## Methods

MeshFace* FacesArray(int length)
: Retrieves a pointer to the raw faces array, which uses 4 integers for each face.
     .
: Returns - The beginning of the vertex array. Item 0 is the first vertex,
     and item length-1 is the last valid one.
: since 6.20

Vector3f* NormalVector3fArray(int length)
: Retrieves a pointer to the raw mesh vertex normal array, which uses vectors
     defined with single precision floating point numbers, or throws an exception if none is available.
: Returns - The beginning of the vertex array. Item 0 is the first vertex,
     and item length-1 is the last valid one.
: since 6.20

void Release()
: Releases the lock and updates the underlying unmanaged data structures.
: since 6.0

Point3d* VertexPoint3dArray(int length)
: Retrieves a pointer to the raw mesh vertex array, which uses coordinates
     defined with double precision floating point numbers, or throws an exception if none is available.
: Returns - The beginning of the vertex array. Item 0 is the first vertex,
     and item length-1 is the last valid one. If no array is available, None is returned.
: since 6.20

Point3f* VertexPoint3fArray(int length)
: Retrieves a pointer to the raw mesh vertex array, which uses coordinates
     defined with single precision floating point numbers, or None if none is available.
: Returns - The beginning of the vertex array. Item 0 is the first vertex,
     and item length-1 is the last valid one. If no array is available, None is returned.
: since 6.0
