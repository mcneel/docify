---
title: "Ellipse"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the values of a plane and the two semiaxes radii in an ellipse.
## Constructors

Ellipse(Plane plane,double radius1,double radius2)
: Initializes a new ellipse from base plane and both principal radii.

Ellipse(Point3d center,Point3d second,Point3d third)
: Initializes a new ellipse from a center point and the two semiaxes intersections.
## Properties

bool IsValid
: Returns an indication of the validity of this ellipse.
: since 6.0

[Plane](/rhinocommon/rhino/geometry/plane/) Plane
: Gets or sets the base plane of the ellipse.

double Radius1
: Gets or sets the radius of the ellipse along the base plane X semiaxis.

double Radius2
: Gets or sets the radius of the ellipse along the base plane Y semiaxis.
## Methods

bool EpsilonEquals(Ellipse other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) ToNurbsCurve()
: Constructs a nurbs curve representation of this ellipse. 
     This is equivalent to calling NurbsCurve.CreateFromEllipse().
: Returns - A nurbs curve representation of this ellipse or None if no such representation could be made.
