---
title: "CustomRenderContentAttribute"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
[AttributeUsage(AttributeTargets.Class)]
public class CustomRenderContentAttribute : Attribute
```
## Constructors

CustomRenderContentAttribute(string renderEngineGuid,bool imageBased,string category,bool is_elevated,bool is_built_in,bool is_private)
: 
: since 6.0

CustomRenderContentAttribute(string renderEngineGuid,bool imageBased,string category,bool is_elevated,bool is_built_in,bool is_private,bool is_linear,bool is_hdrcapable,bool is_normalmap)
: 
: since 6.16
## Properties

string Category
: 
: since 6.0

bool ImageBased
: 
: since 6.0

bool IsBuiltIn
: 
: since 6.0

bool IsElevated
: 
: since 6.0

bool IsHdrCapable
: 
: since 6.16

bool IsLinear
: 
: since 6.16

bool IsNormalMap
: 
: since 6.16

bool IsPrivate
: 
: since 6.0

Guid RenderEngineId
: 
: since 6.0
