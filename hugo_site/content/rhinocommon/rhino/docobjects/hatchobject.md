---
title: "HatchObject"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

```cs
public class HatchObject : RhinoObject
```
## Properties

[Hatch](/rhinocommon/rhino/geometry/hatch/) HatchGeometry
: 
## Methods

bool SetHatchGeometry(Hatch hatch)
: Replaces a hatch object's underlying hatch geometry. This only works for non-document hatch objects.
: Returns - True if successful, False otherwise.
: since 7.0
