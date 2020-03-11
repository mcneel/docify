---
title: "MeshPart"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a portion of a mesh for partitioning
```cs
public class MeshPart
```
## Properties

int EndFaceIndex
: End of subinterval of parent mesh face array
: since 5.6

int EndVertexIndex
: End of subinterval of parent mesh vertex array
: since 5.6

int StartFaceIndex
: Start of subinterval of parent mesh face array
: since 5.6

int StartVertexIndex
: Start of subinterval of parent mesh vertex array
: since 5.6

int TriangleCount
: 
: since 5.6

int VertexCount
: EndVertexIndex - StartVertexIndex
: since 5.6
