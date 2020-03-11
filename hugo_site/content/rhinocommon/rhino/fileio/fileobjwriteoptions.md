---
title: "FileObjWriteOptions"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

```cs
public class FileObjWriteOptions
```
## Constructors

FileObjWriteOptions(FileWriteOptions writeOptions)
: 
: since 6.0
## Properties

string ActualFilePathOnMac
: 
: since 6.3

bool CreateNgons
: Setting to enable/diable the creation of ngons for the output
: since 6.0

bool CullUnnecessaryVertexesInNgons
: Setting to determine whether interior colinear vertexes are part of the 
     ngon.
: since 6.0

[AsciiEol](/rhinocommon/rhino/fileio/fileobjwriteoptions/asciieol/) EolType
: 
: since 6.0

[ObjGroupNames](/rhinocommon/rhino/fileio/fileobjwriteoptions/objgroupnames/) ExportGroupNameLayerNames
: Setting to determine whether object, group or layer names
     will become "g"s in the OBJ output file
: since 6.0

bool ExportMaterialDefinitions
: Setting to write an .mtl file and "usemtl"s in the obj file
: since 6.0

bool ExportNormals
: Enable/disable export of vertex normals, if they exist.
: since 6.0

[ObjObjectNames](/rhinocommon/rhino/fileio/fileobjwriteoptions/objobjectnames/) ExportObjectNames
: Setting to determine what object names in Rhino 
     will become in the OBJ output file
: since 6.0

bool ExportOpenMeshes
: Enable/Disable bailing when an open mesh is encountered.
: since 6.0

bool ExportTcs
: Enable/disable export of texture coordinates, if they exist.
: since 6.0

bool ExportVcs
: Enable/disable export of vertex colors, if they exist.
: since 6.0

bool IncludeUnweldedEdgesInNgons
: Setting to determine whether unwelded edges are ignored in the 
     creation of an ngon.
: since 6.0

bool MapZtoY
: Setting to transform Rhino's Z axis to OBJ's Y axis
: since 6.0

bool MergeNestedGroupingNames
: Setting to merge nested layer or group names into a single OBJ group name
: since 6.7

[MeshingParameters](/rhinocommon/rhino/geometry/meshingparameters/) MeshParameters
: Mesh parameters to use when meshing geometry that is not already a mesh.
: since 6.0

[VertexWelding](/rhinocommon/rhino/fileio/fileobjwriteoptions/vertexwelding/) MeshType
: 
: since 6.0

int MinNgonFaceCount
: Minimum number of faces to consider creation of ngon
: since 6.0

[GeometryType](/rhinocommon/rhino/fileio/fileobjwriteoptions/geometrytype/) ObjectType
: 
: since 6.0

int SignificantDigits
: Number of significant digits to write out for floating point numbers
: since 6.0

bool SortObjGroups
: Setting to enable/disable sorting of OBJ groups
: since 6.0

[SubDMeshing](/rhinocommon/rhino/fileio/fileobjwriteoptions/subdmeshing/) SubDMeshType
: 
: since 7.0

int SubDSurfaceMeshingDensity
: Determines how coarse the mesh output
     will be when surface meshing subd objects
     
     See comments for ON_SubDDisplayParameters in opennurbs_mesh.h
     for details regarding numbers used.
: since 7.0

[CurveType](/rhinocommon/rhino/fileio/fileobjwriteoptions/curvetype/) TrimCurveType
: trimming curve option
: since 6.0

bool UnderbarMaterialNames
: Enable/disable replacing white space with underbars in material names.
: since 6.0

bool UseRelativeIndexing
: Determines whether to use relative indexing.
     
     TRUE = use relative (negative) indexing
     FALSE = use absolute (positive) indexing
: since 6.0

bool UseSimpleDialog
: Determines whether to use the simple or detailed meshing dialog.
: since 6.0

bool WrapLongLines
: Setting to enable/disable line wrapping with "\"s
: since 6.0
## Methods

[Transform](/rhinocommon/rhino/geometry/transform/) GetTransform()
: Calculates the transform combination of ZToY and
     any the translation that might occur in a SavewithOrigin.
: since 6.0
