---
title: "SubDFaceList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

All faces in a SubD
```cs
public class SubDFaceList : IEnumerable<SubDFace>
```
## Properties

int Count
: Gets the number of SubD faces.
: since 7.0
## Methods

[SubDFace](/rhinocommon/rhino/geometry/subdface/) Find(int id)
: Find a face in this SubD with a given id
: since 7.0

[SubDFace](/rhinocommon/rhino/geometry/subdface/) Find(uint id)
: Find a face in this SubD with a given id
: since 7.0

IEnumerator<SubDFace> GetEnumerator()
: Implementation of IEnumerable
: since 7.0
