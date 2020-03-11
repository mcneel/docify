---
title: "Ray3d"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents an immutable ray in three dimensions, using position and direction.

static !=
: Determines whether two  have different values.
: Returns - True if position or direction (or both) in the two rays are different; otherwise false.

static ==
: Determines whether two  have equal values.
: Returns - True if position and direction of the two rays are equal; otherwise false.
## Constructors

Ray3d(Point3d position,Vector3d direction)
: Initializes a new Ray3d instance.
## Properties

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Direction
: Gets the direction vector of this ray.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Position
: Gets the starting position of this ray.
## Methods

bool EpsilonEquals(Ray3d other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool Equals(object obj)
: Determines whether the specified System.Object is a Ray3d and has the same values as the present ray.
: Returns - True if obj is a Ray3d and has the same position and direction as this; otherwise false.
: since (unknown)

bool Equals(Ray3d ray)
: Determines whether the specified Ray3d has the same value as the present ray.
: Returns - True if ray has the same position and direction as this; otherwise false.

int GetHashCode()
: Computes a hashing number that represents the current ray.
: Returns - A signed integer that represents both postion and direction, but is not unique.
: since (unknown)

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(double t)
: Evaluates a point along the ray.
: Returns - A point at (Direction*t + Position).
