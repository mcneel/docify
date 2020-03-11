---
title: "ClassArrayObjRef"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

Represents a wrapper to an unmanaged "array" (list) of CRhinoObjRef instances.
   Wrapper for a C++ ON_ClassArray of CRhinoObjRef
```cs
public class ClassArrayObjRef : IDisposable
```
## Constructors

ClassArrayObjRef()
: Initializes a new  instance.

ClassArrayObjRef(IEnumerable<ObjRef> objrefs)
: Initializes a new instances from a set of ObjRefs
## Properties

int Count
: Gets the number of CRhinoObjRef instances in this array.
## Methods

void Add(ObjRef objref)
: Adds an ObjRef to the list.

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.

Rhino.DocObjects.ObjRef[] ToNonConstArray()
: Copies the unmanaged array to a managed counterpart.
: Returns - The managed array.
