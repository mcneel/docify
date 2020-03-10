---
title: "Rhino.RhinoDoc"
date: 2020-03-10 09:24:56Z
draft: false
---

# Events
## static ActiveDocumentChanged
- (summary) 
     This event is raised when the active document used by modeless user
     interface changes.  On Mac Rhino this will get raised before the
     ,  and
      events.  Mac Rhino will also raise this
     event with 0 for the document Id and a None document pointer when the
     last document is closed.  Windows Rhino will raise this event after the
     ,  and
      events when a new or existing model is
     opened.
     
- (since) 6.0
## static AddRhinoObject
- (summary) Called if a new object is added to the document.
- (since) 5.0
## static BeforeTransformObjects
- (summary) 
     Called before objects are being transformed
     
- (since) 5.10
## static BeginOpenDocument
- (summary) 
     This event is raised when the document open operation begins.
     NOTE: On Windows, this event will be fired when a clipboard paste 
     operation occurs, as Rhino opens a .tmp file in the User's
     Local folder with the contents of the pasted document.
     
- (since) 5.0
## static BeginSaveDocument
- (summary) 
- (since) 5.0
## static CloseDocument
- (summary) 
- (since) 5.0
## static DeleteRhinoObject
- (summary) 
     Called if an object is deleted. At some later point the object can be un-deleted.
     
- (since) 5.0
## static DeselectAllObjects
- (summary) 
     Called when all objects are deselected.
     
- (since) 5.0
## static DeselectObjects
- (summary) 
     Called when object(s) are deselected.
     
- (since) 5.0
## static DimensionStyleTableEvent
- (summary) 
     Called when any modification happens to a document's dimension style table.
     
- (since) 6.0
## static DocumentPropertiesChanged
- (summary) 
- (since) 5.0
## static EndOpenDocument
- (summary) 
- (since) 5.0
## static EndOpenDocumentInitialiViewUpdate
- (summary) 
     This event is raised after  when the
     documents initial views have been created and initialized.
     
- (since) 5.11
## static EndOpenDocumentInitialViewUpdate
- (summary) 
     This event is raised after  when the
     documents initial views have been created and initialized.
     
- (since) 6.18
## static EndSaveDocument
- (summary) 
- (since) 5.0
## static GroupTableEvent
- (summary) 
     Called when any modification happens to a document's group table.
     
- (since) 5.0
## static InstanceDefinitionTableEvent
- (summary) 
     Called when any modification happens to a document's light table.
     
- (since) 5.3
## static LayerTableEvent
- (summary) 
     Called when any modification happens to a document's layer table.
     
- (since) 5.0
## static LightTableEvent
- (summary) 
     Called when any modification happens to a document's light table.
     
- (since) 5.3
## static MaterialTableEvent
- (summary) 
     Called when any modification happens to a document's material table.
     
- (since) 5.0
## static ModifyObjectAttributes
- (summary) 
     Called when all object attributes are changed.
     
- (since) 5.0
## static NewDocument
- (summary) 
- (since) 5.0
## static PurgeRhinoObject
- (summary) 
     Called if an object is being purged from a document. The object will cease to exist forever.
     
- (since) 5.0
## static RenderEnvironmentTableEvent
- (summary) 
- (since) 5.7
## static RenderMaterialsTableEvent
- (summary) 
- (since) 5.7
## static RenderTextureTableEvent
- (summary) 
     Called when the  has been loaded, is
     about to be cleared or has been cleared.  See  for more
     information.
     
- (since) 5.7
## static ReplaceRhinoObject
- (summary) 
     Called if an object is about to be replaced.
     If both RhinoDoc.UndoActive() and RhinoDoc.RedoActive() return false,
     then immediately after the ReplaceObject event, there will be a DeleteObject
     event followed by an AddObject event.
    
     If either RhinoDoc.UndoActive() or RhinoDoc::RedoActive() return true,
     then immediately after the ReplaceObject event, there will be a DeleteObject
     event followed by an UndeleteObject event.
     
