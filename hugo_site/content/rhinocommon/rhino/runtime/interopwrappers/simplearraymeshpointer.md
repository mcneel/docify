---
title: "SimpleArrayMeshPointer"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

Represents a wrapper to an unmanaged array of mesh pointers.
   Wrapper for a C++ ON_SimpleArray of ON_Mesh* or const ON_Mesh*. If you are not
   writing C++ code then this class is not for you.
```cs
public class SimpleArrayMeshPointer : IDisposable
```
## Constructors

SimpleArrayMeshPointer()
: Initializes a new  instance.
## Properties

int Count
: Gets the amount of meshes in this array.
## Methods

void Add(Mesh mesh,bool asConst)
: Adds a mesh to the list.

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.

Geometry.Mesh[] ToNonConstArray()
: Copies the unmanaged array to a managed counterpart.
: Returns - The managed array.
