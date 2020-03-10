---
title: "Vector3d"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents the three components of a vector in three-dimensional space,
   using -precision floating point numbers.
   
#### static -
- (summary) 
     Computes the opposite vector.
     
- (since) 5.0
#### static -
- (summary) 
     Subtracts the second vector from the first one.
     
- (since) 5.0
#### static !=
- (summary) 
     Determines whether two vectors have different values.
     
- (since) 5.0
#### static *
- (summary) 
     Multiplies two vectors together, returning the dot product (or inner product).
     This differs from the cross product.
     
- (since) 5.0
#### static *
- (summary) 
     Multiplies a vector by a number, having the effect of scaling it.
     
- (since) 5.0
#### static *
- (summary) 
     Multiplies a vector by a number, having the effect of scaling it.
     
- (since) 5.0
#### static /
- (summary) 
     Divides a  by a number, having the effect of shrinking it.
     
- (since) 5.0
#### static +
- (summary) 
     Sums up two vectors.
     
- (since) (unknown)
#### static <
- (summary) 
     Determines whether the first specified vector comes before (has inferior sorting value than) the second vector.
     Components evaluation priority is first X, then Y, then Z.
- (since) 5.0
#### static <=
- (summary) 
     Determines whether the first specified vector comes before
     (has inferior sorting value than) the second vector, or it is equal to it.
     Components evaluation priority is first X, then Y, then Z.
- (since) 5.0
#### static ==
- (summary) 
     Determines whether two vectors have the same value.
     
- (since) 5.0
#### static >
- (summary) 
     Determines whether the first specified vector comes after (has superior sorting value than)
     the second vector.
     Components evaluation priority is first X, then Y, then Z.
- (since) 5.0
#### static >=
- (summary) 
     Determines whether the first specified vector comes after (has superior sorting value than)
     the second vector, or it is equal to it.
     Components evaluation priority is first X, then Y, then Z.
- (since) 5.0
## Constructors
#### Rhino.Geometry.Vector3d(double x,double y,double z)
- (summary) 
     Initializes a new instance of a vector, using its three components.
     
- (since) 5.0
#### Rhino.Geometry.Vector3d(Point3d point)
- (summary) 
     Initializes a new instance of a vector, copying the three components from the three coordinates of a point.
     
- (since) 5.0
#### Rhino.Geometry.Vector3d(Vector3d vector)
- (summary) 
     Initializes a new instance of a vector, copying the three components from a vector.
     
- (since) 5.0
#### Rhino.Geometry.Vector3d(Vector3f vector)
- (summary) 
     Initializes a new instance of a vector, copying the three components from a single-precision vector.
     
- (since) 5.0
## Properties
#### static Vector3d Unset
- (summary) 
     Gets the value of the vector with each component set to RhinoMath.UnsetValue.
     
- (since) 5.0
#### static Vector3d XAxis
- (summary) 
     Gets the value of the vector with components 1,0,0.
     
- (since) 5.0
#### static Vector3d YAxis
- (summary) 
     Gets the value of the vector with components 0,1,0.
     
- (since) 5.0
#### static Vector3d ZAxis
- (summary) 
     Gets the value of the vector with components 0,0,1.
     
- (since) 5.0
#### static Vector3d Zero
- (summary) 
     Gets the value of the vector with components 0,0,0.
     
- (since) 5.0
#### bool IsUnitVector
- (summary) 
     Gets a value indicating whether or not this is a unit vector. 
     A unit vector has length 1.
     
- (since) 5.0
#### bool IsValid
- (summary) 
     Gets a value indicating whether this vector is valid. 
     A valid vector must be formed of valid component values for x, y and z.
     
- (since) 5.0
#### bool IsZero
- (summary) 
     Gets a value indicating whether the X, Y, and Z values are all equal to 0.0.
     
- (since) 5.0
#### double Length
- (summary) 
     Computes the length (or magnitude, or size) of this vector.
     This is an application of Pythagoras' theorem.
     If this vector is invalid, its length is considered 0.
     
- (since) 5.0
#### double MaximumCoordinate
- (summary) 
     Gets the largest (both positive and negative) component value in this vector.
     
- (since) 5.0
#### double MinimumCoordinate
- (summary) 
     Gets the smallest (both positive and negative) component value in this vector.
     
- (since) 5.0
#### double SquareLength
- (summary) 
     Computes the squared length (or magnitude, or size) of this vector.
     This is an application of Pythagoras' theorem.
     While the Length property checks for input validity,
     this property does not. You should check validity in advance,
     if this vector can be invalid.
     
- (since) 5.0
#### double X
- (summary) 
     Gets or sets the X (first) component of the vector.
     
- (since) 5.0
#### double Y
- (summary) 
     Gets or sets the Y (second) component of the vector.
     
- (since) 5.0
#### double Z
- (summary) 
     Gets or sets the Z (third) component of the vector.
     
- (since) 5.0
## Methods
#### static Vector3d Add(Vector3d vector1,Vector3d vector2)
- (summary) 
     Sums up two vectors.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
- (since) 5.0
- (returns) Vector3d This is some return comment
#### static bool AreOrthogonal(Vector3d x,Vector3d y,Vector3d z)
- (summary) 
     Test whether three vectors describe an orthogonal axis system.
     All vectors must be mutually perpendicular this to be the case.
     
- (since) 6.7
- (returns) bool This is some return comment
#### static bool AreOrthonormal(Vector3d x,Vector3d y,Vector3d z)
- (summary) 
     Test whether three vectors describe an orthogonal, unit axis system.
     All vectors must be mutually perpendicular and have unit length for this to be the case.
     
