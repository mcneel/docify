---
title: "Vector3f"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the three components of a vector in three-dimensional space,
   using -precision floating point numbers.

static -
: Subtracts the second vector from the first one.
: Returns - A new vector that results from the componentwise difference of vector1 - vector2.
: since 6.0

static -
: Computes the opposite vector.
: Returns - A new vector where all components were multiplied by -1.
: since 6.0

static !=
: Determines whether two vectors have different values.
: Returns - True if the two vectors differ in any component; False otherwise.

static *
: Multiplies a vector by a number, having the effect of scaling it.
: Returns - A new vector that is the original vector coordinatewise multiplied by t.

static *
: Multiplies two  together, returning the dot (internal) product of the two.
     This is not the cross product.
: Returns - A value that results from the coordinatewise multiplication of point1 and point2.

static *
: Multiplies a vector by a number, having the effect of scaling it.
: Returns - A new vector that is the original vector coordinatewise multiplied by t.

static /
: Divides a  by a number, having the effect of shrinking it, t times.
: Returns - A new vector that is componentwise divided by t.
: since 6.0

static /
: Divides a  by a number, having the effect of shrinking it, t times.
: Returns - A new vector that is componentwise divided by t.
: since 6.0

static +
: Sums up a point and a vector, and returns a new point.
: Returns - A new point that results from the addition of point and vector.
: since (unknown)

static +
: Sums up two vectors.
: Returns - A new vector that results from the componentwise addition of the two vectors.
: since (unknown)

static <
: Determines whether the first specified vector comes before
     (has inferior sorting value than) the second vector.
     Components evaluation priority is first X, then Y, then Z.
: Returns - True if a.X is smaller than b.X,
     or a.X == b.X and a.Y is smaller than b.Y,
     or a.X == b.X and a.Y == b.Y and a.Z is smaller than b.Z;
     otherwise, false.

static <=
: Determines whether the first specified vector comes before
     (has inferior sorting value than) the second vector, or it is equal to it.
     Components evaluation priority is first X, then Y, then Z.
: Returns - True if a.X is smaller than b.X,
     or a.X == b.X and a.Y is smaller than b.Y,
     or a.X == b.X and a.Y == b.Y and a.Z <= b.Z;
     otherwise, false.

static ==
: Determines whether two vectors have equal values.
: Returns - True if the components of the two vectors are exactly equal; otherwise false.

static >
: Determines whether the first specified vector comes after (has superior sorting value than)
     the second vector.
     Components evaluation priority is first X, then Y, then Z.
: Returns - True if a.X is larger than b.X,
     or a.X == b.X and a.Y is larger than b.Y,
     or a.X == b.X and a.Y == b.Y and a.Z is larger than b.Z;
     otherwise, false.

static >=
: Determines whether the first specified vector comes after (has superior sorting value than)
     the second vector, or it is equal to it.
     Components evaluation priority is first X, then Y, then Z.
: Returns - True if a.X is larger than b.X,
     or a.X == b.X and a.Y is larger than b.Y,
     or a.X == b.X and a.Y == b.Y and a.Z >= b.Z;
     otherwise, false.
## Constructors

Vector3f(float x,float y,float z)
: Constructs a new vector from 3 single precision numbers.
## Properties

static Vector3f Unset
: Gets the value of the vector with each component set to RhinoMath.UnsetValue.

static Vector3f XAxis
: Gets the value of the vector with components 1,0,0.

static Vector3f YAxis
: Gets the value of the vector with components 0,1,0.

static Vector3f ZAxis
: Gets the value of the vector with components 0,0,1.

static Vector3f Zero
: Gets the value of the vector with components 0,0,0.

bool IsUnitVector
: Gets a value indicating whether or not this is a unit vector. 
     A unit vector has length 1.
: since 6.0

bool IsValid
: Returns an indication regarding the validity of this vector.
: since 6.0

bool IsZero
: Gets a value indicating whether the X, Y, and Z values are all equal to 0.0.
: since 6.0

float Length
: Computes the length (or magnitude, or size) of this vector.
     This is an application of Pythagoras' theorem.
     If this vector is invalid, its length is considered 0.

float SquareLength
: Returns the square length of the vector.
     This property does not check for the validity of the inputs.
: since 6.0

float X
: Gets or sets the X (first) component of this vector.

float Y
: Gets or sets the Y (second) component of this vector.

float Z
: Gets or sets the Z (third) component of this vector.
## Methods

