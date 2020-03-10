---
title: "RealtimeDisplayMode"
draft: false
---

*Namespace: Rhino.Render*

   Base class for implementing real-time display modes in .NET.
   
   Pay special attention that in StartRenderer the RenderWindow.SetSize()
   function is called if the implementation relies on the RenderWindow to
   do the drawing to the viewport. If i.e. OpenGL is used to draw render
   results to the viewport then SetSize() doesn't have to be called, nor
   should the implementation then access channels on the RenderWindow, as
   those then don't exist. For OpenGL-based drawing the RenderWindow is
   used as a container for ViewInfo management, nothing else.
   
#### HudLockButtonPressed
- (summary) 
     Listen tot his event if you want to handle the lock button control
     
- (since) 6.0
#### HudPauseButtonPressed
- (summary) 
     Listen tot his event if you want to handle the pause button control
     
- (since) 6.0
#### HudPlayButtonPressed
- (summary) 
     Listen to this event if you want to handle the play button control.
     
- (since) 6.0
#### HudProductNamePressed
- (summary) 
     Listen tot his event if you want to handle a press on the product name component
     
- (since) 6.0
#### HudStatusTextPressed
- (summary) 
     Listen tot his event if you want to handle a press on the status text component
     
- (since) 6.0
#### HudTimePressed
- (summary) 
     Listen tot his event if you want to handle a press press on the time component
     
- (since) 6.0
#### HudUnlockButtonPressed
- (summary) 
     Listen tot his event if you want to handle the unlock button control
     
- (since) 6.0
#### MaxPassesChanged
- (summary) 
     Listen to this if you want to handle changes in maximum pass count through
     the HUD.
     
- (since) 6.0
#### OnDisplayPipelineSettingsChanged
- (summary) 
- (since) 6.0
#### OnDrawMiddleground
- (summary) 
- (since) 6.0
#### OnInitFramebuffer
- (summary) 
- (since) 6.0
## Properties
#### LinearWorkflow LinearWorkflow
- (summary) 
     Returns the LinearWorkflow data for this realitime display mode.
     
- (since) 6.0
#### bool Locked
- (summary) 
- (since) 6.6
#### int MaxPasses
- (summary) 
- (since) 6.6
#### bool Paused
- (summary) 
- (since) 6.6
## Methods
#### static RealtimeDisplayMode GetRealtimeViewport(IntPtr realtimeViewport)
- (summary) 
     Retrieve RealtimeDisplayMode instance that the IntPtr refers to.
     
- (since) 6.0
- (returns) RealtimeDisplayMode This is some return comment
#### static RealtimeDisplayMode GetRealtimeViewport(IntPtr realtimeViewport,bool create)
- (summary) Retrieve RealtimeDisplayMode instance. If create is set to true
     then a new instance is created if not found, None is returned for false.
     
- (since) 6.0
- (returns) RealtimeDisplayMode This is some return comment
#### static RealtimeDisplayModeClassInfo[] RegisterDisplayModes(Assembly assembly,Guid pluginId)
- (summary) 
     Find and register classes that derive from RealtimeDisplayMode
     from the given plug-in. The plug-in is found in the given assembly
     
- (since) 6.0
- (returns) RealtimeDisplayModeClassInfo[] This is some return comment
#### static RealtimeDisplayModeClassInfo[] RegisterDisplayModes(PlugIn plugin)
- (summary) 
     Find and register classes that derive from RealtimeDisplayMode
     from the given plug-in.
     
- (since) 6.0
- (returns) RealtimeDisplayModeClassInfo[] This is some return comment
#### static void RemoveRealtimeViewport(IntPtr realtimeViewport)
- (summary) 
     Remove RealtimeDisplayMode instance from internal dictionary.
     
- (since) 6.0
- (returns) void This is some return comment
#### static void UnregisterDisplayModes(Assembly assembly,Guid pluginId)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### static void UnregisterDisplayModes(PlugIn plugin)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### double CaptureProgress()
- (summary) 
     Override to communicate the progress of a capture.
     
- (since) 6.0
- (returns) double This is some return comment
#### uint ComputeViewportCrc(ViewInfo view)
- (summary) 
     Compute viewport CRC for the given ViewInfo
     
- (since) 6.0
- (returns) uint This is some return comment
#### void CreateWorld(RhinoDoc doc,ViewInfo viewInfo,DisplayPipelineAttributes displayPipelineAttributes)
- (summary) 
     Implement if you need to handle the initial CreateWorld call initiated by the display pipeline system. Note
     that this is not the same as the CreateWorld call in Rhino.Render.ChangeQueue.ChangeQueue, although
     related.
     
- (since) 6.0
- (returns) void This is some return comment
#### bool DrawOpenGl()
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
#### void GetRenderSize(int width,int height)
- (summary) 
     Get the current render resolution for the running render session.
     
