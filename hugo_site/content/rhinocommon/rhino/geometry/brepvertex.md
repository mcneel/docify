---
title: "BrepVertex"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Brep vertex information
```cs
public class BrepVertex : Point
```
## Properties

[Brep](/rhinocommon/rhino/geometry/brep/) Brep
: Gets the Brep that owns this vertex.
: since 5.4

int VertexIndex
: Gets the index of this vertex in the Brep.Vertices collection.
: since 5.4
## Methods

int[] EdgeIndices()
: Gets the indices of all edges associated with this vertex.
: Returns - Empty array on failure.
: since 5.12