static [Point3f](/rhinocommon/rhino/geometry/point3f/) Add(Point3f point,Vector3f vector)
: Sums up a point and a vector, and returns a new point.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
: Returns - A new point that results from the addition of point and vector.

static Vector3f Add(Vector3f vector1,Vector3f vector2)
: Sums up two vectors.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
: Returns - A new vector that results from the componentwise addition of the two vectors.
: since 6.0

static Vector3f CrossProduct(Vector3f a,Vector3f b)
: Computes the cross product (or vector product, or exterior product) of two vectors.
     This operation is not commutative.
: Returns - A new vector that is perpendicular to both a and b,
     has Length == a.Length * b.Length andwith a result that is oriented following the right hand rule.

static Vector3f Divide(Vector3f vector,double t)
: Divides a  by a number, having the effect of shrinking it, t times.
     (Provided for languages that do not support operator overloading. You can use the / operator otherwise)
: Returns - A new vector that is componentwise divided by t.
: since 6.0

static Vector3f Divide(Vector3f vector,float t)
: Divides a  by a number, having the effect of shrinking it, t times.
     (Provided for languages that do not support operator overloading. You can use the / operator otherwise)
: Returns - A new vector that is componentwise divided by t.
: since 6.0

static Vector3f Multiply(float t,Vector3f vector)
: Multiplies a vector by a number, having the effect of scaling it.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
: Returns - A new vector that is the original vector coordinatewise multiplied by t.

static Vector3f Multiply(Vector3f vector,float t)
: Multiplies a vector by a number, having the effect of scaling it.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
: Returns - A new vector that is the original vector coordinatewise multiplied by t.

static double Multiply(Vector3f point1,Vector3f point2)
: Multiplies two  together, returning the dot (internal) product of the two.
     This is not the cross product.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
: Returns - A value that results from the coordinatewise multiplication of point1 and point2.
: since 6.0

static Vector3f Negate(Vector3f vector)
: Computes the reversed vector.
     (Provided for languages that do not support operator overloading. You can use the - unary operator otherwise)
: Returns - A new vector where all components were multiplied by -1.
: since 6.0

static Vector3f Subtract(Vector3f vector1,Vector3f vector2)
: Subtracts the second vector from the first one.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
: Returns - A new vector that results from the componentwise difference of vector1 - vector2.
: since 6.0

int CompareTo(Vector3f other)
: Compares this  with another .
     Component evaluation priority is first X, then Y, then Z.
: Returns - 0: if this is identical to other-1: if this.X < other.X-1: if this.X == other.X and this.Y < other.Y-1: if this.X == other.X and this.Y == other.Y and this.Z < other.Z+1: otherwise.

bool EpsilonEquals(Vector3f other,float epsilon)
: Check that all values in other are withing epsilon of the values in this
: since 5.4

bool Equals(object obj)
: Determines whether the specified System.Object is a Vector3f and has the same values as the present vector.
: Returns - True if obj is Vector3f and has the same components as this; otherwise false.
: since (unknown)

bool Equals(Vector3f vector)
: Determines whether the specified vector has the same values as the present vector.
: Returns - True if vector has the same components as this; otherwise false.

int GetHashCode()
: Computes a hash number that represents the current vector.
: Returns - A hash code that is not unique for each vector.
: since (unknown)

bool PerpendicularTo(Vector3f other)
: Sets this vector to be perpendicular to another vector. 
     Result is not unitized.
: Returns - True on success, False if input vector is zero or invalid.

bool Reverse()
: Reverses this vector in place (reverses the direction).
     If this vector contains RhinoMath.UnsetValue, the 
     reverse will also be invalid and False will be returned.
: Returns - True on success or False if the vector is invalid.

bool Rotate(double angleRadians,Vector3f rotationAxis)
: Rotates this vector around a given axis.
: Returns - True on success, False on failure.

string ToString()
: Constructs the string representation of the current vector.
: Returns - The vector representation in the form X,Y,Z.
: since (unknown)

string ToString(string format,IFormatProvider formatProvider)
: 
: since 7.0

void Transform(Transform transformation)
: Transforms the vector in place.
     The transformation matrix acts on the left of the vector; i.e.,result = transformation*vector

bool Unitize()
: Unitizes the vector in place. A unit vector has length 1 unit. 
     An invalid or zero length vector cannot be unitized.
: Returns - True on success or False on failure.
