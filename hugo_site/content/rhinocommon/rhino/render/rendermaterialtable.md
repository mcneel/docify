---
title: "RenderMaterialTable"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class RenderMaterialTable : IRenderContentTable<RenderMaterial>, IEnumerable<RenderMaterial>, Collections.IRhinoTable<RenderMaterial>
```
## Properties

int Count
: 
: since 5.7
## Methods

bool Add(RenderMaterial c)
: 
: since 6.0

void BeginChange(ChangeContexts changeContext)
: 
: since 7.0

void EndChange()
: 
: since 7.0

IEnumerator<RenderMaterial> GetEnumerator()
: 
: since 5.7

bool Remove(RenderMaterial c)
: 
: since 6.0
