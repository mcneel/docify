---
title: "GetCircle"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

```cs
public class GetCircle : IDisposable
```
## Constructors

GetCircle()
: 
: since 6.0
## Properties

bool AllowDeformable
: Allow for deformable options
: since 6.0

double DefaultSize
: Default radius or diameter (based on InDiameterMode)
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

bool InDiameterMode
: Determines if the "size" value is reperesenting a radius or diameter
: since 6.0
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 6.0

Commands.Result Get(Circle circle)
: Perform the 'get' operation.
: since 6.0
