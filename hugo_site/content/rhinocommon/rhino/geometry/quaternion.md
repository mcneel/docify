---
title: "Quaternion"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the four coefficient values in a quaternion.
   The first value a is the real part,
   while the rest multipies i, j and k, that are imaginary.quaternion = a + bi + cj + dk

static -
: Subtracts a quaternion from another one.
     This computes the difference of each quaternion coefficient with its
     correspondant and returns a new result quaternion.
: Returns - A new quaternion.

static !=
: Determines whether two quaternions have different values.
: Returns - True if the quaternions differ in any coefficient; otherwise false.

static *
: Multiplies a quaternion with another one.
     Quaternion multiplication (Hamilton product) is not commutative.
: Returns - A new quaternion.

static *
: Multiplies (scales) all quaternion coefficients by a factor and returns a new quaternion with the result.
: Returns - A new quaternion.

static *
: Multiplies (scales) all quaternion coefficients by a factor and returns a new quaternion with the result.
: Returns - A new quaternion.

static *
: Multiplies (scales) all quaternion coefficients by a factor and returns a new quaternion with the result.
: Returns - A new quaternion.

static /
: Divides all quaternion coefficients by a factor and returns a new quaternion with the result.
: Returns - A new quaternion.

static +
: Adds two quaternions.
     This sums each quaternion coefficient with its correspondant and returns
     a new result quaternion.
: Returns - A new quaternion.
: since (unknown)

static ==
: Determines whether two quaternions have the same value.
: Returns - True if the quaternions have exactly equal coefficients; otherwise false.
## Constructors

Quaternion(double a,double b,double c,double d)
: Initializes a new quaternion with the provided coefficients.
## Properties

static Quaternion I
: Returns the (0,1,0,0) quaternion.

static Quaternion Identity
: Returns the (1,0,0,0) quaternion.

static Quaternion J
: Returns the (0,0,1,0) quaternion.

static Quaternion K
: Returns the (0,0,0,1) quaternion.

static Quaternion Zero
: Returns the dafault quaternion, where all coefficients are 0.

double A
: Gets or sets the real part of the quaternion.

double B
: Gets or sets the first imaginary coefficient of the quaternion.

double C
: Gets or sets the second imaginary coefficient of the quaternion.

Quaternion Conjugate
: Gets a new quaternion that is the conjugate of this quaternion.
     This is (a,-b,-c,-d)

double D
: Gets or sets the third imaginary coefficient of the quaternion.

Quaternion Inverse
: Computes a new inverted quaternion,
     (a/L2, -b/L2, -c/L2, -d/L2),where L2 = length squared = (a*a + b*b + c*c + d*d).
     This is the multiplicative inverse, i.e.,
     (a,b,c,d)*(a/L2, -b/L2, -c/L2, -d/L2) = (1,0,0,0).
     If this is the zero quaternion, then the zero quaternion is returned.

bool IsScalar
: True if b, c, and d are all zero.

bool IsValid
: Determines if the four coefficients are valid numbers within RhinoCommon.
     See .

bool IsVector
: True if a = 0 and at least one of b, c, or d is not zero.

bool IsZero
: True if a, b, c, and d are all zero.

double Length
: Returns the length or norm of the quaternion.

double LengthSquared
: Gets the result of (a^2 + b^2 + c^2 + d^2).

double Scalar
: The real (scalar) part of the quaternion
     This is .

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Vector
: The imaginary part of the quaternion
     (B,C,D)
## Methods

static Quaternion CrossProduct(Quaternion p,Quaternion q)
: Computes the vector cross product of p and q = (0,x,y,z),
     where (x,y,z) = CrossProduct(p.Vector,q.Vector).This is not the same as the quaternion product p*q.
: Returns - A new quaternion.

static double Distance(Quaternion p,Quaternion q)
: Returns the distance or norm of the difference between two quaternions.
: Returns - (p - q).Length()