- (since) 5.0
## static SelectObjects
- (summary) 
     Called when object(s) are selected.
     
- (since) 5.0
## static TextureMappingEvent
- (summary) 
     Called when any modification happens to a document objects texture mapping.
     
- (since) 5.8
## static UndeleteRhinoObject
- (summary) Called if an object is un-deleted.
- (since) 5.0
# Properties
## static RhinoDoc ActiveDoc
- (summary) 
     WARNING!! Do not use the ActiveDoc if you don't have to. Under Mac Rhino the ActiveDoc
     can change while a command is running. Use the doc that is passed to you in your RunCommand
     function or continue to use the same doc after the first call to ActiveDoc.
     
- (since) 5.0
## AnimationProperties AnimationProperties
- (summary) 
- (since) 6.11
## BitmapTable Bitmaps
- (summary) 
     bitmaps used in textures, backgrounds, wallpapers, ...
     
- (since) 5.0
## ICurrentEnvironment CurrentEnvironment
- (summary) 
     Access to the current environment for various uses
     
- (since) 6.0
## uint CurrentUndoRecordSerialNumber
- (summary) 
     >0: undo recording is active and being saved on the undo record with
         the specified serial number.
     0: undo recording is not active. (Disabled or nothing is being
        recorded.)
     
- (since) 6.0
## List<System.Drawing.Size> CustomRenderSizes
- (summary) 
- (since) 6.0
## DateTime DateCreated
- (summary) 
- (since) 5.0
## DateTime DateLastEdited
- (summary) 
- (since) 5.0
## DimStyleTable DimStyles
- (summary) 
- (since) 5.0
## int DistanceDisplayPrecision
- (summary) 
- (since) 5.0
## int DocumentId
- (summary) 
     Gets the Document Id.
     
- (since) 5.0
## DocObjects.EarthAnchorPoint EarthAnchorPoint
- (summary) 
- (since) 5.0
## FontTable Fonts
- (summary) 
- (since) 5.0
## GroundPlane GroundPlane
- (summary) Gets the ground plane of this document.
- (since) 5.0
## GroupTable Groups
- (summary) 
- (since) 5.0
## HatchPatternTable HatchPatterns
- (summary) 
- (since) 5.0
## InstanceDefinitionTable InstanceDefinitions
- (summary) 
- (since) 5.0
## bool IsAvailable
- (summary) 
- (since) 6.0
## bool IsClosing
- (summary) 
- (since) 6.0
## bool IsCommandRunning
- (summary) 
     Returns True if Rhino is currently running a command.
     
- (since) 7.0
## bool IsCreating
- (summary) 
- (since) 6.0
## bool IsHeadless
- (summary) 
- (since) 7.0
## bool IsInitializing
- (summary) 
- (since) 6.0
## bool IsLocked
- (summary) 
     Check to see if the file associated with this document is locked.  If it is
     locked then this is the only document that will be able to write the file.  Other
     instances of Rhino will fail to write this document.
     
- (since) 5.0
## bool IsOpening
- (summary) 
- (since) 6.0
## bool IsReadOnly
- (summary) 
     Current read-only mode for this document.
     True if the document can be viewed but NOT saved.
     False if document can be viewed and saved.
     
- (since) 5.0
## bool IsSendingMail
- (summary) 
     True if Rhino is in the process of sending this document as an email attachment.
     
- (since) 5.0
## LayerTable Layers
- (summary) 
     Layers in the document.
     
- (since) 5.0
## bool LayoutSpaceAnnotationScalingEnabled
- (summary) 
     If LayoutSpaceAnnotationScaling is on, sizes in dimstyles are multiplied by 
     dimscale when the annotation is displayed in a detail viewport not in a detail
     
