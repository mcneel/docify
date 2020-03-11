---
title: "ObjRef"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Represents a reference to a Rhino object.
```cs
public class ObjRef : IDisposable
```
## Constructors

ObjRef(Guid id)
: Initializes a new object reference from a globally unique identifier ().

ObjRef(Guid id,ComponentIndex ci)
: Initializes a new object reference from a guid and component index. The
     component index is used to specify a "piece" of the geometry
: since 7.0

ObjRef(RhinoObject rhinoObject)
: Initializes a new object reference from a Rhino object.

ObjRef(RhinoObject rhinoObject,PickContext pickContext)
: Initialized a new object reference from a Rhino object and pick context
## Properties

[ComponentIndex](/rhinocommon/rhino/geometry/componentindex/) GeometryComponentIndex
: Gets the component index of the referenced (sub) geometry.
     Some objects have subobjects that are valid pieces of geometry. For
     example, breps have edges and faces that are valid curves and surfaces.
     Each subobject has a component index that is > 0. The parent
     geometry has a component index = -1.

Guid ObjectId
: Returns the id of the referenced Rhino object.

uint RuntimeSerialNumber
: If > 0, then this is the value of a Rhino object's serial number field.
     The serial number is used instead of the pointer to prevent crashes in
     cases when the RhinoObject is deleted but an ObjRef continues to reference
     the Rhino object. The value of RuntimeSerialNumber is not saved in archives
     because it generally changes if you save and reload an archive.
## Methods

[Brep](/rhinocommon/rhino/geometry/brep/) Brep()
: Gets the brep if this reference geometry is one.
: Returns - A boundary representation; or None on error.

[ClippingPlaneSurface](/rhinocommon/rhino/geometry/clippingplanesurface/) ClippingPlaneSurface()
: Gets the clipping plane surface if this reference targeted one.
: Returns - A clipping plane surface, or None if this reference targeted something else.

[Curve](/rhinocommon/rhino/geometry/curve/) Curve()
: Gets the curve if this reference targeted one.
: Returns - A curve, or None if this reference targeted something else.

[Curve](/rhinocommon/rhino/geometry/curve/) CurveParameter(double parameter)
: If the reference geometry is a curve or edge with a selection
     point, then this gets the parameter of the selection point.
: Returns - If the selection point was on a curve or edge, then the
     curve/edge is returned, otherwise null.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

[BrepEdge](/rhinocommon/rhino/geometry/brepedge/) Edge()
: Gets the edge if this reference geometry is one.
: Returns - A boundary representation edge; or None on error.

[BrepFace](/rhinocommon/rhino/geometry/brepface/) Face()
: If the referenced geometry is a brep face, a brep with one face, or
     a surface, this returns the brep face.
: Returns - A boundary representation face; or None on error.

[GeometryBase](/rhinocommon/rhino/geometry/geometrybase/) Geometry()
: Gets the geometry linked to the object targeted by this reference.
: Returns - The geometry.

[Hatch](/rhinocommon/rhino/geometry/hatch/) Hatch()
: Gets the hatch if the referenced geometry is one.
: Returns - A hatch; or None if the referenced object is not a hatch

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/) InstanceDefinitionPart()
: If subobject selection is enabled and a piece of an instance reference
     is selected, this will return the selected piece.
: since 6.0

[Light](/rhinocommon/rhino/geometry/light/) Light()
: Gets the light if the referenced geometry is one.
: Returns - A light; or None if the referenced object is not a light, or on error.

[Mesh](/rhinocommon/rhino/geometry/mesh/) Mesh()
: Gets the mesh if the referenced geometry is one.
: Returns - A mesh; or None if the referenced object is not a mesh, or on error.

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/) Object()
: Returns the referenced Rhino object.

[Point](/rhinocommon/unsafenativemethods/point/) Point()
: Gets the point if the referenced geometry is one.
: Returns - A point; or None if the referenced object is not a point, or on error.

[PointCloud](/rhinocommon/rhino/geometry/pointcloud/) PointCloud()
: Gets the point cloud if the referenced geometry is one.
: Returns - A point cloud; or None if the referenced object is not a point cloud, or on error.

[SelectionMethod](/rhinocommon/rhino/docobjects/selectionmethod/) SelectionMethod()
: Gets the method used to select this object.
: Returns - The method used to select this object.

[Point3d](/rhinocommon/rhino/geometry/point3d/) SelectionPoint()
: If the object was selected by picking a point on it, then
     SelectionPoint() returns the point where the selection
     occured, otherwise it returns Point3d.Unset.
: Returns - The point where the selection occured or Point3d.Unset on failure.

[RhinoView](/rhinocommon/rhino/display/rhinoview/) SelectionView()
: If the object was interactively selected in a particular viewport, then
     SelectionView() returns the view where the object was selected.
: since 6.5

uint SelectionViewDetailSerialNumber()
: If the object was interactively selected in a page space detail
     view, then SelectionViewDetailSerialNumber() returns the CRhinoObject
     serial number of the detail view object.  Use SelectionView()
     to get the page view that contains the detail view object.
     If SelectionViewDetailSerialNumber() returns 0, then the selection
     did not happen in a detail view.
: since 6.5

void SetSelectionComponent(ComponentIndex componentIndex)
: When an object is selected by picking a sub-object, SetSelectionComponent
     may be used to identify the sub-object.

[SubD](/rhinocommon/rhino/geometry/subd/) SubD()
: Gets the SubD if the referenced geometry is one.
: Returns - A SubD; or None if the referenced object is not a SubD, or on error.
: since 7.0

[Surface](/rhinocommon/rhino/geometry/surface/) Surface()
: Gets the surface if the referenced geometry is one.
: Returns - A surface; or None if the referenced object is not a surface, or on error.

[Surface](/rhinocommon/rhino/geometry/surface/) SurfaceParameter(double u,double v)
: If the reference geometry is a surface, brep with one face,
     or surface edge with a selection point, then this gets the 
     surface paramters of the selection point.
: Returns - If the selection point was on a surface, then the surface is returned.

[TextDot](/rhinocommon/rhino/geometry/textdot/) TextDot()
: Gets the text dot if the referenced geometry is one.
: Returns - A text dot; or None if the referenced object is not a text dot, or on error.

[TextEntity](/rhinocommon/rhino/geometry/textentity/) TextEntity()
: Gets the text entity if the referenced geometry is one.
: Returns - A text entity; or None if the referenced object is not a text entity, or on error.

[BrepTrim](/rhinocommon/rhino/geometry/breptrim/) Trim()
: If the referenced geometry is an edge of a surface,
     this returns the associated brep trim.
: Returns - A boundary representation trim; or None on error
: since 5.8
