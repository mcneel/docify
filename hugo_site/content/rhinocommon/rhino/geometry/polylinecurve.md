---
title: "PolylineCurve"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the geometry of a set of linked line segments.
   This is fundamentally a class that derives from 
   and internally contains a .
```cs
[Serializable]
public class PolylineCurve : Curve
```
## Constructors

PolylineCurve()
: Initializes a new empty polyline curve.

PolylineCurve(IEnumerable<Point3d> points)
: Initializes a new polyline curve by copying its content from another set of points.

PolylineCurve(PolylineCurve other)
: Initializes a new polyline curve by copying its content from another polyline curve.
## Properties

int PointCount
: Gets the number of points in this polyline.
## Methods

double Parameter(int index)
: Gets a parameter at a specified index in the polyline curve.
: Returns - A parameter.
: since 6.0

[Point3d](/rhinocommon/rhino/geometry/point3d/) Point(int index)
: Gets a point at a specified index in the polyline curve.
: Returns - A point.

void SetParameter(int index,double parameter)
: Sets a parameter at a specified index in the polyline curve.
: since 6.0

void SetPoint(int index,Point3d point)
: Sets a point at a specified index in the polyline curve.

[Polyline](/rhinocommon/rhino/geometry/polyline/) ToPolyline()
: Returns the underlying Polyline, or points.
: Returns - The Polyline if successful, None of the curve has no points.
: since 6.0
