---
title: "Rhino.Geometry.Vector2f"
date: 2020-03-10 09:24:55Z
draft: false
---

## static -
- (summary) 
     Computes the difference between two vectors.
     
- (since) 6.0
## static !=
- (summary) 
     Determines whether two vectors have different values.
     
- (since) 5.0
## static *
- (summary) 
     Multiplies two  together, returning the dot (internal) product of the two.
     
- (since) 6.0
## static +
- (summary) 
     Computes the sum between two vectors.
     
- (since) (unknown)
## static <
- (summary) 
     Determines whether the first specified vector comes before
     (has inferior sorting value than) the second vector.
     Components have decreasing evaluation priority: first X, then Y.
- (since) 5.0
## static <=
- (summary) 
     Determines whether the first specified vector comes before
     (has inferior sorting value than) the second vector, or it is equal to it.
     Components have decreasing evaluation priority: first X, then Y.
- (since) 5.0
## static ==
- (summary) 
     Determines whether two vectors have equal values.
     
- (since) 5.0
## static >
- (summary) 
     Determines whether the first specified vector comes after (has superior sorting value than) the second vector.
     Components have decreasing evaluation priority: first X, then Y.
- (since) 5.0
## static >=
- (summary) 
     Determines whether the first specified vector comes after
     (has superior sorting value than) the second vector, or it is equal to it.
     Components have decreasing evaluation priority: first X, then Y.
- (since) 5.0
# Constructors
## Rhino.Geometry.Vector2f(float x,float y)
- (summary) 
     Creates an instance.
     
- (since) 6.0
# Properties
## bool IsValid
- (summary) 
     Returns an indication regarding the validity of this vector.
     
- (since) 6.0
## float SquareLength
- (summary) 
     Returns the square of the length of this vector.
     This method does not check for the validity of its inputs.
     
- (since) 6.0
## float X
- (summary) 
     Gets or sets the X (first) component of this vector.
     
- (since) 5.0
## float Y
- (summary) 
     Gets or sets the Y (second) component of this vector.
     
- (since) 5.0
# Methods
## static double Multiply(Vector2f point1,Vector2f point2)
- (summary) 
     Multiplies two  together, returning the dot (internal) product of the two.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
- (since) 6.0
- (returns) double This is some return comment
## int CompareTo(Vector2f other)
- (summary) 
     Compares this  with another .
     Components evaluation priority is first X, then Y.
- (since) 5.0
- (returns) int This is some return comment
## bool EpsilonEquals(Vector2f other,float epsilon)
- (summary) 
     Check that all values in other are withing epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
     Determines whether the specified System.Object is a Vector2f and has the same values as the present vector.
     
- (since) (unknown)
- (returns) bool This is some return comment
## bool Equals(Vector2f vector)
- (summary) 
     Determines whether the specified vector has the same values as the present vector.
     
- (since) 5.0
- (returns) bool This is some return comment
## int GetHashCode()
- (summary) 
     Computes a hash number that represents the current vector.
     
- (since) (unknown)
- (returns) int This is some return comment
## string ToString()
- (summary) 
     Constructs the string representation of the current vector.
     
- (since) (unknown)
- (returns) string This is some return comment
## string ToString(string format,IFormatProvider formatProvider)
- (summary) 
- (since) 7.0
- (returns) string This is some return comment
