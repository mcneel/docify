---
title: "BrepVertexList"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to all the Vertices in a Brep object
```cs
public class BrepVertexList : IEnumerable<BrepVertex>, Rhino.Collections.IRhinoTable<BrepVertex>
```
## Properties

int Count
: Gets the number of brep vertices.
: since 5.4
## Methods

[BrepVertex](/rhinocommon/rhino/geometry/brepvertex/) Add()
: Create and add a new vertex to this list
: since 5.4

[BrepVertex](/rhinocommon/rhino/geometry/brepvertex/) Add(Point3d point,double vertexTolerance)
: Create and add a new vertex to this list
: since 5.4

[BrepVertex](/rhinocommon/rhino/geometry/brepvertex/) AddPointOnFace(BrepFace face,double s,double t)
: Adds a new point on face to the brep
: Returns - new vertex that represents the point on face
: since 5.4

IEnumerator<BrepVertex> GetEnumerator()
: Gets an enumerator that visits all surfaces.
: Returns - The enumerator.
: since 5.4