- (since) 6.0
## LightTable Lights
- (summary) 
- (since) 5.0
## LinetypeTable Linetypes
- (summary) 
     Linetypes in the document.
     
- (since) 5.0
## ManifestTable Manifest
- (summary) 
- (since) 6.0
## MaterialTable Materials
- (summary) Materials in the document.
- (since) 5.0
## MeshingParameterStyle MeshingParameterStyle
- (summary) 
     Type of MeshingParameters currently used by the document to mesh objects
     
- (since) 5.1
## double ModelAbsoluteTolerance
- (summary) Model space absolute tolerance.
- (since) 5.0
## double ModelAngleToleranceDegrees
- (summary) Model space angle tolerance.
- (since) 5.0
## double ModelAngleToleranceRadians
- (summary) Model space angle tolerance.
- (since) 5.0
## Point3d ModelBasepoint
- (summary) 
     The base point in the model that is used when inserting the model into another as a block definition.
     By default the base point in any model is 0,0,0.
     
- (since) 6.10
## int ModelDistanceDisplayPrecision
- (summary) 
- (since) 5.8
## double ModelRelativeTolerance
- (summary) Model space relative tolerance.
- (since) 5.0
## bool ModelSpaceAnnotationScalingEnabled
- (summary) 
     If ModelSpaceAnnotationScaling is on, sizes in dimstyles are multiplied by 
     dimscale when the annotation is displayed in a model space viewport not in a detail
     
- (since) 6.0
## double ModelSpaceHatchScale
- (summary) 
     The scale factor for hatches in model space when Hatch Scaling is enabled
     
- (since) 6.1
## bool ModelSpaceHatchScalingEnabled
- (summary) 
     True if hatch scaling is enabled, False if not.
     
- (since) 6.16
## double ModelSpaceTextScale
- (summary) 
     The scale factor for text in model space when Annotation Scaling is enabled
     
- (since) 6.1
## UnitSystem ModelUnitSystem
- (summary) 
- (since) 5.0
## bool Modified
- (summary) Returns or sets the document's modified flag.
- (since) 5.0
## string Name
- (summary) Returns the name of the currently loaded Rhino document (3DM file).
- (since) 5.0
## NamedConstructionPlaneTable NamedConstructionPlanes
- (summary) 
     Collection of named construction planes.
     
- (since) 5.0
## NamedLayerStateTable NamedLayerStates
- (summary) 
     Collection of named layer states.
     
- (since) 6.14
## NamedPositionTable NamedPositions
- (summary) 
     Collection of named positions.
     
- (since) 6.0
## NamedViewTable NamedViews
- (summary) 
     Collection of named views.
     
- (since) 5.0
## uint NextUndoRecordSerialNumber
- (summary) 
     The serial number that will be assigned to the next undo record that is
     constructed.
     
- (since) 6.0
## string Notes
- (summary) Returns or sets the document's notes.
- (since) 5.0
## ObjectTable Objects
- (summary) 
- (since) 5.0
## double PageAbsoluteTolerance
- (summary) Page space absolute tolerance.
- (since) 5.0
## double PageAngleToleranceDegrees
- (summary) Page space angle tolerance.
- (since) 5.0
## double PageAngleToleranceRadians
- (summary) Page space angle tolerance.
- (since) 5.0
## int PageDistanceDisplayPrecision
- (summary) 
- (since) 5.8
## double PageRelativeTolerance
- (summary) Page space relative tolerance.
- (since) 5.0
## UnitSystem PageUnitSystem
- (summary) 
- (since) 5.0
## string Path
- (summary) Returns the path of the currently loaded Rhino document (3DM file).
- (since) 5.0
## bool RedoActive
- (summary) 
     Returns True if Redo is currently active. 
     
