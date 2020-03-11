---
title: "Layer"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

```cs
[Serializable]
public class Layer : ModelComponent, IEquatable<Layer>
```

static !=
: 
: since 6.0

static ==
: 
: since 6.0
## Constructors

Layer()
: 
## Properties

static string PathSeparator
: The string "::" (colon,colon) is used to
     separate parent and child layer names.
: since 6.0

Color Color
: Gets or sets the display color for this layer.

[ComponentStatus](/rhinocommon/rhino/geometry/componentstatus/) ComponentStatus
: Gets or sets the status of the layer.
: since 6.0

ModelComponentType ComponentType
: Returns .
: since 6.0

string FullPath
: Gets the full path to this layer. The full path includes nesting information.

Guid Id
: Gets or sets the ID of this layer object. 
     You typically do not need to assign a custom ID.

int IgesLevel
: Gets or sets the IGES level for this layer.

bool IsDeleted
: Gets a value indicating whether this layer has been deleted and is 
     currently in the Undo buffer.

bool IsExpanded
: Gets or sets a value indicating whether this layer is expanded in the Rhino Layer dialog.

bool IsLocked
: Gets or sets a value indicating the locked state of this layer.

bool IsReference
: Gets a value indicting whether this layer is a referenced layer. 
     Referenced layers are part of referenced documents.

bool IsVisible
: Gets or sets the visibility of this layer.

int LayerIndex
: Gets or sets the index of this layer.

int LinetypeIndex
: Gets or sets the line-type index for this layer.

string Name
: Gets or sets the name of this layer.

Guid ParentLayerId
: Gets the ID of the parent layer. Layers can be origanized in a hierarchical structure, 
     in which case this returns the parent layer ID. If the layer has no parent, 
     Guid.Empty will be returned.

Color PlotColor
: Gets or sets the plot color for this layer.

double PlotWeight
: Gets or sets the weight of the plotting pen in millimeters. 
     A weight of 0.0 indicates the "default" pen weight should be used.
     A weight of -1.0 indicates the layer should not be printed.

[RenderMaterial](/rhinocommon/rhino/render/rendermaterial/) RenderMaterial
: Gets or sets the  for objects on
     this layer that have MaterialSource() == MaterialFromLayer.
     A None result indicates that no  has
     been assigned  and the material created by the default Material
     constructor or the  should be used.
: since 5.7

int RenderMaterialIndex
: Gets or sets the index of render material for objects on this layer that have
     MaterialSource() == MaterialFromLayer. 
     A material index of -1 indicates no material has been assigned 
     and the material created by the default Material constructor 
     should be used.

int SortIndex
: Runtime index used to sort layers in layer dialog.

int UserStringCount
: Gets the amount of user strings.
## Methods

static Layer GetDefaultLayerProperties()
: Constructs a layer with the current default properties.
     The default layer properties are:
     color = Rhino.ApplicationSettings.AppearanceSettings.DefaultLayerColorline style = Rhino.ApplicationSettings.AppearanceSettings.DefaultLayerLineStylematerial index = -1iges level = -1mode = NormalLayername = emptylayer index = 0 (ignored by AddLayer)
: Returns - A new layer instance.

static string GetLeafName(Layer layer)
: Get a layer name's "leaf" level name
: Returns - leaf name or String.Empty if fullPath does not contain a leaf
: since 6.0

static string GetLeafName(string fullPath)
: Get a layer name's "leaf" level name
: Returns - leaf name or String.Empty if fullPath does not contain a leaf
: since 6.0

static string GetParentName(Layer layer)
: Get a layer's "parent" path name
: Returns - parent name or String.Empty
: since 6.0

static string GetParentName(string fullPath)
: Get a layer's "parent" path name
: Returns - parent name or String.Empty
: since 6.0

static bool IsValidName(string name)
: Determines if a given string is valid for a layer name.
: Returns - True if the name is valid for a layer name; otherwise, false.

bool CommitChanges()
: 

void CopyAttributesFrom(Layer otherLayer)
: Copy typical attributes from another layer
: since 6.0

void Default()
: Sets layer to default settings.

void DeletePerViewportColor(Guid viewportId)
: Remove any per viewport layer color setting so the layer's overall setting will be used for all viewports.
: since 6.0

void DeletePerViewportPlotColor(Guid viewportId)
: Remove any per viewport layer plot color setting so the layer's overall setting will be used for all viewports.
: since 6.0

void DeletePerViewportPlotWeight(Guid viewportId)
: Remove any per viewport layer plot weight setting so the layer's overall setting will be used for all viewports.
: since 6.0

void DeletePerViewportSettings(Guid viewportId)
: Deletes per viewport layer settings.
: since 6.0

void DeletePerViewportVisible(Guid viewportId)
: Remove any per viewport visibility setting so the layer's overall setting will be used for all viewports.
: since 6.0

