---
title: "Layer"
draft: false
---

*Namespace: Rhino.DocObjects*
#### static !=
- (summary) 
- (since) 6.0
#### static ==
- (summary) 
- (since) 6.0
## Constructors
#### Rhino.DocObjects.Layer()
- (summary) 
- (since) 5.0
## Properties
#### static string PathSeparator
- (summary) 
     The string "::" (colon,colon) is used to
     separate parent and child layer names.
     
- (since) 6.0
#### System.Drawing.Color Color
- (summary) 
     Gets or sets the display color for this layer.
     
- (since) 5.0
#### ComponentStatus ComponentStatus
- (summary) 
     Gets or sets the status of the layer.
     
- (since) 6.0
#### ModelComponentType ComponentType
- (summary) 
     Returns .
     
- (since) 6.0
#### string FullPath
- (summary) 
     Gets the full path to this layer. The full path includes nesting information.
     
- (since) 5.0
#### Guid Id
- (summary) 
     Gets or sets the ID of this layer object. 
     You typically do not need to assign a custom ID.
     
- (since) 5.0
#### int IgesLevel
- (summary) 
     Gets or sets the IGES level for this layer.
     
- (since) 5.0
#### bool IsDeleted
- (summary) 
     Gets a value indicating whether this layer has been deleted and is 
     currently in the Undo buffer.
     
- (since) 5.0
#### bool IsExpanded
- (summary) 
     Gets or sets a value indicating whether this layer is expanded in the Rhino Layer dialog.
     
- (since) 5.0
#### bool IsLocked
- (summary) 
     Gets or sets a value indicating the locked state of this layer.
     
- (since) 5.0
#### bool IsReference
- (summary) 
     Gets a value indicting whether this layer is a referenced layer. 
     Referenced layers are part of referenced documents.
     
- (since) 5.0
#### bool IsVisible
- (summary) 
     Gets or sets the visibility of this layer.
     
- (since) 5.0
#### int LayerIndex
- (summary) 
     Gets or sets the index of this layer.
     
- (since) 5.0
#### int LinetypeIndex
- (summary) 
     Gets or sets the line-type index for this layer.
     
- (since) 5.0
#### string Name
- (summary) Gets or sets the name of this layer.
- (since) 5.0
#### Guid ParentLayerId
- (summary) 
     Gets the ID of the parent layer. Layers can be origanized in a hierarchical structure, 
     in which case this returns the parent layer ID. If the layer has no parent, 
     Guid.Empty will be returned.
     
- (since) 5.0
#### System.Drawing.Color PlotColor
- (summary) 
     Gets or sets the plot color for this layer.
     
- (since) 5.0
#### double PlotWeight
- (summary) 
     Gets or sets the weight of the plotting pen in millimeters. 
     A weight of 0.0 indicates the "default" pen weight should be used.
     A weight of -1.0 indicates the layer should not be printed.
     
- (since) 5.0
#### RenderMaterial RenderMaterial
- (summary) 
     Gets or sets the  for objects on
     this layer that have MaterialSource() == MaterialFromLayer.
     A None result indicates that no  has
     been assigned  and the material created by the default Material
     constructor or the  should be used.
     
- (since) 5.7
#### int RenderMaterialIndex
- (summary) 
     Gets or sets the index of render material for objects on this layer that have
     MaterialSource() == MaterialFromLayer. 
     A material index of -1 indicates no material has been assigned 
     and the material created by the default Material constructor 
     should be used.
     
- (since) 5.0
#### int SortIndex
- (summary) 
     Runtime index used to sort layers in layer dialog.
     
- (since) 5.0
#### int UserStringCount
- (summary) 
     Gets the amount of user strings.
     
- (since) 5.0
## Methods
#### static Layer GetDefaultLayerProperties()
- (summary) 
     Constructs a layer with the current default properties.
     The default layer properties are:
     color = Rhino.ApplicationSettings.AppearanceSettings.DefaultLayerColorline style = Rhino.ApplicationSettings.AppearanceSettings.DefaultLayerLineStylematerial index = -1iges level = -1mode = NormalLayername = emptylayer index = 0 (ignored by AddLayer)
