---
title: "RenderPrimitive"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class RenderPrimitive : IDisposable
```
## Properties

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox
: The bounding box for this primitive.
: since 5.7

[Transform](/rhinocommon/rhino/geometry/transform/) InstanceTransform
: Instance reference transform or Identity if not an instance reference.
: since 5.7

[RenderPrimitiveType](/rhinocommon/rhino/render/renderprimitivetype/) PrimitiveType
: Call this before extracting meshes if you support render primitives to
     get the  of this mesh then call the
     associated , , , or
      method.  Calling the  property
     will mesh the primitive and return a mesh always.
: since 5.7

[RenderMaterial](/rhinocommon/rhino/render/rendermaterial/) RenderMaterial
: The  associated with this mesh or None if there is not one.
: since 5.7

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/) RhinoObject
: The Rhino object associated with this render primitive.
: since 5.7
## Methods

void Dispose()
: 
: since 5.7

[Mesh](/rhinocommon/rhino/geometry/mesh/) Mesh()
: Returns the mesh associated with the object, this will mesh primitives
     and always return a mesh.
: since 5.7

bool TryGetBox(Box box)
: Call this method to get a  primitive for this mesh.  If this
     meshes  is not a 
     then the box parameter is set to .
: Returns - Returns True if  is  and
     the box parameter was initialized otherwise returns false.
: since 5.7

bool TryGetCone(Cone cone,Plane truncation)
: Call this method to get a  primitive for this mesh.  If this
     meshes  is not a 
     then the cone parameter is set to  and the truncation
     parameter is set to .
: Returns - Returns True if  is  and
     the cone and truncation parameters were initialized otherwise returns false.
: since 5.7

bool TryGetPlane(PlaneSurface plane)
: Call this method to get a  primitive for this mesh.  If this
     meshes  is not a 
     then the plane parameter is set to null.
: Returns - Returns True if  is  and
     the plane parameter was initialized otherwise returns false.
: since 5.7

bool TryGetSphere(Sphere sphere)
: Call this method to get a sphere primitive for this mesh.  If this
     meshes  is not a 
     then the sphere parameter is set to .
: Returns - Returns True if  is  and
     the sphere parameter was initialized otherwise returns false.
: since 5.7
