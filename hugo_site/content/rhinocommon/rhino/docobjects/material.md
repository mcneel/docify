---
title: "Material"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

```cs
[Serializable]
public class Material : ModelComponent
```
## Constructors

Material()
: 

Material(Material other)
: 
: since 6.0
## Properties

static [Material](/rhinocommon/rhino/render/changequeue/material/) DefaultMaterial
: 

static double MaxShine
: 

bool AlphaTransparency
: 
: since 6.0

Color AmbientColor
: 

ModelComponentType ComponentType
: Returns .
: since 6.0

Color DiffuseColor
: 

bool DisableLighting
: 
: since 6.0

Color EmissionColor
: 

double FresnelIndexOfRefraction
: Gets or sets the Fresnel index of refraction of the material,
     default is 1.56
: since 6.0

bool FresnelReflections
: Gets or sets if fresnel reflections are used.
: since 6.0

double IndexOfRefraction
: Gets or sets the index of refraction of the material, generally
     >= 1.0 (speed of light in vacuum)/(speed of light in material)
: since 5.1

bool IsDefaultMaterial
: By default Rhino layers and objects are assigned the default rendering material.

bool IsDeleted
: Deleted materials are kept in the runtime material table so that undo
     will work with materials.  Call IsDeleted to determine to determine if
     a material is deleted.

bool IsDocumentControlled
: If True this object may not be modified. Any properties or functions that attempt
     to modify this object when it is set to "IsReadOnly" will throw a NotSupportedException.
: since 5.6

bool IsReference
: Rhino allows multiple files to be viewed simultaneously. Materials in the
     document are "normal" or "reference". Reference materials are not saved.

int MaterialIndex
: 
: since 5.6

string Name
: 

[PhysicallyBasedMaterial](/rhinocommon/rhino/render/physicallybasedmaterial/) PhysicallyBased
: 
: since 7.0

Color PreviewColor
: Very simple preview color function for GUIs.
: since 6.6

Color ReflectionColor
: 

double ReflectionGlossiness
: Gets or sets the reflection glossiness.
: since 6.0

double Reflectivity
: Gets or sets how reflective a material is, 0f is no reflection
     1f is 100% reflective.
: since 5.7

double RefractionGlossiness
: Gets or sets the refraction glossiness.
: since 6.0

[RenderMaterial](/rhinocommon/rhino/render/rendermaterial/) RenderMaterial
: Get the RenderMaterial related to this Material.
     
     Will create a new RenderMaterial if none exists. This can happen for older
     documents.
: since 6.0

Guid RenderMaterialInstanceId
: 
: since 6.0

Guid RenderPlugInId
: The Id of the RenderPlugIn that is associated with this material.

double Shine
: Gets or sets the shine factor of the material.

Color SpecularColor
: 

double Transparency
: Gets or sets the transparency of the material (0.0 = opaque to 1.0 = transparent)

Color TransparentColor
: 

int UseCount
: Number of objects and layers that use this material.

int UserStringCount
: 
## Methods

bool CommitChanges()
: 

void CopyFrom(Material other)
: 
: since 6.0

void Default()
: Set material to default settings.

[Texture](/rhinocommon/rhino/docobjects/texture/) GetBitmapTexture()
: 

[Texture](/rhinocommon/rhino/docobjects/texture/) GetBumpTexture()
: Gets the bump texture of this material.
: Returns - A texture; or None if no bump texture has been added to this material.

[Texture](/rhinocommon/rhino/docobjects/texture/) GetEnvironmentTexture()
: 

[Texture](/rhinocommon/rhino/docobjects/texture/) GetTexture(TextureType which)
: Get the texture that corresponds with the specified texture type for this material.
: since 7.0

[Texture](/rhinocommon/rhino/docobjects/texture/)[] GetTextures()
: Get array of textures that this material uses
: since 5.7

[Texture](/rhinocommon/rhino/docobjects/texture/) GetTransparencyTexture()
: 

string GetUserString(string key)
: Gets a user string.
: Returns - string associated with the key if successful. None if no key was found.

System.Collections.Specialized.NameValueCollection GetUserStrings()
: Gets an independent copy of the collection of (user text key, user text value) pairs attached to this object.
: Returns - A collection of key strings and values strings. This

bool SetBitmapTexture(string filename)
: 

bool SetBitmapTexture(Texture texture)
: 

bool SetBumpTexture(string filename)
: 

bool SetBumpTexture(Texture texture)
: 

bool SetEnvironmentTexture(string filename)
: 

bool SetEnvironmentTexture(Texture texture)
: 

bool SetTexture(Texture texture,TextureType which)
: Set the texture that corresponds with the specified texture type for this material.
: since 7.0

bool SetTransparencyTexture(string filename)
: 

bool SetTransparencyTexture(Texture texture)
: 

bool SetUserString(string key,string value)
: Attach a user string (key,value combination) to this geometry.
: Returns - True on success.
