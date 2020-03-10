---
title: "Rhino.DocObjects.Tables.InstanceDefinitionTable"
draft: false
---

# Properties
## int ActiveCount
- (summary) 
     Number of items in the instance definitions table, excluding deleted definitions.
     
- (since) 5.0
## ModelComponentType ComponentType
- (summary) 
- (since) 6.0
## int Count
- (summary) Number of items in the instance definitions table.
- (since) 5.0
## RhinoDoc Document
- (summary) Document that owns this table.
- (since) 5.0
# Methods
## int Add(string name,string description,Point3d basePoint,GeometryBase geometry,ObjectAttributes attributes)
- (summary) 
     Adds an instance definition to the instance definition table.
     
- (since) 5.0
- (returns) int This is some return comment
## int Add(string name,string description,Point3d basePoint,IEnumerable<GeometryBase> geometry)
- (summary) 
     Adds an instance definition to the instance definition table.
     
- (since) 5.0
- (returns) int This is some return comment
## int Add(string name,string description,Point3d basePoint,IEnumerable<GeometryBase> geometry,IEnumerable<ObjectAttributes> attributes)
- (summary) 
     Adds an instance definition to the instance definition table.
     
- (since) 5.0
- (returns) int This is some return comment
## void Compact(bool ignoreUndoReferences)
- (summary) 
     Purge deleted instance definition information that is not in use.
     This function is time consuming and should be used in a thoughtful manner.    
     
- (since) 5.9
- (returns) void This is some return comment
## bool Delete(InstanceDefinition item)
- (summary) 
     Deletes the instance definition. This deletes all references too.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool Delete(int idefIndex,bool deleteReferences,bool quiet)
- (summary) 
     Deletes the instance definition.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool DestroySourceArchive(InstanceDefinition definition,bool quiet)
- (summary) 
     Destroys all source archive information.
     Specifically:
     *  is set to the empty string.
     * SourceRelativePath is set to false
     * The alternative source archive path is set to the empty string.
     * Checksum.Zero() is used to private destroy all checksum information.
     *  is set to .
     
- (since) 6.0
- (returns) bool This is some return comment
## InstanceDefinition Find(Guid instanceId,bool ignoreDeletedInstanceDefinitions)
- (summary) Finds the instance definition with a given id.
- (since) 5.0
- (returns) InstanceDefinition This is some return comment
## InstanceDefinition Find(string instanceDefinitionName)
- (summary) Finds the instance definition with a given name.
- (since) 6.0
- (returns) InstanceDefinition This is some return comment
## InstanceDefinition Find(string instanceDefinitionName,bool ignoreDeletedInstanceDefinitions)
- (summary) Finds the instance definition with a given name.
- (since) 5.0
- (returns) InstanceDefinition This is some return comment
## IEnumerator<InstanceDefinition> GetEnumerator()
- (summary) 
- (since) 5.0
- (returns) IEnumerator<InstanceDefinition> This is some return comment
## InstanceDefinition[] GetList(bool ignoreDeleted)
- (summary) 
     Gets an array of instance definitions.
     
- (since) 5.0
- (returns) InstanceDefinition[] This is some return comment
## string GetUnusedInstanceDefinitionName()
- (summary) 
     Gets unsed instance definition name used as default when creating
     new instance definitions.
     
- (since) 5.0
- (returns) string This is some return comment
## string GetUnusedInstanceDefinitionName(string root)
- (summary) 
     Gets unsed instance definition name used as default when creating
     new instance definitions.
     
- (since) 5.0
- (returns) string This is some return comment
## string GetUnusedInstanceDefinitionName(string root,uint defaultSuffix)
- (summary) 
     Gets unsed instance definition name used as default when creating
     new instance definitions.
     
- (since) 5.0
- (returns) string This is some return comment
## int InstanceDefinitionIndex(Guid instanceId,bool ignoreDeletedInstanceDefinitions)
- (summary) 
     Get the index of the instance definition with a given id.
     
- (since) 6.0
- (returns) int This is some return comment
## bool MakeSourcePathRelative(InstanceDefinition idef,bool relative,bool quiet)
- (summary) 
     Obsolete method that always returns false.
     Marks the source path for a linked instance definition as relative or absolute.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Modify(InstanceDefinition idef,string newName,string newDescription,bool quiet)
- (summary) 
     Modifies the instance definition name and description.
     Does not change instance definition ID or geometry.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Modify(int idefIndex,string newName,string newDescription,bool quiet)
- (summary) 
     Modifies the instance definition name and description.
     Does not change instance definition ID or geometry.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ModifyGeometry(int idefIndex,GeometryBase newGeometry,ObjectAttributes newAttributes)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool ModifyGeometry(int idefIndex,IEnumerable<GeometryBase> newGeometry)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool ModifyGeometry(int idefIndex,IEnumerable<GeometryBase> newGeometry,IEnumerable<ObjectAttributes> newAttributes)
- (summary) 
     Modifies the instance definition geometry and replaces all references
     to the current definition with references to the new definition.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ModifySourceArchive(int idefIndex,FileReference sourceArchive,InstanceDefinitionUpdateType updateType,bool quiet)
- (summary) 
     If the instance definition is linked or embedded, use SetSource to
     specify the source archive.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool ModifySourceArchive(int idefIndex,string sourceArchive,InstanceDefinitionUpdateType updateType,bool quiet)
- (summary) 
     If the instance definition is linked or embedded, use SetSource to
     specify the source archive.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool Purge(int idefIndex)
- (summary) 
     Purges an instance definition and its definition geometry.
     
- (since) 5.9
- (returns) bool This is some return comment
## bool RefreshLinkedBlock(InstanceDefinition definition)
- (summary) 
     Reload linked block definitions and update the Rhino display.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool Undelete(int idefIndex)
- (summary) 
     Undeletes an instance definition that has been deleted by Delete()
     
- (since) 5.9
- (returns) bool This is some return comment
## bool UndoModify(int idefIndex)
- (summary) 
     Restores the instance definition to its previous state,
     if the instance definition has been modified and the modification can be undone.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool UpdateLinkedInstanceDefinition(int idefIndex,string filename,bool updateNestedLinks,bool quiet)
- (summary) 
     Read the objects from a file and use them as the instance's definition geometry.
     
- (since) 5.9
- (returns) bool This is some return comment
