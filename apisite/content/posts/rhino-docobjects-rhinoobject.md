---
title: "Rhino.DocObjects.RhinoObject"
draft: false
---

# Properties
## static uint NextRuntimeSerialNumber
- (summary) 
     Gets the runtime serial number that will be assigned to
     the next Rhino Object that is created.
     
- (since) 5.0
## ObjectAttributes Attributes
- (summary) 
     Gets or sets the object attributes.
     
- (since) 5.0
## ModelComponentType ComponentType
- (summary) 
     Returns .
     
- (since) 6.0
## RhinoDoc Document
- (summary) 
     Gets the document that owns this object.
     
- (since) 5.0
## GeometryBase Geometry
- (summary) 
     Gets the underlying geometry for this object.
     All rhino objects are composed of geometry and attributes.
- (since) 5.0
## bool GripsOn
- (summary) Gets or sets the activation state of object default editing grips.
- (since) 5.0
## bool GripsSelected
- (summary) 
     True if grips are turned on and at least one is selected.
     
- (since) 5.0
## int GroupCount
- (summary) Number of groups object belongs to.
- (since) 5.0
## bool HasDynamicTransform
- (summary) 
     True if the object has a dynamic transformation
     
- (since) 5.0
## bool HasSubobjectMaterials
- (summary) 
     Will be True if the object contains sub object meshes with materials
     that are different than the top level object.
     
- (since) 6.0
## Guid Id
- (summary) 
     Every object has a Guid (globally unique identifier, also known as UUID, or universally
     unique identifier). The default value is Guid.Empty.
     
     When an object is added to a model, the value is checked.  If the value is Guid.Empty, a
     new Guid is created. If the value is not None but it is already used by another object
     in the model, a new Guid is created. If the value is not Guid.Empty and it is not used by
     another object in the model, then that value persists. When an object is updated, by
     a move for example, the value of ObjectId persists.
     This value is the same as the one returned by this.Attributes.ObjectId.
- (since) 5.0
## uint InstanceDefinitionModelSerialNumber
- (summary) 
     When a component is in a model as part of the information required for a linked instance definition,
     this value identifies the the linked instance definition reference model.
     
- (since) 6.12
## bool IsDeletable
- (summary) 
     Some objects cannot be deleted, like grips on lights and annotation objects. 
     
- (since) 5.0
## bool IsDeleted
- (summary) 
     True if the object is deleted. Deleted objects are kept by the document
     for undo purposes. Call RhinoDoc.UndeleteObject to undelete an object.
     
- (since) 5.0
## bool IsHidden
- (summary) 
     An object must be in one of three modes: normal, locked or hidden.
     If an object is in normal mode, then the object's layer controls visibility
     and selectability. If an object is locked, then the object's layer controls
     visibility by the object cannot be selected. If the object is hidden, it is
     not visible and it cannot be selected.
     
- (since) 5.0
## bool IsInstanceDefinitionGeometry
- (summary) 
     True if the object is used as part of an instance definition.   
     
- (since) 5.0
## bool IsLocked
- (summary) 
     An object must be in one of three modes: normal, locked or hidden.
     If an object is in normal mode, then the object's layer controls visibility
     and selectability. If an object is locked, then the object's layer controls
     visibility by the object cannot be selected. If the object is hidden, it is
     not visible and it cannot be selected.
     
- (since) 5.0
## bool IsNormal
- (summary) 
     An object must be in one of three modes: normal, locked or hidden.
     If an object is in normal mode, then the object's layer controls visibility
     and selectability. If an object is locked, then the object's layer controls
     visibility by the object cannot be selected. If the object is hidden, it is
     not visible and it cannot be selected.
     
- (since) 5.0
## bool IsReference
- (summary) 
     Gets a value indicating if an object is a reference object. An object from a work session
     reference model is a reference object and cannot be modified. An object is
     a reference object if, and only if, it is on a reference layer.
     
- (since) 5.0
## string Name
- (summary) 
     Rhino objects have optional text names.  More than one object in
     a model can have the same name and some objects may have no name.
     
