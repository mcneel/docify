---
title: "HistoryRecord"
draft: false
---

*Namespace: Rhino.DocObjects*

   Provides a single bundling of information to be passed to Rhino when setting up history for an object.
   
## Constructors
#### Rhino.DocObjects.HistoryRecord(Command command,int version)
- (summary) 
- (since) 5.0
## Properties
#### bool CopyOnReplaceObject
- (summary) 
     When an object is replaced and the old object has a history record with
     this field set, the history record is copied and attached to the new object.
     That allows a descendant object to continue the history linkage after
     it is edited.
     
- (since) 6.0
#### IntPtr Handle
- (summary) 
     Wrapped native C++ pointer to CRhinoHistory instance
     
- (since) 5.0
## Methods
#### void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool SetBool(int id,bool value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetBools(int id,IEnumerable<bool> values)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetBrep(int id,Brep value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetColor(int id,Color value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetColors(int id,IEnumerable<Color> values)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetCurve(int id,Curve value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetDouble(int id,double value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetDoubles(int id,IEnumerable<double> values)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetGuid(int id,Guid value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetGuids(int id,IEnumerable<Guid> values)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetHistoryVersion(int historyVersion)
- (summary) 
     Specifies a non-zero integer that identifies the version of
     this history record. The virtual ReplayHistory() functions
     can check this version to avoid replaying history using
     information created by earlier versions of the command.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool SetInt(int id,int value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetInts(int id,IEnumerable<int> values)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetMesh(int id,Mesh value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetObjRef(int id,ObjRef value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetPoint3d(int id,Point3d value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetPoint3dOnObject(int id,ObjRef objref,Point3d value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetPoint3ds(int id,IEnumerable<Point3d> values)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetString(int id,string value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetStrings(int id,IEnumerable<string> values)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetSurface(int id,Surface value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetTransorm(int id,Transform value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetVector3d(int id,Vector3d value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetVector3ds(int id,IEnumerable<Vector3d> values)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
