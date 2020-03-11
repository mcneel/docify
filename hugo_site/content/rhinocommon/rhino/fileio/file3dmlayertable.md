---
title: "File3dmLayerTable"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Provides access to layers in the 3dm file.
```cs
public class File3dmLayerTable :
   File3dmCommonComponentTable<Layer>,
   IList<Layer>
```
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.0
## Methods

[Layer](/rhinocommon/rhino/docobjects/layer/) FindIndex(int index)
: Retrieves a Layer object based on Index. This search type of search is discouraged.
     We are moving towards using only IDs for all tables.
: Returns - A Layer object, or None if none was found.
: since 6.0

[Layer](/rhinocommon/rhino/docobjects/layer/) FindName(string name,Guid parentId)
: Finds a Layer given its name.
: Returns - A Layer, or None on error.
: since 6.0

[Layer](/rhinocommon/rhino/docobjects/layer/) FindNameHash(NameHash nameHash)
: Finds a Layer given its name hash.
: Returns - An Layer, or None on error.
: since 6.0
