---
title: "ZBufferCapture"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

Provides functionality for getting the zbuffer values from a viewport
   and a given display mode
```cs
public class ZBufferCapture : IDisposable
```
## Constructors

ZBufferCapture(RhinoViewport viewport)
: 
: since 5.3
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 5.3

System.Drawing.Bitmap GrayscaleDib()
: 
: since 5.3

int HitCount()
: 
: since 5.3

float MaxZ()
: 
: since 5.3

float MinZ()
: 
: since 5.3

void SetDisplayMode(Guid modeId)
: 
: since 5.3

void ShowAnnotations(bool on)
: 
: since 5.3

void ShowCurves(bool on)
: 
: since 5.3

void ShowIsocurves(bool on)
: 
: since 5.3

void ShowLights(bool on)
: 
: since 5.3

void ShowMeshWires(bool on)
: 
: since 5.3

void ShowPoints(bool on)
: 
: since 5.3

void ShowText(bool on)
: 
: since 5.3

[Point3d](/rhinocommon/rhino/geometry/point3d/) WorldPointAt(int x,int y)
: 
: since 5.3

float ZValueAt(int x,int y)
: 
: since 5.3
