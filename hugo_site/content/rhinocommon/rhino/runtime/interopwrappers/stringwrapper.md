---
title: "StringWrapper"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Runtime.InteropWrappers](../)*

Represents a wrapper to an unmanaged OpenNurbs string.
   Wraps a C++ ON_wString*.
```cs
public class StringWrapper : IDisposable
```
## Constructors

StringWrapper()
: Initializes a new empty unmanaged string (ON_wString*).

StringWrapper(string s)
: Initializes a new unmanaged string with an initial value.
     The string s can be null.
## Properties

IntPtr ConstPointer
: Gets the const pointer (const ON_wString*).
: Returns - The const pointer.

IntPtr NonConstPointer
: Gets the non-const pointer (ON_wString*).
: Returns - The non-const pointer.
## Methods

static string GetStringFromPointer(IntPtr pConstON_wString)
: Get string from an ON_wString*

static void SetStringOnPointer(IntPtr pON_wString,string s)
: Set contents of an ON_wString*

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

void SetString(string s)
: Set contents of this string.

string ToString()
: Returns the string contents of this wrapper.
: Returns - A managed string.
: since (unknown)
