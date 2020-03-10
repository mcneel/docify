---
title: "ChangeQueue"
draft: false
---

*Namespace: Rhino.Render.ChangeQueue*

   Base class for ChangeQueue.
   
   Generally used by render plugins to build interactive updating of scenes that are being rendered.
   
## Properties
#### Display.DisplayPipelineAttributes DisplayPipelineAttributes
- (summary) 
     Get the DisplayPipelineAttributes if available, None otherwise
     
- (since) 6.0
#### bool IsPreview
- (summary) 
     Return True if this ChangeQueue is created for preview rendering.
     
     No view was set for preview rendering.
     
- (since) 6.0
#### Guid ViewId
- (summary) 
     Return view ID for a RhinoDoc based ChangeQueue.
     
     Returns Guid.Empty if no view was associated with the changequeue,
     i.e. preview rendering.
     
- (since) 6.0
## Methods
#### static void ConvertCameraBasedLightToWorld(ChangeQueue changequeue,Light light,ViewInfo vp)
- (summary) 
     Convert given (camera-based) light to a world-based light (in-place)
     
- (since) 6.0
- (returns) void This is some return comment
#### static uint CrcFromGuid(Guid guid)
- (summary) 
     Helper function to get a CRC from a Guid.
     
- (since) 6.0
- (returns) uint This is some return comment
#### bool AreViewsEqual(ViewInfo aView,ViewInfo bView)
- (summary) 
     Compare to ViewInfo instances and decide whether they are equal or not.
     
     If you need to change the way the comparison is done you can override
     this function and implement your custom comparison.
     
- (since) 6.0
- (returns) bool This is some return comment
#### void CreateWorld()
- (summary) 
     Calls CreateWorld with True passed.
     
- (since) 6.0
- (returns) void This is some return comment
#### void CreateWorld(bool bFlushWhenReady)
- (summary) 
     Signal the queue to do the initialisation of the queue, seeding it with the content currently available.
     
- (since) 6.0
- (returns) void This is some return comment
#### void Dispose()
- (summary) 
     Dispose our ChangeQueue
     
- (since) 6.0
- (returns) void This is some return comment
#### RenderEnvironment EnvironmentForid(uint crc)
- (summary) 
     Get RenderEnvironment for given RenderHash
     
- (since) 6.0
- (returns) RenderEnvironment This is some return comment
#### uint EnvironmentIdForUsage(Usage usage)
- (summary) 
     Get RenderEnvironment RenderHash for given usage.
     
- (since) 6.0
- (returns) uint This is some return comment
#### void Flush()
- (summary) 
     Tell the ChangeQueue to flush all collected events.
    
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
     
- (since) 6.0
- (returns) void This is some return comment
#### GroundPlane GetQueueGroundPlane()
- (summary) 
     Get groundplane known to the queue at the time of the Flush
     
- (since) 6.0
- (returns) GroundPlane This is some return comment
#### RenderSettings GetQueueRenderSettings()
- (summary) 
     Get render settings known to the queue at the time of the Flush
     
- (since) 6.0
- (returns) RenderSettings This is some return comment
#### BoundingBox GetQueueSceneBoundingBox()
- (summary) 
     Get the scene bounding box
     
- (since) 6.0
- (returns) BoundingBox This is some return comment
#### Skylight GetQueueSkylight()
- (summary) 
     Get skylight known to the queue at the time of the Flush
     
- (since) 6.0
- (returns) Skylight This is some return comment
#### Geometry.Light GetQueueSun()
- (summary) 
     Get sun known to the queue at the time of the Flush
     
- (since) 6.0
- (returns) Geometry.Light This is some return comment
#### ViewInfo GetQueueView()
- (summary) 
     Get view known to the queue at the time of the Flush
     
- (since) 6.0
- (returns) ViewInfo This is some return comment
#### RenderMaterial MaterialFromId(uint crc)
- (summary) 
     Get the RenderMaterial from the ChangeQueue material cache based on RenderHash
     
- (since) 6.0
- (returns) RenderMaterial This is some return comment
#### void OneShot()
- (summary) 
     Call Flush() once, after that automatically dispose the queue.
     
- (since) 6.0
- (returns) void This is some return comment
