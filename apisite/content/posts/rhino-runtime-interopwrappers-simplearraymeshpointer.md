---
title: "SimpleArrayMeshPointer"
draft: false
---

*Namespace: Rhino.Runtime.InteropWrappers*

   Represents a wrapper to an unmanaged array of mesh pointers.
   Wrapper for a C++ ON_SimpleArray of ON_Mesh* or const ON_Mesh*. If you are not
   writing C++ code then this class is not for you.
## Constructors
#### Rhino.Runtime.InteropWrappers.SimpleArrayMeshPointer()
- (summary) 
     Initializes a new  instance.
     
- (since) 5.0
## Properties
#### int Count
- (summary) 
     Gets the amount of meshes in this array.
     
- (since) 5.0
## Methods
#### void Add(Mesh mesh,bool asConst)
- (summary) 
     Adds a mesh to the list.
     
- (since) 5.0
- (returns) void This is some return comment
#### IntPtr ConstPointer()
- (summary) 
     Gets the const (immutable) pointer of this array.
     
- (since) 5.0
- (returns) IntPtr This is some return comment
#### void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
#### IntPtr NonConstPointer()
- (summary) 
     Gets the non-const pointer (for modification) of this array.
     
- (since) 5.0
- (returns) IntPtr This is some return comment
#### Geometry.Mesh[] ToNonConstArray()
- (summary) 
     Copies the unmanaged array to a managed counterpart.
     
- (since) 5.0
- (returns) Geometry.Mesh[] This is some return comment
