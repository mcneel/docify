---
title: "Vector3d"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the three components of a vector in three-dimensional space,
   using -precision floating point numbers.

static -
: Computes the opposite vector.
: Returns - A new vector where all components were multiplied by -1.

static -
: Subtracts the second vector from the first one.
: Returns - A new vector that results from the componentwise difference of vector1 - vector2.

static !=
: Determines whether two vectors have different values.
: Returns - True if any coordinate pair is different; False otherwise.

static *
: Multiplies two vectors together, returning the dot product (or inner product).
     This differs from the cross product.
: Returns - A value that results from the evaluation of v1.X*v2.X + v1.Y*v2.Y + v1.Z*v2.Z.
     This value equals v1.Length * v2.Length * cos(alpha), where alpha is the angle between vectors.

static *
: Multiplies a vector by a number, having the effect of scaling it.
: Returns - A new vector that is the original vector coordinatewise multiplied by t.

static *
: Multiplies a vector by a number, having the effect of scaling it.
: Returns - A new vector that is the original vector coordinatewise multiplied by t.

static /
: Divides a  by a number, having the effect of shrinking it.
: Returns - A new vector that is componentwise divided by t.

static +
: Sums up two vectors.
: Returns - A new vector that results from the componentwise addition of the two vectors.
: since (unknown)

static <
: Determines whether the first specified vector comes before (has inferior sorting value than) the second vector.
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
: Determines whether two vectors have the same value.
: Returns - True if all coordinates are pairwise equal; False otherwise.

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

Vector3d(double x,double y,double z)
: Initializes a new instance of a vector, using its three components.

Vector3d(Point3d point)
: Initializes a new instance of a vector, copying the three components from the three coordinates of a point.

Vector3d(Vector3d vector)
: Initializes a new instance of a vector, copying the three components from a vector.

Vector3d(Vector3f vector)
: Initializes a new instance of a vector, copying the three components from a single-precision vector.
## Properties

static Vector3d Unset
: Gets the value of the vector with each component set to RhinoMath.UnsetValue.

static Vector3d XAxis
: Gets the value of the vector with components 1,0,0.

static Vector3d YAxis
: Gets the value of the vector with components 0,1,0.

static Vector3d ZAxis
: Gets the value of the vector with components 0,0,1.

static Vector3d Zero
: Gets the value of the vector with components 0,0,0.

bool IsUnitVector
: Gets a value indicating whether or not this is a unit vector. 
     A unit vector has length 1.

bool IsValid
: Gets a value indicating whether this vector is valid. 
     A valid vector must be formed of valid component values for x, y and z.

bool IsZero
: Gets a value indicating whether the X, Y, and Z values are all equal to 0.0.

double Length
: Computes the length (or magnitude, or size) of this vector.
     This is an application of Pythagoras' theorem.
     If this vector is invalid, its length is considered 0.

double MaximumCoordinate
: Gets the largest (both positive and negative) component value in this vector.

double MinimumCoordinate
: Gets the smallest (both positive and negative) component value in this vector.

double SquareLength
: Computes the squared length (or magnitude, or size) of this vector.
     This is an application of Pythagoras' theorem.
     While the Length property checks for input validity,
     this property does not. You should check validity in advance,
     if this vector can be invalid.

double X
: Gets or sets the X (first) component of the vector.

double Y
: Gets or sets the Y (second) component of the vector.

double Z
: Gets or sets the Z (third) component of the vector.
## Methods

static Vector3d Add(Vector3d vector1,Vector3d vector2)
: Sums up two vectors.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
: Returns - A new vector that results from the componentwise addition of the two vectors.

static bool AreOrthogonal(Vector3d x,Vector3d y,Vector3d z)
: Test whether three vectors describe an orthogonal axis system.
     All vectors must be mutually perpendicular this to be the case.
: Returns - True if all vectors are non-zero and mutually perpendicular.
: since 6.7

static bool AreOrthonormal(Vector3d x,Vector3d y,Vector3d z)
: Test whether three vectors describe an orthogonal, unit axis system.
     All vectors must be mutually perpendicular and have unit length for this to be the case.
: Returns - True if all vectors are non-zero and mutually perpendicular.
: since 6.7

static bool AreRighthanded(Vector3d x,Vector3d y,Vector3d z)
: Test whether three vectors describe a right-handed, orthogonal, unit axis system.
     The vectors must be orthonormal and follow the right-hand ordering; index-finger=x,
     middle-finger=y, thumb=z.
: Returns - True if all vectors are non-zero and mutually perpendicular.
: since 6.7

static Vector3d CrossProduct(Vector3d a,Vector3d b)
: Computes the cross product (or vector product, or exterior product) of two vectors.
     This operation is not commutative.
: Returns - A new vector that is perpendicular to both a and b,
     has Length == a.Length * b.Length * sin(theta) where theta is the angle between a and b.The resulting vector is oriented according to the right hand rule.

static Vector3d Divide(Vector3d vector,double t)
: Divides a  by a number, having the effect of shrinking it.
     (Provided for languages that do not support operator overloading. You can use the / operator otherwise)
