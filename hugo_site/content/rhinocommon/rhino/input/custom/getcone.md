---
title: "GetCone"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

Class provides user interface to define a cone.
```cs
public class GetCone : IDisposable
```
## Constructors

GetCone()
: 
: since 6.0
## Properties

bool AllowInputAngle
: 
: since 6.0

double ApexAngleDegrees
: 
: since 6.0

double BaseAngleDegrees
: 
: since 6.0

bool Cap
: Gets or sets whether or not the output should be capped.
: since 6.0

[ConeConstraint](/rhinocommon/rhino/input/custom/coneconstraint/) ConeConstraint
: State of the cone/cyl constraint option. When the cone/cyl option is
     selected, the circle is being made as a base for a cone/cyl.
     By default the vertical cone/cyl option not available but is not
     selected.  By default the "Vertical" option applies to VerticalCircle.
: since 6.0

double DefaultSize
: Default radius or diameter (based on InDiameterMode)
: since 6.0

double Height
: 
: since 6.0

bool InDiameterMode
: Determines if the "size" value is reperesenting a radius or diameter
: since 6.0
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 6.0

Commands.Result Get(Cone cone)
: Prompt for the getting of a cone.
: Returns - The result of the getting operation.
: since 6.0

Commands.Result GetMesh(int verticalFaces,int aroundFaces,Cone cone)
: Prompt for the getting of a mesh cone.
: Returns - The result of the getting operation.
: since 7.0

Commands.Result GetMesh(int verticalFaces,int aroundFaces,int capStyle,Cone cone)
: Prompt for the getting of a mesh cone.
: Returns - The result of the getting operation.
: since 7.0
