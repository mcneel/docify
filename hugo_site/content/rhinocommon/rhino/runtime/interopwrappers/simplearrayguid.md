---
title: "SimpleArrayGuid"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

Wrapper for ON_SimpleArray<ON_UUID>. If you are not writing C++ code
   then this class is not for you.
```cs
public class SimpleArrayGuid : IDisposable
```
## Constructors

SimpleArrayGuid()
: Initializes a new  class.
## Properties

int Count
: Gets the amount of elements in this array.
## Methods

void Append(Guid uuid)
: Appends a new  at the end of this array.
: since 6.0

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.

Guid[] ToArray()
: Returns the managed counterpart of the unmanaged array.
: Returns - The managed array.
