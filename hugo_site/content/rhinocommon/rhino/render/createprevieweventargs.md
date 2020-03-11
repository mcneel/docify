---
title: "CreatePreviewEventArgs"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Used in RenderPlugIn virtual CreatePreview function
```cs
public class CreatePreviewEventArgs : EventArgs
```
## Properties

bool Cancel
: Get set by Rhino if the preview generation should be canceled for this
: since 5.1

[RenderContentKind](/rhinocommon/rhino/render/rendercontentkind/) ContentKind
: Description of content that preview is being generated for.
: since 6.0

Guid ContentTypeId
: The class Id of content that preview is being generated for.
: since 6.0

[RenderEnvironment](/rhinocommon/rhino/render/renderenvironment/) Environment
: The environment that the previewed object is rendered in.
: since 5.1

int Id
: Unique Id for this scene.
: since 5.1

Light> Lights
: 
: since 5.1

List<SceneObject> Objects
: 
: since 5.1

[RenderContent](/rhinocommon/rhino/render/rendercontent/) PreviewContent
: Obsolete, will return always null
: since 5.1

Bitmap PreviewImage
: Initially null.  If this image is set, then this image will be used for
     the preview.  If never set, the default internal simulation preview will
     be used.
: since 5.1

Size PreviewImageSize
: Pixel size of the image that is being requested for the preview scene
: since 5.1

[PreviewNotification](/rhinocommon/rhino/plugins/previewnotification/) PreviewNotifier
: 
: since 6.0

[PreviewSceneQuality](/rhinocommon/rhino/render/previewscenequality/) Quality
: Quality of the preview image that is being requested for the preview scene
: since 5.1

[CreatePreviewReason](/rhinocommon/rhino/render/createpreviewreason/) Reason
: Reason the preview is getting generated
: since 5.11

[ViewportInfo](/rhinocommon/rhino/docobjects/viewportinfo/) Viewport
: 
: since 5.1
## Methods

void SkipInitialisation()
: Call this if you don't want the argument to handle data initialisation.
     
     This is for use with the ChangeQueue
: since 6.0
