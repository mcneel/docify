---
title: "Rhino.DocObjects.Tables.GroupTable"
draft: false
---

# Properties
## ModelComponentType ComponentType
- (summary) 
- (since) 6.0
# Methods
## int Add()
- (summary) Adds a new empty group to the group table.
- (since) 5.0
- (returns) int This is some return comment
## int Add(IEnumerable<Guid> objectIds)
- (summary) 
       Adds a new group to the group table with a set of objects.
       
- (since) 5.0
- (returns) int This is some return comment
## int Add(string groupName)
- (summary) Adds a new empty group to the group table.
- (since) 5.0
- (returns) int This is some return comment
## int Add(string groupName,IEnumerable<Guid> objectIds)
- (summary) 
       Adds a new group to the group table with a set of objects.
       
- (since) 5.0
- (returns) int This is some return comment
## bool AddToGroup(int groupIndex,Guid objectId)
- (summary) 
       Adds an object to an existing group.
       
- (since) 5.0
- (returns) bool This is some return comment
## bool AddToGroup(int groupIndex,IEnumerable<Guid> objectIds)
- (summary) 
       Adds a list of objects to an existing group.
       
- (since) 5.0
- (returns) bool This is some return comment
## bool ChangeGroupName(int groupIndex,string newName)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool Delete(Group item)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool Delete(int groupIndex)
- (summary) 
       Deletes a group from this table.
       Deleted groups are kept in the runtime group table so that undo
       will work with groups.  Call IsDeleted() to determine if a group is deleted.
- (since) 5.0
- (returns) bool This is some return comment
## int Find(string groupName)
- (summary) Finds a group with a given name.
- (since) 6.0
- (returns) int This is some return comment
## int Find(string groupName,bool ignoreDeletedGroups)
- (summary) Finds a group with a given name.
- (since) 5.0
- (returns) int This is some return comment
## Group FindIndex(int index)
- (summary) 
       Retrieves a Group object based on Index. This seach type of search is discouraged.
       We are moving towards using only IDs for all tables.
       
- (since) 6.0
- (returns) Group This is some return comment
## Group FindName(string name)
- (summary) 
       Finds a Linetype given its name. Returns the instance, rather than the index.
       
- (since) 6.0
- (returns) Group This is some return comment
## Group FindNameHash(NameHash nameHash)
- (summary) 
       Finds a Linetype given its name hash.
       
- (since) 6.0
- (returns) Group This is some return comment
## RhinoObject[] GroupMembers(int groupIndex)
- (summary) 
       Gets an array of all of the objects in a group.
       
- (since) 5.0
- (returns) RhinoObject[] This is some return comment
## string GroupName(int groupIndex)
- (summary) 
- (since) 5.0
- (returns) string This is some return comment
## string[] GroupNames(bool ignoreDeletedGroups)
- (summary) 
- (since) 5.0
- (returns) string[] This is some return comment
## int GroupObjectCount(int groupIndex)
- (summary) 
- (since) 5.0
- (returns) int This is some return comment
## int Hide(int groupIndex)
- (summary) 
- (since) 5.0
- (returns) int This is some return comment
## bool IsDeleted(int groupIndex)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## int Lock(int groupIndex)
- (summary) 
- (since) 5.0
- (returns) int This is some return comment
## int Show(int groupIndex)
- (summary) 
- (since) 5.0
- (returns) int This is some return comment
## bool Undelete(int groupIndex)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## int Unlock(int groupIndex)
- (summary) 
- (since) 5.0
- (returns) int This is some return comment
