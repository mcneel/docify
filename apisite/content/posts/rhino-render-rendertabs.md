---
title: "Rhino.Render.RenderTabs"
draft: false
---

# Methods
## static object FromRenderSessionId(PlugIn plugIn,Type tabType,Guid renderSessionId)
- (summary) 
     Get the instance of a render tab associated with a specific render
     session, this is useful when it is necessary to update a control from a
     
- (since) 5.11
- (returns) object This is some return comment
## static Guid SessionIdFromTab(object tab)
- (summary) 
     Get the session Id that created the specified tab object.
     
- (since) 5.11
- (returns) Guid This is some return comment
## void RegisterTab(PlugIn plugin,Type tabType,string caption,Icon icon)
- (summary) 
     Register custom render user interface with Rhino.  This should only be
     done in .  Panels
     registered after  is called
     will be ignored.  If the class includes a public method "void DoHelp()"
     the method will get called when F1 is pressed and the custom tab is active.
     
- (since) 5.11
- (returns) void This is some return comment
## void RegisterTabEx(PlugIn plugin,Type tabType,Guid renderEngineId,string caption,Icon icon)
- (summary) 
- (since) 7.0
- (returns) void This is some return comment
