---
title: "DisplayBitmapDrawList"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

```cs
public class DisplayBitmapDrawList
```
## Constructors

DisplayBitmapDrawList()
: 
## Properties

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox
: 

int MaximumCachedSortLists
: Maximum number of cached sort order index lists stored on this class.
     Default is 10, but depending on the number of points in this list you
     may get better performance by setting this value to a certain percentage
     of the point count.

double SortAngleTolerance
: Angle in radians used to determine if an index list is "parallel enough"
     to a viewports camera angle. Default is 0.0873 radians (5 degrees)
## Methods

void SetPoints(IEnumerable<Point3d> points)
: 

void SetPoints(IEnumerable<Point3d> points,Color blendColor)
: 

void SetPoints(IEnumerable<Point3d> points,IEnumerable<Color> colors)
: 

int[] Sort(Vector3d cameraDirection)
: 
