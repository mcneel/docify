---
title: "Rhino.Render.TextureMapping"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## ModelComponentType ComponentType
- (summary) 
     Returns .
     
- (since) 6.0
## Guid Id
- (summary) 
     The unique Id for this texture mapping object.
     
- (since) 5.10
## TextureMappingType MappingType
- (summary) 
     Texture mapping type associated with this Mapping object.
     
- (since) 5.10
## Transform NormalTransform
- (summary) 
     For primitive based mappings, these transformations are used to map
     the world coordinate (x,y,z) point P and  surface normal N before it is
     projected to the normalized mapping primitive. The surface normal
     transformation, m_Nxyz, is always calculated from m_Pxyz.  It is a
     runtime setting that is not saved in 3dm files. If m_type is
     srfp_mapping, then m_Pxyz and m_Nxyz are ignored.
     
- (since) 5.10
## Transform PrimativeTransform
- (summary) 
     For primitive based mappings, these transformations are used to map
     the world coordinate (x,y,z) point P and  surface normal N before it is
     projected to the normalized mapping primitive. The surface normal
     transformation, m_Nxyz, is always calculated from m_Pxyz.  It is a
     runtime setting that is not saved in 3dm files. If m_type is
     srfp_mapping, then m_Pxyz and m_Nxyz are ignored.
     
- (since) 5.10
## Transform UvwTransform
- (summary) 
     Transform applied to mapping coordinate (u,v,w) to convert it into a
     texture coordinate.
     
- (since) 5.10
# Methods
## static TextureMapping CreateBoxMapping(Plane plane,Interval dx,Interval dy,Interval dz,bool capped)
- (summary) Create a box projection texture mapping.
- (since) 5.0
- (returns) TextureMapping This is some return comment
## static TextureMapping CreateCustomMeshMapping(Mesh mesh)
- (summary) 
     Create custom mesh mapping
     
- (since) 6.15
- (returns) TextureMapping This is some return comment
## static TextureMapping CreateCylinderMapping(Cylinder cylinder,bool capped)
- (summary) Create a cylindrical projection texture mapping.
- (since) 5.0
- (returns) TextureMapping This is some return comment
## static TextureMapping CreatePlaneMapping(Plane plane,Interval dx,Interval dy,Interval dz)
- (summary) Create a planar UV projection texture mapping
- (since) 5.0
- (returns) TextureMapping This is some return comment
## static TextureMapping CreatePlaneMapping(Plane plane,Interval dx,Interval dy,Interval dz,bool capped)
- (summary) Create a planar projection texture mapping
- (since) 6.7
- (returns) TextureMapping This is some return comment
## static TextureMapping CreateSphereMapping(Sphere sphere)
- (summary) 
     Create a spherical projection texture mapping.
     
- (since) 5.0
- (returns) TextureMapping This is some return comment
## int Evaluate(Point3d p,Vector3d n,Point3d t)
- (summary) 
     Evaluate the mapping to get a texture coordinate
     
- (since) 6.17
- (returns) int This is some return comment
## int Evaluate(Point3d p,Vector3d n,Point3d t,Transform pXform,Transform nXform)
- (summary) 
     Evaluate the mapping to get a texture coordinate
     
- (since) 6.17
- (returns) int This is some return comment
## bool TryGetMappingBox(Plane plane,Interval dx,Interval dy,Interval dz)
- (summary) 
     Get a box projection from the texture mapping.
     
- (since) 5.10
- (returns) bool This is some return comment
## bool TryGetMappingBox(Plane plane,Interval dx,Interval dy,Interval dz,bool capped)
- (summary) 
     Get a box projection from the texture mapping, including capped information
     
- (since) 6.7
- (returns) bool This is some return comment
## bool TryGetMappingCylinder(Cylinder cylinder)
- (summary) 
     Get a cylindrical projection parameters from this texture mapping.
     
- (since) 5.10
- (returns) bool This is some return comment
## bool TryGetMappingCylinder(Cylinder cylinder,bool capped)
- (summary) 
     Get a cylindrical projection parameters from this texture mapping.
     
- (since) 6.7
- (returns) bool This is some return comment
## bool TryGetMappingMesh(Mesh mesh)
- (summary) 
     Get custom mapping mesh from this texture mapping.
     
- (since) 6.18
- (returns) bool This is some return comment
## bool TryGetMappingPlane(Plane plane,Interval dx,Interval dy,Interval dz)
- (summary) 
     Get plane mapping parameters from this texture mapping.
     
- (since) 5.10
- (returns) bool This is some return comment
## bool TryGetMappingPlane(Plane plane,Interval dx,Interval dy,Interval dz,bool capped)
- (summary) 
     Get plane mapping parameters from this texture mapping, including capping information
     
- (since) 6.7
- (returns) bool This is some return comment
## bool TryGetMappingSphere(Sphere sphere)
- (summary) 
     Get a spherical projection parameters from this texture mapping.
     
- (since) 5.10
- (returns) bool This is some return comment
