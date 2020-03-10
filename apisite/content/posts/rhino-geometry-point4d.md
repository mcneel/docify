---
title: "Point4d"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents the four coordinates of a point in four-dimensional space.
   The W (fourth) dimension is often considered the weight of the point as seen in 3D space.
#### static -
- (summary) 
     Subtracts the second point from the first point.
     
- (since) 5.0
#### static !=
- (summary) 
     Determines whether two Point4d have different values.
     
- (since) 5.0
#### static *
- (summary) 
     Multiplies a point by a number.
     
- (since) 5.0
#### static *
- (summary) 
     Multiplies two  together, returning the dot (internal) product of the two.
     This is not the cross product.
     
- (since) 5.0
#### static +
- (summary) 
     Sums two  together.
     
- (since) (unknown)
#### static ==
- (summary) 
     Determines whether two Point4d have equal values.
     
- (since) 5.0
## Constructors
#### Rhino.Geometry.Point4d(double x,double y,double z,double w)
- (summary) 
     Initializes a new instance of the  class based on coordinates.
     
- (since) 5.0
#### Rhino.Geometry.Point4d(Point3d point)
- (summary) 
     Initializes a new instance of the  class from the coordinates of a point.
     
- (since) 5.0
#### Rhino.Geometry.Point4d(Point4d point)
- (summary) 
     Initializes a new point by copying coordinates from another point.
     
- (since) 6.0
## Properties
#### static Point4d Unset
- (summary) 
     Gets the value of a point with all coordinates set as RhinoMath.UnsetValue.
     
- (since) 5.0
#### bool IsValid
- (summary) 
     Returns an indication regarding the validity of this point.
     
- (since) 6.0
#### double W
- (summary) 
     Gets or sets the W (fourth) coordinate -or weight- of this point.
     
- (since) 5.0
#### double X
- (summary) 
     Gets or sets the X (first) coordinate of this point.
     
- (since) 5.0
#### double Y
- (summary) 
     Gets or sets the Y (second) coordinate of this point.
     
- (since) 5.0
#### double Z
- (summary) 
     Gets or sets the Z (third) coordinate of this point.
     
- (since) 5.0
## Methods
#### static Point4d Add(Point4d point1,Point4d point2)
- (summary) 
     Sums two  together.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
- (since) 5.0
- (returns) Point4d This is some return comment
#### static Point4d Multiply(Point4d point,double d)
- (summary) 
     Multiplies a point by a number.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
- (since) 5.0
- (returns) Point4d This is some return comment
#### static Point4d Subtract(Point4d point1,Point4d point2)
- (summary) 
     Subtracts the second point from the first point.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
- (since) 5.0
- (returns) Point4d This is some return comment
#### bool EpsilonEquals(Point4d other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
#### bool Equals(object obj)
- (summary) 
     Determines whether the specified System.Object is Point4d and has same coordinates as the present point.
     
- (since) (unknown)
- (returns) bool This is some return comment
#### bool Equals(Point4d point)
- (summary) 
     Determines whether the specified point has same value as the present point.
     
- (since) 5.0
- (returns) bool This is some return comment
#### int GetHashCode()
- (summary) 
     Computes the hash code for the present point.
     
- (since) (unknown)
- (returns) int This is some return comment
#### string ToString()
- (summary) 
- (since) (unknown)
- (returns) string This is some return comment
#### string ToString(string format,IFormatProvider formatProvider)
- (summary) 
- (since) 7.0
- (returns) string This is some return comment
#### void Transform(Transform xform)
- (summary) 
     Transforms the present point in place. The transformation matrix acts on the left of the point. i.e.,
     result = transformation*point
- (since) 6.0
- (returns) void This is some return comment
