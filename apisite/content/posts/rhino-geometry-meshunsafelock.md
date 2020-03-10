---
title: "Rhino.Geometry.MeshUnsafeLock"
date: 2020-03-10 09:24:55Z
draft: false
---

# Methods
## MeshFace* FacesArray(int length)
- (summary) 
     Retrieves a pointer to the raw faces array, which uses 4 integers for each face.
     .
     
- (since) 6.20
- (returns) MeshFace* This is some return comment
## Vector3f* NormalVector3fArray(int length)
- (summary) 
     Retrieves a pointer to the raw mesh vertex normal array, which uses vectors
     defined with single precision floating point numbers, or throws an exception if none is available.
     
- (since) 6.20
- (returns) Vector3f* This is some return comment
## void Release()
- (summary) 
     Releases the lock and updates the underlying unmanaged data structures.
     
- (since) 6.0
- (returns) void This is some return comment
## Point3d* VertexPoint3dArray(int length)
- (summary) 
     Retrieves a pointer to the raw mesh vertex array, which uses coordinates
     defined with double precision floating point numbers, or throws an exception if none is available.
     
- (since) 6.20
- (returns) Point3d* This is some return comment
## Point3f* VertexPoint3fArray(int length)
- (summary) 
     Retrieves a pointer to the raw mesh vertex array, which uses coordinates
     defined with single precision floating point numbers, or None if none is available.
     
- (since) 6.0
- (returns) Point3f* This is some return comment
