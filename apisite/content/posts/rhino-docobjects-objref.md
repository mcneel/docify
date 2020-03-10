---
title: "ObjRef"
draft: false
---

*Namespace: Rhino.DocObjects*

   Represents a reference to a Rhino object.
   
## Constructors
#### Rhino.DocObjects.ObjRef(Guid id)
- (summary) 
     Initializes a new object reference from a globally unique identifier ().
     
- (since) 5.0
#### Rhino.DocObjects.ObjRef(Guid id,ComponentIndex ci)
- (summary) 
     Initializes a new object reference from a guid and component index. The
     component index is used to specify a "piece" of the geometry
     
- (since) 7.0
#### Rhino.DocObjects.ObjRef(RhinoObject rhinoObject)
- (summary) 
     Initializes a new object reference from a Rhino object.
     
- (since) 5.0
#### Rhino.DocObjects.ObjRef(RhinoObject rhinoObject,PickContext pickContext)
- (summary) 
     Initialized a new object reference from a Rhino object and pick context
     
- (since) 5.0
## Properties
#### ComponentIndex GeometryComponentIndex
- (summary) 
     Gets the component index of the referenced (sub) geometry.
     Some objects have subobjects that are valid pieces of geometry. For
     example, breps have edges and faces that are valid curves and surfaces.
     Each subobject has a component index that is > 0. The parent
     geometry has a component index = -1.
     
- (since) 5.0
#### Guid ObjectId
- (summary) Returns the id of the referenced Rhino object.
- (since) 5.0
#### uint RuntimeSerialNumber
- (summary) 
     If > 0, then this is the value of a Rhino object's serial number field.
     The serial number is used instead of the pointer to prevent crashes in
     cases when the RhinoObject is deleted but an ObjRef continues to reference
     the Rhino object. The value of RuntimeSerialNumber is not saved in archives
     because it generally changes if you save and reload an archive.
     
- (since) 5.0
## Methods
#### Brep Brep()
- (summary) 
      Gets the brep if this reference geometry is one.
     
- (since) 5.0
- (returns) Brep This is some return comment
#### ClippingPlaneSurface ClippingPlaneSurface()
- (summary) 
     Gets the clipping plane surface if this reference targeted one.
     
- (since) 5.0
- (returns) ClippingPlaneSurface This is some return comment
#### Curve Curve()
- (summary) 
     Gets the curve if this reference targeted one.
     
- (since) 5.0
- (returns) Curve This is some return comment
#### Curve CurveParameter(double parameter)
- (summary) 
     If the reference geometry is a curve or edge with a selection
     point, then this gets the parameter of the selection point.
     
- (since) 5.0
- (returns) Curve This is some return comment
#### void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
#### BrepEdge Edge()
- (summary) 
     Gets the edge if this reference geometry is one.
     
- (since) 5.0
- (returns) BrepEdge This is some return comment
#### BrepFace Face()
- (summary) 
     If the referenced geometry is a brep face, a brep with one face, or
     a surface, this returns the brep face.
     
- (since) 5.0
- (returns) BrepFace This is some return comment
#### GeometryBase Geometry()
- (summary) 
     Gets the geometry linked to the object targeted by this reference.
     
- (since) 5.0
- (returns) GeometryBase This is some return comment
#### Hatch Hatch()
- (summary) 
     Gets the hatch if the referenced geometry is one.
     
- (since) 5.0
- (returns) Hatch This is some return comment
#### RhinoObject InstanceDefinitionPart()
- (summary) 
     If subobject selection is enabled and a piece of an instance reference
     is selected, this will return the selected piece.
     
- (since) 6.0
- (returns) RhinoObject This is some return comment
#### Light Light()
- (summary) 
     Gets the light if the referenced geometry is one.
     
- (since) 5.0
- (returns) Light This is some return comment
#### Mesh Mesh()
- (summary) 
     Gets the mesh if the referenced geometry is one.
     
- (since) 5.0
- (returns) Mesh This is some return comment
#### RhinoObject Object()
- (summary) Returns the referenced Rhino object.
- (since) 5.0
- (returns) RhinoObject This is some return comment
#### Point Point()
- (summary) 
     Gets the point if the referenced geometry is one.
     
- (since) 5.0
- (returns) Point This is some return comment
#### PointCloud PointCloud()
- (summary) 
     Gets the point cloud if the referenced geometry is one.
     
- (since) 5.0
- (returns) PointCloud This is some return comment
#### SelectionMethod SelectionMethod()
- (summary) 
     Gets the method used to select this object.
     
- (since) 5.0
- (returns) SelectionMethod This is some return comment
#### Point3d SelectionPoint()
- (summary) 
     If the object was selected by picking a point on it, then
     SelectionPoint() returns the point where the selection
     occured, otherwise it returns Point3d.Unset.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### RhinoView SelectionView()
- (summary) 
     If the object was interactively selected in a particular viewport, then
     SelectionView() returns the view where the object was selected.
     
- (since) 6.5
- (returns) RhinoView This is some return comment
#### uint SelectionViewDetailSerialNumber()
- (summary) 
     If the object was interactively selected in a page space detail
     view, then SelectionViewDetailSerialNumber() returns the CRhinoObject
     serial number of the detail view object.  Use SelectionView()
     to get the page view that contains the detail view object.
     If SelectionViewDetailSerialNumber() returns 0, then the selection
     did not happen in a detail view.
     
- (since) 6.5
- (returns) uint This is some return comment
#### void SetSelectionComponent(ComponentIndex componentIndex)
- (summary) 
     When an object is selected by picking a sub-object, SetSelectionComponent
     may be used to identify the sub-object.
     
- (since) 5.0
- (returns) void This is some return comment
#### SubD SubD()
- (summary) 
     Gets the SubD if the referenced geometry is one.
     
- (since) 7.0
- (returns) SubD This is some return comment
#### Surface Surface()
- (summary) 
     Gets the surface if the referenced geometry is one.
     
- (since) 5.0
- (returns) Surface This is some return comment
#### Surface SurfaceParameter(double u,double v)
- (summary) 
     If the reference geometry is a surface, brep with one face,
     or surface edge with a selection point, then this gets the 
     surface paramters of the selection point.
     
- (since) 5.0
- (returns) Surface This is some return comment
#### TextDot TextDot()
- (summary) 
     Gets the text dot if the referenced geometry is one.
     
- (since) 5.0
- (returns) TextDot This is some return comment
#### TextEntity TextEntity()
- (summary) 
     Gets the text entity if the referenced geometry is one.
     
- (since) 5.0
- (returns) TextEntity This is some return comment
#### BrepTrim Trim()
- (summary) 
     If the referenced geometry is an edge of a surface,
     this returns the associated brep trim.
     
- (since) 5.8
- (returns) BrepTrim This is some return comment
