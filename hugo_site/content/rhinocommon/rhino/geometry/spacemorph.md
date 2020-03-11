---
title: "SpaceMorph"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a spacial, Euclidean morph.
```cs
public class SpaceMorph
```
## Properties

bool PreserveStructure
: True if the morph should be done in a way that preserves the structure of the geometry.
     In particular, for NURBS objects, True means that only the control points are moved.
     The PreserveStructure value does not affect the way meshes and points are morphed.
     The default is false.

bool QuickPreview
: True if the morph should be done as quickly as possible because the result
     is being used for some type of dynamic preview. If QuickPreview is true,
     the tolerance may be ignored.
     The QuickPreview value does not affect the way meshes and points are morphed.
     The default is false.

double Tolerance
: The desired accuracy of the morph. This value is primarily used for deforming
     surfaces and breps. The default is 0.0 and any value <= 0.0 is ignored by
     morphing functions. The Tolerance value does not affect the way meshes and points
     are morphed.
## Methods

static bool IsMorphable(GeometryBase geometry)
: True if the geometry can be morphed by calling SpaceMorph.Morph(geometry)

bool Morph(GeometryBase geometry)
: Apply the space morph to geometry.
: Returns - True on success, False on failure.

bool Morph(Plane plane)
: Apply the space morph to a plane.
: Returns - True on success, False on failure.
: since 6.0

[Point3d](/rhinocommon/rhino/geometry/point3d/) MorphPoint(Point3d point)
: Morphs an Euclidean point. This method is abstract.
: Returns - Resulting morphed point.
