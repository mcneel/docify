---
title: "File3dmLinetypeTable"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Provides access to Linetypes in the 3dm file.
```cs
public class File3dmLinetypeTable :
    File3dmCommonComponentTable<Linetype>,
    IList<DocObjects.Linetype>
```
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.0
## Methods

[Linetype](/rhinocommon/rhino/docobjects/linetype/) FindIndex(int index)
: Retrieves a Linetype object based on Index. This search type of search is discouraged.
     We are moving towards using only IDs for all tables.
: Returns - A Linetype, or None if none was found.
: since 6.0

[Linetype](/rhinocommon/rhino/docobjects/linetype/) FindName(string name)
: Finds a Linetype given its name.
: Returns - A Linetype, or None on error.
: since 6.0

[Linetype](/rhinocommon/rhino/docobjects/linetype/) FindNameHash(NameHash nameHash)
: Finds a Linetype given its name hash.
: Returns - An Linetype, or None on error.
: since 6.0
