---
title: "AsyncRenderContext"
draft: false
---

*Namespace: Rhino.Render*

   \ingroup rhino_render
   Inherit from AsyncRenderContext to be able to create asynchronous
   render engine implementations through RhinoCommon.
   
## Properties
#### Thread RenderThread
- (summary) 
     Holder for render thread, that gets set through
     StartRenderThread()
     
- (since) 6.0
#### RenderWindow RenderWindow
- (summary) 
     Handle to the RenderWindow for the instance of this class. This
     is a convenience property for implementors to use.
     
- (since) 6.0
## Methods
#### void Dispose()
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void JoinRenderThread()
- (summary) 
     Join the render thread, then set to null;
     
- (since) 6.0
- (returns) void This is some return comment
#### bool StartRenderThread(ThreadStart threadStart,string threadName)
- (summary) 
     Start a new render thread with given function.
     
- (since) 6.0
- (returns) bool This is some return comment
#### void StopRendering()
- (summary) 
     Override StopRendering if you need to do additional tasks besides
     having Cancel set to true.
     
     Note: you should always base.StopRendering() in your overriding
     implementation.
     
- (since) 6.0
- (returns) void This is some return comment
