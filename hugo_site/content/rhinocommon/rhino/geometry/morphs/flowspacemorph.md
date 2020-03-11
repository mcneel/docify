---
title: "FlowSpaceMorph"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Morphs](../)*

Re-aligns objects from a base curve to a target curve.
```cs
public class FlowSpaceMorph : Rhino.Geometry.SpaceMorph, IDisposable
```
## Constructors

FlowSpaceMorph(Curve curve0,Curve curve1,bool preventStretching)
: Constructs a flow space morph.
: since 5.9

FlowSpaceMorph(Curve curve0,Curve curve1,bool reverseCurve0,bool reverseCurve1,bool preventStretching)
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
