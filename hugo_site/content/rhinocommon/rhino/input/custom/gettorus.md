---
title: "GetTorus"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

Class provides user interface to define a torus.
```cs
public class GetTorus : IDisposable
```
## Constructors

GetTorus()
: 
: since 7.0
## Properties

double DefaultSize
: Default radius or diameter (based on InDiameterMode)
: since 7.0

bool FixInnerRadius
: Second radius opion. The first radius chosen sets the inner dimension of the torus and the second radius is constrained to be outside of the first radius.
: since 7.0

bool InDiameterMode
: Determines if the "size" value is reperesenting a radius or diameter
: since 7.0

bool InSecondDiameterMode
: Second radius opion. Determines if the second "size" value is reperesenting a radius or diameter
: since 7.0

double SecondSize
: Second radius or diameter (based on InSecondDiameterMode)
: since 7.0
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 7.0

Commands.Result Get(Torus torus)
: Prompt for the getting of a torus.
: Returns - The result of the getting operation.
: since 7.0

Commands.Result GetMesh(int verticalFaces,int aroundFaces,Torus torus)
: Prompt for the getting of a mesh torus.
: Returns - The result of the getting operation.
: since 7.0
