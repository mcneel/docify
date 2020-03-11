---
title: "FileObjReadOptions"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Options used when reading an obj file.
```cs
public class FileObjReadOptions
```
## Constructors

FileObjReadOptions(FileReadOptions readOptions)
: 
: since 6.0
## Properties

bool DisplayColorFromObjMaterial
: Determines whether textures are read from the .mtl file, if it exists.
: since 6.5

bool IgnoreTextures
: Determines whether textures are read from the .mtl file, if it exists.
: since 6.0

bool MapYtoZ
: Setting to transform OBJ's Y axis to Rhino's Z axis
: since 6.0

bool MorphTargetOnly
: TODO
: since 6.0

bool ReverseGroupOrder
: Determines how groups/layers are nested when reading an obj file.
     Left to Right (default = false) or Right to Left (true)
: since 6.0

bool Split32BitTextures
: 
: since 6.0

[UseObjGsAs](/rhinocommon/rhino/fileio/fileobjreadoptions/useobjgsas/) UseObjGroupsAs
: 
: since 6.0

bool UseObjObjects
: Determines whether or not "o"s in the obj file
     will be interpreted as objects in the Rhino model
: since 6.0
## Methods

[Transform](/rhinocommon/rhino/geometry/transform/) GetTransform()
: Calculates the YToZ transform.
: since 6.0
