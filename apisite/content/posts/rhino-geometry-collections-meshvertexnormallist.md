---
title: "Rhino.Geometry.Collections.MeshVertexNormalList"
draft: false
---

# Properties
## int Capacity
- (summary) 
     Gets or sets the amount of vertex normals that the list can hold without resizing.
     
- (since) 6.0
## int Count
- (summary) 
     Gets or sets the number of mesh vertex normals.
     
- (since) 5.0
# Methods
## int Add(double x,double y,double z)
- (summary) 
     Adds a new vertex normal at the end of the list.
     
- (since) 5.0
- (returns) int This is some return comment
## int Add(float x,float y,float z)
- (summary) 
     Adds a new vertex normal at the end of the list.
     
- (since) 5.0
- (returns) int This is some return comment
## int Add(Vector3d normal)
- (summary) 
     Adds a new vertex normal at the end of the list.
     
- (since) 5.0
- (returns) int This is some return comment
## int Add(Vector3f normal)
- (summary) 
     Adds a new vertex normal at the end of the list.
     
- (since) 5.0
- (returns) int This is some return comment
## bool AddRange(Vector3f[] normals)
- (summary) 
     Appends a collection of normal vectors.
     
- (since) 5.0
- (returns) bool This is some return comment
## void Clear()
- (summary) 
     Clears the vertex normal collection on the mesh.
     
- (since) 5.0
- (returns) void This is some return comment
## bool ComputeNormals()
- (summary) 
     Computes the vertex normals based on the physical shape of the mesh.
     
- (since) 5.0
- (returns) bool This is some return comment
## void Destroy()
- (summary) 
     Releases all memory allocated to store vertex normals. The list capacity will be 0 after this call.
     Subsequent calls can add new items.
- (since) 6.0
- (returns) void This is some return comment
## void Flip()
- (summary) 
     Reverses direction of all vertex normals
     This is the same as Mesh.Flip(true, false, false)
- (since) 5.0
- (returns) void This is some return comment
## IEnumerator<Vector3f> GetEnumerator()
- (summary) 
     Gets an enumerator that yields all normals (vectors) in this collection.
     
- (since) 5.0
- (returns) IEnumerator<Vector3f> This is some return comment
## bool SetNormal(int index,double x,double y,double z)
- (summary) 
     Sets or adds a vertex normal to the list.
     If [index] is less than [Count], the existing vertex normal at [index] will be modified.If [index] equals [Count], a new vertex normal is appended to the end of the list.If [index] is larger than [Count], the function will return false.
- (since) 5.0
- (returns) bool This is some return comment
## bool SetNormal(int index,float x,float y,float z)
- (summary) 
     Sets or adds a normal to the list.
     If [index] is less than [Count], the existing vertex normal at [index] will be modified.If [index] equals [Count], a new vertex normal is appended to the end of the list.If [index] is larger than [Count], the function will return false.
- (since) 5.0
- (returns) bool This is some return comment
## bool SetNormal(int index,Vector3d normal)
- (summary) 
     Sets or adds a vertex normal to the list.
     If [index] is less than [Count], the existing vertex normal at [index] will be modified.If [index] equals [Count], a new vertex normal is appended to the end of the list.If [index] is larger than [Count], the function will return false.
- (since) 5.0
- (returns) bool This is some return comment
## bool SetNormal(int index,Vector3f normal)
- (summary) 
     Sets or adds a vertex normal to the list.
     If [index] is less than [Count], the existing vertex normal at [index] will be modified.If [index] equals [Count], a new vertex normal is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
- (since) 5.0
- (returns) bool This is some return comment
## bool SetNormals(Vector3f[] normals)
- (summary) 
     Sets all normal vectors in one go. This method destroys the current normal array if it exists.
     
- (since) 5.0
- (returns) bool This is some return comment
## float[] ToFloatArray()
- (summary) 
     Copies all vertex normals to a linear array of float in x,y,z order
     
- (since) 6.0
- (returns) float[] This is some return comment
## bool UnitizeNormals()
- (summary) 
     Unitizes all vertex normals.
     
- (since) 5.0
- (returns) bool This is some return comment
