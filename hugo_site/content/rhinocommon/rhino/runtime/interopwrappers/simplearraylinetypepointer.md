---
title: "SimpleArrayLinetypePointer"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

Wrapper for a C++ ON_SimpleArray<ON_Linetype*>
   If you are not writing C++ code then this class is not for you.
```cs
public class SimpleArrayLinetypePointer : IDisposable
```
## Constructors

SimpleArrayLinetypePointer()
: Initializes a new  instance.
: since 6.6
## Properties

int Count
: Gets the amount of linetypes in this array.
: since 6.6
## Methods

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.
: since 6.6

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 6.6

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.
: since 6.6

DocObjects.Linetype[] ToNonConstArray()
: Copies the unmanaged array to a managed counterpart.
: Returns - The managed array.
: since 6.6
