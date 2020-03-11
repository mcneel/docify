---
title: "SimpleArrayBinaryArchiveReader"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

Wrapper for ON_SimpleArray<ON_BinaryArchive>. If you are not writing C++ code
   then this class is not for you.
```cs
public class SimpleArrayBinaryArchiveReader : IDisposable
```
## Constructors

SimpleArrayBinaryArchiveReader()
: Initializes a new  class.
: since 6.0

SimpleArrayBinaryArchiveReader(IntPtr p)
: Initializes a new  class.
: since 6.0
## Properties

int Count
: Gets the amount of elements in this array.
: since 6.0
## Methods

void Add(BinaryArchiveReader reader)
: Adds a new  at the end of this array.
: since 6.0

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.
: since 6.0

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 6.0

[BinaryArchiveReader](/rhinocommon/rhino/fileio/binaryarchivereader/) Get(int index)
: Get the Guid at index
: since 6.0

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.
: since 6.0
