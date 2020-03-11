---
title: "SubDFace"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Single face of a SubD
```cs
public class SubDFace : SubDComponent
```
## Properties

int EdgeCount
: Number of edges for this face. Note that EdgeCount is always the same
     as VertexCount. Two properties are provided simply for clarity.
: since 7.0

[Point3d](/rhinocommon/rhino/geometry/point3d/) LimitSurfaceCenterPoint
: Get the limit surface point location at the center of the face
: since 7.0

int VertexCount
: Number of vertices for this face. Note that EdgeCount is always the same
     as VertexCount. Two properties are provided simply for clarity.
: since 7.0
## Methods

[SubDEdge](/rhinocommon/rhino/geometry/subdedge/) EdgeAt(int index)
: Get an edge at a given index
: since 7.0

bool EdgeDirectionMatchesFaceOrientation(int index)
: Check if a given edge in this face has the same direction as the face orientation
: since 7.0

[SubDVertex](/rhinocommon/rhino/geometry/subdvertex/) VertexAt(int index)
: Get a vertex that this face uses by index
: since 7.0
