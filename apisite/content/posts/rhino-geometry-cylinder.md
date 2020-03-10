---
title: "Cylinder"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents the values of a plane, a radius and two heights -on top and beneath-
   that define a right circular cylinder.
   
## Constructors
#### Rhino.Geometry.Cylinder(Circle baseCircle)
- (summary) 
     Constructs a new cylinder with infinite height.
     
- (since) 5.0
#### Rhino.Geometry.Cylinder(Circle baseCircle,double height)
- (summary) 
     Constructs a new cylinder with a finite height.
     
- (since) 5.0
## Properties
#### static Cylinder Unset
- (summary) 
     Gets an invalid Cylinder.
     
- (since) 5.0
#### Vector3d Axis
- (summary) 
     Gets the axis direction of the cylinder.
     
- (since) 5.0
#### Plane BasePlane
- (summary) 
     Gets or sets the base plane of the cylinder.
     
- (since) 6.0
#### Point3d Center
- (summary) 
     Gets the center point of the defining circle.
     
- (since) 5.0
#### double Height1
- (summary) 
     Gets or sets the start height of the cylinder.
     The center of bottom cap is: BasePlane.Origin + Height1 * BasePlane.ZAxis.
     
- (since) 5.0
#### double Height2
- (summary) 
     Gets or sets the end height of the cylinder. 
     If the end height equals the start height, the cylinder is 
     presumed to be infinite.
     The center of top cap is: BasePlane.Origin + Height2 * BasePlane.ZAxis.
     
- (since) 5.0
#### bool IsFinite
- (summary) 
     True if the cylinder is finite (Height0 != Height1)
     False if the cylinder is infinite.
     
- (since) 5.0
#### bool IsValid
- (summary) 
     Gets a boolean value indicating whether this cylinder is valid.
     A valid cylinder is represented by a valid circle and two valid heights.
- (since) 5.0
#### double Radius
- (summary) 
     Gets or sets the radius of the cylinder.
     
- (since) 6.0
#### double TotalHeight
- (summary) 
     Gets the height of the cylinder. 
     Infinite cylinders have a height of zero, not Double.PositiveInfinity.
     
- (since) 5.0
## Methods
#### Circle CircleAt(double linearParameter)
- (summary) 
     Compute the circle at the given elevation parameter.
     
- (since) 5.0
- (returns) Circle This is some return comment
#### bool EpsilonEquals(Cylinder other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
#### Line LineAt(double angularParameter)
- (summary) 
     Compute the line at the given angle parameter. This line will be degenerate if the cylinder is infite.
     
- (since) 5.0
- (returns) Line This is some return comment
#### Brep ToBrep(bool capBottom,bool capTop)
- (summary) 
     Constructs a Brep representation of this Cylinder. 
     This is synonymous with calling NurbsSurface.CreateFromCylinder().
     
- (since) 5.0
- (returns) Brep This is some return comment
#### NurbsSurface ToNurbsSurface()
- (summary) 
     Constructs a Nurbs surface representation of this cylinder. 
     This is synonymous with calling NurbsSurface.CreateFromCylinder().
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
#### RevSurface ToRevSurface()
- (summary) 
     Constructs a RevSurface representation of this Cylinder. 
     This is synonymous with calling RevSurface.CreateFromCylinder().
     
- (since) 5.0
- (returns) RevSurface This is some return comment
