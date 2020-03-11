---
title: "RhinoObject"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Represents an object in the document.
   RhinoObjects should only ever be creatable by the RhinoDoc.
```cs
public class RhinoObject : ModelComponent
```
## Properties

static uint NextRuntimeSerialNumber
: Gets the runtime serial number that will be assigned to
     the next Rhino Object that is created.

[ObjectAttributes](/rhinocommon/rhino/docobjects/objectattributes/) Attributes
: Gets or sets the object attributes.

ModelComponentType ComponentType
: Returns .
: since 6.0

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Gets the document that owns this object.

[GeometryBase](/rhinocommon/rhino/geometry/geometrybase/) Geometry
: Gets the underlying geometry for this object.
     All rhino objects are composed of geometry and attributes.

bool GripsOn
: Gets or sets the activation state of object default editing grips.

bool GripsSelected
: True if grips are turned on and at least one is selected.

int GroupCount
: Number of groups object belongs to.

bool HasDynamicTransform
: True if the object has a dynamic transformation

bool HasSubobjectMaterials
: Will be True if the object contains sub object meshes with materials
     that are different than the top level object.
: since 6.0

Guid Id
: Every object has a Guid (globally unique identifier, also known as UUID, or universally
     unique identifier). The default value is Guid.Empty.
     
     When an object is added to a model, the value is checked.  If the value is Guid.Empty, a
     new Guid is created. If the value is not None but it is already used by another object
     in the model, a new Guid is created. If the value is not Guid.Empty and it is not used by
     another object in the model, then that value persists. When an object is updated, by
     a move for example, the value of ObjectId persists.
     This value is the same as the one returned by this.Attributes.ObjectId.

uint InstanceDefinitionModelSerialNumber
: When a component is in a model as part of the information required for a linked instance definition,
     this value identifies the the linked instance definition reference model.
: since 6.12

bool IsDeletable
: Some objects cannot be deleted, like grips on lights and annotation objects.

bool IsDeleted
: True if the object is deleted. Deleted objects are kept by the document
     for undo purposes. Call RhinoDoc.UndeleteObject to undelete an object.

bool IsHidden
: An object must be in one of three modes: normal, locked or hidden.
     If an object is in normal mode, then the object's layer controls visibility
     and selectability. If an object is locked, then the object's layer controls
     visibility by the object cannot be selected. If the object is hidden, it is
     not visible and it cannot be selected.

bool IsInstanceDefinitionGeometry
: True if the object is used as part of an instance definition.

bool IsLocked
: An object must be in one of three modes: normal, locked or hidden.
     If an object is in normal mode, then the object's layer controls visibility
     and selectability. If an object is locked, then the object's layer controls
     visibility by the object cannot be selected. If the object is hidden, it is
     not visible and it cannot be selected.

bool IsNormal
: An object must be in one of three modes: normal, locked or hidden.
     If an object is in normal mode, then the object's layer controls visibility
     and selectability. If an object is locked, then the object's layer controls
     visibility by the object cannot be selected. If the object is hidden, it is
     not visible and it cannot be selected.

bool IsReference
: Gets a value indicating if an object is a reference object. An object from a work session
     reference model is a reference object and cannot be modified. An object is
     a reference object if, and only if, it is on a reference layer.

string Name
: Rhino objects have optional text names.  More than one object in
     a model can have the same name and some objects may have no name.

[ObjectType](/rhinocommon/rhino/docobjects/objecttype/) ObjectType
: Gets the Rhino-based object type.

uint ReferenceModelSerialNumber
: When a component is in a model for reference, this value identifies the reference model.
: since 6.12

[RenderMaterial](/rhinocommon/rhino/render/rendermaterial/) RenderMaterial
: Gets the render material associated with this object or None if there
     is none.  This does not pay attention to the material source and will
     not check parent objects or layers for a RenderMaterial.
: since 5.7

uint RuntimeSerialNumber
: Gets the objects runtime serial number.

[ComponentIndex](/rhinocommon/rhino/geometry/componentindex/)[] SubobjectMaterialComponents
: 
: since 6.0

