---
title: "Quaternion"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents the four coefficient values in a quaternion.
   The first value a is the real part,
   while the rest multipies i, j and k, that are imaginary.quaternion = a + bi + cj + dk
#### static -
- (summary) 
     Subtracts a quaternion from another one.
     This computes the difference of each quaternion coefficient with its
     correspondant and returns a new result quaternion.
- (since) 5.0
#### static !=
- (summary) 
     Determines whether two quaternions have different values.
     
- (since) 5.0
#### static *
- (summary) 
     Multiplies a quaternion with another one.
     Quaternion multiplication (Hamilton product) is not commutative.
- (since) 5.0
#### static *
- (summary) 
     Multiplies (scales) all quaternion coefficients by a factor and returns a new quaternion with the result.
     
- (since) 5.0
#### static *
- (summary) 
     Multiplies (scales) all quaternion coefficients by a factor and returns a new quaternion with the result.
     
- (since) 5.0
#### static *
- (summary) 
     Multiplies (scales) all quaternion coefficients by a factor and returns a new quaternion with the result.
     
- (since) 5.0
#### static /
- (summary) 
     Divides all quaternion coefficients by a factor and returns a new quaternion with the result.
     
- (since) 5.0
#### static +
- (summary) 
     Adds two quaternions.
     This sums each quaternion coefficient with its correspondant and returns
     a new result quaternion.
- (since) (unknown)
#### static ==
- (summary) 
     Determines whether two quaternions have the same value.
     
- (since) 5.0
## Constructors
#### Rhino.Geometry.Quaternion(double a,double b,double c,double d)
- (summary) 
     Initializes a new quaternion with the provided coefficients.
     
- (since) 5.0
## Properties
#### static Quaternion I
- (summary) 
     Returns the (0,1,0,0) quaternion.
     
- (since) 5.0
#### static Quaternion Identity
- (summary) 
     Returns the (1,0,0,0) quaternion.
     
- (since) 5.0
#### static Quaternion J
- (summary) 
     Returns the (0,0,1,0) quaternion.
     
- (since) 5.0
#### static Quaternion K
- (summary) 
     Returns the (0,0,0,1) quaternion.
     
- (since) 5.0
#### static Quaternion Zero
- (summary) 
     Returns the dafault quaternion, where all coefficients are 0.
     
- (since) 5.0
#### double A
- (summary) 
     Gets or sets the real part of the quaternion.
     
- (since) 5.0
#### double B
- (summary) 
     Gets or sets the first imaginary coefficient of the quaternion.
     
- (since) 5.0
#### double C
- (summary) 
     Gets or sets the second imaginary coefficient of the quaternion.
     
- (since) 5.0
#### Quaternion Conjugate
- (summary) 
     Gets a new quaternion that is the conjugate of this quaternion.
     This is (a,-b,-c,-d)
- (since) 5.0
#### double D
- (summary) 
     Gets or sets the third imaginary coefficient of the quaternion.
     
- (since) 5.0
#### Quaternion Inverse
- (summary) 
     Computes a new inverted quaternion,
     (a/L2, -b/L2, -c/L2, -d/L2),where L2 = length squared = (a*a + b*b + c*c + d*d).
     This is the multiplicative inverse, i.e.,
     (a,b,c,d)*(a/L2, -b/L2, -c/L2, -d/L2) = (1,0,0,0).
     If this is the zero quaternion, then the zero quaternion is returned.
     
- (since) 5.0
#### bool IsScalar
- (summary) 
     True if b, c, and d are all zero.
     
- (since) 5.0
#### bool IsValid
- (summary) 
     Determines if the four coefficients are valid numbers within RhinoCommon.
     See .
- (since) 5.0
#### bool IsVector
- (summary) 
     True if a = 0 and at least one of b, c, or d is not zero.
     
- (since) 5.0
#### bool IsZero
- (summary) 
     True if a, b, c, and d are all zero.
     
- (since) 5.0
#### double Length
- (summary) 
     Returns the length or norm of the quaternion.
     
- (since) 5.0
#### double LengthSquared
- (summary) 
     Gets the result of (a^2 + b^2 + c^2 + d^2).
     
- (since) 5.0
#### double Scalar
- (summary) 
     The real (scalar) part of the quaternion
     This is .
- (since) 5.0
#### Vector3d Vector
- (summary) 
     The imaginary part of the quaternion
     (B,C,D)
- (since) 5.0
## Methods
#### static Quaternion CrossProduct(Quaternion p,Quaternion q)
- (summary) 
     Computes the vector cross product of p and q = (0,x,y,z),
     where (x,y,z) = CrossProduct(p.Vector,q.Vector).This is not the same as the quaternion product p*q.
