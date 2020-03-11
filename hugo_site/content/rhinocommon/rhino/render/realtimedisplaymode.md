---
title: "RealtimeDisplayMode"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Base class for implementing real-time display modes in .NET.
   
   Pay special attention that in StartRenderer the RenderWindow.SetSize()
   function is called if the implementation relies on the RenderWindow to
   do the drawing to the viewport. If i.e. OpenGL is used to draw render
   results to the viewport then SetSize() doesn't have to be called, nor
   should the implementation then access channels on the RenderWindow, as
   those then don't exist. For OpenGL-based drawing the RenderWindow is
   used as a container for ViewInfo management, nothing else.
```cs
public class RealtimeDisplayMode
```

HudLockButtonPressed
: Listen tot his event if you want to handle the lock button control
: since 6.0

HudPauseButtonPressed
: Listen tot his event if you want to handle the pause button control
: since 6.0

HudPlayButtonPressed
: Listen to this event if you want to handle the play button control.
: since 6.0

HudProductNamePressed
: Listen tot his event if you want to handle a press on the product name component
: since 6.0

HudStatusTextPressed
: Listen tot his event if you want to handle a press on the status text component
: since 6.0

HudTimePressed
: Listen tot his event if you want to handle a press press on the time component
: since 6.0

HudUnlockButtonPressed
: Listen tot his event if you want to handle the unlock button control
: since 6.0

MaxPassesChanged
: Listen to this if you want to handle changes in maximum pass count through
     the HUD.
: since 6.0

OnDisplayPipelineSettingsChanged
: 
: since 6.0

OnDrawMiddleground
: 
: since 6.0

OnInitFramebuffer
: 
: since 6.0
## Properties

[LinearWorkflow](/rhinocommon/rhino/render/linearworkflow/) LinearWorkflow
: Returns the LinearWorkflow data for this realitime display mode.
: since 6.0

bool Locked
: 
: since 6.6

int MaxPasses
: 
: since 6.6

bool Paused
: 
: since 6.6
## Methods

static RealtimeDisplayMode GetRealtimeViewport(IntPtr realtimeViewport)
: Retrieve RealtimeDisplayMode instance that the IntPtr refers to.
: since 6.0

static RealtimeDisplayMode GetRealtimeViewport(IntPtr realtimeViewport,bool create)
: Retrieve RealtimeDisplayMode instance. If create is set to true
     then a new instance is created if not found, None is returned for false.
: since 6.0

static [RealtimeDisplayModeClassInfo](/rhinocommon/rhino/render/realtimedisplaymodeclassinfo/)[] RegisterDisplayModes(Assembly assembly,Guid pluginId)
: Find and register classes that derive from RealtimeDisplayMode
     from the given plug-in. The plug-in is found in the given assembly
: since 6.0

static [RealtimeDisplayModeClassInfo](/rhinocommon/rhino/render/realtimedisplaymodeclassinfo/)[] RegisterDisplayModes(PlugIn plugin)
: Find and register classes that derive from RealtimeDisplayMode
     from the given plug-in.
: since 6.0

static void RemoveRealtimeViewport(IntPtr realtimeViewport)
: Remove RealtimeDisplayMode instance from internal dictionary.
: since 6.0

static void UnregisterDisplayModes(Assembly assembly,Guid pluginId)
: 
: since 6.0

static void UnregisterDisplayModes(PlugIn plugin)
: 
: since 6.0

double CaptureProgress()
: Override to communicate the progress of a capture.
: Returns - A number between 0.0 and 1.0 inclusive. 1.0 means 100%.
: since 6.0

uint ComputeViewportCrc(ViewInfo view)
: Compute viewport CRC for the given ViewInfo
: Returns - the CRC for the given view
: since 6.0

void CreateWorld(RhinoDoc doc,ViewInfo viewInfo,DisplayPipelineAttributes displayPipelineAttributes)
: Implement if you need to handle the initial CreateWorld call initiated by the display pipeline system. Note
     that this is not the same as the CreateWorld call in Rhino.Render.ChangeQueue.ChangeQueue, although
     related.
: since 6.0

bool DrawOpenGl()
: 
: since 6.0

void GetRenderSize(int width,int height)
: Get the current render resolution for the running render session.
: since 6.0

[ViewInfo](/rhinocommon/rhino/docobjects/viewinfo/) GetView()
: Get ViewInfo that has been registered with this RealtimeDisplayMode instance.
: since 6.0

