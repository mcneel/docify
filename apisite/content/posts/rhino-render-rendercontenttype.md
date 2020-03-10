---
title: "Rhino.Render.RenderContentType"
draft: false
---

# Constructors
## Rhino.Render.RenderContentType(Guid typeId)
- (summary) 
- (since) 6.0
# Properties
## Guid Id
- (summary) 
     Returns the type identifier associated with this type.
     
- (since) 6.0
## String InternalName
- (summary) 
     Returns the internal name identifier associated with this type.
     
- (since) 6.0
## Guid PlugInId
- (summary) 
- (since) 6.0
## Guid RenderEngineId
- (summary) 
- (since) 6.0
# Methods
## static RenderContentType[] GetAllAvailableTypes()
- (summary) 
     Gets an array of all available render content types registered with Rhino.
     
- (since) 6.0
- (returns) RenderContentType[] This is some return comment
## static RenderContent NewContentFromTypeId(Guid typeId)
- (summary) 
      Create a new content specified by the Guid.
    
     This function can be used to create temporary content, as it calls
     ::RhRdkContentFactories().NewContentFromType().
     
- (since) 6.0
- (returns) RenderContent This is some return comment
## static RenderContent NewContentFromTypeId(Guid typeId,RhinoDoc doc)
- (summary) 
- (since) 6.4
- (returns) RenderContent This is some return comment
## void Dispose()
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## RenderContent NewRenderContent()
- (summary) 
     Returns a new instance of the render content of this type.  This content can be added to a persistant list.
     
- (since) 6.0
- (returns) RenderContent This is some return comment
