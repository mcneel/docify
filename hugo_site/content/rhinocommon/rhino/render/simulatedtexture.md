---
title: "SimulatedTexture"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class SimulatedTexture : IDisposable
```
## Constructors

SimulatedTexture()
: 
: since 5.1
## Properties

static int BitmapSize
: 
: since 5.1

String Filename
: 
: since 5.1

bool Filtered
: 
: since 5.1

bool HasTransparentColor
: 
: since 5.1

[Transform](/rhinocommon/rhino/geometry/transform/) LocalMappingTransform
: 
: since 5.1

int MappingChannel
: 
: since 5.1

[Vector2d](/rhinocommon/rhino/geometry/vector2d/) Offset
: 
: since 5.1

String OriginalFilename
: 
: since 5.1

[ProjectionModes](/rhinocommon/rhino/render/simulatedtexture/projectionmodes/) ProjectionMode
: 
: since 5.1

[Vector2d](/rhinocommon/rhino/geometry/vector2d/) Repeat
: 
: since 5.1

bool Repeating
: 
: since 5.1

double Rotation
: 
: since 5.1

[Color4f](/rhinocommon/rhino/display/color4f/) TransparentColor
: 
: since 5.1

double TransparentColorSensitivity
: 
: since 5.1
## Methods

IntPtr ConstPointer()
: 
: since 5.1

void Dispose()
: 
: since 5.1

double MetersToUnits(double units)
: 
: since 5.1

double MetersToUnits(RhinoDoc doc,double units)
: 
: since 6.0

void SetMappingChannelAndProjectionMode(ProjectionModes pm,int mappingChannel,EnvironmentMappingModes emm)
: 
: since 6.0

Rhino.DocObjects.Texture Texture()
: 
: since 5.1

double UnitsToMeters(double units)
: 
: since 5.1

double UnitsToMeters(RhinoDoc doc,double units)
: 
: since 6.0
