---
title: "HiddenLineDrawingObject"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents an object added to a HiddenLineDrawing
```cs
public class HiddenLineDrawingObject
```
## Properties

[GeometryBase](/rhinocommon/rhino/geometry/geometrybase/) Geometry
: Returns the geometry in world coordinates if UseXform is false. 
     Otherwise, the geometry in object space coordinates is returned.
: since 6.0

object Tag
: Returns the extra data used to cross-reference the object specified in
     HiddenLineDrawing.AddObject.
: since 6.0

[Transform](/rhinocommon/rhino/geometry/transform/) Transform
: Returns the transformation passed into the Add... function
     when setting up the hidden line drawing parameters.
: since 6.0
