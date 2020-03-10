---
title: "Rhino.Geometry.Point3d"
date: 2020-03-10 09:24:55Z
draft: false
---

## static -
- (summary) 
     Computes the additive inverse of all coordinates in the point, and returns the new point.
     
- (since) 5.0
## static -
- (summary) 
     Subtracts a point from another point.
     
- (since) 5.0
## static -
- (summary) 
     Subtracts a vector from a point.
     
- (since) 5.0
## static !=
- (summary) 
     Determines whether two Point3d have different values.
     
- (since) 5.0
## static *
- (summary) 
     Multiplies a  by a number.
     
- (since) 5.0
## static *
- (summary) 
     Multiplies a  by a number.
     
- (since) 5.0
## static /
- (summary) 
     Divides a  by a number.
     
- (since) 5.0
## static +
- (summary) 
     Sums up a point and a vector, and returns a new point.
     
- (since) (unknown)
## static +
- (summary) 
     Sums two  instances.
     
- (since) (unknown)
## static +
- (summary) 
     Sums up a point and a vector, and returns a new point.
     
- (since) (unknown)
## static +
- (summary) 
     Sums up a point and a vector, and returns a new point.
     
- (since) (unknown)
## static <
- (summary) 
     Determines whether the first specified point comes before (has inferior sorting value than) the second point.
     Coordinates evaluation priority is first X, then Y, then Z.
- (since) 5.0
## static <=
- (summary) 
     Determines whether the first specified point comes before
     (has inferior sorting value than) the second point, or it is equal to it.
     Coordinates evaluation priority is first X, then Y, then Z.
- (since) 5.0
## static ==
- (summary) 
     Determines whether two Point3d have equal values.
     
- (since) 5.0
## static >
- (summary) 
     Determines whether the first specified point comes after (has superior sorting value than) the second point.
     Coordinates evaluation priority is first X, then Y, then Z.
- (since) 5.0
## static >=
- (summary) 
     Determines whether the first specified point comes after
     (has superior sorting value than) the second point, or it is equal to it.
     Coordinates evaluation priority is first X, then Y, then Z.
- (since) 5.0
# Constructors
## Rhino.Geometry.Point3d(double x,double y,double z)
- (summary) 
     Initializes a new point by defining the X, Y and Z coordinates.
     
- (since) 5.0
## Rhino.Geometry.Point3d(Point3d point)
- (summary) 
     Initializes a new point by copying coordinates from another point.
     
- (since) 5.0
## Rhino.Geometry.Point3d(Point3f point)
- (summary) 
     Initializes a new point by copying coordinates from a single-precision point.
     
- (since) 5.0
## Rhino.Geometry.Point3d(Point4d point)
- (summary) 
     Initializes a new point by copying coordinates from a four-dimensional point.
     The first three coordinates are divided by the last one.
     If the W (fourth) dimension of the input point is zero, then it will be just discarded.
     
- (since) 5.0
## Rhino.Geometry.Point3d(Vector3d vector)
- (summary) 
     Initializes a new point by copying coordinates from the components of a vector.
     
- (since) 5.0
# Properties
## static Point3d Origin
- (summary) 
     Gets the value of a point at location 0,0,0.
     
- (since) 5.0
## static Point3d Unset
- (summary) 
     Gets the value of a point at location RhinoMath.UnsetValue,RhinoMath.UnsetValue,RhinoMath.UnsetValue.
     
- (since) 5.0
## bool IsValid
- (summary) 
     Each coordinate of the point must pass the  test.
     
- (since) 5.0
## double MaximumCoordinate
- (summary) 
     Gets the largest (both positive and negative) valid coordinate in this point,
     or RhinoMath.UnsetValue if no coordinate is valid.
     
- (since) 5.0
## double MinimumCoordinate
- (summary) 
     Gets the smallest (both positive and negative) coordinate value in this point.
     
- (since) 5.0
## double X
- (summary) 
     Gets or sets the X (first) coordinate of this point.
     
- (since) 5.0
## double Y
- (summary) 
     Gets or sets the Y (second) coordinate of this point.
     
- (since) 5.0
## double Z
- (summary) 
     Gets or sets the Z (third) coordinate of this point.
     
- (since) 5.0
# Methods
## static Point3d Add(Point3d point1,Point3d point2)
- (summary) 
     Sums two  instances.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
