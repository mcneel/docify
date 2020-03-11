---
title: "HatchPatternTable"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

All of the hatch pattern definitions contained in a rhino document.
```cs
public class HatchPatternTable :
    RhinoDocCommonTable<HatchPattern>, ICollection<HatchPattern>
```
## Properties

ModelComponentType ComponentType
: 
: since 6.0

int CurrentHatchPatternIndex
: At all times, there is a "current" hatch pattern.  Unless otherwise
     specified, new objects are assigned to the current hatch pattern.
     The current hatch pattern is never locked, hidden, or deleted.
## Methods

int Add(HatchPattern pattern)
: Adds a new hatch pattern with specified definition to the table.
: Returns - >=0 index of new hatch pattern
     -1  not added because a hatch pattern with that name already exists or
     some other problem occured.

bool Delete(HatchPattern item)
: 
: since 6.0

bool Delete(HatchPattern item,bool quiet)
: 
: since 6.0

int Find(string name,bool ignoreDeleted)
: Finds the hatch pattern with a given name. Search ignores case.
: Returns - Index of the hatch pattern with the given name. -1 if no hatch pattern found.

[HatchPattern](/rhinocommon/rhino/docobjects/hatchpattern/) FindIndex(int index)
: Retrieves a HatchPattern object based on Index. This seach type of search is discouraged.
     We are moving towards using only IDs for all tables.
: Returns - A HatchPattern object, or None if none was found.
: since 6.0

[HatchPattern](/rhinocommon/rhino/docobjects/hatchpattern/) FindName(string name)
: Finds the hatch pattern with a given name. Search ignores case.
: Returns - Hatch pattern with the given name. Null if no hatch pattern found.
: since 6.0

[HatchPattern](/rhinocommon/rhino/docobjects/hatchpattern/) FindNameHash(NameHash nameHash)
: Finds a HatchPattern given its name hash.
: Returns - An Linetype, or None on error.
: since 6.0
