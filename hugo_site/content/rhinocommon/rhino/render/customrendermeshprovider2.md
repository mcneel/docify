---
title: "CustomRenderMeshProvider2"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class CustomRenderMeshProvider2 : CustomRenderMeshProvider
```
## Methods

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox(ViewportInfo vp,RhinoObject obj,Guid requestingPlugIn,bool preview)
: 
: since 6.4

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox(ViewportInfo vp,RhinoObject obj,RhinoDoc doc,Guid requestingPlugIn,DisplayPipelineAttributes attrs)
: 
: since 6.0

bool BuildCustomMeshes(ViewportInfo vp,RenderPrimitiveList objMeshes,Guid requestingPlugIn,bool preview)
: 
: since 6.4

bool BuildCustomMeshes(ViewportInfo vp,RhinoDoc doc,RenderPrimitiveList objMeshes,Guid requestingPlugIn,DisplayPipelineAttributes attrs)
: 
: since 6.0

bool WillBuildCustomMeshes(ViewportInfo vp,RhinoObject obj,Guid requestingPlugIn,bool preview)
: 
: since 6.4

bool WillBuildCustomMeshes(ViewportInfo vp,RhinoObject obj,RhinoDoc doc,Guid requestingPlugIn,DisplayPipelineAttributes attrs)
: 
: since 6.0
