---
title: "SimpleArrayCurvePointer"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

Wrapper for a C++ ON_SimpleArray of ON_Curve* or const ON_Curve*.  If you are not
   writing C++ code, then you can ignore this class.
```cs
public class SimpleArrayCurvePointer : IDisposable
```
## Constructors

SimpleArrayCurvePointer()
: Initializes a new  instance.

SimpleArrayCurvePointer(IEnumerable<Curve> curves)
: Initializes a new  instance, from a set of input curves.
## Methods

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.

[Curve](/rhinocommon/rhino/geometry/curve/)[] ToNonConstArray()
: Copies the unmanaged array to a managed counterpart.
: Returns - The managed array.
