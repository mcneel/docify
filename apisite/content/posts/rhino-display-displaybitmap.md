---
title: "Rhino.Display.DisplayBitmap"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Display.DisplayBitmap(Bitmap bitmap)
- (summary) 
     Constructs a DisplayBitmap from an existing bitmap.
     
- (since) 5.0
# Methods
## static DisplayBitmap Load(string path)
- (summary) 
     Load a DisplayBitmap from and image file on disk.
     
- (since) 5.0
- (returns) DisplayBitmap This is some return comment
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
## void GetBlendModes(BlendMode source,BlendMode destination)
- (summary) 
     Gets the source and destination blend modes.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetBlendFunction(BlendMode source,BlendMode destination)
- (summary) 
     Sets blending function used to determine how this bitmap is blended
     with the current framebuffer color.  The default setting is SourceAlpha
     for source and OneMinusSourceAlpha for destination.  See OpenGL's
     glBlendFunc for details.
     http://www.opengl.org/sdk/docs/man/xhtml/glBlendFunc.xml
- (since) 5.0
- (returns) void This is some return comment