- (since) 5.0
- (returns) Layer This is some return comment
#### static string GetLeafName(Layer layer)
- (summary) 
     Get a layer name's "leaf" level name
     
- (since) 6.0
- (returns) string This is some return comment
#### static string GetLeafName(string fullPath)
- (summary) 
     Get a layer name's "leaf" level name
     
- (since) 6.0
- (returns) string This is some return comment
#### static string GetParentName(Layer layer)
- (summary) 
     Get a layer's "parent" path name
     
- (since) 6.0
- (returns) string This is some return comment
#### static string GetParentName(string fullPath)
- (summary) 
     Get a layer's "parent" path name
     
- (since) 6.0
- (returns) string This is some return comment
#### static bool IsValidName(string name)
- (summary) 
     Determines if a given string is valid for a layer name.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool CommitChanges()
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### void CopyAttributesFrom(Layer otherLayer)
- (summary) 
     Copy typical attributes from another layer
     
- (since) 6.0
- (returns) void This is some return comment
#### void Default()
- (summary) 
     Sets layer to default settings.
     
- (since) 5.0
- (returns) void This is some return comment
#### void DeletePerViewportColor(Guid viewportId)
- (summary) 
     Remove any per viewport layer color setting so the layer's overall setting will be used for all viewports.
     
- (since) 6.0
- (returns) void This is some return comment
#### void DeletePerViewportPlotColor(Guid viewportId)
- (summary) 
     Remove any per viewport layer plot color setting so the layer's overall setting will be used for all viewports.
     
- (since) 6.0
- (returns) void This is some return comment
#### void DeletePerViewportPlotWeight(Guid viewportId)
- (summary) 
     Remove any per viewport layer plot weight setting so the layer's overall setting will be used for all viewports.
     
- (since) 6.0
- (returns) void This is some return comment
#### void DeletePerViewportSettings(Guid viewportId)
- (summary) 
     Deletes per viewport layer settings.
     
- (since) 6.0
- (returns) void This is some return comment
#### void DeletePerViewportVisible(Guid viewportId)
- (summary) 
     Remove any per viewport visibility setting so the layer's overall setting will be used for all viewports.
     
- (since) 6.0
- (returns) void This is some return comment
#### bool Equals(Layer other)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
#### bool Equals(object obj)
- (summary) 
- (since) (unknown)
- (returns) bool This is some return comment
#### Layer[] GetChildren()
- (summary) 
     Gets immediate children of this layer. Note that child layers may have their own children.
     
- (since) 5.0
- (returns) Layer[] This is some return comment
#### int GetHashCode()
- (summary) 
- (since) (unknown)
- (returns) int This is some return comment
#### bool GetPersistentLocking()
- (summary) 
     The persistent locking setting is used for layers that can be locked by
     a "parent" object. A common case is when a layer is a child layer
     (Layer.ParentI is not nil). In this case, when a parent layer is locked,
     then child layers are also locked. The persistent locking setting
     determines what happens when the parent is unlocked again.
     
- (since) 5.5
- (returns) bool This is some return comment
#### bool GetPersistentVisibility()
- (summary) 
     The persistent visbility setting is used for layers whose visibilty can
     be changed by a "parent" object. A common case is when a layer is a
     child layer (ParentId is not nil). In this case, when a parent layer is
     turned off, then child layers are also turned off. The persistent
     visibility setting determines what happens when the parent is turned on
     again.
     
- (since) 5.5
- (returns) bool This is some return comment
#### string GetUserString(string key)
- (summary) 
     Gets user string from this geometry.
     
- (since) 5.0
- (returns) string This is some return comment
#### System.Collections.Specialized.NameValueCollection GetUserStrings()
- (summary) 
     Gets a copy of all (user key string, user value string) pairs attached to this geometry.
     
