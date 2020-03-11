---
title: "TextureMapping"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Represents a texture mapping.
```cs
public class TextureMapping : ModelComponent
```
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.0

Guid Id
: The unique Id for this texture mapping object.
: since 5.10

[TextureMappingType](/rhinocommon/rhino/render/texturemappingtype/) MappingType
: Texture mapping type associated with this Mapping object.
: since 5.10

[Transform](/rhinocommon/rhino/geometry/transform/) NormalTransform
: For primitive based mappings, these transformations are used to map
     the world coordinate (x,y,z) point P and  surface normal N before it is
     projected to the normalized mapping primitive. The surface normal
     transformation, m_Nxyz, is always calculated from m_Pxyz.  It is a
     runtime setting that is not saved in 3dm files. If m_type is
     srfp_mapping, then m_Pxyz and m_Nxyz are ignored.
: since 5.10

[Transform](/rhinocommon/rhino/geometry/transform/) PrimativeTransform
: For primitive based mappings, these transformations are used to map
     the world coordinate (x,y,z) point P and  surface normal N before it is
     projected to the normalized mapping primitive. The surface normal
     transformation, m_Nxyz, is always calculated from m_Pxyz.  It is a
     runtime setting that is not saved in 3dm files. If m_type is
     srfp_mapping, then m_Pxyz and m_Nxyz are ignored.
: since 5.10

[Transform](/rhinocommon/rhino/geometry/transform/) UvwTransform
: Transform applied to mapping coordinate (u,v,w) to convert it into a
     texture coordinate.
: since 5.10
## Methods

static TextureMapping CreateBoxMapping(Plane plane,Interval dx,Interval dy,Interval dz,bool capped)
: Create a box projection texture mapping.
: Returns - TextureMapping instance if input is valid

static TextureMapping CreateCustomMeshMapping(Mesh mesh)
: Create custom mesh mapping
: Returns - TextureMapping instance
: since 6.15

static TextureMapping CreateCylinderMapping(Cylinder cylinder,bool capped)
: Create a cylindrical projection texture mapping.
: Returns - TextureMapping instance if input is valid

static TextureMapping CreatePlaneMapping(Plane plane,Interval dx,Interval dy,Interval dz)
: Create a planar UV projection texture mapping
: Returns - TextureMapping instance if input is valid

static TextureMapping CreatePlaneMapping(Plane plane,Interval dx,Interval dy,Interval dz,bool capped)
: Create a planar projection texture mapping
: Returns - TextureMapping instance if input is valid
: since 6.7

static TextureMapping CreateSphereMapping(Sphere sphere)
: Create a spherical projection texture mapping.
: Returns - TextureMapping instance if input is valid

int Evaluate(Point3d p,Vector3d n,Point3d t)
: Evaluate the mapping to get a texture coordinate
: Returns - Nonzero if evaluation is successful.  When the mapping is a box or
     capped cylinder mapping, the value indicates which side was evaluated.
     Cylinder mapping: 1 = cylinder wall, 2 = bottom cap, 3 = top cap
     Box mapping: 1 = front, 2 = right, 3 = back, 4 = left, 5 = bottom, 6 = top
: since 6.17

int Evaluate(Point3d p,Vector3d n,Point3d t,Transform pXform,Transform nXform)
: Evaluate the mapping to get a texture coordinate
: Returns - Nonzero if evaluation is successful.  When the mapping is a box or
     capped cylinder mapping, the value indicates which side was evaluated.
     Cylinder mapping: 1 = cylinder wall, 2 = bottom cap, 3 = top cap
     Box mapping: 1 = front, 2 = right, 3 = back, 4 = left, 5 = bottom, 6 = top
: since 6.17

bool TryGetMappingBox(Plane plane,Interval dx,Interval dy,Interval dz)
: Get a box projection from the texture mapping.
: Returns - Returns True if a valid box is returned.
: since 5.10

bool TryGetMappingBox(Plane plane,Interval dx,Interval dy,Interval dz,bool capped)
: Get a box projection from the texture mapping, including capped information
: Returns - Returns True if a valid box is returned.
: since 6.7

bool TryGetMappingCylinder(Cylinder cylinder)
: Get a cylindrical projection parameters from this texture mapping.
: Returns - Returns True if a valid cylinder is returned.
: since 5.10

bool TryGetMappingCylinder(Cylinder cylinder,bool capped)
: Get a cylindrical projection parameters from this texture mapping.
: Returns - Returns True if a valid cylinder is returned.
: since 6.7

bool TryGetMappingMesh(Mesh mesh)
: Get custom mapping mesh from this texture mapping.
: Returns - True if custom mapping mesh was returned.
: since 6.18

bool TryGetMappingPlane(Plane plane,Interval dx,Interval dy,Interval dz)
: Get plane mapping parameters from this texture mapping.
: Returns - Return True if valid plane mapping parameters were returned.
: since 5.10

bool TryGetMappingPlane(Plane plane,Interval dx,Interval dy,Interval dz,bool capped)
: Get plane mapping parameters from this texture mapping, including capping information
: Returns - Return True if valid plane mapping parameters were returned.
: since 6.7

bool TryGetMappingSphere(Sphere sphere)
: Get a spherical projection parameters from this texture mapping.
: Returns - Returns True if a valid sphere is returned.
: since 5.10
