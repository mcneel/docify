---
title: "NamedParametersEventArgs"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime](../)*

Dictionary style class used for named callbacks from C++ -> .NET
```cs
public class NamedParametersEventArgs : EventArgs, IDisposable
```
## Constructors

NamedParametersEventArgs()
: Construct a new named parameter even args. You should dispose this class when you are done with it
: since 7.0
## Methods

void Dispose()
: Dispose native resources
: since 7.0

void Set(string name,bool value)
: Set a bool value for a given key name
: since 7.0

void Set(string name,double value)
: Set a double value for a given key name
: since 7.0

void Set(string name,GeometryBase value)
: Set geometry for a given key name
: since 7.0

void Set(string name,IEnumerable<GeometryBase> values)
: Set a list of geometry for a given key name
: since 7.0

void Set(string name,IEnumerable<string> strings)
: Set a list of strings as a value for a given key name
: since 7.0

void Set(string name,int value)
: Set an int value for a given key name
: since 7.0

void Set(string name,Point3d value)
: Set a Point3d value for a given key name
: since 7.0

void Set(string name,string value)
: Set a string value for a given key name
: since 7.0

void Set(string name,uint value)
: Set an unsigned int for a given key name
: since 7.0

void SetWindowHandle(string name,IntPtr value)
: Set a HWND on Windows or NSView* on Mac
: since 7.0

bool TryGetBool(string name,bool value)
: Try to get a bool value for a given key name
: since 6.15

bool TryGetDouble(string name,double value)
: Try to get a double value for a given key name
: since 6.15

bool TryGetGeometry(string name,GeometryBase[] values)
: 
: since 7.0

bool TryGetInt(string name,int value)
: Try to get an int value for a given key name
: since 6.15

bool TryGetPoint(string name,Point3d value)
: Try to get a Point3d value for a given key name
: since 7.0

bool TryGetRhinoObjects(string key,RhinoObject[] values)
: Get array of RhinoObject for the specified key
: since 7.0

bool TryGetString(string name,string value)
: Try to get a string value for a given key name
: since 6.15

bool TryGetStrings(string name,string[] value)
: Try to get a string value for a given key name
: since 7.0

bool TryGetUnsignedInt(string name,uint value)
: Try to get an unsigned int for a given key name
: since 7.0

bool TryGetWindowHandle(string name,IntPtr value)
: Gets a HWND on Windows or NSVIew* on Mac
: since 7.0
