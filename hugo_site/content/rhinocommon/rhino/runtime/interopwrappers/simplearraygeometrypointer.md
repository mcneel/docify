---
title: "SimpleArrayGeometryPointer"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

Wrapper for a C++ ON_SimpleArray<ON_Geometry*>* or ON_SimpleArray<const ON_Geometry*>.
   If you are not writing C++ code, then this class is not for you.
```cs
public class SimpleArrayGeometryPointer : IDisposable
```
## Constructors

SimpleArrayGeometryPointer()
: Initializes a new  instance.

SimpleArrayGeometryPointer(IEnumerable geometry)
: Expects all of the items in the IEnumerable to be GeometryBase types

SimpleArrayGeometryPointer(IEnumerable<GeometryBase> geometry)
: Create an ON_SimpleArray<ON_Geometry*> filled with items in geometry
## Methods

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.

[GeometryBase](/rhinocommon/rhino/geometry/geometrybase/)[] ToNonConstArray()
: Copies the unmanaged array to a managed counterpart.
: Returns - The managed array.
