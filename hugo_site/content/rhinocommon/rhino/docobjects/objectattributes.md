---
title: "ObjectAttributes"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Attributes (color, material, layer,...) associated with a rhino object
```cs
[Serializable]
public class ObjectAttributes : Runtime.CommonObject
```
## Constructors

ObjectAttributes()
: 
## Properties

bool CastsShadows
: Gets or sets an object's casts shadows property, or whether or not an object casts shadows on other objects and a ground plane.
: since 6.0

[ObjectColorSource](/rhinocommon/rhino/docobjects/objectcolorsource/) ColorSource
: The color used to display an object is specified in one of three ways.
     If ColorSource is ON::color_from_layer, then the object's layer ON_Layer::Color() is used.
     If ColorSource is ON::color_from_object, then value of m_color is used.
     If ColorSource is ON::color_from_material, then the diffuse color of the object's
     render material is used.  See ON_3dmObjectAttributes::MaterialSource() to
     determine where to get the definition of the object's render material.

[Decals](/rhinocommon/rhino/render/decals/) Decals
: Gets all object decals associated with this object.
: since 5.10

int DisplayOrder
: Display order used to force objects to be drawn on top or behind each other.
     Larger numbers draw on top of smaller numbers.
     0  = draw object in standard depth buffered order<0 = draw object behind "normal" draw order objects>0 = draw object on top of "normal" draw order objects
: since 5.10

int GroupCount
: number of groups object belongs to.

bool HasMapping
: A mapping from any plugin source is associated with these attributes
     Need to do this here to respond correctly to ModifyObjectAttributes event
: since 5.10

bool IsDocumentControlled
: 

bool IsInstanceDefinitionObject
: Use this query to determine if an object is part of an instance definition.

int LayerIndex
: Gets or sets an associated layer index.
     Layer definitions in an OpenNURBS model are stored in a layer table.
     The layer table is conceptually an array of ON_Layer classes.  Every
     OpenNURBS object in a model is on some layer.  The object's layer
     is specified by zero based indicies into the ON_Layer array.

int LinetypeIndex
: Gets or sets the linetype index.
     Linetype definitions in an OpenNURBS model are stored in a linetype table.
     The linetype table is conceptually an array of ON_Linetype classes. Every
     OpenNURBS object in a model references some linetype.  The object's linetype
     is specified by zero based indicies into the ON_Linetype array.Index 0 is reserved for continuous linetype (no pattern).

[ObjectLinetypeSource](/rhinocommon/rhino/docobjects/objectlinetypesource/) LinetypeSource
: The Linetype used to display an object is specified in one of two ways.
     If LinetypeSource is ON::linetype_from_layer, then the object's layer ON_Layer::Linetype() is used.
     If LinetypeSource is ON::linetype_from_object, then value of m_linetype is used.

int MaterialIndex
: Gets or sets the material index.
     If you want something simple and fast, set the index of
     the rendering material.

[MaterialRefs](/rhinocommon/rhino/docobjects/materialrefs/) MaterialRefs
: If you are developing a high quality plug-in renderer, and a user is
     assigning a custom render material to this object, then add rendering
     material information to the MaterialRefs dictionary.
     
     Note to developers:
      As soon as the MaterialRefs dictionary contains items rendering
      material queries slow down.  Do not populate the MaterialRefs
     dictionary when setting the MaterialIndex will take care of your needs.
: since 5.10

[ObjectMaterialSource](/rhinocommon/rhino/docobjects/objectmaterialsource/) MaterialSource
: Determines if the simple material should come from the object or from it's layer.
     High quality rendering plug-ins should use m_rendering_attributes.

[ObjectMode](/rhinocommon/rhino/docobjects/objectmode/) Mode
: An object must be in one of three modes: normal, locked or hidden.
     If an object is in normal mode, then the object's layer controls visibility
     and selectability. If an object is locked, then the object's layer controls
     visibility by the object cannot be selected. If the object is hidden, it is
     not visible and it cannot be selected.

string Name
: Gets or sets an object optional text name.
     More than one object in a model can have the same name and
     some objects may have no name.

Color ObjectColor
: If ON::color_from_object == ColorSource, then color is the object's display color.

[ObjectDecoration](/rhinocommon/rhino/docobjects/objectdecoration/) ObjectDecoration
: Used to indicate an object has a decoration (like an arrowhead on a curve)

Guid ObjectId
: Every object has a Guid (globally unique identifier, also known as UUID, or universally
     unique identifier). The default value is Guid.Empty.
     
     When an object is added to a model, the value is checked.  If the value is Guid.Empty, a
     new Guid is created. If the value is not None but it is already used by another object
     in the model, a new Guid is created. If the value is not Guid.Empty and it is not used by
     another object in the model, then that value persists. When an object is updated, by
     a move for example, the value of ObjectId persists.
     This value is the same as the one returned by object.Id.

Color PlotColor
: If plot_color_from_object == PlotColorSource, then PlotColor is the object's plotting color.

[ObjectPlotColorSource](/rhinocommon/rhino/docobjects/objectplotcolorsource/) PlotColorSource
: The color used to plot an object on paper is specified in one of three ways.
     If PlotColorSource is ON::plot_color_from_layer, then the object's layer ON_Layer::PlotColor() is used.
     If PlotColorSource is ON::plot_color_from_object, then value of PlotColor() is used.

double PlotWeight
: Plot weight in millimeters.
     =0.0 means use the default width
     <0.0 means don't plot (visible for screen display, but does not show on plot)

