---
title: "Rhino.FileIO.ManifestTable"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## ModelComponentType ComponentType
- (summary) 
     Returns .
     
- (since) 6.0
## int Count
- (summary) 
     Total number of items in the manifest, including deleted items.
     
- (since) 6.0
## long LongCount
- (summary) 
     Total number of items in the manifest, including deleted items.
     
- (since) 6.0
## object Parent
- (summary) 
     Returns the parent object. This is the RhinoDoc, or the File3md file. 
     
- (since) 6.0
# Methods
## static ModelComponentType GetModelComponentTypeFromGenericType()
- (summary) 
     Returns the result of the ComponentType property of a ModelComponent.
     
- (since) 6.0
- (returns) ModelComponentType This is some return comment
## int ActiveObjectCount(ModelComponentType type)
- (summary) 
     Total number of items in the manifest, including deleted items.
     
- (since) 6.0
- (returns) int This is some return comment
## void Clear()
- (summary) 
     Marks all items as deleted.
     
- (since) 6.0
- (returns) void This is some return comment
## bool Contains(ModelComponent item)
- (summary) 
     Determines if an items is contained in this table.
     
- (since) 6.0
- (returns) bool This is some return comment
## void CopyTo(ModelComponent[] array,int arrayIndex)
- (summary) 
     Copies the content of this table to an array.
     
- (since) 6.0
- (returns) void This is some return comment
## T FindId(Guid id)
- (summary) 
     Uses the guid to find a model component. Deleted objects cannot be found by id.
     The guid is the value that is stored in the .Id property.
     In a single document, no two active objects have the same guid. If an object is
     replaced with a new object, then the guid  persists. For example, if the _Move command
     moves an object, then the moved object inherits its guid from the starting object.
     If the Copy command copies an object, then the copy gets a new guid. This guid persists
     through file saving/openning operations. This function will not find grip objects.
     
- (since) 6.0
- (returns) T This is some return comment
## ModelComponent FindId(Guid id)
- (summary) 
     Uses the guid to find a model component. Deleted objects cannot be found by id.
     The guid is the value that is stored in the .Id property.
     In a single document, no two active objects have the same guid. If an object is
     replaced with a new object, then the guid  persists. For example, if the _Move command
     moves an object, then the moved object inherits its guid from the starting object.
     If the Copy command copies an object, then the copy gets a new guid. This guid persists
     through file saving/openning operations. This function will not find grip objects.
     
- (since) 6.0
- (returns) ModelComponent This is some return comment
## ModelComponent FindId(Guid id,ModelComponentType type)
- (summary) 
     Uses the guid to find a model component. Deleted objects cannot be found by id.
     The guid is the value that is stored in the .Id property.
     In a single document, no two active objects have the same guid. If an object is
     replaced with a new object, then the guid  persists. For example, if the _Move command
     moves an object, then the moved object inherits its guid from the starting object.
     If the Copy command copies an object, then the copy gets a new guid. This guid persists
     through file saving/openning operations. This function will not find grip objects.
     
- (since) 6.0
- (returns) ModelComponent This is some return comment
## T FindIndex(int index)
- (summary) 
     Uses the index to find a model component.
     The index is the value that is stored in the .Index property.
     
- (since) 6.0
- (returns) T This is some return comment
## ModelComponent FindIndex(int index,ModelComponentType type)
- (summary) 
     Uses the index to find a model component.
     The index is the value that is stored in the .Index property.
     
- (since) 6.0
- (returns) ModelComponent This is some return comment
## T FindName(string name,Guid parent)
- (summary) 
     Uses the name to find a model component.
     The name is the value that is stored in the .Name property.
     Deleted objects have no name.
     
- (since) 6.0
- (returns) T This is some return comment
## ModelComponent FindName(string name,ModelComponentType type,Guid parent)
- (summary) 
     Uses the name to find a model component.
     The name is the value that is stored in the .Name property.
     Deleted objects have no name.
     
- (since) 6.0
- (returns) ModelComponent This is some return comment
## T FindNameHash(NameHash nameHash)
- (summary) 
     Uses the hash of the name to find a model component.
     Deleted objects have no name.
     
- (since) 6.0
- (returns) T This is some return comment
## ModelComponent FindNameHash(NameHash nameHash,ModelComponentType type)
- (summary) 
     Uses the hash of the name to find a model component.
     Deleted objects have no name.
     
- (since) 6.0
- (returns) ModelComponent This is some return comment
## IEnumerator<T> GetEnumerator()
- (summary) 
     Visits all model components in the document, including default ones.
     
- (since) 6.0
- (returns) IEnumerator<T> This is some return comment
## IEnumerator<ModelComponent> GetEnumerator()
- (summary) 
     Visits all model components in the document, including default ones.
     
- (since) 6.0
- (returns) IEnumerator<ModelComponent> This is some return comment
## IEnumerator<ModelComponent> GetEnumerator(ModelComponentType type)
- (summary) 
     Returns an enumerators that yields all model components, including default ones,
     relating to a particular type.
     
- (since) 6.0
- (returns) IEnumerator<ModelComponent> This is some return comment
