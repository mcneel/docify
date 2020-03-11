---
title: "RenderPipeline"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Provides facilities to a render plug-in for integrating with the standard
   Rhino render window. Also adds helper functions for processing a render
   scene. This is the suggested class to use when integrating a renderer with
   Rhino and maintaining a "standard" user interface that users will expect.
```cs
public class RenderPipeline : IDisposable
```
## Properties

int ConfirmationSeconds
: Sets the number of seconds that need to elapse during rendering before
     the user is asked if the rendered image should be saved.

[PlugIn](/rhinocommon/rhino/plugins/plugin/) PlugIn
: 

Guid RenderSessionId
: Get the Id associated with this render session, this is useful when
     looking up Rhino.Render.RenderPanels.
: since 5.11
## Methods

static Size RenderSize()
: 

static Size RenderSize(RhinoDoc doc)
: Get the render size as specified in the ON_3dmRenderSettings. Will automatically return the correct size based on the ActiveView or custom settings.
: Returns - The render size.
: since 6.0

static Size RenderSize(RhinoDoc doc,bool fromRenderSources)
: Get the render size as specified in the ON_3dmRenderSettings, and from RenderSources when
     fromRenderSources is true.
: Returns - The render size.
: since 6.0

bool CloseWindow()
: Closes the render window associated with this render instance.
: Returns - Return True if successful or False if not.
: since 5.11

Rhino.Commands.Result CommandResult()
: 

void Dispose()
: 

[RenderWindow](/rhinocommon/rhino/render/renderwindow/) GetRenderWindow()
: Get the RenderWindow associated with this RenderPipeline instance.  This is virtual rather than abstract for V5 compat
: Returns - RenderWindow if one exists, None otherwise (i.e. rendering
     has already completed).

[RenderWindow](/rhinocommon/rhino/render/renderwindow/) GetRenderWindow(bool withWireframeChannel)
: As GetRenderWindow(), but if withWireframeChannel is true
     the returned RenderWindow will have the channel added.
: Returns - RenderWindow with wireframe channel enabled, or null
     if no RenderWindow can be found (i.e. rendering has completed
     already)
: since 6.0

[RenderWindow](/rhinocommon/rhino/render/renderwindow/) GetRenderWindow(bool withWireframeChannel,bool fromRenderViewSource)
: As GetRenderWindow().
     The parameter withWireframeChannel controls whether
     the returned RenderWindow will have the channel added.
     The parameter fromRenderViewSource controls from where
     the RenderSize is queried.
: Returns - RenderWindow if one exists, None otherwise (i.e. rendering
     has already completed).
: since 6.0

[RenderWindow](/rhinocommon/rhino/render/renderwindow/) GetRenderWindowFromRenderViewSource(bool fromRenderViewSource)
: Like GetRenderWindow(), but with the size for RenderWindow
     set from RenderViewSources if fromRenderViewSource is set to true
: Returns - RenderWindow if one exists, None otherwise (i.e. rendering
     has already completed).
: since 6.0

void PauseRendering()
: Implement to pause the current render session
: since 6.0

[RenderReturnCode](/rhinocommon/rhino/render/renderpipeline/renderreturncode/) Render()
: Call this function to render the scene normally. The function returns when rendering is complete (or cancelled).
: Returns - A code that explains how rendering completed.

[RenderReturnCode](/rhinocommon/rhino/render/renderpipeline/renderreturncode/) RenderWindow(RhinoView view,Rectangle rect,bool inWindow)
: Call this function to render the scene in a view window. The function returns when rendering is complete (or cancelled).
: Returns - A code that explains how rendering completed.

void ResumeRendering()
: Implement to resume current render session
: since 6.0

bool SaveImage(string fileName,bool saveAlpha)
: Saves the rendered image to a file. Does not prompt the user in any way.
: since 5.14

void SetAsyncRenderContext(AsyncRenderContext aRC)
: 
: since 6.0

bool SupportsPause()
: Override and return True if the renderer supports pausing
: Returns - True if pausing is supported, False otherwise
: since 6.0
