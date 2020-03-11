---
title: "SimpleArraySurfacePointer"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

Wrapper for a C++ ON_SimpleArray of ON_Surface* or const ON_Surface*.  If
   you are not writing C++ code then this class is not for you.
```cs
public class SimpleArraySurfacePointer : IDisposable
```
## Constructors

SimpleArraySurfacePointer()
: Initializes a new  instance.
## Methods

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.

[Surface](/rhinocommon/rhino/geometry/surface/)[] ToNonConstArray()
: Copies the unmanaged array to a managed counterpart.
     Elements are made non-const.
: Returns - The managed array.
