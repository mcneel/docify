---
title: "File3dmGroupTable"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Provides access to groups in the 3dm file.
```cs
public class File3dmGroupTable :
    File3dmCommonComponentTable<Group>,
    IList<Group>
```
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.5
## Methods

[Group](/rhinocommon/rhino/docobjects/group/) FindIndex(int groupIndex)
: Retrieves a Group object based on an index. This search type of search is discouraged.
     We are moving towards using only IDs for all tables.
: Returns - A Group object, or None if none was found.
: since 6.5

[Group](/rhinocommon/rhino/docobjects/group/) FindName(string name)
: Finds a Group given its name.
: Returns - A Group, or None on error.
: since 6.5

[Group](/rhinocommon/rhino/docobjects/group/) FindNameHash(NameHash nameHash)
: Finds a Group given its name hash.
: Returns - A Group, or None on error.
: since 6.5

[File3dmObject](/rhinocommon/rhino/fileio/file3dmobject/)[] GroupMembers(int groupIndex)
: Gets an array of all of the objects in a group.
: Returns - Array of objects that belong to the specified group or empty array if no objects could be found.
: since 6.20
