---
title: "Arc"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents the value of a plane, two angles and a radius in
   a subcurve of a three-dimensional circle.
   
   The curve is parameterized by an angle expressed in radians. For an IsValid arc
   the total subtended angle AngleRadians() = Domain()(1) - Domain()(0) must satisfy
   0 < AngleRadians() < 2*PiThe parameterization of the Arc is inherited from the Circle it is derived from.
   In particulart -> center + cos(t)*radius*xaxis + sin(t)*radius*yaxiswhere xaxis and yaxis, (part of Circle.Plane) form an othonormal frame of the plane
   containing the circle.
#### static !=
- (summary) 
     Determines whether two arcs have different values.
     
- (since) 5.0
#### static ==
- (summary) 
     Determines whether two arcs have equal values.
     
- (since) 5.0
## Constructors
#### Rhino.Geometry.Arc(Circle circle,double angleRadians)
- (summary) 
     Initializes a new instance of an arc from a base circle and an angle.
     
- (since) 5.0
#### Rhino.Geometry.Arc(Circle circle,Interval angleIntervalRadians)
- (summary) 
     Initializes a new instance of an arc from a base circle and an interval of angles.
     
- (since) 5.0
#### Rhino.Geometry.Arc(Plane plane,double radius,double angleRadians)
- (summary) 
     Initializes a new arc from a base plane, a radius value and an angle.
     
- (since) 5.0
#### Rhino.Geometry.Arc(Plane plane,Point3d center,double radius,double angleRadians)
- (summary) 
     Initializes a new aligned arc at the given center point, with a custom radius and angle.
     
- (since) 5.0
#### Rhino.Geometry.Arc(Point3d center,double radius,double angleRadians)
- (summary) 
     Initializes a new horizontal arc at the given center point, with a custom radius and angle.
     
- (since) 5.0
#### Rhino.Geometry.Arc(Point3d startPoint,Point3d pointOnInterior,Point3d endPoint)
- (summary) 
     Initializes a new arc through three points. If the points are coincident 
     or colinear, this will result in an Invalid arc.
     
- (since) 5.0
#### Rhino.Geometry.Arc(Point3d pointA,Vector3d tangentA,Point3d pointB)
- (summary) 
     Initializes a new arc from end points and a tangent vector. 
     If the tangent is parallel with the endpoints this will result in an Invalid arc.
     
- (since) 5.0
## Properties
#### static Arc Unset
- (summary) 
     Gets an Arc with Unset components.
     
- (since) 5.0
#### double Angle
- (summary) 
     Gets or sets the sweep -or subtended- angle (in Radians) for this arc segment.
     
- (since) 5.0
#### double AngleDegrees
- (summary) 
     Gets or sets the sweep -or subtended- angle (in Radians) for this arc segment.
     
- (since) 5.0
#### Interval AngleDomain
- (summary) 
     Gets or sets the angle domain (in Radians) of this arc.
     
- (since) 5.0
#### Point3d Center
- (summary) 
     Gets or sets the center point for this arc.
     
- (since) 5.0
#### double Circumference
- (summary) 
     Gets the circumference of the circle that is coincident with this arc.
     
- (since) 5.0
#### double Diameter
- (summary) 
     Gets or sets the Diameter of this arc.
     
- (since) 5.0
#### double EndAngle
- (summary) 
     Gets or sets the end angle (in Radians) for this arc segment.
     
- (since) 5.0
#### double EndAngleDegrees
- (summary) 
     Gets or sets the end angle (in Radians) for this arc segment.
     
- (since) 5.0
#### Point3d EndPoint
- (summary) 
     Gets the end point of the arc.
     
- (since) 5.0
#### bool IsCircle
- (summary) 
     Gets a value indicating whether or not this arc is a complete circle.
     
- (since) 5.0
#### bool IsValid
- (summary) 
     Gets a value indicating whether or not this arc is valid.
     Detail:
      Radius>0 and 0<AngleRadians()<=2*Math.Pi.
     
- (since) 5.0
#### double Length
- (summary) 
     Gets the length of the arc. (Length = Radius * (subtended angle in radians)).
     
- (since) 5.0
#### Point3d MidPoint
- (summary) 
     Gets the mid-point of the arc.
     
- (since) 5.0
#### Plane Plane
- (summary) 
     Gets or sets the plane in which this arc lies.
     
- (since) 5.0
#### double Radius
- (summary) 
     Gets or sets the radius of this arc.
     
- (since) 5.0
#### double StartAngle
- (summary) 
     Gets or sets the start angle (in Radians) for this arc segment.
     
- (since) 5.0
#### double StartAngleDegrees
- (summary) 
     Gets or sets the start angle (in Radians) for this arc segment.
     
- (since) 5.0
#### Point3d StartPoint
- (summary) 
     Gets the start point of the arc.
     
- (since) 5.0
## Methods
#### BoundingBox BoundingBox()
- (summary) 
     Computes the 3D axis aligned bounding box for this arc.
     
- (since) 5.0
- (returns) BoundingBox This is some return comment
#### double ClosestParameter(Point3d testPoint)
- (summary) 
     Gets parameter on the arc closest to a test point.
     
- (since) 5.0
- (returns) double This is some return comment
#### Point3d ClosestPoint(Point3d testPoint)
- (summary) 
     Computes the point on an arc that is closest to a test point.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### bool EpsilonEquals(Arc other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
#### bool Equals(Arc other)
- (summary) 
     Determines whether another arc has the same value as this arc.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Equals(object obj)
- (summary) 
     Determines whether another object is an arc and has the same value as this arc.
     
- (since) (unknown)
- (returns) bool This is some return comment
#### int GetHashCode()
- (summary) 
     Computes a hash code for the present arc.
     
- (since) (unknown)
- (returns) int This is some return comment
#### Point3d PointAt(double t)
- (summary) 
     Gets the point at the given arc parameter.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### void Reverse()
- (summary) 
     Reverses the orientation of the arc. Changes the domain from [a,b]
     to [-b,-a].
     
- (since) 5.0
- (returns) void This is some return comment
#### Vector3d TangentAt(double t)
- (summary) 
     Gets the tangent at the given parameter.
     
- (since) 5.0
- (returns) Vector3d This is some return comment
#### NurbsCurve ToNurbsCurve()
- (summary) 
     Initializes a nurbs curve representation of this arc. 
     This amounts to the same as calling NurbsCurve.CreateFromArc().
     
- (since) 5.0
- (returns) NurbsCurve This is some return comment
#### NurbsCurve ToNurbsCurve(int degree,int cvCount)
- (summary) 
     Create a uniform non-ratonal cubic NURBS approximation of an arc.
     
- (since) 6.0
- (returns) NurbsCurve This is some return comment
#### bool Transform(Transform xform)
- (summary) 
     Transforms the arc using a Transformation matrix.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Trim(Interval domain)
- (summary) 
     Sets arc's angle domain (in radians) as a subdomain of the circle.
     
- (since) 5.0
- (returns) bool This is some return comment
