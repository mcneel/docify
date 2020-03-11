---
title: "DisplayBitmap"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

A bitmap resource that can be used by the display pipeline (currently only
   in OpenGL display).  Reuse DisplayBitmaps for drawing if possible; it is
   much more expensive to construct new DisplayBitmaps than it is to reuse
   existing DisplayBitmaps.
```cs
public class DisplayBitmap : IDisposable
```
## Constructors

DisplayBitmap(Bitmap bitmap)
: Constructs a DisplayBitmap from an existing bitmap.
## Methods

static DisplayBitmap Load(string path)
: Load a DisplayBitmap from and image file on disk.
: Returns - The new display bitmap, or None on error.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

void GetBlendModes(BlendMode source,BlendMode destination)
: Gets the source and destination blend modes.

void SetBlendFunction(BlendMode source,BlendMode destination)
: Sets blending function used to determine how this bitmap is blended
     with the current framebuffer color.  The default setting is SourceAlpha
     for source and OneMinusSourceAlpha for destination.  See OpenGL's
     glBlendFunc for details.
     http://www.opengl.org/sdk/docs/man/xhtml/glBlendFunc.xml
