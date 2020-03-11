---
title: "Skin"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime](../)*

Represents a customized environment that changes the appearance of Rhino.
   Skin DLLs must contain a single class that derives from the Skin class.
```cs
public class Skin
```
## Properties

static Skin ActiveSkin
: Any time Rhino is running there is at most one skin being used (and
     possibly no skin).  If a RhinoCommon based Skin class is being used, use
     ActiveSkin to get at the instance of this Skin class. May return null
     if no Skin is being used or if the skin is not a RhinoCommon based skin.

[PersistentSettings](/rhinocommon/rhino/persistentsettings/) Settings
: Gets access to the skin persistent settings.
