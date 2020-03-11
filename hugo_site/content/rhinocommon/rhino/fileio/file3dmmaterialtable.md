---
title: "File3dmMaterialTable"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Provides access to materials in the 3dm file.
```cs
public class File3dmMaterialTable :
    File3dmCommonComponentTable<Material>,
    IList<DocObjects.Material>
```
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.0
## Methods

DocObjects.Material FindIndex(int index)
: Retrieves a material based on Index. This search type of search is discouraged.
     We are moving towards using only IDs for all tables.
: Returns - A material, or None if none was found.
: since 6.0
