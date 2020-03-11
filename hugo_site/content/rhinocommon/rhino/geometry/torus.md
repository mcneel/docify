---
title: "Torus"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the value of a plane and two radii in a torus that is oriented in three-dimensional space.
## Constructors

Torus(Plane basePlane,double majorRadius,double minorRadius)
: Initializes a new Torus from base pane and two radii.
## Properties

static Torus Unset
: Gets an invalid Torus.

bool IsValid
: Gets a value indicating whether this torus is valid.

double MajorRadius
: Gets or sets the radius of the circle that lies at the heart of the torus.

double MinorRadius
: Gets or sets the radius of the torus section.

[Plane](/rhinocommon/rhino/geometry/plane/) Plane
: Gets or sets the plane for the torus large circle.
## Methods

bool EpsilonEquals(Torus other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

[NurbsSurface](/rhinocommon/rhino/geometry/nurbssurface/) ToNurbsSurface()
: Converts this torus to its nurbs surface representation. 
     This is synonymous with calling NurbsSurface.CreateFromTorus().
: Returns - A nurbs surface representation of this torus, or None on error.

[RevSurface](/rhinocommon/rhino/geometry/revsurface/) ToRevSurface()
: Convert this torus to a surface of revolution representation. 
     This is synonymous with calling RevSurface.CreateFromTorus().
: Returns - A surface of revolution representation of this torus, or None on error.
