---
title: "Texture"
draft: false
---

*Namespace: Rhino.DocObjects*

   Represents a texture that is mapped on objects.
   
## Constructors
#### Rhino.DocObjects.Texture()
- (summary) 
     Initializes a new texture.
     
- (since) 5.0
## Properties
#### bool ApplyUvwTransform
- (summary) 
     If True then the UVW transform is applied to the texture
     otherwise the UVW transform is ignored.
     
- (since) 5.6
#### bool Enabled
- (summary) 
     If the texture is enabled then it will be visible in the rendered
     display otherwise it will not.
     
- (since) 5.0
#### string FileName
- (summary) 
     Gets or sets a file name that is used by this texture.
     NOTE: We are moving away from string-based FileName, and suggest
     the usage of the new FileReference class.Also, this filename may well not be a path that makes sense
     on a user's computer because it was a path initially set on
     a different user's computer. If you want to get a workable path
     for this user, use the BitmapTable.Find function using this
     property.
- (since) 5.0
#### FileReference FileReference
- (summary) 
     Gets or sets a copy of the file reference that is used by this texture.
     After the get or the set method complete,
     you own the copy you received or passed in, and can Dispose() of it.
- (since) 6.0
#### Guid Id
- (summary) 
     Gets the globally unique identifier of this texture.
     
- (since) 5.0
#### int MappingChannelId
- (summary) 
- (since) 5.10
#### TextureCombineMode TextureCombineMode
- (summary) 
     Determines how this texture is combined with others in a material's
     texture list.
     
- (since) 5.6
#### TextureType TextureType
- (summary) 
     Controls how the pixels in the bitmap are interpreted
     
- (since) 5.6
#### Transform UvwTransform
- (summary) 
     Transform to be applied to each instance of this texture
     if ApplyUvw is true
     
- (since) 5.6
#### TextureUvwWrapping WrapU
- (summary) 
     Texture wrapping mode in the U direction
     
- (since) 5.6
#### TextureUvwWrapping WrapV
- (summary) 
     Texture wrapping mode in the V direction
     
- (since) 5.6
#### TextureUvwWrapping WrapW
- (summary) 
     Texture wrapping mode in the W direction
     
- (since) 5.6
## Methods
#### void GetAlphaBlendValues(double constant,double a0,double a1,double a2,double a3)
- (summary) 
     If the TextureCombineMode is Blend, then the blending function
     for alpha is determined by
     
     new alpha = constant
                 + a0*(current alpha)
                 + a1*(texture alpha)
                 + a2*min(current alpha,texture alpha)
                 + a3*max(current alpha,texture alpha)
     
- (since) 5.6
- (returns) void This is some return comment
#### void SetAlphaBlendValues(double constant,double a0,double a1,double a2,double a3)
- (summary) 
     If the TextureCombineMode is Blend, then the blending function
     for alpha is determined by
     
     new alpha = constant
                 + a0*(current alpha)
                 + a1*(texture alpha)
                 + a2*min(current alpha,texture alpha)
                 + a3*max(current alpha,texture alpha)
     
- (since) 5.6
- (returns) void This is some return comment
#### void SetRGBBlendValues(Color color,double a0,double a1,double a2,double a3)
- (summary) 
     If the TextureCombineMode is Blend, then the blending function
     for RGB is determined by
     
     new rgb = colorcolor
             + a0[0]*(current RGB)
             + a1[1]*(texture RGB)
             + a2[2]*min(current RGB,texture RGB)
             + a3[3]*max(current RGB,texture RGB)
    
- (since) 6.0
- (returns) void This is some return comment
