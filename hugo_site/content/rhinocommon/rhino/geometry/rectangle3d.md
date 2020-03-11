---
title: "Rectangle3d"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the values of a plane and two intervals
   that form an oriented rectangle in three dimensions.
## Constructors

Rectangle3d(Plane plane,double width,double height)
: Initializes a new rectangle from width and height.

Rectangle3d(Plane plane,Interval width,Interval height)
: Initializes a new rectangle from dimensions.

Rectangle3d(Plane plane,Point3d cornerA,Point3d cornerB)
: Initializes a new rectangle from a base plane and two corner points.
## Properties

static Rectangle3d Unset
: Gets a rectangle with Unset components.

double Area
: Gets the unsigned Area of the rectangle.

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox
: Gets the world aligned boundingbox for this rectangle.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Center
: Gets the point in the center of the rectangle.

double Circumference
: Gets the circumference of the rectangle.

double Height
: Gets the signed height of the rectangle. If the Y dimension is decreasing, the height will be negative.

bool IsValid
: Gets a value indicating whether or not this is a valid rectangle. 
     A rectangle is considered to be valid when the base plane and both dimensions are valid.

[Plane](/rhinocommon/rhino/geometry/plane/) Plane
: Gets or sets the base plane of the rectangle.

double Width
: Gets the signed width of the rectangle. If the X dimension is decreasing, the width will be negative.

[Interval](/rhinocommon/rhino/geometry/interval/) X
: Gets or sets the dimensions of the rectangle along the base plane X-Axis (i.e. the width).

[Interval](/rhinocommon/rhino/geometry/interval/) Y
: Gets or sets the dimensions of the rectangle along the base plane Y-Axis (i.e. the height).
## Methods

static Rectangle3d CreateFromPolyline(IEnumerable<Point3d> polyline)
: Attempts to create a rectangle from a polyline. This method only works well for
     polylines that already closely resemble rectangles. If the polyline contains
     more than four vertices, the least significant ones will be ignored. If the
     polylines is non-orthogonal, the discrepancies will be averaged away.
     This method should not be used as a Rectangle fitter.
: Returns - A rectangle that is shaped similarly to the polyline or Rectangle3d.Unset 
     if the polyline does not represent a rectangle.

static Rectangle3d CreateFromPolyline(IEnumerable<Point3d> polyline,double deviation,double angleDeviation)
: Attempts to create a rectangle from a polyline. This method only works well for
     polylines that already closely resemble rectangles. If the polyline contains
     more than four vertices, the least significant ones will be ignored. If the
     polylines is non-orthogonal, the discrepancies will be averaged away.
     This method should not be used as a Rectangle fitter.
: Returns - A rectangle that is shaped similarly to the polyline or Rectangle3d.Unset 
     if the polyline does not represent a rectangle.

[Point3d](/rhinocommon/rhino/geometry/point3d/) ClosestPoint(Point3d point)
: Gets the point on the rectangle that is closest to a test-point.
: Returns - The point on or in the rectangle closest to the test point or Point3d.Unset on failure.

[Point3d](/rhinocommon/rhino/geometry/point3d/) ClosestPoint(Point3d point,bool includeInterior)
: Gets the point on the rectangle that is closest to a test-point.
: Returns - The point on the rectangle closest to the test point or Point3d.Unset on failure.

[PointContainment](/rhinocommon/rhino/geometry/pointcontainment/) Contains(double x,double y)
: Determines if two plane parameters are included in this rectangle.
: Returns - Parameter Rectangle relationship.

[PointContainment](/rhinocommon/rhino/geometry/pointcontainment/) Contains(Point3d pt)
: Determines if a point is included in this rectangle.
: Returns - Point Rectangle relationship.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Corner(int index)
: Gets the corner at the given index.
: Returns - The point at the given corner index.

bool EpsilonEquals(Rectangle3d other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

void MakeIncreasing()
: Ensures the X and Y dimensions are increasing or singleton intervals.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(double t)
: Gets a point along the rectangle boundary.
: Returns - The point at the given boundary parameter.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(double x,double y)
: Gets a point in Rectangle space.
: Returns - The point at the given x,y parameter.

void RecenterPlane(int index)
: Recenters the base plane on one of the corners.

void RecenterPlane(Point3d origin)
: Recenters the base plane on a new origin.

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) ToNurbsCurve()
: Constructs a nurbs curve representation of this rectangle.
: Returns - A nurbs curve with the same shape as this rectangle.

[Polyline](/rhinocommon/rhino/geometry/polyline/) ToPolyline()
: Constructs a polyline from this rectangle.
: Returns - A polyline with the same shape as this rectangle.

bool Transform(Transform xform)
: Transforms this rectangle. Note that rectangles cannot be skewed or tapered.
