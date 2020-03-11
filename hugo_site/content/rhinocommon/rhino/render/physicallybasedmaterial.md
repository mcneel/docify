---
title: "PhysicallyBasedMaterial"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class PhysicallyBasedMaterial
```
## Properties

double Anisotropic
: 
: since 7.0

double AnisotropicRotation
: 
: since 7.0

[Color4f](/rhinocommon/rhino/display/color4f/) BaseColor
: 
: since 7.0

[BRDFs](/rhinocommon/rhino/render/physicallybasedmaterial/brdfs/) BRDF
: 
: since 7.0

double Clearcoat
: 
: since 7.0

double ClearcoatRoughness
: 
: since 7.0

[Color4f](/rhinocommon/rhino/display/color4f/) Emission
: 
: since 7.0

[Material](/rhinocommon/rhino/render/changequeue/material/) Material
: 
: since 7.0

double Metallic
: 
: since 7.0

double Opacity
: 
: since 7.0

double OpacityIOR
: 
: since 7.0

double OpacityRoughness
: 
: since 7.0

double ReflectiveIOR
: 
: since 7.0

double Roughness
: 
: since 7.0

double Sheen
: 
: since 7.0

double SheenTint
: 
: since 7.0

double Specular
: 
: since 7.0

double SpecularTint
: 
: since 7.0

double Subsurface
: 
: since 7.0

[Color4f](/rhinocommon/rhino/display/color4f/) SubsurfaceScatteringColor
: 
: since 7.0

double SubsurfaceScatteringRadius
: 
: since 7.0

bool Supported
: 
: since 7.0
## Methods

DocObjects.Texture GetTexture(TextureType which)
: Get the texture that corresponds with the specified texture type for this material.
: since 7.0

DocObjects.Texture[] GetTextures()
: Get array of textures that this material uses
: since 7.0

bool SetTexture(Texture texture,TextureType which)
: Set the texture that corresponds with the specified texture type for this material.
: since 7.0

void SynchronizeLegacyMaterial()
: 
: since 7.0
