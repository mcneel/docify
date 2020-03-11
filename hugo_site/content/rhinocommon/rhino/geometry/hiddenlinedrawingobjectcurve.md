---
title: "HiddenLineDrawingObjectCurve"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Curves generated from source objects which correspond to edges, and
   silhouettes of source objects and intersections with cutting planes. A
   HiddenLineDrawingObjectCurve is partitioned into hidden and visible
   segments called HiddenLineDrawingSegment
```cs
public class HiddenLineDrawingObjectCurve
```
## Properties

int ClippingPlaneIndex
: Index into HiddenLineDrawing.ClippingPlanes when SilhouetteType == SilhouetteType.SectionCut.
: since 6.0

int Index
: Index of this object in HiddenLineDrawing.FullCurves.
: since 6.0

bool IsProjecting
: Returns True if all the non clipped portions of this curve are projecting.
: since 6.0

bool IsValid
: Verifies the object is valid.
: since 6.0

double OriginalDomainStart
: Initialized to RhinoMath.UnsetValue. Valid if the full curve is closed.
     Rejoin can reparmeterize the curve by moving the seam.  When this has been
      done the original domain start is stored here.
: since 6.0

double[] Parameters
: Increasing, partition of curve.Domain.
: since 6.0

[HiddenLineDrawingSegment](/rhinocommon/rhino/geometry/hiddenlinedrawingsegment/)[] Segments
: The HiddenLineDrawingCurve objects that make up this full curve.
: since 6.0

[SilhouetteType](/rhinocommon/rhino/geometry/silhouettetype/) SilhouetteType
: The silhouette event type
: since 6.0

[HiddenLineDrawingObject](/rhinocommon/rhino/geometry/hiddenlinedrawingobject/) SourceObject
: Return the source object that this curve came from
: since 6.0

[ComponentIndex](/rhinocommon/rhino/geometry/componentindex/) SourceObjectComponentIndex
: Component of source object part that generated this curve.
: since 6.0
## Methods

[HiddenLineDrawingSegment](/rhinocommon/rhino/geometry/hiddenlinedrawingsegment/) Curve(double t)
: Returns the HiddenLineDrawingCurve object containing parameter 't'.
: Returns - The HiddenLineDrawingCurve object if successful.
: since 6.0

[HiddenLineDrawingSegment](/rhinocommon/rhino/geometry/hiddenlinedrawingsegment/) Curve(double t,int side)
: Returns the HiddenLineDrawingCurve object containing parameter 't'.
: Returns - The HiddenLineDrawingCurve object if successful.
: since 6.0
