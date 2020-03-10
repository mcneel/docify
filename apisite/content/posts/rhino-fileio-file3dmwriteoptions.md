---
title: "Rhino.FileIO.File3dmWriteOptions"
draft: false
---

# Constructors
## Rhino.FileIO.File3dmWriteOptions()
- (summary) 
     Initializes properties to defaults.
     
- (since) 5.9
# Properties
## bool SaveAnalysisMeshes
- (summary) 
     Include analysis meshes in the file. Default is true
     
- (since) 5.9
## bool SaveRenderMeshes
- (summary) 
     Include Render meshes in the file. Default is true
     
- (since) 5.9
## bool SaveUserData
- (summary) 
     Include custom user data in the file. Default is true
     
- (since) 5.9
## int Version
- (summary) File version. Default is major version number of this assembly version.Must be in range [2; current version].Alternatively, 0 is a placeholder for the last valid version.Rhino can read its current version, plus earlier file versions except 1.Use latest version when possible.
- (since) 5.9
# Methods
## void EnableAnalysisMeshes(ObjectType objectType,bool enable)
- (summary) 
     Activates saving of analysis meshes for specific types of objects.
     If you do not specify the state for an object type, its default is used.
     Currently SubD mesh saving is disabled by default, while Brep and Extrusion is enabled.
     
- (since) 6.0
- (returns) void This is some return comment
## void EnableRenderMeshes(ObjectType objectType,bool enable)
- (summary) 
     Activates saving of render meshes for specific types of objects.
     If you do not specify the state for an object type, its default is used.
     Specifically, currently SubD mesh saving is disabled by default, while Brep and Extrusion is on.
     
- (since) 6.0
- (returns) void This is some return comment
