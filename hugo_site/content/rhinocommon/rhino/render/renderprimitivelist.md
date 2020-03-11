---
title: "RenderPrimitiveList"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class RenderPrimitiveList : IDisposable
```
## Properties

int Count
: Number of meshes in this list
: since 5.7

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/) RhinoObject
: The Rhino object associated with this list
: since 5.7

bool UseObjectsMappingChannels
: Returns True if the texture mapping will be taken from the Rhino
     object otherwise; the texture mapping will use the texture coordinates
     on the mesh only.
: since 5.7
## Methods

void Add(Box box,RenderMaterial material)
: Add primitive box and material.
: since 5.7

void Add(Cone cone,Plane truncation,RenderMaterial material)
: Add primitive cone and material.
: since 5.7

void Add(Mesh mesh,RenderMaterial material)
: Add mesh and material.
: since 5.7

void Add(Mesh mesh,RenderMaterial material,Transform t)
: Add mesh and material.
: since 6.12

void Add(PlaneSurface plane,RenderMaterial material)
: Add primitive plane and material.
: since 5.7

void Add(Sphere sphere,RenderMaterial material)
: Add primitive sphere and material.
: since 5.7

bool AutoDeleteMaterialsOn()
: 
: since 6.0

bool AutoDeleteMeshesOn()
: 
: since 6.0

void Clear()
: Remove all primitives from this list
: since 5.7

void ConvertMeshesToTriangles()
: Convert mesh quad faces to triangle faces.
: since 5.7

void Dispose()
: 
: since 5.7

[Transform](/rhinocommon/rhino/geometry/transform/) GetInstanceTransform(int index)
: 
: since 6.0

[RenderMaterial](/rhinocommon/rhino/render/rendermaterial/) Material(int index)
: Call this method to get the render material associated with the mesh at
     the specified index.  Will return None if there is no
     material associated with the requested mesh.
: Returns - If there is a render material associated at the requested index then
     the material is returned otherwise None is returned.
: since 5.7

[Mesh](/rhinocommon/rhino/geometry/mesh/) Mesh(int index)
: Get the mesh for the primitive at the specified index. If the item at
     this index is a primitive type other than a mesh then it mesh
     representation is returned.
: Returns - Returns the mesh for the primitive at the specified index. If the item
     at this index is a primitive type other than a mesh then it mesh
     representation is returned.
: since 5.7

[Mesh](/rhinocommon/rhino/geometry/mesh/) MeshInstance(int index,Transform instance_transform)
: Get the mesh for the primitive at the specified index. If the item at
     this index is a primitive type other than a mesh then it mesh
     representation is returned.
: Returns - Returns the mesh for the primitive at the specified index. If the item
     at this index is a primitive type other than a mesh then it mesh
     representation is returned.
: since 6.12

[RenderPrimitiveType](/rhinocommon/rhino/render/renderprimitivetype/) PrimitiveType(int index)
: Type of primitive object at this index.
: Returns - Primitive type of the item at this index.
: since 5.7

void SetInstanceTransform(int index,Transform xform)
: 
: since 6.0

[RenderMaterial](/rhinocommon/rhino/render/rendermaterial/)[] ToMaterialArray()
: Call this method to see if there are any RenderMaterials associated
     with the meshes.  Each primitive can optionally have a RenderMaterial
     associated with it, if the RenderMaterial is None then check for a
     RhinoObject.RenderMaterial.
: Returns - Return an array that of the same size as the ToMeshArray() containing
     the RenderMaterial associated with the mesh, may contain None entries
     if there is no RenderMaterial associated with the custom mesh.
: since 5.7

[Mesh](/rhinocommon/rhino/geometry/mesh/)[] ToMeshArray()
: Call this method to get a array of meshes, all primitives will get
     meshed and the meshes will get included in the returned array.
: Returns - Return an array of meshes from this list, this will convert all
     primitives to meshes.
: since 5.7

bool TryGetBox(int index,Box box)
: Call this method to get a box at the specified index.
: Returns - Return True if the index is in range and the primitive at the requested
     index is a box otherwise returns false.
: since 5.7

bool TryGetCone(int index,Cone cone,Plane truncation)
: Call this method to get a box at the specified index.
: Returns - Return True if the index is in range and the primitive at the requested
     index is a box otherwise returns false.
: since 5.7

bool TryGetPlane(int index,PlaneSurface plane)
: Call this method to get a box at the specified index.
: Returns - Return True if the index is in range and the primitive at the requested
     index is a plane otherwise returns false.
: since 5.7

bool TryGetSphere(int index,Sphere sphere)
: Call this method to get a box at the specified index.
: Returns - Return True if the index is in range and the primitive at the requested
     index is a box otherwise returns false.
: since 5.7
