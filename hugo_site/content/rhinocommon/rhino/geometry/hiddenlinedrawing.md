---
title: "HiddenLineDrawing"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a hidden line drawing object.
   A hidden line drawing consists of curves generated from source objects.
   The curves correspond to edges, and silhouettes of  source objects and
   intersections with cutting planes.
```cs
public class HiddenLineDrawing : IDisposable
```
## Properties

IEnumerable<HiddenLineDrawingPoint> Points
: Point objects calculated by the hidden line drawing.
: since 6.8

IEnumerable<HiddenLineDrawingSegment> Segments
: Subcurve objects calculated by the hidden line drawing.
: since 6.0

[ViewportInfo](/rhinocommon/rhino/docobjects/viewportinfo/) Viewport
: Returns the ViewportInfo used by the hidden line drawing.
: Returns - The ViewportInfo
: since 6.0

[Transform](/rhinocommon/rhino/geometry/transform/) WorldToHiddenLine
: Returns the world-coordinate system to HLD-coordinate system transformation.
: since 6.0
## Methods

static HiddenLineDrawing Compute(HiddenLineDrawingParameters parameters,bool multipleThreads)
: Perform the hidden line drawing calculation based on input parameters
: Returns - Results of calculation on success, None on failure
: since 6.0

static HiddenLineDrawing Compute(HiddenLineDrawingParameters parameters,bool multipleThreads,IProgress<double> progress,CancellationToken cancelToken)
: Perform the hidden line drawing calculation based on input parameters
: Returns - Results of calculation on success, None on failure or cancellation
: since 6.0

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox(bool includeHidden)
: Get tight bounding box of the hidden line drawing.
: Returns - The tight bounding box.
: since 6.0

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 6.0
