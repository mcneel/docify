---
title: "RiskyAction"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime](../)*

Defines risky actions that need to be reported in crash exceptions
```cs
public class RiskyAction : IDisposable
```
## Constructors

RiskyAction(string description,string file,string member,int line)
: Always create this in a using block
: since 6.0
## Methods

void Dispose()
: IDisposable implementation
: since 6.0
