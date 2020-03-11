---
title: "SumSurface"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a sum surface, or an extrusion of a curve along a curved path.
```cs
[Serializable]
public class SumSurface : Surface
```
## Methods

static SumSurface Create(Curve curveA,Curve curveB)
: Constructs a new sum surface by extruding a curve A along a path B.
: Returns - A new sum surface on success; None on failure.