- (since) 6.7
- (returns) bool This is some return comment
#### static bool AreRighthanded(Vector3d x,Vector3d y,Vector3d z)
- (summary) 
     Test whether three vectors describe a right-handed, orthogonal, unit axis system.
     The vectors must be orthonormal and follow the right-hand ordering; index-finger=x,
     middle-finger=y, thumb=z.
     
- (since) 6.7
- (returns) bool This is some return comment
#### static Vector3d CrossProduct(Vector3d a,Vector3d b)
- (summary) 
     Computes the cross product (or vector product, or exterior product) of two vectors.
     This operation is not commutative.
- (since) 5.0
- (returns) Vector3d This is some return comment
#### static Vector3d Divide(Vector3d vector,double t)
- (summary) 
     Divides a  by a number, having the effect of shrinking it.
     (Provided for languages that do not support operator overloading. You can use the / operator otherwise)
- (since) 5.0
- (returns) Vector3d This is some return comment
#### static Vector3d Multiply(double t,Vector3d vector)
- (summary) 
     Multiplies a vector by a number, having the effect of scaling it.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
- (since) 5.0
- (returns) Vector3d This is some return comment
#### static Vector3d Multiply(Vector3d vector,double t)
- (summary) 
     Multiplies a vector by a number, having the effect of scaling it.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
- (since) 5.0
- (returns) Vector3d This is some return comment
#### static double Multiply(Vector3d vector1,Vector3d vector2)
- (summary) 
     Multiplies two vectors together, returning the dot product (or inner product).
     This differs from the cross product.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
- (since) 5.0
- (returns) double This is some return comment
#### static Vector3d Negate(Vector3d vector)
- (summary) 
     Computes the reversed vector.
     (Provided for languages that do not support operator overloading. You can use the - unary operator otherwise)
- (since) 5.0
- (returns) Vector3d This is some return comment
#### static Vector3d Subtract(Vector3d vector1,Vector3d vector2)
- (summary) 
     Subtracts the second vector from the first one.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
- (since) 5.0
- (returns) Vector3d This is some return comment
#### static double VectorAngle(Vector3d a,Vector3d b)
- (summary) 
     Compute the angle between two vectors.
     This operation is commutative.
- (since) 5.0
- (returns) double This is some return comment
#### static double VectorAngle(Vector3d a,Vector3d b,Plane plane)
- (summary) 
     Computes the angle on a plane between two vectors.
     
- (since) 5.0
- (returns) double This is some return comment
#### static double VectorAngle(Vector3d v1,Vector3d v2,Vector3d vNormal)
- (summary) 
     Computes the angle of v1, v2 with a normal vector.
     
- (since) 6.0
- (returns) double This is some return comment
#### int CompareTo(Vector3d other)
- (summary) 
     Compares this  with another .
     Component evaluation priority is first X, then Y, then Z.
- (since) 5.0
- (returns) int This is some return comment
#### bool EpsilonEquals(Vector3d other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
#### bool Equals(object obj)
- (summary) 
     Determines whether the specified System.Object is a Vector3d and has the same values as the present vector.
     
- (since) (unknown)
- (returns) bool This is some return comment
#### bool Equals(Vector3d vector)
- (summary) 
     Determines whether the specified vector has the same value as the present vector.
     
- (since) 5.0
- (returns) bool This is some return comment
#### int GetHashCode()
- (summary) 
     Computes the hash code for the current vector.
     
- (since) (unknown)
- (returns) int This is some return comment
#### int IsParallelTo(Vector3d other)
- (summary) 
     Determines whether this vector is parallel to another vector, within one degree (within Pi / 180). 
     
- (since) 5.0
- (returns) int This is some return comment
#### int IsParallelTo(Vector3d other,double angleTolerance)
- (summary) 
     Determines whether this vector is parallel to another vector, within a provided tolerance. 
     
- (since) 5.0
- (returns) int This is some return comment
#### bool IsPerpendicularTo(Vector3d other)
- (summary) 
     Test to see whether this vector is perpendicular to within one degree of another one. 
    
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsPerpendicularTo(Vector3d other,double angleTolerance)
- (summary) 
     Determines whether this vector is perpendicular to another vector, within a provided angle tolerance. 
    
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsTiny()
- (summary) 
     Uses RhinoMath.ZeroTolerance for IsTiny calculation.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsTiny(double tolerance)
- (summary) 
     Determines whether a vector is very short.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool PerpendicularTo(Vector3d other)
- (summary) 
     Sets this vector to be perpendicular to another vector. 
     Result is not unitized.
    
- (since) 5.0
- (returns) bool This is some return comment
#### bool Reverse()
- (summary) 
     Reverses this vector in place (reverses the direction).
     If this vector is Invalid, no changes will occur and False will be returned.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Rotate(double angleRadians,Vector3d rotationAxis)
- (summary) 
     Rotates this vector around a given axis.
     
- (since) 5.0
- (returns) bool This is some return comment
#### string ToString()
- (summary) 
     Returns the string representation of the current vector, in the form X,Y,Z.
     
- (since) (unknown)
- (returns) string This is some return comment
#### string ToString(string format,IFormatProvider formatProvider)
- (summary) 
- (since) 7.0
- (returns) string This is some return comment
#### void Transform(Transform transformation)
- (summary) 
     Transforms the vector in place.
     The transformation matrix acts on the left of the vector; i.e.,result = transformation*vector
- (since) 5.0
- (returns) void This is some return comment
#### bool Unitize()
- (summary) 
     Unitizes the vector in place. A unit vector has length 1 unit. 
     An invalid or zero length vector cannot be unitized.
- (since) 5.0
- (returns) bool This is some return comment
