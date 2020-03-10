---
title: "Rhino.Geometry.Point2f"
date: 2020-03-10 09:24:55Z
draft: false
---

## static -
- (summary) 
     Subtracts two s.
     
- (since) 6.0
## static !=
- (summary) 
     Determines whether two  have different values.
     
- (since) 5.0
## static *
- (summary) 
     Multiplies a  by a scalar.
     
- (since) 6.0
## static /
- (summary) 
     Divides a  by a scalar.
     
- (since) 6.0
## static +
- (summary) 
     Sums two s.
     
- (since) (unknown)
## static <
- (summary) 
     Determines whether the first specified  comes before
     (has inferior sorting value than) the second point.
     Coordinates evaluation priority is first X, then Y.
- (since) 5.0
## static <=
- (summary) 
     Determines whether the first specified  comes before
     (has inferior sorting value than) the second point, or it is equal to it.
     Coordinates evaluation priority is first X, then Y.
- (since) 5.0
## static ==
- (summary) 
     Determines whether two  have equal values.
     
- (since) 5.0
## static >
- (summary) 
     Determines whether the first specified  comes after
     (has superior sorting value than) the second point.
     Coordinates evaluation priority is first X, then Y.
- (since) 5.0
## static >=
- (summary) 
     Determines whether the first specified  comes after
     (has superior sorting value than) the second point, or it is equal to it.
     Coordinates evaluation priority is first X, then Y.
- (since) 5.0
# Constructors
## Rhino.Geometry.Point2f(double x,double y)
- (summary) 
     Initializes a new two-dimensional point from two double-precision floating point numbers as coordinates.
     Coordinates will be internally converted to floating point numbers. This might cause precision loss.
- (since) 5.0
## Rhino.Geometry.Point2f(float x,float y)
- (summary) 
     Initializes a new two-dimensional point from two components.
     
- (since) 5.0
# Properties
## static Point2f Unset
- (summary) 
     Gets the standard unset point.
     
- (since) 5.0
## bool IsValid
- (summary) 
     Gets a value indicating whether this point is considered valid.
     
- (since) 5.0
## float X
- (summary) 
     Gets or sets the X (first) component of the vector.
     
- (since) 5.0
## float Y
- (summary) 
     Gets or sets the Y (second) component of the vector.
     
- (since) 5.0
# Methods
## int CompareTo(Point2f other)
- (summary) 
     Compares this  with another .
     Coordinates evaluation priority is first X, then Y.
- (since) 5.0
- (returns) int This is some return comment
## bool EpsilonEquals(Point2f other,float epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
     Determines whether the specified System.Object is a  and has the same values as the present point.
     
- (since) (unknown)
- (returns) bool This is some return comment
## bool Equals(Point2f point)
- (summary) 
     Determines whether the specified  has the same values as the present point.
     
- (since) 5.0
- (returns) bool This is some return comment
## int GetHashCode()
- (summary) 
     Computes a hash number that represents the current point.
     
- (since) (unknown)
- (returns) int This is some return comment
## string ToString()
- (summary) 
     Constructs the string representation for the current point.
     
- (since) (unknown)
- (returns) string This is some return comment
## string ToString(string format,IFormatProvider formatProvider)
- (summary) 
- (since) 7.0
- (returns) string This is some return comment
