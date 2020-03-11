---
title: "DisplayMaterial"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Display](../)*

```cs
public class DisplayMaterial : IDisposable
```
## Constructors

DisplayMaterial()
: Constructs a default material.

DisplayMaterial(Color diffuse)
: Constructs a default material with a specific diffuse color.

DisplayMaterial(Color diffuse,Color specular,Color ambient,Color emission,double shine,double transparency)
: Constructs a material with custom properties.

DisplayMaterial(Color diffuse,double transparency)
: Constructs a default material with a specific diffuse color and transparency.

DisplayMaterial(DisplayMaterial other)
: Duplicate another material.

DisplayMaterial(Material material)
: 
## Properties

Color Ambient
: Gets or sets the Ambient color of the Material. 
     The alpha component of the color will be ignored.

Color BackAmbient
: Gets or sets the Ambient color of the back side of the Material. 
     The alpha component of the color will be ignored.

Color BackDiffuse
: Gets or sets the Diffuse color of the back side of the Material. 
     The alpha component of the color will be ignored.

Color BackEmission
: Gets or sets the Emissive color of the back side of the Material. 
     The alpha component of the color will be ignored.

double BackShine
: Gets or sets the shine factor of the back side of the material (0.0 to 1.0)

Color BackSpecular
: Gets or sets the Specular color of the back side of the Material. 
     The alpha component of the color will be ignored.

double BackTransparency
: Gets or sets the transparency of the back side material (0.0 = opaque to 1.0 = transparent)

Color Diffuse
: Gets or sets the Diffuse color of the Material. 
     The alpha component of the color will be ignored.

Color Emission
: Gets or sets the Emissive color of the Material. 
     The alpha component of the color will be ignored.

bool IsTwoSided
: 

double Shine
: Gets or sets the shine factor of the material (0.0 to 1.0)

Color Specular
: Gets or sets the Specular color of the Material. 
     The alpha component of the color will be ignored.

double Transparency
: Gets or sets the transparency of the material (0.0 = opaque to 1.0 = transparent)
## Methods

void Dispose()
: 

Rhino.DocObjects.Texture GetBitmapTexture(bool front)
: 

Rhino.DocObjects.Texture GetBumpTexture(bool front)
: Gets the bump texture for this display material.
: Returns - The texture, or None if no bump texture has been added to this material.

Rhino.DocObjects.Texture GetEnvironmentTexture(bool front)
: 

Rhino.DocObjects.Texture GetTransparencyTexture(bool front)
: 

bool SetBitmapTexture(string filename,bool front)
: 

bool SetBitmapTexture(Texture texture,bool front)
: 

bool SetBumpTexture(string filename,bool front)
: 

bool SetBumpTexture(Texture texture,bool front)
: 

bool SetEnvironmentTexture(string filename,bool front)
: 

bool SetEnvironmentTexture(Texture texture,bool front)
: 

bool SetTransparencyTexture(string filename,bool front)
: 

bool SetTransparencyTexture(Texture texture,bool front)
: 
