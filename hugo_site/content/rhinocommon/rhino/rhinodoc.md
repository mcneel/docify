---
title: "RhinoDoc"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino](../)*

Represents an active model.
```cs
public class RhinoDoc : IDisposable
```
## Events

static ActiveDocumentChanged
: This event is raised when the active document used by modeless user
     interface changes.  On Mac Rhino this will get raised before the
     ,  and
      events.  Mac Rhino will also raise this
     event with 0 for the document Id and a None document pointer when the
     last document is closed.  Windows Rhino will raise this event after the
     ,  and
      events when a new or existing model is
     opened.
: since 6.0

static AddRhinoObject
: Called if a new object is added to the document.

static BeforeTransformObjects
: Called before objects are being transformed
: since 5.10

static BeginOpenDocument
: This event is raised when the document open operation begins.
     NOTE: On Windows, this event will be fired when a clipboard paste 
     operation occurs, as Rhino opens a .tmp file in the User's
     Local folder with the contents of the pasted document.

static BeginSaveDocument
: 

static CloseDocument
: 

static DeleteRhinoObject
: Called if an object is deleted. At some later point the object can be un-deleted.

static DeselectAllObjects
: Called when all objects are deselected.

static DeselectObjects
: Called when object(s) are deselected.

static DimensionStyleTableEvent
: Called when any modification happens to a document's dimension style table.
: since 6.0

static DocumentPropertiesChanged
: 

static EndOpenDocument
: 

static EndOpenDocumentInitialiViewUpdate
: This event is raised after  when the
     documents initial views have been created and initialized.
: since 5.11

static EndOpenDocumentInitialViewUpdate
: This event is raised after  when the
     documents initial views have been created and initialized.
: since 6.18

static EndSaveDocument
: 

static GroupTableEvent
: Called when any modification happens to a document's group table.

static InstanceDefinitionTableEvent
: Called when any modification happens to a document's light table.
: since 5.3

static LayerTableEvent
: Called when any modification happens to a document's layer table.

static LightTableEvent
: Called when any modification happens to a document's light table.
: since 5.3

static MaterialTableEvent
: Called when any modification happens to a document's material table.

static ModifyObjectAttributes
: Called when all object attributes are changed.

static NewDocument
: 

static PurgeRhinoObject
: Called if an object is being purged from a document. The object will cease to exist forever.

static RenderEnvironmentTableEvent
: 
: since 5.7

static RenderMaterialsTableEvent
: 
: since 5.7

static RenderTextureTableEvent
: Called when the  has been loaded, is
     about to be cleared or has been cleared.  See  for more
     information.
: since 5.7

static ReplaceRhinoObject
: Called if an object is about to be replaced.
     If both RhinoDoc.UndoActive() and RhinoDoc.RedoActive() return false,
     then immediately after the ReplaceObject event, there will be a DeleteObject
     event followed by an AddObject event.
    
     If either RhinoDoc.UndoActive() or RhinoDoc::RedoActive() return true,
     then immediately after the ReplaceObject event, there will be a DeleteObject
     event followed by an UndeleteObject event.

static SelectObjects
: Called when object(s) are selected.

static TextureMappingEvent
: Called when any modification happens to a document objects texture mapping.
: since 5.8

static UndeleteRhinoObject
: Called if an object is un-deleted.
## Properties

static RhinoDoc ActiveDoc
: WARNING!! Do not use the ActiveDoc if you don't have to. Under Mac Rhino the ActiveDoc
     can change while a command is running. Use the doc that is passed to you in your RunCommand
     function or continue to use the same doc after the first call to ActiveDoc.

[AnimationProperties](/rhinocommon/rhino/docobjects/animationproperties/) AnimationProperties
: 
: since 6.11

[BitmapTable](/rhinocommon/rhino/docobjects/tables/bitmaptable/) Bitmaps
: bitmaps used in textures, backgrounds, wallpapers, ...

[ICurrentEnvironment](/rhinocommon/rhino/render/icurrentenvironment/) CurrentEnvironment
: Access to the current environment for various uses
: since 6.0

