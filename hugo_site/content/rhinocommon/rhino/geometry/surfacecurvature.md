---
title: "SurfaceCurvature"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Maintains computed information for surface curvature evaluation.
```cs
public class SurfaceCurvature
```
## Properties

double Gaussian
: Gets the Gaussian curvature value at UV.

double Mean
: Gets the Mean curvature value at UV.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Normal
: Gets the surface normal at UV.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Point
: Gets the surface point at UV.

[Point2d](/rhinocommon/rhino/geometry/point2d/) UVPoint
: Gets the UV location where the curvature was computed.
## Methods

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Direction(int direction)
: Gets the principal curvature direction vector.
: Returns - The specified direction vector.

double Kappa(int direction)
: Gets the Kappa curvature value.
: Returns - The specified kappa value.

[Circle](/rhinocommon/rhino/geometry/circle/) OsculatingCircle(int direction)
: Computes the osculating circle along the given direction.
: Returns - The osculating circle in the given direction or Circle.Unset on failure.
