---
title: "ClippingPlaneObject"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Represents the object of a clipping plane,
   stored in the Rhino document and with attributes.
```cs
public class ClippingPlaneObject : RhinoObject
```
## Properties

[ClippingPlaneSurface](/rhinocommon/rhino/geometry/clippingplanesurface/) ClippingPlaneGeometry
: Gets the clipping plane surface.
## Methods

bool AddClipViewport(RhinoViewport viewport,bool commit)
: Adds a viewport to the list of viewports that this clipping plane clips.
: Returns - True if the viewport was added, False if the viewport is already in the list.
: since 6.1

bool RemoveClipViewport(RhinoViewport viewport,bool commit)
: Removes a viewport from the list of viewports that this clipping plane clips.
: Returns - True if the viewport was removed, False if the viewport was not in the list.
: since 6.1
