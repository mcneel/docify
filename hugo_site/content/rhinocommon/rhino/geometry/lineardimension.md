---
title: "LinearDimension"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a linear dimension
```cs
[Serializable]
public class LinearDimension : Dimension
```
## Constructors

LinearDimension()
: 

LinearDimension(Plane dimensionPlane,Point2d extensionLine1End,Point2d extensionLine2End,Point2d pointOnDimensionLine)
: 
## Properties

bool Aligned
: Gets or sets a value indicating whether this annotation is aligned.

AnnotationType AnnotationType
: 
: since 6.0

[Point2d](/rhinocommon/rhino/geometry/point2d/) Arrowhead1End
: Gets the arrow head end of the first extension line.

[Point2d](/rhinocommon/rhino/geometry/point2d/) Arrowhead2End
: Gets the arrow head end of the second extension line.

[Point2d](/rhinocommon/rhino/geometry/point2d/) DimensionLinePoint
: Point on annotation plane where dimension line starts
: since 6.0

double DistanceBetweenArrowTips
: Gets the distance between arrow tips.

[Point2d](/rhinocommon/rhino/geometry/point2d/) ExtensionLine1End
: End of the first extension line.

[Point2d](/rhinocommon/rhino/geometry/point2d/) ExtensionLine2End
: End of the second extension line.
## Methods

static LinearDimension Create(AnnotationType dimtype,DimensionStyle dimStyle,Plane plane,Vector3d horizontal,Point3d defpoint1,Point3d defpoint2,Point3d dimlinepoint,double rotationInPlane)
: Initialize Dimension parameters
: since 6.0

static LinearDimension FromPoints(Point3d extensionLine1End,Point3d extensionLine2End,Point3d pointOnDimensionLine)
: Initializes a new instance of the  class, based on three points.

bool Get3dPoints(Point3d extensionLine1End,Point3d extensionLine2End,Point3d arrowhead1End,Point3d arrowhead2End,Point3d dimlinepoint,Point3d textpoint)
: Get locations of dimension's 3d points
: Returns - True = success
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

void SetLocations(Point2d extensionLine1End,Point2d extensionLine2End,Point2d pointOnDimensionLine)
: Sets the three locations of the point, using two-dimensional points
     that refer to the plane of the annotation.
