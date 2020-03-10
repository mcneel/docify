---
title: "Rhino.DocObjects.ViewInfo"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.DocObjects.ViewInfo(RhinoViewport rhinoViewPort)
- (summary) 
     Access to the ViewInfo for given RhinoViewport
     
- (since) 6.0
## Rhino.DocObjects.ViewInfo(uint docRuntimeSerialNumber)
- (summary) 
     Construct the ViewInfo for active viewport of given doc.
     
- (since) 6.0
# Properties
## double FocalBlurAperture
- (summary) 
     Gets or sets the Focal blur aperture of the active viewport
     
- (since) 6.0
## double FocalBlurDistance
- (summary) 
     Gets or sets the Focal blur distance of the active viewport
     
- (since) 6.0
## double FocalBlurJitter
- (summary) 
     Gets or sets the Focal blur jitter of the active viewport
     
- (since) 6.0
## ViewInfoFocalBlurModes FocalBlurMode
- (summary) 
     Gets or sets the Focal blur mode of the active viewport
     
- (since) 6.0
## uint FocalBlurSampleCount
- (summary) 
     Gets or sets the Focal blur sample count of the active viewport
     
- (since) 6.0
## string Name
- (summary) 
     Gets or sets the name of the view.
     
- (since) 5.0
## bool ShowWallpaperInGrayScale
- (summary) 
     True if wallpaper (if any) is to be shown in gray scale in this view.
     
- (since) 6.0
## ViewportInfo Viewport
- (summary) 
     Gets the viewport, or viewing frustum, associated with this view.
     
- (since) 5.0
## string WallpaperFilename
- (summary) 
     Get filename for wallpaper set to this view, if any.
     
- (since) 6.0
## bool WallpaperHidden
- (summary) 
     True if wallpaper (if any) is to be hidden from this view.
     
- (since) 6.0
# Methods
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
