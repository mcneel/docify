---
title: "Rhino.Render.RenderPrimitive"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## BoundingBox BoundingBox
- (summary) 
     The bounding box for this primitive.
     
- (since) 5.7
## Transform InstanceTransform
- (summary) 
     Instance reference transform or Identity if not an instance reference.
     
- (since) 5.7
## RenderPrimitiveType PrimitiveType
- (summary) 
     Call this before extracting meshes if you support render primitives to
     get the  of this mesh then call the
     associated , , , or
      method.  Calling the  property
     will mesh the primitive and return a mesh always.
     
- (since) 5.7
## RenderMaterial RenderMaterial
- (summary) 
     The  associated with this mesh or None if there is not one.
     
- (since) 5.7
## DocObjects.RhinoObject RhinoObject
- (summary) 
     The Rhino object associated with this render primitive.
     
- (since) 5.7
# Methods
## void Dispose()
- (summary) 
- (since) 5.7
- (returns) void This is some return comment
## Mesh Mesh()
- (summary) 
     Returns the mesh associated with the object, this will mesh primitives
     and always return a mesh.
     
- (since) 5.7
- (returns) Mesh This is some return comment
## bool TryGetBox(Box box)
- (summary) 
     Call this method to get a  primitive for this mesh.  If this
     meshes  is not a 
     then the box parameter is set to .
     
- (since) 5.7
- (returns) bool This is some return comment
## bool TryGetCone(Cone cone,Plane truncation)
- (summary) 
     Call this method to get a  primitive for this mesh.  If this
     meshes  is not a 
     then the cone parameter is set to  and the truncation
     parameter is set to .
     
- (since) 5.7
- (returns) bool This is some return comment
## bool TryGetPlane(PlaneSurface plane)
- (summary) 
     Call this method to get a  primitive for this mesh.  If this
     meshes  is not a 
     then the plane parameter is set to null.
     
- (since) 5.7
- (returns) bool This is some return comment
## bool TryGetSphere(Sphere sphere)
- (summary) 
     Call this method to get a sphere primitive for this mesh.  If this
     meshes  is not a 
     then the sphere parameter is set to .
     
- (since) 5.7
- (returns) bool This is some return comment
