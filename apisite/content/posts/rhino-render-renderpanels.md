---
title: "Rhino.Render.RenderPanels"
date: 2020-03-10 09:24:55Z
draft: false
---

# Methods
## static object FromRenderSessionId(PlugIn plugIn,Type panelType,Guid renderSessionId)
- (summary) 
     Get the instance of a render panel associated with a specific render
     session, this is useful when it is necessary to update a control from a
     
- (since) 5.11
- (returns) object This is some return comment
## void RegisterPanel(PlugIn plugin,RenderPanelType renderPanelType,Type panelType,string caption,bool alwaysShow,bool initialShow)
- (summary) 
     Register custom render user interface with Rhino.  This should only be
     done in .  Panels
     registered after  is called
     will be ignored.
     
- (since) 5.11
- (returns) void This is some return comment
## void RegisterPanelEx(PlugIn plugin,RenderPanelType renderPanelType,Type panelType,Guid renderEngineId,string caption,bool alwaysShow,bool initialShow)
- (summary) 
     Register custom render user interface with Rhino.  This should only be
     done in .  Panels
     registered after  is called
     will be ignored.
     
- (since) 7.0
- (returns) void This is some return comment
