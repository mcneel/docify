---
title: "MaterialTable"
draft: false
---

*Namespace: Rhino.DocObjects.Tables*
## Properties
#### ModelComponentType ComponentType
- (summary) 
- (since) 6.0
#### int CurrentMaterialIndex
- (summary) 
     At all times, there is a "current" material.  Unless otherwise
     specified, new objects are assigned to the current material.
     The current material is never locked, hidden, or deleted.
     
- (since) 5.0
#### ObjectMaterialSource CurrentMaterialSource
- (summary) 
     Gets or sets the current material source.
     
- (since) 5.0
## Methods
#### int Add()
- (summary) 
     Adds a new material to the table based on the default material.
     
- (since) 5.0
- (returns) int This is some return comment
#### int Add(Material material)
- (summary) 
     Adds a new material to the table based on a given material.
     
- (since) 5.0
- (returns) int This is some return comment
#### int Add(Material material,bool reference)
- (summary) 
     Adds a new material to the table based on a given material.
     
- (since) 5.0
- (returns) int This is some return comment
#### bool Delete(Material item)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
#### bool DeleteAt(int materialIndex)
- (summary) 
     Removes a material at a specific position from this material table.
     
- (since) 5.0
- (returns) bool This is some return comment
#### int Find(Guid materialId,bool ignoreDeletedMaterials)
- (summary) Finds a material with a matching id.
- (since) 5.0
- (returns) int This is some return comment
#### int Find(string materialName,bool ignoreDeletedMaterials)
- (summary) 
     Finds a meterial with a given name.
     
- (since) 5.0
- (returns) int This is some return comment
#### Material FindIndex(int index)
- (summary) 
     Retrieves a Material object based on Index. This seach type of search is discouraged.
     We are moving towards using only IDs for all tables.
     
- (since) 6.0
- (returns) Material This is some return comment
#### bool Modify(Material newSettings,int materialIndex,bool quiet)
- (summary) Modify material settings.
- (since) 5.0
- (returns) bool This is some return comment
#### bool ResetMaterial(int materialIndex)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
