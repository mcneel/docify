---
title: "File3dm"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Represents a 3dm file, which is stored using the OpenNURBS file standard.
   The 3dm format is the main Rhinoceros storage format.Visit http://www.opennurbs.com/ for more details.
```cs
public class File3dm : IDisposable
```
## Constructors

File3dm()
: Initializes a new instance of a 3dm file.
## Properties

[File3dmDimStyleTable](/rhinocommon/rhino/fileio/file3dmdimstyletable/) AllDimStyles
: Dimension Styles in this file.
: since 6.0

[File3dmGroupTable](/rhinocommon/rhino/fileio/file3dmgrouptable/) AllGroups
: Grpups in this file.
: since 6.5

[File3dmHatchPatternTable](/rhinocommon/rhino/fileio/file3dmhatchpatterntable/) AllHatchPatterns
: Hatch patterns in this file.
: since 6.0

[File3dmInstanceDefinitionTable](/rhinocommon/rhino/fileio/file3dminstancedefinitiontable/) AllInstanceDefinitions
: Instance definitions in this file
: since 6.0

[File3dmLayerTable](/rhinocommon/rhino/fileio/file3dmlayertable/) AllLayers
: Layers in this file.
: since 6.0

[File3dmLinetypeTable](/rhinocommon/rhino/fileio/file3dmlinetypetable/) AllLinetypes
: Linetypes in this file.
: since 6.0

[File3dmMaterialTable](/rhinocommon/rhino/fileio/file3dmmaterialtable/) AllMaterials
: Materials in this file.
: since 6.0

[File3dmNamedConstructionPlanes](/rhinocommon/rhino/fileio/file3dmnamedconstructionplanes/) AllNamedConstructionPlanes
: Named construction planes in this file.
: since 6.0

[File3dmViewTable](/rhinocommon/rhino/fileio/file3dmviewtable/) AllNamedViews
: Named views in this file.
: since 6.0

[File3dmViewTable](/rhinocommon/rhino/fileio/file3dmviewtable/) AllViews
: Views that represent the RhinoViews which are displayed when Rhino loads this file.
: since 6.0

string ApplicationDetails
: Gets or sets details for the application that wrote this file.

string ApplicationName
: Gets or sets the name of the application that wrote this file.

string ApplicationUrl
: Gets or sets a URL for the application that wrote this file.

DateTime Created
: Get the DateTime that this file was originally created. If the
     value is not set in the 3dm file, then DateTime.MinValue is returned
: since 5.6

string CreatedBy
: Gets a string that names the user who created the file.

IList<DimensionStyle> DimStyles
: Dimension Styles in this file.

IList<HatchPattern> HatchPatterns
: Hatch patterns in this file

IList<InstanceDefinitionGeometry> InstanceDefinitions
: Instance definitions in this file.
: since 5.6

DateTime LastEdited
: Get the DateTime that this file was last edited. If the
     value is not set in the 3dm file, then DateTime.MinValue is returned
: since 5.6

string LastEditedBy
: Gets a string that names the user who last edited the file.

IList<Layer> Layers
: Layers in this file.

IList<Linetype> Linetypes
: Linetypes in this file.

[ManifestTable](/rhinocommon/rhino/fileio/manifesttable/) Manifest
: Retrieves the manifest with all object descriptions in this file.
: since 6.0

IList<Material> Materials
: Materials in this file.

IList<ConstructionPlane> NamedConstructionPlanes
: Named construction planes in this file.
: since 6.0

IList<ViewInfo> NamedViews
: Named views in this file.

[File3dmNotes](/rhinocommon/rhino/fileio/file3dmnotes/) Notes
: Gets or sets the model notes.

[File3dmObjectTable](/rhinocommon/rhino/fileio/file3dmobjecttable/) Objects
: Gets access to the  class associated with this file,
     which contains all objects.

[File3dmPlugInDataTable](/rhinocommon/rhino/fileio/file3dmplugindatatable/) PlugInData
: Custom plug-in data in this file.  This data is not attached to any geometry or attributes

int Revision
: Gets or sets the revision number.

[File3dmSettings](/rhinocommon/rhino/fileio/file3dmsettings/) Settings
: Settings include tolerance, and unit system, and defaults used
     for creating views and objects.

