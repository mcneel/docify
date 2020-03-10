---
title: "Rhino.Geometry.Plane"
draft: false
---

## static !=
- (summary) 
     Determines if two planes are different.
     
- (since) 5.0
## static ==
- (summary) 
     Determines if two planes are equal.
     
- (since) 5.0
# Constructors
## Rhino.Geometry.Plane(double a,double b,double c,double d)
- (summary) 
     Constructs a plane from an equation
     Ax+By+Cz+D=0.
     
- (since) 5.0
## Rhino.Geometry.Plane(Plane other)
- (summary) Copy constructor.
     This is nothing special and performs the same as assigning to another variable.
- (since) 5.0
## Rhino.Geometry.Plane(Point3d origin,Point3d xPoint,Point3d yPoint)
- (summary) 
     Initializes a plane from three non-colinear points.
     
- (since) 5.0
## Rhino.Geometry.Plane(Point3d origin,Vector3d normal)
- (summary) 
     Constructs a plane from a point and a normal vector.
     
- (since) 5.0
## Rhino.Geometry.Plane(Point3d origin,Vector3d xDirection,Vector3d yDirection)
- (summary) 
     Constructs a plane from a point and two vectors in the plane.
     
- (since) 5.0
# Properties
## static Plane Unset
- (summary) 
     Gets a plane that contains Unset origin and axis vectors.
     
- (since) 5.0
## static Plane WorldXY
- (summary) 
     plane coincident with the World XY plane.
     
- (since) 5.0
## static Plane WorldYZ
- (summary) 
     plane coincident with the World YZ plane.
     
- (since) 5.0
## static Plane WorldZX
- (summary) 
     plane coincident with the World ZX plane.
     
- (since) 5.0
## bool IsValid
- (summary) 
     Gets a value indicating whether or not this is a valid plane. 
     A plane is considered to be valid when all fields contain reasonable 
     information and the equation jibes with point and zaxis.
     
- (since) 5.0
## Vector3d Normal
- (summary) 
     Gets the normal of this plane. This is essentially the ZAxis of the plane.
     
- (since) 5.0
## Point3d Origin
- (summary) 
     Gets or sets the origin point of this plane.
     
- (since) 5.0
## double OriginX
- (summary) 
     Gets or sets the X coordinate of the origin of this plane.
     
- (since) 5.0
## double OriginY
- (summary) 
     Gets or sets the Y coordinate of the origin of this plane.
     
- (since) 5.0
## double OriginZ
- (summary) 
     Gets or sets the Z coordinate of the origin of this plane.
     
- (since) 5.0
## Vector3d XAxis
- (summary) 
     Gets or sets the X axis vector of this plane.
     
- (since) 5.0
## Vector3d YAxis
- (summary) 
     Gets or sets the Y axis vector of this plane.
     
- (since) 5.0
## Vector3d ZAxis
- (summary) 
     Gets or sets the Z axis vector of this plane.
     
- (since) 5.0
# Methods
## static PlaneFitResult FitPlaneToPoints(IEnumerable<Point3d> points,Plane plane)
- (summary) Fit a plane through a collection of points.
- (since) 5.0
- (returns) PlaneFitResult This is some return comment
## static PlaneFitResult FitPlaneToPoints(IEnumerable<Point3d> points,Plane plane,double maximumDeviation)
- (summary) Fit a plane through a collection of points.
- (since) 5.0
- (returns) PlaneFitResult This is some return comment
## Plane Clone()
- (summary) 
     Returns a deep of this instance.
     
- (since) 6.0
- (returns) Plane This is some return comment
## bool ClosestParameter(Point3d testPoint,double s,double t)
- (summary) 
     Gets the parameters of the point on the plane closest to a test point.
     
- (since) 5.0
- (returns) bool This is some return comment
## Point3d ClosestPoint(Point3d testPoint)
- (summary) 
     Gets the point on the plane closest to a test point.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## bool DistanceTo(BoundingBox bbox,double min,double max)
- (summary) 
     Returns the signed minimum and maximum distances from bbox to this plane.
     
- (since) 6.0
- (returns) bool This is some return comment
## double DistanceTo(Point3d testPoint)
- (summary) 
     Returns the signed distance from testPoint to its projection onto this plane. 
     If the point is below the plane, a negative distance is returned.
     
- (since) 5.0
- (returns) double This is some return comment
## bool EpsilonEquals(Plane other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
     Determines if an object is a plane and has the same components as this plane.
     
- (since) (unknown)
- (returns) bool This is some return comment
## bool Equals(Plane plane)
- (summary) 
     Determines if another plane has the same components as this plane.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ExtendThroughBox(BoundingBox box,Interval s,Interval t)
- (summary) 
     Extends this plane through a bounding box. 
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ExtendThroughBox(Box box,Interval s,Interval t)
- (summary) 
     Extend this plane through a Box. 
     
- (since) 5.0
- (returns) bool This is some return comment
## void Flip()
- (summary) 
     Flip this plane by swapping out the X and Y axes and inverting the Z axis.
     
- (since) 5.0
- (returns) void This is some return comment
## int GetHashCode()
- (summary) 
     Gets a non-unique hashing code for this entity.
     
- (since) (unknown)
- (returns) int This is some return comment
## double[] GetPlaneEquation()
- (summary) 
     Gets the plane equation for this plane in the format of Ax+By+Cz+D=0.
     
- (since) 5.0
- (returns) double[] This is some return comment
## Point3d PointAt(double u,double v)
- (summary) 
     Evaluate a point on the plane.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## Point3d PointAt(double u,double v,double w)
- (summary) 
     Evaluate a point on the plane.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## bool RemapToPlaneSpace(Point3d ptSample,Point3d ptPlane)
- (summary) 
     Convert a point from World space coordinates into Plane space coordinates.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Rotate(double sinAngle,double cosAngle,Vector3d axis)
- (summary) 
     Rotate the plane about its origin point.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Rotate(double sinAngle,double cosAngle,Vector3d axis,Point3d centerOfRotation)
- (summary) Rotate the plane about a custom anchor point.
- (since) 5.0
- (returns) bool This is some return comment
## bool Rotate(double angle,Vector3d axis)
- (summary) 
     Rotate the plane about its origin point.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Rotate(double angle,Vector3d axis,Point3d centerOfRotation)
- (summary) 
     Rotate the plane about a custom anchor point.
     
- (since) 5.0
- (returns) bool This is some return comment
## string ToString()
- (summary) 
     Constructs the string representation of this plane.
     
- (since) (unknown)
- (returns) string This is some return comment
## string ToString(string format,IFormatProvider formatProvider)
- (summary) 
- (since) 7.0
- (returns) string This is some return comment
## bool Transform(Transform xform)
- (summary) 
     Transform the plane with a Transformation matrix.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Translate(Vector3d delta)
- (summary) 
     Translate (move) the plane along a vector.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool UpdateEquation()
- (summary) 
     Update Equations
     
- (since) 6.0
- (returns) bool This is some return comment
## double ValueAt(Point3d p)
- (summary) 
     Get the value of the plane equation at the point.
     
- (since) 5.7
- (returns) double This is some return comment
