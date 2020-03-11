---
title: "LayerTable"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

```cs
public class LayerTable :
    RhinoDocCommonTable<Layer>, ICollection<Layer>
```
## Properties

int ActiveCount
: Returns number of layers in the layer table, excluding deleted layers.

ModelComponentType ComponentType
: 
: since 6.0

int Count
: Returns number of layers in the layer table, including deleted layers.

[Layer](/rhinocommon/rhino/docobjects/layer/) CurrentLayer
: At all times, there is a "current" layer. Unless otherwise specified,
     new objects are assigned to the current layer. The current layer is
     never locked, hidden, or deleted.
     
     Returns reference to the current layer. Note that this reference may
     become invalid after a call to AddLayer().

int CurrentLayerIndex
: At all times, there is a "current" layer.  Unless otherwise specified, new objects
     are assigned to the current layer. The current layer is never locked, hidden, or deleted.
     Resturns: Zero based layer table index of the current layer.

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Document that owns this table.
## Methods

int Add()
: Adds a new layer with default definition to the layer table.
: Returns - index of new layer.

int Add(Layer layer)
: Adds a new layer with specified definition to the layer table.
: Returns - >=0 index of new layer
     -1  layer not added because a layer with that name already exists.

int Add(string layerName,Color layerColor)
: Adds a new layer with specified definition to the layer table.
: Returns - >=0 index of new layer
     -1  layer not added because a layer with that name already exists.

int AddReferenceLayer()
: Adds a new reference layer with default definition to the layer table.
     Reference layers are not saved in files.
: Returns - index of new layer.

int AddReferenceLayer(Layer layer)
: Adds a new reference layer with specified definition to the layer table
     Reference layers are not saved in files.
: Returns - >=0 index of new layer
     -1  layer not added because a layer with that name already exists.

bool Delete(Guid layerId,bool quiet)
: Deletes layer.
: Returns - True if successful. False if layerIndex is out of range or the the layer cannot be
     deleted because it is the current layer or because it layer contains active geometry.
: since 6.0

bool Delete(int layerIndex,bool quiet)
: Deletes layer.
: Returns - True if successful. False if layerIndex is out of range or the the layer cannot be
     deleted because it is the current layer or because it layer contains active geometry.

bool Delete(Layer layer)
: Deletes layer.
: Returns - True if successful. False if layerIndex is out of range or the the layer cannot be
     deleted because it is the current layer or because it layer contains active geometry.
: since 6.0

bool Delete(Layer layer,bool quiet)
: Deletes layer.
: Returns - True if successful. False if layerIndex is out of range or the the layer cannot be
     deleted because it is the current layer or because it layer contains active geometry.
: since 6.0

int[] Duplicate(IEnumerable<int> layerIndices,bool duplicateObjects,bool duplicateSublayers)
: Duplicates, or copies, one or more layers. Duplicated layers are added to the document.
: Returns - The indices of the newly added layers if successful, an empty array on failure.
: since 6.18

int[] Duplicate(int layerIndex,bool duplicateObjects,bool duplicateSublayers)
: Duplicates, or copies, a layer. Duplicated layers are added to the document.
: Returns - The indices of the newly added layers if successful, an empty array on failure.
: since 6.18

int Find(Guid layerId,bool ignoreDeletedLayers)
: Finds a layer with a matching ID.
: Returns - >=0 index of the layer with the given name
     -1  no layer has the given name.

int Find(Guid layerId,bool ignoreDeletedLayers,int notFoundReturnValue)
: Finds a layer with a matching ID.
: Returns - The index of the found layer, or notFoundReturnValue.
: since 6.0

int Find(Guid parentId,string layerName,bool ignoreDeletedLayers)
: Finds a layer with a given name and matching parent ID.
: Returns - >=0 index of the layer with the given name
     -1  no layer has the given name.
: since 6.0

int Find(Guid parentId,string layerName,int notFoundReturnValue)
: Finds a layer with a given name and matching parent ID.
: Returns - The index of the found layer, or notFoundReturnValue.
: since 6.0

int Find(string layerName,bool ignoreDeletedLayers)
: Finds the layer with a given name. If multiple layers exist that have the same name, the
     first match layer index will be returned.
     Deleted layers have no name.
: Returns - index of the layer with the given name.
     If no layer is found, the index of the default layer, -1, is returned.

int FindByFullPath(string layerPath,bool ignoreDeletedLayers)
: 

int FindByFullPath(string layerPath,int notFoundReturnValue)
: Searches for a layer using the fully qualified name, that includes ancestors.
     Deleted layers have no name.
