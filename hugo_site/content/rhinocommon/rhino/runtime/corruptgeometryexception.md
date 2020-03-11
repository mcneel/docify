---
title: "CorruptGeometryException"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Runtime](../)*

Thrown when Rhino finds a brep or mesh that will cause a crash if used for calculations.
```cs
public class CorruptGeometryException : Exception
```
## Properties

[CommonObject](/rhinocommon/rhino/runtime/commonobject/) CommonObject
: Corrupt geometry .NET class
: since 6.10

IntPtr Pointer
: pointer to base geometry (ON_Object*)
: since 6.10
