---
title: "RenderContentType"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Represents one of the render content types registered with Rhino.
```cs
public class RenderContentType : IDisposable
```
## Constructors

RenderContentType(Guid typeId)
: 
: since 6.0
## Properties

Guid Id
: Returns the type identifier associated with this type.
: since 6.0

String InternalName
: Returns the internal name identifier associated with this type.
: since 6.0

Guid PlugInId
: 
: since 6.0

Guid RenderEngineId
: 
: since 6.0
## Methods

static RenderContentType[] GetAllAvailableTypes()
: Gets an array of all available render content types registered with Rhino.
: Returns - An array with all types.
: since 6.0

static [RenderContent](/rhinocommon/rhino/render/rendercontent/) NewContentFromTypeId(Guid typeId)
: Create a new content specified by the Guid.
    
     This function can be used to create temporary content, as it calls
     ::RhRdkContentFactories().NewContentFromType().
: since 6.0

static [RenderContent](/rhinocommon/rhino/render/rendercontent/) NewContentFromTypeId(Guid typeId,RhinoDoc doc)
: 
: since 6.4

void Dispose()
: 
: since 6.0

[RenderContent](/rhinocommon/rhino/render/rendercontent/) NewRenderContent()
: Returns a new instance of the render content of this type.  This content can be added to a persistant list.
: Returns - A new render content instance.
: since 6.0