bool Visible
: Gets the object visibility.

uint WorksessionReferenceSerialNumber
: Obsolete - use ReferenceModelSerialNumber
: since 6.3
## Methods

static RhinoObject FromRuntimeSerialNumber(uint serialNumber)
: Get a Rhino object for a unique runtime serial number
: since 6.0

static [Brep](/rhinocommon/rhino/geometry/brep/)[] GetFillSurfaces(RhinoObject rhinoObject,ClippingPlaneObject clippingPlaneObject)
: Return list of fill surfaces if any for object and clipping plane.
: since 6.7

static [Brep](/rhinocommon/rhino/geometry/brep/)[] GetFillSurfaces(RhinoObject rhinoObject,IEnumerable<ClippingPlaneObject> clippingPlaneObjects)
: Return list of fill surfaces if any for object and clipping plane. Fills are trimmed by
     clipping planes that did not generate them.
: Returns - Array of Brep containing fully trimmed fills if there were any generated.
: since 6.7

static [Brep](/rhinocommon/rhino/geometry/brep/)[] GetFillSurfaces(RhinoObject rhinoObject,IEnumerable<ClippingPlaneObject> clippingPlaneObjects,bool unclippedFills)
: Return list of fill surfaces if any for object and clipping plane.
: Returns - Array of Brep containing fills if there were any generated, trimmed if unclippedFills was false
: since 6.7

static [ObjRef](/rhinocommon/rhino/docobjects/objref/)[] GetRenderMeshes(IEnumerable<RhinoObject> rhinoObjects,bool okToCreate,bool returnAllObjects)
: Gets the render meshes of some objects.
: Returns - An array of object references.

static Commands.Result MeshObjects(IEnumerable<RhinoObject> rhinoObjects,MeshingParameters parameters,bool simpleDialog,Mesh[] meshes,ObjectAttributes[] attributes)
: Meshes Rhino objects.
: Returns - The results of the calculation.
: since 5.9

static Commands.Result MeshObjects(IEnumerable<RhinoObject> rhinoObjects,MeshingParameters parameters,int uiStyle,Transform xform,Mesh[] meshes,ObjectAttributes[] attributes)
: Meshes Rhino objects.
: Returns - The results of the calculation.
: since 6.0

static Commands.Result MeshObjects(IEnumerable<RhinoObject> rhinoObjects,MeshingParameters parameters,Mesh[] meshes,ObjectAttributes[] attributes)
: Meshes Rhino objects.
: Returns - The results of the calculation.
: since 5.9

bool CommitChanges()
: Moves changes made to this RhinoObject into the RhinoDoc.
: Returns - True if changes were made.

int CreateMeshes(MeshType meshType,MeshingParameters parameters,bool ignoreCustomParameters)
: Create meshes used to render and analyze surface and polysrf objects.
: Returns - number of meshes created

void Description(TextLog textLog)
: Get a brief description of a object, including it's attributes and geometry.
: since 6.0

[GeometryBase](/rhinocommon/rhino/geometry/geometrybase/) DuplicateGeometry()
: Constructs a deep (full) copy of the geometry.
: Returns - A copy of the internal geometry.

bool EnableCustomGrips(CustomObjectGrips customGrips)
: Turns on/off the object's editing grips.
: Returns - True if the call succeeded.  If you attempt to add custom grips to an
     object that does not support custom grips, then False is returned.

bool EnableVisualAnalysisMode(VisualAnalysisMode mode,bool enable)
: Used to turn analysis modes on and off.
: Returns - True if this object supports the analysis mode.

Display.VisualAnalysisMode[] GetActiveVisualAnalysisModes()
: Gets a list of currently enabled analysis modes for this object.
: Returns - An array of visual analysis modes. The array can be empty, but not null.

IConvertible GetCustomRenderMeshParameter(Guid providerId,String parameterName)
: Query the object for the value of a given named custom render mesh parameter.
: Returns - IConvertible. Note that you can't directly cast from object, instead you have to use the Convert mechanism.
: since 6.0

bool GetDynamicTransform(Transform transform)
: While an object is being dynamically tranformed (dragged, rotated, ...),
     the current transformation can be retrieved and used for creating
     dynamic display.
