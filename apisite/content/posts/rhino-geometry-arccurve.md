---
title: "ArcCurve"
draft: false
---

*Namespace: Rhino.Geometry*

   Represent arcs and circles.
   ArcCurve.IsCircle returns True if the curve is a complete circle.
## Constructors
#### Rhino.Geometry.ArcCurve()
- (summary) 
     Initializes a new  instance.
     Radius is set to 1, position to Origin and Domain to full span (circle).
- (since) 5.0
#### Rhino.Geometry.ArcCurve(Arc arc)
- (summary) 
     Initializes a new  instance,
     copying values from another .
     
- (since) 5.0
#### Rhino.Geometry.ArcCurve(Arc arc,double t0,double t1)
- (summary) 
     Initializes a new  instance,
     copying values from another  and specifying the 
     needed parametrization of the arc.
     Arc will not be cut again at these parameterizations.
- (since) 5.0
#### Rhino.Geometry.ArcCurve(ArcCurve other)
- (summary) 
     Initializes a new  instance,
     copying values from another .
     
- (since) 5.0
#### Rhino.Geometry.ArcCurve(Circle circle)
- (summary) 
     Initializes a new  instance,
     copying the shape of a .
     Parameterization will be [0;circle.Circumference]
- (since) 5.0
#### Rhino.Geometry.ArcCurve(Circle circle,double t0,double t1)
- (summary) 
     Initializes a new  instance,
     copying values from a  and specifying the 
     needed parametrization of the arc.
     Circle will not be newly cut at these parameterizations.
- (since) 5.0
## Properties
#### double AngleDegrees
- (summary) 
     Gets the angles of this arc in degrees.
     
- (since) 5.0
#### double AngleRadians
- (summary) 
     Gets the angles of this arc in radians.
     
- (since) 5.0
#### Arc Arc
- (summary) 
     Gets the arc that is contained within this ArcCurve.
     
- (since) 5.0
#### bool IsCompleteCircle
- (summary) 
     Gets a value indicating whether or not this curve can be represented by a complete circle.
     
- (since) 5.0
#### double Radius
- (summary) 
     Gets the radius of this ArcCurve.
     
- (since) 5.0
