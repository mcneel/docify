---
title: "Rhino.Geometry.RevSurface"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## Interval Angle
- (summary) 
     Gets the start and end angles of revolution in radians. 
     The interval angle must be increasing and satisfy 
     RhinoMath.ZeroTolerance < Angle.Length<= 2.0 * System.Math.PI.
     
- (since) 6.0
## Line Axis
- (summary) 
     Gets the axis of revolution.
     
- (since) 6.0
## Curve Curve
- (summary) 
     Gets the revolute curve.
     
- (since) 6.0
# Methods
## static RevSurface Create(Curve revoluteCurve,Line axisOfRevolution)
- (summary) 
     Constructs a new surface of revolution from a generatrix curve and an axis.
     
- (since) 5.0
- (returns) RevSurface This is some return comment
## static RevSurface Create(Curve revoluteCurve,Line axisOfRevolution,double startAngleRadians,double endAngleRadians)
- (summary) 
     Constructs a new surface of revolution from a generatrix curve and an axis.
     This overload accepts a slice start and end angles.
- (since) 5.0
- (returns) RevSurface This is some return comment
## static RevSurface Create(Line revoluteLine,Line axisOfRevolution)
- (summary) 
     Constructs a new surface of revolution from a generatrix line and an axis.
     If the operation succeeds, results can be (truncated) cones, cylinders and circular hyperboloids.
- (since) 5.0
- (returns) RevSurface This is some return comment
## static RevSurface Create(Line revoluteLine,Line axisOfRevolution,double startAngleRadians,double endAngleRadians)
- (summary) 
     Constructs a new surface of revolution from a generatrix line and an axis.
     This overload accepts a slice start and end angles.Results can be (truncated) cones, cylinders and circular hyperboloids, or can fail.
- (since) 5.0
- (returns) RevSurface This is some return comment
## static RevSurface Create(Polyline revolutePolyline,Line axisOfRevolution)
- (summary) 
     Constructs a new surface of revolution from a generatrix polyline and an axis.
     
- (since) 5.0
- (returns) RevSurface This is some return comment
## static RevSurface Create(Polyline revolutePolyline,Line axisOfRevolution,double startAngleRadians,double endAngleRadians)
- (summary) 
     Constructs a new surface of revolution from a generatrix polyline and an axis.
     This overload accepts a slice start and end angles.
- (since) 5.0
- (returns) RevSurface This is some return comment
## static RevSurface CreateFromCone(Cone cone)
- (summary) 
     Constructs a new surface of revolution from the values of a cone.
     
- (since) 5.0
- (returns) RevSurface This is some return comment
## static RevSurface CreateFromCylinder(Cylinder cylinder)
- (summary) 
     Constructs a new surface of revolution from the values of a cylinder.
     
- (since) 5.0
- (returns) RevSurface This is some return comment
## static RevSurface CreateFromSphere(Sphere sphere)
- (summary) 
     Constructs a new surface of revolution from the values of a sphere.
     
- (since) 5.0
- (returns) RevSurface This is some return comment
## static RevSurface CreateFromTorus(Torus torus)
- (summary) 
     Constructs a new surface of revolution from the values of a torus.
     
- (since) 5.0
- (returns) RevSurface This is some return comment
