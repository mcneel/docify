---
title: "Point3d"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the three coordinates of a point in three-dimensional space,
   using -precision floating point values.

static -
: Computes the additive inverse of all coordinates in the point, and returns the new point.
: Returns - A point value that, when summed with the point input, yields the .

static -
: Subtracts a point from another point.
: Returns - A new vector that is the difference of point minus vector.

static -
: Subtracts a vector from a point.
: Returns - A new point that is the difference of point minus vector.

static !=
: Determines whether two Point3d have different values.
: Returns - True if the two points differ in any coordinate; False otherwise.

static *
: Multiplies a  by a number.
: Returns - A new point that is coordinatewise multiplied by t.

static *
: Multiplies a  by a number.
: Returns - A new point that is coordinatewise multiplied by t.

static /
: Divides a  by a number.
: Returns - A new point that is coordinatewise divided by t.

static +
: Sums up a point and a vector, and returns a new point.
: Returns - A new point that results from the addition of point and vector.
: since (unknown)

static +
: Sums two  instances.
: Returns - A new point that results from the addition of point1 and point2.
: since (unknown)

static +
: Sums up a point and a vector, and returns a new point.
: Returns - A new point that results from the addition of point and vector.
: since (unknown)

static +
: Sums up a point and a vector, and returns a new point.
: Returns - A new point that results from the addition of point and vector.
: since (unknown)

static <
: Determines whether the first specified point comes before (has inferior sorting value than) the second point.
     Coordinates evaluation priority is first X, then Y, then Z.
: Returns - True if a.X is smaller than b.X,
     or a.X == b.X and a.Y is smaller than b.Y,
     or a.X == b.X and a.Y == b.Y and a.Z is smaller than b.Z;
     otherwise, false.

static <=
: Determines whether the first specified point comes before
     (has inferior sorting value than) the second point, or it is equal to it.
     Coordinates evaluation priority is first X, then Y, then Z.
: Returns - True if a.X is smaller than b.X,
     or a.X == b.X and a.Y is smaller than b.Y,
     or a.X == b.X and a.Y == b.Y and a.Z <= b.Z;
     otherwise, false.

static ==
: Determines whether two Point3d have equal values.
: Returns - True if the coordinates of the two points are exactly equal; otherwise false.

static >
: Determines whether the first specified point comes after (has superior sorting value than) the second point.
     Coordinates evaluation priority is first X, then Y, then Z.
: Returns - True if a.X is larger than b.X,
     or a.X == b.X and a.Y is larger than b.Y,
     or a.X == b.X and a.Y == b.Y and a.Z is larger than b.Z;
     otherwise, false.

static >=
: Determines whether the first specified point comes after
     (has superior sorting value than) the second point, or it is equal to it.
     Coordinates evaluation priority is first X, then Y, then Z.
: Returns - True if a.X is larger than b.X,
     or a.X == b.X and a.Y is larger than b.Y,
     or a.X == b.X and a.Y == b.Y and a.Z >= b.Z;
     otherwise, false.
## Constructors

Point3d(double x,double y,double z)
: Initializes a new point by defining the X, Y and Z coordinates.

Point3d(Point3d point)
: Initializes a new point by copying coordinates from another point.

Point3d(Point3f point)
: Initializes a new point by copying coordinates from a single-precision point.

Point3d(Point4d point)
: Initializes a new point by copying coordinates from a four-dimensional point.
     The first three coordinates are divided by the last one.
     If the W (fourth) dimension of the input point is zero, then it will be just discarded.

Point3d(Vector3d vector)
: Initializes a new point by copying coordinates from the components of a vector.
## Properties

static Point3d Origin
: Gets the value of a point at location 0,0,0.

static Point3d Unset
: Gets the value of a point at location RhinoMath.UnsetValue,RhinoMath.UnsetValue,RhinoMath.UnsetValue.

bool IsValid
: Each coordinate of the point must pass the  test.

double MaximumCoordinate
: Gets the largest (both positive and negative) valid coordinate in this point,
     or RhinoMath.UnsetValue if no coordinate is valid.

double MinimumCoordinate
: Gets the smallest (both positive and negative) coordinate value in this point.

double X
: Gets or sets the X (first) coordinate of this point.

double Y
: Gets or sets the Y (second) coordinate of this point.

