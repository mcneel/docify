---
title: "SubDVertexList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to the vertices and vertex-related functionality of a SubD
```cs
public class SubDVertexList
```
## Properties

int Count
: Gets the number of SubD vertices.
: since 7.0

[SubDVertex](/rhinocommon/rhino/geometry/subdvertex/) First
: First vertex in this linked list of vertices
: since 7.0
## Methods

[SubDVertex](/rhinocommon/rhino/geometry/subdvertex/) Add(SubDVertexTag tag,Point3d vertex)
: Add a new vertex to the end of the Vertex list.
: Returns - The newly added vertex.
: since 7.0

[SubDVertex](/rhinocommon/rhino/geometry/subdvertex/) Find(int id)
: Find a vertex in this SubD with a given id
: since 7.0

[SubDVertex](/rhinocommon/rhino/geometry/subdvertex/) Find(uint id)
: Find a vertex in this SubD with a given id
: since 7.0
