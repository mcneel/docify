---
title: "SimpleArrayInt"
draft: false
---

*Namespace: Rhino.Runtime.InteropWrappers*

   Wrapper for ON_SimpleArray<int>. If you are not writing C++ code
   then this class is not for you.
   
## Constructors
#### Rhino.Runtime.InteropWrappers.SimpleArrayInt()
- (summary) 
     Initializes a new  class.
     
- (since) 5.0
#### Rhino.Runtime.InteropWrappers.SimpleArrayInt(IEnumerable<int> values)
- (summary) 
     Initializes a new  class
     
- (since) 5.9
## Properties
#### int Count
- (summary) 
     Gets the amount of elements in this array.
     
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
#### int[] ToArray()
- (summary) 
     Returns the managed counterpart of the unmanaged array.
     
- (since) 5.0
- (returns) int[] This is some return comment
