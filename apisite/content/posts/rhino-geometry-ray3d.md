---
title: "Rhino.Geometry.Ray3d"
date: 2020-03-10 09:24:55Z
draft: false
---

## static !=
- (summary) 
     Determines whether two  have different values.
     
- (since) 5.0
## static ==
- (summary) 
     Determines whether two  have equal values.
     
- (since) 5.0
# Constructors
## Rhino.Geometry.Ray3d(Point3d position,Vector3d direction)
- (summary) 
     Initializes a new Ray3d instance.
     
- (since) 5.0
# Properties
## Vector3d Direction
- (summary) 
     Gets the direction vector of this ray.
     
- (since) 5.0
## Point3d Position
- (summary) 
     Gets the starting position of this ray.
     
- (since) 5.0
# Methods
## bool EpsilonEquals(Ray3d other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
     Determines whether the specified System.Object is a Ray3d and has the same values as the present ray.
     
- (since) (unknown)
- (returns) bool This is some return comment
## bool Equals(Ray3d ray)
- (summary) 
     Determines whether the specified Ray3d has the same value as the present ray.
     
- (since) 5.0
- (returns) bool This is some return comment
## int GetHashCode()
- (summary) 
     Computes a hashing number that represents the current ray.
     
- (since) (unknown)
- (returns) int This is some return comment
## Point3d PointAt(double t)
- (summary) 
     Evaluates a point along the ray.
     
- (since) 5.0
- (returns) Point3d This is some return comment
