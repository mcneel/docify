---
title: "Plane"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the value of a center point and two axes in a plane in three dimensions.

static !=
: Determines if two planes are different.
: Returns - True if the two planes have any different componet components; False otherwise.

static ==
: Determines if two planes are equal.
: Returns - True if the two planes have all equal components; False otherwise.
## Constructors

Plane(double a,double b,double c,double d)
: Constructs a plane from an equation
     Ax+By+Cz+D=0.

Plane(Plane other)
: Copy constructor.
     This is nothing special and performs the same as assigning to another variable.

Plane(Point3d origin,Point3d xPoint,Point3d yPoint)
: Initializes a plane from three non-colinear points.

Plane(Point3d origin,Vector3d normal)
: Constructs a plane from a point and a normal vector.

Plane(Point3d origin,Vector3d xDirection,Vector3d yDirection)
: Constructs a plane from a point and two vectors in the plane.
## Properties

static Plane Unset
: Gets a plane that contains Unset origin and axis vectors.

static Plane WorldXY
: plane coincident with the World XY plane.

static Plane WorldYZ
: plane coincident with the World YZ plane.

static Plane WorldZX
: plane coincident with the World ZX plane.

bool IsValid
: Gets a value indicating whether or not this is a valid plane. 
     A plane is considered to be valid when all fields contain reasonable 
     information and the equation jibes with point and zaxis.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Normal
: Gets the normal of this plane. This is essentially the ZAxis of the plane.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Origin
: Gets or sets the origin point of this plane.

double OriginX
: Gets or sets the X coordinate of the origin of this plane.

double OriginY
: Gets or sets the Y coordinate of the origin of this plane.

double OriginZ
: Gets or sets the Z coordinate of the origin of this plane.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) XAxis
: Gets or sets the X axis vector of this plane.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) YAxis
: Gets or sets the Y axis vector of this plane.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) ZAxis
: Gets or sets the Z axis vector of this plane.
## Methods

static [PlaneFitResult](/rhinocommon/rhino/geometry/planefitresult/) FitPlaneToPoints(IEnumerable<Point3d> points,Plane plane)
: Fit a plane through a collection of points.
: Returns - A value indicating the result of the operation.

static [PlaneFitResult](/rhinocommon/rhino/geometry/planefitresult/) FitPlaneToPoints(IEnumerable<Point3d> points,Plane plane,double maximumDeviation)
: Fit a plane through a collection of points.
: Returns - A value indicating the result of the operation.

Plane Clone()
: Returns a deep of this instance.
: Returns - A plane with the same values as this item.
: since 6.0

bool ClosestParameter(Point3d testPoint,double s,double t)
: Gets the parameters of the point on the plane closest to a test point.
: Returns - True if a parameter could be found, 
     False if the point could not be projected successfully.

[Point3d](/rhinocommon/rhino/geometry/point3d/) ClosestPoint(Point3d testPoint)
: Gets the point on the plane closest to a test point.
: Returns - The point on the plane that is closest to testPoint, 
     or Point3d.Unset on failure.

bool DistanceTo(BoundingBox bbox,double min,double max)
: Returns the signed minimum and maximum distances from bbox to this plane.
: Returns - False if plane has zero length normal
: since 6.0

double DistanceTo(Point3d testPoint)
: Returns the signed distance from testPoint to its projection onto this plane. 
     If the point is below the plane, a negative distance is returned.
: Returns - Signed distance from this plane to testPoint.

bool EpsilonEquals(Plane other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool Equals(object obj)
: Determines if an object is a plane and has the same components as this plane.
: Returns - True if obj is a plane and has the same components as this plane; False otherwise.
: since (unknown)

bool Equals(Plane plane)
: Determines if another plane has the same components as this plane.
: Returns - True if plane has the same components as this plane; False otherwise.

bool ExtendThroughBox(BoundingBox box,Interval s,Interval t)
: Extends this plane through a bounding box.
: Returns - True on success, False on failure.

bool ExtendThroughBox(Box box,Interval s,Interval t)
: Extend this plane through a Box.
: Returns - True on success, False on failure.

void Flip()
: Flip this plane by swapping out the X and Y axes and inverting the Z axis.

int GetHashCode()
: Gets a non-unique hashing code for this entity.
: Returns - A particular number for a specific instance of plane.
: since (unknown)

double[] GetPlaneEquation()
: Gets the plane equation for this plane in the format of Ax+By+Cz+D=0.
: Returns - Array of four values.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(double u,double v)
: Evaluate a point on the plane.
: Returns - plane.origin + u*plane.xaxis + v*plane.yaxis.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(double u,double v,double w)
: Evaluate a point on the plane.
: Returns - plane.origin + u*plane.xaxis + v*plane.yaxis + z*plane.zaxis.

bool RemapToPlaneSpace(Point3d ptSample,Point3d ptPlane)
: Convert a point from World space coordinates into Plane space coordinates.
: Returns - True on success, False on failure.

bool Rotate(double sinAngle,double cosAngle,Vector3d axis)
: Rotate the plane about its origin point.
: Returns - True on success, False on failure.

bool Rotate(double sinAngle,double cosAngle,Vector3d axis,Point3d centerOfRotation)
: Rotate the plane about a custom anchor point.
: Returns - True on success, False on failure.

bool Rotate(double angle,Vector3d axis)
: Rotate the plane about its origin point.
: Returns - True on success, False on failure.

bool Rotate(double angle,Vector3d axis,Point3d centerOfRotation)
: Rotate the plane about a custom anchor point.
: Returns - True on success, False on failure.

string ToString()
: Constructs the string representation of this plane.
: Returns - Text.
: since (unknown)

string ToString(string format,IFormatProvider formatProvider)
: 
: since 7.0

bool Transform(Transform xform)
: Transform the plane with a Transformation matrix.
: Returns - True on success, False on failure.

bool Translate(Vector3d delta)
: Translate (move) the plane along a vector.
: Returns - True on success, False on failure.

bool UpdateEquation()
: Update Equations
: Returns - bool
: since 6.0

double ValueAt(Point3d p)
: Get the value of the plane equation at the point.
: Returns - returns pe[0]*p.X + pe[1]*p.Y + pe[2]*p.Z + pe[3] where
     pe[0], pe[1], pe[2] and pe[3] are the coeeficients of the plane equation.
: since 5.7