uint CurrentUndoRecordSerialNumber
: >0: undo recording is active and being saved on the undo record with
         the specified serial number.
     0: undo recording is not active. (Disabled or nothing is being
        recorded.)
: since 6.0

Size> CustomRenderSizes
: 
: since 6.0

DateTime DateCreated
: 

DateTime DateLastEdited
: 

[DimStyleTable](/rhinocommon/rhino/docobjects/tables/dimstyletable/) DimStyles
: 

int DistanceDisplayPrecision
: 

int DocumentId
: Gets the Document Id.

[EarthAnchorPoint](/rhinocommon/rhino/docobjects/earthanchorpoint/) EarthAnchorPoint
: 

[FontTable](/rhinocommon/rhino/docobjects/tables/fonttable/) Fonts
: 

[GroundPlane](/rhinocommon/rhino/render/groundplane/) GroundPlane
: Gets the ground plane of this document.

[GroupTable](/rhinocommon/rhino/docobjects/tables/grouptable/) Groups
: 

[HatchPatternTable](/rhinocommon/rhino/docobjects/tables/hatchpatterntable/) HatchPatterns
: 

[InstanceDefinitionTable](/rhinocommon/rhino/docobjects/tables/instancedefinitiontable/) InstanceDefinitions
: 

bool IsAvailable
: 
: since 6.0

bool IsClosing
: 
: since 6.0

bool IsCommandRunning
: Returns True if Rhino is currently running a command.
: since 7.0

bool IsCreating
: 
: since 6.0

bool IsHeadless
: 
: since 7.0

bool IsInitializing
: 
: since 6.0

bool IsLocked
: Check to see if the file associated with this document is locked.  If it is
     locked then this is the only document that will be able to write the file.  Other
     instances of Rhino will fail to write this document.

bool IsOpening
: 
: since 6.0

bool IsReadOnly
: Current read-only mode for this document.
     True if the document can be viewed but NOT saved.
     False if document can be viewed and saved.

bool IsSendingMail
: True if Rhino is in the process of sending this document as an email attachment.

[LayerTable](/rhinocommon/rhino/docobjects/tables/layertable/) Layers
: Layers in the document.

bool LayoutSpaceAnnotationScalingEnabled
: If LayoutSpaceAnnotationScaling is on, sizes in dimstyles are multiplied by 
     dimscale when the annotation is displayed in a detail viewport not in a detail
: since 6.0

[LightTable](/rhinocommon/rhino/docobjects/tables/lighttable/) Lights
: 

[LinetypeTable](/rhinocommon/rhino/docobjects/tables/linetypetable/) Linetypes
: Linetypes in the document.

[ManifestTable](/rhinocommon/rhino/fileio/manifesttable/) Manifest
: 
: since 6.0

[MaterialTable](/rhinocommon/rhino/docobjects/tables/materialtable/) Materials
: Materials in the document.

[MeshingParameterStyle](/rhinocommon/rhino/geometry/meshingparameterstyle/) MeshingParameterStyle
: Type of MeshingParameters currently used by the document to mesh objects
: since 5.1

double ModelAbsoluteTolerance
: Model space absolute tolerance.

double ModelAngleToleranceDegrees
: Model space angle tolerance.

double ModelAngleToleranceRadians
: Model space angle tolerance.

[Point3d](/rhinocommon/rhino/geometry/point3d/) ModelBasepoint
: The base point in the model that is used when inserting the model into another as a block definition.
     By default the base point in any model is 0,0,0.
: since 6.10

int ModelDistanceDisplayPrecision
: 
: since 5.8

double ModelRelativeTolerance
: Model space relative tolerance.

bool ModelSpaceAnnotationScalingEnabled
: If ModelSpaceAnnotationScaling is on, sizes in dimstyles are multiplied by 
     dimscale when the annotation is displayed in a model space viewport not in a detail
: since 6.0

double ModelSpaceHatchScale
: The scale factor for hatches in model space when Hatch Scaling is enabled
: since 6.1

bool ModelSpaceHatchScalingEnabled
: True if hatch scaling is enabled, False if not.
: since 6.16

