---
title: "RenderTextureTable"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class RenderTextureTable : IRenderContentTable<RenderTexture>, IEnumerable<RenderTexture>, Collections.IRhinoTable<RenderTexture>
```
## Properties

int Count
: 
: since 5.7
## Methods

bool Add(RenderTexture c)
: 
: since 6.0

void BeginChange(ChangeContexts changeContext)
: 
: since 7.0

void EndChange()
: 
: since 7.0

IEnumerator<RenderTexture> GetEnumerator()
: 
: since 5.7

bool Remove(RenderTexture c)
: 
: since 6.0
