---
title: "Arc"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the value of a plane, two angles and a radius in
   a subcurve of a three-dimensional circle.
   
   The curve is parameterized by an angle expressed in radians. For an IsValid arc
   the total subtended angle AngleRadians() = Domain()(1) - Domain()(0) must satisfy
   0 < AngleRadians() < 2*PiThe parameterization of the Arc is inherited from the Circle it is derived from.
   In particulart -> center + cos(t)*radius*xaxis + sin(t)*radius*yaxiswhere xaxis and yaxis, (part of Circle.Plane) form an othonormal frame of the plane
   containing the circle.

static !=
: Determines whether two arcs have different values.
: Returns - True if any value of the two arcs differ; otherwise false.

static ==
: Determines whether two arcs have equal values.
: Returns - True if all values of the two arcs are exactly equal; otherwise false.
## Constructors

Arc(Circle circle,double angleRadians)
: Initializes a new instance of an arc from a base circle and an angle.

Arc(Circle circle,Interval angleIntervalRadians)
: Initializes a new instance of an arc from a base circle and an interval of angles.

Arc(Plane plane,double radius,double angleRadians)
: Initializes a new arc from a base plane, a radius value and an angle.

Arc(Plane plane,Point3d center,double radius,double angleRadians)
: Initializes a new aligned arc at the given center point, with a custom radius and angle.

Arc(Point3d center,double radius,double angleRadians)
: Initializes a new horizontal arc at the given center point, with a custom radius and angle.

Arc(Point3d startPoint,Point3d pointOnInterior,Point3d endPoint)
: Initializes a new arc through three points. If the points are coincident 
     or colinear, this will result in an Invalid arc.

Arc(Point3d pointA,Vector3d tangentA,Point3d pointB)
: Initializes a new arc from end points and a tangent vector. 
     If the tangent is parallel with the endpoints this will result in an Invalid arc.
## Properties

static Arc Unset
: Gets an Arc with Unset components.

double Angle
: Gets or sets the sweep -or subtended- angle (in Radians) for this arc segment.

double AngleDegrees
: Gets or sets the sweep -or subtended- angle (in Radians) for this arc segment.

[Interval](/rhinocommon/rhino/geometry/interval/) AngleDomain
: Gets or sets the angle domain (in Radians) of this arc.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Center
: Gets or sets the center point for this arc.

double Circumference
: Gets the circumference of the circle that is coincident with this arc.

double Diameter
: Gets or sets the Diameter of this arc.

double EndAngle
: Gets or sets the end angle (in Radians) for this arc segment.

double EndAngleDegrees
: Gets or sets the end angle (in Radians) for this arc segment.

[Point3d](/rhinocommon/rhino/geometry/point3d/) EndPoint
: Gets the end point of the arc.

bool IsCircle
: Gets a value indicating whether or not this arc is a complete circle.

bool IsValid
: Gets a value indicating whether or not this arc is valid.
     Detail:
      Radius>0 and 0<AngleRadians()<=2*Math.Pi.
: Returns - True if the arc is valid.

double Length
: Gets the length of the arc. (Length = Radius * (subtended angle in radians)).

[Point3d](/rhinocommon/rhino/geometry/point3d/) MidPoint
: Gets the mid-point of the arc.

[Plane](/rhinocommon/rhino/geometry/plane/) Plane
: Gets or sets the plane in which this arc lies.

double Radius
: Gets or sets the radius of this arc.

double StartAngle
: Gets or sets the start angle (in Radians) for this arc segment.

double StartAngleDegrees
: Gets or sets the start angle (in Radians) for this arc segment.

[Point3d](/rhinocommon/rhino/geometry/point3d/) StartPoint
: Gets the start point of the arc.
## Methods

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox()
: Computes the 3D axis aligned bounding box for this arc.
: Returns - Bounding box of arc.

double ClosestParameter(Point3d testPoint)
: Gets parameter on the arc closest to a test point.
: Returns - Parameter (in radians) of the point on the arc that
     is closest to the test point. If testPoint is the center
     of the arc, then the starting point of the arc is
     (arc.Domain()[0]) returned. If no parameter could be found, 
     RhinoMath.UnsetValue is returned.

[Point3d](/rhinocommon/rhino/geometry/point3d/) ClosestPoint(Point3d testPoint)
: Computes the point on an arc that is closest to a test point.
: Returns - The point on the arc that is closest to testPoint. If testPoint is
     the center of the arc, then the starting point of the arc is returned.
     UnsetPoint on failure.

bool EpsilonEquals(Arc other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool Equals(Arc other)
: Determines whether another arc has the same value as this arc.
: Returns - True if obj is equal to this arc; otherwise false.

bool Equals(object obj)
: Determines whether another object is an arc and has the same value as this arc.
: Returns - True if obj is an arc and is exactly equal to this arc; otherwise false.
: since (unknown)

int GetHashCode()
: Computes a hash code for the present arc.
: Returns - A non-unique integer that represents this arc.
: since (unknown)

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(double t)
: Gets the point at the given arc parameter.
: Returns - The point at the given parameter.

void Reverse()
: Reverses the orientation of the arc. Changes the domain from [a,b]
     to [-b,-a].

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) TangentAt(double t)
: Gets the tangent at the given parameter.
: Returns - The tangent at the arc at the given parameter.

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) ToNurbsCurve()
: Initializes a nurbs curve representation of this arc. 
     This amounts to the same as calling NurbsCurve.CreateFromArc().
: Returns - A nurbs curve representation of this arc or None if no such representation could be made.

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) ToNurbsCurve(int degree,int cvCount)
: Create a uniform non-ratonal cubic NURBS approximation of an arc.
: Returns - NURBS curve approximation of an arc on success
: since 6.0

bool Transform(Transform xform)
: Transforms the arc using a Transformation matrix.
: Returns - True on success, False on failure.

bool Trim(Interval domain)
: Sets arc's angle domain (in radians) as a subdomain of the circle.
: Returns - True on success, False on failure.
