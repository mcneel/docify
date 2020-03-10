---
title: "Rhino.Runtime.InteropWrappers.StringHolder"
draft: false
---

# Constructors
## Rhino.Runtime.InteropWrappers.StringHolder()
- (summary) 
     Constructor
     
- (since) 5.8
# Methods
## static string GetString(IntPtr pStringHolder)
- (summary) 
     Gets managed string from unmanaged ON_wString pointer.
     
- (since) 5.8
- (returns) string This is some return comment
## IntPtr ConstPointer()
- (summary) 
     C++ pointer used to access the ON_wString, managed plug-ins should
     never need this.
     
- (since) 5.8
- (returns) IntPtr This is some return comment
## void Dispose()
- (summary) 
     IDispose implementation
     
- (since) 5.8
- (returns) void This is some return comment
## IntPtr NonConstPointer()
- (summary) 
     C++ pointer used to access the ON_wString, managed plug-ins should
     never need this.
     
- (since) 5.8
- (returns) IntPtr This is some return comment
## string ToString()
- (summary) 
     Marshals unmanaged ON_wString to a managed .NET string
     
- (since) (unknown)
- (returns) string This is some return comment
