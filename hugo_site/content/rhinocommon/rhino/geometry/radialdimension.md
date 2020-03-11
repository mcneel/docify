---
title: "RadialDimension"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a dimension of a circular entity that can be measured with radius or diameter.
```cs
[Serializable]
public class RadialDimension : Dimension
```
## Constructors

RadialDimension()
: 
: since 6.0
## Properties

AnnotationType AnnotationType
: 
: since 6.0

[Point2d](/rhinocommon/rhino/geometry/point2d/) CenterPoint
: 
: since 6.0

[Point2d](/rhinocommon/rhino/geometry/point2d/) DimlinePoint
: 
: since 6.0

bool IsDiameterDimension
: Gets a value indicating whether the value refers to the diameter, rather than the radius.

[Point2d](/rhinocommon/rhino/geometry/point2d/) KneePoint
: 
: since 6.0

Guid LeaderArrowBlockId
: 
: since 6.0

double LeaderArrowSize
: 
: since 6.0

ArrowType LeaderArrowType
: 
: since 6.0

LeaderCurveStyle LeaderCurveStyle
: 
: since 6.0

TextHorizontalAlignment LeaderTextHorizontalAlignment
: Gets or sets the horizontal alignment of the radial dimension's text
: since 6.9

[Point2d](/rhinocommon/rhino/geometry/point2d/) RadiusPoint
: 
: since 6.0

LeaderContentAngleStyle TextAngleType
: 
: since 6.0

TextLocation TextLocation
: 
: since 6.0

TextOrientation TextOrientation
: 
: since 6.0
## Methods

static RadialDimension Create(DimensionStyle dimStyle,AnnotationType dimtype,Plane plane,Point3d centerpoint,Point3d radiuspoint,Point3d dimlinepoint)
: Initialize Dimension parameters
: since 6.0

bool AdjustFromPoints(Plane plane,Point3d centerpoint,Point3d radiuspoint,Point3d dimlinepoint,double rotationInPlane)
: Update Dimension geometry from point locations
: since 6.0

bool Get3dPoints(Point3d centerpoint,Point3d radiuspoint,Point3d dimlinepoint,Point3d kneepoint)
: Get locations of dimension's 3d points
: since 6.0

bool GetDisplayLines(DimensionStyle style,double scale,IEnumerable<Line> lines)
: 
: since (unknown)

string GetDistanceDisplayText(UnitSystem unitsystem,DimensionStyle style)
: 
: since 6.0

bool GetTextRectangle(Point3d[] corners)
: 
: since 6.0