- (since) 5.0
- (returns) Point3d This is some return comment
## static Point3d Add(Point3d point,Vector3d vector)
- (summary) 
     Sums up a point and a vector, and returns a new point.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
- (since) 5.0
- (returns) Point3d This is some return comment
## static Point3d Add(Point3d point,Vector3f vector)
- (summary) 
     Sums up a point and a vector, and returns a new point.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
- (since) 5.0
- (returns) Point3d This is some return comment
## static Point3d Add(Vector3d vector,Point3d point)
- (summary) 
     Sums up a point and a vector, and returns a new point.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
- (since) 5.0
- (returns) Point3d This is some return comment
## static bool ArePointsCoplanar(IEnumerable<Point3d> points,double tolerance)
- (summary) 
     Determines whether a set of points is coplanar within a given tolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## static Point3d[] CullDuplicates(IEnumerable<Point3d> points,double tolerance)
- (summary) 
     Removes duplicates in the supplied set of points.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
## static Point3d Divide(Point3d point,double t)
- (summary) 
     Divides a  by a number.
     (Provided for languages that do not support operator overloading. You can use the / operator otherwise)
- (since) 5.0
- (returns) Point3d This is some return comment
## static Point3d FromPoint3f(Point3f point)
- (summary) 
     Converts a single-precision point in a double-precision point.
     
- (since) 6.0
- (returns) Point3d This is some return comment
## static Point3d Multiply(double t,Point3d point)
- (summary) 
     Multiplies a  by a number.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
- (since) 5.0
- (returns) Point3d This is some return comment
## static Point3d Multiply(Point3d point,double t)
- (summary) 
     Multiplies a  by a number.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
- (since) 5.0
- (returns) Point3d This is some return comment
## static Point3d[] SortAndCullPointList(IEnumerable<Point3d> points,double minimumDistance)
- (summary) 
     Orders a set of points so they will be connected in a "reasonable polyline" order.
     Also, removes points from the list if their common distance exceeds a specified threshold.
- (since) 5.0
- (returns) Point3d[] This is some return comment
## static Vector3d Subtract(Point3d point1,Point3d point2)
- (summary) 
     Subtracts a point from another point.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
- (since) 5.0
- (returns) Vector3d This is some return comment
## static Point3d Subtract(Point3d point,Vector3d vector)
- (summary) 
     Subtracts a vector from a point.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
- (since) 5.0
- (returns) Point3d This is some return comment
## static bool TryParse(string input,Point3d result)
- (summary) 
     Converts the string representation of a point to the equivalent Point3d structure.
     
- (since) 6.12
- (returns) bool This is some return comment
## int CompareTo(Point3d other)
- (summary) 
     Compares this  with another .
     Component evaluation priority is first X, then Y, then Z.
- (since) 5.0
- (returns) int This is some return comment
## double DistanceTo(Point3d other)
- (summary) 
     Computes the distance between two points.
     
- (since) 5.0
- (returns) double This is some return comment
## double DistanceToSquared(Point3d other)
- (summary) 
     Computes the square of the distance between two points.
     This method is usually largely faster than DistanceTo().
- (since) 6.0
- (returns) double This is some return comment
## bool EpsilonEquals(Point3d other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
     Determines whether the specified  is a  and has the same values as the present point.
     
- (since) (unknown)
- (returns) bool This is some return comment
## bool Equals(Point3d point)
- (summary) 
     Determines whether the specified  has the same values as the present point.
     
- (since) 5.0
- (returns) bool This is some return comment
## int GetHashCode()
- (summary) 
     Computes a hash code for the present point.
     
- (since) (unknown)
- (returns) int This is some return comment
## void Interpolate(Point3d pA,Point3d pB,double t)
- (summary) 
     Interpolate between two points.
     
- (since) 5.0
- (returns) void This is some return comment
## string ToString()
- (summary) 
     Constructs the string representation for the current point.
     
- (since) (unknown)
- (returns) string This is some return comment
## string ToString(string format,IFormatProvider formatProvider)
- (summary) 
- (since) 7.0
- (returns) string This is some return comment
## void Transform(Transform xform)
- (summary) 
     Transforms the present point in place. The transformation matrix acts on the left of the point. i.e.,
     result = transformation*point
- (since) 5.0
- (returns) void This is some return comment