string StartSectionComments
: Gets or sets the start section comments, which are the comments with which the 3dm file begins.

[File3dmStringTable](/rhinocommon/rhino/fileio/file3dmstringtable/) Strings
: Document user strings in this file
: since 6.0

IList<ViewInfo> Views
: Views that represent the RhinoViews which are displayed when Rhino loads this file.
## Methods

static File3dm Read(string path)
: Reads a 3dm file from a specified location.
: Returns - new File3dm on success, None on error.

static File3dm Read(string path,TableTypeFilter tableTypeFilterFilter,ObjectTypeFilter objectTypeFilter)
: Reads a 3dm file from a specified location.
: Returns - new File3dm on success, None on error.
: since 5.9

static void ReadApplicationData(string path,string applicationName,string applicationUrl,string applicationDetails)
: Reads only the application information from an existing 3dm file.

static int ReadArchiveVersion(string path)
: Reads only the archive 3dm version from an existing 3dm file.
: Returns - The 3dm file archive version.
: since 5.10

static [DimensionStyle](/rhinocommon/rhino/docobjects/dimensionstyle/)[] ReadDimensionStyles(string path)
: Read the dimension styles table out of a 3dm file.
: Returns - Array of dimension styles on success (empty array if file does not contain dimension styles)
     None on error
: since 6.0

static string ReadNotes(string path)
: Reads only the notes from an existing 3dm file.
: Returns - The 3dm file notes.

static System.Drawing.Bitmap ReadPreviewImage(string path)
: Attempts to read the preview image out of a 3dm file.
: Returns - A bitmap, or None on failure.

static bool ReadRevisionHistory(string path,string createdBy,string lastEditedBy,int revision,DateTime createdOn,DateTime lastEditedOn)
: Quickly check a file for it's revision information.  This function does
     not read the entire file, just what it needs to get revision information out
: Returns - True on success
: since 5.6

static File3dm ReadWithLog(string path,string errorLog)
: Read a 3dm file from a specified location and log any archive
     reading errors.
: Returns - New File3dm on success, None on error.

static File3dm ReadWithLog(string path,TableTypeFilter tableTypeFilterFilter,ObjectTypeFilter objectTypeFilter,string errorLog)
: Reads a 3dm file from a specified location.
: Returns - new File3dm on success, None on error.
: since 5.9

int Audit(bool attemptRepair,int repairCount,string errors,int[] warnings)
: This function is only kept for forward assembly compatibility.
: Returns - Returns 0.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

string Dump()
: Prepares a text dump of the entire model.
: Returns - The text dump.

string DumpSummary()
: Prepares a text dump of model properties and settings.
: Returns - The text dump.

void DumpToTextLog(TextLog log)
: Prepares a text dump of the entire model.
: since 5.1

System.Drawing.Bitmap GetPreviewImage()
: Preview image used for file explorer
: since 6.0

bool IsValid(string errors)
: The File3dm object is kept consistent during its creation.
     Therefore, this function now returns only true.
: Returns - True in any case.

bool IsValid(TextLog errors)
: The File3dm object is kept consistent during its creation.
     Therefore, this function now returns only true.
: Returns - >True in any case.
: since 5.1

void Polish()
: This function is only kept for forward assembly compatibility.

void SetPreviewImage(Bitmap image)
: Preview image used for file explorer
: since 6.0

bool Write(string path,File3dmWriteOptions options)
: Writes contents of this model to an openNURBS archive.
     If the model is not valid, then Write will refuse to write it.
: Returns - True if archive is written with no error.
     False if errors occur.
: since 5.9

bool Write(string path,int version)
: Writes contents of this model to an openNURBS archive.
     If the model is not valid, then Write will refuse to write it.
: Returns - True if archive is written with no error.
     False if errors occur.

bool WriteWithLog(string path,File3dmWriteOptions options,string errorLog)
: Writes contents of this model to an openNURBS archive.
     If the model is not valid, then Write will refuse to write it.
: Returns - True if archive is written with no error.
     False if errors occur.
: since 6.0

bool WriteWithLog(string path,int version,string errorLog)
: Writes contents of this model to an openNURBS archive.
     If the model is not valid, then Write will refuse to write it.
: Returns - True if archive is written with no error.
     False if errors occur.
