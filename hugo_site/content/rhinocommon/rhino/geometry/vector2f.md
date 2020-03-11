---
title: "Vector2f"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the two components of a vector in two-dimensional space,
   using -precision floating point numbers.

static -
: Computes the difference between two vectors.
: Returns - The difference.
: since 6.0

static !=
: Determines whether two vectors have different values.
: Returns - True if the two vectors differ in any component; False otherwise.

static *
: Multiplies two  together, returning the dot (internal) product of the two.
: Returns - A value that results from the coordinatewise multiplication of point1 and point2.
: since 6.0

static +
: Computes the sum between two vectors.
: Returns - The difference.
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
: Returns - True if the components of the two vectors are exactly equal; otherwise false.

static >
: Determines whether the first specified vector comes after (has superior sorting value than) the second vector.
     Components have decreasing evaluation priority: first X, then Y.
: Returns - True if a.X is larger than b.X, or a.X == b.X and a.Y is larger than b.Y; otherwise, false.

static >=
: Determines whether the first specified vector comes after
     (has superior sorting value than) the second vector, or it is equal to it.
     Components have decreasing evaluation priority: first X, then Y.
: Returns - True if a.X is larger than b.X, or a.X == b.X and a.Y >= b.Y; otherwise, false.
## Constructors

Vector2f(float x,float y)
: Creates an instance.
: since 6.0
## Properties

bool IsValid
: Returns an indication regarding the validity of this vector.
: since 6.0

float SquareLength
: Returns the square of the length of this vector.
     This method does not check for the validity of its inputs.
: since 6.0

float X
: Gets or sets the X (first) component of this vector.

float Y
: Gets or sets the Y (second) component of this vector.
## Methods

static double Multiply(Vector2f point1,Vector2f point2)
: Multiplies two  together, returning the dot (internal) product of the two.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
: Returns - A value that results from the coordinatewise multiplication of point1 and point2.
: since 6.0

int CompareTo(Vector2f other)
: Compares this  with another .
     Components evaluation priority is first X, then Y.
: Returns - 0: if this is identical to other-1: if this.X < other.X-1: if this.X == other.X and this.Y < other.Y+1: otherwise.

bool EpsilonEquals(Vector2f other,float epsilon)
: Check that all values in other are withing epsilon of the values in this
: since 5.4

bool Equals(object obj)
: Determines whether the specified System.Object is a Vector2f and has the same values as the present vector.
: Returns - True if obj is Vector2f and has the same coordinates as this; otherwise false.
: since (unknown)

bool Equals(Vector2f vector)
: Determines whether the specified vector has the same values as the present vector.
: Returns - True if obj is Vector2f and has the same coordinates as this; otherwise false.

int GetHashCode()
: Computes a hash number that represents the current vector.
: Returns - A hash code that is not unique for each vector.
: since (unknown)

string ToString()
: Constructs the string representation of the current vector.
: Returns - The vector representation in the form X,Y,Z.
: since (unknown)

string ToString(string format,IFormatProvider formatProvider)
: 
: since 7.0
