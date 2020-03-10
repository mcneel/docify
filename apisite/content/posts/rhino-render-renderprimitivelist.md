---
title: "RenderPrimitiveList"
draft: false
---

*Namespace: Rhino.Render*
## Properties
#### int Count
- (summary) 
     Number of meshes in this list
     
- (since) 5.7
#### RhinoObject RhinoObject
- (summary) 
     The Rhino object associated with this list
     
- (since) 5.7
#### bool UseObjectsMappingChannels
- (summary) 
     Returns True if the texture mapping will be taken from the Rhino
     object otherwise; the texture mapping will use the texture coordinates
     on the mesh only.
     
- (since) 5.7
## Methods
#### void Add(Box box,RenderMaterial material)
- (summary) 
     Add primitive box and material.
     
- (since) 5.7
- (returns) void This is some return comment
#### void Add(Cone cone,Plane truncation,RenderMaterial material)
- (summary) 
     Add primitive cone and material.
     
- (since) 5.7
- (returns) void This is some return comment
#### void Add(Mesh mesh,RenderMaterial material)
- (summary) 
     Add mesh and material.
     
- (since) 5.7
- (returns) void This is some return comment
#### void Add(Mesh mesh,RenderMaterial material,Transform t)
- (summary) 
     Add mesh and material.
     
- (since) 6.12
- (returns) void This is some return comment
#### void Add(PlaneSurface plane,RenderMaterial material)
- (summary) 
     Add primitive plane and material.
     
- (since) 5.7
- (returns) void This is some return comment
#### void Add(Sphere sphere,RenderMaterial material)
- (summary) 
     Add primitive sphere and material.
     
- (since) 5.7
- (returns) void This is some return comment
#### bool AutoDeleteMaterialsOn()
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
#### bool AutoDeleteMeshesOn()
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
#### void Clear()
- (summary) 
     Remove all primitives from this list
     
- (since) 5.7
- (returns) void This is some return comment
#### void ConvertMeshesToTriangles()
- (summary) 
     Convert mesh quad faces to triangle faces.
     
- (since) 5.7
- (returns) void This is some return comment
#### void Dispose()
- (summary) 
- (since) 5.7
- (returns) void This is some return comment
#### Transform GetInstanceTransform(int index)
- (summary) 
- (since) 6.0
- (returns) Transform This is some return comment
#### RenderMaterial Material(int index)
- (summary) 
     Call this method to get the render material associated with the mesh at
     the specified index.  Will return None if there is no
     material associated with the requested mesh.
     
- (since) 5.7
- (returns) RenderMaterial This is some return comment
#### Mesh Mesh(int index)
- (summary) 
     Get the mesh for the primitive at the specified index. If the item at
     this index is a primitive type other than a mesh then it mesh
     representation is returned.
     
- (since) 5.7
- (returns) Mesh This is some return comment
#### Mesh MeshInstance(int index,Transform instance_transform)
- (summary) 
     Get the mesh for the primitive at the specified index. If the item at
     this index is a primitive type other than a mesh then it mesh
     representation is returned.
     
- (since) 6.12
- (returns) Mesh This is some return comment
#### RenderPrimitiveType PrimitiveType(int index)
- (summary) 
     Type of primitive object at this index.
     
- (since) 5.7
- (returns) RenderPrimitiveType This is some return comment
#### void SetInstanceTransform(int index,Transform xform)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### RenderMaterial[] ToMaterialArray()
- (summary) 
     Call this method to see if there are any RenderMaterials associated
     with the meshes.  Each primitive can optionally have a RenderMaterial
     associated with it, if the RenderMaterial is None then check for a
     RhinoObject.RenderMaterial.
     
- (since) 5.7
- (returns) RenderMaterial[] This is some return comment
#### Mesh[] ToMeshArray()
- (summary) 
     Call this method to get a array of meshes, all primitives will get
     meshed and the meshes will get included in the returned array.
     
- (since) 5.7
- (returns) Mesh[] This is some return comment
#### bool TryGetBox(int index,Box box)
- (summary) 
     Call this method to get a box at the specified index.
     
- (since) 5.7
- (returns) bool This is some return comment
#### bool TryGetCone(int index,Cone cone,Plane truncation)
- (summary) 
     Call this method to get a box at the specified index.
     
- (since) 5.7
- (returns) bool This is some return comment
#### bool TryGetPlane(int index,PlaneSurface plane)
- (summary) 
     Call this method to get a box at the specified index.
     
- (since) 5.7
- (returns) bool This is some return comment
#### bool TryGetSphere(int index,Sphere sphere)
- (summary) 
     Call this method to get a box at the specified index.
     
- (since) 5.7
- (returns) bool This is some return comment
