---
title: "Rhino.FileIO.File3dm"
draft: false
---

# Constructors
## Rhino.FileIO.File3dm()
- (summary) 
     Initializes a new instance of a 3dm file.
     
- (since) 5.0
# Properties
## File3dmDimStyleTable AllDimStyles
- (summary) 
     Dimension Styles in this file.
     
- (since) 6.0
## File3dmGroupTable AllGroups
- (summary) 
     Grpups in this file.
     
- (since) 6.5
## File3dmHatchPatternTable AllHatchPatterns
- (summary) 
     Hatch patterns in this file.
     
- (since) 6.0
## File3dmInstanceDefinitionTable AllInstanceDefinitions
- (summary) 
     Instance definitions in this file
     
- (since) 6.0
## File3dmLayerTable AllLayers
- (summary) 
     Layers in this file.
     
- (since) 6.0
## File3dmLinetypeTable AllLinetypes
- (summary) 
     Linetypes in this file.
     
- (since) 6.0
## File3dmMaterialTable AllMaterials
- (summary) 
     Materials in this file.
     
- (since) 6.0
## File3dmNamedConstructionPlanes AllNamedConstructionPlanes
- (summary) 
     Named construction planes in this file.
     
- (since) 6.0
## File3dmViewTable AllNamedViews
- (summary) 
     Named views in this file.
     
- (since) 6.0
## File3dmViewTable AllViews
- (summary) 
     Views that represent the RhinoViews which are displayed when Rhino loads this file.
     
- (since) 6.0
## string ApplicationDetails
- (summary) 
     Gets or sets details for the application that wrote this file.
     
- (since) 5.0
## string ApplicationName
- (summary) 
     Gets or sets the name of the application that wrote this file.
     
- (since) 5.0
## string ApplicationUrl
- (summary) 
     Gets or sets a URL for the application that wrote this file.
     
- (since) 5.0
## DateTime Created
- (summary) 
     Get the DateTime that this file was originally created. If the
     value is not set in the 3dm file, then DateTime.MinValue is returned
     
- (since) 5.6
## string CreatedBy
- (summary) 
     Gets a string that names the user who created the file.
     
- (since) 5.0
## IList<DimensionStyle> DimStyles
- (summary) 
     Dimension Styles in this file.
     
- (since) 5.0
## IList<HatchPattern> HatchPatterns
- (summary) 
     Hatch patterns in this file
     
- (since) 5.0
## IList<InstanceDefinitionGeometry> InstanceDefinitions
- (summary) 
     Instance definitions in this file.
     
- (since) 5.6
## DateTime LastEdited
- (summary) 
     Get the DateTime that this file was last edited. If the
     value is not set in the 3dm file, then DateTime.MinValue is returned
     
- (since) 5.6
## string LastEditedBy
- (summary) 
     Gets a string that names the user who last edited the file.
     
- (since) 5.0
## IList<Layer> Layers
- (summary) 
     Layers in this file.
     
- (since) 5.0
## IList<Linetype> Linetypes
- (summary) 
     Linetypes in this file.
     
- (since) 5.0
## ManifestTable Manifest
- (summary) 
     Retrieves the manifest with all object descriptions in this file.
     
- (since) 6.0
## IList<Material> Materials
- (summary) 
     Materials in this file.
     
- (since) 5.0
## IList<ConstructionPlane> NamedConstructionPlanes
- (summary) 
     Named construction planes in this file.
     
- (since) 6.0
## IList<ViewInfo> NamedViews
- (summary) 
     Named views in this file.
     
- (since) 5.0
## File3dmNotes Notes
- (summary) 
     Gets or sets the model notes.
     
- (since) 5.0
## File3dmObjectTable Objects
- (summary) 
     Gets access to the  class associated with this file,
     which contains all objects.
     
- (since) 5.0
## File3dmPlugInDataTable PlugInData
- (summary) 
     Custom plug-in data in this file.  This data is not attached to any geometry or attributes
     
- (since) 5.0
## int Revision
- (summary) 
     Gets or sets the revision number.
     
- (since) 5.0
## File3dmSettings Settings
- (summary) 
     Settings include tolerance, and unit system, and defaults used
     for creating views and objects.
     
- (since) 5.0
## string StartSectionComments
- (summary) 
     Gets or sets the start section comments, which are the comments with which the 3dm file begins.
     
- (since) 5.0
## File3dmStringTable Strings
- (summary) 
     Document user strings in this file
     
- (since) 6.0
## IList<ViewInfo> Views
- (summary) 
     Views that represent the RhinoViews which are displayed when Rhino loads this file.
     
