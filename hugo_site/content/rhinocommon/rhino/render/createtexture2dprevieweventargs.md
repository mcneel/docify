---
title: "CreateTexture2dPreviewEventArgs"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class CreateTexture2dPreviewEventArgs : EventArgs
```
## Properties

Bitmap PreviewImage
: Initially null.  If this image is set, then this image will be used for
     the preview.  If never set, the default internal simulation preview will
     be used.
: since 5.1

Size PreviewImageSize
: Pixel size of the image that is being requested for the preview scene
: since 5.1
