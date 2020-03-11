---
title: "RenderWindow"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class RenderWindow : IDisposable
```
## Events

static Cloned
: 
: since 5.11
## Properties

Guid SessionId
: 
: since 5.11
## Methods

static Guid ChannelId(StandardChannels ch)
: 

static RenderWindow Create(Size szSize)
: 
: since 6.0

static RenderWindow FromSessionId(Guid sessionId)
: 
: since 5.11

bool AddChannel(StandardChannels channel)
: Add a channel to the frame buffer in addition to the fixed Red, Green, Blue and Alpha channels.
: Returns - If the channel existed then True is returned otherwise; returns True if the channel was added or False if not.

bool AddWireframeChannel(RhinoDoc doc,ViewportInfo viewport,Size size,Rectangle region)
: A wireframe channel will not be added if none of the document properties settings
     indicate that one is needed. In other words, Rhino will not generate an empty wireframe channel
     just for the fun of it.
: Returns - Returns True if the wireframe channel was successfully added.

void Dispose()
: 
: since 6.0

void EndAsyncRender(RenderSuccessCode successCode)
: Must be called when an asynchronous render has finished or ended for any reason.
: since 6.0

[ImageAdjust](/rhinocommon/rhino/render/renderwindow/imageadjust/) GetAdjust()
: Get an ImageAdjust instance containing current image adjusting settings
     for this RenderWindow
: Returns - ImageAdjust
: since 6.0

Bitmap GetBitmap()
: 
: since 6.0

void Invalidate()
: Invalidate the entire view window so that the pixels get painted.

void InvalidateArea(Rectangle rect)
: 

[Channel](/rhinocommon/rhino/render/renderwindow/channel/) OpenChannel(StandardChannels id)
: 

void SaveDibAsBitmap(string filename)
: Save current Dib of RenderWindow as file
     Helper function for debugging purposes.
: since 6.0

void SaveRenderImageAs(string filename,bool saveAlpha)
: Like RenderWindow.SaveRenderImageAs(string,Guid,bool), but with
   Guid set to Guid.Empty.
: since 6.0

void SaveRenderImageAs(string filename,Guid renderEngineGuid,bool saveAlpha)
: Save current RenderWindow contents as
   an image file with the given name. The
   filetype will be determine. 
   
   Pass in render engine Guid if an engine
   implements saving to a format that is not
   supported by Rhino. Guid.Empty if there is no need for that.
: since 6.0

void SetAdjust(ImageAdjust imageAdjust)
: Set new ImageAdjust to use. An ImageAdjust instance can be obtained by first
     querying for one using GetAdjust()
: since 6.0

void SetProgress(string text,float progress)
: Accepts a rendering progress value to inform the user of the rendering advances.

void SetRGBAChannelColors(Rectangle rectangle,Color4f[] colors)
: Call this method to open the RenderWindow.StandardChannels.RGBA channel and set a block of color values

void SetRGBAChannelColors(Size size,Color4f[] colors)
: Call this method to open the RenderWindow.StandardChannels.RGBA channel and set a block of color values

void SetSize(Size size)
: 

void SetView(ViewInfo view)
: 
: since 6.0

System.Drawing.Size Size()
: 