double ModelSpaceTextScale
: The scale factor for text in model space when Annotation Scaling is enabled
: since 6.1

UnitSystem ModelUnitSystem
: 

bool Modified
: Returns or sets the document's modified flag.

string Name
: Returns the name of the currently loaded Rhino document (3DM file).

[NamedConstructionPlaneTable](/rhinocommon/rhino/docobjects/tables/namedconstructionplanetable/) NamedConstructionPlanes
: Collection of named construction planes.

[NamedLayerStateTable](/rhinocommon/rhino/docobjects/tables/namedlayerstatetable/) NamedLayerStates
: Collection of named layer states.
: since 6.14

[NamedPositionTable](/rhinocommon/rhino/docobjects/tables/namedpositiontable/) NamedPositions
: Collection of named positions.
: since 6.0

[NamedViewTable](/rhinocommon/rhino/docobjects/tables/namedviewtable/) NamedViews
: Collection of named views.

uint NextUndoRecordSerialNumber
: The serial number that will be assigned to the next undo record that is
     constructed.
: since 6.0

string Notes
: Returns or sets the document's notes.

[ObjectTable](/rhinocommon/rhino/docobjects/tables/objecttable/) Objects
: 

double PageAbsoluteTolerance
: Page space absolute tolerance.

double PageAngleToleranceDegrees
: Page space angle tolerance.

double PageAngleToleranceRadians
: Page space angle tolerance.

int PageDistanceDisplayPrecision
: 
: since 5.8

double PageRelativeTolerance
: Page space relative tolerance.

UnitSystem PageUnitSystem
: 

string Path
: Returns the path of the currently loaded Rhino document (3DM file).

bool RedoActive
: Returns True if Redo is currently active.
: since 6.0

[RenderEnvironmentTable](/rhinocommon/rhino/render/renderenvironmenttable/) RenderEnvironments
: 
: since 5.7

[RenderMaterialTable](/rhinocommon/rhino/render/rendermaterialtable/) RenderMaterials
: 
: since 5.7

[RenderSettings](/rhinocommon/rhino/render/rendersettings/) RenderSettings
: 

[RenderTextureTable](/rhinocommon/rhino/render/rendertexturetable/) RenderTextures
: 
: since 5.7

[RuntimeDocumentDataTable](/rhinocommon/rhino/docobjects/tables/runtimedocumentdatatable/) RuntimeData
: Collection of document runtime data. This is a good place to
     put non-serializable, per document data, such as panel view models.  
     Note well: This data will be dispose with the document and does not
     get serailzed.
: since 6.3

uint RuntimeSerialNumber
: Unique serialNumber for the document while the application is running.
     This is not a persistent value.
: since 6.0

[SnapshotTable](/rhinocommon/rhino/docobjects/tables/snapshottable/) Snapshots
: Collection of snapshots.
: since 6.7

[StringTable](/rhinocommon/rhino/docobjects/tables/stringtable/) Strings
: Collection of document user data strings in this document

string TemplateFileUsed
: name of the template file used to create this document. This is a runtime value
     only present if the document was newly created.

bool UndoActive
: Returns True if Undo is currently active.
: since 6.0

bool UndoRecordingEnabled
: 

bool UndoRecordingIsActive
: True if undo recording is actually happening now.

[ViewTable](/rhinocommon/rhino/docobjects/tables/viewtable/) Views
: 

[Worksession](/rhinocommon/rhino/docobjects/worksession/) Worksession
: Provides access to the document's worksession.
: since 6.0
## Methods

static RhinoDoc Create(string modelTemplateFileName)
: Creates a new RhinoDoc
: since 6.4

static RhinoDoc CreateHeadless(string file3dmTemplatePath)
: Create a new headless RhinoDoc from a template file
: Returns - New RhinoDoc on success. Note that this is a "headless" RhinoDoc and it's
     lifetime is under your control.
: since 7.0

static System.Drawing.Bitmap ExtractPreviewImage(string path)
: Extracts the bitmap preview image from the specified model (3DM).
: Returns - True on success.

