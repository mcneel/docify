---
title: "CurveIntersections"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Intersect](../)*

Maintains an ordered list of Curve Intersection results.
```cs
public class CurveIntersections : IDisposable, IList<IntersectionEvent>
```
## Properties

int Count
: Gets the number of recorded intersection events.
## Methods

void CopyTo(IntersectionEvent[] array,int arrayIndex)
: Copies all intersection results into another array, departing at an index in the target array.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

IEnumerator<IntersectionEvent> GetEnumerator()
: Returns an enumerator that is capable of yielding all IntersectionEvents in the collection.
: Returns - The constructed enumerator.
