---
title: "ViewInfo"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Represents the name and orientation of a View (and named view).
   views can be thought of as cameras.
```cs
public class ViewInfo : IDisposable
```
## Constructors

ViewInfo(RhinoViewport rhinoViewPort)
: Access to the ViewInfo for given RhinoViewport
: since 6.0

ViewInfo(uint docRuntimeSerialNumber)
: Construct the ViewInfo for active viewport of given doc.
: since 6.0
## Properties

double FocalBlurAperture
: Gets or sets the Focal blur aperture of the active viewport
: since 6.0

double FocalBlurDistance
: Gets or sets the Focal blur distance of the active viewport
: since 6.0

double FocalBlurJitter
: Gets or sets the Focal blur jitter of the active viewport
: since 6.0

[ViewInfoFocalBlurModes](/rhinocommon/rhino/docobjects/viewinfofocalblurmodes/) FocalBlurMode
: Gets or sets the Focal blur mode of the active viewport
: since 6.0

uint FocalBlurSampleCount
: Gets or sets the Focal blur sample count of the active viewport
: since 6.0

string Name
: Gets or sets the name of the view.

bool ShowWallpaperInGrayScale
: True if wallpaper (if any) is to be shown in gray scale in this view.
: since 6.0

[ViewportInfo](/rhinocommon/rhino/docobjects/viewportinfo/) Viewport
: Gets the viewport, or viewing frustum, associated with this view.

string WallpaperFilename
: Get filename for wallpaper set to this view, if any.
: since 6.0

bool WallpaperHidden
: True if wallpaper (if any) is to be hidden from this view.
: since 6.0
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
