---
title: "RhinoCore"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime.InProcess](../)*

Represents an instance of RhinoCore.DLL.
```cs
public class RhinoCore : IDisposable
```
## Constructors

RhinoCore()
: Initializes a new instance of the  class.
: since 7.0

RhinoCore(string[] args)
: Initializes a new instance of the  class.
: since 7.0

RhinoCore(string[] args,WindowStyle windowStyle)
: Initializes a new instance of the  class.
: since 7.0

RhinoCore(string[] args,WindowStyle windowStyle,IntPtr hostWnd)
: Initializes a new instance of the  class.
: since 7.0
## Methods

void Dispose()
: IDisposable implementation
: since 7.0

bool DoEvents()
: If a Rhino owned window is active processes all Windows messages currently in the message queue.
: Returns - Returns True if a Rhino owned window is still active or Idle tasks are pending.
: since 7.0

bool DoIdle()
: Processes all Rhino Idle tasks.
: Returns - True if Idle tasks are still pending.
: since 7.0

void InvokeInHostContext(Action action)
: Invokes action in Host context
: since 7.0

T InvokeInHostContext(Func<T> func)
: Invokes function in Host context
: Returns - Returns argument function return value.
: since 7.0

void RaiseIdle()
: Raises the Idle event.
: since 7.0

int Run()
: Runs RhinoApp Message loop
: since 7.0