: Returns - True if the object is being edited and its transformation
     is available.  False if the object is not being edited,
     in which case the identity xform is returned.

[GripObject](/rhinocommon/rhino/docobjects/gripobject/)[] GetGrips()
: Returns grips for this object If grips are enabled. If grips are not
     enabled, returns null.
: Returns - An array of grip objects; or None if there are no grips.

int[] GetGroupList()
: Allocates an array of group indices of length GroupCount.
     If  is 0, then this method returns null.
: Returns - An array of group indices, or None if  is 0.

[ComponentIndex](/rhinocommon/rhino/geometry/componentindex/)[] GetHighlightedSubObjects()
: Gets a list of all highlighted subobjects.
: Returns - An array of all highlighted subobjects; or None is there are none.

[Material](/rhinocommon/rhino/render/changequeue/material/) GetMaterial(bool frontMaterial)
: Gets material that this object uses based on it's attributes and the document
     that the object is associated with.  In the rare case that a document is not
     associated with this object, None will be returned.

[Material](/rhinocommon/rhino/render/changequeue/material/) GetMaterial(ComponentIndex componentIndex)
: Get the Material associated with the sub object
     identified by componentIndex if the component index is
     set to ComponentIndex.Unset
     then the top level material is returned.
: Returns - Returns the Material associated with the sub object
     identified by componentIndex if the component index is
     set to ComponentIndex.Unset then the top level material
     is returned.
: since 6.0

[Material](/rhinocommon/rhino/render/changequeue/material/) GetMaterial(ComponentIndex componentIndex,Guid plugInId)
: Get the Material associated with the sub object
     identified by componentIndex if the component index is
     set to ComponentIndex.Unset
     then the top level material is returned.
: Returns - Returns the Material associated with the sub object
     identified by componentIndex if the component index is set to
     ComponentIndex.Unset
     then the top level material is returned.
: since 6.0

[Material](/rhinocommon/rhino/render/changequeue/material/) GetMaterial(ComponentIndex componentIndex,Guid plugInId,ObjectAttributes attributes)
: Get the Material associated with the sub object
     identified by componentIndex if the component index is
     set to ComponentIndex.Unset then the top level material
     is returned.
: Returns - Returns the Material associated with the sub object
     identified by componentIndex if the component index is set to
     ComponentIndex.Unset then the top level material is returned.
: since 6.0

[Mesh](/rhinocommon/rhino/geometry/mesh/)[] GetMeshes(MeshType meshType)
: Get existing meshes used to render and analyze surface and polysrf objects.
: Returns - An array of meshes.

[RenderMaterial](/rhinocommon/rhino/render/rendermaterial/) GetRenderMaterial(bool frontMaterial)
: Gets the RenderMaterial that this object uses based on it's attributes
     and the document that the object is associated with. If there is no 
     RenderMaterial associated with this object then None is returned.  If
     None is returned you should call GetMaterial to get the material used
     to render this object.
: Returns - If there is a RenderMaterial associated with this objects' associated
     Material then it is returned otherwise; None is returned.
: since 5.10

[RenderMaterial](/rhinocommon/rhino/render/rendermaterial/) GetRenderMaterial(ComponentIndex componentIndex)
: Gets the RenderMaterial associated with this object if there is one. If
     there is no RenderMaterial associated with this object then None is
     returned.  If None is returned you should call GetMaterial to get the
     material used to render this object.
: Returns - Returns the  associated with the sub object
     identified by componentIndex if the component index is set to
      then the top level
     RenderMaterail is returned.  If this method returns None it means there
     is no RenderMaterial associated with the object or  sub object so you
     should may GetMaterial get the objects generic material.
: since 6.0

[RenderMaterial](/rhinocommon/rhino/render/rendermaterial/) GetRenderMaterial(ComponentIndex componentIndex,Guid plugInId)
: Gets the RenderMaterial associated with this object if there is one. If
     there is no RenderMaterial associated with this object then None is
     returned.  If None is returned you should call GetMaterial to get the
     material used to render this object.
