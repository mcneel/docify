---
title: "SubDEdgeList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

All edges in a SubD
```cs
public class SubDEdgeList : IEnumerable<SubDEdge>
```
## Properties

int Count
: Gets the number of SubD edges.
: since 7.0
## Methods

[SubDEdge](/rhinocommon/rhino/geometry/subdedge/) Add(SubDEdgeTag tag,SubDVertex v0,SubDVertex v1)
: Add a new edge to the list.
: since 7.0

[SubDEdge](/rhinocommon/rhino/geometry/subdedge/) Find(int id)
: Find an edge in this SubD with a given id
: since 7.0

[SubDEdge](/rhinocommon/rhino/geometry/subdedge/) Find(uint id)
: Find an edge in this SubD with a given id
: since 7.0

IEnumerator<SubDEdge> GetEnumerator()
: Implementation of IEnumerable
: since 7.0
