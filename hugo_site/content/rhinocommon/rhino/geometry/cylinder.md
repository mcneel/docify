---
title: "Cylinder"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the values of a plane, a radius and two heights -on top and beneath-
   that define a right circular cylinder.
## Constructors

Cylinder(Circle baseCircle)
: Constructs a new cylinder with infinite height.

Cylinder(Circle baseCircle,double height)
: Constructs a new cylinder with a finite height.
## Properties

static Cylinder Unset
: Gets an invalid Cylinder.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Axis
: Gets the axis direction of the cylinder.

[Plane](/rhinocommon/rhino/geometry/plane/) BasePlane
: Gets or sets the base plane of the cylinder.
: since 6.0

[Point3d](/rhinocommon/rhino/geometry/point3d/) Center
: Gets the center point of the defining circle.

double Height1
: Gets or sets the start height of the cylinder.
     The center of bottom cap is: BasePlane.Origin + Height1 * BasePlane.ZAxis.

double Height2
: Gets or sets the end height of the cylinder. 
     If the end height equals the start height, the cylinder is 
     presumed to be infinite.
     The center of top cap is: BasePlane.Origin + Height2 * BasePlane.ZAxis.

bool IsFinite
: True if the cylinder is finite (Height0 != Height1)
     False if the cylinder is infinite.

bool IsValid
: Gets a boolean value indicating whether this cylinder is valid.
     A valid cylinder is represented by a valid circle and two valid heights.

double Radius
: Gets or sets the radius of the cylinder.
: since 6.0

double TotalHeight
: Gets the height of the cylinder. 
     Infinite cylinders have a height of zero, not Double.PositiveInfinity.
## Methods

[Circle](/rhinocommon/rhino/geometry/circle/) CircleAt(double linearParameter)
: Compute the circle at the given elevation parameter.

bool EpsilonEquals(Cylinder other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

[Line](/rhinocommon/rhino/geometry/line/) LineAt(double angularParameter)
: Compute the line at the given angle parameter. This line will be degenerate if the cylinder is infite.

[Brep](/rhinocommon/rhino/geometry/brep/) ToBrep(bool capBottom,bool capTop)
: Constructs a Brep representation of this Cylinder. 
     This is synonymous with calling NurbsSurface.CreateFromCylinder().
: Returns - A Brep representation of the cylinder or null.

[NurbsSurface](/rhinocommon/rhino/geometry/nurbssurface/) ToNurbsSurface()
: Constructs a Nurbs surface representation of this cylinder. 
     This is synonymous with calling NurbsSurface.CreateFromCylinder().
: Returns - A Nurbs surface representation of the cylinder or null.

[RevSurface](/rhinocommon/rhino/geometry/revsurface/) ToRevSurface()
: Constructs a RevSurface representation of this Cylinder. 
     This is synonymous with calling RevSurface.CreateFromCylinder().
: Returns - A RevSurface representation of the cylinder or null.
