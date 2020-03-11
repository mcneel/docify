---
title: "File3dmCommonComponentTable"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Provides a base table type that is shared among all File3dm tables.
```cs
public class File3dmCommonComponentTable : CommonComponentTable<T>, ICollection<T>
```
## Methods

void Add(T item)
: Adds an item.
: since (unknown)

void Delete(int index)
: Flags a component as deleted.
: Returns - True on success.
: since (unknown)

bool Delete(T item)
: Flags a component as deleted.
: Returns - True on success.
: since (unknown)

string Dump()
: Prepares a text dump of object table.
: Returns - A string containing the dump.
: since (unknown)
