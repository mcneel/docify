---
title: "RenderEnvironment"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class RenderEnvironment : RenderContent
```
## Properties

static RenderEnvironment CurrentEnvironment
: 
: since 5.1

String TextureChildSlotName
: 
: since 6.0
## Methods

static RenderEnvironment NewBasicEnvironment(SimulatedEnvironment environment)
: Constructs a new  from a .
: Returns - A new basic environment.
: since 5.3

static RenderEnvironment NewBasicEnvironment(SimulatedEnvironment environment,RhinoDoc doc)
: 
: since 6.4

[SimulatedEnvironment](/rhinocommon/rhino/render/simulatedenvironment/) SimulateEnvironment(bool isForDataOnly)
: 
: since 6.0

void SimulateEnvironment(SimulatedEnvironment simulation,bool isForDataOnly)
: 
: since 5.1
