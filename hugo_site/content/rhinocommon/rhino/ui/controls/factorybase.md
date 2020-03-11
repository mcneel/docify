---
title: "FactoryBase"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.UI.Controls](../)*

Base class for CollapsibleSection and ViewModel factories used by the RDK UI
```cs
public class FactoryBase
```
## Methods

static Type[] Register()
: Call this function during startup of current assembly to load classes with factory creation support
         are registed
: since 6.0

static Type[] Register(PlugIn plugin)
: Call this function during the startup of your plug-in to ensure that all classes that support factory creation
         are registed
: since 6.0

IntPtr Get(Guid id)
: Override this method to return a new instance of your class for the given ID
: since 6.0
