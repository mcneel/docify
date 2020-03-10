---
title: "ControlPoint"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents control point geometry with three-dimensional position and weight.
   
## Constructors
#### Rhino.Geometry.ControlPoint(double x,double y,double z)
- (summary) 
     Constructs a new world 3-D, or Euclidean, control point.
     The 4-D representation is (x, y, z, 1.0).
     
- (since) 5.0
#### Rhino.Geometry.ControlPoint(double x,double y,double z,double weight)
- (summary) 
     Constructs a new homogeneous control point, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
     
- (since) 5.0
#### Rhino.Geometry.ControlPoint(Point3d pt)
- (summary) 
     Constructs a new world 3-D, or Euclidean, control point.
     The 4-D representation of this is (x, y, z, 1.0).
     
- (since) 5.0
#### Rhino.Geometry.ControlPoint(Point3d euclideanPt,double weight)
- (summary) 
     Constructs a control point from a world 3-D, or Euclidean, location and a weight.
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
     
- (since) 5.0
#### Rhino.Geometry.ControlPoint(Point4d pt)
- (summary) 
     Constructs a new homogeneous control point, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
     
- (since) 5.0
## Properties
#### static ControlPoint Unset
- (summary) 
     Gets the predefined, unset control point.
     
- (since) 5.0
#### Point3d Location
- (summary) 
     Gets or sets world 3-D, or Euclidean location of the control point. 
     
- (since) 5.0
#### double Weight
- (summary) 
     Gets or sets the weight of this control point.
     
- (since) 5.0
#### double X
- (summary) 
     Gets or sets the X coordinate of the control point.
     
- (since) 6.0
#### double Y
- (summary) 
     Gets or sets the Y coordinate of the control point.
     
- (since) 6.0
#### double Z
- (summary) 
     Gets or sets the Z coordinate of the control point.
     
- (since) 6.0
## Methods
#### bool EpsilonEquals(ControlPoint other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
#### bool Equals(ControlPoint other)
- (summary) 
     Determines if two points exactly match.
     
- (since) 6.0
- (returns) bool This is some return comment
