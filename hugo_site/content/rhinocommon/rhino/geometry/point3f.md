---
title: "Point3f"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the three coordinates of a point in three-dimensional space,
   using -precision floating point numbers.

static -
: Subtracts a point from another point.
: Returns - A new vector that is the difference of point minus vector.

static !=
: Determines whether two points have different values.
: Returns - True if the two points differ in any coordinate; False otherwise.

static *
: Multiplies a point by a factor.
: Returns - A new vector that is the multiplication of point by value.
: since 6.0

static *
: Multiplies a point by a factor.
: Returns - A new vector that is the multiplication of point by value.
: since 6.0

static +
: Adds a point to another point.
: Returns - A new vector that is the sum of point1 plus point2.
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
: Determines whether two points have equal values.
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

Point3f(float x,float y,float z)
: Initializes a new two-dimensional vector from two components.
## Properties

static Point3f Origin
: Gets the value of a point at location 0,0,0.

static Point3f Unset
: Gets the value of a point at location RhinoMath.UnsetValue,RhinoMath.UnsetValue,RhinoMath.UnsetValue.

bool IsValid
: Each coordinate of the point must pass the  test.

float X
: Gets or sets the X (first) component of the vector.

float Y
: Gets or sets the Y (second) component of the vector.

float Z
: Gets or sets the Z (third) component of the vector.
## Methods

static [Vector3f](/rhinocommon/rhino/geometry/vector3f/) Subtract(Point3f point1,Point3f point2)
: Subtracts a point from another point.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
: Returns - A new vector that is the difference of point minus vector.

int CompareTo(Point3f other)
: Compares this  with another .
     Component evaluation priority is first X, then Y, then Z.
: Returns - 0: if this is identical to other-1: if this.X < other.X-1: if this.X == other.X and this.Y < other.Y-1: if this.X == other.X and this.Y == other.Y and this.Z < other.Z+1: otherwise.

double DistanceTo(Point3f other)
: Computes the distance between two points.
: Returns - The length of the line between this and the other point; or 0 if any of the points is not valid.

bool EpsilonEquals(Point3f other,float epsilon)
: Check that all values in other are withing epsilon of the values in this
: since 5.4

bool Equals(object obj)
: Determines whether the specified System.Object is a Point3f and has the same values as the present point.
: Returns - True if obj is Point3f and has the same coordinates as this; otherwise false.
: since (unknown)

bool Equals(Point3f point)
: Determines whether the specified Point3f has the same values as the present point.
: Returns - True if point has the same coordinates as this; otherwise false.

int GetHashCode()
: Computes a hash code for the present point.
: Returns - A non-unique integer that represents this point.
: since (unknown)

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
