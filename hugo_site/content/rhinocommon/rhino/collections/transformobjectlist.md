---
title: "TransformObjectList"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Collections](../)*

Used by the TransformCommand and GetTransform classes.
```cs
public class TransformObjectList : IDisposable
```
## Constructors

TransformObjectList()
: 
## Properties

int Count
: Number of elements in this list
: since 5.10

bool DisplayFeedbackEnabled
: 

int GripCount
: Number of elements in grip list
: since 6.0

int GripOwnerCount
: Number of elements in grip owner list
: since 6.0
## Methods

void Add(ObjRef objref)
: Add an ObjRef to this list. Use this to add Polyedges so the references are properly counted
: since 5.10

void Add(RhinoObject rhinoObject)
: Add a RhinoObject to this list
: since 5.10

int AddObjects(GetObject go,bool allowGrips)
: Add objects to list with a GetObject
: Returns - Number of objects selected.
: since 6.0

void Clear()
: Remove all elements from this list
: since 5.10

void Dispose()
: 

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) GetBoundingBox(bool regularObjects,bool grips)
: Gets the bounding box of all of the objects that this list contains.
: Returns - Unset BoundingBox if this list is empty.

[GripObject](/rhinocommon/rhino/docobjects/gripobject/)[] GripArray()
: Gets access to the GripObject array of the TransformObjectList object.
: Returns - An array of GripObjects, empty if there were no GripObjects
: since 6.0

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] GripOwnerArray()
: Gets access to the  GripOwner array of the TransformObjectList object.
: Returns - An array of GripOwner, empty if there were no GripOwners.
: since 6.0

bool UpdateDisplayFeedbackTransform(Transform xform)
: 