- (since) 6.0
## RenderEnvironmentTable RenderEnvironments
- (summary) 
- (since) 5.7
## RenderMaterialTable RenderMaterials
- (summary) 
- (since) 5.7
## RenderSettings RenderSettings
- (summary) 
- (since) 5.0
## RenderTextureTable RenderTextures
- (summary) 
- (since) 5.7
## RuntimeDocumentDataTable RuntimeData
- (summary) 
     Collection of document runtime data. This is a good place to
     put non-serializable, per document data, such as panel view models.  
     Note well: This data will be dispose with the document and does not
     get serailzed.
     
- (since) 6.3
## uint RuntimeSerialNumber
- (summary) 
     Unique serialNumber for the document while the application is running.
     This is not a persistent value.
     
- (since) 6.0
## SnapshotTable Snapshots
- (summary) 
     Collection of snapshots.
     
- (since) 6.7
## StringTable Strings
- (summary) 
     Collection of document user data strings in this document
     
- (since) 5.0
## string TemplateFileUsed
- (summary) 
     name of the template file used to create this document. This is a runtime value
     only present if the document was newly created.
     
- (since) 5.0
## bool UndoActive
- (summary) 
     Returns True if Undo is currently active. 
     
- (since) 6.0
## bool UndoRecordingEnabled
- (summary) 
- (since) 5.0
## bool UndoRecordingIsActive
- (summary) 
     True if undo recording is actually happening now.
     
- (since) 5.0
## ViewTable Views
- (summary) 
- (since) 5.0
## Worksession Worksession
- (summary) 
     Provides access to the document's worksession.
     
- (since) 6.0
# Methods
## static RhinoDoc Create(string modelTemplateFileName)
- (summary) 
     Creates a new RhinoDoc
     
- (since) 6.4
- (returns) RhinoDoc This is some return comment
## static RhinoDoc CreateHeadless(string file3dmTemplatePath)
- (summary) 
     Create a new headless RhinoDoc from a template file
     
- (since) 7.0
- (returns) RhinoDoc This is some return comment
## static System.Drawing.Bitmap ExtractPreviewImage(string path)
- (summary) Extracts the bitmap preview image from the specified model (3DM).
- (since) 5.0
- (returns) System.Drawing.Bitmap This is some return comment
## static RhinoDoc FromFilePath(string filePath)
- (summary) 
     Search the open document list for a document with a Path equal
     to the specified file path.
     
- (since) 6.0
- (returns) RhinoDoc This is some return comment
## static RhinoDoc FromId(int docId)
- (summary) 
- (since) 5.0
- (returns) RhinoDoc This is some return comment
## static RhinoDoc FromRuntimeSerialNumber(uint serialNumber)
- (summary) 
- (since) 6.0
- (returns) RhinoDoc This is some return comment
## static RhinoDoc Load(string file3dmPath)
- (summary) 
     Loads a 3DM file into a new headless RhinoDoc. Load is different than New in that
     load sets the document path
     
- (since) 7.0
- (returns) RhinoDoc This is some return comment
## static RhinoDoc New(string file3dmTemplatePath)
- (summary) 
     Create a new headless RhinoDoc from a template file
     
- (since) 7.0
- (returns) RhinoDoc This is some return comment
## static RhinoDoc Open(string filePath,bool wasAlreadyOpen)
- (summary) 
     Opens a 3dm file and makes it the active document. If called on
     windows the active document will be saved and closed and the new
     document will be opened and become the active document.  If called
     on the Mac the file will be opened in a new document window.
     
- (since) 6.0
- (returns) RhinoDoc This is some return comment
## static RhinoDoc[] OpenDocuments()
- (summary) 
     Returns a list of currently open Rhino documents
     
- (since) 6.0
- (returns) RhinoDoc[] This is some return comment
## static bool OpenFile(string path)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## static RhinoDoc OpenHeadless(string file3dmPath)
- (summary) 
     Opens a 3DM file into a new headless RhinoDoc.
     
