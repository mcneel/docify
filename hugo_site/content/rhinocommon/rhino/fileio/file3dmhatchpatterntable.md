---
title: "File3dmHatchPatternTable"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Provides access to hatch pattern definitions in the 3dm file.
```cs
public class File3dmHatchPatternTable :
    File3dmCommonComponentTable<HatchPattern>,
    IList<HatchPattern>
```
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.0
## Methods

[HatchPattern](/rhinocommon/rhino/docobjects/hatchpattern/) FindIndex(int index)
: Retrieves a HatchPattern object based on Index. This search type of search is discouraged.
     We are moving towards using only IDs for all tables.
: Returns - A HatchPattern object, or None if none was found.
: since 6.0

[HatchPattern](/rhinocommon/rhino/docobjects/hatchpattern/) FindName(string name)
: Finds a HatchPattern given its name.
: Returns - An HatchPattern, or None on error.
: since 6.0

[HatchPattern](/rhinocommon/rhino/docobjects/hatchpattern/) FindNameHash(NameHash nameHash)
: Finds a HatchPattern given its name hash.
: Returns - An HatchPattern, or None on error.
: since 6.0
