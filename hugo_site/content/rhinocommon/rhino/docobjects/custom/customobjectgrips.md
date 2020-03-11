---
title: "CustomObjectGrips"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects.Custom](../)*

```cs
public class CustomObjectGrips : IDisposable
```
## Properties

int GripCount
: 

bool GripsMoved
: If GripsMoved is True if some of the grips have ever been moved
     GripObject.NewLocation() sets GripsMoved=true.

bool NewLocation
: True if some of the grips have been moved. GripObject.NewLocation() sets
     NewLocation=true.  Derived classes can set NewLocation to False after 
     updating temporary display information.

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/) OwnerObject
: Owner of the grips.
## Methods

static bool Dragging()
: Determines if grips are currently being dragged.
: Returns - True if grips are dragged.

static void RegisterGripsEnabler(TurnOnGripsEventHandler enabler,Type customGripsType)
: 

void Dispose()
: 

[CustomGripObject](/rhinocommon/rhino/docobjects/custom/customgripobject/) Grip(int index)
: 
