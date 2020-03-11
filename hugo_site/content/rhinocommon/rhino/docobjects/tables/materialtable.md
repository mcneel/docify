---
title: "MaterialTable"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

```cs
public class MaterialTable :
    RhinoDocCommonTable<Material>, ICollection<Material>
```
## Properties

ModelComponentType ComponentType
: 
: since 6.0

int CurrentMaterialIndex
: At all times, there is a "current" material.  Unless otherwise
     specified, new objects are assigned to the current material.
     The current material is never locked, hidden, or deleted.

[ObjectMaterialSource](/rhinocommon/rhino/docobjects/objectmaterialsource/) CurrentMaterialSource
: Gets or sets the current material source.
## Methods

int Add()
: Adds a new material to the table based on the default material.
: Returns - The position of the new material in the table.

int Add(Material material)
: Adds a new material to the table based on a given material.
: Returns - The position of the new material in the table.

int Add(Material material,bool reference)
: Adds a new material to the table based on a given material.
: Returns - The position of the new material in the table.

bool Delete(Material item)
: 
: since 6.0

bool DeleteAt(int materialIndex)
: Removes a material at a specific position from this material table.
: Returns - True if successful. False if materialIndex is out of range or the
     material cannot be deleted because it is the current material or because
     it material contains active geometry.

int Find(Guid materialId,bool ignoreDeletedMaterials)
: Finds a material with a matching id.
: Returns - >=0 index of the material with the given name
     -1  no material has the given name.

int Find(string materialName,bool ignoreDeletedMaterials)
: Finds a meterial with a given name.
: Returns - >=0 index of the material with the given name
     -1  no material has the given name.

[Material](/rhinocommon/rhino/render/changequeue/material/) FindIndex(int index)
: Retrieves a Material object based on Index. This seach type of search is discouraged.
     We are moving towards using only IDs for all tables.
: Returns - A Material object, or None if none was found.
: since 6.0

bool Modify(Material newSettings,int materialIndex,bool quiet)
: Modify material settings.
: Returns - True if successful. False if materialIndex is out of range or the settings attempt
     to lock or hide the current material.

bool ResetMaterial(int materialIndex)
: 
