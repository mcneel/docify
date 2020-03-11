---
title: "GetSphere"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

Class provides user interface to define a sphere.
```cs
public class GetSphere : IDisposable
```
## Constructors

GetSphere()
: 
: since 7.0
## Properties

double DefaultSize
: Default radius or diameter (based on InDiameterMode)
: since 7.0

bool InDiameterMode
: Determines if the "size" value is reperesenting a radius or diameter
: since 7.0
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 7.0

Commands.Result Get(Sphere sphere)
: Prompt for the getting of a sphere.
: Returns - The result of the getting operation.
: since 7.0

Commands.Result GetMesh(MeshSphereStyle style,int verticalFaces,int aroundFaces,int triangleSubdivisions,int quadSubdivisions,Sphere sphere)
: Prompt for the getting of a mesh sphere.
: Returns - The result of the getting operation.
: since 7.0
