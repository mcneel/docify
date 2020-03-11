---
title: "SimpleArrayPoint3d"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

ON_SimpleArray<ON_3dPoint>, ON_3dPointArray, ON_PolyLine all have the same size
   This class wraps all of these C++ versions.  If you are not writing C++ code then this
   class is not for you.
```cs
public class SimpleArrayPoint3d : IDisposable
```
## Constructors

SimpleArrayPoint3d()
: Initializes a new empty  instance.
## Properties

int Count
: Gets the amount of points in this array.
## Methods

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] ToArray()
: Copies the unmanaged array to a managed counterpart.
: Returns - The managed array.
