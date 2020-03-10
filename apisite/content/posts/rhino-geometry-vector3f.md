---
title: "Rhino.Geometry.Vector3f"
date: 2020-03-10 09:24:55Z
draft: false
---

## static -
- (summary) 
     Subtracts the second vector from the first one.
     
- (since) 6.0
## static -
- (summary) 
     Computes the opposite vector.
     
- (since) 6.0
## static !=
- (summary) 
     Determines whether two vectors have different values.
     
- (since) 5.0
## static *
- (summary) 
     Multiplies a vector by a number, having the effect of scaling it.
     
- (since) 5.0
## static *
- (summary) 
     Multiplies two  together, returning the dot (internal) product of the two.
     This is not the cross product.
     
- (since) 5.0
## static *
- (summary) 
     Multiplies a vector by a number, having the effect of scaling it.
     
- (since) 5.0
## static /
- (summary) 
     Divides a  by a number, having the effect of shrinking it, t times.
     
- (since) 6.0
## static /
- (summary) 
     Divides a  by a number, having the effect of shrinking it, t times.
     
- (since) 6.0
## static +
- (summary) 
     Sums up a point and a vector, and returns a new point.
     
- (since) (unknown)
## static +
- (summary) 
     Sums up two vectors.
     
- (since) (unknown)
## static <
- (summary) 
     Determines whether the first specified vector comes before
     (has inferior sorting value than) the second vector.
     Components evaluation priority is first X, then Y, then Z.
- (since) 5.0
## static <=
- (summary) 
     Determines whether the first specified vector comes before
     (has inferior sorting value than) the second vector, or it is equal to it.
     Components evaluation priority is first X, then Y, then Z.
- (since) 5.0
## static ==
- (summary) 
     Determines whether two vectors have equal values.
     
- (since) 5.0
## static >
- (summary) 
     Determines whether the first specified vector comes after (has superior sorting value than)
     the second vector.
     Components evaluation priority is first X, then Y, then Z.
- (since) 5.0
## static >=
- (summary) 
     Determines whether the first specified vector comes after (has superior sorting value than)
     the second vector, or it is equal to it.
     Components evaluation priority is first X, then Y, then Z.
- (since) 5.0
# Constructors
## Rhino.Geometry.Vector3f(float x,float y,float z)
- (summary) 
     Constructs a new vector from 3 single precision numbers.
     
- (since) 5.0
# Properties
## static Vector3f Unset
- (summary) 
     Gets the value of the vector with each component set to RhinoMath.UnsetValue.
     
- (since) 5.0
## static Vector3f XAxis
- (summary) 
     Gets the value of the vector with components 1,0,0.
     
- (since) 5.0
## static Vector3f YAxis
- (summary) 
     Gets the value of the vector with components 0,1,0.
     
- (since) 5.0
## static Vector3f ZAxis
- (summary) 
     Gets the value of the vector with components 0,0,1.
     
- (since) 5.0
## static Vector3f Zero
- (summary) 
     Gets the value of the vector with components 0,0,0.
     
- (since) 5.0
## bool IsUnitVector
- (summary) 
     Gets a value indicating whether or not this is a unit vector. 
     A unit vector has length 1.
     
- (since) 6.0
## bool IsValid
- (summary) 
     Returns an indication regarding the validity of this vector.
     
- (since) 6.0
## bool IsZero
- (summary) 
     Gets a value indicating whether the X, Y, and Z values are all equal to 0.0.
     
- (since) 6.0
## float Length
- (summary) 
     Computes the length (or magnitude, or size) of this vector.
     This is an application of Pythagoras' theorem.
     If this vector is invalid, its length is considered 0.
     
- (since) 5.0
## float SquareLength
- (summary) 
     Returns the square length of the vector.
     This property does not check for the validity of the inputs.
     
- (since) 6.0
## float X
- (summary) 
     Gets or sets the X (first) component of this vector.
     
- (since) 5.0
## float Y
- (summary) 
     Gets or sets the Y (second) component of this vector.
     
- (since) 5.0
## float Z
- (summary) 
     Gets or sets the Z (third) component of this vector.
     
- (since) 5.0
# Methods
## static Point3f Add(Point3f point,Vector3f vector)
- (summary) 
     Sums up a point and a vector, and returns a new point.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
