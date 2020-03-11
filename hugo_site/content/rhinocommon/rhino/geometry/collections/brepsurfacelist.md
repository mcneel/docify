---
title: "BrepSurfaceList"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to all the underlying surfaces in a Brep object.
```cs
public class BrepSurfaceList : IEnumerable<Surface>, Rhino.Collections.IRhinoTable<Surface>
```
## Properties

int Count
: Gets the number of surfaces in a brep.
: since 5.4
## Methods

IEnumerator<Surface> GetEnumerator()
: Gets an enumerator that visits all surfaces.
: Returns - The enumerator.
: since 5.4
