---
title: "Rhino.DocObjects.ReplayHistoryData"
date: 2020-03-10 09:24:56Z
draft: false
---

# Properties
## RhinoDoc Document
- (summary) The document this record belongs to
- (since) 5.0
## int HistoryVersion
- (summary) 
     ReplayHistory overrides check the version number to ensure the information
     saved in the history record is compatible with the current implementation
     of ReplayHistory
     
- (since) 5.0
## Guid RecordId
- (summary) 
     Each history record has a unique id that Rhino assigns when it adds the
     history record to the history record table
     
- (since) 5.0
## ReplayHistoryResult[] Results
- (summary) 
     Provides access to BOTH inputs and outputs of the replay history operation.
     Use this property to then call an appropriate UpdateToX() method and make your
     custom history support work.
- (since) 5.0
# Methods
## void Dispose()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## Rhino.DocObjects.ObjRef GetRhinoObjRef(int id)
- (summary) 
     In ReplayHistory, use GetRhinoObjRef to convert the information
     in a history record into the ObjRef that has up to date
     RhinoObject pointers
     
- (since) 5.0
- (returns) Rhino.DocObjects.ObjRef This is some return comment
## bool TryGetBool(int id,bool value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetColor(int id,Color value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDouble(int id,double value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDoubles(int id,double[] values)
- (summary) 
- (since) 6.10
- (returns) bool This is some return comment
## bool TryGetGuid(int id,Guid value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetInt(int id,int value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetPoint3d(int id,Point3d value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetPoint3dOnObject(int id,Point3d value)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetString(int id,string value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetTransform(int id,Transform value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetVector3d(int id,Vector3d value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
