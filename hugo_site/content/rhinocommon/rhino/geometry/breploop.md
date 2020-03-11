---
title: "BrepLoop"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represent a single loop in a Brep object. A loop is composed
   of a list of trim curves.
```cs
public class BrepLoop : GeometryBase
```
## Properties

[Brep](/rhinocommon/rhino/geometry/brep/) Brep
: Gets the Brep that owns this loop.

[BrepFace](/rhinocommon/rhino/geometry/brepface/) Face
: BrepFace this loop belongs to.

int LoopIndex
: Gets the index of this loop in the Brep.Loops collection.

[BrepLoopType](/rhinocommon/rhino/geometry/breplooptype/) LoopType
: type of loop.

[BrepTrimList](/rhinocommon/rhino/geometry/collections/breptrimlist/) Trims
: List of trims for this loop
: since 5.1
## Methods

[Curve](/rhinocommon/rhino/geometry/curve/) To2dCurve()
: Create a 2d curve that traces the entire loop
: since 5.1

[Curve](/rhinocommon/rhino/geometry/curve/) To3dCurve()
: Create a 3D curve that approximates the loop geometry.
: Returns - A 3D curve that approximates the loop or None on failure.
