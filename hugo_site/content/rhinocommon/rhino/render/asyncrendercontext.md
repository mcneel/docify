---
title: "AsyncRenderContext"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

\ingroup rhino_render
   Inherit from AsyncRenderContext to be able to create asynchronous
   render engine implementations through RhinoCommon.
```cs
public class AsyncRenderContext : IDisposable
```
## Properties

Thread RenderThread
: Holder for render thread, that gets set through
     StartRenderThread()
: since 6.0

[RenderWindow](/rhinocommon/rhino/render/renderwindow/) RenderWindow
: Handle to the RenderWindow for the instance of this class. This
     is a convenience property for implementors to use.
: since 6.0
## Methods

void Dispose()
: 
: since 6.0

void JoinRenderThread()
: Join the render thread, then set to null;
: since 6.0

bool StartRenderThread(ThreadStart threadStart,string threadName)
: Start a new render thread with given function.
: since 6.0

void StopRendering()
: Override StopRendering if you need to do additional tasks besides
     having Cancel set to true.
     
     Note: you should always base.StopRendering() in your overriding
     implementation.
: since 6.0
