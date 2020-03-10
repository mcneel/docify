---
title: "Rhino.DocObjects.InstanceDefinition"
date: 2020-03-10 09:24:56Z
draft: false
---

# Properties
## InstanceDefinitionArchiveFileStatus ArchiveFileStatus
- (summary) 
     Returns the archive file status of a linked instance definition.
     
- (since) 5.2
## ModelComponentType ComponentType
- (summary) 
     Returns .
     
- (since) 6.0
## string Description
- (summary) 
- (since) 5.0
## Guid Id
- (summary) 
- (since) 5.0
## int Index
- (summary) 
     Index of this instance definition in the index definition table.
     
- (since) 5.0
## bool IsDeleted
- (summary) 
- (since) 5.0
## bool IsReference
- (summary) 
     An object from a work session reference model is reference a
     reference object and cannot be modified.  An object is a reference
     object if, and only if, it is on a reference layer.
     
- (since) 5.0
## bool IsTenuous
- (summary) 
- (since) 5.0
## InstanceDefinitionLayerStyle LayerStyle
- (summary) 
- (since) 5.0
## string Name
- (summary) 
- (since) 5.0
## int ObjectCount
- (summary) 
     Number of objects this definition uses. This counts the objects that are used to define the geometry.
     This does NOT count the number of references to this instance definition.
     
- (since) 5.0
## bool SkipNestedLinkedDefinitions
- (summary) 
     Controls how much geometry is read when a linked InstanceDefinition is updated.
     
- (since) 5.0
## string SourceArchive
- (summary) 
- (since) 5.0
## InstanceDefinitionUpdateType UpdateType
- (summary) 
- (since) 5.0
## string Url
- (summary) 
     The hyperlink URL that is executed when the UrlDescription hyperlink is clicked on in the Insert and Block UI
     
- (since) 5.0
## string UrlDescription
- (summary) 
     The URL description displayed as a hyperlink in the Insert and Block UI
     
- (since) 5.0
# Methods
## System.Drawing.Bitmap CreatePreviewBitmap(DefinedViewportProjection definedViewportProjection,DisplayMode displayMode,Size bitmapSize)
- (summary) 
     Creates a preview bitmap of the instance definition.
     
- (since) 5.0
- (returns) System.Drawing.Bitmap This is some return comment
## System.Drawing.Bitmap CreatePreviewBitmap(DefinedViewportProjection definedViewportProjection,DisplayMode displayMode,Size bitmapSize,bool applyDpiScaling)
- (summary) 
     Creates a preview bitmap of the instance definition.
     
- (since) 6.0
- (returns) System.Drawing.Bitmap This is some return comment
## System.Drawing.Bitmap CreatePreviewBitmap(DefinedViewportProjection definedViewportProjection,Size bitmapSize)
- (summary) 
     Creates a wireframe preview bitmap of the instance definition.
     
- (since) 5.0
- (returns) System.Drawing.Bitmap This is some return comment
## System.Drawing.Bitmap CreatePreviewBitmap(DefinedViewportProjection definedViewportProjection,Size bitmapSize,bool applyDpiScaling)
- (summary) 
     Creates a wireframe preview bitmap of the instance definition.
     
- (since) 6.0
- (returns) System.Drawing.Bitmap This is some return comment
## System.Drawing.Bitmap CreatePreviewBitmap(Guid definitionObjectId,DefinedViewportProjection definedViewportProjection,DisplayMode displayMode,Size bitmapSize,bool applyDpiScaling)
- (summary) 
     Creates a preview bitmap of the instance definition.
     
- (since) 6.21
- (returns) System.Drawing.Bitmap This is some return comment
## bool Equals(object obj)
- (summary) 
     Equality is checked against InstanceDefinition.Id
     
- (since) (unknown)
- (returns) bool This is some return comment
## InstanceDefinition[] GetContainers()
- (summary) 
     Gets a list of all the InstanceDefinitions that contain a reference this InstanceDefinition.
     
- (since) 5.0
- (returns) InstanceDefinition[] This is some return comment
## int GetHashCode()
- (summary) 
     Use Id.GetHashCode()
     
- (since) (unknown)
- (returns) int This is some return comment
## RhinoObject[] GetObjects()
- (summary) 
     Gets an array with the objects that belong to this instance definition.
     
- (since) 5.0
- (returns) RhinoObject[] This is some return comment
## InstanceObject[] GetReferences(int wheretoLook)
- (summary) 
     Gets a list of the CRhinoInstanceObjects (inserts) that contains
     a reference this instance definition.
     
- (since) 5.0
- (returns) InstanceObject[] This is some return comment
## bool InUse(int wheretoLook)
- (summary) 
     Determines whether the instance definition is referenced.
     
- (since) 5.0
- (returns) bool This is some return comment
## RhinoObject Object(int index)
- (summary) 
     returns an object used as part of this definition.
     
- (since) 5.0
- (returns) RhinoObject This is some return comment
## int UsesDefinition(int otherIdefIndex)
- (summary) 
     Determines if this instance definition contains a reference to another instance definition.
     
- (since) 5.0
- (returns) int This is some return comment
