---
title: "OrdinateDimension"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents an ordinate dimension
```cs
[Serializable]
public class OrdinateDimension : Dimension
```
## Constructors

OrdinateDimension()
: 
: since 6.0
## Properties

[Point2d](/rhinocommon/rhino/geometry/point2d/) DefPoint
: 
: since 6.0

double KinkOffset1
: 
: since 6.0

double KinkOffset2
: 
: since 6.0

[Point2d](/rhinocommon/rhino/geometry/point2d/) KinkPoint1
: 
: since 6.0

[Point2d](/rhinocommon/rhino/geometry/point2d/) KinkPoint2
: 
: since 6.0

[Point2d](/rhinocommon/rhino/geometry/point2d/) LeaderPoint
: 
: since 6.0
## Methods

static OrdinateDimension Create(DimensionStyle dimStyle,Plane plane,MeasuredDirection direction,Point3d basepoint,Point3d defpoint,Point3d leaderpoint,double kinkoffset1,double kinkoffset2)
: Initialize Dimension parameters
: since 6.0

bool AdjustFromPoints(Plane plane,MeasuredDirection direction,Point3d basepoint,Point3d defpoint,Point3d leaderpoint,double kinkoffset1,double kinkoffset2)
: Update Dimension geometry from point locations
: since 6.0

bool Get3dPoints(Point3d basepoint,Point3d defpoint,Point3d leaderpoint,Point3d kinkpoint1,Point3d kinkpoint2)
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
