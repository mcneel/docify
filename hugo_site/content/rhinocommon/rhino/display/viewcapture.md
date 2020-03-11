---
title: "ViewCapture"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Display](../)*

```cs
public class ViewCapture
```
## Constructors

ViewCapture()
: 
: since 6.0
## Properties

bool DrawAxes
: 
: since 6.0

bool DrawGrid
: 
: since 6.0

bool DrawGridAxes
: 
: since 6.0

int Height
: Height of capture in Pixels
: since 6.0

bool Preview
: 
: since 6.0

int RealtimeRenderPasses
: 
: since 6.0

bool ScaleScreenItems
: 
: since 6.0

bool TransparentBackground
: 
: since 6.0

int Width
: Width of capture in Pixels
: since 6.0
## Methods

static Bitmap CaptureToBitmap(ViewCaptureSettings settings)
: 
: since 6.0

static System.Xml.XmlDocument CaptureToSvg(ViewCaptureSettings settings)
: 
: since 6.0

Bitmap CaptureToBitmap(RhinoView sourceView)
: 
: since 6.0
