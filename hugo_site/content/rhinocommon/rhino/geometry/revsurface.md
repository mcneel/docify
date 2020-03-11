---
title: "RevSurface"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a surface of revolution.
   Revolutions can be incomplete (they can form arcs).
```cs
[Serializable]
public class RevSurface : Surface
```
## Properties

[Interval](/rhinocommon/rhino/geometry/interval/) Angle
: Gets the start and end angles of revolution in radians. 
     The interval angle must be increasing and satisfy 
     RhinoMath.ZeroTolerance < Angle.Length<= 2.0 * System.Math.PI.
: since 6.0

[Line](/rhinocommon/rhino/geometry/line/) Axis
: Gets the axis of revolution.
: since 6.0

[Curve](/rhinocommon/rhino/geometry/curve/) Curve
: Gets the revolute curve.
: since 6.0
## Methods

static RevSurface Create(Curve revoluteCurve,Line axisOfRevolution)
: Constructs a new surface of revolution from a generatrix curve and an axis.
: Returns - A new surface of revolution, or None if any of the inputs is invalid or on error.

static RevSurface Create(Curve revoluteCurve,Line axisOfRevolution,double startAngleRadians,double endAngleRadians)
: Constructs a new surface of revolution from a generatrix curve and an axis.
     This overload accepts a slice start and end angles.
: Returns - A new surface of revolution, or None if any of the inputs is invalid or on error.

static RevSurface Create(Line revoluteLine,Line axisOfRevolution)
: Constructs a new surface of revolution from a generatrix line and an axis.
     If the operation succeeds, results can be (truncated) cones, cylinders and circular hyperboloids.
: Returns - A new surface of revolution, or None if any of the inputs is invalid or on error.

static RevSurface Create(Line revoluteLine,Line axisOfRevolution,double startAngleRadians,double endAngleRadians)
: Constructs a new surface of revolution from a generatrix line and an axis.
     This overload accepts a slice start and end angles.Results can be (truncated) cones, cylinders and circular hyperboloids, or can fail.
: Returns - A new surface of revolution, or None if any of the inputs is invalid or on error.

static RevSurface Create(Polyline revolutePolyline,Line axisOfRevolution)
: Constructs a new surface of revolution from a generatrix polyline and an axis.
: Returns - A new surface of revolution, or None if any of the inputs is invalid or on error.

static RevSurface Create(Polyline revolutePolyline,Line axisOfRevolution,double startAngleRadians,double endAngleRadians)
: Constructs a new surface of revolution from a generatrix polyline and an axis.
     This overload accepts a slice start and end angles.
: Returns - A new surface of revolution, or None if any of the inputs is invalid or on error.

static RevSurface CreateFromCone(Cone cone)
: Constructs a new surface of revolution from the values of a cone.
: Returns - A new surface of revolution, or None if any of the inputs is invalid or on error.

static RevSurface CreateFromCylinder(Cylinder cylinder)
: Constructs a new surface of revolution from the values of a cylinder.
: Returns - A new surface of revolution, or None if any of the inputs is invalid or on error.

static RevSurface CreateFromSphere(Sphere sphere)
: Constructs a new surface of revolution from the values of a sphere.
: Returns - A new surface of revolution, or None if any of the inputs is invalid or on error.

static RevSurface CreateFromTorus(Torus torus)
: Constructs a new surface of revolution from the values of a torus.
: Returns - A new surface of revolution, or None if any of the inputs is invalid or on error.
