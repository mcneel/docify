---
title: "BrepCurveList"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to all the underlying curves in a Brep object.
```cs
public class BrepCurveList : IEnumerable<Curve>, Rhino.Collections.IRhinoTable<Curve>
```
## Properties

int Count
: Gets the number of curves in this list.
: since 5.6
## Methods

int Add(Curve curve)
: Adds a curve
: Returns - Index that should be used to reference the geometry.
     -1 is returned if the input is not acceptable.
: since 5.6

IEnumerator<Curve> GetEnumerator()
: Get an enumerator that visits all curves.
: Returns - The enumerator.
: since 5.6
