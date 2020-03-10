---
title: "SimpleArraySurfacePointer"
draft: false
---

*Namespace: Rhino.Runtime.InteropWrappers*

   Wrapper for a C++ ON_SimpleArray of ON_Surface* or const ON_Surface*.  If
   you are not writing C++ code then this class is not for you.
   
## Constructors
#### Rhino.Runtime.InteropWrappers.SimpleArraySurfacePointer()
- (summary) 
     Initializes a new  instance.
     
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
#### Surface[] ToNonConstArray()
- (summary) 
     Copies the unmanaged array to a managed counterpart.
     Elements are made non-const.
     
- (since) 5.0
- (returns) Surface[] This is some return comment
