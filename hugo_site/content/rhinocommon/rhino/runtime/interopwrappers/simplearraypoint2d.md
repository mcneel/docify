---
title: "SimpleArrayPoint2d"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

ON_SimpleArray<ON_2dPoint> class wrapper.  If you are not writing
   C++ code then this class is not for you.
```cs
public class SimpleArrayPoint2d : IDisposable
```
## Constructors

SimpleArrayPoint2d()
: Initializes a new empty  instance.
: since 5.6
## Properties

int Count
: Gets the amount of points in this array.
: since 5.6
## Methods

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.
: since 5.6

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 5.6

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.
: since 5.6

[Point2d](/rhinocommon/rhino/geometry/point2d/)[] ToArray()
: Copies the unmanaged array to a managed counterpart.
: Returns - The managed array.
: since 5.6
