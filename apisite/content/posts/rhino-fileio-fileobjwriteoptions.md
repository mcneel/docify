---
title: "FileObjWriteOptions"
draft: false
---

*Namespace: Rhino.FileIO*
## Constructors
#### Rhino.FileIO.FileObjWriteOptions(FileWriteOptions writeOptions)
- (summary) 
- (since) 6.0
## Properties
#### string ActualFilePathOnMac
- (summary) 
- (since) 6.3
#### bool CreateNgons
- (summary) 
     Setting to enable/diable the creation of ngons for the output
     
- (since) 6.0
#### bool CullUnnecessaryVertexesInNgons
- (summary) 
     Setting to determine whether interior colinear vertexes are part of the 
     ngon.
     
- (since) 6.0
#### AsciiEol EolType
- (summary) 
- (since) 6.0
#### ObjGroupNames ExportGroupNameLayerNames
- (summary) 
     Setting to determine whether object, group or layer names
     will become "g"s in the OBJ output file
     
- (since) 6.0
#### bool ExportMaterialDefinitions
- (summary) 
     Setting to write an .mtl file and "usemtl"s in the obj file
     
- (since) 6.0
#### bool ExportNormals
- (summary) 
     Enable/disable export of vertex normals, if they exist.
     
- (since) 6.0
#### ObjObjectNames ExportObjectNames
- (summary) 
     Setting to determine what object names in Rhino 
     will become in the OBJ output file
     
- (since) 6.0
#### bool ExportOpenMeshes
- (summary) 
     Enable/Disable bailing when an open mesh is encountered.
     
- (since) 6.0
#### bool ExportTcs
- (summary) 
     Enable/disable export of texture coordinates, if they exist.
     
- (since) 6.0
#### bool ExportVcs
- (summary) 
     Enable/disable export of vertex colors, if they exist.
     
- (since) 6.0
#### bool IncludeUnweldedEdgesInNgons
- (summary) 
     Setting to determine whether unwelded edges are ignored in the 
     creation of an ngon.
     
- (since) 6.0
#### bool MapZtoY
- (summary) 
     Setting to transform Rhino's Z axis to OBJ's Y axis
     
- (since) 6.0
#### bool MergeNestedGroupingNames
- (summary) 
     Setting to merge nested layer or group names into a single OBJ group name
     
- (since) 6.7
#### MeshingParameters MeshParameters
- (summary) 
     Mesh parameters to use when meshing geometry that is not already a mesh.
     
- (since) 6.0
#### VertexWelding MeshType
- (summary) 
- (since) 6.0
#### int MinNgonFaceCount
- (summary) 
     Minimum number of faces to consider creation of ngon
     
- (since) 6.0
#### GeometryType ObjectType
- (summary) 
- (since) 6.0
#### int SignificantDigits
- (summary) 
     Number of significant digits to write out for floating point numbers
     
- (since) 6.0
#### bool SortObjGroups
- (summary) 
     Setting to enable/disable sorting of OBJ groups
     
- (since) 6.0
#### SubDMeshing SubDMeshType
- (summary) 
- (since) 7.0
#### int SubDSurfaceMeshingDensity
- (summary) 
     Determines how coarse the mesh output
     will be when surface meshing subd objects
     
     See comments for ON_SubDDisplayParameters in opennurbs_mesh.h
     for details regarding numbers used.
     
- (since) 7.0
#### CurveType TrimCurveType
- (summary) 
     trimming curve option
     
- (since) 6.0
#### bool UnderbarMaterialNames
- (summary) 
     Enable/disable replacing white space with underbars in material names.
     
- (since) 6.0
#### bool UseRelativeIndexing
- (summary) 
     Determines whether to use relative indexing.
     
     TRUE = use relative (negative) indexing
     FALSE = use absolute (positive) indexing  
     
- (since) 6.0
#### bool UseSimpleDialog
- (summary) 
     Determines whether to use the simple or detailed meshing dialog.
     
- (since) 6.0
#### bool WrapLongLines
- (summary) 
     Setting to enable/disable line wrapping with "\"s
     
- (since) 6.0
## Methods
#### Transform GetTransform()
- (summary) 
     Calculates the transform combination of ZToY and
     any the translation that might occur in a SavewithOrigin.
     
- (since) 6.0
- (returns) Transform This is some return comment
