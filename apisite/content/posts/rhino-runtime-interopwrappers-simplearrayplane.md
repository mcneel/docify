---
title: "SimpleArrayPlane"
draft: false
---

*Namespace: Rhino.Runtime.InteropWrappers*

   Wrapper for ON_SimpleArray<ON_Plane>. If you are not writing C++ code
   then this class is not for you.
   
## Constructors
#### Rhino.Runtime.InteropWrappers.SimpleArrayPlane()
- (summary) 
     Initializes a new  instance.
     
- (since) 6.0
## Properties
#### int Count
- (summary) 
     Gets the amount of lines in this array.
     
- (since) 6.0
## Methods
#### IntPtr ConstPointer()
- (summary) 
     Gets the const (immutable) pointer of this array.
     
- (since) 6.0
- (returns) IntPtr This is some return comment
#### void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 6.0
- (returns) void This is some return comment
#### IntPtr NonConstPointer()
- (summary) 
     Gets the non-const pointer (for modification) of this array.
     
- (since) 6.0
- (returns) IntPtr This is some return comment
#### Plane[] ToArray()
- (summary) 
     Copies the unmanaged array to a managed counterpart.
     
- (since) 6.0
- (returns) Plane[] This is some return comment
