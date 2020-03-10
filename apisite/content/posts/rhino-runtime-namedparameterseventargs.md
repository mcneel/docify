---
title: "NamedParametersEventArgs"
draft: false
---

*Namespace: Rhino.Runtime*

   Dictionary style class used for named callbacks from C++ -> .NET
   
## Constructors
#### Rhino.Runtime.NamedParametersEventArgs()
- (summary) 
     Construct a new named parameter even args. You should dispose this class when you are done with it
     
- (since) 7.0
## Methods
#### void Dispose()
- (summary) 
     Dispose native resources
     
- (since) 7.0
- (returns) void This is some return comment
#### void Set(string name,bool value)
- (summary) 
     Set a bool value for a given key name
     
- (since) 7.0
- (returns) void This is some return comment
#### void Set(string name,double value)
- (summary) 
     Set a double value for a given key name
     
- (since) 7.0
- (returns) void This is some return comment
#### void Set(string name,GeometryBase value)
- (summary) 
     Set geometry for a given key name
     
- (since) 7.0
- (returns) void This is some return comment
#### void Set(string name,IEnumerable<GeometryBase> values)
- (summary) 
     Set a list of geometry for a given key name
     
- (since) 7.0
- (returns) void This is some return comment
#### void Set(string name,IEnumerable<string> strings)
- (summary)  Set a list of strings as a value for a given key name 
- (since) 7.0
- (returns) void This is some return comment
#### void Set(string name,int value)
- (summary) 
     Set an int value for a given key name
     
- (since) 7.0
- (returns) void This is some return comment
#### void Set(string name,Point3d value)
- (summary) 
     Set a Point3d value for a given key name
     
- (since) 7.0
- (returns) void This is some return comment
#### void Set(string name,string value)
- (summary)  Set a string value for a given key name 
- (since) 7.0
- (returns) void This is some return comment
#### void Set(string name,uint value)
- (summary) 
     Set an unsigned int for a given key name
     
- (since) 7.0
- (returns) void This is some return comment
#### void SetWindowHandle(string name,IntPtr value)
- (summary) 
     Set a HWND on Windows or NSView* on Mac
     
- (since) 7.0
- (returns) void This is some return comment
#### bool TryGetBool(string name,bool value)
- (summary) 
     Try to get a bool value for a given key name
     
- (since) 6.15
- (returns) bool This is some return comment
#### bool TryGetDouble(string name,double value)
- (summary) 
     Try to get a double value for a given key name
     
- (since) 6.15
- (returns) bool This is some return comment
#### bool TryGetGeometry(string name,GeometryBase[] values)
- (summary) 
- (since) 7.0
- (returns) bool This is some return comment
#### bool TryGetInt(string name,int value)
- (summary) 
     Try to get an int value for a given key name
     
- (since) 6.15
- (returns) bool This is some return comment
#### bool TryGetPoint(string name,Point3d value)
- (summary) 
     Try to get a Point3d value for a given key name
     
- (since) 7.0
- (returns) bool This is some return comment
#### bool TryGetRhinoObjects(string key,RhinoObject[] values)
- (summary) 
     Get array of RhinoObject for the specified key
     
- (since) 7.0
- (returns) bool This is some return comment
#### bool TryGetString(string name,string value)
- (summary) 
     Try to get a string value for a given key name
     
- (since) 6.15
- (returns) bool This is some return comment
#### bool TryGetStrings(string name,string[] value)
- (summary) 
     Try to get a string value for a given key name
     
- (since) 7.0
- (returns) bool This is some return comment
#### bool TryGetUnsignedInt(string name,uint value)
- (summary) 
     Try to get an unsigned int for a given key name
     
- (since) 7.0
- (returns) bool This is some return comment
#### bool TryGetWindowHandle(string name,IntPtr value)
- (summary) 
     Gets a HWND on Windows or NSVIew* on Mac
     
- (since) 7.0
- (returns) bool This is some return comment
