---
title: "RenderTabs"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class RenderTabs
```
## Methods

static object FromRenderSessionId(PlugIn plugIn,Type tabType,Guid renderSessionId)
: Get the instance of a render tab associated with a specific render
     session, this is useful when it is necessary to update a control from a
: Returns - Returns the custom tab object if found; otherwise None is returned.
: since 5.11

static Guid SessionIdFromTab(object tab)
: Get the session Id that created the specified tab object.
: since 5.11

void RegisterTab(PlugIn plugin,Type tabType,string caption,Icon icon)
: Register custom render user interface with Rhino.  This should only be
     done in .  Panels
     registered after  is called
     will be ignored.  If the class includes a public method "void DoHelp()"
     the method will get called when F1 is pressed and the custom tab is active.
: since 5.11

void RegisterTabEx(PlugIn plugin,Type tabType,Guid renderEngineId,string caption,Icon icon)
: 
: since 7.0
