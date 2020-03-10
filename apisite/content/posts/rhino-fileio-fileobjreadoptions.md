---
title: "Rhino.FileIO.FileObjReadOptions"
draft: false
---

# Constructors
## Rhino.FileIO.FileObjReadOptions(FileReadOptions readOptions)
- (summary) 
- (since) 6.0
# Properties
## bool DisplayColorFromObjMaterial
- (summary) 
     Determines whether textures are read from the .mtl file, if it exists.
     
- (since) 6.5
## bool IgnoreTextures
- (summary) 
     Determines whether textures are read from the .mtl file, if it exists.
     
- (since) 6.0
## bool MapYtoZ
- (summary) 
     Setting to transform OBJ's Y axis to Rhino's Z axis
     
- (since) 6.0
## bool MorphTargetOnly
- (summary) 
     TODO 
     
- (since) 6.0
## bool ReverseGroupOrder
- (summary) 
     Determines how groups/layers are nested when reading an obj file.
     Left to Right (default = false) or Right to Left (true)
     
- (since) 6.0
## bool Split32BitTextures
- (summary) 
- (since) 6.0
## UseObjGsAs UseObjGroupsAs
- (summary) 
- (since) 6.0
## bool UseObjObjects
- (summary) 
     Determines whether or not "o"s in the obj file
     will be interpreted as objects in the Rhino model
     
- (since) 6.0
# Methods
## Transform GetTransform()
- (summary) 
     Calculates the YToZ transform.
     
- (since) 6.0
- (returns) Transform This is some return comment
