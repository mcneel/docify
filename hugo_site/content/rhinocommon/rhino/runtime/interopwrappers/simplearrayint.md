---
title: "SimpleArrayInt"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

Wrapper for ON_SimpleArray<int>. If you are not writing C++ code
   then this class is not for you.
```cs
public class SimpleArrayInt : IDisposable
```
## Constructors

SimpleArrayInt()
: Initializes a new  class.

SimpleArrayInt(IEnumerable<int> values)
: Initializes a new  class
: since 5.9
## Properties

int Count
: Gets the amount of elements in this array.
## Methods

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.

int[] ToArray()
: Returns the managed counterpart of the unmanaged array.
: Returns - The managed array.
