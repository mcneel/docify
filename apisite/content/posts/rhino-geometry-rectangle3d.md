---
title: "Rectangle3d"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents the values of a plane and two intervals
   that form an oriented rectangle in three dimensions.
   
## Constructors
#### Rhino.Geometry.Rectangle3d(Plane plane,double width,double height)
- (summary) 
     Initializes a new rectangle from width and height.
     
- (since) 5.0
#### Rhino.Geometry.Rectangle3d(Plane plane,Interval width,Interval height)
- (summary) 
     Initializes a new rectangle from dimensions.
     
- (since) 5.0
#### Rhino.Geometry.Rectangle3d(Plane plane,Point3d cornerA,Point3d cornerB)
- (summary) 
     Initializes a new rectangle from a base plane and two corner points.
     
- (since) 5.0
## Properties
#### static Rectangle3d Unset
- (summary) 
     Gets a rectangle with Unset components.
     
- (since) 5.0
#### double Area
- (summary) 
     Gets the unsigned Area of the rectangle.
     
- (since) 5.0
#### BoundingBox BoundingBox
- (summary) 
     Gets the world aligned boundingbox for this rectangle.
     
- (since) 5.0
#### Point3d Center
- (summary) 
     Gets the point in the center of the rectangle.
     
- (since) 5.0
#### double Circumference
- (summary) 
     Gets the circumference of the rectangle.
     
- (since) 5.0
#### double Height
- (summary) 
     Gets the signed height of the rectangle. If the Y dimension is decreasing, the height will be negative.
     
- (since) 5.0
#### bool IsValid
- (summary) 
     Gets a value indicating whether or not this is a valid rectangle. 
     A rectangle is considered to be valid when the base plane and both dimensions are valid.
     
- (since) 5.0
#### Plane Plane
- (summary) 
     Gets or sets the base plane of the rectangle.
     
- (since) 5.0
#### double Width
- (summary) 
     Gets the signed width of the rectangle. If the X dimension is decreasing, the width will be negative.
     
- (since) 5.0
#### Interval X
- (summary) 
     Gets or sets the dimensions of the rectangle along the base plane X-Axis (i.e. the width).
     
- (since) 5.0
#### Interval Y
- (summary) 
     Gets or sets the dimensions of the rectangle along the base plane Y-Axis (i.e. the height).
     
- (since) 5.0
## Methods
#### static Rectangle3d CreateFromPolyline(IEnumerable<Point3d> polyline)
- (summary) 
     Attempts to create a rectangle from a polyline. This method only works well for
     polylines that already closely resemble rectangles. If the polyline contains
     more than four vertices, the least significant ones will be ignored. If the
     polylines is non-orthogonal, the discrepancies will be averaged away.
     This method should not be used as a Rectangle fitter.
     
- (since) 5.0
- (returns) Rectangle3d This is some return comment
#### static Rectangle3d CreateFromPolyline(IEnumerable<Point3d> polyline,double deviation,double angleDeviation)
- (summary) 
     Attempts to create a rectangle from a polyline. This method only works well for
     polylines that already closely resemble rectangles. If the polyline contains
     more than four vertices, the least significant ones will be ignored. If the
     polylines is non-orthogonal, the discrepancies will be averaged away.
     This method should not be used as a Rectangle fitter.
     
- (since) 5.0
- (returns) Rectangle3d This is some return comment
#### Point3d ClosestPoint(Point3d point)
- (summary) 
     Gets the point on the rectangle that is closest to a test-point.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### Point3d ClosestPoint(Point3d point,bool includeInterior)
- (summary) 
     Gets the point on the rectangle that is closest to a test-point.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### PointContainment Contains(double x,double y)
- (summary) 
     Determines if two plane parameters are included in this rectangle.
     
- (since) 5.0
- (returns) PointContainment This is some return comment
#### PointContainment Contains(Point3d pt)
- (summary) 
     Determines if a point is included in this rectangle.
     
- (since) 5.0
- (returns) PointContainment This is some return comment
#### Point3d Corner(int index)
- (summary) 
     Gets the corner at the given index.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### bool EpsilonEquals(Rectangle3d other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
#### void MakeIncreasing()
- (summary) 
     Ensures the X and Y dimensions are increasing or singleton intervals.
     
- (since) 5.0
- (returns) void This is some return comment
#### Point3d PointAt(double t)
- (summary) 
     Gets a point along the rectangle boundary.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### Point3d PointAt(double x,double y)
- (summary) 
     Gets a point in Rectangle space.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### void RecenterPlane(int index)
- (summary) 
     Recenters the base plane on one of the corners.
     
- (since) 5.0
- (returns) void This is some return comment
#### void RecenterPlane(Point3d origin)
- (summary) 
     Recenters the base plane on a new origin.
     
- (since) 5.0
- (returns) void This is some return comment
#### NurbsCurve ToNurbsCurve()
- (summary) 
     Constructs a nurbs curve representation of this rectangle.
     
- (since) 5.0
- (returns) NurbsCurve This is some return comment
#### Polyline ToPolyline()
- (summary) 
     Constructs a polyline from this rectangle.
     
- (since) 5.0
- (returns) Polyline This is some return comment
#### bool Transform(Transform xform)
- (summary) 
     Transforms this rectangle. Note that rectangles cannot be skewed or tapered.
     
- (since) 5.0
- (returns) bool This is some return comment
