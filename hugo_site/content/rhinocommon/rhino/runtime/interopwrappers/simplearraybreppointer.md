---
title: "SimpleArrayBrepPointer"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

Wrapper for a C++ ON_SimpleArray<ON_Brep*> or ON_SimpleArray<const ON_Brep*>
   If you are not writing C++ code then this class is not for you.
```cs
public class SimpleArrayBrepPointer : IDisposable
```
## Constructors

SimpleArrayBrepPointer()
: Initializes a new  instance.
## Properties

int Count
: Gets the amount of breps in this array.
## Methods

void Add(Brep brep,bool asConst)
: Adds a brep to the list.

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.

Geometry.Brep[] ToNonConstArray()
: Copies the unmanaged array to a managed counterpart.
: Returns - The managed array.