: Returns - A new vector that is componentwise divided by t.

static Vector3d Multiply(double t,Vector3d vector)
: Multiplies a vector by a number, having the effect of scaling it.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
: Returns - A new vector that is the original vector coordinatewise multiplied by t.

static Vector3d Multiply(Vector3d vector,double t)
: Multiplies a vector by a number, having the effect of scaling it.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
: Returns - A new vector that is the original vector coordinatewise multiplied by t.

static double Multiply(Vector3d vector1,Vector3d vector2)
: Multiplies two vectors together, returning the dot product (or inner product).
     This differs from the cross product.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
: Returns - A value that results from the evaluation of v1.X*v2.X + v1.Y*v2.Y + v1.Z*v2.Z.
     This value equals v1.Length * v2.Length * cos(alpha), where alpha is the angle between vectors.

static Vector3d Negate(Vector3d vector)
: Computes the reversed vector.
     (Provided for languages that do not support operator overloading. You can use the - unary operator otherwise)
: Returns - A new vector where all components were multiplied by -1.

static Vector3d Subtract(Vector3d vector1,Vector3d vector2)
: Subtracts the second vector from the first one.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
: Returns - A new vector that results from the componentwise difference of vector1 - vector2.

static double VectorAngle(Vector3d a,Vector3d b)
: Compute the angle between two vectors.
     This operation is commutative.
: Returns - If the input is valid, the angle (in radians) between a and b; RhinoMath.UnsetValue otherwise.

static double VectorAngle(Vector3d a,Vector3d b,Plane plane)
: Computes the angle on a plane between two vectors.
: Returns - On success, the angle (in radians) between a and b as projected onto the plane; RhinoMath.UnsetValue on failure.

static double VectorAngle(Vector3d v1,Vector3d v2,Vector3d vNormal)
: Computes the angle of v1, v2 with a normal vector.
: Returns - On success, the angle (in radians) between a and b with respect of normal vector; RhinoMath.UnsetValue on failure.
: since 6.0

int CompareTo(Vector3d other)
: Compares this  with another .
     Component evaluation priority is first X, then Y, then Z.
: Returns - 0: if this is identical to other-1: if this.X < other.X-1: if this.X == other.X and this.Y < other.Y-1: if this.X == other.X and this.Y == other.Y and this.Z < other.Z+1: otherwise.

bool EpsilonEquals(Vector3d other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool Equals(object obj)
: Determines whether the specified System.Object is a Vector3d and has the same values as the present vector.
: Returns - True if obj is a Vector3d and has the same coordinates as this; otherwise false.
: since (unknown)

bool Equals(Vector3d vector)
: Determines whether the specified vector has the same value as the present vector.
: Returns - True if vector has the same coordinates as this; otherwise false.

int GetHashCode()
: Computes the hash code for the current vector.
: Returns - A non-unique number that represents the components of this vector.
: since (unknown)

int IsParallelTo(Vector3d other)
: Determines whether this vector is parallel to another vector, within one degree (within Pi / 180).
: Returns - Parallel indicator:
     +1 = both vectors are parallel 0 = vectors are not parallel, or at least one of the vectors is zero-1 = vectors are anti-parallel.

int IsParallelTo(Vector3d other,double angleTolerance)
: Determines whether this vector is parallel to another vector, within a provided tolerance.
: Returns - Parallel indicator:
     +1 = both vectors are parallel.0 = vectors are not parallel or at least one of the vectors is zero.-1 = vectors are anti-parallel.

bool IsPerpendicularTo(Vector3d other)
: Test to see whether this vector is perpendicular to within one degree of another one.
: Returns - True if both vectors are perpendicular, False if otherwise.

bool IsPerpendicularTo(Vector3d other,double angleTolerance)
: Determines whether this vector is perpendicular to another vector, within a provided angle tolerance.
: Returns - True if vectors form Pi-radians (90-degree) angles with each other; otherwise false.

bool IsTiny()
: Uses RhinoMath.ZeroTolerance for IsTiny calculation.
: Returns - True if vector is very small, otherwise false.

bool IsTiny(double tolerance)
: Determines whether a vector is very short.
: Returns - (Math.Abs(X) <= tiny_tol) AND (Math.Abs(Y) <= tiny_tol) AND (Math.Abs(Z) <= tiny_tol).

bool PerpendicularTo(Vector3d other)
: Sets this vector to be perpendicular to another vector. 
     Result is not unitized.
: Returns - True on success, False if input vector is zero or invalid.

bool Reverse()
: Reverses this vector in place (reverses the direction).
     If this vector is Invalid, no changes will occur and False will be returned.
: Returns - True on success or False if the vector is invalid.

bool Rotate(double angleRadians,Vector3d rotationAxis)
: Rotates this vector around a given axis.
: Returns - True on success, False on failure.

string ToString()
: Returns the string representation of the current vector, in the form X,Y,Z.
: Returns - A string with the current location of the point.
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
