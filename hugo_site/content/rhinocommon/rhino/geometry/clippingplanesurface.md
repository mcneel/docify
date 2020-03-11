---
title: "ClippingPlaneSurface"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a planar surface that is used as clipping plane in viewports.
   A clipping plane object maintains a list of viewports that it clips against.
```cs
[Serializable]
public class ClippingPlaneSurface : PlaneSurface
```
## Properties

[Plane](/rhinocommon/rhino/geometry/plane/) Plane
: Gets or sets the clipping plane.
## Methods

bool AddClipViewportId(Guid viewportId)
: Adds a viewport id to the list of viewports that this clipping plane clips.
: Returns - True if the viewport was added, False if the viewport is already in the list.
: since 6.1

bool RemoveClipViewportId(Guid viewportId)
: Removes a viewport id that this being clipped by this clipping plane.
: Returns - True if the viewport was removed, False if the viewport was not in the list.
: since 6.1

Guid[] ViewportIds()
: Returns the ids of RhinoViewport objects that are clipped by this clipping plane.
: Returns - The ids of RhinoViewport objects.
