---
title: "TransformObjectList"
draft: false
---

*Namespace: Rhino.Collections*

   Used by the TransformCommand and GetTransform classes.
   
## Constructors
#### Rhino.Collections.TransformObjectList()
- (summary) 
- (since) 5.0
## Properties
#### int Count
- (summary)  Number of elements in this list 
- (since) 5.10
#### bool DisplayFeedbackEnabled
- (summary) 
- (since) 5.0
#### int GripCount
- (summary)  Number of elements in grip list 
- (since) 6.0
#### int GripOwnerCount
- (summary)  Number of elements in grip owner list 
- (since) 6.0
## Methods
#### void Add(ObjRef objref)
- (summary) 
     Add an ObjRef to this list. Use this to add Polyedges so the references are properly counted
     
- (since) 5.10
- (returns) void This is some return comment
#### void Add(RhinoObject rhinoObject)
- (summary)  Add a RhinoObject to this list 
- (since) 5.10
- (returns) void This is some return comment
#### int AddObjects(GetObject go,bool allowGrips)
- (summary) 
     Add objects to list with a GetObject
     
- (since) 6.0
- (returns) int This is some return comment
#### void Clear()
- (summary)  Remove all elements from this list 
- (since) 5.10
- (returns) void This is some return comment
#### void Dispose()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### BoundingBox GetBoundingBox(bool regularObjects,bool grips)
- (summary) 
     Gets the bounding box of all of the objects that this list contains.
     
- (since) 5.0
- (returns) BoundingBox This is some return comment
#### GripObject[] GripArray()
- (summary) 
     Gets access to the GripObject array of the TransformObjectList object.
     
- (since) 6.0
- (returns) GripObject[] This is some return comment
#### RhinoObject[] GripOwnerArray()
- (summary) 
     Gets access to the  GripOwner array of the TransformObjectList object.
     
- (since) 6.0
- (returns) RhinoObject[] This is some return comment
#### bool UpdateDisplayFeedbackTransform(Transform xform)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
