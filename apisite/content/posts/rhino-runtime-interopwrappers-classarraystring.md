---
title: "ClassArrayString"
draft: false
---

*Namespace: Rhino.Runtime.InteropWrappers*

   Wrapper for a C++ ON_ClassArray<ON_wString>
   If you are not writing C++ code then this class is not for you.
   
## Constructors
#### Rhino.Runtime.InteropWrappers.ClassArrayString()
- (summary) 
     Initializes a new  instance.
     
- (since) 6.0
## Properties
#### int Count
- (summary) 
     Gets the number of strings in this array.
     
- (since) 6.0
## Methods
#### void Add(string s)
- (summary) 
     Adds a string to the list.
     
- (since) 6.0
- (returns) void This is some return comment
#### IntPtr ConstPointer()
- (summary) Gets the const (immutable) pointer of this array.
- (since) 6.0
- (returns) IntPtr This is some return comment
#### void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 6.0
- (returns) void This is some return comment
#### IntPtr NonConstPointer()
- (summary) Gets the non-const pointer (for modification) of this array.
- (since) 6.0
- (returns) IntPtr This is some return comment
#### string[] ToArray()
- (summary) 
     Copies the unmanaged array to a managed counterpart.
     
- (since) 6.0
- (returns) string[] This is some return comment
