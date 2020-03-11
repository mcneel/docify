---
title: "MaelstromSpaceMorph"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Morphs](../)*

Deforms objects in a spiral as if they were caught in a whirlpool.
```cs
public class MaelstromSpaceMorph : Rhino.Geometry.SpaceMorph, IDisposable
```
## Constructors

MaelstromSpaceMorph(Plane plane,double radius0,double radius1,double angle)
: Constructs a maelstrom space morph.
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
