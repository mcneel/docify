---
title: "Rhino.Render.Decal"
draft: false
---

# Properties
## int CRC
- (summary) 
     The decal CRC identifies a decal by its state. Multiple decals which would be
     exactly the same would have the same CRC and are culled from the system.
     If you store this value with the intention of using it to find the decal again
     later, you must update your stored value whenever the decal state changes.
     You can detect when a decal changes by watching for the OnUserDataTransformed event.
     
- (since) 6.0
## DecalMapping DecalMapping
- (summary) 
     Gets the mapping of the decal.
     
- (since) 5.10
## DecalProjection DecalProjection
- (summary) 
     Gets the decal's projection. Used only when mapping is planar.
     
- (since) 5.10
## double EndLatitude
- (summary) 
     Gets the end angle of the decal's arc of latitude or 'horizontal sweep'. This is actually a LONGITUDINAL angle. Only used when mapping is cylindrical or spherical.
     
- (since) 5.10
## double EndLongitude
- (summary) 
     Gets the end angle of the decal's arc of longitude or 'vertical sweep'. This is actually a LATITUDINAL angle. Only used when mapping is spherical.
     
- (since) 5.10
## double Height
- (summary) 
     Gets the height of the decal. Only used when mapping is cylindrical.
     
- (since) 5.10
## bool MapToInside
- (summary) 
     Used only when mapping is cylindrical or spherical.
     
- (since) 5.10
## Rhino.Geometry.Point3d Origin
- (summary) 
     Gets the origin of the decal in world space.
     
- (since) 5.10
## double Radius
- (summary) 
     Gets the radius of the decal. Only used when mapping is cylindrical or spherical.
     
- (since) 5.10
## double StartLatitude
- (summary) 
     Gets the start angle of the decal's arc of latitude or 'horizontal sweep'. This is actually a LONGITUDINAL angle. Only used when mapping is cylindrical or spherical.
     
- (since) 5.10
## double StartLongitude
- (summary) 
     Gets the start angle of the decal's arc of longitude or 'vertical sweep'. This is actually a LATITUDINAL angle. Only used when mapping is spherical.
     
- (since) 5.10
## Guid TextureInstanceId
- (summary) 
     Gets the texture ID for this decal.
     
- (since) 5.10
## double Transparency
- (summary) 
     Gets the decal's transparency in the range 0 to 1.
     
- (since) 5.10
## Rhino.Geometry.Vector3d VectorAcross
- (summary) 
     Gets the vector across. For cylindrical and spherical mapping, the vector is unitized.
     
- (since) 5.10
## Rhino.Geometry.Vector3d VectorUp
- (summary) 
     For cylindrical and spherical mapping, the vector is unitized.
     
- (since) 5.10
# Methods
## static Decal Create(DecalCreateParams createParams)
- (summary) 
- (since) 5.10
- (returns) Decal This is some return comment
## IntPtr ConstPointer()
- (summary) 
- (since) 5.10
- (returns) IntPtr This is some return comment
## List<Rhino.Render.NamedValue> CustomData()
- (summary) 
     Gets custom data associated with this decal - see Rhino.Plugins.RenderPlugIn.ShowDecalProperties.
     
- (since) 6.0
- (returns) List<Rhino.Render.NamedValue> This is some return comment
## void Dispose()
- (summary) 
- (since) 5.10
- (returns) void This is some return comment
## void Dispose(bool isDisposing)
- (summary) 
- (since) 5.10
- (returns) void This is some return comment
## IntPtr NonConstPointer()
- (summary) 
- (since) 5.10
- (returns) IntPtr This is some return comment
## bool TryGetColor(Point3d point,Vector3d normal,Color4f colInOut,Point2d uvOut)
- (summary) 
     Blend color with the decal color at a given point.
     
- (since) 5.10
- (returns) bool This is some return comment
## void UVBounds(double minUOut,double minVOut,double maxUOut,double maxVOut)
- (summary) 
     The UV bounds of the decal. Only used when mapping is UV.
     
- (since) 5.10
- (returns) void This is some return comment
