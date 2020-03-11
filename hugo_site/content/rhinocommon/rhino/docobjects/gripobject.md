---
title: "GripObject"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

```cs
public class GripObject : RhinoObject
```
## Properties

[Point3d](/rhinocommon/rhino/geometry/point3d/) CurrentLocation
: 

int Index
: 

bool Moved
: True if the grip has moved from OriginalLocation.

[Point3d](/rhinocommon/rhino/geometry/point3d/) OriginalLocation
: 

Guid OwnerId
: 

double Weight
: The weight of a NURBS control point grip or RhinoMath.UnsetValue
     if the grip is not a NURBS control point grip.
## Methods

bool GetCageParameters(double u,double v,double w)
: Retrieves the 2d parameter space values of this GripObject from the cage it's associated with.
: Returns - True on success. Output is unreliable if return is false.
: since 6.0

bool GetCurveParameters(double t)
: Retrieves the 2d parameter space values of this GripObject from the curve it's associated with.
: Returns - True on success. Output is unreliable if return is false.
: since 6.0

bool GetGripDirections(Vector3d u,Vector3d v,Vector3d normal)
: Sometimes grips have directions.  These directions
     can have any length and do not have to be orthoganal.
: Returns - True if the grip has directions.
: since 6.0

bool GetSurfaceParameters(double u,double v)
: Retrieves the 2d parameter space values of this GripObject from the surface it's associated with.
: Returns - True on success. Output is unreliable if return is false.
: since 6.0

void Move(Point3d newLocation)
: Moves the grip to a new location.

void Move(Transform xform)
: Moves the grip to a new location.

void Move(Vector3d delta)
: Moves the grip to a new location.

GripObject NeighborGrip(int directionR,int directionS,int directionT,bool wrap)
: Used to get a grip's logical neighbors, like NURBS curve, suface,
     and cage control point grips.
: Returns - logical neighbor or None if the is no logical neighbor

void UndoMove()
: Undoes any grip moves made by calling Move.
