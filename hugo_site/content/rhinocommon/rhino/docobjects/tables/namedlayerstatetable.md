---
title: "NamedLayerStateTable"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

All named layer states in a Rhino document.
```cs
public class NamedLayerStateTable
```
## Properties

int Count
: Returns the number of named layers states in the document.
: since 6.14

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Document that owns this table.
: since 6.14

string[] Names
: Returns the names of named layer states in the document.
: since 6.14
## Methods

bool Delete(string name)
: Deletes an exising named layer state.
: Returns - True if successful, False otherwise.
: since 6.14

int FindName(string name)
: Returns the index of an existing named layer state.
: Returns - >0 if successful, -1 if not found.
: since 6.14

int Import(string filename)
: Imports named layer states from a 3dm file.
: Returns - The number of named layers states imported.
: since 6.15

bool Rename(string oldName,string newName)
: Renames an existing named layer state.
: Returns - True if successful, False otherwise.
: since 6.14

bool Restore(string name,RestoreLayerProperties properties)
: Restores a named layer state.
: Returns - True if successful, False otherwise.
: since 6.14

bool Restore(string name,RestoreLayerProperties properties,Guid viewportId)
: Restores a named layer state.
: since 6.14

int Save(string name)
: Saves or updates a named layer state.
: Returns - The index of the newly added, or updated, layer state.
: since 6.14

int Save(string name,Guid viewportId)
: Saves or updates a named layer state.
: Returns - The index of the newly added, or updated, layer state.
: since 6.14
