---
title: "ContentFactory"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render.DataSources](../)*

```cs
public class ContentFactory : IDisposable
```
## Constructors

ContentFactory(IntPtr pRdkContentFactory)
: 
: since 6.1
## Properties

IntPtr CppPointer
: 
: since 6.1
## Methods

Guid ContentTypeId()
: 
: since 6.7

void Dispose()
: 
: since 6.1

[RenderContentKind](/rhinocommon/rhino/render/rendercontentkind/) Kind()
: 
: since 6.3

[RenderContent](/rhinocommon/rhino/render/rendercontent/) NewContent()
: New Content returns a new content, which is Initialized with the Initialize() function.
     The content should be unitilized after use with the Unitialize function.
: since 6.1
