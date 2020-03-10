---
title: "LayerTable"
draft: false
---

*Namespace: Rhino.DocObjects.Tables*
## Properties
#### int ActiveCount
- (summary) 
     Returns number of layers in the layer table, excluding deleted layers.
     
- (since) 5.0
#### ModelComponentType ComponentType
- (summary) 
- (since) 6.0
#### int Count
- (summary) 
     Returns number of layers in the layer table, including deleted layers.
     
- (since) 5.0
#### Layer CurrentLayer
- (summary) 
     At all times, there is a "current" layer. Unless otherwise specified,
     new objects are assigned to the current layer. The current layer is
     never locked, hidden, or deleted.
     
     Returns reference to the current layer. Note that this reference may
     become invalid after a call to AddLayer().
     
- (since) 5.0
#### int CurrentLayerIndex
- (summary) 
     At all times, there is a "current" layer.  Unless otherwise specified, new objects
     are assigned to the current layer. The current layer is never locked, hidden, or deleted.
     Resturns: Zero based layer table index of the current layer.
     
- (since) 5.0
#### RhinoDoc Document
- (summary) Document that owns this table.
- (since) 5.0
## Methods
#### int Add()
- (summary) 
     Adds a new layer with default definition to the layer table.
     
- (since) 5.0
- (returns) int This is some return comment
#### int Add(Layer layer)
- (summary) 
     Adds a new layer with specified definition to the layer table.
     
- (since) 5.0
- (returns) int This is some return comment
#### int Add(string layerName,Color layerColor)
- (summary) 
     Adds a new layer with specified definition to the layer table.
     
- (since) 5.0
- (returns) int This is some return comment
#### int AddReferenceLayer()
- (summary) 
     Adds a new reference layer with default definition to the layer table.
     Reference layers are not saved in files.
     
- (since) 5.0
- (returns) int This is some return comment
#### int AddReferenceLayer(Layer layer)
- (summary) 
     Adds a new reference layer with specified definition to the layer table
     Reference layers are not saved in files.
     
- (since) 5.0
- (returns) int This is some return comment
#### bool Delete(Guid layerId,bool quiet)
- (summary) Deletes layer.
- (since) 6.0
- (returns) bool This is some return comment
#### bool Delete(int layerIndex,bool quiet)
- (summary) Deletes layer.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Delete(Layer layer)
- (summary) Deletes layer.
- (since) 6.0
- (returns) bool This is some return comment
#### bool Delete(Layer layer,bool quiet)
- (summary) Deletes layer.
- (since) 6.0
- (returns) bool This is some return comment
#### int[] Duplicate(IEnumerable<int> layerIndices,bool duplicateObjects,bool duplicateSublayers)
- (summary) 
     Duplicates, or copies, one or more layers. Duplicated layers are added to the document.
     
- (since) 6.18
- (returns) int[] This is some return comment
#### int[] Duplicate(int layerIndex,bool duplicateObjects,bool duplicateSublayers)
- (summary) 
     Duplicates, or copies, a layer. Duplicated layers are added to the document.
     
- (since) 6.18
- (returns) int[] This is some return comment
#### int Find(Guid layerId,bool ignoreDeletedLayers)
- (summary) Finds a layer with a matching ID.
- (since) 5.0
- (returns) int This is some return comment
#### int Find(Guid layerId,bool ignoreDeletedLayers,int notFoundReturnValue)
- (summary) Finds a layer with a matching ID.
- (since) 6.0
- (returns) int This is some return comment
#### int Find(Guid parentId,string layerName,bool ignoreDeletedLayers)
- (summary) Finds a layer with a given name and matching parent ID.
- (since) 6.0
- (returns) int This is some return comment
#### int Find(Guid parentId,string layerName,int notFoundReturnValue)
- (summary) Finds a layer with a given name and matching parent ID.
- (since) 6.0
- (returns) int This is some return comment
#### int Find(string layerName,bool ignoreDeletedLayers)
- (summary) 
     Finds the layer with a given name. If multiple layers exist that have the same name, the
     first match layer index will be returned.
     Deleted layers have no name.
- (since) 5.0
- (returns) int This is some return comment
#### int FindByFullPath(string layerPath,bool ignoreDeletedLayers)
- (summary) 
- (since) 5.0
- (returns) int This is some return comment
#### int FindByFullPath(string layerPath,int notFoundReturnValue)
- (summary) 
     Searches for a layer using the fully qualified name, that includes ancestors.
     Deleted layers have no name.
