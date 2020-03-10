---
title: "RenderWindow"
draft: false
---

*Namespace: Rhino.Render*
## Events
#### static Cloned
- (summary) 
- (since) 5.11
## Properties
#### Guid SessionId
- (summary) 
- (since) 5.11
## Methods
#### static Guid ChannelId(StandardChannels ch)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### static RenderWindow Create(Size szSize)
- (summary) 
- (since) 6.0
- (returns) RenderWindow This is some return comment
#### static RenderWindow FromSessionId(Guid sessionId)
- (summary) 
- (since) 5.11
- (returns) RenderWindow This is some return comment
#### bool AddChannel(StandardChannels channel)
- (summary) 
     Add a channel to the frame buffer in addition to the fixed Red, Green, Blue and Alpha channels.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool AddWireframeChannel(RhinoDoc doc,ViewportInfo viewport,Size size,Rectangle region)
- (summary) 
     A wireframe channel will not be added if none of the document properties settings
     indicate that one is needed. In other words, Rhino will not generate an empty wireframe channel
     just for the fun of it.
     
- (since) 5.0
- (returns) bool This is some return comment
#### void Dispose()
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void EndAsyncRender(RenderSuccessCode successCode)
- (summary) 
     Must be called when an asynchronous render has finished or ended for any reason.
     
- (since) 6.0
- (returns) void This is some return comment
#### ImageAdjust GetAdjust()
- (summary) 
     Get an ImageAdjust instance containing current image adjusting settings
     for this RenderWindow
     
- (since) 6.0
- (returns) ImageAdjust This is some return comment
#### Bitmap GetBitmap()
- (summary) 
- (since) 6.0
- (returns) Bitmap This is some return comment
#### void Invalidate()
- (summary) 
     Invalidate the entire view window so that the pixels get painted.
     
- (since) 5.0
- (returns) void This is some return comment
#### void InvalidateArea(Rectangle rect)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### Channel OpenChannel(StandardChannels id)
- (summary) 
- (since) 5.0
- (returns) Channel This is some return comment
#### void SaveDibAsBitmap(string filename)
- (summary) 
     Save current Dib of RenderWindow as file
     Helper function for debugging purposes.
     
- (since) 6.0
- (returns) void This is some return comment
#### void SaveRenderImageAs(string filename,bool saveAlpha)
- (summary) 
   Like RenderWindow.SaveRenderImageAs(string,Guid,bool), but with
   Guid set to Guid.Empty.
   
- (since) 6.0
- (returns) void This is some return comment
#### void SaveRenderImageAs(string filename,Guid renderEngineGuid,bool saveAlpha)
- (summary) 
   Save current RenderWindow contents as
   an image file with the given name. The
   filetype will be determine. 
   
   Pass in render engine Guid if an engine
   implements saving to a format that is not
   supported by Rhino. Guid.Empty if there is no need for that.
   
- (since) 6.0
- (returns) void This is some return comment
#### void SetAdjust(ImageAdjust imageAdjust)
- (summary) 
     Set new ImageAdjust to use. An ImageAdjust instance can be obtained by first
     querying for one using GetAdjust()
     
- (since) 6.0
- (returns) void This is some return comment
#### void SetProgress(string text,float progress)
- (summary) 
     Accepts a rendering progress value to inform the user of the rendering advances.
     
- (since) 5.0
- (returns) void This is some return comment
#### void SetRGBAChannelColors(Rectangle rectangle,Color4f[] colors)
- (summary) 
     Call this method to open the RenderWindow.StandardChannels.RGBA channel and set a block of color values
     
- (since) 5.0
- (returns) void This is some return comment
#### void SetRGBAChannelColors(Size size,Color4f[] colors)
- (summary) 
     Call this method to open the RenderWindow.StandardChannels.RGBA channel and set a block of color values
     
- (since) 5.0
- (returns) void This is some return comment
#### void SetSize(Size size)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void SetView(ViewInfo view)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### System.Drawing.Size Size()
- (summary) 
- (since) 5.0
- (returns) System.Drawing.Size This is some return comment
