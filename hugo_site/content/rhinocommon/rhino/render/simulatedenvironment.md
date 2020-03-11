---
title: "SimulatedEnvironment"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class SimulatedEnvironment : IDisposable
```
## Constructors

SimulatedEnvironment()
: 
: since 5.1
## Properties

Color BackgroundColor
: 
: since 5.1

[SimulatedTexture](/rhinocommon/rhino/render/simulatedtexture/) BackgroundImage
: 
: since 5.1

[BackgroundProjections](/rhinocommon/rhino/render/simulatedenvironment/backgroundprojections/) BackgroundProjection
: 
: since 5.1
## Methods

static [BackgroundProjections](/rhinocommon/rhino/render/simulatedenvironment/backgroundprojections/) ProjectionFromString(String projection)
: 
: since 5.1

static string StringFromProjection(BackgroundProjections projection)
: 
: since 5.1

IntPtr ConstPointer()
: 
: since 5.1

void Dispose()
: 
: since 5.1
