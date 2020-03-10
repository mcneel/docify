---
title: "Rhino.Render.CreatePreviewEventArgs"
draft: false
---

# Properties
## bool Cancel
- (summary) 
     Get set by Rhino if the preview generation should be canceled for this 
     
- (since) 5.1
## RenderContentKind ContentKind
- (summary) 
     Description of content that preview is being generated for.
     
- (since) 6.0
## Guid ContentTypeId
- (summary) 
     The class Id of content that preview is being generated for.
     
- (since) 6.0
## Rhino.Render.RenderEnvironment Environment
- (summary) 
     The environment that the previewed object is rendered in.
     
- (since) 5.1
## int Id
- (summary) Unique Id for this scene.
- (since) 5.1
## List<Rhino.Geometry.Light> Lights
- (summary) 
- (since) 5.1
## List<SceneObject> Objects
- (summary) 
- (since) 5.1
## RenderContent PreviewContent
- (summary) 
     Obsolete, will return always null
     
- (since) 5.1
## System.Drawing.Bitmap PreviewImage
- (summary) 
     Initially null.  If this image is set, then this image will be used for
     the preview.  If never set, the default internal simulation preview will
     be used.
     
- (since) 5.1
## System.Drawing.Size PreviewImageSize
- (summary) 
     Pixel size of the image that is being requested for the preview scene
     
- (since) 5.1
## PreviewNotification PreviewNotifier
- (summary) 
- (since) 6.0
## PreviewSceneQuality Quality
- (summary) 
     Quality of the preview image that is being requested for the preview scene
     
- (since) 5.1
## CreatePreviewReason Reason
- (summary) 
     Reason the preview is getting generated
     
- (since) 5.11
## Rhino.DocObjects.ViewportInfo Viewport
- (summary) 
- (since) 5.1
# Methods
## void SkipInitialisation()
- (summary) 
     Call this if you don't want the argument to handle data initialisation.
     
     This is for use with the ChangeQueue
     
- (since) 6.0
- (returns) void This is some return comment
