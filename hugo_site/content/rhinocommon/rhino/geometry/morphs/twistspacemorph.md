---
title: "TwistSpaceMorph"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Morphs](../)*

Deforms objects by rotating them around an axis.
```cs
public class TwistSpaceMorph : Rhino.Geometry.SpaceMorph, IDisposable
```
## Constructors

TwistSpaceMorph()
: Constructs a twist space morph.
: since 5.1
## Properties

bool InfiniteTwist
: If true, the deformation is constant throughout the object, even if the axis is shorter than the object. 
     If false, the deformation takes place only the length of the axis.
: since 5.1

double TwistAngleRadians
: Twist angle in radians.
: since 5.1

[Line](/rhinocommon/rhino/geometry/line/) TwistAxis
: Axis to rotate about.
: since 5.1
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 5.1

[Point3d](/rhinocommon/rhino/geometry/point3d/) MorphPoint(Point3d point)
: Morphs an Euclidean point. This method is abstract.
: Returns - Resulting morphed point.
: since 5.1