- (since) 5.0
## ObjectType ObjectType
- (summary) 
     Gets the Rhino-based object type.
     
- (since) 5.0
## uint ReferenceModelSerialNumber
- (summary) 
     When a component is in a model for reference, this value identifies the reference model.
     
- (since) 6.12
## RenderMaterial RenderMaterial
- (summary) 
     Gets the render material associated with this object or None if there
     is none.  This does not pay attention to the material source and will
     not check parent objects or layers for a RenderMaterial.
     
- (since) 5.7
## uint RuntimeSerialNumber
- (summary) 
     Gets the objects runtime serial number.
     
- (since) 5.0
## ComponentIndex[] SubobjectMaterialComponents
- (summary) 
- (since) 6.0
## bool Visible
- (summary) Gets the object visibility.
- (since) 5.0
## uint WorksessionReferenceSerialNumber
- (summary) 
     Obsolete - use ReferenceModelSerialNumber
     
- (since) 6.3
# Methods
## static RhinoObject FromRuntimeSerialNumber(uint serialNumber)
- (summary)  Get a Rhino object for a unique runtime serial number 
- (since) 6.0
- (returns) RhinoObject This is some return comment
## static Brep[] GetFillSurfaces(RhinoObject rhinoObject,ClippingPlaneObject clippingPlaneObject)
- (summary) 
     Return list of fill surfaces if any for object and clipping plane.
     
- (since) 6.7
- (returns) Brep[] This is some return comment
## static Brep[] GetFillSurfaces(RhinoObject rhinoObject,IEnumerable<ClippingPlaneObject> clippingPlaneObjects)
- (summary) 
     Return list of fill surfaces if any for object and clipping plane. Fills are trimmed by
     clipping planes that did not generate them.
     
- (since) 6.7
- (returns) Brep[] This is some return comment
## static Brep[] GetFillSurfaces(RhinoObject rhinoObject,IEnumerable<ClippingPlaneObject> clippingPlaneObjects,bool unclippedFills)
- (summary) 
     Return list of fill surfaces if any for object and clipping plane.
     
- (since) 6.7
- (returns) Brep[] This is some return comment
## static ObjRef[] GetRenderMeshes(IEnumerable<RhinoObject> rhinoObjects,bool okToCreate,bool returnAllObjects)
- (summary) 
     Gets the render meshes of some objects.
     
- (since) 5.0
- (returns) ObjRef[] This is some return comment
## static Commands.Result MeshObjects(IEnumerable<RhinoObject> rhinoObjects,MeshingParameters parameters,bool simpleDialog,Mesh[] meshes,ObjectAttributes[] attributes)
- (summary) Meshes Rhino objects.
- (since) 5.9
- (returns) Commands.Result This is some return comment
## static Commands.Result MeshObjects(IEnumerable<RhinoObject> rhinoObjects,MeshingParameters parameters,int uiStyle,Transform xform,Mesh[] meshes,ObjectAttributes[] attributes)
- (summary) Meshes Rhino objects.
- (since) 6.0
- (returns) Commands.Result This is some return comment
## static Commands.Result MeshObjects(IEnumerable<RhinoObject> rhinoObjects,MeshingParameters parameters,Mesh[] meshes,ObjectAttributes[] attributes)
- (summary) Meshes Rhino objects.
- (since) 5.9
- (returns) Commands.Result This is some return comment
## bool CommitChanges()
- (summary) 
     Moves changes made to this RhinoObject into the RhinoDoc.
     
- (since) 5.0
- (returns) bool This is some return comment
## int CreateMeshes(MeshType meshType,MeshingParameters parameters,bool ignoreCustomParameters)
- (summary) 
     Create meshes used to render and analyze surface and polysrf objects.
     
- (since) 5.0
- (returns) int This is some return comment
## void Description(TextLog textLog)
- (summary) 
     Get a brief description of a object, including it's attributes and geometry.
     