: Returns - The index of the found layer, or notFoundReturnValue.
: since 6.0

[Layer](/rhinocommon/rhino/docobjects/layer/) FindIndex(int index)
: Retrieves a Layer object based on Index. This seach type of search is discouraged.
     We are moving towards using only IDs for all tables.
: Returns - A Layer object, or None if none was found.
: since 6.0

[Layer](/rhinocommon/rhino/docobjects/layer/) FindName(string layerName)
: Finds the layer with a given name. If multiple layers exist that have the same name, the
     first match layer index will be returned.
     Deleted layers have no name.The default layer is NOT included in the search. If required, use the overload with startIndex input.
: Returns - A layer, or null.
: since 6.0

[Layer](/rhinocommon/rhino/docobjects/layer/) FindName(string layerName,int startIndex)
: Finds the next layer that has an index equal or higher than the searched value.
     Search in case-insensitive.
: Returns - A layer, or null.
: since 6.0

[Layer](/rhinocommon/rhino/docobjects/layer/) FindNameHash(NameHash nameHash)
: Finds a Layer given its name hash.
: Returns - An Layer, or None on error.
: since 6.0

[Layer](/rhinocommon/rhino/docobjects/layer/) FindNext(int index,string layerName)
: Use FindName(name, index).
: Returns - Do not use.
: since 6.0

int FindNext(int index,string layerName,bool ignoreDeletedLayers)
: 

bool ForceLayerVisible(Guid layerId)
: Makes a layer and all of its parent layers visible.
: Returns - True if the operation succeeded.

bool ForceLayerVisible(int layerIndex)
: Makes a layer and all of its parent layers visible.
: Returns - True if the operation succeeded.

IEnumerator<Layer> GetEnumerator()
: 

bool GetSelected(List<int> layerIndices)
: Returns the indices of layers that are selected on the Layer user interface.
: Returns - True if the layer user inteface is visible, False otherwise.
: since (unknown)

string GetUnusedLayerName()
: Gets the next unused layer name used as default when creating new layers.
: Returns - An unused layer name string.
: since 6.0

string GetUnusedLayerName(bool ignoreDeleted)
: Gets the next unused layer name used as default when creating new layers.
: Returns - An unused layer name string.

bool Modify(Layer newSettings,Guid layerId,bool quiet)
: Modifies layer settings.
: Returns - True if successful. False if layerIndex is out of range or the settings attempt
     to lock or hide the current layer.
: since 6.0

bool Modify(Layer newSettings,int layerIndex,bool quiet)
: Modifies layer settings.
: Returns - True if successful. False if layerIndex is out of range or the settings attempt
     to lock or hide the current layer.

bool Purge(Guid layerId,bool quiet)
: Deletes a layer and all geometry objects on a layer.
: Returns - True if successful. False if layerIndex is out of range or the the layer cannot be
     deleted because it is the current layer.
: since 6.0

bool Purge(int layerIndex,bool quiet)
: Deletes a layer and all geometry objects on a layer
: Returns - True if successful. False if layerIndex is out of range or the the layer cannot be
     deleted because it is the current layer.
: since 5.5

bool Select(IEnumerable<int> layerIndices,bool bDeselect)
: Selects layers in the Layer user interface.
: Returns - True if the layer user inteface is visible, False otherwise.
: since 6.0

bool SetCurrentLayerIndex(int layerIndex,bool quiet)
: At all times, there is a "current" layer. Unless otherwise specified, new objects
     are assigned to the current layer. The current layer is never locked, hidden, or deleted.
: Returns - True if current layer index successfully set.

bool Undelete(int layerIndex)
: Undeletes a layer that has been deleted by DeleteLayer().
: Returns - True if successful.

bool UndoModify(Guid layerId)
: Restores the layer to its previous state,
     if the layer has been modified and the modification can be undone.
: Returns - True if this layer had been modified and the modifications were undone.
: since 6.0

bool UndoModify(Guid layerId,uint undoRecordSerialNumber)
: Restores the layer to its previous state,
     if the layer has been modified and the modification can be undone.
: Returns - True if this layer had been modified and the modifications were undone.
: since 6.0

bool UndoModify(int layerIndex)
: Restores the layer to its previous state,
     if the layer has been modified and the modification can be undone.
: Returns - True if this layer had been modified and the modifications were undone.

bool UndoModify(int layerIndex,uint undoRecordSerialNumber)
: Restores the layer to its previous state,
     if the layer has been modified and the modification can be undone.
: Returns - True if this layer had been modified and the modifications were undone.