: Returns - Returns the  associated with the sub object
     identified by componentIndex if the component index is set to
      then the top level
     RenderMaterail is returned.  If this method returns None it means there
     is no RenderMaterial associated with the object or sub object so you
     should may GetMaterial get the objects generic material.
: since 6.0

[RenderMaterial](/rhinocommon/rhino/render/rendermaterial/) GetRenderMaterial(ComponentIndex componentIndex,Guid plugInId,ObjectAttributes attributes)
: Gets the RenderMaterial associated with this object if there is one. If
     there is no RenderMaterial associated with this object then None is
     returned.  If None is returned you should call GetMaterial to get the
     material used to render this object.
: Returns - Returns the  associated with the sub object
     identified by componentIndex if the component index is set to
      then the top level
     RenderMaterail is returned.  If this method returns None it means there
     is no RenderMaterial associated with the object or  sub object so you
     should may GetMaterial get the objects generic material.
: since 6.0

[MeshingParameters](/rhinocommon/rhino/geometry/meshingparameters/) GetRenderMeshParameters()
: Meshing parameters that this object uses for generating render meshes. If the
     object's attributes do not have custom meshing parameters, then the document's
     meshing parameters are used.

[RenderPrimitiveList](/rhinocommon/rhino/render/renderprimitivelist/) GetRenderPrimitiveList(ViewportInfo viewport,bool preview)
: Build custom render mesh(es) for this object.
: Returns - Returns a RenderPrimitiveList if successful otherwise returns null.
: since 5.7

[RenderPrimitiveList](/rhinocommon/rhino/render/renderprimitivelist/) GetRenderPrimitiveList(ViewportInfo viewport,DisplayPipelineAttributes attrs)
: Build custom render mesh(es) for this object.
: Returns - Returns a RenderPrimitiveList if successful otherwise returns null.
: since 6.0

[ComponentIndex](/rhinocommon/rhino/geometry/componentindex/)[] GetSelectedSubObjects()
: Get a list of all selected sub-objects.
: Returns - An array of subobject indices, or None if there are none.

RhinoObject[] GetSubObjects()
: Gets an array of sub-objects.
: Returns - An array of subobjects, or None if there are none.

int[] GetTextureChannels()
: Get a list of the texture mapping channel Id's associated with object.
: Returns - Returns an array of channel Id's or an empty list if there are not mappings.
: since 5.7

[TextureMapping](/rhinocommon/rhino/render/texturemapping/) GetTextureMapping(int channel)
: 
: since 5.7

[TextureMapping](/rhinocommon/rhino/render/texturemapping/) GetTextureMapping(int channel,Transform objectTransform)
: Get objects texture mapping
: since 5.7

bool HasTextureMapping()
: Returns True if this object has a texture mapping form any source (pluginId)
: since 6.0

bool Highlight(bool enable)
: Modifies the highlighting of the object.
: Returns - True if the object is now highlighted.

bool HighlightSubObject(ComponentIndex componentIndex,bool highlight)
: Highlights a subobject.
: Returns - True if the subobject is now highlighted.

bool InVisualAnalysisMode()
: Reports if any visual analysis mode is currently active for an object.
: Returns - True if an analysis mode is active; otherwise false.

bool InVisualAnalysisMode(VisualAnalysisMode mode)
: Reports if a visual analysis mode is currently active for an object.
: Returns - True if the specified analysis mode is active; otherwise false.

bool IsActiveInViewport(RhinoViewport viewport)
: Determine if this object is active in a particular viewport.
: Returns - True if the object is active in viewport

int IsHighlighted(bool checkSubObjects)
: Check highlight state.
: Returns - 0: object is not highlighted.1: entire object is highlighted.3: one or more proper sub-objects are highlighted.

bool IsMeshable(MeshType meshType)
: Returns True if the object is capable of having a mesh of the specified type

bool IsSelectable()
: Reports if an object can be selected.
: Returns - True if object is capable of being selected.

bool IsSelectable(bool ignoreSelectionState,bool ignoreGripsState,bool ignoreLayerLocking,bool ignoreLayerVisibility)
: Reports if an object can be selected.
: Returns - True if object is capable of being selected.

