---
title: "Point4d"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the four coordinates of a point in four-dimensional space.
   The W (fourth) dimension is often considered the weight of the point as seen in 3D space.

static -
: Subtracts the second point from the first point.
: Returns - A new point that results from the weighted subtraction of point2 from point1.

static !=
: Determines whether two Point4d have different values.
: Returns - True if the two points differ in any coordinate; False otherwise.

static *
: Multiplies a point by a number.
: Returns - A new point that results from the coordinatewise multiplication of point with d.

static *
: Multiplies two  together, returning the dot (internal) product of the two.
     This is not the cross product.
: Returns - A value that results from the coordinatewise multiplication of point1 and point2.

static +
: Sums two  together.
: Returns - A new point that results from the weighted addition of point1 and point2.
: since (unknown)

static ==
: Determines whether two Point4d have equal values.
: Returns - True if the coordinates of the two points are equal; otherwise false.
## Constructors

Point4d(double x,double y,double z,double w)
: Initializes a new instance of the  class based on coordinates.

Point4d(Point3d point)
: Initializes a new instance of the  class from the coordinates of a point.

Point4d(Point4d point)
: Initializes a new point by copying coordinates from another point.
: since 6.0
## Properties

static Point4d Unset
: Gets the value of a point with all coordinates set as RhinoMath.UnsetValue.

bool IsValid
: Returns an indication regarding the validity of this point.
: since 6.0

double W
: Gets or sets the W (fourth) coordinate -or weight- of this point.

double X
: Gets or sets the X (first) coordinate of this point.

double Y
: Gets or sets the Y (second) coordinate of this point.

double Z
: Gets or sets the Z (third) coordinate of this point.
## Methods

static Point4d Add(Point4d point1,Point4d point2)
: Sums two  together.
     (Provided for languages that do not support operator overloading. You can use the + operator otherwise)
: Returns - A new point that results from the weighted addition of point1 and point2.

static Point4d Multiply(Point4d point,double d)
: Multiplies a point by a number.
     (Provided for languages that do not support operator overloading. You can use the * operator otherwise)
: Returns - A new point that results from the coordinatewise multiplication of point with d.

static Point4d Subtract(Point4d point1,Point4d point2)
: Subtracts the second point from the first point.
     (Provided for languages that do not support operator overloading. You can use the - operator otherwise)
: Returns - A new point that results from the weighted subtraction of point2 from point1.

bool EpsilonEquals(Point4d other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool Equals(object obj)
: Determines whether the specified System.Object is Point4d and has same coordinates as the present point.
: Returns - True if obj is Point4d and has the same coordinates as this; otherwise false.
: since (unknown)

bool Equals(Point4d point)
: Determines whether the specified point has same value as the present point.
: Returns - True if point has the same value as this; otherwise false.

int GetHashCode()
: Computes the hash code for the present point.
: Returns - A non-unique hash code, which uses all coordiantes of this object.
: since (unknown)

string ToString()
: 
: since (unknown)

string ToString(string format,IFormatProvider formatProvider)
: 
: since 7.0

void Transform(Transform xform)
: Transforms the present point in place. The transformation matrix acts on the left of the point. i.e.,
     result = transformation*point
: since 6.0
