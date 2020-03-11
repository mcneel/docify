---
title: "RenderPanels"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

This class is used to extend the standard Render user interface
```cs
public class RenderPanels
```
## Methods

static object FromRenderSessionId(PlugIn plugIn,Type panelType,Guid renderSessionId)
: Get the instance of a render panel associated with a specific render
     session, this is useful when it is necessary to update a control from a
: Returns - Returns the custom panel object if found; otherwise None is returned.
: since 5.11

void RegisterPanel(PlugIn plugin,RenderPanelType renderPanelType,Type panelType,string caption,bool alwaysShow,bool initialShow)
: Register custom render user interface with Rhino.  This should only be
     done in .  Panels
     registered after  is called
     will be ignored.
: since 5.11

void RegisterPanelEx(PlugIn plugin,RenderPanelType renderPanelType,Type panelType,Guid renderEngineId,string caption,bool alwaysShow,bool initialShow)
: Register custom render user interface with Rhino.  This should only be
     done in .  Panels
     registered after  is called
     will be ignored.
: since 7.0