int IsSelected(bool checkSubObjects)
: Check selection state.
: Returns - 0 = object is not selected.
     1 = object is selected.
     2 = entire object is selected persistently.
     3 = one or more proper sub-objects are selected.

bool IsSubObjectHighlighted(ComponentIndex componentIndex)
: Determines if a subobject is highlighted.
: Returns - True if the subobject is highlighted.

bool IsSubObjectSelectable(ComponentIndex componentIndex,bool ignoreSelectionState)
: Reports if a subobject can be selected.
: Returns - True if the specified subobject can be selected.

bool IsSubObjectSelected(ComponentIndex componentIndex)
: Check sub-object selection state.
: Returns - True if the subobject is selected.

uint MemoryEstimate()
: Computes an estimate of the number of bytes that this object is using in memory.
     Note that this is a runtime memory estimate and does not directly compare to the
     amount of space take up by the object when saved to a file.
: Returns - The estimated number of bytes this object occupies in memory.

int MeshCount(MeshType meshType,MeshingParameters parameters)
: RhinoObjects can have several different types of meshes and 
     different numbers of meshes.  A b-rep can have a render and 
     an analysis mesh on each face.  A mesh object has a single 
     render mesh and no analysis mesh. Curve, point, and annotation
     objects have no meshes.
: Returns - number of meshes

int Select(bool on)
: Selects an object.
: Returns - 0: object is not selected.1: object is selected.2: object is selected persistently.

int Select(bool on,bool syncHighlight)
: Selects an object.
: Returns - 0: object is not selected.1: object is selected.2: object is selected persistently.

int Select(bool on,bool syncHighlight,bool persistentSelect,bool ignoreGripsState,bool ignoreLayerLocking,bool ignoreLayerVisibility)
: Selects an object.
: Returns - 0: object is not selected.1: object is selected.2: object is selected persistently.

int SelectSubObject(ComponentIndex componentIndex,bool select,bool syncHighlight)
: Reports if an object can be selected.
: Returns - 0: object is not selected
     1: object is selected
     2: object is selected persistently.

int SelectSubObject(ComponentIndex componentIndex,bool select,bool syncHighlight,bool persistentSelect)
: Reports if an object can be selected.
: Returns - 0: object is not selected1: object is selected2: object is selected persistently.
: since 6.0

void SetCustomRenderMeshParameter(Guid providerId,String parameterName,object value)
: Set the named custom render mesh parameter value for this object.
: since 6.0

int SetTextureMapping(int channel,TextureMapping tm)
: 
: since 6.0

string ShortDescription(bool plural)
: Gets a localized short descriptive name of the object.
: Returns - A string with the short localized descriptive name.

bool SupportsRenderPrimitiveList(ViewportInfo viewport,bool preview)
: Determines if custom render meshes will be built for a particular object.
: Returns - Returns True if custom render mesh(es) will get built for this object.
: since 5.7

bool SupportsRenderPrimitiveList(ViewportInfo viewport,DisplayPipelineAttributes attrs)
: Determines if custom render meshes will be built for a particular object.
: Returns - Returns True if custom render mesh(es) will get built for this object.
: since 6.0

bool TryGetRenderPrimitiveBoundingBox(ViewportInfo viewport,bool preview,BoundingBox boundingBox)
: Get the bounding box for the custom render meshes associated with this
     object.
: Returns - Returns True if the bounding box was successfully calculated otherwise
     returns False on error.
: since 5.7

bool TryGetRenderPrimitiveBoundingBox(ViewportInfo viewport,DisplayPipelineAttributes attrs,BoundingBox boundingBox)
: Get the bounding box for the custom render meshes associated with this
     object.
: Returns - Returns True if the bounding box was successfully calculated otherwise
     returns False on error.
: since 6.0

int UnhighlightAllSubObjects()
: Removes highlighting from all subobjects.
: Returns - The number of changed subobjects.

int UnselectAllSubObjects()
: Removes selection from all subobjects.
: Returns - The number of unselected subobjects.
