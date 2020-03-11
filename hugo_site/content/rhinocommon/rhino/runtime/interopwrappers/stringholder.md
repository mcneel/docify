---
title: "StringHolder"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

This class is used to pass strings back and forth between managed
   and unmanaged code.  This should not be be needed by plug-ins.
   If you are just dealing with an ON_wString*,
   use
```cs
public class StringHolder : IDisposable
```
## Constructors

StringHolder()
: Constructor
: since 5.8
## Methods

static string GetString(IntPtr pStringHolder)
: Gets managed string from unmanaged ON_wString pointer.
: Returns - Null if pStringHolder has no reference, otherwise, the string. This may be an empty string, if setting an empty string is possible.
: since 5.8

IntPtr ConstPointer()
: C++ pointer used to access the ON_wString, managed plug-ins should
     never need this.
: since 5.8

void Dispose()
: IDispose implementation
: since 5.8

IntPtr NonConstPointer()
: C++ pointer used to access the ON_wString, managed plug-ins should
     never need this.
: since 5.8

string ToString()
: Marshals unmanaged ON_wString to a managed .NET string
: since (unknown)
