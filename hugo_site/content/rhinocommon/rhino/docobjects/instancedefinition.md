---
title: "InstanceDefinition"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

This is the same as , but in a Rhino document.
```cs
public class InstanceDefinition : InstanceDefinitionGeometry
```
## Properties

[InstanceDefinitionArchiveFileStatus](/rhinocommon/rhino/docobjects/instancedefinitionarchivefilestatus/) ArchiveFileStatus
: Returns the archive file status of a linked instance definition.
: since 5.2

ModelComponentType ComponentType
: Returns .
: since 6.0

string Description
: 

Guid Id
: 

int Index
: Index of this instance definition in the index definition table.

bool IsDeleted
: 

bool IsReference
: An object from a work session reference model is reference a
     reference object and cannot be modified.  An object is a reference
     object if, and only if, it is on a reference layer.

bool IsTenuous
: 

[InstanceDefinitionLayerStyle](/rhinocommon/rhino/docobjects/instancedefinitionlayerstyle/) LayerStyle
: 

string Name
: 

int ObjectCount
: Number of objects this definition uses. This counts the objects that are used to define the geometry.
     This does NOT count the number of references to this instance definition.

bool SkipNestedLinkedDefinitions
: Controls how much geometry is read when a linked InstanceDefinition is updated.
: Returns - If this returns True then nested linked InstanceDefinition objects will be skipped otherwise; read everything, included nested linked InstanceDefinition objects

string SourceArchive
: 

[InstanceDefinitionUpdateType](/rhinocommon/rhino/docobjects/instancedefinitionupdatetype/) UpdateType
: 

string Url
: The hyperlink URL that is executed when the UrlDescription hyperlink is clicked on in the Insert and Block UI

string UrlDescription
: The URL description displayed as a hyperlink in the Insert and Block UI
## Methods

System.Drawing.Bitmap CreatePreviewBitmap(DefinedViewportProjection definedViewportProjection,DisplayMode displayMode,Size bitmapSize)
: Creates a preview bitmap of the instance definition.
: Returns - The preview bitmap if successful, None otherwise.

System.Drawing.Bitmap CreatePreviewBitmap(DefinedViewportProjection definedViewportProjection,DisplayMode displayMode,Size bitmapSize,bool applyDpiScaling)
: Creates a preview bitmap of the instance definition.
: Returns - The preview bitmap if successful, None otherwise.
: since 6.0

System.Drawing.Bitmap CreatePreviewBitmap(DefinedViewportProjection definedViewportProjection,Size bitmapSize)
: Creates a wireframe preview bitmap of the instance definition.
: Returns - The preview bitmap if successful, None otherwise.

System.Drawing.Bitmap CreatePreviewBitmap(DefinedViewportProjection definedViewportProjection,Size bitmapSize,bool applyDpiScaling)
: Creates a wireframe preview bitmap of the instance definition.
: Returns - The preview bitmap if successful, None otherwise.
: since 6.0

System.Drawing.Bitmap CreatePreviewBitmap(Guid definitionObjectId,DefinedViewportProjection definedViewportProjection,DisplayMode displayMode,Size bitmapSize,bool applyDpiScaling)
: Creates a preview bitmap of the instance definition.
: Returns - The preview bitmap if successful, None otherwise.
: since 6.21

bool Equals(object obj)
: Equality is checked against InstanceDefinition.Id
: Returns - True if obj.Id equals Id
: since (unknown)

InstanceDefinition[] GetContainers()
: Gets a list of all the InstanceDefinitions that contain a reference this InstanceDefinition.
: Returns - An array of instance definitions. The returned array can be empty, but not null.

int GetHashCode()
: Use Id.GetHashCode()
: since (unknown)

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] GetObjects()
: Gets an array with the objects that belong to this instance definition.
: Returns - An array of Rhino objects. The returned array can be empty, but not null.

[InstanceObject](/rhinocommon/rhino/docobjects/instanceobject/)[] GetReferences(int wheretoLook)
: Gets a list of the CRhinoInstanceObjects (inserts) that contains
     a reference this instance definition.
: Returns - An array of instance objects. The returned array can be empty, but not null.

bool InUse(int wheretoLook)
: Determines whether the instance definition is referenced.
: Returns - True if the instance definition is used; otherwise false.

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/) Object(int index)
: returns an object used as part of this definition.
: Returns - Returns an object that is used to define the geometry.
     Does NOT return an object that references this definition.count the number of references to this instance.

int UsesDefinition(int otherIdefIndex)
: Determines if this instance definition contains a reference to another instance definition.
: Returns - 0      no
       1      other_idef_index is the index of this instance definition
      >1      This InstanceDefinition uses the instance definition
              and the returned value is the nesting depth.
