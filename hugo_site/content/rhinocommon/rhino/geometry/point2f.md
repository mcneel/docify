---
title: "Point2f"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the two coordinates of a point in two-dimensional space,
   using -precision floating point numbers.

static -
: Subtracts two s.
: Returns - A subtracted Vector2f.
: since 6.0

static !=
: Determines whether two  have different values.
: Returns - True if the two points differ in any coordinate; False otherwise.

static *
: Multiplies a  by a scalar.
: Returns - A multiplied Point2f.
: since 6.0

static /
: Divides a  by a scalar.
: Returns - A divided Point2f.
: since 6.0

static +
: Sums two s.
: Returns - An added Vector2f.
: since (unknown)

static <
: Determines whether the first specified  comes before
     (has inferior sorting value than) the second point.
     Coordinates evaluation priority is first X, then Y.
: Returns - True if a.X is smaller than b.X, or a.X == b.X and a.Y is smaller than b.Y; otherwise, false.

static <=
: Determines whether the first specified  comes before
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

Point2f(double x,double y)
: Initializes a new two-dimensional point from two double-precision floating point numbers as coordinates.
     Coordinates will be internally converted to floating point numbers. This might cause precision loss.

Point2f(float x,float y)
: Initializes a new two-dimensional point from two components.
## Properties

static Point2f Unset
: Gets the standard unset point.

bool IsValid
: Gets a value indicating whether this point is considered valid.

float X
: Gets or sets the X (first) component of the vector.

float Y
: Gets or sets the Y (second) component of the vector.
## Methods

int CompareTo(Point2f other)
: Compares this  with another .
     Coordinates evaluation priority is first X, then Y.
: Returns - 0: if this is identical to other-1: if this.X < other.X-1: if this.X == other.X and this.Y < other.Y+1: otherwise.

bool EpsilonEquals(Point2f other,float epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool Equals(object obj)
: Determines whether the specified System.Object is a  and has the same values as the present point.
: Returns - True if obj is Point2f and has the same coordinates as this; otherwise false.
: since (unknown)

bool Equals(Point2f point)
: Determines whether the specified  has the same values as the present point.
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
