---
title: "GetArc"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

```cs
public class GetArc : IDisposable
```
## Constructors

GetArc()
: 
: since 6.0
## Properties

bool AllowDeformable
: Allow for deformable options
: since 6.0

double DefaultRadius
: Default radius used for start and end radius
: since 6.0

bool Deformable
: Is the deformable option set
: since 6.0

int DeformableDegree
: 
: since 6.0

int DeformablePointCount
: 
: since 6.0
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 6.0

Commands.Result Get(Arc arc)
: Perform the 'get' operation.
: since 6.0
