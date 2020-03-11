---
title: "RefinementSettings"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.MeshRefinements](../)*

Defines the way a mesh refinement modifier works.
```cs
public class RefinementSettings
```
## Constructors

RefinementSettings()
: Creates a default operation settings object.
: since 6.0
## Properties

CancellationToken ContinueRequest
: A token to request computation termination.
: since 6.0

bool HasPull
: Gets a value indicating whether this subdivision should create a result on a specific surface.
: since 6.0

int Level
: The level of subdivision to achieve.
: since 6.0

[CreaseEdges](/rhinocommon/rhino/geometry/meshrefinements/creaseedges/) NakedEdgeMode
: Set this property to define how naked edges should be treated.
: since 6.0
