---
title: "Rhino.DocObjects.Tables.NamedLayerStateTable"
draft: false
---

# Properties
## int Count
- (summary) 
     Returns the number of named layers states in the document.
     
- (since) 6.14
## RhinoDoc Document
- (summary) 
     Document that owns this table.
     
- (since) 6.14
## string[] Names
- (summary) 
     Returns the names of named layer states in the document.
     
- (since) 6.14
# Methods
## bool Delete(string name)
- (summary) 
     Deletes an exising named layer state.
     
- (since) 6.14
- (returns) bool This is some return comment
## int FindName(string name)
- (summary) 
     Returns the index of an existing named layer state.
     
- (since) 6.14
- (returns) int This is some return comment
## int Import(string filename)
- (summary) 
     Imports named layer states from a 3dm file.
     
- (since) 6.15
- (returns) int This is some return comment
## bool Rename(string oldName,string newName)
- (summary) 
     Renames an existing named layer state.
     
- (since) 6.14
- (returns) bool This is some return comment
## bool Restore(string name,RestoreLayerProperties properties)
- (summary) 
     Restores a named layer state.
     
- (since) 6.14
- (returns) bool This is some return comment
## bool Restore(string name,RestoreLayerProperties properties,Guid viewportId)
- (summary) 
     Restores a named layer state.
     
- (since) 6.14
- (returns) bool This is some return comment
## int Save(string name)
- (summary) 
     Saves or updates a named layer state. 
     
- (since) 6.14
- (returns) int This is some return comment
## int Save(string name,Guid viewportId)
- (summary) 
     Saves or updates a named layer state. 
     
- (since) 6.14
- (returns) int This is some return comment
