---
title: "ReplayHistoryData"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Provides history information to commands that will repeat history construction.
   Generally, a developer using this class will not construct a new instance, but receive one.
```cs
public class ReplayHistoryData : IDisposable
```
## Properties

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: The document this record belongs to

int HistoryVersion
: ReplayHistory overrides check the version number to ensure the information
     saved in the history record is compatible with the current implementation
     of ReplayHistory

Guid RecordId
: Each history record has a unique id that Rhino assigns when it adds the
     history record to the history record table

[ReplayHistoryResult](/rhinocommon/rhino/docobjects/replayhistoryresult/)[] Results
: Provides access to BOTH inputs and outputs of the replay history operation.
     Use this property to then call an appropriate UpdateToX() method and make your
     custom history support work.
## Methods

void Dispose()
: 

Rhino.DocObjects.ObjRef GetRhinoObjRef(int id)
: In ReplayHistory, use GetRhinoObjRef to convert the information
     in a history record into the ObjRef that has up to date
     RhinoObject pointers
: Returns - ObjRef on success, None if not successful

bool TryGetBool(int id,bool value)
: 

bool TryGetColor(int id,Color value)
: 

bool TryGetDouble(int id,double value)
: 

bool TryGetDoubles(int id,double[] values)
: 
: since 6.10

bool TryGetGuid(int id,Guid value)
: 

bool TryGetInt(int id,int value)
: 

bool TryGetPoint3d(int id,Point3d value)
: 

bool TryGetPoint3dOnObject(int id,Point3d value)
: 
: since 6.0

bool TryGetString(int id,string value)
: 

bool TryGetTransform(int id,Transform value)
: 

bool TryGetVector3d(int id,Vector3d value)
: 