- (since) 6.0
- (returns) void This is some return comment
#### ViewInfo GetView()
- (summary) 
     Get ViewInfo that has been registered with this RealtimeDisplayMode instance.
     
- (since) 6.0
- (returns) ViewInfo This is some return comment
#### bool HudAllowEditMaxPasses()
- (summary) 
     Override to allow maximum pass editing. By default disabled.
     
- (since) 6.0
- (returns) bool This is some return comment
#### string HudCustomStatusText()
- (summary) 
     Override to display status of the render engine.
     
- (since) 6.0
- (returns) string This is some return comment
#### int HudLastRenderedPass()
- (summary) 
     Override to communicate the last completed pass. Can be shown in the HUD
     
- (since) 6.0
- (returns) int This is some return comment
#### int HudMaximumPasses()
- (summary) 
     Override to communicate the maximum passes count currently in use for the render session.
     Can be shown in the HUD
     
- (since) 6.0
- (returns) int This is some return comment
#### string HudProductName()
- (summary) 
     Override to return the name of your product. This will be printed in
     the HUD.
     
- (since) 6.0
- (returns) string This is some return comment
#### bool HudRendererLocked()
- (summary) 
     Implement to support locking in the viewport
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool HudRendererPaused()
- (summary) 
     Implement to support pausing and resuming in the viewport
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool HudShow()
- (summary) 
     Override if you want to hide the HUD. Shown by default
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool HudShowControls()
- (summary) 
     Show control buttons on the realtime display HUD.
     
     By default these are shown, override this function and
     return False if HUD controls aren't needed.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool HudShowCustomStatusText()
- (summary) 
     Override to show status text in HUD. By default disabled.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool HudShowMaxPasses()
- (summary) 
     Override to show maximum passes in HUD. By default disabled.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool HudShowPasses()
- (summary) 
     Override to show current pass in HUD. By default disabled.
     
- (since) 6.0
- (returns) bool This is some return comment
#### DateTime HudStartTime()
- (summary) 
- (since) 6.0
- (returns) DateTime This is some return comment
#### bool IsCompleted()
- (summary) 
     Implement to tell if your render engine has completed a frame for drawing into the viewport
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool IsFrameBufferAvailable(ViewInfo view)
- (summary) 
     Implement to tell the render pipeline that a framebuffer is ready
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool IsRendererStarted()
- (summary) 
     Override to tell the started state of your render engine.
     
- (since) 6.0
- (returns) bool This is some return comment
#### int LastRenderedPass()
- (summary) 
     Implement to communicate last completed pass to the underlying system.
     
- (since) 6.0
- (returns) int This is some return comment
#### bool OnRenderSizeChanged(int width,int height)
- (summary) 
     Override to restart your render engine
     
- (since) 6.0
- (returns) bool This is some return comment
#### int OpenGlVersion()
- (summary) 
- (since) 6.0
- (returns) int This is some return comment
#### void PostConstruct()
- (summary) 
     Override PostConstruct if you need to initialize where
     the underlying RealtimeDisplayMode is available.
     
     The connection is made right after RealtimeDisplayMode
     has been instantiated, but just before PostConstruct is called.
     
     For instance finding out OpenGL information can be done in
     PostConstruct.
     
- (since) 6.0
- (returns) void This is some return comment
#### void SetUseDrawOpenGl(bool use)
- (summary) 
     During run-time change whether to use OpenGL drawing of results or not. For instance
     offline rendering (viewcapture* with different resolution than viewport) could use
     RenderWindow instead of direct OpenGL drawing.
     
- (since) 6.0
- (returns) void This is some return comment
#### void SetView(ViewInfo view)
- (summary) 
     Set ViewInfo for this RealtimeDisplayMode instance.
     
- (since) 6.0
- (returns) void This is some return comment
#### bool ShowCaptureProgress()
- (summary) 
     Override if you want to i.e. hide the progress dialog for capture progress.
     
- (since) 6.0
- (returns) bool This is some return comment
#### void ShutdownRenderer()
- (summary) 
     Override to shutdown your render engine
     
- (since) 6.0
- (returns) void This is some return comment
#### void SignalRedraw()
- (summary) 
     Use to signal the underlying pipeline a redraw is wanted. This can be used
     for instance when a renderer has completed a pass which should be
     updated in the associated viewport.
     
- (since) 6.0
- (returns) void This is some return comment
#### bool StartRenderer(int w,int h,RhinoDoc doc,ViewInfo view,ViewportInfo viewportInfo,bool forCapture,RenderWindow renderWindow)
- (summary) 
     Override to start your render engine.
     
     Note that before using the RenderWindow you *must* call SetSize
     to properly initialize the underlying DIB.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool UseFastDraw()
- (summary) 
     Implement and return True if you want the display pipeline to not
     wait for IsFramebufferAvailable during the MiddleGround draw phase.
     This will also tell the pipeline to draw a complete middleground pass in OpenGL.
     
- (since) 6.0
- (returns) bool This is some return comment
