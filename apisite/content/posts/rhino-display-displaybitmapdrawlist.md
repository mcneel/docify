---
title: "Rhino.Display.DisplayBitmapDrawList"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Display.DisplayBitmapDrawList()
- (summary) 
- (since) 5.0
# Properties
## Geometry.BoundingBox BoundingBox
- (summary) 
- (since) 5.0
## int MaximumCachedSortLists
- (summary) 
     Maximum number of cached sort order index lists stored on this class.
     Default is 10, but depending on the number of points in this list you
     may get better performance by setting this value to a certain percentage
     of the point count.
     
- (since) 5.0
## double SortAngleTolerance
- (summary) 
     Angle in radians used to determine if an index list is "parallel enough"
     to a viewports camera angle. Default is 0.0873 radians (5 degrees)
     
- (since) 5.0
# Methods
## void SetPoints(IEnumerable<Point3d> points)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetPoints(IEnumerable<Point3d> points,Color blendColor)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetPoints(IEnumerable<Point3d> points,IEnumerable<Color> colors)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## int[] Sort(Vector3d cameraDirection)
- (summary) 
- (since) 5.0
- (returns) int[] This is some return comment