- (since) 7.0
- (returns) RhinoDoc This is some return comment
## static bool ReadFile(string path,FileReadOptions options)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool AddCustomUndoEvent(string description,EventHandler<CustomUndoEventArgs> handler)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool AddCustomUndoEvent(string description,EventHandler<CustomUndoEventArgs> handler,object tag)
- (summary) 
     Add a custom undo event so you can undo private plug-in data
     when the user performs an undo or redo
     
- (since) 5.0
- (returns) bool This is some return comment
## void AdjustModelUnitSystem(UnitSystem newUnitSystem,bool scale)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void AdjustPageUnitSystem(UnitSystem newUnitSystem,bool scale)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## uint BeginUndoRecord(string description)
- (summary) 
     Instructs Rhino to begin recording undo information when the document
     is changed outside of a command. We use this, e.g., to save changes
     caused by the modeless layer or object properties dialogs
     when commands are not running.
     
- (since) 5.0
- (returns) uint This is some return comment
## void ClearRedoRecords()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void ClearUndoRecords(bool purgeDeletedObjects)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void ClearUndoRecords(uint undoSerialNumber,bool purgeDeletedObjects)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## DocObjects.ObjectAttributes CreateDefaultAttributes()
- (summary) 
     Gets the default object attributes for this document. 
     The attributes will be linked to the currently active layer 
     and they will inherit the Document WireDensity setting.
     
- (since) 5.0
- (returns) DocObjects.ObjectAttributes This is some return comment
## void Dispose()
- (summary) 
- (since) 7.0
- (returns) void This is some return comment
## bool EndUndoRecord(uint undoRecordSerialNumber)
- (summary) 
     Ends the undo record.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
- (since) (unknown)
- (returns) bool This is some return comment
## bool Export(string filePath)
- (summary) 
     Export the entire document to a file. All file formats that Rhino can export to
     are supported by this function.
     
- (since) 7.0
- (returns) bool This is some return comment
## bool ExportSelected(string filePath)
- (summary) 
     Export selected geometry to a file. All file formats that Rhino can export
     to are supported by this function.
     
- (since) 7.0
- (returns) bool This is some return comment
## string FindFile(string filename)
- (summary) 
     Search for a file using Rhino's search path.  Rhino will look in the
     following places:
     1. Current model folder
     2. Path specified in options dialog/File tab
     3. Rhino system folders
     4. Rhino executable folder
     
- (since) 5.0
- (returns) string This is some return comment
## MeshingParameters GetAnalysisMeshingParameters()
- (summary) 
     Get analysis meshing parameters currently used by the document
     
- (since) 6.0
- (returns) MeshingParameters This is some return comment
## MeshingParameters GetCurrentMeshingParameters()
- (summary) 
     Get the custom meshing parameters that this document will use.
     
- (since) 6.0
- (returns) MeshingParameters This is some return comment
## string[] GetEmbeddedFilesList(bool missingOnly)
- (summary) 
- (since) 6.0
- (returns) string[] This is some return comment
## bool GetGumballPlane(Plane plane)
- (summary) 
     Returns the active plane of Rhino's auto-gumball widget.
     Note, when calling from a Rhino command, make sure the command 
     class has the Rhino.Commands.Style.Transparent command style attribute.
     
- (since) 6.0
- (returns) bool This is some return comment
## int GetHashCode()
- (summary) 
- (since) (unknown)
- (returns) int This is some return comment
## MeshingParameters GetMeshingParameters(MeshingParameterStyle style)
- (summary) 
     Get MeshingParameters currently used by the document
     
- (since) 5.1
- (returns) MeshingParameters This is some return comment
## RenderPrimitiveList GetRenderPrimitiveList(ViewportInfo viewport,DisplayPipelineAttributes attrs)
- (summary) 
     Build custom render mesh(es) for this document (ie - GH meshes).
     
- (since) 6.9
- (returns) RenderPrimitiveList This is some return comment
## IEnumerable<RenderPrimitive> GetRenderPrimitives(bool forceTriangleMeshes,bool quietly)
- (summary) 
     Get a enumerable list of custom mesh primitives
     
