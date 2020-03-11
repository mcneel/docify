---
title: "ControlPoint"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents control point geometry with three-dimensional position and weight.
## Constructors

ControlPoint(double x,double y,double z)
: Constructs a new world 3-D, or Euclidean, control point.
     The 4-D representation is (x, y, z, 1.0).

ControlPoint(double x,double y,double z,double weight)
: Constructs a new homogeneous control point, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).

ControlPoint(Point3d pt)
: Constructs a new world 3-D, or Euclidean, control point.
     The 4-D representation of this is (x, y, z, 1.0).

ControlPoint(Point3d euclideanPt,double weight)
: Constructs a control point from a world 3-D, or Euclidean, location and a weight.
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).

ControlPoint(Point4d pt)
: Constructs a new homogeneous control point, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
## Properties

static ControlPoint Unset
: Gets the predefined, unset control point.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Location
: Gets or sets world 3-D, or Euclidean location of the control point.

double Weight
: Gets or sets the weight of this control point.

double X
: Gets or sets the X coordinate of the control point.
: since 6.0

double Y
: Gets or sets the Y coordinate of the control point.
: since 6.0

double Z
: Gets or sets the Z coordinate of the control point.
: since 6.0
## Methods

bool EpsilonEquals(ControlPoint other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool Equals(ControlPoint other)
: Determines if two points exactly match.
: Returns - True if the other control point exactly matches this one.
: since 6.0
