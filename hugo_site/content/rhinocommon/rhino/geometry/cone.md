---
title: "Cone"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the center plane, radius and height values in a right circular cone.
## Constructors

Cone(Plane plane,double height,double radius)
: Initializes a new cone with a specified base plane, height and radius.
## Properties

static Cone Unset
: Gets an invalid Cone.

[Point3d](/rhinocommon/rhino/geometry/point3d/) ApexPoint
: Point at tip of the cone.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Axis
: Unit vector axis of cone.

[Point3d](/rhinocommon/rhino/geometry/point3d/) BasePoint
: Center of base circle.

double Height
: Gets or sets the height of the circular right cone.

bool IsValid
: True if plane is valid, height is not zero and radius is not zero.

[Plane](/rhinocommon/rhino/geometry/plane/) Plane
: Gets or sets the base plane of the cone.  The apex of the cone is at the plane's origin.

double Radius
: Gets or sets the radius of the cone.
## Methods

double AngleInDegrees()
: Computes the angle (in degrees) between the axis and the 
     side of the cone.
     The angle and the height have the same sign.
: Returns - An angle in degrees.

double AngleInRadians()
: Computes the angle (in radians) between the axis and the 
     side of the cone.
     The angle and the height have the same sign.
: Returns - Math.Atan(Radius / Height) if the height is not 0; 0 if the radius is 0; Math.PI otherwise.

bool EpsilonEquals(Cone other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

[Brep](/rhinocommon/rhino/geometry/brep/) ToBrep(bool capBottom)
: Gets a Brep representation of the cone with a single
     face for the cone, an edge along the cone seam, 
     and vertices at the base and apex ends of this seam edge.
     The optional cap is a single face with one circular edge 
     starting and ending at the base vertex.
: Returns - A brep (polysurface) representation of this cone values.

[NurbsSurface](/rhinocommon/rhino/geometry/nurbssurface/) ToNurbsSurface()
: Constructs a Nurbs surface representation of this Cone. 
     This is synonymous with calling NurbsSurface.CreateFromCone().
: Returns - A Nurbs surface representation of the cone or null.

[RevSurface](/rhinocommon/rhino/geometry/revsurface/) ToRevSurface()
: Constructs a RevSurface representation of this Cone. 
     This is synonymous with calling RevSurface.CreateFromCone().
: Returns - A RevSurface representation of the cone or null.
