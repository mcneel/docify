---
title: "GumballObject"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.UI.Gumball](../)*

```cs
public class GumballObject : IDisposable
```
## Constructors

GumballObject()
: 
## Properties

[GumballFrame](/rhinocommon/rhino/ui/gumball/gumballframe/) Frame
: 
## Methods

void Dispose()
: 

bool SetFromArc(Arc arc)
: 

bool SetFromBoundingBox(BoundingBox boundingBox)
: 

bool SetFromBoundingBox(Plane frame,BoundingBox frameBoundingBox)
: Sets the gumball bounding box with respect to a frame.
: Returns - True if input is valid and gumball is set. False if input is not valid.
     In this case, gumball is set to the default.

bool SetFromCircle(Circle circle)
: 

bool SetFromCurve(Curve curve)
: 

bool SetFromEllipse(Ellipse ellipse)
: 

bool SetFromExtrusion(Extrusion extrusion)
: 

bool SetFromHatch(Hatch hatch)
: 

bool SetFromLight(Light light)
: 

bool SetFromLine(Line line)
: 

bool SetFromPlane(Plane plane)
: 
