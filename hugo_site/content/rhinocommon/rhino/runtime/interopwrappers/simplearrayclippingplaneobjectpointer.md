---
title: "SimpleArrayClippingPlaneObjectPointer"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

ON_SimpleArray of CRhinoClippingPlaneObject*
```cs
public class SimpleArrayClippingPlaneObjectPointer : IDisposable
```
## Constructors

SimpleArrayClippingPlaneObjectPointer()
: Initializes a new  instance.
: since 6.7
## Properties

int Count
: Gets the amount of clipping planes in this array.
: since 6.7
## Methods

void Add(ClippingPlaneObject clippingplane,bool asConst)
: Adds a clipping plane to the list.
: since 6.7

IntPtr ConstPointer()
: Gets the const (immutable) pointer of this array.
: Returns - The const pointer.
: since 6.7

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 6.7

IntPtr NonConstPointer()
: Gets the non-const pointer (for modification) of this array.
: Returns - The non-const pointer.
: since 6.7
