---
title: "RenderContentEventArgs"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class RenderContentEventArgs : EventArgs
```
## Properties

[RenderContent](/rhinocommon/rhino/render/rendercontent/) Content
: 
: since 5.7

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: 
: since 6.0

[Usage](/rhinocommon/rhino/render/renderenvironment/usage/) EnvironmentUsage
: Meaningful for CurrentEnvironmentChanged event. Will be one of Background, ReflectionAndRefraction or Skylighting.
     
     Since 6.11
: since 6.11

[RenderContentChangeReason](/rhinocommon/rhino/render/rendercontentchangereason/) Reason
: Not when used in CurrentEnvironmentChanged (defaults to None).
: since 6.0