- (since) 6.0
- (returns) void This is some return comment
## GeometryBase DuplicateGeometry()
- (summary) 
     Constructs a deep (full) copy of the geometry.
     
- (since) 5.0
- (returns) GeometryBase This is some return comment
## bool EnableCustomGrips(CustomObjectGrips customGrips)
- (summary) Turns on/off the object's editing grips.
- (since) 5.0
- (returns) bool This is some return comment
## bool EnableVisualAnalysisMode(VisualAnalysisMode mode,bool enable)
- (summary) 
     Used to turn analysis modes on and off.
     
- (since) 5.0
- (returns) bool This is some return comment
## Display.VisualAnalysisMode[] GetActiveVisualAnalysisModes()
- (summary) 
     Gets a list of currently enabled analysis modes for this object.
     
- (since) 5.0
- (returns) Display.VisualAnalysisMode[] This is some return comment
## IConvertible GetCustomRenderMeshParameter(Guid providerId,String parameterName)
- (summary) 
     Query the object for the value of a given named custom render mesh parameter.
     
- (since) 6.0
- (returns) IConvertible This is some return comment
## bool GetDynamicTransform(Transform transform)
- (summary) 
     While an object is being dynamically tranformed (dragged, rotated, ...),
     the current transformation can be retrieved and used for creating
     dynamic display.
     
- (since) 5.0
- (returns) bool This is some return comment
## GripObject[] GetGrips()
- (summary) 
     Returns grips for this object If grips are enabled. If grips are not
     enabled, returns null.
     
- (since) 5.0
- (returns) GripObject[] This is some return comment
## int[] GetGroupList()
- (summary) 
     Allocates an array of group indices of length GroupCount.
     If  is 0, then this method returns null.
     
- (since) 5.0
- (returns) int[] This is some return comment
## ComponentIndex[] GetHighlightedSubObjects()
- (summary) 
     Gets a list of all highlighted subobjects.
     
- (since) 5.0
- (returns) ComponentIndex[] This is some return comment
## Material GetMaterial(bool frontMaterial)
- (summary) 
     Gets material that this object uses based on it's attributes and the document
     that the object is associated with.  In the rare case that a document is not
     associated with this object, None will be returned.
     
- (since) 5.0
- (returns) Material This is some return comment
## Material GetMaterial(ComponentIndex componentIndex)
- (summary) 
     Get the Material associated with the sub object
     identified by componentIndex if the component index is
     set to ComponentIndex.Unset
     then the top level material is returned.
     
- (since) 6.0
- (returns) Material This is some return comment
## Material GetMaterial(ComponentIndex componentIndex,Guid plugInId)
- (summary) 
     Get the Material associated with the sub object
     identified by componentIndex if the component index is
     set to ComponentIndex.Unset
     then the top level material is returned.
     
- (since) 6.0
- (returns) Material This is some return comment
## Material GetMaterial(ComponentIndex componentIndex,Guid plugInId,ObjectAttributes attributes)
- (summary) 
     Get the Material associated with the sub object
     identified by componentIndex if the component index is
     set to ComponentIndex.Unset then the top level material
     is returned.
     
- (since) 6.0
- (returns) Material This is some return comment
## Mesh[] GetMeshes(MeshType meshType)
- (summary) 
     Get existing meshes used to render and analyze surface and polysrf objects.
     
- (since) 5.0
- (returns) Mesh[] This is some return comment
## RenderMaterial GetRenderMaterial(bool frontMaterial)
- (summary) 
     Gets the RenderMaterial that this object uses based on it's attributes
     and the document that the object is associated with. If there is no 
     RenderMaterial associated with this object then None is returned.  If
     None is returned you should call GetMaterial to get the material used
     to render this object.
     
- (since) 5.10
- (returns) RenderMaterial This is some return comment
## RenderMaterial GetRenderMaterial(ComponentIndex componentIndex)
- (summary) 
     Gets the RenderMaterial associated with this object if there is one. If
     there is no RenderMaterial associated with this object then None is
     returned.  If None is returned you should call GetMaterial to get the
     material used to render this object.
     
