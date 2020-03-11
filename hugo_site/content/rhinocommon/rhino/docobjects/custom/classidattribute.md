---
title: "ClassIdAttribute"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.DocObjects.Custom](../)*

Useful for legacy UserData
```cs
[AttributeUsage(AttributeTargets.Class)]
public class ClassIdAttribute : Attribute
```
## Constructors

ClassIdAttribute(string id)
: Initializes a class id attrbute.
: since 6.0
## Properties

Guid Id
: Gets the associated style.
: since 6.0
