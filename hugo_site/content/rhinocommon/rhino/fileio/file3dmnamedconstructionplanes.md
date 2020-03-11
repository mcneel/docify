---
title: "File3dmNamedConstructionPlanes"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Provides access to namned construction planes in the 3dm file.
```cs
public class File3dmNamedConstructionPlanes :
    IList<ConstructionPlane>, Collections.IRhinoTable<ConstructionPlane>
```
## Properties

int Count
: Number of named construction planes in the table.
: since 6.0
## Methods

void Add(ConstructionPlane cplane)
: Adds a named construction plane to the table.
: since 6.0

int Add(string name,Plane plane)
: Adds a named construction plane to the table.
: Returns - 0 based index of the named construction plane.
     -1 on failure.
: since 6.0

void Clear()
: Removes all named construction planes from the table.
: since 6.0

bool Contains(ConstructionPlane cplane)
: Returns an indication of the presence of a named construction plane in the table.
: Returns - True if the named construction plane is in the table; False otherwise.
: since 6.0

void CopyTo(ConstructionPlane[] array,int arrayIndex)
: Copies the content of the table to an array.
: since 6.0

bool Delete(ConstructionPlane cplane)
: Deletes a named construction plane from the table.
: since 6.0

bool Delete(int index)
: Remove a named construction plane from the table.
: Returns - True if successful.
: since 6.0

[ConstructionPlane](/rhinocommon/rhino/docobjects/constructionplane/) FindName(string name)
: Finds a named construction plane given its name.
: Returns - A ConstructionPlane, or None if not found.
: since 6.0

IEnumerator<ConstructionPlane> GetEnumerator()
: Gets an enumerator that yields all construction planes in this collection.
: Returns - The enumerator.
: since 6.0

int IndexOf(ConstructionPlane cplane)
: Returns the index of a named construction plane.
: Returns - The index of the named construction plane, -1 if not found.
: since 6.0
