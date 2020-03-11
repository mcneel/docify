---
title: "ManifestTable"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Maintains an index to every model component that is in the 3dm file.
   This is the "more comprehensive" table that contains all objects in all other tables.
```cs
public class ManifestTable :
    ICommonComponentTable<ModelComponent>
```
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.0

int Count
: Total number of items in the manifest, including deleted items.
: since 6.0

long LongCount
: Total number of items in the manifest, including deleted items.
: since 6.0

object Parent
: Returns the parent object. This is the RhinoDoc, or the File3md file.
: since 6.0
## Methods

static ModelComponentType GetModelComponentTypeFromGenericType()
: Returns the result of the ComponentType property of a ModelComponent.
: Returns - A .
: since 6.0

int ActiveObjectCount(ModelComponentType type)
: Total number of items in the manifest, including deleted items.
: since 6.0

void Clear()
: Marks all items as deleted.
: since 6.0

bool Contains(ModelComponent item)
: Determines if an items is contained in this table.
: Returns - True if the item is contained; otherwise, false.
: since 6.0

void CopyTo(ModelComponent[] array,int arrayIndex)
: Copies the content of this table to an array.
: since 6.0

T FindId(Guid id)
: Uses the guid to find a model component. Deleted objects cannot be found by id.
     The guid is the value that is stored in the .Id property.
     In a single document, no two active objects have the same guid. If an object is
     replaced with a new object, then the guid  persists. For example, if the _Move command
     moves an object, then the moved object inherits its guid from the starting object.
     If the Copy command copies an object, then the copy gets a new guid. This guid persists
     through file saving/openning operations. This function will not find grip objects.
: Returns - Reference to the rhino object or None if no such object could be found.
: since 6.0

[ModelComponent](/rhinocommon/rhino/docobjects/modelcomponent/) FindId(Guid id)
: Uses the guid to find a model component. Deleted objects cannot be found by id.
     The guid is the value that is stored in the .Id property.
     In a single document, no two active objects have the same guid. If an object is
     replaced with a new object, then the guid  persists. For example, if the _Move command
     moves an object, then the moved object inherits its guid from the starting object.
     If the Copy command copies an object, then the copy gets a new guid. This guid persists
     through file saving/openning operations. This function will not find grip objects.
: Returns - Reference to the rhino object with the objectId or None if no such object could be found.
: since 6.0

[ModelComponent](/rhinocommon/rhino/docobjects/modelcomponent/) FindId(Guid id,ModelComponentType type)
: Uses the guid to find a model component. Deleted objects cannot be found by id.
     The guid is the value that is stored in the .Id property.
     In a single document, no two active objects have the same guid. If an object is
     replaced with a new object, then the guid  persists. For example, if the _Move command
     moves an object, then the moved object inherits its guid from the starting object.
     If the Copy command copies an object, then the copy gets a new guid. This guid persists
     through file saving/openning operations. This function will not find grip objects.
: Returns - Reference to the rhino object with the objectId or None if no such object could be found.
: since 6.0

T FindIndex(int index)
: Uses the index to find a model component.
     The index is the value that is stored in the .Index property.
: Returns - Reference to the rhino object or None if no such object could be found.
: since 6.0

[ModelComponent](/rhinocommon/rhino/docobjects/modelcomponent/) FindIndex(int index,ModelComponentType type)
: Uses the index to find a model component.
     The index is the value that is stored in the .Index property.
: Returns - Reference to the rhino object or None if no such object could be found.
: since 6.0

T FindName(string name,Guid parent)
: Uses the name to find a model component.
     The name is the value that is stored in the .Name property.
     Deleted objects have no name.
: Returns - Reference to the rhino object or None if no such object could be found.
: since 6.0

[ModelComponent](/rhinocommon/rhino/docobjects/modelcomponent/) FindName(string name,ModelComponentType type,Guid parent)
: Uses the name to find a model component.
     The name is the value that is stored in the .Name property.
     Deleted objects have no name.
: Returns - Reference to the rhino object or None if no such object could be found.
: since 6.0

T FindNameHash(NameHash nameHash)
: Uses the hash of the name to find a model component.
     Deleted objects have no name.
: since 6.0

[ModelComponent](/rhinocommon/rhino/docobjects/modelcomponent/) FindNameHash(NameHash nameHash,ModelComponentType type)
: Uses the hash of the name to find a model component.
     Deleted objects have no name.
: Returns - Reference to the rhino object or None if no such object could be found.
: since 6.0

IEnumerator<T> GetEnumerator()
: Visits all model components in the document, including default ones.
: Returns - An enumerator.
: since 6.0

IEnumerator<ModelComponent> GetEnumerator()
: Visits all model components in the document, including default ones.
: Returns - An enumerator.
: since 6.0

IEnumerator<ModelComponent> GetEnumerator(ModelComponentType type)
: Returns an enumerators that yields all model components, including default ones,
     relating to a particular type.
: Returns - An enumerator.
: since 6.0
