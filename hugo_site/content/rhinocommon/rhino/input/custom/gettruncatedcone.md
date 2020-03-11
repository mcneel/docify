---
title: "GetTruncatedCone"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

Class provides user interface to define a truncated cone.
```cs
public class GetTruncatedCone : IDisposable
```
## Constructors

GetTruncatedCone()
: 
: since 7.0
## Properties

bool Cap
: Gets or sets whether or not the output should be capped.
: since 7.0

[CylinderConstraint](/rhinocommon/rhino/input/custom/cylinderconstraint/) CylinderConstraint
: State of the cone/cyl constraint option. When the cone/cyl option is
     selected, the circle is being made as a base for a cone/cyl.
     By default the vertical cone/cyl option not available but is not
     selected.  By default the "Vertical" option applies to VerticalCircle.
: since 7.0

double DefaultSize
: Default radius or diameter (based on InDiameterMode)
: since 7.0

double Height
: Height of truncated cone.
: since 7.0

bool InDiameterMode
: Determines if the "size" value is reperesenting a radius or diameter
: since 7.0

double SecondRadius
: Radius of second circle.
: since 7.0
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 7.0

Commands.Result Get(Brep truncatedCone)
: Prompt for the getting of a truncated cone.
: Returns - The result of the getting operation.
: since 7.0

Commands.Result GetMesh(int verticalFaces,int aroundFaces,int capStyle,Mesh truncatedCone)
: Prompt for the getting of a mesh truncated cone.
: Returns - The result of the getting operation.
: since 7.0

Commands.Result GetMesh(int verticalFaces,int aroundFaces,Mesh truncatedCone)
: Prompt for the getting of a mesh truncated cone.
: Returns - The result of the getting operation.
: since 7.0
