---
title: "Point2d"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the two coordinates of a point in two-dimensional space,
   using -precision floating point numbers.

static -
: Subtracts point2 from point1.
: Returns - A new vector that is point1 coordinatewise subtracted by point2.

static -
: Subtracts a vector from a point.
: Returns - A new point that is coordinatewise subtracted by vector.

static !=
: Determines whether two  have different values.
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
: Adds a point with a point.
: Returns - A new point that is coordinatewise summed with the other point.
: since (unknown)

static +
: Adds a vector with a point.
: Returns - A new point that is coordinatewise summed with the vector.
: since (unknown)

static +
: Adds a point with a vector.
: Returns - A new point that is coordinatewise summed with the vector.
: since (unknown)

static <
: Determines whether the first specified point comes before (has inferior sorting value than) the second point.
     Coordinates evaluation priority is first X, then Y.
: Returns - True if a.X is smaller than b.X, or a.X == b.X and a.Y is smaller than b.Y; otherwise, false.

static <=
: Determines whether the first specified point comes before
     (has inferior sorting value than) the second point, or it is equal to it.
     Coordinates evaluation priority is first X, then Y.
: Returns - True if a.X is smaller than b.X, or a.X == b.X and a.Y <= b.Y; otherwise, false.

static ==
: Determines whether two  have equal values.
: Returns - True if the coordinates of the two points are exactly equal; otherwise false.

static >
: Determines whether the first specified  comes after
     (has superior sorting value than) the second point.
     Coordinates evaluation priority is first X, then Y.
: Returns - True if a.X is larger than b.X, or a.X == b.X and a.Y is larger than b.Y; otherwise, false.

static >=
: Determines whether the first specified  comes after
     (has superior sorting value than) the second point, or it is equal to it.
     Coordinates evaluation priority is first X, then Y.
: Returns - True if a.X is larger than b.X, or a.X == b.X and a.Y >= b.Y; otherwise, false.
## Constructors

Point2d(double x,double y)
: Initializes a new instance of  from coordinates.

Point2d(Point2d point)
: Initializes a new instance of  by copying another .

Point2d(Point3d point)
: Initializes a new instance of  by copying the first two coordiantes of a .

Point2d(Vector2d vector)
: Initializes a new instance of  by converting a vector.
## Properties

static Point2d Origin
: Gets a point at 0,0.

static Point2d Unset
: Gets a point at RhinoMath.UnsetValue,RhinoMath.UnsetValue.

bool IsValid
: If any coordinate of a point is UnsetValue, then the point is not valid.

double MaximumCoordinate
: Gets the largest valid coordinate, or RhinoMath.UnsetValue if no coordinate is valid.

double MinimumCoordinate
: Gets the smallest (both positive and negative) valid coordinate, or RhinoMath.UnsetValue if no coordinate is valid.

double X
: Gets or sets the X (first) coordinate of the point.

double Y
: Gets or sets the Y (second) coordinate of the point.
## Methods

static Point2d Add(Point2d point1,Point2d point2)
: Adds a point with a point.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
: Returns - A new point that is coordinatewise summed with the other point.

static Point2d Add(Point2d point,Vector2d vector)
: Adds a point with a vector.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
: Returns - A new point that is coordinatewise summed with the vector.

static Point2d Add(Vector2d vector,Point2d point)
: Adds a vector with a point.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
: Returns - A new point that is coordinatewise summed with the vector.

static Point2d Divide(Point2d point,double t)
: Divides a  by a number.
     (Provided for languages that do not support operator overloading. You can use the / operator otherwise)
: Returns - A new point that is coordinatewise divided by t.

static Point2d Multiply(double t,Point2d point)
: Multiplies a  by a number.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
: Returns - A new point that is coordinatewise multiplied by t.

static Point2d Multiply(Point2d point,double t)
: Multiplies a  by a number.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
: Returns - A new point that is coordinatewise multiplied by t.

static [Vector2d](/rhinocommon/rhino/geometry/vector2d/) Subtract(Point2d point1,Point2d point2)
: Subtracts the second point from the first point.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
: Returns - A new vector that is point1 coordinatewise subtracted by point2.

static Point2d Subtract(Point2d point,Vector2d vector)
: Subtracts a vector from a point.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
: Returns - A new point that is coordinatewise subtracted by vector.

int CompareTo(Point2d other)
: Compares this  with another .
     Coordinates evaluation priority is first X, then Y.
: Returns - 0: if this is identical to other-1: if this.X < other.X-1: if this.X == other.X and this.Y < other.Y+1: otherwise.

double DistanceTo(Point2d other)
: Computes the distance between two points.
: Returns - The length of the line between the two points, or 0 if either point is invalid.

bool EpsilonEquals(Point2d other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool Equals(object obj)
: Determines whether the specified System.Object is a Point2d and has the same values as the present point.
: Returns - True if obj is a Point2d and has the same coordinates as this; otherwise false.
: since (unknown)

bool Equals(Point2d point)
: Determines whether the specified Point2d has the same values as the present point.
: Returns - True if point has the same coordinates as this; otherwise false.

int GetHashCode()
: Computes a hash number that represents the current point.
: Returns - A hash code that is not unique for each point.
: since (unknown)

string ToString()
: Constructs the string representation for the current point.
: Returns - The point representation in the form X,Y.
: since (unknown)

string ToString(string format,IFormatProvider formatProvider)
: 
: since 7.0

void Transform(Transform xform)
: Transforms the present point in place. The transformation matrix acts on the left of the point. i.e.,
     result = transformation*point
: since 5.1
