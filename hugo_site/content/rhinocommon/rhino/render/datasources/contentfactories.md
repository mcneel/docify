---
title: "ContentFactories"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render.DataSources](../)*

```cs
public class ContentFactories : IDisposable
```
## Constructors

ContentFactories(IntPtr pRdkContentFactories)
: 
: since 6.1
## Properties

IntPtr CppPointer
: 
: since 6.1
## Methods

void Dispose()
: 
: since 6.1

[ContentFactory](/rhinocommon/rhino/render/datasources/contentfactory/) FindFactory(Guid uuid)
: 
: since 6.7

[ContentFactory](/rhinocommon/rhino/render/datasources/contentfactory/) FirstFactory()
: 
: since 6.1

[ContentFactory](/rhinocommon/rhino/render/datasources/contentfactory/) NextFactory()
: 
: since 6.1
