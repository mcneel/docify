---
title: "GroupTable"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

Group tables store the list of groups in a Rhino document.
```cs
public class GroupTable :
      RhinoDocCommonTable<Group>, ICollection<Group>
```
## Properties

ModelComponentType ComponentType
: 
: since 6.0
## Methods

int Add()
: Adds a new empty group to the group table.
: Returns - >=0 index of new group. 
       -1 group not added because a group with that name already exists.

int Add(IEnumerable<Guid> objectIds)
: Adds a new group to the group table with a set of objects.
: Returns - >=0 index of new group.
       -1 group not added because a group with that name already exists.

int Add(string groupName)
: Adds a new empty group to the group table.
: Returns - >=0 index of new group. 
       -1 group not added because a group with that name already exists.

int Add(string groupName,IEnumerable<Guid> objectIds)
: Adds a new group to the group table with a set of objects.
: Returns - >=0 index of new group. 
       -1 group not added because a group with that name already exists.

bool AddToGroup(int groupIndex,Guid objectId)
: Adds an object to an existing group.
: Returns - True if the operation was successful.

bool AddToGroup(int groupIndex,IEnumerable<Guid> objectIds)
: Adds a list of objects to an existing group.
: Returns - True if at least an operation was successful.

bool ChangeGroupName(int groupIndex,string newName)
: 

bool Delete(Group item)
: 
: since 6.0

bool Delete(int groupIndex)
: Deletes a group from this table.
       Deleted groups are kept in the runtime group table so that undo
       will work with groups.  Call IsDeleted() to determine if a group is deleted.
: Returns - True if the operation was successful.

int Find(string groupName)
: Finds a group with a given name.
: Returns - >=0 index of the group with the given name.
       UnsetIntIndex no group found with the given name.
: since 6.0

int Find(string groupName,bool ignoreDeletedGroups)
: Finds a group with a given name.
: Returns - >=0 index of the group with the given name.
       -1 no group found with the given name.

[Group](/rhinocommon/rhino/docobjects/group/) FindIndex(int index)
: Retrieves a Group object based on Index. This seach type of search is discouraged.
       We are moving towards using only IDs for all tables.
: Returns - A Group object, or None if none was found.
: since 6.0

[Group](/rhinocommon/rhino/docobjects/group/) FindName(string name)
: Finds a Linetype given its name. Returns the instance, rather than the index.
: Returns - An Linetype, or None on error.
: since 6.0

[Group](/rhinocommon/rhino/docobjects/group/) FindNameHash(NameHash nameHash)
: Finds a Linetype given its name hash.
: Returns - An Linetype, or None on error.
: since 6.0

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] GroupMembers(int groupIndex)
: Gets an array of all of the objects in a group.
: Returns - An array with all the objects in the specified group.

string GroupName(int groupIndex)
: 

string[] GroupNames(bool ignoreDeletedGroups)
: 

int GroupObjectCount(int groupIndex)
: 

int Hide(int groupIndex)
: 

bool IsDeleted(int groupIndex)
: 

int Lock(int groupIndex)
: 

int Show(int groupIndex)
: 

bool Undelete(int groupIndex)
: 

int Unlock(int groupIndex)
: 