[ObjectPlotWeightSource](/rhinocommon/rhino/docobjects/objectplotweightsource/) PlotWeightSource
: 

bool ReceivesShadows
: Gets or sets an object's receives shadows property, or whether or not an object receives shadows from other objects.
: since 6.0

[ActiveSpace](/rhinocommon/rhino/docobjects/activespace/) Space
: Starting with V4, objects can be in either model space or page space.
     If an object is in page space, then ViewportId is not nil and
     identifies the page it is on.

string Url
: Objects may have an URL. There are no restrictions on what value this
     URL may have. As an example, if the object came from a commercial part
     library, the URL might point to the definition of that part.
: since 6.8

int UserStringCount
: 

Guid ViewportId
: If ViewportId is nil, the object is active in all viewports. If ViewportId is not nil, then 
     this object is only active in a specific view. This field is primarily used to assign page
     space objects to a specific page, but it can also be used to restrict model space to a
     specific view.

bool Visible
: Gets or sets an object's visiblity.

int WireDensity
: When a surface object is displayed in wireframe, this controls
     how many isoparametric wires are used.
     value    number of isoparametric wires
     -1       boundary wires (off)
     0        boundary and knot wires 
     1        boundary and knot wires and, if there are no interior knots, a single interior wire.
     N>=2     boundary and knot wires and (N+1) interior wires.
## Methods

bool AddHideInDetailOverride(Guid detailId)
: Make this object hidden in a given detail
: since 6.1

void AddToGroup(int groupIndex)
: Adds object to the group with specified index by appending index to
     group list.
     If the object is already in group, nothing is changed.

System.Drawing.Color ComputedPlotColor(RhinoDoc document)
: 
: since 5.6

System.Drawing.Color ComputedPlotColor(RhinoDoc document,Guid viewportId)
: 
: since 5.6

double ComputedPlotWeight(RhinoDoc document)
: 
: since 5.6

double ComputedPlotWeight(RhinoDoc document,Guid viewportId)
: 
: since 5.6

void DeleteAllUserStrings()
: 
: since 6.0

bool DeleteUserString(string key)
: 
: since 6.0

System.Drawing.Color DrawColor(RhinoDoc document)
: 

System.Drawing.Color DrawColor(RhinoDoc document,Guid viewportId)
: 

ObjectAttributes Duplicate()
: Constructs a copy of this  instance.
: Returns - A new instance on success, or None on failure.

Guid GetDisplayModeOverride(Guid viewportId)
: Returns the id of the display mode of an objects. Object display modes are view based. Thus, it is possible to have an object display different in different views.
: Returns - A display node id if the object has a display mode override for the viewport; otherwise Guid.Empty is returned.
: since 6.18

int[] GetGroupList()
: Returns an array of GroupCount group indices.  If GroupCount is zero, then GetGroupList() returns null.
: Returns - An array of group indices. None might be returned in place of an empty array.

Guid[] GetHideInDetailOverrides()
: Get list of details that this object is supposed to be hidden in
: since 6.1

string GetUserString(string key)
: Gets a user string.
: Returns - string associated with the key if successful. None if no key was found.

System.Collections.Specialized.NameValueCollection GetUserStrings()
: Gets an independent copy of the collection of (user text key, user text value) pairs attached to this object.
: Returns - A collection of key strings and values strings. This

bool HasDisplayModeOverride(Guid viewportId)
: Determines if an object has a display mode override for a given viewport.
: Returns - True if the object has a display mode override for the viewport; otherwise, false.

bool HasHideInDetailOverrideSet(Guid detailId)
: Is this object supposed to be hidden in a given detail
: since 6.1

void RemoveDisplayModeOverride()
: By default, objects are drawn using the display mode of the viewport that
     the object is being drawn in. Setting a specific display mode, instructs
     Rhino to always use that display mode, regardless of the viewport's mode.
     This function resets an object to use the viewport's display mode for all
     viewports.

void RemoveDisplayModeOverride(Guid rhinoViewportId)
: By default, objects are drawn using the display mode of the viewport that
     the object is being drawn in. Setting a specific display mode, instructs
     Rhino to always use that display mode, regardless of the viewport's mode.
     This function resets an object to use the viewport's display mode.

void RemoveFromAllGroups()
: Removes object from all groups.

void RemoveFromGroup(int groupIndex)
: removes object from the group with specified index.
     If the object is not in the group, nothing is changed.

bool RemoveHideInDetailOverride(Guid detailId)
: Remove hidden in detail flag for a specific detail
: since 6.1

bool SetDisplayModeOverride(DisplayModeDescription mode)
: By default, objects are drawn using the display mode of the viewport that
     the object is being drawn in. Setting a specific display mode, instructs
     Rhino to always use that display mode, regardless of the viewport's mode.
     This version affects the object's display mode for all viewports.
: Returns - True if setting was successful.

bool SetDisplayModeOverride(DisplayModeDescription mode,Guid rhinoViewportId)
: By default, objects are drawn using the display mode of the viewport that
     the object is being drawn in. Setting a specific display mode, instructs
     Rhino to always use that display mode, regardless of the viewport's mode.
     This version sets a display mode for a specific viewport.
: Returns - True on success.

bool SetUserString(string key,string value)
: Attach a user string (key,value combination) to this geometry.
: Returns - True on success.

bool Transform(Transform xform)
: Apply a transformation.
: Returns - trueif successful, False otherwise.
: since 6.0
