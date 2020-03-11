---
title: "ChangeQueue"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render.ChangeQueue](../)*

Base class for ChangeQueue.
   
   Generally used by render plugins to build interactive updating of scenes that are being rendered.
```cs
public class ChangeQueue : IDisposable
```
## Properties

[DisplayPipelineAttributes](/rhinocommon/rhino/display/displaypipelineattributes/) DisplayPipelineAttributes
: Get the DisplayPipelineAttributes if available, None otherwise
: since 6.0

bool IsPreview
: Return True if this ChangeQueue is created for preview rendering.
     
     No view was set for preview rendering.
: since 6.0

Guid ViewId
: Return view ID for a RhinoDoc based ChangeQueue.
     
     Returns Guid.Empty if no view was associated with the changequeue,
     i.e. preview rendering.
: since 6.0
## Methods

static void ConvertCameraBasedLightToWorld(ChangeQueue changequeue,Light light,ViewInfo vp)
: Convert given (camera-based) light to a world-based light (in-place)
: since 6.0

static uint CrcFromGuid(Guid guid)
: Helper function to get a CRC from a Guid.
: since 6.0

bool AreViewsEqual(ViewInfo aView,ViewInfo bView)
: Compare to ViewInfo instances and decide whether they are equal or not.
     
     If you need to change the way the comparison is done you can override
     this function and implement your custom comparison.
: Returns - True if the views are considered equal
: since 6.0

void CreateWorld()
: Calls CreateWorld with True passed.
: since 6.0

void CreateWorld(bool bFlushWhenReady)
: Signal the queue to do the initialisation of the queue, seeding it with the content currently available.
: since 6.0

void Dispose()
: Dispose our ChangeQueue
: since 6.0

[RenderEnvironment](/rhinocommon/rhino/render/renderenvironment/) EnvironmentForid(uint crc)
: Get RenderEnvironment for given RenderHash
: since 6.0

uint EnvironmentIdForUsage(Usage usage)
: Get RenderEnvironment RenderHash for given usage.
: since 6.0

void Flush()
: Tell the ChangeQueue to flush all collected events.
    
     This can trigger a host of Apply* calls.
     
     The following is the order in which those calls get
     made if there are changes for that specific data type:
     
     ApplyViewChange
     ApplyLinearWorkflowChanges
     ApplyDynamicObjectTransforms
     ApplyDynamicLightChanges
     ApplyRenderSettingsChanges
     ApplyEnvironmentChanges (background)
     ApplyEnvironmentChanges (refl)
     ApplyEnvironmentChanges (sky)
     ApplySkylightChanges
     ApplySunChanges
     ApplyLightChanges
     ApplyMaterialChanges
     ApplyMeshChanges
     ApplyMeshInstanceChanges
     ApplyGroundPlaneChanges
     ApplyClippingPlaneChanges
: since 6.0

[GroundPlane](/rhinocommon/rhino/render/groundplane/) GetQueueGroundPlane()
: Get groundplane known to the queue at the time of the Flush
: since 6.0

[RenderSettings](/rhinocommon/rhino/render/rendersettings/) GetQueueRenderSettings()
: Get render settings known to the queue at the time of the Flush
: since 6.0

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) GetQueueSceneBoundingBox()
: Get the scene bounding box
: Returns - Scene bounding box
: since 6.0

[Skylight](/rhinocommon/rhino/render/changequeue/skylight/) GetQueueSkylight()
: Get skylight known to the queue at the time of the Flush
: since 6.0

Geometry.Light GetQueueSun()
: Get sun known to the queue at the time of the Flush
: since 6.0

[ViewInfo](/rhinocommon/rhino/docobjects/viewinfo/) GetQueueView()
: Get view known to the queue at the time of the Flush
: Returns - ViewInfo
: since 6.0

[RenderMaterial](/rhinocommon/rhino/render/rendermaterial/) MaterialFromId(uint crc)
: Get the RenderMaterial from the ChangeQueue material cache based on RenderHash
: Returns - RenderMaterial
: since 6.0

void OneShot()
: Call Flush() once, after that automatically dispose the queue.
: since 6.0
