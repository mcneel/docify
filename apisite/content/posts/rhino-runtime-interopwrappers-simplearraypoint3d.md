---
title: "SimpleArrayPoint3d"
draft: false
---

*Namespace: Rhino.Runtime.InteropWrappers*

   ON_SimpleArray<ON_3dPoint>, ON_3dPointArray, ON_PolyLine all have the same size
   This class wraps all of these C++ versions.  If you are not writing C++ code then this
   class is not for you.
   
## Constructors
#### Rhino.Runtime.InteropWrappers.SimpleArrayPoint3d()
- (summary) 
     Initializes a new empty  instance.
     
- (since) 5.0
## Properties
#### int Count
- (summary) 
     Gets the amount of points in this array.
     
- (since) 5.0
## Methods
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
#### Point3d[] ToArray()
- (summary) 
     Copies the unmanaged array to a managed counterpart.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
