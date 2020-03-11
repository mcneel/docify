---
title: "AngularDimension"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a dimension of an entity that can be measured with an angle.
```cs
[Serializable]
public class AngularDimension : Dimension
```
## Constructors

AngularDimension()
: 
: since 6.0

AngularDimension(Arc arc,double offset)
: Create an angular dimension from a given arc
## Properties

AngleDisplayFormat AngleFormat
: 
: since 6.0

int AngleResolution
: 
: since 6.0

double AngleRoundoff
: 
: since 6.0

ZeroSuppression AngleZeroSuppression
: 
: since 6.0

[Point2d](/rhinocommon/rhino/geometry/point2d/) ArrowPoint1
: 
: since 6.0

[Point2d](/rhinocommon/rhino/geometry/point2d/) ArrowPoint2
: 
: since 6.0

[Point2d](/rhinocommon/rhino/geometry/point2d/) CenterPoint
: 
: since 6.0

[Point2d](/rhinocommon/rhino/geometry/point2d/) DefPoint1
: 
: since 6.0

[Point2d](/rhinocommon/rhino/geometry/point2d/) DefPoint2
: 
: since 6.0

[Point2d](/rhinocommon/rhino/geometry/point2d/) DimlinePoint
: 
: since 6.0
## Methods

static AngularDimension Create(DimensionStyle dimStyle,Plane plane,Vector3d horizontal,Point3d centerpoint,Point3d defpoint1,Point3d defpoint2,Point3d dimlinepoint)
: Initialize Dimension parameters
: since 6.0

static AngularDimension Create(Guid styleId,Plane plane,Point3d extpoint1,Point3d extpoint2,Point3d dirpoint1,Point3d dirpoint2,Point3d dimlinepoint)
: Initialize Dimension parameters
: since 6.0

bool AdjustFromPoints(Plane plane,Point3d centerpoint,Point3d defpoint1,Point3d defpoint2,Point3d dimlinepoint)
: Update Dimension geometry from point locations
: since 6.0

bool AdjustFromPoints(Plane plane,Point3d extpoint1,Point3d extpoint2,Point3d dirpoint1,Point3d dirpoint2,Point3d dimlinepoint)
: Update Dimension geometry from point locations
: since 6.0

bool Get3dPoints(Point3d centerpoint,Point3d defpoint1,Point3d defpoint2,Point3d arrowpoint1,Point3d arrowpoint2,Point3d dimlinepoint,Point3d textpoint)
: Get locations of dimension's 3d points
: since 6.0

string GetAngleDisplayText(DimensionStyle style)
: 
: since 6.0

bool GetDisplayLines(DimensionStyle style,double scale,Line[] lines,Arc[] arcs)
: 
: since 6.0

bool GetTextRectangle(Point3d[] corners)
: 
: since 6.0