- (since) 6.0
- (returns) RenderMaterial This is some return comment
## RenderMaterial GetRenderMaterial(ComponentIndex componentIndex,Guid plugInId)
- (summary) 
     Gets the RenderMaterial associated with this object if there is one. If
     there is no RenderMaterial associated with this object then None is
     returned.  If None is returned you should call GetMaterial to get the
     material used to render this object.
     
- (since) 6.0
- (returns) RenderMaterial This is some return comment
## RenderMaterial GetRenderMaterial(ComponentIndex componentIndex,Guid plugInId,ObjectAttributes attributes)
- (summary) 
     Gets the RenderMaterial associated with this object if there is one. If
     there is no RenderMaterial associated with this object then None is
     returned.  If None is returned you should call GetMaterial to get the
     material used to render this object.
     
- (since) 6.0
- (returns) RenderMaterial This is some return comment
## MeshingParameters GetRenderMeshParameters()
- (summary) 
     Meshing parameters that this object uses for generating render meshes. If the
     object's attributes do not have custom meshing parameters, then the document's
     meshing parameters are used.
     
- (since) 5.0
- (returns) MeshingParameters This is some return comment
## RenderPrimitiveList GetRenderPrimitiveList(ViewportInfo viewport,bool preview)
- (summary) 
     Build custom render mesh(es) for this object.
     
- (since) 5.7
- (returns) RenderPrimitiveList This is some return comment
## RenderPrimitiveList GetRenderPrimitiveList(ViewportInfo viewport,DisplayPipelineAttributes attrs)
- (summary) 
     Build custom render mesh(es) for this object.
     
- (since) 6.0
- (returns) RenderPrimitiveList This is some return comment
## ComponentIndex[] GetSelectedSubObjects()
- (summary) Get a list of all selected sub-objects.
- (since) 5.0
- (returns) ComponentIndex[] This is some return comment
## RhinoObject[] GetSubObjects()
- (summary) 
     Gets an array of sub-objects.
     
- (since) 5.0
- (returns) RhinoObject[] This is some return comment
## int[] GetTextureChannels()
- (summary) 
     Get a list of the texture mapping channel Id's associated with object. 
     
- (since) 5.7
- (returns) int[] This is some return comment
## TextureMapping GetTextureMapping(int channel)
- (summary) 
- (since) 5.7
- (returns) TextureMapping This is some return comment
## TextureMapping GetTextureMapping(int channel,Transform objectTransform)
- (summary) 
     Get objects texture mapping
     
- (since) 5.7
- (returns) TextureMapping This is some return comment
## bool HasTextureMapping()
- (summary) 
     Returns True if this object has a texture mapping form any source (pluginId)
     
- (since) 6.0
- (returns) bool This is some return comment
## bool Highlight(bool enable)
- (summary) 
     Modifies the highlighting of the object.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool HighlightSubObject(ComponentIndex componentIndex,bool highlight)
- (summary) 
     Highlights a subobject.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool InVisualAnalysisMode()
- (summary) 
     Reports if any visual analysis mode is currently active for an object.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool InVisualAnalysisMode(VisualAnalysisMode mode)
- (summary) 
     Reports if a visual analysis mode is currently active for an object.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsActiveInViewport(RhinoViewport viewport)
- (summary) 
     Determine if this object is active in a particular viewport.
     
- (since) 5.0
- (returns) bool This is some return comment
## int IsHighlighted(bool checkSubObjects)
- (summary) Check highlight state.
- (since) 5.0
- (returns) int This is some return comment
## bool IsMeshable(MeshType meshType)
- (summary) 
     Returns True if the object is capable of having a mesh of the specified type
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsSelectable()
- (summary) Reports if an object can be selected.
- (since) 5.0
- (returns) bool This is some return comment
## bool IsSelectable(bool ignoreSelectionState,bool ignoreGripsState,bool ignoreLayerLocking,bool ignoreLayerVisibility)
- (summary) Reports if an object can be selected.
- (since) 5.0
- (returns) bool This is some return comment
## int IsSelected(bool checkSubObjects)
- (summary) Check selection state.
- (since) 5.0
- (returns) int This is some return comment
## bool IsSubObjectHighlighted(ComponentIndex componentIndex)
- (summary) 
     Determines if a subobject is highlighted.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsSubObjectSelectable(ComponentIndex componentIndex,bool ignoreSelectionState)