bool Equals(Layer other)
: 
: since 6.0

bool Equals(object obj)
: 
: since (unknown)

Layer[] GetChildren()
: Gets immediate children of this layer. Note that child layers may have their own children.
: Returns - Array of child layers. None if this layer does not have any children.

int GetHashCode()
: 
: since (unknown)

bool GetPersistentLocking()
: The persistent locking setting is used for layers that can be locked by
     a "parent" object. A common case is when a layer is a child layer
     (Layer.ParentI is not nil). In this case, when a parent layer is locked,
     then child layers are also locked. The persistent locking setting
     determines what happens when the parent is unlocked again.
: since 5.5

bool GetPersistentVisibility()
: The persistent visbility setting is used for layers whose visibilty can
     be changed by a "parent" object. A common case is when a layer is a
     child layer (ParentId is not nil). In this case, when a parent layer is
     turned off, then child layers are also turned off. The persistent
     visibility setting determines what happens when the parent is turned on
     again.
: since 5.5

string GetUserString(string key)
: Gets user string from this geometry.
: Returns - string associated with the key if successful. None if no key was found.

System.Collections.Specialized.NameValueCollection GetUserStrings()
: Gets a copy of all (user key string, user value string) pairs attached to this geometry.
: Returns - A new collection.

bool HasPerViewportSettings(Guid viewportId)
: Verifies that a layer has per viewport settings.
: Returns - True if the layer has per viewport settings, False otherwise.
: since 6.0

bool IsChildOf(Guid otherlayerId)
: 
: since 6.0

bool IsChildOf(int layerIndex)
: 

bool IsChildOf(Layer otherLayer)
: 

bool IsParentOf(Guid otherLayer)
: 
: since 6.0

bool IsParentOf(int layerIndex)
: 

bool IsParentOf(Layer otherLayer)
: 

System.Drawing.Color PerViewportColor(Guid viewportId)
: Gets the display color for this layer.
: Returns - The display color.
: since 6.0

bool PerViewportIsVisible(Guid viewportId)
: Gets the per viewport visibility of this layer.
: Returns - Returns True if objects on layer are visible.
: since 6.0

bool PerViewportPersistentVisibility(Guid viewportId)
: Gets the per layer persistent visibility. The persistent visbility setting is used for layers whose visibilty can be changed by a parent layer. 
     In this case, when a parent layer is turned off, then child layers are also turned off.
     The persistent visibility setting determines what happens when the parent is turned on again.
: Returns - Return True if this layer's visibility in the specified viewport is controlled by a parent object and the parent is turned on (after being off), 
     then this layer will also be turned on in the specified viewport.
     Returns False if this layer's visibility in the specified viewport is controlled by a parent object and the parent layer is turned on(after being off),
     then this layer will continue to be off in the specified viewport.
: since 6.0

System.Drawing.Color PerViewportPlotColor(Guid viewportId)
: Gets the plot color for this layer.
: Returns - The plot color.
: since 6.0

double PerViewportPlotWeight(Guid viewportId)
: Gets the plot weight, in millimeters, for this layer.
: Returns - The plot color.
: since 6.0

void SetPersistentLocking(bool persistentLocking)
: Set the persistent locking setting for this layer
: since 5.5

void SetPersistentVisibility(bool persistentVisibility)
: Set the persistent visibility setting for this layer
: since 5.5

void SetPerViewportColor(Guid viewportId,Color color)
: Sets the display color for this layer.
: since 6.0

void SetPerViewportPersistentVisibility(Guid viewportId,bool persistentVisibility)
: Sets the per layer persistent visibility. The persistent visbility setting is used for layers whose visibilty can be changed by a parent layer. 
     In this case, when a parent layer is turned off, then child layers are also turned off.
     The persistent visibility setting determines what happens when the parent is turned on again.
: since 6.0

void SetPerViewportPlotColor(Guid viewportId,Color color)
: Sets the plot color for this layer.
: since 6.0

void SetPerViewportPlotWeight(Guid viewportId,double plotWeight)
: Sets the plot weight, in millimeters, for this layer.
: since 6.0

void SetPerViewportVisible(Guid viewportId,bool visible)
: Controls layer visibility in specific viewports.
: since 6.0

bool SetUserString(string key,string value)
: Attach a user string (key,value combination) to this geometry.
: Returns - True on success.

string ToString()
: 
: since (unknown)

void UnsetPersistentLocking()
: Remove any explicity persistent locking settings from this layer
: since 5.5

void UnsetPersistentVisibility()
: Remove any explicit persistent visibility setting from this layer
: since 5.5

void UnsetPerViewportPersistentVisibility(Guid viewportId)
: Remove any per viewport persistent visibility setting so the layer's overall setting will be used for all viewports.
: since 6.0