- (since) 5.0
# Methods
## static File3dm Read(string path)
- (summary) 
     Reads a 3dm file from a specified location.
     
- (since) 5.0
- (returns) File3dm This is some return comment
## static File3dm Read(string path,TableTypeFilter tableTypeFilterFilter,ObjectTypeFilter objectTypeFilter)
- (summary) 
     Reads a 3dm file from a specified location.
     
- (since) 5.9
- (returns) File3dm This is some return comment
## static void ReadApplicationData(string path,string applicationName,string applicationUrl,string applicationDetails)
- (summary) 
     Reads only the application information from an existing 3dm file.
     
- (since) 5.0
- (returns) void This is some return comment
## static int ReadArchiveVersion(string path)
- (summary)  Reads only the archive 3dm version from an existing 3dm file. 
- (since) 5.10
- (returns) int This is some return comment
## static DimensionStyle[] ReadDimensionStyles(string path)
- (summary) 
     Read the dimension styles table out of a 3dm file.
     
- (since) 6.0
- (returns) DimensionStyle[] This is some return comment
## static string ReadNotes(string path)
- (summary) Reads only the notes from an existing 3dm file.
- (since) 5.0
- (returns) string This is some return comment
## static System.Drawing.Bitmap ReadPreviewImage(string path)
- (summary) 
     Attempts to read the preview image out of a 3dm file.
     
- (since) 5.0
- (returns) System.Drawing.Bitmap This is some return comment
## static bool ReadRevisionHistory(string path,string createdBy,string lastEditedBy,int revision,DateTime createdOn,DateTime lastEditedOn)
- (summary) 
     Quickly check a file for it's revision information.  This function does
     not read the entire file, just what it needs to get revision information out
     
- (since) 5.6
- (returns) bool This is some return comment
## static File3dm ReadWithLog(string path,string errorLog)
- (summary) 
     Read a 3dm file from a specified location and log any archive
     reading errors.
     
- (since) 5.0
- (returns) File3dm This is some return comment
## static File3dm ReadWithLog(string path,TableTypeFilter tableTypeFilterFilter,ObjectTypeFilter objectTypeFilter,string errorLog)
- (summary) 
     Reads a 3dm file from a specified location.
     
- (since) 5.9
- (returns) File3dm This is some return comment
## int Audit(bool attemptRepair,int repairCount,string errors,int[] warnings)
- (summary) 
     This function is only kept for forward assembly compatibility.
     
- (since) 5.0
- (returns) int This is some return comment
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
## string Dump()
- (summary) Prepares a text dump of the entire model.
- (since) 5.0
- (returns) string This is some return comment
## string DumpSummary()
- (summary) Prepares a text dump of model properties and settings.
- (since) 5.0
- (returns) string This is some return comment
## void DumpToTextLog(TextLog log)
- (summary) Prepares a text dump of the entire model.
- (since) 5.1
- (returns) void This is some return comment
## System.Drawing.Bitmap GetPreviewImage()
- (summary)  Preview image used for file explorer 
- (since) 6.0
- (returns) System.Drawing.Bitmap This is some return comment
## bool IsValid(string errors)
- (summary) 
     The File3dm object is kept consistent during its creation.
     Therefore, this function now returns only true.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsValid(TextLog errors)
- (summary) 
     The File3dm object is kept consistent during its creation.
     Therefore, this function now returns only true.
     
- (since) 5.1
- (returns) bool This is some return comment
## void Polish()
- (summary) 
     This function is only kept for forward assembly compatibility.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetPreviewImage(Bitmap image)
- (summary)  Preview image used for file explorer 
- (since) 6.0
- (returns) void This is some return comment
## bool Write(string path,File3dmWriteOptions options)
- (summary) 
     Writes contents of this model to an openNURBS archive.
     If the model is not valid, then Write will refuse to write it.
     
- (since) 5.9
- (returns) bool This is some return comment
## bool Write(string path,int version)
- (summary) 
     Writes contents of this model to an openNURBS archive.
     If the model is not valid, then Write will refuse to write it.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool WriteWithLog(string path,File3dmWriteOptions options,string errorLog)
- (summary) 
     Writes contents of this model to an openNURBS archive.
     If the model is not valid, then Write will refuse to write it.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool WriteWithLog(string path,int version,string errorLog)
- (summary) 
     Writes contents of this model to an openNURBS archive.
     If the model is not valid, then Write will refuse to write it.
     
- (since) 5.0
- (returns) bool This is some return comment