- (since) 5.0
- (returns) Point3f This is some return comment
## static Vector3f Add(Vector3f vector1,Vector3f vector2)
- (summary) 
     Sums up two vectors.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
- (since) 6.0
- (returns) Vector3f This is some return comment
## static Vector3f CrossProduct(Vector3f a,Vector3f b)
- (summary) 
     Computes the cross product (or vector product, or exterior product) of two vectors.
     This operation is not commutative.
- (since) 5.0
- (returns) Vector3f This is some return comment
## static Vector3f Divide(Vector3f vector,double t)
- (summary) 
     Divides a  by a number, having the effect of shrinking it, t times.
     (Provided for languages that do not support operator overloading. You can use the / operator otherwise)
- (since) 6.0
- (returns) Vector3f This is some return comment
## static Vector3f Divide(Vector3f vector,float t)
- (summary) 
     Divides a  by a number, having the effect of shrinking it, t times.
     (Provided for languages that do not support operator overloading. You can use the / operator otherwise)
- (since) 6.0
- (returns) Vector3f This is some return comment
## static Vector3f Multiply(float t,Vector3f vector)
- (summary) 
     Multiplies a vector by a number, having the effect of scaling it.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
- (since) 5.0
- (returns) Vector3f This is some return comment
## static Vector3f Multiply(Vector3f vector,float t)
- (summary) 
     Multiplies a vector by a number, having the effect of scaling it.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
- (since) 5.0
- (returns) Vector3f This is some return comment
## static double Multiply(Vector3f point1,Vector3f point2)
- (summary) 
     Multiplies two  together, returning the dot (internal) product of the two.
     This is not the cross product.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
- (since) 6.0
- (returns) double This is some return comment
## static Vector3f Negate(Vector3f vector)
- (summary) 
     Computes the reversed vector.
     (Provided for languages that do not support operator overloading. You can use the - unary operator otherwise)
- (since) 6.0
- (returns) Vector3f This is some return comment
## static Vector3f Subtract(Vector3f vector1,Vector3f vector2)
- (summary) 
     Subtracts the second vector from the first one.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
- (since) 6.0
- (returns) Vector3f This is some return comment
## int CompareTo(Vector3f other)
- (summary) 
     Compares this  with another .
     Component evaluation priority is first X, then Y, then Z.
- (since) 5.0
- (returns) int This is some return comment
## bool EpsilonEquals(Vector3f other,float epsilon)
- (summary) 
     Check that all values in other are withing epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
     Determines whether the specified System.Object is a Vector3f and has the same values as the present vector.
     
- (since) (unknown)
- (returns) bool This is some return comment
## bool Equals(Vector3f vector)
- (summary) 
     Determines whether the specified vector has the same values as the present vector.
     
- (since) 5.0
- (returns) bool This is some return comment
## int GetHashCode()
- (summary) 
     Computes a hash number that represents the current vector.
     
- (since) (unknown)
- (returns) int This is some return comment
## bool PerpendicularTo(Vector3f other)
- (summary) 
     Sets this vector to be perpendicular to another vector. 
     Result is not unitized.
    
- (since) 5.0
- (returns) bool This is some return comment
## bool Reverse()
- (summary) 
     Reverses this vector in place (reverses the direction).
     If this vector contains RhinoMath.UnsetValue, the 
     reverse will also be invalid and False will be returned.
- (since) 5.0
- (returns) bool This is some return comment
## bool Rotate(double angleRadians,Vector3f rotationAxis)
- (summary) 
     Rotates this vector around a given axis.
     
- (since) 5.0
- (returns) bool This is some return comment
## string ToString()
- (summary) 
     Constructs the string representation of the current vector.
     
- (since) (unknown)
- (returns) string This is some return comment
## string ToString(string format,IFormatProvider formatProvider)
- (summary) 
- (since) 7.0
- (returns) string This is some return comment
## void Transform(Transform transformation)
- (summary) 
     Transforms the vector in place.
     The transformation matrix acts on the left of the vector; i.e.,result = transformation*vector
- (since) 5.0
- (returns) void This is some return comment
## bool Unitize()
- (summary) 
     Unitizes the vector in place. A unit vector has length 1 unit. 
     An invalid or zero length vector cannot be unitized.
- (since) 5.0
- (returns) bool This is some return comment
