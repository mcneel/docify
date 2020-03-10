---
title: "StringWrapper"
draft: false
---

*Namespace: Rhino.Runtime.InteropWrappers*

   Represents a wrapper to an unmanaged OpenNurbs string.
   Wraps a C++ ON_wString*.
## Constructors
#### Rhino.Runtime.InteropWrappers.StringWrapper()
- (summary) 
     Initializes a new empty unmanaged string (ON_wString*).
     
- (since) 5.0
#### Rhino.Runtime.InteropWrappers.StringWrapper(string s)
- (summary) 
     Initializes a new unmanaged string with an initial value.
     The string s can be null.
     
- (since) 5.0
## Properties
#### IntPtr ConstPointer
- (summary) 
     Gets the const pointer (const ON_wString*).
     
- (since) 5.0
#### IntPtr NonConstPointer
- (summary) 
     Gets the non-const pointer (ON_wString*).
     
- (since) 5.0
## Methods
#### static string GetStringFromPointer(IntPtr pConstON_wString)
- (summary) 
     Get string from an ON_wString*
     
- (since) 5.0
- (returns) string This is some return comment
#### static void SetStringOnPointer(IntPtr pON_wString,string s)
- (summary) 
     Set contents of an ON_wString*
     
- (since) 5.0
- (returns) void This is some return comment
#### void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
#### void SetString(string s)
- (summary) 
     Set contents of this string.
     
- (since) 5.0
- (returns) void This is some return comment
#### string ToString()
- (summary) 
     Returns the string contents of this wrapper.
     
- (since) (unknown)
- (returns) string This is some return comment