- (since) 6.0
- (returns) int This is some return comment
#### Layer FindIndex(int index)
- (summary) 
     Retrieves a Layer object based on Index. This seach type of search is discouraged.
     We are moving towards using only IDs for all tables.
     
- (since) 6.0
- (returns) Layer This is some return comment
#### Layer FindName(string layerName)
- (summary) 
     Finds the layer with a given name. If multiple layers exist that have the same name, the
     first match layer index will be returned.
     Deleted layers have no name.The default layer is NOT included in the search. If required, use the overload with startIndex input.
- (since) 6.0
- (returns) Layer This is some return comment
#### Layer FindName(string layerName,int startIndex)
- (summary) 
     Finds the next layer that has an index equal or higher than the searched value.
     Search in case-insensitive.
- (since) 6.0
- (returns) Layer This is some return comment
#### Layer FindNameHash(NameHash nameHash)
- (summary) 
     Finds a Layer given its name hash.
     
- (since) 6.0
- (returns) Layer This is some return comment
#### Layer FindNext(int index,string layerName)
- (summary) 
     Use FindName(name, index).
     
- (since) 6.0
- (returns) Layer This is some return comment
#### int FindNext(int index,string layerName,bool ignoreDeletedLayers)
- (summary) 
- (since) 5.0
- (returns) int This is some return comment
#### bool ForceLayerVisible(Guid layerId)
- (summary) 
     Makes a layer and all of its parent layers visible.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool ForceLayerVisible(int layerIndex)
- (summary) 
     Makes a layer and all of its parent layers visible.
     
- (since) 5.0
- (returns) bool This is some return comment
#### IEnumerator<Layer> GetEnumerator()
- (summary) 
- (since) 5.0
- (returns) IEnumerator<Layer> This is some return comment
#### bool GetSelected(List<int> layerIndices)
- (summary) 
     Returns the indices of layers that are selected on the Layer user interface.
     
- (since) (unknown)
- (returns) bool This is some return comment
#### string GetUnusedLayerName()
- (summary) 
     Gets the next unused layer name used as default when creating new layers.
     
- (since) 6.0
- (returns) string This is some return comment
#### string GetUnusedLayerName(bool ignoreDeleted)
- (summary) 
     Gets the next unused layer name used as default when creating new layers.
     
- (since) 5.0
- (returns) string This is some return comment
#### bool Modify(Layer newSettings,Guid layerId,bool quiet)
- (summary) Modifies layer settings.
- (since) 6.0
- (returns) bool This is some return comment
#### bool Modify(Layer newSettings,int layerIndex,bool quiet)
- (summary) Modifies layer settings.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Purge(Guid layerId,bool quiet)
- (summary) 
     Deletes a layer and all geometry objects on a layer.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool Purge(int layerIndex,bool quiet)
- (summary) 
     Deletes a layer and all geometry objects on a layer
     
- (since) 5.5
- (returns) bool This is some return comment
#### bool Select(IEnumerable<int> layerIndices,bool bDeselect)
- (summary) 
     Selects layers in the Layer user interface.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool SetCurrentLayerIndex(int layerIndex,bool quiet)
- (summary) 
     At all times, there is a "current" layer. Unless otherwise specified, new objects
     are assigned to the current layer. The current layer is never locked, hidden, or deleted.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Undelete(int layerIndex)
- (summary) 
     Undeletes a layer that has been deleted by DeleteLayer().
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool UndoModify(Guid layerId)
- (summary) 
     Restores the layer to its previous state,
     if the layer has been modified and the modification can be undone.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool UndoModify(Guid layerId,uint undoRecordSerialNumber)
- (summary) 
     Restores the layer to its previous state,
     if the layer has been modified and the modification can be undone.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool UndoModify(int layerIndex)
- (summary) 
     Restores the layer to its previous state,
     if the layer has been modified and the modification can be undone.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool UndoModify(int layerIndex,uint undoRecordSerialNumber)
- (summary) 
     Restores the layer to its previous state,
     if the layer has been modified and the modification can be undone.
     
- (since) 5.0
- (returns) bool This is some return comment
