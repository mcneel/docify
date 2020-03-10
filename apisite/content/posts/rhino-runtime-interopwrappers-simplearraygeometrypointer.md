---
title: "Rhino.Runtime.InteropWrappers.SimpleArrayGeometryPointer"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Runtime.InteropWrappers.SimpleArrayGeometryPointer()
- (summary) 
     Initializes a new  instance.
     
- (since) 5.0
## Rhino.Runtime.InteropWrappers.SimpleArrayGeometryPointer(IEnumerable geometry)
- (summary) 
     Expects all of the items in the IEnumerable to be GeometryBase types
     
- (since) 5.0
## Rhino.Runtime.InteropWrappers.SimpleArrayGeometryPointer(IEnumerable<GeometryBase> geometry)
- (summary) 
     Create an ON_SimpleArray<ON_Geometry*> filled with items in geometry
     
- (since) 5.0
# Methods
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
## GeometryBase[] ToNonConstArray()
- (summary) 
     Copies the unmanaged array to a managed counterpart.
     
- (since) 5.0
- (returns) GeometryBase[] This is some return comment