- (since) 5.0
- (returns) Quaternion This is some return comment
#### static double Distance(Quaternion p,Quaternion q)
- (summary) 
     Returns the distance or norm of the difference between two quaternions.
     
- (since) 5.0
- (returns) double This is some return comment
#### static Quaternion Product(Quaternion p,Quaternion q)
- (summary) 
     The quaternion product of p and q.  This is the same value as p*q.
     
- (since) 5.0
- (returns) Quaternion This is some return comment
#### static Quaternion Rotation(double angle,Vector3d axisOfRotation)
- (summary) 
     Returns the unit quaternion
     cos(angle/2), sin(angle/2)*x, sin(angle/2)*y, sin(angle/2)*z
     where (x,y,z) is the unit vector parallel to axis.  This is the
     unit quaternion that represents the rotation of angle about axis.
     
- (since) 5.0
- (returns) Quaternion This is some return comment
#### static Quaternion Rotation(Plane plane0,Plane plane1)
- (summary) 
     Returns the unit quaternion that represents the the rotation that maps
     plane0.xaxis to plane1.xaxis, plane0.yaxis to plane1.yaxis, and 
     plane0.zaxis to plane1.zaxis.
     
- (since) 5.0
- (returns) Quaternion This is some return comment
#### double DistanceTo(Quaternion q)
- (summary) 
     Computes the distance or norm of the difference between this and another quaternion.
     
- (since) 5.0
- (returns) double This is some return comment
#### bool EpsilonEquals(Quaternion other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
#### bool Equals(object obj)
- (summary) 
     Determines whether an object is a quaternion and has the same value of this quaternion.
     
- (since) (unknown)
- (returns) bool This is some return comment
#### bool Equals(Quaternion other)
- (summary) 
     Determines whether this quaternion has the same value of another quaternion.
     
- (since) 5.0
- (returns) bool This is some return comment
#### int GetHashCode()
- (summary) 
     Gets a non-unique but repeatable hashing code for this quaternion.
     
- (since) (unknown)
- (returns) int This is some return comment
#### bool GetRotation(double angle,Vector3d axis)
- (summary) 
     Returns the rotation defined by the quaternion.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool GetRotation(Plane plane)
- (summary) 
     Returns the frame created by applying the quaternion's rotation
     to the canonical world frame (1,0,0),(0,1,0),(0,0,1).
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Invert()
- (summary) 
     Modifies this quaternion to become
     (a/L2, -b/L2, -c/L2, -d/L2),where L2 = length squared = (a*a + b*b + c*c + d*d).This is the multiplicative inverse, i.e.,
     (a,b,c,d)*(a/L2, -b/L2, -c/L2, -d/L2) = (1,0,0,0).
- (since) 5.0
- (returns) bool This is some return comment
#### Transform MatrixForm()
- (summary) 
     Returns 4x4 real valued matrix form of the quaternion
     a  b  c  d
     -b  a -d  c
     -c  d  a -b
     -d -c  b  a
     which has the same arithmetic properties as the quaternion. 
     
- (since) 5.0
- (returns) Transform This is some return comment
#### Vector3d Rotate(Vector3d v)
- (summary) 
     Rotates a 3d vector. This operation is also called conjugation,
     because the result is the same as
     (q.Conjugate()*(0,x,y,x)*q/q.LengthSquared).Vector.
     
- (since) 5.0
- (returns) Vector3d This is some return comment
#### void Set(double a,double b,double c,double d)
- (summary) 
     Sets all coefficients of the quaternion.
     
- (since) 5.0
- (returns) void This is some return comment
#### void SetRotation(double angle,Vector3d axisOfRotation)
- (summary) 
     Sets the quaternion to cos(angle/2), sin(angle/2)*x, sin(angle/2)*y, sin(angle/2)*z
     where (x,y,z) is the unit vector parallel to axis.  This is the unit quaternion
     that represents the rotation of angle about axis.
     
- (since) 5.0
- (returns) void This is some return comment
#### void SetRotation(Plane plane0,Plane plane1)
- (summary) 
     Sets the quaternion to the unit quaternion which rotates
     plane0.xaxis to plane1.xaxis, plane0.yaxis to plane1.yaxis,
     and plane0.zaxis to plane1.zaxis.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool Unitize()
- (summary) 
     Scales the quaternion's coordinates so that a*a + b*b + c*c + d*d = 1.
     
- (since) 5.0
- (returns) bool This is some return comment
