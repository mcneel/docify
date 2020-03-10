---
title: "Rhino.Geometry.Collections.MeshFaceNormalList"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## int Capacity
- (summary) 
     Gets or sets the total number of face normals the internal data structure can hold without resizing.
     
- (since) 6.0
## int Count
- (summary) 
     Gets or sets the number of mesh face normals.
     
- (since) 5.0
# Methods
## int AddFaceNormal(double x,double y,double z)
- (summary) 
     Appends a face normal to the list of mesh face normals.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddFaceNormal(float x,float y,float z)
- (summary) 
     Appends a face normal to the list of mesh face normals.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddFaceNormal(Vector3d normal)
- (summary) 
     Appends a face normal to the list of mesh face normals.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddFaceNormal(Vector3f normal)
- (summary) 
     Appends a face normal to the list of mesh face normals.
     
- (since) 5.0
- (returns) int This is some return comment
## void Clear()
- (summary) 
     Clears the Face Normal list on the mesh.
     
- (since) 5.0
- (returns) void This is some return comment
## bool ComputeFaceNormals()
- (summary) 
     Computes all the face normals for this mesh based on the physical shape of the mesh.
     
- (since) 5.0
- (returns) bool This is some return comment
## void Destroy()
- (summary) 
     Releases all memory allocated to store face normals. The list capacity will be 0 after this call.
     Subsequent calls can add new items.
- (since) 6.0
- (returns) void This is some return comment
## IEnumerator<Vector3f> GetEnumerator()
- (summary) 
     Gets an enumerator that yields all normals (vectors) in this collection.
     
- (since) 5.0
- (returns) IEnumerator<Vector3f> This is some return comment
## bool SetFaceNormal(int index,double x,double y,double z)
- (summary) 
     Sets a face normal vector at an index using three double-precision numbers.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetFaceNormal(int index,float x,float y,float z)
- (summary) 
     Sets a face normal vector at an index using three single-precision numbers.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetFaceNormal(int index,Vector3d normal)
- (summary) 
     Sets a face normal vector at an index using a single-precision vector.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetFaceNormal(int index,Vector3f normal)
- (summary) 
     Sets a face normal vector at an index using a single-precision vector.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool UnitizeFaceNormals()
- (summary) 
     Unitizes all the existing face normals.
     
- (since) 5.0
- (returns) bool This is some return comment
