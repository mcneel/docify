---
title: "RhinoSettings"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render.DataSources](../)*

```cs
public class RhinoSettings : IDisposable
```
## Constructors

RhinoSettings(IntPtr pRhinoSettings)
: 
: since 6.0
## Properties

IntPtr CppPointer
: 
: since 6.0
## Methods

[RhinoView](/rhinocommon/rhino/display/rhinoview/) ActiveView()
: 
: since 6.0

void Dispose()
: 
: since 6.0

List<System.Drawing.Size> GetCustomRenderSizes()
: 
: since 6.0

[RenderSettings](/rhinocommon/rhino/render/rendersettings/) GetRenderSettings()
: 
: since 6.0

bool GroundPlaneOnInViewDisplayMode(RhinoView view)
: 
: since 6.14

Rhino.DocObjects.ViewInfo RenderingView()
: 
: since 6.12

void SetGroundPlaneOnInViewDisplayMode(RhinoView view,bool bOn)
: 
: since 6.14

void SetRenderSettings(RenderSettings renderSettings)
: 
: since 6.0

bool ViewSupportsShading(RhinoView view)
: 
: since 6.14
