---
title: "Rhino.Runtime.InteropWrappers.SimpleArrayExtrusionPointer"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Runtime.InteropWrappers.SimpleArrayExtrusionPointer()
- (summary) 
     Initializes a new  instance.
     
- (since) 6.0
# Properties
## int Count
- (summary) 
     Gets the amount of Extrusions in this array.
     
- (since) 6.0
# Methods
## void Add(Extrusion extrusion,bool asConst)
- (summary) 
     Adds a extrusion to the list.
     
- (since) 6.0
- (returns) void This is some return comment
## IntPtr ConstPointer()
- (summary) 
     Gets the const (immutable) pointer of this array.
     
- (since) 6.0
- (returns) IntPtr This is some return comment
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 6.0
- (returns) void This is some return comment
## IntPtr NonConstPointer()
- (summary) 
     Gets the non-const pointer (for modification) of this array.
     
- (since) 6.0
- (returns) IntPtr This is some return comment
## Geometry.Extrusion[] ToNonConstArray()
- (summary) 
     Copies the unmanaged array to a managed counterpart.
     
- (since) 6.0
- (returns) Geometry.Extrusion[] This is some return comment
