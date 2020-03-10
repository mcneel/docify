---
title: "SimpleArrayLinetypePointer"
draft: false
---

*Namespace: Rhino.Runtime.InteropWrappers*

   Wrapper for a C++ ON_SimpleArray<ON_Linetype*>
   If you are not writing C++ code then this class is not for you.
   
## Constructors
#### Rhino.Runtime.InteropWrappers.SimpleArrayLinetypePointer()
- (summary) 
     Initializes a new  instance.
     
- (since) 6.6
## Properties
#### int Count
- (summary) 
     Gets the amount of linetypes in this array.
     
- (since) 6.6
## Methods
#### IntPtr ConstPointer()
- (summary) 
     Gets the const (immutable) pointer of this array.
     
- (since) 6.6
- (returns) IntPtr This is some return comment
#### void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 6.6
- (returns) void This is some return comment
#### IntPtr NonConstPointer()
- (summary) 
     Gets the non-const pointer (for modification) of this array.
     
- (since) 6.6
- (returns) IntPtr This is some return comment
#### DocObjects.Linetype[] ToNonConstArray()
- (summary) 
     Copies the unmanaged array to a managed counterpart.
     
- (since) 6.6
- (returns) DocObjects.Linetype[] This is some return comment
