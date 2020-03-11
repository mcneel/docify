---
title: "SubDVertex"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Single vertex of a SubD
```cs
public class SubDVertex : SubDComponent
```
## Properties

[Point3d](/rhinocommon/rhino/geometry/point3d/) ControlNetPoint
: Location of the "control net" point that this SubDVertex represents
: since 7.0

int EdgeCount
: Number of edges for this vertex
: since 7.0

IEnumerable<SubDEdge> Edges
: All edges that this vertex is part of
: since 7.0

int FaceCount
: Number of faces for this vertex
: since 7.0

SubDVertex Next
: Next vertex in linked list of vertices on this level
: since 7.0

SubDVertex Previous
: Previous vertex in linked list of vertices on this level
: since 7.0
## Methods

[SubDEdge](/rhinocommon/rhino/geometry/subdedge/) EdgeAt(int index)
: Retrieve a SubDEdge from this vertex
: since 7.0