double Z
: Gets or sets the Z (third) coordinate of this point.
## Methods

static Point3d Add(Point3d point1,Point3d point2)
: Sums two  instances.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
: Returns - A new point that results from the addition of point1 and point2.

static Point3d Add(Point3d point,Vector3d vector)
: Sums up a point and a vector, and returns a new point.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
: Returns - A new point that results from the addition of point and vector.

static Point3d Add(Point3d point,Vector3f vector)
: Sums up a point and a vector, and returns a new point.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
: Returns - A new point that results from the addition of point and vector.

static Point3d Add(Vector3d vector,Point3d point)
: Sums up a point and a vector, and returns a new point.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
: Returns - A new point that results from the addition of point and vector.

static bool ArePointsCoplanar(IEnumerable<Point3d> points,double tolerance)
: Determines whether a set of points is coplanar within a given tolerance.
: Returns - True if points are on the same plane; False otherwise.

static Point3d[] CullDuplicates(IEnumerable<Point3d> points,double tolerance)
: Removes duplicates in the supplied set of points.
: Returns - An array of points without duplicates; or None on error.

static Point3d Divide(Point3d point,double t)
: Divides a  by a number.
     (Provided for languages that do not support operator overloading. You can use the / operator otherwise)
: Returns - A new point that is coordinatewise divided by t.

static Point3d FromPoint3f(Point3f point)
: Converts a single-precision point in a double-precision point.
: Returns - The resulting point.
: since 6.0

static Point3d Multiply(double t,Point3d point)
: Multiplies a  by a number.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
: Returns - A new point that is coordinatewise multiplied by t.

static Point3d Multiply(Point3d point,double t)
: Multiplies a  by a number.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
: Returns - A new point that is coordinatewise multiplied by t.

static Point3d[] SortAndCullPointList(IEnumerable<Point3d> points,double minimumDistance)
: Orders a set of points so they will be connected in a "reasonable polyline" order.
     Also, removes points from the list if their common distance exceeds a specified threshold.
: Returns - The new array of sorted and culled points.

static [Vector3d](/rhinocommon/rhino/geometry/vector3d/) Subtract(Point3d point1,Point3d point2)
: Subtracts a point from another point.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
: Returns - A new vector that is the difference of point minus vector.

static Point3d Subtract(Point3d point,Vector3d vector)
: Subtracts a vector from a point.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
: Returns - A new point that is the difference of point minus vector.

static bool TryParse(string input,Point3d result)
: Converts the string representation of a point to the equivalent Point3d structure.
: Returns - True if successful, False otherwise.
: since 6.12

int CompareTo(Point3d other)
: Compares this  with another .
     Component evaluation priority is first X, then Y, then Z.
: Returns - 0: if this is identical to other-1: if this.X < other.X-1: if this.X == other.X and this.Y < other.Y-1: if this.X == other.X and this.Y == other.Y and this.Z < other.Z+1: otherwise.

double DistanceTo(Point3d other)
: Computes the distance between two points.
: Returns - The length of the line between this and the other point; or 0 if any of the points is not valid.

double DistanceToSquared(Point3d other)
: Computes the square of the distance between two points.
     This method is usually largely faster than DistanceTo().
: Returns - The squared length of the line between this and the other point; or 0 if any of the points is not valid.
: since 6.0

bool EpsilonEquals(Point3d other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool Equals(object obj)
: Determines whether the specified  is a  and has the same values as the present point.
: Returns - True if obj is a Point3d and has the same coordinates as this; otherwise false.
: since (unknown)

bool Equals(Point3d point)
: Determines whether the specified  has the same values as the present point.
: Returns - True if point has the same coordinates as this; otherwise false.

int GetHashCode()
: Computes a hash code for the present point.
: Returns - A non-unique integer that represents this point.
: since (unknown)

void Interpolate(Point3d pA,Point3d pB,double t)
: Interpolate between two points.

string ToString()
: Constructs the string representation for the current point.
: Returns - The point representation in the form X,Y,Z.
: since (unknown)

string ToString(string format,IFormatProvider formatProvider)
: 
: since 7.0

void Transform(Transform xform)
: Transforms the present point in place. The transformation matrix acts on the left of the point. i.e.,
     result = transformation*point