- (since) 6.0
- (returns) IEnumerable<RenderPrimitive> This is some return comment
## IEnumerable<RenderPrimitive> GetRenderPrimitives(Guid plugInId,ViewportInfo viewport,bool forceTriangleMeshes,bool quietly)
- (summary) 
     Get a enumerable list of custom mesh primitives
     
- (since) 6.0
- (returns) IEnumerable<RenderPrimitive> This is some return comment
## IEnumerable<RenderPrimitive> GetRenderPrimitives(ViewportInfo viewport,bool forceTriangleMeshes,bool quietly)
- (summary) 
     Get a enumerable list of custom mesh primitives
     
- (since) 6.0
- (returns) IEnumerable<RenderPrimitive> This is some return comment
## string GetUnitSystemName(bool modelUnits,bool capitalize,bool singular,bool abbreviate)
- (summary) 
- (since) 5.0
- (returns) string This is some return comment
## bool Import(string filePath)
- (summary) 
     Import geometry into a RhinoDoc from a file. This can be any file format
     that Rhino can import
     
- (since) 7.0
- (returns) bool This is some return comment
## int ReadFileVersion()
- (summary) 
    Returns the file version of the current document.  
    Use this function to determine which version of Rhino last saved the document.
    
- (since) 5.0
- (returns) int This is some return comment
## bool Redo()
- (summary)  Redo the last action that was "undone" 
- (since) 6.16
- (returns) bool This is some return comment
## bool Save()
- (summary) 
     Save doc to disk using the document's Path
     
- (since) 7.0
- (returns) bool This is some return comment
## bool SaveAs(string file3dmPath)
- (summary) 
     Save doc as a 3dm to a specified path using the current Rhino file version
     
- (since) 7.0
- (returns) bool This is some return comment
## bool SaveAs(string file3dmPath,int version)
- (summary) 
     Save doc as a 3dm to a specified path
     
- (since) 7.0
- (returns) bool This is some return comment
## bool SaveAsTemplate(string file3dmTemplatePath)
- (summary) 
     Save this document as a template
     
- (since) 7.0
- (returns) bool This is some return comment
## bool SaveAsTemplate(string file3dmTemplatePath,int version)
- (summary) 
     Save this document as a template to a specific Rhino file version
     
- (since) 7.0
- (returns) bool This is some return comment
## void SetCustomMeshingParameters(MeshingParameters mp)
- (summary) 
     Set the custom meshing parameters that this document will use. You must also modify the
     MeshingParameterStyle property on the document to Custom if you want these meshing
     parameters to be used
     
- (since) 5.1
- (returns) void This is some return comment
## bool SupportsRenderPrimitiveList(ViewportInfo viewport,DisplayPipelineAttributes attrs)
- (summary) 
     Determines if custom render meshes will be built for this document (ie - GH meshes).
     
- (since) 6.9
- (returns) bool This is some return comment
## bool TryGetRenderPrimitiveBoundingBox(ViewportInfo viewport,DisplayPipelineAttributes attrs,BoundingBox boundingBox)
- (summary) 
     Get the bounding box for the custom render meshes associated with this
     document (ie - GH meshes).
     
- (since) 6.9
- (returns) bool This is some return comment
## bool Undo()
- (summary)  Undo the last action 
- (since) 6.16
- (returns) bool This is some return comment
## bool Write3dmFile(string path,FileWriteOptions options)
- (summary) 
     Write information in this document to a .3dm file. 
     Note, the active document's name will not be changed.
     
- (since) 6.5
- (returns) bool This is some return comment
## bool WriteFile(string path,FileWriteOptions options)
- (summary) 
     Write information in this document to a file. 
     Note, the active document's name will be changed to that
     of the path provided.
     
- (since) 5.0
- (returns) bool This is some return comment