- (since) 5.0
- (returns) System.Collections.Specialized.NameValueCollection This is some return comment
#### bool HasPerViewportSettings(Guid viewportId)
- (summary) 
     Verifies that a layer has per viewport settings.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool IsChildOf(Guid otherlayerId)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
#### bool IsChildOf(int layerIndex)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsChildOf(Layer otherLayer)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsParentOf(Guid otherLayer)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
#### bool IsParentOf(int layerIndex)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsParentOf(Layer otherLayer)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### System.Drawing.Color PerViewportColor(Guid viewportId)
- (summary) 
     Gets the display color for this layer.
     
- (since) 6.0
- (returns) System.Drawing.Color This is some return comment
#### bool PerViewportIsVisible(Guid viewportId)
- (summary) 
     Gets the per viewport visibility of this layer.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool PerViewportPersistentVisibility(Guid viewportId)
- (summary) 
     Gets the per layer persistent visibility. The persistent visbility setting is used for layers whose visibilty can be changed by a parent layer. 
     In this case, when a parent layer is turned off, then child layers are also turned off.
     The persistent visibility setting determines what happens when the parent is turned on again.
     
- (since) 6.0
- (returns) bool This is some return comment
#### System.Drawing.Color PerViewportPlotColor(Guid viewportId)
- (summary) 
     Gets the plot color for this layer.
     
- (since) 6.0
- (returns) System.Drawing.Color This is some return comment
#### double PerViewportPlotWeight(Guid viewportId)
- (summary) 
     Gets the plot weight, in millimeters, for this layer.
     
- (since) 6.0
- (returns) double This is some return comment
#### void SetPersistentLocking(bool persistentLocking)
- (summary) 
     Set the persistent locking setting for this layer
     
- (since) 5.5
- (returns) void This is some return comment
#### void SetPersistentVisibility(bool persistentVisibility)
- (summary) 
     Set the persistent visibility setting for this layer
     
- (since) 5.5
- (returns) void This is some return comment
#### void SetPerViewportColor(Guid viewportId,Color color)
- (summary) 
     Sets the display color for this layer.
     
- (since) 6.0
- (returns) void This is some return comment
#### void SetPerViewportPersistentVisibility(Guid viewportId,bool persistentVisibility)
- (summary) 
     Sets the per layer persistent visibility. The persistent visbility setting is used for layers whose visibilty can be changed by a parent layer. 
     In this case, when a parent layer is turned off, then child layers are also turned off.
     The persistent visibility setting determines what happens when the parent is turned on again.
     
- (since) 6.0
- (returns) void This is some return comment
#### void SetPerViewportPlotColor(Guid viewportId,Color color)
- (summary) 
     Sets the plot color for this layer.
     
- (since) 6.0
- (returns) void This is some return comment
#### void SetPerViewportPlotWeight(Guid viewportId,double plotWeight)
- (summary) 
     Sets the plot weight, in millimeters, for this layer.
     
- (since) 6.0
- (returns) void This is some return comment
#### void SetPerViewportVisible(Guid viewportId,bool visible)
- (summary) 
     Controls layer visibility in specific viewports.
     
- (since) 6.0
- (returns) void This is some return comment
#### bool SetUserString(string key,string value)
- (summary) 
     Attach a user string (key,value combination) to this geometry.
     
- (since) 5.0
- (returns) bool This is some return comment
#### string ToString()
- (summary) 
- (since) (unknown)
- (returns) string This is some return comment
#### void UnsetPersistentLocking()
- (summary) 
     Remove any explicity persistent locking settings from this layer
     
- (since) 5.5
- (returns) void This is some return comment
#### void UnsetPersistentVisibility()
- (summary) 
     Remove any explicit persistent visibility setting from this layer
     
- (since) 5.5
- (returns) void This is some return comment
#### void UnsetPerViewportPersistentVisibility(Guid viewportId)
- (summary) 
     Remove any per viewport persistent visibility setting so the layer's overall setting will be used for all viewports.
     
- (since) 6.0
- (returns) void This is some return comment
