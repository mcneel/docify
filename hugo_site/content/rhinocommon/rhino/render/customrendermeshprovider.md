---
title: "CustomRenderMeshProvider"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

You must call CustomRenderMeshProvider.RegisterProviders() from your
   plug-ins OnLoad override for each assembly containing a custom mesh
   provider.  Only publicly exported classes derived from
   CustomRenderMeshProvider with a public constructor that has no parameters
   will get registered.
```cs
[Obsolete]
public class CustomRenderMeshProvider
```
## Properties

static Guid CurvePipingId
: 
: since 6.0

static Guid DisplacementId
: 
: since 6.0

static Guid EdgeSofteningId
: 
: since 6.0

static Guid ShutLiningId
: 
: since 6.0

static Guid ThickeningId
: 
: since 6.0

String Name
: The name of the provider for UI display.
: since 5.7
## Methods

static void AllObjectsChanged()
: Call this method if your render meshes change.
: since 5.7

static void AllObjectsChanged(RhinoDoc doc)
: Call this method if your render meshes change.
: since 6.0

static void DocumentBasedMeshesChanged(RhinoDoc doc)
: 
: since 6.0

static void ObjectChanged(RhinoDoc doc,RhinoObject obj)
: 
: since 6.0

static void RegisterProviders(Assembly assembly,Guid pluginId)
: Call this method once from your plug-ins OnLoad override for each
     assembly containing a custom mesh provider.  Only publicly exported
     classes derived from CustomRenderMeshProvider with a public constructor
     that has no parameters will get registered.
: since 5.7

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox(ViewportInfo vp,RhinoObject obj,Guid requestingPlugIn,bool preview)
: Returns a bounding box for the custom render meshes for the given object.
: Returns - A bounding box value.
: since 5.7

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox(ViewportInfo vp,RhinoObject obj,RhinoDoc doc,Guid requestingPlugIn,DisplayPipelineAttributes attrs)
: 
: since 6.0

bool BuildCustomMeshes(ViewportInfo vp,RenderPrimitiveList objMeshes,Guid requestingPlugIn,bool meshType)
: Build custom render mesh(es).
: Returns - True if operation was successful.
: since 5.7

bool WillBuildCustomMeshes(ViewportInfo vp,RhinoObject obj,Guid requestingPlugIn,bool preview)
: Determines if custom render meshes will be built for a particular object.
: Returns - True if custom meshes will be built.
: since 5.7
