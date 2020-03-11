---
title: "Vector2d"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the two components of a vector in two-dimensional space,
   using -precision floating point numbers.

static -
: Computes the opposite vector.
: Returns - A new vector where all components were multiplied by -1.
: since 6.0

static -
: Subtracts the second vector from the first one.
: Returns - A new vector that results from the componentwise difference of vector1 - vector2.
: since 6.0

static !=
: Determines whether two vectors have different values.
: Returns - True if any component of the two vectors is pairwise different; otherwise false.

static *
: Multiplies a vector by a number, having the effect of scaling it.
: Returns - A new vector that is the original vector coordinatewise multiplied by t.
: since 6.0

static *
: Multiplies a vector by a number, having the effect of scaling it.
: Returns - A new vector that is the original vector coordinatewise multiplied by t.
: since 6.0

static *
: Multiplies two vectors together, returning the dot product (or inner product).
: Returns - A value that results from the evaluation of v1.X*v2.X + v1.Y*v2.Y.
     This value equals v1.Length * v2.Length * cos(alpha), where alpha is the angle between vectors.
: since 6.0

static /
: Divides a  by a number, having the effect of shrinking it.
: Returns - A new vector that is componentwise divided by t.
: since 6.0

static +
: Sums up two vectors.
: Returns - A new vector that results from the componentwise addition of the two vectors.
: since (unknown)

static <
: Determines whether the first specified vector comes before
     (has inferior sorting value than) the second vector.
     Components have decreasing evaluation priority: first X, then Y.
: Returns - True if a.X is smaller than b.X, or a.X == b.X and a.Y is smaller than b.Y; otherwise, false.

static <=
: Determines whether the first specified vector comes before
     (has inferior sorting value than) the second vector, or it is equal to it.
     Components have decreasing evaluation priority: first X, then Y.
: Returns - True if a.X is smaller than b.X, or a.X == b.X and a.Y <= b.Y; otherwise, false.

static ==
: Determines whether two vectors have equal values.
: Returns - True if components of the two vectors are pairwise equal; otherwise false.

static >
: Determines whether the first specified vector comes after
     (has superior sorting value than) the second vector.
     Components have decreasing evaluation priority: first X, then Y.
: Returns - True if a.X is larger than b.X, or a.X == b.X and a.Y is larger than b.Y; otherwise, false.

static >=
: Determines whether the first specified vector comes after
     (has superior sorting value than) the second vector, or it is equal to it.
     Components have decreasing evaluation priority: first X, then Y.
: Returns - True if a.X is larger than b.X, or a.X == b.X and a.Y >= b.Y; otherwise, false.
## Constructors

Vector2d(double x,double y)
: Initializes a new instance of the vector based on two, X and Y, components.
## Properties

static Vector2d Unset
: Gets the value of the vector with components set as RhinoMath.UnsetValue,RhinoMath.UnsetValue.

static Vector2d Zero
: Gets the value of the vector with components 0,0.

bool IsValid
: Gets a value indicating whether this vector is valid. 
     A valid vector must be formed of valid component values for x, y and z.
: since 5.7

double Length
: Computes the length (or magnitude, or size) of this vector.
     This is an application of Pythagoras' theorem.

double SquareLength
: Returns the square of the length of the vector.
: since 6.0

double X
: Gets or sets the X (first) component of this vector.

double Y
: Gets or sets the Y (second) component of this vector.
## Methods

static Vector2d Add(Vector2d vector1,Vector2d vector2)
: Sums up two vectors.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
: Returns - A new vector that results from the componentwise addition of the two vectors.
: since 6.0

static Vector2d Divide(Vector2d vector,double t)
: Divides a  by a number, having the effect of shrinking it.
     (Provided for languages that do not support operator overloading. You can use the / operator otherwise)
: Returns - A new vector that is componentwise divided by t.
: since 6.0

static Vector2d Multiply(double t,Vector2d vector)
: Multiplies a vector by a number, having the effect of scaling it.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
: Returns - A new vector that is the original vector coordinatewise multiplied by t.
: since 6.0

static Vector2d Multiply(Vector2d vector,double t)
: Multiplies a vector by a number, having the effect of scaling it.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
: Returns - A new vector that is the original vector coordinatewise multiplied by t.
: since 6.0

static double Multiply(Vector2d vector1,Vector2d vector2)
: Multiplies two vectors together, returning the dot product (or inner product).
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
: Returns - A value that results from the evaluation of v1.X*v2.X + v1.Y*v2.Y.
     This value equals v1.Length * v2.Length * cos(alpha), where alpha is the angle between vectors.
: since 6.0

static Vector2d Negate(Vector2d vector)
: Computes the reversed vector.
     (Provided for languages that do not support operator overloading. You can use the - unary operator otherwise)
: Returns - A new vector where all components were multiplied by -1.
: since 6.0

static Vector2d Subtract(Vector2d vector1,Vector2d vector2)
: Subtracts the second vector from the first one.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
: Returns - A new vector that results from the componentwise difference of vector1 - vector2.
: since 6.0

int CompareTo(Vector2d other)
: Compares this  with another .
     Components evaluation priority is first X, then Y.
: Returns - 0: if this is identical to other-1: if this.X < other.X-1: if this.X == other.X and this.Y < other.Y+1: otherwise.

bool EpsilonEquals(Vector2d other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool Equals(object obj)
: Determines whether the specified System.Object is a Vector2d and has the same value as the present vector.
: Returns - True if obj is Vector2d and has the same components as this; otherwise false.
: since (unknown)

bool Equals(Vector2d vector)
: Determines whether the specified vector has the same value as the present vector.
: Returns - True if vector has the same components as this; otherwise false.

int GetHashCode()
: Provides a hashing value for the present vector.
: Returns - A non-unique number based on vector components.
: since (unknown)

bool IsTiny()
: Uses RhinoMath.ZeroTolerance for IsTiny calculation.
: Returns - True if vector is very small, otherwise false.
: since 6.0

bool IsTiny(double tolerance)
: Determines whether a vector is very short.
: Returns - (Math.Abs(X) <= tiny_tol) AND (Math.Abs(Y) <= tiny_tol) AND (Math.Abs(Z) <= tiny_tol).
: since 6.0

bool Rotate(double angleRadians)
: Rotates this vector.
: Returns - True on success, False on failure.
: since 6.0

string ToString()
: Constructs a string representation of the current vector.
: Returns - A string in the form X,Y.
: since (unknown)

string ToString(string format,IFormatProvider formatProvider)
: 
: since 7.0

bool Unitize()
: Unitizes the vector in place. A unit vector has length 1 unit. 
     An invalid or zero length vector cannot be unitized.
: Returns - True on success or False on failure.
: since 5.7