static Quaternion Product(Quaternion p,Quaternion q)
: The quaternion product of p and q.  This is the same value as p*q.
: Returns - A transform value.

static Quaternion Rotation(double angle,Vector3d axisOfRotation)
: Returns the unit quaternion
     cos(angle/2), sin(angle/2)*x, sin(angle/2)*y, sin(angle/2)*z
     where (x,y,z) is the unit vector parallel to axis.  This is the
     unit quaternion that represents the rotation of angle about axis.
: Returns - A new quaternion.

static Quaternion Rotation(Plane plane0,Plane plane1)
: Returns the unit quaternion that represents the the rotation that maps
     plane0.xaxis to plane1.xaxis, plane0.yaxis to plane1.yaxis, and 
     plane0.zaxis to plane1.zaxis.
: Returns - A quaternion value.

double DistanceTo(Quaternion q)
: Computes the distance or norm of the difference between this and another quaternion.
: Returns - (this - q).Length.

bool EpsilonEquals(Quaternion other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool Equals(object obj)
: Determines whether an object is a quaternion and has the same value of this quaternion.
: Returns - True if obj is a quaternion and has exactly equal coefficients; otherwise false.
: since (unknown)

bool Equals(Quaternion other)
: Determines whether this quaternion has the same value of another quaternion.
: Returns - True if the quaternions have exactly equal coefficients; otherwise false.

int GetHashCode()
: Gets a non-unique but repeatable hashing code for this quaternion.
: Returns - A signed number.
: since (unknown)

bool GetRotation(double angle,Vector3d axis)
: Returns the rotation defined by the quaternion.
: Returns - True if the operation succeeded; otherwise, false.

bool GetRotation(Plane plane)
: Returns the frame created by applying the quaternion's rotation
     to the canonical world frame (1,0,0),(0,1,0),(0,0,1).
: Returns - True if the operation succeeded; otherwise, false.

bool Invert()
: Modifies this quaternion to become
     (a/L2, -b/L2, -c/L2, -d/L2),where L2 = length squared = (a*a + b*b + c*c + d*d).This is the multiplicative inverse, i.e.,
     (a,b,c,d)*(a/L2, -b/L2, -c/L2, -d/L2) = (1,0,0,0).
: Returns - True if successful. False if the quaternion is zero and cannot be inverted.

[Transform](/rhinocommon/rhino/geometry/transform/) MatrixForm()
: Returns 4x4 real valued matrix form of the quaternion
     a  b  c  d
     -b  a -d  c
     -c  d  a -b
     -d -c  b  a
     which has the same arithmetic properties as the quaternion.
: Returns - A transform value.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Rotate(Vector3d v)
: Rotates a 3d vector. This operation is also called conjugation,
     because the result is the same as
     (q.Conjugate()*(0,x,y,x)*q/q.LengthSquared).Vector.
: Returns - R*v, where R is the rotation defined by the unit quaternion.
     This is mathematically the same as the values
     (Inverse(q)*(0,x,y,z)*q).Vector
     and
     (q.Conjugate()*(0,x,y,x)*q/q.LengthSquared).Vector.

void Set(double a,double b,double c,double d)
: Sets all coefficients of the quaternion.

void SetRotation(double angle,Vector3d axisOfRotation)
: Sets the quaternion to cos(angle/2), sin(angle/2)*x, sin(angle/2)*y, sin(angle/2)*z
     where (x,y,z) is the unit vector parallel to axis.  This is the unit quaternion
     that represents the rotation of angle about axis.

void SetRotation(Plane plane0,Plane plane1)
: Sets the quaternion to the unit quaternion which rotates
     plane0.xaxis to plane1.xaxis, plane0.yaxis to plane1.yaxis,
     and plane0.zaxis to plane1.zaxis.

bool Unitize()
: Scales the quaternion's coordinates so that a*a + b*b + c*c + d*d = 1.
: Returns - True if successful.  False if the quaternion is zero and cannot be unitized.
