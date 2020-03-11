---
title: "CommonComponentTable"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Provides a base table type that encompasses all document tables, both in RhinoDoc and File3dm.
```cs
public class CommonComponentTable :
    ICommonComponentTable<T>,
    IList<T>, IReadOnlyList<T>
```
## Properties

ModelComponentType ComponentType
: Returns the actual component type of a table.
: since (unknown)

int Count
: Returns the count of all items, including deleted ones.
: since (unknown)
## Methods

void Clear()
: Marks all items as deleted.
: since (unknown)

bool Delete(T item)
: Deletes an item. Items that are deleted are still keeping their space, but the 'IsDeleted' flag is checked.
: Returns - True if an items could be deleted (e.g., it was not locked).
: since (unknown)

T FindId(Guid id)
: Uses the guid to find a model component. Deleted objects cannot be found by id.
     The guid is the value that is stored in the .Id property.
     In a single document, no two active objects have the same guid. If an object is
     replaced with a new object, then the guid  persists. For example, if the _Move command
     moves an object, then the moved object inherits its guid from the starting object.
     If the Copy command copies an object, then the copy gets a new guid. This guid persists
     through file saving/openning operations. This function will not find grip objects.
: Returns - Reference to the rhino object with the objectId or None if no such object could be found.
: since (unknown)

IEnumerator<T> GetEnumerator()
: Returns the enumerator that yields all items.
: since (unknown)
