---
title: "Rhino.Geometry.Circle"
draft: false
---

# Constructors
## Rhino.Geometry.Circle(Arc arc)
- (summary) 
     Initializes a circle from an arc.
     
- (since) 5.0
## Rhino.Geometry.Circle(double radius)
- (summary) 
     Initializes a circle with center (0,0,0) in the world XY plane.
     
- (since) 5.0
## Rhino.Geometry.Circle(Plane plane,double radius)
- (summary) 
     Initializes a circle on a plane with a given radius.
     
- (since) 5.0
## Rhino.Geometry.Circle(Plane plane,Point3d center,double radius)
- (summary) 
     Initializes a circle parallel to a given plane with given center and radius.
     
- (since) 5.0
## Rhino.Geometry.Circle(Point3d center,double radius)
- (summary) 
     Initializes a circle parallel to the world XY plane with given center and radius.
     
- (since) 5.0
## Rhino.Geometry.Circle(Point3d point1,Point3d point2,Point3d point3)
- (summary) 
     Initializes a circle through three 3d points. 
     
- (since) 5.0
## Rhino.Geometry.Circle(Point3d startPoint,Vector3d tangentAtP,Point3d pointOnCircle)
- (summary) 
     Initializes a circle from two 3d points and a tangent at the first point.
     The start/end of the circle is at point "startPoint".
     
- (since) 5.0
# Properties
## static Circle Unset
- (summary) 
     Gets a circle with Unset components.
     
- (since) 5.0
## BoundingBox BoundingBox
- (summary) 
     Gets the circle's 3d axis aligned bounding box.
     
- (since) 5.0
## Point3d Center
- (summary) 
     Gets or sets the center point of this circle.
     
- (since) 5.0
## double Circumference
- (summary) 
     Gets or sets the circumference of this circle.
     
- (since) 5.0
## double Diameter
- (summary) 
     Gets or sets the diameter (radius * 2.0) of this circle. 
     Diameters should be positive values.
     
- (since) 5.0
## bool IsValid
- (summary)  
     A valid circle has radius larger than 0.0 and a base plane which is must also be valid.
     
- (since) 5.0
## Vector3d Normal
- (summary) 
     Gets the normal vector for this circle.
     
- (since) 5.0
## Plane Plane
- (summary) 
     Gets or sets the plane of the circle.
     
- (since) 5.0
## double Radius
- (summary) 
     Gets or sets the radius of this circle. 
     Radii should be positive values.
     
- (since) 5.0
# Methods
## static bool TryFitCircleToPoints(IEnumerable<Point3d> points,Circle circle)
- (summary) 
     Attempt to fit a circle through a set of points.
     
- (since) 6.2
- (returns) bool This is some return comment
## static Circle TryFitCircleTT(Curve c1,Curve c2,double t1,double t2)
- (summary) 
     Try to fit a circle to two curves using tangent relationships.
     
- (since) 5.0
- (returns) Circle This is some return comment
## static Circle TryFitCircleTTT(Curve c1,Curve c2,Curve c3,double t1,double t2,double t3)
- (summary) 
     Try to fit a circle to three curves using tangent relationships.
     
- (since) 5.0
- (returns) Circle This is some return comment
## bool ClosestParameter(Point3d testPoint,double t)
- (summary) 
     Gets the parameter on the circle which is closest to a test point.
     
- (since) 5.0
- (returns) bool This is some return comment
## Point3d ClosestPoint(Point3d testPoint)
- (summary) 
     Gets the point on the circle which is closest to a test point.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## Vector3d DerivativeAt(int derivative,double t)
- (summary) 
     Determines the value of the Nth derivative at a parameter. 
     
- (since) 5.0
- (returns) Vector3d This is some return comment
## bool EpsilonEquals(Circle other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## bool IsInPlane(Plane plane,double tolerance)
- (summary) 
     Evaluates whether or not this circle is co-planar with a given plane.
     
- (since) 5.0
- (returns) bool This is some return comment
## Point3d PointAt(double t)
- (summary) 
     Circles use trigonometric parameterization: 
     t -> center + cos(t)*radius*xaxis + sin(t)*radius*yaxis.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## void Reverse()
- (summary) 
     Reverse the orientation of the circle. Changes the domain from [a,b]
     to [-b,-a].
     
- (since) 5.0
- (returns) void This is some return comment
## bool Rotate(double sinAngle,double cosAngle,Vector3d axis)
- (summary) 
     Rotates the circle around an axis that starts at the base plane origin.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Rotate(double sinAngle,double cosAngle,Vector3d axis,Point3d point)
- (summary) 
     Rotates the circle around an axis that starts at the provided point.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Rotate(double angle,Vector3d axis)
- (summary) 
     Rotates the circle through a given angle.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Rotate(double angle,Vector3d axis,Point3d point)
- (summary) 
     Rotates the circle through a given angle.
     
- (since) 5.0
- (returns) bool This is some return comment
## Vector3d TangentAt(double t)
- (summary) 
     Circles use trigonometric parameterization: 
     t -> center + cos(t)*radius*xaxis + sin(t)*radius*yaxis.
     
- (since) 5.0
- (returns) Vector3d This is some return comment
## NurbsCurve ToNurbsCurve()
- (summary) 
     Constructs a nurbs curve representation of this circle. 
     This amounts to the same as calling NurbsCurve.CreateFromCircle().
     
- (since) 5.0
- (returns) NurbsCurve This is some return comment
## NurbsCurve ToNurbsCurve(int degree,int cvCount)
- (summary) 
     Create a uniform non-ratonal cubic NURBS approximation of a circle.
     
- (since) 6.0
- (returns) NurbsCurve This is some return comment
## bool Transform(Transform xform)
- (summary) 
     Transforms this circle using an xform matrix. 
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Translate(Vector3d delta)
- (summary) 
     Moves the circle.
     
- (since) 5.0
- (returns) bool This is some return comment
