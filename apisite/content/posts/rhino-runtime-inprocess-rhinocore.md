---
title: "Rhino.Runtime.InProcess.RhinoCore"
draft: false
---

# Constructors
## Rhino.Runtime.InProcess.RhinoCore()
- (summary) 
     Initializes a new instance of the  class.
     
- (since) 7.0
## Rhino.Runtime.InProcess.RhinoCore(string[] args)
- (summary) 
     Initializes a new instance of the  class.
     
- (since) 7.0
## Rhino.Runtime.InProcess.RhinoCore(string[] args,WindowStyle windowStyle)
- (summary) 
     Initializes a new instance of the  class.
     
- (since) 7.0
## Rhino.Runtime.InProcess.RhinoCore(string[] args,WindowStyle windowStyle,IntPtr hostWnd)
- (summary) 
     Initializes a new instance of the  class.
     
- (since) 7.0
# Methods
## void Dispose()
- (summary) 
     IDisposable implementation
     
- (since) 7.0
- (returns) void This is some return comment
## bool DoEvents()
- (summary) 
     If a Rhino owned window is active processes all Windows messages currently in the message queue.
     
- (since) 7.0
- (returns) bool This is some return comment
## bool DoIdle()
- (summary) 
     Processes all Rhino Idle tasks.
     
- (since) 7.0
- (returns) bool This is some return comment
## void InvokeInHostContext(Action action)
- (summary) 
     Invokes action in Host context
     
- (since) 7.0
- (returns) void This is some return comment
## T InvokeInHostContext(Func<T> func)
- (summary) 
     Invokes function in Host context
     
- (since) 7.0
- (returns) T This is some return comment
## void RaiseIdle()
- (summary) 
     Raises the Idle event.
     
- (since) 7.0
- (returns) void This is some return comment
## int Run()
- (summary) 
     Runs RhinoApp Message loop
     
- (since) 7.0
- (returns) int This is some return comment