- (summary) Reports if a subobject can be selected.
- (since) 5.0
- (returns) bool This is some return comment
## bool IsSubObjectSelected(ComponentIndex componentIndex)
- (summary) Check sub-object selection state.
- (since) 5.0
- (returns) bool This is some return comment
## uint MemoryEstimate()
- (summary) 
     Computes an estimate of the number of bytes that this object is using in memory.
     Note that this is a runtime memory estimate and does not directly compare to the
     amount of space take up by the object when saved to a file.
     
- (since) 5.0
- (returns) uint This is some return comment
## int MeshCount(MeshType meshType,MeshingParameters parameters)
- (summary) 
     RhinoObjects can have several different types of meshes and 
     different numbers of meshes.  A b-rep can have a render and 
     an analysis mesh on each face.  A mesh object has a single 
     render mesh and no analysis mesh. Curve, point, and annotation
     objects have no meshes.
     
- (since) 5.0
- (returns) int This is some return comment
## int Select(bool on)
- (summary) Selects an object.
- (since) 5.0
- (returns) int This is some return comment
## int Select(bool on,bool syncHighlight)
- (summary) Selects an object.
- (since) 5.0
- (returns) int This is some return comment
## int Select(bool on,bool syncHighlight,bool persistentSelect,bool ignoreGripsState,bool ignoreLayerLocking,bool ignoreLayerVisibility)
- (summary) Selects an object.
- (since) 5.0
- (returns) int This is some return comment
## int SelectSubObject(ComponentIndex componentIndex,bool select,bool syncHighlight)
- (summary) Reports if an object can be selected.
- (since) 5.0
- (returns) int This is some return comment
## int SelectSubObject(ComponentIndex componentIndex,bool select,bool syncHighlight,bool persistentSelect)
- (summary) Reports if an object can be selected.
- (since) 6.0
- (returns) int This is some return comment
## void SetCustomRenderMeshParameter(Guid providerId,String parameterName,object value)
- (summary) 
     Set the named custom render mesh parameter value for this object.
     
- (since) 6.0
- (returns) void This is some return comment
## int SetTextureMapping(int channel,TextureMapping tm)
- (summary) 
- (since) 6.0
- (returns) int This is some return comment
## string ShortDescription(bool plural)
- (summary) 
     Gets a localized short descriptive name of the object.
     
- (since) 5.0
- (returns) string This is some return comment
## bool SupportsRenderPrimitiveList(ViewportInfo viewport,bool preview)
- (summary) 
     Determines if custom render meshes will be built for a particular object.
     
- (since) 5.7
- (returns) bool This is some return comment
## bool SupportsRenderPrimitiveList(ViewportInfo viewport,DisplayPipelineAttributes attrs)
- (summary) 
     Determines if custom render meshes will be built for a particular object.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetRenderPrimitiveBoundingBox(ViewportInfo viewport,bool preview,BoundingBox boundingBox)
- (summary) 
     Get the bounding box for the custom render meshes associated with this
     object.
     
- (since) 5.7
- (returns) bool This is some return comment
## bool TryGetRenderPrimitiveBoundingBox(ViewportInfo viewport,DisplayPipelineAttributes attrs,BoundingBox boundingBox)
- (summary) 
     Get the bounding box for the custom render meshes associated with this
     object.
     
- (since) 6.0
- (returns) bool This is some return comment
## int UnhighlightAllSubObjects()
- (summary) 
     Removes highlighting from all subobjects.
     
- (since) 5.0
- (returns) int This is some return comment
## int UnselectAllSubObjects()
- (summary) 
     Removes selection from all subobjects.
     
- (since) 5.0
- (returns) int This is some return comment
