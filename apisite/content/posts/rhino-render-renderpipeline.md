---
title: "RenderPipeline"
draft: false
---

*Namespace: Rhino.Render*

   Provides facilities to a render plug-in for integrating with the standard
   Rhino render window. Also adds helper functions for processing a render
   scene. This is the suggested class to use when integrating a renderer with
   Rhino and maintaining a "standard" user interface that users will expect.
   
## Properties
#### int ConfirmationSeconds
- (summary) 
     Sets the number of seconds that need to elapse during rendering before
     the user is asked if the rendered image should be saved.
     
- (since) 5.0
#### Rhino.PlugIns.PlugIn PlugIn
- (summary) 
- (since) 5.0
#### Guid RenderSessionId
- (summary) 
     Get the Id associated with this render session, this is useful when
     looking up Rhino.Render.RenderPanels.
     
- (since) 5.11
## Methods
#### static Size RenderSize()
- (summary) 
- (since) 5.0
- (returns) Size This is some return comment
#### static Size RenderSize(RhinoDoc doc)
- (summary) 
     Get the render size as specified in the ON_3dmRenderSettings. Will automatically return the correct size based on the ActiveView or custom settings.
     
- (since) 6.0
- (returns) Size This is some return comment
#### static Size RenderSize(RhinoDoc doc,bool fromRenderSources)
- (summary) 
     Get the render size as specified in the ON_3dmRenderSettings, and from RenderSources when
     fromRenderSources is true.
     
- (since) 6.0
- (returns) Size This is some return comment
#### bool CloseWindow()
- (summary) 
     Closes the render window associated with this render instance.
     
- (since) 5.11
- (returns) bool This is some return comment
#### Rhino.Commands.Result CommandResult()
- (summary) 
- (since) 5.0
- (returns) Rhino.Commands.Result This is some return comment
#### void Dispose()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### RenderWindow GetRenderWindow()
- (summary) 
     Get the RenderWindow associated with this RenderPipeline instance.  This is virtual rather than abstract for V5 compat
     
- (since) 5.0
- (returns) RenderWindow This is some return comment
#### RenderWindow GetRenderWindow(bool withWireframeChannel)
- (summary) 
     As GetRenderWindow(), but if withWireframeChannel is true
     the returned RenderWindow will have the channel added.
     
- (since) 6.0
- (returns) RenderWindow This is some return comment
#### RenderWindow GetRenderWindow(bool withWireframeChannel,bool fromRenderViewSource)
- (summary) 
     As GetRenderWindow().
     The parameter withWireframeChannel controls whether
     the returned RenderWindow will have the channel added.
     The parameter fromRenderViewSource controls from where
     the RenderSize is queried.
     
- (since) 6.0
- (returns) RenderWindow This is some return comment
#### RenderWindow GetRenderWindowFromRenderViewSource(bool fromRenderViewSource)
- (summary) 
     Like GetRenderWindow(), but with the size for RenderWindow
     set from RenderViewSources if fromRenderViewSource is set to true
     
- (since) 6.0
- (returns) RenderWindow This is some return comment
#### void PauseRendering()
- (summary) 
     Implement to pause the current render session
     
- (since) 6.0
- (returns) void This is some return comment
#### RenderReturnCode Render()
- (summary) 
     Call this function to render the scene normally. The function returns when rendering is complete (or cancelled).
     
- (since) 5.0
- (returns) RenderReturnCode This is some return comment
#### RenderReturnCode RenderWindow(RhinoView view,Rectangle rect,bool inWindow)
- (summary) 
     Call this function to render the scene in a view window. The function returns when rendering is complete (or cancelled).
     
- (since) 5.0
- (returns) RenderReturnCode This is some return comment
#### void ResumeRendering()
- (summary) 
     Implement to resume current render session
     
- (since) 6.0
- (returns) void This is some return comment
#### bool SaveImage(string fileName,bool saveAlpha)
- (summary) 
     Saves the rendered image to a file. Does not prompt the user in any way.
     
- (since) 5.14
- (returns) bool This is some return comment
#### void SetAsyncRenderContext(AsyncRenderContext aRC)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### bool SupportsPause()
- (summary) 
     Override and return True if the renderer supports pausing
     
- (since) 6.0
- (returns) bool This is some return comment
