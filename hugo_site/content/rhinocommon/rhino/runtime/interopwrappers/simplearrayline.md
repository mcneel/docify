---
title: "SimpleArrayLine"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

Wrapper for ON_SimpleArray<ON_Line>. If you are not writing C++ code
   then this class is not for you.
```cs
public class SimpleArrayLine : IDisposable
```
## Constructors

SimpleArrayLine()
: Initializes a new  instance.
## Properties

int Count
: Gets the amount of lines in this array.
## Methods

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.

[Line](/rhinocommon/rhino/geometry/line/)[] ToArray()
: Copies the unmanaged array to a managed counterpart.
: Returns - The managed array.
