---
title: "HistoryRecord"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Provides a single bundling of information to be passed to Rhino when setting up history for an object.
```cs
public class HistoryRecord : IDisposable
```
## Constructors

HistoryRecord(Command command,int version)
: 
## Properties

bool CopyOnReplaceObject
: When an object is replaced and the old object has a history record with
     this field set, the history record is copied and attached to the new object.
     That allows a descendant object to continue the history linkage after
     it is edited.
: since 6.0

IntPtr Handle
: Wrapped native C++ pointer to CRhinoHistory instance
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

bool SetBool(int id,bool value)
: 

bool SetBools(int id,IEnumerable<bool> values)
: 

bool SetBrep(int id,Brep value)
: 

bool SetColor(int id,Color value)
: 

bool SetColors(int id,IEnumerable<Color> values)
: 

bool SetCurve(int id,Curve value)
: 

bool SetDouble(int id,double value)
: 

bool SetDoubles(int id,IEnumerable<double> values)
: 

bool SetGuid(int id,Guid value)
: 

bool SetGuids(int id,IEnumerable<Guid> values)
: 

bool SetHistoryVersion(int historyVersion)
: Specifies a non-zero integer that identifies the version of
     this history record. The virtual ReplayHistory() functions
     can check this version to avoid replaying history using
     information created by earlier versions of the command.
: Returns - True if successful.
: since 6.0

bool SetInt(int id,int value)
: 

bool SetInts(int id,IEnumerable<int> values)
: 

bool SetMesh(int id,Mesh value)
: 

bool SetObjRef(int id,ObjRef value)
: 

bool SetPoint3d(int id,Point3d value)
: 

bool SetPoint3dOnObject(int id,ObjRef objref,Point3d value)
: 

bool SetPoint3ds(int id,IEnumerable<Point3d> values)
: 

bool SetString(int id,string value)
: 

bool SetStrings(int id,IEnumerable<string> values)
: 

bool SetSurface(int id,Surface value)
: 

bool SetTransorm(int id,Transform value)
: 

bool SetVector3d(int id,Vector3d value)
: 

bool SetVector3ds(int id,IEnumerable<Vector3d> values)
: 