bool HudAllowEditMaxPasses()
: Override to allow maximum pass editing. By default disabled.
: Returns - Return True to allow users to edit the maximum pass count.
: since 6.0

string HudCustomStatusText()
: Override to display status of the render engine.
: Returns - Status text to display
: since 6.0

int HudLastRenderedPass()
: Override to communicate the last completed pass. Can be shown in the HUD
: Returns - Last completed pass
: since 6.0

int HudMaximumPasses()
: Override to communicate the maximum passes count currently in use for the render session.
     Can be shown in the HUD
: Returns - Maximum passes
: since 6.0

string HudProductName()
: Override to return the name of your product. This will be printed in
     the HUD.
: Returns - Name of the product.
: since 6.0

bool HudRendererLocked()
: Implement to support locking in the viewport
: Returns - Return True if the render engine is locked.
: since 6.0

bool HudRendererPaused()
: Implement to support pausing and resuming in the viewport
: Returns - Return True if the render engine is paused.
: since 6.0

bool HudShow()
: Override if you want to hide the HUD. Shown by default
: Returns - Return False to hide the HUD.
: since 6.0

bool HudShowControls()
: Show control buttons on the realtime display HUD.
     
     By default these are shown, override this function and
     return False if HUD controls aren't needed.
: since 6.0

bool HudShowCustomStatusText()
: Override to show status text in HUD. By default disabled.
: Returns - Return True to show status text in HUD
: since 6.0

bool HudShowMaxPasses()
: Override to show maximum passes in HUD. By default disabled.
: Returns - Return True to show maximum passes.
: since 6.0

bool HudShowPasses()
: Override to show current pass in HUD. By default disabled.
: Returns - Return True to show current pass in HUD.
: since 6.0

DateTime HudStartTime()
: 
: since 6.0

bool IsCompleted()
: Implement to tell if your render engine has completed a frame for drawing into the viewport
: since 6.0

bool IsFrameBufferAvailable(ViewInfo view)
: Implement to tell the render pipeline that a framebuffer is ready
: Returns - Return True when a framebuffer is ready. This is generally the
     case when StartRenderer as returned successfully.
: since 6.0

bool IsRendererStarted()
: Override to tell the started state of your render engine.
: Returns - True if render engine is ready and rendering
: since 6.0

int LastRenderedPass()
: Implement to communicate last completed pass to the underlying system.
: Returns - the last completed pass
: since 6.0

bool OnRenderSizeChanged(int width,int height)
: Override to restart your render engine
: since 6.0

int OpenGlVersion()
: 
: since 6.0

void PostConstruct()
: Override PostConstruct if you need to initialize where
     the underlying RealtimeDisplayMode is available.
     
     The connection is made right after RealtimeDisplayMode
     has been instantiated, but just before PostConstruct is called.
     
     For instance finding out OpenGL information can be done in
     PostConstruct.
: since 6.0

void SetUseDrawOpenGl(bool use)
: During run-time change whether to use OpenGL drawing of results or not. For instance
     offline rendering (viewcapture* with different resolution than viewport) could use
     RenderWindow instead of direct OpenGL drawing.
: since 6.0

void SetView(ViewInfo view)
: Set ViewInfo for this RealtimeDisplayMode instance.
: since 6.0

bool ShowCaptureProgress()
: Override if you want to i.e. hide the progress dialog for capture progress.
: Returns - Return True to show, False to hide
: since 6.0

void ShutdownRenderer()
: Override to shutdown your render engine
: since 6.0

void SignalRedraw()
: Use to signal the underlying pipeline a redraw is wanted. This can be used
     for instance when a renderer has completed a pass which should be
     updated in the associated viewport.
: since 6.0

bool StartRenderer(int w,int h,RhinoDoc doc,ViewInfo view,ViewportInfo viewportInfo,bool forCapture,RenderWindow renderWindow)
: Override to start your render engine.
     
     Note that before using the RenderWindow you *must* call SetSize
     to properly initialize the underlying DIB.
: Returns - Return True when your render engine started correctly, False when that failed
: since 6.0

bool UseFastDraw()
: Implement and return True if you want the display pipeline to not
     wait for IsFramebufferAvailable during the MiddleGround draw phase.
     This will also tell the pipeline to draw a complete middleground pass in OpenGL.
: since 6.0
