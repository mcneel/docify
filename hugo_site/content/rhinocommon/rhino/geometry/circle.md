---
title: "Circle"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a circle in 3D.
   The values used are a radius and an orthonormal frame of the plane containing the circle,
   with origin at the center.The circle is parameterized by radians from 0 to 2 Pi given byt -> center + cos(t)*radius*xaxis + sin(t)*radius*yaxiswhere center, xaxis and yaxis define the orthonormal frame of the circle plane.
## Constructors

Circle(Arc arc)
: Initializes a circle from an arc.

Circle(double radius)
: Initializes a circle with center (0,0,0) in the world XY plane.

Circle(Plane plane,double radius)
: Initializes a circle on a plane with a given radius.

Circle(Plane plane,Point3d center,double radius)
: Initializes a circle parallel to a given plane with given center and radius.

Circle(Point3d center,double radius)
: Initializes a circle parallel to the world XY plane with given center and radius.

Circle(Point3d point1,Point3d point2,Point3d point3)
: Initializes a circle through three 3d points.

Circle(Point3d startPoint,Vector3d tangentAtP,Point3d pointOnCircle)
: Initializes a circle from two 3d points and a tangent at the first point.
     The start/end of the circle is at point "startPoint".
## Properties

static Circle Unset
: Gets a circle with Unset components.

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox
: Gets the circle's 3d axis aligned bounding box.
: Returns - 3d bounding box.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Center
: Gets or sets the center point of this circle.

double Circumference
: Gets or sets the circumference of this circle.

double Diameter
: Gets or sets the diameter (radius * 2.0) of this circle. 
     Diameters should be positive values.

bool IsValid
: A valid circle has radius larger than 0.0 and a base plane which is must also be valid.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Normal
: Gets the normal vector for this circle.

[Plane](/rhinocommon/rhino/geometry/plane/) Plane
: Gets or sets the plane of the circle.

double Radius
: Gets or sets the radius of this circle. 
     Radii should be positive values.
## Methods

static bool TryFitCircleToPoints(IEnumerable<Point3d> points,Circle circle)
: Attempt to fit a circle through a set of points.
: Returns - True on success, False on failure.
: since 6.2

static Circle TryFitCircleTT(Curve c1,Curve c2,double t1,double t2)
: Try to fit a circle to two curves using tangent relationships.
: Returns - Valid circle on success, Circle.Unset on failure.

static Circle TryFitCircleTTT(Curve c1,Curve c2,Curve c3,double t1,double t2,double t3)
: Try to fit a circle to three curves using tangent relationships.
: Returns - Valid circle on success, Circle.Unset on failure.

bool ClosestParameter(Point3d testPoint,double t)
: Gets the parameter on the circle which is closest to a test point.
: Returns - True on success, False on failure.

[Point3d](/rhinocommon/rhino/geometry/point3d/) ClosestPoint(Point3d testPoint)
: Gets the point on the circle which is closest to a test point.
: Returns - The point on the circle that is closest to testPoint or
     Point3d.Unset on failure.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) DerivativeAt(int derivative,double t)
: Determines the value of the Nth derivative at a parameter.
: Returns - The derivative of the circle at the given parameter.

bool EpsilonEquals(Circle other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool IsInPlane(Plane plane,double tolerance)
: Evaluates whether or not this circle is co-planar with a given plane.
: Returns - True if the circle plane is co-planar with the given plane within tolerance.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(double t)
: Circles use trigonometric parameterization: 
     t -> center + cos(t)*radius*xaxis + sin(t)*radius*yaxis.
: Returns - The point on the circle at the given parameter.

void Reverse()
: Reverse the orientation of the circle. Changes the domain from [a,b]
     to [-b,-a].

bool Rotate(double sinAngle,double cosAngle,Vector3d axis)
: Rotates the circle around an axis that starts at the base plane origin.
: Returns - True on success, False on failure.

bool Rotate(double sinAngle,double cosAngle,Vector3d axis,Point3d point)
: Rotates the circle around an axis that starts at the provided point.
: Returns - True on success, False on failure.

bool Rotate(double angle,Vector3d axis)
: Rotates the circle through a given angle.
: Returns - True on success, False on failure.

bool Rotate(double angle,Vector3d axis,Point3d point)
: Rotates the circle through a given angle.
: Returns - True on success, False on failure.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) TangentAt(double t)
: Circles use trigonometric parameterization: 
     t -> center + cos(t)*radius*xaxis + sin(t)*radius*yaxis.
: Returns - The tangent at the circle at the given parameter.

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) ToNurbsCurve()
: Constructs a nurbs curve representation of this circle. 
     This amounts to the same as calling NurbsCurve.CreateFromCircle().
: Returns - A nurbs curve representation of this circle or None if no such representation could be made.

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) ToNurbsCurve(int degree,int cvCount)
: Create a uniform non-ratonal cubic NURBS approximation of a circle.
: Returns - NURBS curve approximation of a circle on success
: since 6.0

bool Transform(Transform xform)
: Transforms this circle using an xform matrix.
: Returns - True on success, False on failure.

bool Translate(Vector3d delta)
: Moves the circle.
: Returns - True on success, False on failure.
