---
title: "ClippingPlane"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render.ChangeQueue](../)*

ChangeQueue clipping plane
```cs
public class ClippingPlane
```
## Properties

[ObjectAttributes](/rhinocommon/rhino/docobjects/objectattributes/) Attributes
: Get the ClippingPlaneObject for this clipping plane
: since 6.0

Guid Id
: Get Guid for this clipping plane
: since 6.0

bool IsEnabled
: True if clipping plane is enabled
: since 6.0

[Plane](/rhinocommon/rhino/geometry/plane/) Plane
: Get the plane that represents this clipping plane
: since 6.0

List<Guid> ViewIds
: Get list of View IDs this clipping plane is supposed to clip.
: since 6.0
