---
title: "Rhino.Geometry.PolylineCurve"
draft: false
---

# Constructors
## Rhino.Geometry.PolylineCurve()
- (summary) 
     Initializes a new empty polyline curve.
     
- (since) 5.0
## Rhino.Geometry.PolylineCurve(IEnumerable<Point3d> points)
- (summary) 
     Initializes a new polyline curve by copying its content from another set of points.
     
- (since) 5.0
## Rhino.Geometry.PolylineCurve(PolylineCurve other)
- (summary) 
     Initializes a new polyline curve by copying its content from another polyline curve.
     
- (since) 5.0
# Properties
## int PointCount
- (summary) 
     Gets the number of points in this polyline.
     
- (since) 5.0
# Methods
## double Parameter(int index)
- (summary) 
     Gets a parameter at a specified index in the polyline curve.
     
- (since) 6.0
- (returns) double This is some return comment
## Point3d Point(int index)
- (summary) 
     Gets a point at a specified index in the polyline curve.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## void SetParameter(int index,double parameter)
- (summary) 
     Sets a parameter at a specified index in the polyline curve.
     
- (since) 6.0
- (returns) void This is some return comment
## void SetPoint(int index,Point3d point)
- (summary) 
     Sets a point at a specified index in the polyline curve.
     
- (since) 5.0
- (returns) void This is some return comment
## Polyline ToPolyline()
- (summary) 
     Returns the underlying Polyline, or points.
     
- (since) 6.0
- (returns) Polyline This is some return comment
