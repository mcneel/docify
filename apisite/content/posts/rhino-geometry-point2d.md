---
title: "Rhino.Geometry.Point2d"
date: 2020-03-10 09:24:55Z
draft: false
---

## static -
- (summary) 
     Subtracts point2 from point1.
     
- (since) 5.0
## static -
- (summary) 
     Subtracts a vector from a point.
     
- (since) 5.0
## static !=
- (summary) 
     Determines whether two  have different values.
     
- (since) 5.0
## static *
- (summary) 
     Multiplies a  by a number.
     
- (since) 5.0
## static *
- (summary) 
     Multiplies a  by a number.
     
- (since) 5.0
## static /
- (summary) 
     Divides a  by a number.
     
- (since) 5.0
## static +
- (summary) 
     Adds a point with a point.
     
- (since) (unknown)
## static +
- (summary) 
     Adds a vector with a point.
     
- (since) (unknown)
## static +
- (summary) 
     Adds a point with a vector.
     
- (since) (unknown)
## static <
- (summary) 
     Determines whether the first specified point comes before (has inferior sorting value than) the second point.
     Coordinates evaluation priority is first X, then Y.
- (since) 5.0
## static <=
- (summary) 
     Determines whether the first specified point comes before
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
## Rhino.Geometry.Point2d(double x,double y)
- (summary) 
     Initializes a new instance of  from coordinates.
     
- (since) 5.0
## Rhino.Geometry.Point2d(Point2d point)
- (summary) 
     Initializes a new instance of  by copying another .
     
- (since) 5.0
## Rhino.Geometry.Point2d(Point3d point)
- (summary) 
     Initializes a new instance of  by copying the first two coordiantes of a .
     
- (since) 5.0
## Rhino.Geometry.Point2d(Vector2d vector)
- (summary) 
     Initializes a new instance of  by converting a vector.
     
- (since) 5.0
# Properties
## static Point2d Origin
- (summary) 
     Gets a point at 0,0.
     
- (since) 5.0
## static Point2d Unset
- (summary) 
     Gets a point at RhinoMath.UnsetValue,RhinoMath.UnsetValue.
     
- (since) 5.0
## bool IsValid
- (summary) 
    If any coordinate of a point is UnsetValue, then the point is not valid.
    
- (since) 5.0
## double MaximumCoordinate
- (summary) 
     Gets the largest valid coordinate, or RhinoMath.UnsetValue if no coordinate is valid.
     
- (since) 5.0
## double MinimumCoordinate
- (summary) 
     Gets the smallest (both positive and negative) valid coordinate, or RhinoMath.UnsetValue if no coordinate is valid.
     
- (since) 5.0
## double X
- (summary) 
     Gets or sets the X (first) coordinate of the point.
     
- (since) 5.0
## double Y
- (summary) 
     Gets or sets the Y (second) coordinate of the point.
     
- (since) 5.0
# Methods
## static Point2d Add(Point2d point1,Point2d point2)
- (summary) 
     Adds a point with a point.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
- (since) 5.0
- (returns) Point2d This is some return comment
## static Point2d Add(Point2d point,Vector2d vector)
- (summary) 
     Adds a point with a vector.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
- (since) 5.0
- (returns) Point2d This is some return comment
## static Point2d Add(Vector2d vector,Point2d point)
- (summary) 
     Adds a vector with a point.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
- (since) 5.0
- (returns) Point2d This is some return comment
## static Point2d Divide(Point2d point,double t)
- (summary) 
     Divides a  by a number.
     (Provided for languages that do not support operator overloading. You can use the / operator otherwise)
- (since) 5.0
- (returns) Point2d This is some return comment
## static Point2d Multiply(double t,Point2d point)
- (summary) 
     Multiplies a  by a number.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
- (since) 5.0
- (returns) Point2d This is some return comment
## static Point2d Multiply(Point2d point,double t)
- (summary) 
     Multiplies a  by a number.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
- (since) 5.0
- (returns) Point2d This is some return comment
## static Vector2d Subtract(Point2d point1,Point2d point2)
- (summary) 
     Subtracts the second point from the first point.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
- (since) 5.0
- (returns) Vector2d This is some return comment
## static Point2d Subtract(Point2d point,Vector2d vector)
- (summary) 
     Subtracts a vector from a point.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
- (since) 5.0
- (returns) Point2d This is some return comment
## int CompareTo(Point2d other)
- (summary) 
     Compares this  with another .
     Coordinates evaluation priority is first X, then Y.
- (since) 5.0
- (returns) int This is some return comment
## double DistanceTo(Point2d other)
- (summary) 
     Computes the distance between two points.
     
- (since) 5.0
- (returns) double This is some return comment
## bool EpsilonEquals(Point2d other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
     Determines whether the specified System.Object is a Point2d and has the same values as the present point.
     
- (since) (unknown)
- (returns) bool This is some return comment
## bool Equals(Point2d point)
- (summary) 
     Determines whether the specified Point2d has the same values as the present point.
     
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
## void Transform(Transform xform)
- (summary) 
     Transforms the present point in place. The transformation matrix acts on the left of the point. i.e.,
     result = transformation*point
- (since) 5.1
- (returns) void This is some return comment
