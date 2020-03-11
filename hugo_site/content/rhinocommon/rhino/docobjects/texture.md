---
title: "Texture"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Represents a texture that is mapped on objects.
```cs
[Serializable]
public class Texture : Runtime.CommonObject
```
## Constructors

Texture()
: Initializes a new texture.
## Properties

bool ApplyUvwTransform
: If True then the UVW transform is applied to the texture
     otherwise the UVW transform is ignored.
: since 5.6

bool Enabled
: If the texture is enabled then it will be visible in the rendered
     display otherwise it will not.

string FileName
: Gets or sets a file name that is used by this texture.
     NOTE: We are moving away from string-based FileName, and suggest
     the usage of the new FileReference class.Also, this filename may well not be a path that makes sense
     on a user's computer because it was a path initially set on
     a different user's computer. If you want to get a workable path
     for this user, use the BitmapTable.Find function using this
     property.

[FileReference](/rhinocommon/rhino/fileio/filereference/) FileReference
: Gets or sets a copy of the file reference that is used by this texture.
     After the get or the set method complete,
     you own the copy you received or passed in, and can Dispose() of it.
: since 6.0

Guid Id
: Gets the globally unique identifier of this texture.

int MappingChannelId
: 
: since 5.10

[TextureCombineMode](/rhinocommon/rhino/docobjects/texturecombinemode/) TextureCombineMode
: Determines how this texture is combined with others in a material's
     texture list.
: since 5.6

[TextureType](/rhinocommon/rhino/docobjects/texturetype/) TextureType
: Controls how the pixels in the bitmap are interpreted
: since 5.6

[Transform](/rhinocommon/rhino/geometry/transform/) UvwTransform
: Transform to be applied to each instance of this texture
     if ApplyUvw is true
: since 5.6

[TextureUvwWrapping](/rhinocommon/rhino/docobjects/textureuvwwrapping/) WrapU
: Texture wrapping mode in the U direction
: since 5.6

[TextureUvwWrapping](/rhinocommon/rhino/docobjects/textureuvwwrapping/) WrapV
: Texture wrapping mode in the V direction
: since 5.6

[TextureUvwWrapping](/rhinocommon/rhino/docobjects/textureuvwwrapping/) WrapW
: Texture wrapping mode in the W direction
: since 5.6
## Methods

void GetAlphaBlendValues(double constant,double a0,double a1,double a2,double a3)
: If the TextureCombineMode is Blend, then the blending function
     for alpha is determined by
     
     new alpha = constant
                 + a0*(current alpha)
                 + a1*(texture alpha)
                 + a2*min(current alpha,texture alpha)
                 + a3*max(current alpha,texture alpha)
: since 5.6

void SetAlphaBlendValues(double constant,double a0,double a1,double a2,double a3)
: If the TextureCombineMode is Blend, then the blending function
     for alpha is determined by
     
     new alpha = constant
                 + a0*(current alpha)
                 + a1*(texture alpha)
                 + a2*min(current alpha,texture alpha)
                 + a3*max(current alpha,texture alpha)
: since 5.6

void SetRGBBlendValues(Color color,double a0,double a1,double a2,double a3)
: If the TextureCombineMode is Blend, then the blending function
     for RGB is determined by
     
     new rgb = colorcolor
             + a0[0]*(current RGB)
             + a1[1]*(texture RGB)
             + a2[2]*min(current RGB,texture RGB)
             + a3[3]*max(current RGB,texture RGB)
: since 6.0
