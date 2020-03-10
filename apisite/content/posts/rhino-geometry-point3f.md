---
title: "Rhino.Geometry.Point3f"
draft: false
---

## static -
- (summary) 
     Subtracts a point from another point.
     
- (since) 5.0
## static !=
- (summary) 
     Determines whether two points have different values.
     
- (since) 5.0
## static *
- (summary) 
     Multiplies a point by a factor.
     
- (since) 6.0
## static *
- (summary) 
     Multiplies a point by a factor.
     
- (since) 6.0
## static +
- (summary) 
     Adds a point to another point.
     
- (since) (unknown)
## static <
- (summary) 
     Determines whether the first specified point comes before (has inferior sorting value than) the second point.
     Coordinates evaluation priority is first X, then Y, then Z.
- (since) 5.0
## static <=
- (summary) 
     Determines whether the first specified point comes before
     (has inferior sorting value than) the second point, or it is equal to it.
     Coordinates evaluation priority is first X, then Y, then Z.
- (since) 5.0
## static ==
- (summary) 
     Determines whether two points have equal values.
     
- (since) 5.0
## static >
- (summary) 
     Determines whether the first specified point comes after (has superior sorting value than) the second point.
     Coordinates evaluation priority is first X, then Y, then Z.
- (since) 5.0
## static >=
- (summary) 
     Determines whether the first specified point comes after
     (has superior sorting value than) the second point, or it is equal to it.
     Coordinates evaluation priority is first X, then Y, then Z.
- (since) 5.0
# Constructors
## Rhino.Geometry.Point3f(float x,float y,float z)
- (summary) 
     Initializes a new two-dimensional vector from two components.
     
- (since) 5.0
# Properties
## static Point3f Origin
- (summary) 
     Gets the value of a point at location 0,0,0.
     
- (since) 5.0
## static Point3f Unset
- (summary) 
     Gets the value of a point at location RhinoMath.UnsetValue,RhinoMath.UnsetValue,RhinoMath.UnsetValue.
     
- (since) 5.0
## bool IsValid
- (summary) 
     Each coordinate of the point must pass the  test.
     
- (since) 5.0
## float X
- (summary) 
     Gets or sets the X (first) component of the vector.
     
- (since) 5.0
## float Y
- (summary) 
     Gets or sets the Y (second) component of the vector.
     
- (since) 5.0
## float Z
- (summary) 
     Gets or sets the Z (third) component of the vector.
     
- (since) 5.0
# Methods
## static Vector3f Subtract(Point3f point1,Point3f point2)
- (summary) 
     Subtracts a point from another point.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
- (since) 5.0
- (returns) Vector3f This is some return comment
## int CompareTo(Point3f other)
- (summary) 
     Compares this  with another .
     Component evaluation priority is first X, then Y, then Z.
- (since) 5.0
- (returns) int This is some return comment
## double DistanceTo(Point3f other)
- (summary) 
     Computes the distance between two points.
     
- (since) 5.0
- (returns) double This is some return comment
## bool EpsilonEquals(Point3f other,float epsilon)
- (summary) 
     Check that all values in other are withing epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
     Determines whether the specified System.Object is a Point3f and has the same values as the present point.
     
- (since) (unknown)
- (returns) bool This is some return comment
## bool Equals(Point3f point)
- (summary) 
     Determines whether the specified Point3f has the same values as the present point.
     
- (since) 5.0
- (returns) bool This is some return comment
## int GetHashCode()
- (summary) 
     Computes a hash code for the present point.
     
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
## void Transform(Transform xform)
- (summary) 
     Transforms the present point in place. The transformation matrix acts on the left of the point. i.e.,
     result = transformation*point
- (since) 5.0
- (returns) void This is some return comment
