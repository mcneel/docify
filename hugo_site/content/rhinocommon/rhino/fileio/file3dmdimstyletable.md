---
title: "File3dmDimStyleTable"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Provides access to annotation styles in the 3dm file.
```cs
public class File3dmDimStyleTable :
    File3dmCommonComponentTable<DimensionStyle>,
    IList<DimensionStyle>
```
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.0
## Methods

[DimensionStyle](/rhinocommon/rhino/docobjects/dimensionstyle/) FindIndex(int index)
: Retrieves a DimensionStyle object based on Index. This search type of search is discouraged.
     We are moving towards using only IDs for all tables.
: Returns - A DimensionStyle object, or None if none was found.
: since 6.0

[DimensionStyle](/rhinocommon/rhino/docobjects/dimensionstyle/) FindName(string name)
: Finds a DimensionStyle given its name.
: Returns - An DimensionStyle, or None on error.
: since 6.0

[DimensionStyle](/rhinocommon/rhino/docobjects/dimensionstyle/) FindNameHash(NameHash nameHash)
: Finds a DimensionStyle given its name hash.
: Returns - An DimensionStyle, or None on error.
: since 6.0
