---
title: "Rhino.Runtime.InteropWrappers.SimpleArrayBrepPointer"
draft: false
---

# Constructors
## Rhino.Runtime.InteropWrappers.SimpleArrayBrepPointer()
- (summary) 
     Initializes a new  instance.
     
- (since) 5.0
# Properties
## int Count
- (summary) 
     Gets the amount of breps in this array.
     
- (since) 5.0
# Methods
## void Add(Brep brep,bool asConst)
- (summary) 
     Adds a brep to the list.
     
- (since) 5.0
- (returns) void This is some return comment
## IntPtr ConstPointer()
- (summary) 
     Gets the const (immutable) pointer of this array.
     
- (since) 5.0
- (returns) IntPtr This is some return comment
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
## IntPtr NonConstPointer()
- (summary) 
     Gets the non-const pointer (for modification) of this array.
     
- (since) 5.0
- (returns) IntPtr This is some return comment
## Geometry.Brep[] ToNonConstArray()
- (summary) 
     Copies the unmanaged array to a managed counterpart.
     
- (since) 5.0
- (returns) Geometry.Brep[] This is some return comment
