---
title: "MeshThicknessMeasurement"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Thickness measurement used in the mesh thickness solver.
## Constructors

MeshThicknessMeasurement(int meshIndex,int vertexIndex,double thickness,Point3d point,Point3d oppositePoint)
: Create a new thickness measurement.
: since 6.0
## Properties

int MeshIndex
: Gets the index of the mesh associated with this thickness measurement.
: since 6.0

[Point3d](/rhinocommon/rhino/geometry/point3d/) OppositePoint
: Gets the point opposite to the measurement point.
: since 6.0

[Point3d](/rhinocommon/rhino/geometry/point3d/) Point
: Gets the location of the thickness measurement.
: since 6.0

double Thickness
: Gets the local thickness of the mesh.
: since 6.0

int VertexIndex
: Gets the index of the vertex associated with this thickness measurement.
: since 6.0
