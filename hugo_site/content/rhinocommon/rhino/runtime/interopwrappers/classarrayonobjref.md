---
title: "ClassArrayOnObjRef"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

Represents a wrapper to an unmanaged "array" (list) of ON_ObjRef instances.
   Wrapper for a C++ ON_ClassArray of ON_ObjRef
```cs
public class ClassArrayOnObjRef : IDisposable
```
## Constructors

ClassArrayOnObjRef()
: Initializes a new  instance.
: since 5.8

ClassArrayOnObjRef(IEnumerable<ObjRef> objrefs)
: Initializes a new instances from a set of ObjRefs
: since 5.8
## Properties

int Count
: Gets the number of ObjRef instances in this array.
: since 5.8
## Methods

void Add(ObjRef objref)
: Adds an ObjRef to the list.
: since 5.8

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.
: since 5.8

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 5.8

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.
: since 5.8

DocObjects.ObjRef[] ToNonConstArray()
: Copies the unmanaged array to a managed counterpart.
: Returns - The managed array.
: since 5.8
