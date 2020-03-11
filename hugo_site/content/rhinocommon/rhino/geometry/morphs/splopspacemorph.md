---
title: "SplopSpaceMorph"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Morphs](../)*

Rotates, scales, and wraps objects on a surface.
```cs
public class SplopSpaceMorph : Rhino.Geometry.SpaceMorph, IDisposable
```
## Constructors

SplopSpaceMorph(Plane plane,Surface surface,Point2d surfaceParam)
: Constructs a flow space morph.
: since 5.9

SplopSpaceMorph(Plane plane,Surface surface,Point2d surfaceParam,double scale)
: Constructs a flow space morph.
: since 5.9

SplopSpaceMorph(Plane plane,Surface surface,Point2d surfaceParam,double scale,double angle)
: Constructs a flow space morph.
: since 5.9
## Properties

bool IsValid
: Returns True if the space morph definition is valid, False otherwise.
: since 5.9
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 5.9

[Point3d](/rhinocommon/rhino/geometry/point3d/) MorphPoint(Point3d point)
: Morphs an Euclidean point.
: Returns - Resulting morphed point.
: since 5.9
