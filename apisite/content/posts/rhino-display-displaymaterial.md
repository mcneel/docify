---
title: "DisplayMaterial"
draft: false
---

*Namespace: Rhino.Display*
## Constructors
#### Rhino.Display.DisplayMaterial()
- (summary) 
     Constructs a default material.
     
- (since) 5.0
#### Rhino.Display.DisplayMaterial(Color diffuse)
- (summary) 
     Constructs a default material with a specific diffuse color.
     
- (since) 5.0
#### Rhino.Display.DisplayMaterial(Color diffuse,Color specular,Color ambient,Color emission,double shine,double transparency)
- (summary) 
     Constructs a material with custom properties.
     
- (since) 5.0
#### Rhino.Display.DisplayMaterial(Color diffuse,double transparency)
- (summary) 
     Constructs a default material with a specific diffuse color and transparency.
     
- (since) 5.0
#### Rhino.Display.DisplayMaterial(DisplayMaterial other)
- (summary) 
     Duplicate another material.
     
- (since) 5.0
#### Rhino.Display.DisplayMaterial(Material material)
- (summary) 
- (since) 5.0
## Properties
#### Color Ambient
- (summary) 
     Gets or sets the Ambient color of the Material. 
     The alpha component of the color will be ignored.
     
- (since) 5.0
#### Color BackAmbient
- (summary) 
     Gets or sets the Ambient color of the back side of the Material. 
     The alpha component of the color will be ignored.
     
- (since) 5.0
#### Color BackDiffuse
- (summary) 
     Gets or sets the Diffuse color of the back side of the Material. 
     The alpha component of the color will be ignored.
     
- (since) 5.0
#### Color BackEmission
- (summary) 
     Gets or sets the Emissive color of the back side of the Material. 
     The alpha component of the color will be ignored.
     
- (since) 5.0
#### double BackShine
- (summary) 
     Gets or sets the shine factor of the back side of the material (0.0 to 1.0)
     
- (since) 5.0
#### Color BackSpecular
- (summary) 
     Gets or sets the Specular color of the back side of the Material. 
     The alpha component of the color will be ignored.
     
- (since) 5.0
#### double BackTransparency
- (summary) 
     Gets or sets the transparency of the back side material (0.0 = opaque to 1.0 = transparent)
     
- (since) 5.0
#### Color Diffuse
- (summary) 
     Gets or sets the Diffuse color of the Material. 
     The alpha component of the color will be ignored.
     
- (since) 5.0
#### Color Emission
- (summary) 
     Gets or sets the Emissive color of the Material. 
     The alpha component of the color will be ignored.
     
- (since) 5.0
#### bool IsTwoSided
- (summary) 
- (since) 5.0
#### double Shine
- (summary) 
     Gets or sets the shine factor of the material (0.0 to 1.0)
     
- (since) 5.0
#### Color Specular
- (summary) 
     Gets or sets the Specular color of the Material. 
     The alpha component of the color will be ignored.
     
- (since) 5.0
#### double Transparency
- (summary) 
     Gets or sets the transparency of the material (0.0 = opaque to 1.0 = transparent)
     
- (since) 5.0
## Methods
#### void Dispose()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### Rhino.DocObjects.Texture GetBitmapTexture(bool front)
- (summary) 
- (since) 5.0
- (returns) Rhino.DocObjects.Texture This is some return comment
#### Rhino.DocObjects.Texture GetBumpTexture(bool front)
- (summary) 
     Gets the bump texture for this display material.
     
- (since) 5.0
- (returns) Rhino.DocObjects.Texture This is some return comment
#### Rhino.DocObjects.Texture GetEnvironmentTexture(bool front)
- (summary) 
- (since) 5.0
- (returns) Rhino.DocObjects.Texture This is some return comment
#### Rhino.DocObjects.Texture GetTransparencyTexture(bool front)
- (summary) 
- (since) 5.0
- (returns) Rhino.DocObjects.Texture This is some return comment
#### bool SetBitmapTexture(string filename,bool front)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetBitmapTexture(Texture texture,bool front)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetBumpTexture(string filename,bool front)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetBumpTexture(Texture texture,bool front)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetEnvironmentTexture(string filename,bool front)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetEnvironmentTexture(Texture texture,bool front)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetTransparencyTexture(string filename,bool front)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetTransparencyTexture(Texture texture,bool front)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
