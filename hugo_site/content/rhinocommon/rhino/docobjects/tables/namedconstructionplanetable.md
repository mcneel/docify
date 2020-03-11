---
title: "NamedConstructionPlaneTable"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

Contains all named construction planes in a rhino document.
   This class cannot be inherited.
```cs
public class NamedConstructionPlaneTable : IEnumerable<ConstructionPlane>, Collections.IRhinoTable<ConstructionPlane>
```
## Properties

int Count
: Number of construction planes in the table.

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Gets the document that owns this table.
## Methods

int Add(string name,Plane plane)
: Adds named construction plane to document.
: Returns - 0 based index of named construction plane.
     -1 on failure.

bool Delete(int index)
: Remove named construction plane from the document.
: Returns - True if successful.

bool Delete(string name)
: Remove named construction plane from the document.
: Returns - True if successful.

int Find(string name)
: Finds a named construction plane.
: Returns - >=0 index of the construction plane with the given name.
     -1 no construction plane found with the given name.

IEnumerator<ConstructionPlane> GetEnumerator()
: 
