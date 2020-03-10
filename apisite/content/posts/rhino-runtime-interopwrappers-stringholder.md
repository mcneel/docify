---
title: "StringHolder"
draft: false
---

*Namespace: Rhino.Runtime.InteropWrappers*

   This class is used to pass strings back and forth between managed
   and unmanaged code.  This should not be be needed by plug-ins.
   If you are just dealing with an ON_wString*,
   use 
## Constructors
#### Rhino.Runtime.InteropWrappers.StringHolder()
- (summary) 
     Constructor
     
- (since) 5.8
## Methods
#### static string GetString(IntPtr pStringHolder)
- (summary) 
     Gets managed string from unmanaged ON_wString pointer.
     
- (since) 5.8
- (returns) string This is some return comment
#### IntPtr ConstPointer()
- (summary) 
     C++ pointer used to access the ON_wString, managed plug-ins should
     never need this.
     
- (since) 5.8
- (returns) IntPtr This is some return comment
#### void Dispose()
- (summary) 
     IDispose implementation
     
- (since) 5.8
- (returns) void This is some return comment
#### IntPtr NonConstPointer()
- (summary) 
     C++ pointer used to access the ON_wString, managed plug-ins should
     never need this.
     
- (since) 5.8
- (returns) IntPtr This is some return comment
#### string ToString()
- (summary) 
     Marshals unmanaged ON_wString to a managed .NET string
     
- (since) (unknown)
- (returns) string This is some return comment
