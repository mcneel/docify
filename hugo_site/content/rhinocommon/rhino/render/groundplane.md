---
title: "GroundPlane"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Represents an infinite plane for implementation by renderers.
   See SupportsFeature.
```cs
public class GroundPlane : DocumentOrFreeFloatingBase
```
## Constructors

GroundPlane()
: Create an utility object not associated with any document
: since 6.0

GroundPlane(GroundPlane g)
: Create an utility object not associated with any document from another object
: since 6.0
## Events

static Changed
: This event is raised when a GroundPlane property value is changed.
: since 5.10
## Properties

double Altitude
: Height above world XY plane in model units.

bool AutoAltitude
: Determines whether the ground plane is fixed by the Altitude property, or whether it is automatically placed at the lowest point in the model.
: since 6.0

bool Enabled
: Determines whether the document ground plane is enabled.

Guid MaterialInstanceId
: Id of material in material table for this ground plane.

bool ShadowOnly
: Determines whether the ground plane shows the material assigned, or whether it is transparent, but captures shadows.
: since 6.0

bool ShowUnderside
: If this is off, the ground plane will not be visible when seen from below.
: since 6.0

[Vector2d](/rhinocommon/rhino/geometry/vector2d/) TextureOffset
: Texture mapping offset in world units.

bool TextureOffsetLocked
: Texture offset locked.
: since 6.0

double TextureRotation
: Texture mapping rotation around world origin + offset in degrees.

[Vector2d](/rhinocommon/rhino/geometry/vector2d/) TextureSize
: Texture mapping single UV span size in world units.

bool TextureSizeLocked
: Texture size locked.
: since 6.0
## Methods

void CopyFrom(FreeFloatingBase src)
: 
: since 6.0
