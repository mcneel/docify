---
title: "SporphSpaceMorph"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Morphs](../)*

Deforms an object from a source surface to a target surface.
```cs
public class SporphSpaceMorph : Rhino.Geometry.SpaceMorph, IDisposable
```
## Constructors

SporphSpaceMorph(Surface surface0,Surface surface1)
: Constructs a sporph space morph.
: since 5.9

SporphSpaceMorph(Surface surface0,Surface surface1,Point2d surface0Param,Point2d surface1Param)
: Constructs a sporph space morph.
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
