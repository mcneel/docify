---
title: "Vector2d"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents the two components of a vector in two-dimensional space,
   using -precision floating point numbers.
   
#### static -
- (summary) 
     Computes the opposite vector.
     
- (since) 6.0
#### static -
- (summary) 
     Subtracts the second vector from the first one.
     
- (since) 6.0
#### static !=
- (summary) 
     Determines whether two vectors have different values.
     
- (since) 5.0
#### static *
- (summary) 
     Multiplies a vector by a number, having the effect of scaling it.
     
- (since) 6.0
#### static *
- (summary) 
     Multiplies a vector by a number, having the effect of scaling it.
     
- (since) 6.0
#### static *
- (summary) 
     Multiplies two vectors together, returning the dot product (or inner product).
     
- (since) 6.0
#### static /
- (summary) 
     Divides a  by a number, having the effect of shrinking it.
     
- (since) 6.0
#### static +
- (summary) 
     Sums up two vectors.
     
- (since) (unknown)
#### static <
- (summary) 
     Determines whether the first specified vector comes before
     (has inferior sorting value than) the second vector.
     Components have decreasing evaluation priority: first X, then Y.
- (since) 5.0
#### static <=
- (summary) 
     Determines whether the first specified vector comes before
     (has inferior sorting value than) the second vector, or it is equal to it.
     Components have decreasing evaluation priority: first X, then Y.
- (since) 5.0
#### static ==
- (summary) 
     Determines whether two vectors have equal values.
     
- (since) 5.0
#### static >
- (summary) 
     Determines whether the first specified vector comes after
     (has superior sorting value than) the second vector.
     Components have decreasing evaluation priority: first X, then Y.
- (since) 5.0
#### static >=
- (summary) 
     Determines whether the first specified vector comes after
     (has superior sorting value than) the second vector, or it is equal to it.
     Components have decreasing evaluation priority: first X, then Y.
- (since) 5.0
## Constructors
#### Rhino.Geometry.Vector2d(double x,double y)
- (summary) 
     Initializes a new instance of the vector based on two, X and Y, components.
     
- (since) 5.0
## Properties
#### static Vector2d Unset
- (summary) 
     Gets the value of the vector with components set as RhinoMath.UnsetValue,RhinoMath.UnsetValue.
     
- (since) 5.0
#### static Vector2d Zero
- (summary) 
     Gets the value of the vector with components 0,0.
     
- (since) 5.0
#### bool IsValid
- (summary) 
     Gets a value indicating whether this vector is valid. 
     A valid vector must be formed of valid component values for x, y and z.
     
- (since) 5.7
#### double Length
- (summary) 
     Computes the length (or magnitude, or size) of this vector.
     This is an application of Pythagoras' theorem.
     
- (since) 5.0
#### double SquareLength
- (summary) 
     Returns the square of the length of the vector.
     
- (since) 6.0
#### double X
- (summary) 
     Gets or sets the X (first) component of this vector.
     
- (since) 5.0
#### double Y
- (summary) 
     Gets or sets the Y (second) component of this vector.
     
- (since) 5.0
## Methods
#### static Vector2d Add(Vector2d vector1,Vector2d vector2)
- (summary) 
     Sums up two vectors.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
- (since) 6.0
- (returns) Vector2d This is some return comment
#### static Vector2d Divide(Vector2d vector,double t)
- (summary) 
     Divides a  by a number, having the effect of shrinking it.
     (Provided for languages that do not support operator overloading. You can use the / operator otherwise)
- (since) 6.0
- (returns) Vector2d This is some return comment
#### static Vector2d Multiply(double t,Vector2d vector)
- (summary) 
     Multiplies a vector by a number, having the effect of scaling it.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
- (since) 6.0
- (returns) Vector2d This is some return comment
#### static Vector2d Multiply(Vector2d vector,double t)
- (summary) 
     Multiplies a vector by a number, having the effect of scaling it.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
- (since) 6.0
- (returns) Vector2d This is some return comment
#### static double Multiply(Vector2d vector1,Vector2d vector2)
- (summary) 
     Multiplies two vectors together, returning the dot product (or inner product).
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
- (since) 6.0
- (returns) double This is some return comment
#### static Vector2d Negate(Vector2d vector)
- (summary) 
     Computes the reversed vector.
     (Provided for languages that do not support operator overloading. You can use the - unary operator otherwise)
- (since) 6.0
- (returns) Vector2d This is some return comment
#### static Vector2d Subtract(Vector2d vector1,Vector2d vector2)
- (summary) 
     Subtracts the second vector from the first one.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
- (since) 6.0
- (returns) Vector2d This is some return comment
#### int CompareTo(Vector2d other)
- (summary) 
     Compares this  with another .
     Components evaluation priority is first X, then Y.
- (since) 5.0
- (returns) int This is some return comment
#### bool EpsilonEquals(Vector2d other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
#### bool Equals(object obj)
- (summary) 
     Determines whether the specified System.Object is a Vector2d and has the same value as the present vector.
     
- (since) (unknown)
- (returns) bool This is some return comment
#### bool Equals(Vector2d vector)
- (summary) 
     Determines whether the specified vector has the same value as the present vector.
     
- (since) 5.0
- (returns) bool This is some return comment
#### int GetHashCode()
- (summary) 
     Provides a hashing value for the present vector.
     
- (since) (unknown)
- (returns) int This is some return comment
#### bool IsTiny()
- (summary) 
     Uses RhinoMath.ZeroTolerance for IsTiny calculation.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool IsTiny(double tolerance)
- (summary) 
     Determines whether a vector is very short.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool Rotate(double angleRadians)
- (summary) 
     Rotates this vector.
     
- (since) 6.0
- (returns) bool This is some return comment
#### string ToString()
- (summary) 
     Constructs a string representation of the current vector.
     
- (since) (unknown)
- (returns) string This is some return comment
#### string ToString(string format,IFormatProvider formatProvider)
- (summary) 
- (since) 7.0
- (returns) string This is some return comment
#### bool Unitize()
- (summary) 
     Unitizes the vector in place. A unit vector has length 1 unit. 
     An invalid or zero length vector cannot be unitized.
- (since) 5.7
- (returns) bool This is some return comment
