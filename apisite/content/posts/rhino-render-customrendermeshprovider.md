---
title: "Rhino.Render.CustomRenderMeshProvider"
draft: false
---

# Properties
## static Guid CurvePipingId
- (summary) 
- (since) 6.0
## static Guid DisplacementId
- (summary) 
- (since) 6.0
## static Guid EdgeSofteningId
- (summary) 
- (since) 6.0
## static Guid ShutLiningId
- (summary) 
- (since) 6.0
## static Guid ThickeningId
- (summary) 
- (since) 6.0
## String Name
- (summary) 
     The name of the provider for UI display.
     
- (since) 5.7
# Methods
## static void AllObjectsChanged()
- (summary) 
     Call this method if your render meshes change.
     
- (since) 5.7
- (returns) void This is some return comment
## static void AllObjectsChanged(RhinoDoc doc)
- (summary) 
     Call this method if your render meshes change.
     
- (since) 6.0
- (returns) void This is some return comment
## static void DocumentBasedMeshesChanged(RhinoDoc doc)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## static void ObjectChanged(RhinoDoc doc,RhinoObject obj)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## static void RegisterProviders(Assembly assembly,Guid pluginId)
- (summary) 
     Call this method once from your plug-ins OnLoad override for each
     assembly containing a custom mesh provider.  Only publicly exported
     classes derived from CustomRenderMeshProvider with a public constructor
     that has no parameters will get registered.
     
- (since) 5.7
- (returns) void This is some return comment
## BoundingBox BoundingBox(ViewportInfo vp,RhinoObject obj,Guid requestingPlugIn,bool preview)
- (summary) 
     Returns a bounding box for the custom render meshes for the given object.
     
- (since) 5.7
- (returns) BoundingBox This is some return comment
## BoundingBox BoundingBox(ViewportInfo vp,RhinoObject obj,RhinoDoc doc,Guid requestingPlugIn,DisplayPipelineAttributes attrs)
- (summary) 
- (since) 6.0
- (returns) BoundingBox This is some return comment
## bool BuildCustomMeshes(ViewportInfo vp,RenderPrimitiveList objMeshes,Guid requestingPlugIn,bool meshType)
- (summary) 
     Build custom render mesh(es).
     
- (since) 5.7
- (returns) bool This is some return comment
## bool WillBuildCustomMeshes(ViewportInfo vp,RhinoObject obj,Guid requestingPlugIn,bool preview)
- (summary) 
     Determines if custom render meshes will be built for a particular object.
     
- (since) 5.7
- (returns) bool This is some return comment
