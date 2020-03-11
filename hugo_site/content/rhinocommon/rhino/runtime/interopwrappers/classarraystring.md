---
title: "ClassArrayString"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

Wrapper for a C++ ON_ClassArray<ON_wString>
   If you are not writing C++ code then this class is not for you.
```cs
public class ClassArrayString : IDisposable
```
## Constructors

ClassArrayString()
: Initializes a new  instance.
: since 6.0
## Properties

int Count
: Gets the number of strings in this array.
: since 6.0
## Methods

void Add(string s)
: Adds a string to the list.
: since 6.0

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.
: since 6.0

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 6.0

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.
: since 6.0

string[] ToArray()
: Copies the unmanaged array to a managed counterpart.
: Returns - The managed array.
: since 6.0
