---
title: "HiddenLineDrawingPoint"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Points generated from source objects which coorespond to point and point cloud source objects.
```cs
public class HiddenLineDrawingPoint
```
## Properties

int ClippingPlaneIndex
: Index into HiddenLineDrawing.ClippingPlanes when SilhouetteType == SilhouetteType.SectionCut.
: since 6.8

int Index
: Index of this object in HiddenLineDrawing.Points.
: since 6.8

[Point3d](/rhinocommon/rhino/geometry/point3d/) Location
: Returns the location of this object in HiddenLineDrawing coordinates.
: since 6.8

[Visibility](/rhinocommon/rhino/geometry/hiddenlinedrawingpoint/visibility/) PointVisibility
: Returns the point's visibility
: since 6.8

[HiddenLineDrawingObject](/rhinocommon/rhino/geometry/hiddenlinedrawingobject/) SourceObject
: Return the source object that this point came from.
: since 6.8

[ComponentIndex](/rhinocommon/rhino/geometry/componentindex/) SourceObjectComponentIndex
: Component of source object part that generated this curve.
: since 6.8
