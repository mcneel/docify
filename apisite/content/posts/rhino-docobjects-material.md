---
title: "Rhino.DocObjects.Material"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.DocObjects.Material()
- (summary) 
- (since) 5.0
## Rhino.DocObjects.Material(Material other)
- (summary) 
- (since) 6.0
# Properties
## static Material DefaultMaterial
- (summary) 
- (since) 5.0
## static double MaxShine
- (summary) 
- (since) 5.0
## bool AlphaTransparency
- (summary) 
- (since) 6.0
## System.Drawing.Color AmbientColor
- (summary) 
- (since) 5.0
## ModelComponentType ComponentType
- (summary) 
     Returns .
     
- (since) 6.0
## System.Drawing.Color DiffuseColor
- (summary) 
- (since) 5.0
## bool DisableLighting
- (summary) 
- (since) 6.0
## System.Drawing.Color EmissionColor
- (summary) 
- (since) 5.0
## double FresnelIndexOfRefraction
- (summary) 
     Gets or sets the Fresnel index of refraction of the material,
     default is 1.56
     
- (since) 6.0
## bool FresnelReflections
- (summary) 
     Gets or sets if fresnel reflections are used.
     
- (since) 6.0
## double IndexOfRefraction
- (summary) 
     Gets or sets the index of refraction of the material, generally
     >= 1.0 (speed of light in vacuum)/(speed of light in material)
     
- (since) 5.1
## bool IsDefaultMaterial
- (summary) 
     By default Rhino layers and objects are assigned the default rendering material.
     
- (since) 5.0
## bool IsDeleted
- (summary) 
     Deleted materials are kept in the runtime material table so that undo
     will work with materials.  Call IsDeleted to determine to determine if
     a material is deleted.
     
- (since) 5.0
## bool IsDocumentControlled
- (summary) 
     If True this object may not be modified. Any properties or functions that attempt
     to modify this object when it is set to "IsReadOnly" will throw a NotSupportedException.
     
- (since) 5.6
## bool IsReference
- (summary) 
     Rhino allows multiple files to be viewed simultaneously. Materials in the
     document are "normal" or "reference". Reference materials are not saved.
     
- (since) 5.0
## int MaterialIndex
- (summary) 
- (since) 5.6
## string Name
- (summary) 
- (since) 5.0
## Rhino.Render.PhysicallyBasedMaterial PhysicallyBased
- (summary) 
- (since) 7.0
## System.Drawing.Color PreviewColor
- (summary) 
      Very simple preview color function for GUIs.
     
- (since) 6.6
## System.Drawing.Color ReflectionColor
- (summary) 
- (since) 5.0
## double ReflectionGlossiness
- (summary) 
     Gets or sets the reflection glossiness.
     
- (since) 6.0
## double Reflectivity
- (summary) 
     Gets or sets how reflective a material is, 0f is no reflection
     1f is 100% reflective.
     
- (since) 5.7
## double RefractionGlossiness
- (summary) 
     Gets or sets the refraction glossiness.
     
- (since) 6.0
## RenderMaterial RenderMaterial
- (summary) 
     Get the RenderMaterial related to this Material.
     
     Will create a new RenderMaterial if none exists. This can happen for older
     documents.
     
- (since) 6.0
## Guid RenderMaterialInstanceId
- (summary) 
- (since) 6.0
## Guid RenderPlugInId
- (summary) 
     The Id of the RenderPlugIn that is associated with this material.
     
- (since) 5.0
## double Shine
- (summary) 
     Gets or sets the shine factor of the material.
     
- (since) 5.0
## System.Drawing.Color SpecularColor
- (summary) 
- (since) 5.0
## double Transparency
- (summary) 
     Gets or sets the transparency of the material (0.0 = opaque to 1.0 = transparent)
     
- (since) 5.0
## System.Drawing.Color TransparentColor
- (summary) 
- (since) 5.0
## int UseCount
- (summary) 
     Number of objects and layers that use this material.
     
- (since) 5.0
## int UserStringCount
- (summary) 
- (since) 5.0
# Methods
## bool CommitChanges()
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## void CopyFrom(Material other)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## void Default()
- (summary) 
     Set material to default settings.
     
- (since) 5.0
- (returns) void This is some return comment
## Texture GetBitmapTexture()
- (summary) 
- (since) 5.0
- (returns) Texture This is some return comment
## Texture GetBumpTexture()
- (summary) 
     Gets the bump texture of this material.
     
- (since) 5.0
- (returns) Texture This is some return comment
## Texture GetEnvironmentTexture()
- (summary) 
- (since) 5.0
- (returns) Texture This is some return comment
## Texture GetTexture(TextureType which)
- (summary) 
     Get the texture that corresponds with the specified texture type for this material.
     
- (since) 7.0
- (returns) Texture This is some return comment
## Texture[] GetTextures()
- (summary) 
     Get array of textures that this material uses
     
- (since) 5.7
- (returns) Texture[] This is some return comment
## Texture GetTransparencyTexture()
- (summary) 
- (since) 5.0
- (returns) Texture This is some return comment
## string GetUserString(string key)
- (summary) 
     Gets a user string.
     
- (since) 5.0
- (returns) string This is some return comment
## System.Collections.Specialized.NameValueCollection GetUserStrings()
- (summary) 
     Gets an independent copy of the collection of (user text key, user text value) pairs attached to this object.
     
- (since) 5.0
- (returns) System.Collections.Specialized.NameValueCollection This is some return comment
## bool SetBitmapTexture(string filename)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool SetBitmapTexture(Texture texture)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool SetBumpTexture(string filename)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool SetBumpTexture(Texture texture)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool SetEnvironmentTexture(string filename)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool SetEnvironmentTexture(Texture texture)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool SetTexture(Texture texture,TextureType which)
- (summary) 
     Set the texture that corresponds with the specified texture type for this material.
     
- (since) 7.0
- (returns) bool This is some return comment
## bool SetTransparencyTexture(string filename)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool SetTransparencyTexture(Texture texture)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool SetUserString(string key,string value)
- (summary) 
     Attach a user string (key,value combination) to this geometry.
     
- (since) 5.0
- (returns) bool This is some return comment
