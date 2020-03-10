---
title: "CommonComponentTable"
draft: false
---

*Namespace: Rhino.FileIO*

   Provides a base table type that encompasses all document tables, both in RhinoDoc and File3dm.
   
## Properties
#### ModelComponentType ComponentType
- (summary) 
     Returns the actual component type of a table.
     
- (since) (unknown)
#### int Count
- (summary) 
     Returns the count of all items, including deleted ones.
     
- (since) (unknown)
## Methods
#### void Clear()
- (summary) 
     Marks all items as deleted.
     
- (since) (unknown)
- (returns) void This is some return comment
#### bool Delete(T item)
- (summary) 
     Deletes an item. Items that are deleted are still keeping their space, but the 'IsDeleted' flag is checked.
     
- (since) (unknown)
- (returns) bool This is some return comment
#### T FindId(Guid id)
- (summary) 
     Uses the guid to find a model component. Deleted objects cannot be found by id.
     The guid is the value that is stored in the .Id property.
     In a single document, no two active objects have the same guid. If an object is
     replaced with a new object, then the guid  persists. For example, if the _Move command
     moves an object, then the moved object inherits its guid from the starting object.
     If the Copy command copies an object, then the copy gets a new guid. This guid persists
     through file saving/openning operations. This function will not find grip objects.
     
- (since) (unknown)
- (returns) T This is some return comment
#### IEnumerator<T> GetEnumerator()
- (summary) 
     Returns the enumerator that yields all items.
     
- (since) (unknown)
- (returns) IEnumerator<T> This is some return comment
