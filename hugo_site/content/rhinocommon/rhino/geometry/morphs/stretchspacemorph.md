---
title: "StretchSpaceMorph"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Morphs](../)*

Deforms objects toward or away from a specified axis.
```cs
public class StretchSpaceMorph : Rhino.Geometry.SpaceMorph, IDisposable
```
## Constructors

StretchSpaceMorph(Point3d start,Point3d end,double length)
: Constructs a stretch space morph.
: since 5.9

StretchSpaceMorph(Point3d start,Point3d end,Point3d point)
: Constructs a stretch space morph.
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
