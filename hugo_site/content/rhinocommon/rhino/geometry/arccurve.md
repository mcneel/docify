---
title: "ArcCurve"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represent arcs and circles.
   ArcCurve.IsCircle returns True if the curve is a complete circle.
```cs
[Serializable]
public class ArcCurve : Curve
```
## Constructors

ArcCurve()
: Initializes a new  instance.
     Radius is set to 1, position to Origin and Domain to full span (circle).

ArcCurve(Arc arc)
: Initializes a new  instance,
     copying values from another .

ArcCurve(Arc arc,double t0,double t1)
: Initializes a new  instance,
     copying values from another  and specifying the 
     needed parametrization of the arc.
     Arc will not be cut again at these parameterizations.

ArcCurve(ArcCurve other)
: Initializes a new  instance,
     copying values from another .

ArcCurve(Circle circle)
: Initializes a new  instance,
     copying the shape of a .
     Parameterization will be [0;circle.Circumference]

ArcCurve(Circle circle,double t0,double t1)
: Initializes a new  instance,
     copying values from a  and specifying the 
     needed parametrization of the arc.
     Circle will not be newly cut at these parameterizations.
## Properties

double AngleDegrees
: Gets the angles of this arc in degrees.

double AngleRadians
: Gets the angles of this arc in radians.

[Arc](/rhinocommon/rhino/geometry/arc/) Arc
: Gets the arc that is contained within this ArcCurve.

bool IsCompleteCircle
: Gets a value indicating whether or not this curve can be represented by a complete circle.

double Radius
: Gets the radius of this ArcCurve.
