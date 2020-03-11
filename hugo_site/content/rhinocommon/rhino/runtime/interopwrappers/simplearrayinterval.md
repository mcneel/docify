---
title: "SimpleArrayInterval"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

Wrapper for ON_SimpleArray<ON_Interval>. If you are not writing C++ code
   then this class is not for you.
```cs
public class SimpleArrayInterval : IDisposable
```
## Constructors

SimpleArrayInterval()
: Initializes a new  class.
## Properties

int Count
: Gets the amount of elements in this array.
## Methods

void Add(Interval interval)
: Adds a new  at the end of this array.
: since 6.0

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.

[Interval](/rhinocommon/rhino/geometry/interval/)[] ToArray()
: Returns the managed counterpart of the unmanaged array.
: Returns - The managed array.
