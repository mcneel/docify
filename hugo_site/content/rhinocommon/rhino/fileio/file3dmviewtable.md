---
title: "File3dmViewTable"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Provides access to views in the 3dm file.
```cs
public class File3dmViewTable :
    IList<ViewInfo>, Collections.IRhinoTable<DocObjects.ViewInfo>
```
## Properties

int Count
: Gets the amount of items in the table.
: since 6.0
## Methods

void Add(ViewInfo item)
: Adds a
: since 6.0

void Clear()
: Removes all items from the table.
: since 6.0

bool Contains(ViewInfo item)
: Returns an indication of the presence of a view in the table.
: Returns - True if the item is in the table; False otherwise.
: since 6.0

void CopyTo(ViewInfo[] array,int arrayIndex)
: Copies the content of teh table to an array.
: since 6.0

bool Delete(int index)
: Removes an item.
: Returns - True if the item was removed.
: since 6.0

bool Delete(ViewInfo item)
: Deletes an item.
: since 6.0

[ViewInfo](/rhinocommon/rhino/docobjects/viewinfo/) FindName(string name)
: Finds a ViewInfo given its name.
: Returns - An ViewInfo, or None on error.
: since 6.0

IEnumerator<DocObjects.ViewInfo> GetEnumerator()
: Returns an enumerator that yields all views in the table.
: Returns - An enumerator.
: since 6.0

int IndexOf(ViewInfo item)
: Returns the index of the current ViewInfo.
: Returns - The index of the ViewInfo.
: since 6.0
