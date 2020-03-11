---
title: "GumballDisplayConduit"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.UI.Gumball](../)*

```cs
public class GumballDisplayConduit : IDisposable
```
## Constructors

GumballDisplayConduit()
: 
## Properties

[GumballObject](/rhinocommon/rhino/ui/gumball/gumballobject/) BaseGumball
: Starting location.

bool Enabled
: 

[GumballObject](/rhinocommon/rhino/ui/gumball/gumballobject/) Gumball
: 

[Transform](/rhinocommon/rhino/geometry/transform/) GumballTransform
: The gumball transformation is the transformation calculated by comparing
     the current gumball to the starting BaseGumball.

bool InRelocate
: 

[GumballPickResult](/rhinocommon/rhino/ui/gumball/gumballpickresult/) PickResult
: The inital mouse down event sets PickResult.

[Transform](/rhinocommon/rhino/geometry/transform/) PreTransform
: The pre-transform is a transformation that needs to be applied before
     the gumball transformation.

[Transform](/rhinocommon/rhino/geometry/transform/) TotalTransform
: The total transformation is GumballTransform * PreTransform.
## Methods

void CheckShiftAndControlKeys()
: 

void Dispose()
: 

bool PickGumball(PickContext pickContext,GetPoint getPoint)
: 

void SetBaseGumball(GumballObject gumball)
: Contents of the gumball are copied to the base gumball of this class.

void SetBaseGumball(GumballObject gumball,GumballAppearanceSettings appearanceSettings)
: Contents of the gumball are copied to the base gumball of this class.

bool UpdateGumball(Point3d point,Line worldLine)
: 
