---
title: "SubDEdge"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Single edge of a SubD
```cs
public class SubDEdge : SubDComponent
```
## Properties

[Line](/rhinocommon/rhino/geometry/line/) ControlNetLine
: Line representing the control net end points
: since 7.0

int FaceCount
: Number of faces for this edge
: since 7.0

SubDEdgeTag Tag
: identifies the type of subdivision edge
: since 7.0

[SubDVertex](/rhinocommon/rhino/geometry/subdvertex/) VertexFrom
: Start vertex for this edge
: since 7.0

[SubDVertex](/rhinocommon/rhino/geometry/subdvertex/) VertexTo
: End vertex for this edge
: since 7.0
## Methods

[SubDFace](/rhinocommon/rhino/geometry/subdface/) FaceAt(int index)
: Retrieve a SubDFace from this edge
: since 7.0

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) ToNurbsCurve(bool clampEnds)
: Get a cubic, uniform, nonrational, NURBS curve that is on the
     edge's limit curve.
: since 7.0