static RhinoDoc FromFilePath(string filePath)
: Search the open document list for a document with a Path equal
     to the specified file path.
: Returns - The file name to search for
: since 6.0

static RhinoDoc FromId(int docId)
: 

static RhinoDoc FromRuntimeSerialNumber(uint serialNumber)
: 
: since 6.0

static RhinoDoc Load(string file3dmPath)
: Loads a 3DM file into a new headless RhinoDoc. Load is different than New in that
     load sets the document path
: since 7.0

static RhinoDoc New(string file3dmTemplatePath)
: Create a new headless RhinoDoc from a template file
: Returns - New RhinoDoc on success. Note that this is a "headless" RhinoDoc and it's
     lifetime is under your control.
: since 7.0

static RhinoDoc Open(string filePath,bool wasAlreadyOpen)
: Opens a 3dm file and makes it the active document. If called on
     windows the active document will be saved and closed and the new
     document will be opened and become the active document.  If called
     on the Mac the file will be opened in a new document window.
: Returns - Returns the newly opened document on success or None on error.
: since 6.0

static RhinoDoc[] OpenDocuments()
: Returns a list of currently open Rhino documents
: since 6.0

static bool OpenFile(string path)
: 

static RhinoDoc OpenHeadless(string file3dmPath)
: Opens a 3DM file into a new headless RhinoDoc.
: since 7.0

static bool ReadFile(string path,FileReadOptions options)
: 

bool AddCustomUndoEvent(string description,EventHandler<CustomUndoEventArgs> handler)
: 

bool AddCustomUndoEvent(string description,EventHandler<CustomUndoEventArgs> handler,object tag)
: Add a custom undo event so you can undo private plug-in data
     when the user performs an undo or redo

void AdjustModelUnitSystem(UnitSystem newUnitSystem,bool scale)
: 

void AdjustPageUnitSystem(UnitSystem newUnitSystem,bool scale)
: 

uint BeginUndoRecord(string description)
: Instructs Rhino to begin recording undo information when the document
     is changed outside of a command. We use this, e.g., to save changes
     caused by the modeless layer or object properties dialogs
     when commands are not running.
: Returns - Serial number of record.  Returns 0 if record is not started
     because undo information is already being recorded or
     undo is disabled.

void ClearRedoRecords()
: 

void ClearUndoRecords(bool purgeDeletedObjects)
: 

void ClearUndoRecords(uint undoSerialNumber,bool purgeDeletedObjects)
: 
: since 6.0

DocObjects.ObjectAttributes CreateDefaultAttributes()
: Gets the default object attributes for this document. 
     The attributes will be linked to the currently active layer 
     and they will inherit the Document WireDensity setting.

void Dispose()
: 
: since 7.0

bool EndUndoRecord(uint undoRecordSerialNumber)
: Ends the undo record.
: Returns - True if successful, False otherwise.

bool Equals(object obj)
: 
: since (unknown)

bool Export(string filePath)
: Export the entire document to a file. All file formats that Rhino can export to
     are supported by this function.
: Returns - True on success
: since 7.0

bool ExportSelected(string filePath)
: Export selected geometry to a file. All file formats that Rhino can export
     to are supported by this function.
: Returns - True on success
: since 7.0

string FindFile(string filename)
: Search for a file using Rhino's search path.  Rhino will look in the
     following places:
     1. Current model folder
     2. Path specified in options dialog/File tab
     3. Rhino system folders
     4. Rhino executable folder
: Returns - Path to existing file if found, an empty string if no file was found

[MeshingParameters](/rhinocommon/rhino/geometry/meshingparameters/) GetAnalysisMeshingParameters()
: Get analysis meshing parameters currently used by the document
: since 6.0

[MeshingParameters](/rhinocommon/rhino/geometry/meshingparameters/) GetCurrentMeshingParameters()
: Get the custom meshing parameters that this document will use.
: since 6.0

string[] GetEmbeddedFilesList(bool missingOnly)
: 
: since 6.0

