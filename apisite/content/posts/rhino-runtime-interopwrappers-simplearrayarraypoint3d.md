---
title: "SimpleArrayArrayPoint3d"
draft: false
---

*Namespace: Rhino.Runtime.InteropWrappers*

   Wrapper for ON_SimpleArray<ON_PolyLine*>, ON_SimpleArray<ON_3dPointArray*>
   If you are not writing C++ code then this class is not for you.
   
## Constructors
#### Rhino.Runtime.InteropWrappers.SimpleArrayArrayPoint3d()
- (summary) 
     Initializes a new empty  instance.
     
- (since) 7.0
## Properties
#### int Count
- (summary) 
     Gets the amount of polylines in this array.
     
- (since) 7.0
## Methods
#### IntPtr ConstPointer()
- (summary) 
     Gets the const (immutable) pointer of this array.
     
- (since) 7.0
- (returns) IntPtr This is some return comment
#### void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 7.0
- (returns) void This is some return comment
#### IntPtr NonConstPointer()
- (summary) 
     Gets the non-const pointer (for modification) of this array.
     
- (since) 7.0
- (returns) IntPtr This is some return comment
#### int PointCountAt(int index)
- (summary) 
     Gets the amount of points in a polyline.
     
- (since) 7.0
- (returns) int This is some return comment
