---
title: "Rhino.Render.GroundPlane"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Render.GroundPlane()
- (summary) 
     Create an utility object not associated with any document
     
- (since) 6.0
## Rhino.Render.GroundPlane(GroundPlane g)
- (summary) 
     Create an utility object not associated with any document from another object
     
- (since) 6.0
# Events
## static Changed
- (summary) 
     This event is raised when a GroundPlane property value is changed.
     
- (since) 5.10
# Properties
## double Altitude
- (summary) 
     Height above world XY plane in model units.
     
- (since) 5.0
## bool AutoAltitude
- (summary) 
     Determines whether the ground plane is fixed by the Altitude property, or whether it is automatically placed at the lowest point in the model.
     
- (since) 6.0
## bool Enabled
- (summary) 
     Determines whether the document ground plane is enabled.
     
- (since) 5.0
## Guid MaterialInstanceId
- (summary) 
     Id of material in material table for this ground plane.
     
- (since) 5.0
## bool ShadowOnly
- (summary) 
     Determines whether the ground plane shows the material assigned, or whether it is transparent, but captures shadows.
     
- (since) 6.0
## bool ShowUnderside
- (summary) 
     If this is off, the ground plane will not be visible when seen from below.
     
- (since) 6.0
## Rhino.Geometry.Vector2d TextureOffset
- (summary) 
     Texture mapping offset in world units.
     
- (since) 5.0
## bool TextureOffsetLocked
- (summary) 
     Texture offset locked.
     
- (since) 6.0
## double TextureRotation
- (summary) 
     Texture mapping rotation around world origin + offset in degrees.
     
- (since) 5.0
## Rhino.Geometry.Vector2d TextureSize
- (summary) 
     Texture mapping single UV span size in world units.
     
- (since) 5.0
## bool TextureSizeLocked
- (summary) 
     Texture size locked.
     
- (since) 6.0
# Methods
## void CopyFrom(FreeFloatingBase src)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
