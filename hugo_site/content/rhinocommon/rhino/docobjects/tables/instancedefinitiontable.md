---
title: "InstanceDefinitionTable"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

```cs
public class InstanceDefinitionTable :
    RhinoDocCommonTable<InstanceDefinition>
```
## Properties

int ActiveCount
: Number of items in the instance definitions table, excluding deleted definitions.

ModelComponentType ComponentType
: 
: since 6.0

int Count
: Number of items in the instance definitions table.

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Document that owns this table.
## Methods

int Add(string name,string description,Point3d basePoint,GeometryBase geometry,ObjectAttributes attributes)
: Adds an instance definition to the instance definition table.
: Returns - >=0  index of instance definition in the instance definition table. -1 on failure.

int Add(string name,string description,Point3d basePoint,IEnumerable<GeometryBase> geometry)
: Adds an instance definition to the instance definition table.
: Returns - >=0  index of instance definition in the instance definition table. -1 on failure.

int Add(string name,string description,Point3d basePoint,IEnumerable<GeometryBase> geometry,IEnumerable<ObjectAttributes> attributes)
: Adds an instance definition to the instance definition table.
: Returns - >=0  index of instance definition in the instance definition table. -1 on failure.

void Compact(bool ignoreUndoReferences)
: Purge deleted instance definition information that is not in use.
     This function is time consuming and should be used in a thoughtful manner.
: since 5.9

bool Delete(InstanceDefinition item)
: Deletes the instance definition. This deletes all references too.
: Returns - True on success.
: since 6.0

bool Delete(int idefIndex,bool deleteReferences,bool quiet)
: Deletes the instance definition.
: Returns - True if successful. False if the instance definition has active references and bDeleteReferences is false.

bool DestroySourceArchive(InstanceDefinition definition,bool quiet)
: Destroys all source archive information.
     Specifically:
     *  is set to the empty string.
     * SourceRelativePath is set to false
     * The alternative source archive path is set to the empty string.
     * Checksum.Zero() is used to private destroy all checksum information.
     *  is set to .
: Returns - Returns True if the definition was successfully modified otherwise returns false.
: since 6.0

[InstanceDefinition](/rhinocommon/rhino/docobjects/instancedefinition/) Find(Guid instanceId,bool ignoreDeletedInstanceDefinitions)
: Finds the instance definition with a given id.
: Returns - The specified instance definition, or None if nothing matching was found.

[InstanceDefinition](/rhinocommon/rhino/docobjects/instancedefinition/) Find(string instanceDefinitionName)
: Finds the instance definition with a given name.
: Returns - The specified instance definition, or None if nothing matching was found.
: since 6.0

[InstanceDefinition](/rhinocommon/rhino/docobjects/instancedefinition/) Find(string instanceDefinitionName,bool ignoreDeletedInstanceDefinitions)
: Finds the instance definition with a given name.
: Returns - The specified instance definition, or None if nothing matching was found.

IEnumerator<InstanceDefinition> GetEnumerator()
: 

[InstanceDefinition](/rhinocommon/rhino/docobjects/instancedefinition/)[] GetList(bool ignoreDeleted)
: Gets an array of instance definitions.
: Returns - An array of instance definitions. This can be empty, but not null.

string GetUnusedInstanceDefinitionName()
: Gets unsed instance definition name used as default when creating
     new instance definitions.
: Returns - An unused instance definition name string.

string GetUnusedInstanceDefinitionName(string root)
: Gets unsed instance definition name used as default when creating
     new instance definitions.
: Returns - An unused instance definition name string.

string GetUnusedInstanceDefinitionName(string root,uint defaultSuffix)
: Gets unsed instance definition name used as default when creating
     new instance definitions.
: Returns - An unused instance definition name string.

int InstanceDefinitionIndex(Guid instanceId,bool ignoreDeletedInstanceDefinitions)
: Get the index of the instance definition with a given id.
: Returns - index > -1 if instance definition was found.
: since 6.0

bool MakeSourcePathRelative(InstanceDefinition idef,bool relative,bool quiet)
: Obsolete method that always returns false.
     Marks the source path for a linked instance definition as relative or absolute.
: Returns - True if the instance definition could be modified.

bool Modify(InstanceDefinition idef,string newName,string newDescription,bool quiet)
: Modifies the instance definition name and description.
     Does not change instance definition ID or geometry.
: Returns - True if successful.

bool Modify(int idefIndex,string newName,string newDescription,bool quiet)
: Modifies the instance definition name and description.
     Does not change instance definition ID or geometry.
: Returns - True if successful.

bool ModifyGeometry(int idefIndex,GeometryBase newGeometry,ObjectAttributes newAttributes)
: 

bool ModifyGeometry(int idefIndex,IEnumerable<GeometryBase> newGeometry)
: 

bool ModifyGeometry(int idefIndex,IEnumerable<GeometryBase> newGeometry,IEnumerable<ObjectAttributes> newAttributes)
: Modifies the instance definition geometry and replaces all references
     to the current definition with references to the new definition.
: Returns - True if operation succeeded.

bool ModifySourceArchive(int idefIndex,FileReference sourceArchive,InstanceDefinitionUpdateType updateType,bool quiet)
: If the instance definition is linked or embedded, use SetSource to
     specify the source archive.
: Returns - Returns True if the definition was successfully modified otherwise returns false.
: since 6.0

bool ModifySourceArchive(int idefIndex,string sourceArchive,InstanceDefinitionUpdateType updateType,bool quiet)
: If the instance definition is linked or embedded, use SetSource to
     specify the source archive.
: Returns - Returns True if the definition was successfully modified otherwise returns false.
: since 6.0

bool Purge(int idefIndex)
: Purges an instance definition and its definition geometry.
: Returns - True if successful. False if the instance definition cannot be purged
     because it is in use by reference objects or undo information.
: since 5.9

bool RefreshLinkedBlock(InstanceDefinition definition)
: Reload linked block definitions and update the Rhino display.
: Returns - Returns True if the linked file was successfully read and updated.
: since 6.0

bool Undelete(int idefIndex)
: Undeletes an instance definition that has been deleted by Delete()
: Returns - True if successful
: since 5.9

bool UndoModify(int idefIndex)
: Restores the instance definition to its previous state,
     if the instance definition has been modified and the modification can be undone.
: Returns - True if operation succeeded.

bool UpdateLinkedInstanceDefinition(int idefIndex,string filename,bool updateNestedLinks,bool quiet)
: Read the objects from a file and use them as the instance's definition geometry.
: since 5.9