bool GetGumballPlane(Plane plane)
: Returns the active plane of Rhino's auto-gumball widget.
     Note, when calling from a Rhino command, make sure the command 
     class has the Rhino.Commands.Style.Transparent command style attribute.
: Returns - True if the auto-gumball widget is enabled and visible. False otherwise.
: since 6.0

int GetHashCode()
: 
: since (unknown)

[MeshingParameters](/rhinocommon/rhino/geometry/meshingparameters/) GetMeshingParameters(MeshingParameterStyle style)
: Get MeshingParameters currently used by the document
: since 5.1

[RenderPrimitiveList](/rhinocommon/rhino/render/renderprimitivelist/) GetRenderPrimitiveList(ViewportInfo viewport,DisplayPipelineAttributes attrs)
: Build custom render mesh(es) for this document (ie - GH meshes).
: Returns - Returns a RenderPrimitiveList if successful otherwise returns null.
: since 6.9

IEnumerable<RenderPrimitive> GetRenderPrimitives(bool forceTriangleMeshes,bool quietly)
: Get a enumerable list of custom mesh primitives
: since 6.0

IEnumerable<RenderPrimitive> GetRenderPrimitives(Guid plugInId,ViewportInfo viewport,bool forceTriangleMeshes,bool quietly)
: Get a enumerable list of custom mesh primitives
: since 6.0

IEnumerable<RenderPrimitive> GetRenderPrimitives(ViewportInfo viewport,bool forceTriangleMeshes,bool quietly)
: Get a enumerable list of custom mesh primitives
: since 6.0

string GetUnitSystemName(bool modelUnits,bool capitalize,bool singular,bool abbreviate)
: 

bool Import(string filePath)
: Import geometry into a RhinoDoc from a file. This can be any file format
     that Rhino can import
: Returns - True on success
: since 7.0

int ReadFileVersion()
: Returns the file version of the current document.  
    Use this function to determine which version of Rhino last saved the document.
: Returns - The file version (e.g. 1, 2, 3, 4, etc.) or -1 if the document has not been read from disk.

bool Redo()
: Redo the last action that was "undone"
: Returns - True on success
: since 6.16

bool Save()
: Save doc to disk using the document's Path
: since 7.0

bool SaveAs(string file3dmPath)
: Save doc as a 3dm to a specified path using the current Rhino file version
: Returns - True on success
: since 7.0

bool SaveAs(string file3dmPath,int version)
: Save doc as a 3dm to a specified path
: Returns - True on success
: since 7.0

bool SaveAsTemplate(string file3dmTemplatePath)
: Save this document as a template
: Returns - True on success
: since 7.0

bool SaveAsTemplate(string file3dmTemplatePath,int version)
: Save this document as a template to a specific Rhino file version
: Returns - True on success
: since 7.0

void SetCustomMeshingParameters(MeshingParameters mp)
: Set the custom meshing parameters that this document will use. You must also modify the
     MeshingParameterStyle property on the document to Custom if you want these meshing
     parameters to be used
: since 5.1

bool SupportsRenderPrimitiveList(ViewportInfo viewport,DisplayPipelineAttributes attrs)
: Determines if custom render meshes will be built for this document (ie - GH meshes).
: Returns - Returns True if custom render mesh(es) will get built for this document.
: since 6.9

bool TryGetRenderPrimitiveBoundingBox(ViewportInfo viewport,DisplayPipelineAttributes attrs,BoundingBox boundingBox)
: Get the bounding box for the custom render meshes associated with this
     document (ie - GH meshes).
: Returns - Returns True if the bounding box was successfully calculated otherwise
     returns False on error.
: since 6.9

bool Undo()
: Undo the last action
: Returns - True on success
: since 6.16

bool Write3dmFile(string path,FileWriteOptions options)
: Write information in this document to a .3dm file. 
     Note, the active document's name will not be changed.
: Returns - True if successful, False on failure.
: since 6.5

bool WriteFile(string path,FileWriteOptions options)
: Write information in this document to a file. 
     Note, the active document's name will be changed to that
     of the path provided.
: Returns - True if successful, False on failure.
