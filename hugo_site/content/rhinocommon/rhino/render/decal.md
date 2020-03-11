---
title: "Decal"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Represents a decal, or a picture that can be moved on an object.
```cs
public class Decal : IDisposable
```
## Properties

int CRC
: The decal CRC identifies a decal by its state. Multiple decals which would be
     exactly the same would have the same CRC and are culled from the system.
     If you store this value with the intention of using it to find the decal again
     later, you must update your stored value whenever the decal state changes.
     You can detect when a decal changes by watching for the OnUserDataTransformed event.
: since 6.0

[DecalMapping](/rhinocommon/rhino/render/decalmapping/) DecalMapping
: Gets the mapping of the decal.
: since 5.10

[DecalProjection](/rhinocommon/rhino/render/decalprojection/) DecalProjection
: Gets the decal's projection. Used only when mapping is planar.
: since 5.10

double EndLatitude
: Gets the end angle of the decal's arc of latitude or 'horizontal sweep'. This is actually a LONGITUDINAL angle. Only used when mapping is cylindrical or spherical.
: since 5.10

double EndLongitude
: Gets the end angle of the decal's arc of longitude or 'vertical sweep'. This is actually a LATITUDINAL angle. Only used when mapping is spherical.
: since 5.10

double Height
: Gets the height of the decal. Only used when mapping is cylindrical.
: since 5.10

bool MapToInside
: Used only when mapping is cylindrical or spherical.
: since 5.10

[Point3d](/rhinocommon/rhino/geometry/point3d/) Origin
: Gets the origin of the decal in world space.
: since 5.10

double Radius
: Gets the radius of the decal. Only used when mapping is cylindrical or spherical.
: since 5.10

double StartLatitude
: Gets the start angle of the decal's arc of latitude or 'horizontal sweep'. This is actually a LONGITUDINAL angle. Only used when mapping is cylindrical or spherical.
: since 5.10

double StartLongitude
: Gets the start angle of the decal's arc of longitude or 'vertical sweep'. This is actually a LATITUDINAL angle. Only used when mapping is spherical.
: since 5.10

Guid TextureInstanceId
: Gets the texture ID for this decal.
: since 5.10

double Transparency
: Gets the decal's transparency in the range 0 to 1.
: since 5.10

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) VectorAcross
: Gets the vector across. For cylindrical and spherical mapping, the vector is unitized.
: since 5.10

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) VectorUp
: For cylindrical and spherical mapping, the vector is unitized.
: Returns - The 'up' vector of the decal. For planar mapping the length of the vector is relevant.
: since 5.10
## Methods

static Decal Create(DecalCreateParams createParams)
: 
: since 5.10

IntPtr ConstPointer()
: 
: since 5.10

List<Rhino.Render.NamedValue> CustomData()
: Gets custom data associated with this decal - see Rhino.Plugins.RenderPlugIn.ShowDecalProperties.
: Returns - The return value can be None if there is no data associated with this decal.
: since 6.0

void Dispose()
: 
: since 5.10

void Dispose(bool isDisposing)
: 
: since 5.10

IntPtr NonConstPointer()
: 
: since 5.10

bool TryGetColor(Point3d point,Vector3d normal,Color4f colInOut,Point2d uvOut)
: Blend color with the decal color at a given point.
: Returns - True if the given point hits the decal, else false.
: since 5.10

void UVBounds(double minUOut,double minVOut,double maxUOut,double maxVOut)
: The UV bounds of the decal. Only used when mapping is UV.
: since 5.10
