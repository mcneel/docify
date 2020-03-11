---
title: "ObjectTable"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

```cs
public class ObjectTable :
    RhinoDocCommonTable<RhinoObject>,
    ICollection<RhinoObject>
```
## Properties

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox
: Gets the boundingbox for all objects (normal, locked and hidden) in this
     document that exist in "model" space. This bounding box does not include
     objects that exist in layout space.

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBoxVisible
: Gets the boundingbox for all visible objects (normal and locked) in this
     document that exist in "model" space. This bounding box does not include
     hidden objects or any objects that exist in layout space.

ModelComponentType ComponentType
: 
: since 6.0

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Gets the document that owns this object table.

int HistoryRecordCount
: Returns the amount of history records in this document.
: since 6.0
## Methods

Guid Add(GeometryBase geometry)
: Adds geometry that is not further specified.
     This is meant, for example, to handle addition of sets of different geometrical entities.
: Returns - The new object ID on success.

Guid Add(GeometryBase geometry,ObjectAttributes attributes)
: Adds geometry that is not further specified.
     This is meant, for example, to handle addition of sets of different geometrical entities.
: Returns - The new object ID on success.

Guid Add(GeometryBase geometry,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds geometry that is not further specified.
     This is meant, for example, to handle addition of sets of different geometrical entities.
: Returns - The new object ID on success.
: since 6.0

Guid AddAngularDimension(AngularDimension dimension)
: Adds a angular dimension object to the document.
: Returns - The Id of the newly added object or Guid.Empty on failure.

Guid AddAngularDimension(AngularDimension dimension,ObjectAttributes attributes)
: Adds a angular dimension object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddAngularDimension(AngularDimension dimension,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds an angular dimension object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddArc(Arc arc)
: Adds a curve object to the document representing an arc.
: Returns - A unique identifier for the object.

Guid AddArc(Arc arc,ObjectAttributes attributes)
: Adds a curve object to the document representing an arc.
: Returns - A unique identifier for the object.

Guid AddArc(Arc arc,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddBox(Box box)
: Adds a box to the object table.
: Returns - The ID.
: since 6.0

Guid AddBox(Box box,ObjectAttributes attributes)
: Adds a box to the object table.
: Returns - The ID.
: since 6.0

Guid AddBox(Box box,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds a box to the object table, as an extrusion.
: Returns - The ID.
: since 6.0

Guid AddBrep(Brep brep)
: Adds a brep object to Rhino.
: Returns - A unique identifier for the object.

Guid AddBrep(Brep brep,ObjectAttributes attributes)
: Adds a brep object to Rhino.
: Returns - A unique identifier for the object.

Guid AddBrep(Brep brep,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddBrep(Brep brep,ObjectAttributes attributes,HistoryRecord history,bool reference,bool splitKinkySurfaces)
: 

Guid AddCentermark(Centermark centermark,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds an ordinate dimension object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.
: since 6.0

Guid AddCircle(Circle circle)
: Adds a curve object to the document representing a circle.
: Returns - A unique identifier for the object.

Guid AddCircle(Circle circle,ObjectAttributes attributes)
: Adds a curve object to the document representing a circle.
: Returns - A unique identifier for the object.

Guid AddCircle(Circle circle,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,Guid clippedViewportId)
: Adds a clipping plane object to Rhino.
: Returns - A unique identifier for the object.

Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,Guid clippedViewportId,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,IEnumerable<Guid> clippedViewportIds)
: Adds a clipping plane object to Rhino.
: Returns - A unique identifier for the object.

Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,IEnumerable<Guid> clippedViewportIds,ObjectAttributes attributes)
: Adds a clipping plane object to Rhino.
: Returns - A unique identifier for the object.

Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,IEnumerable<Guid> clippedViewportIds,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddCurve(Curve curve)
: Adds a curve object to Rhino.
: Returns - A unique identifier for the object.

Guid AddCurve(Curve curve,ObjectAttributes attributes)
: Adds a curve object to Rhino.
: Returns - A unique identifier for the object.

Guid AddCurve(Curve curve,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddEllipse(Ellipse ellipse)
: Adds a curve object to the document representing an ellipse.
: Returns - A unique identifier for the object.

Guid AddEllipse(Ellipse ellipse,ObjectAttributes attributes)
: Adds a curve object to the document representing an ellipse.
: Returns - A unique identifier for the object.

Guid AddEllipse(Ellipse ellipse,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid[] AddExplodedInstancePieces(InstanceObject instance,bool explodeNestedInstances,bool deleteInstance)
: 
: since 5.11

Guid AddExtrusion(Extrusion extrusion)
: Adds an extrusion object to Rhino.
: Returns - A unique identifier for the object.

Guid AddExtrusion(Extrusion extrusion,ObjectAttributes attributes)
: Adds an extrusion object to Rhino.
: Returns - A unique identifier for the object.

Guid AddExtrusion(Extrusion extrusion,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddHatch(Hatch hatch)
: 

Guid AddHatch(Hatch hatch,ObjectAttributes attributes)
: 

Guid AddHatch(Hatch hatch,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddInstanceObject(int instanceDefinitionIndex,Transform instanceXform)
: Adds an instance object to the document.
: Returns - A unique identifier for the object if successful. Guid.Empty it not successful.

Guid AddInstanceObject(int instanceDefinitionIndex,Transform instanceXform,ObjectAttributes attributes)
: Adds an instance object to the document.
: Returns - A unique identifier for the object if successful. Guid.Empty it not successful.

Guid AddInstanceObject(int instanceDefinitionIndex,Transform instanceXform,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds an instance object to the document.
: Returns - A unique identifier for the object if successful. Guid.Empty it not successful.
: since 6.24

Guid AddLeader(IEnumerable<Point3d> points)
: 

Guid AddLeader(Leader leader)
: Adds a Leader object to the document.
: Returns - The Id of the newly added object or Guid.Empty on failure.
: since 6.0

Guid AddLeader(Leader leader,ObjectAttributes attributes)
: Addsa Leader object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.
: since 6.0

Guid AddLeader(Leader leader,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds a Leader object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.
: since 6.0

Guid AddLeader(Plane plane,IEnumerable<Point2d> points)
: 

Guid AddLeader(Plane plane,IEnumerable<Point2d> points,ObjectAttributes attributes)
: 

Guid AddLeader(string text,IEnumerable<Point3d> points)
: 

Guid AddLeader(string text,Plane plane,IEnumerable<Point2d> points)
: 

Guid AddLeader(string text,Plane plane,IEnumerable<Point2d> points,ObjectAttributes attributes)
: 

Guid AddLeader(string text,Plane plane,IEnumerable<Point2d> points,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddLine(Line line)
: Adds a line object to Rhino.
: Returns - A unique identifier for the object.

Guid AddLine(Line line,ObjectAttributes attributes)
: Adds a line object to Rhino.
: Returns - A unique identifier for the object.

Guid AddLine(Point3d from,Point3d to)
: Adds a line object to Rhino.
: Returns - A unique identifier for the object.

Guid AddLine(Point3d from,Point3d to,ObjectAttributes attributes)
: Adds a line object to Rhino.
: Returns - A unique identifier for the object.

Guid AddLine(Point3d from,Point3d to,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddLinearDimension(LinearDimension dimension)
: Adds a linear dimension object to the document.
: Returns - The Id of the newly added object or Guid.Empty on failure.

Guid AddLinearDimension(LinearDimension dimension,ObjectAttributes attributes)
: Adds a linear dimension object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddLinearDimension(LinearDimension dimension,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds a linear dimension object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddMesh(Mesh mesh)
: Adds a mesh object to Rhino.
: Returns - A unique identifier for the object.

Guid AddMesh(Mesh mesh,ObjectAttributes attributes)
: Adds a mesh object to Rhino.
: Returns - A unique identifier for the object.

Guid AddMesh(Mesh mesh,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddMesh(Mesh mesh,ObjectAttributes attributes,HistoryRecord history,bool reference,bool requireValidMesh)
: 
: since 6.0

Guid AddMorphControl(MorphControl morphControl)
: 

Guid AddMorphControl(MorphControl morphControl,ObjectAttributes attributes)
: 

Guid AddMorphControl(MorphControl morphControl,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 
: since 6.0

Guid AddOrdinateDimension(OrdinateDimension dimordinate,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds an ordinate dimension object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.
: since 6.0

Guid AddPictureFrame(Plane plane,string texturePath,bool asMesh,double width,double height,bool selfIllumination,bool embedBitmap)
: Creates a PictureFrame object from a plane and a path to an image file,
     Note, a PictureFrame object is just a Plane surface or mesh that has a
     material with a texture assigned to it that displays in all display
     modes.
: Returns - A unique identifier for the object
: since 5.10

Guid AddPoint(double x,double y,double z)
: Adds a point object to the document.
: Returns - A unique identifier for the object..

Guid AddPoint(Point point,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds a point object and its geometry-linked information to the document
: Returns - A unique identifier for the object.
: since 6.0

Guid AddPoint(Point3d point)
: Adds a point object to the document.
: Returns - A unique identifier for the object.

Guid AddPoint(Point3d point,ObjectAttributes attributes)
: Adds a point object to the document.
: Returns - A unique identifier for the object.

Guid AddPoint(Point3d point,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds a point object to the document
: Returns - A unique identifier for the object.

Guid AddPoint(Point3f point)
: Adds a point object to the document.
: Returns - A unique identifier for the object.

Guid AddPoint(Point3f point,ObjectAttributes attributes)
: Adds a point object to the document.
: Returns - A unique identifier for the object.

Guid AddPointCloud(IEnumerable<Point3d> points)
: Adds a point cloud object to the document.
: Returns - A unique identifier for the object.

Guid AddPointCloud(IEnumerable<Point3d> points,ObjectAttributes attributes)
: Adds a point cloud object to the document.
: Returns - A unique identifier for the object.

Guid AddPointCloud(IEnumerable<Point3d> points,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds a point cloud object to the document.
: Returns - A unique identifier for the object.

Guid AddPointCloud(PointCloud cloud)
: Adds a point cloud object to the document.
: Returns - A unique identifier for the object.

Guid AddPointCloud(PointCloud cloud,ObjectAttributes attributes)
: Adds a point cloud object to the document.
: Returns - A unique identifier for the object.

Guid AddPointCloud(PointCloud cloud,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds a point cloud object to the document.
: Returns - A unique identifier for the object.

RhinoList<Guid> AddPoints(IEnumerable<Point3d> points)
: Adds multiple points to the document.
: Returns - List of object ids.

RhinoList<Guid> AddPoints(IEnumerable<Point3d> points,ObjectAttributes attributes)
: Adds multiple points to the document.
: Returns - List of object ids.

RhinoList<Guid> AddPoints(IEnumerable<Point3f> points)
: Adds multiple points to the document.
: Returns - List of object ids.

RhinoList<Guid> AddPoints(IEnumerable<Point3f> points,ObjectAttributes attributes)
: Adds multiple points to the document.
: Returns - List of object ids.

Guid AddPolyline(IEnumerable<Point3d> points)
: Adds a polyline object to Rhino.
: Returns - A unique identifier for the object.

Guid AddPolyline(IEnumerable<Point3d> points,ObjectAttributes attributes)
: Adds a polyline object to Rhino.
: Returns - A unique identifier for the object.

Guid AddPolyline(IEnumerable<Point3d> points,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddRadialDimension(RadialDimension dimension)
: 

Guid AddRadialDimension(RadialDimension dimension,ObjectAttributes attributes)
: 

Guid AddRadialDimension(RadialDimension dimension,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds a radial dimension object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddRectangle(Rectangle3d rectangle)
: Adds a rectangle to the object table.
: Returns - The ID.
: since 6.0

Guid AddRectangle(Rectangle3d rectangle,ObjectAttributes attributes)
: Adds a rectangle to the object table.
: Returns - The ID.
: since 6.0

Guid AddRectangle(Rectangle3d rectangle,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds a rectangle to the object table.
: Returns - The ID.
: since 6.0

void AddRhinoObject(BrepObject brepObject,Brep brep)
: 

void AddRhinoObject(CurveObject curveObject,Curve curve)
: 

void AddRhinoObject(CustomBrepObject brepObject)
: 

void AddRhinoObject(CustomBrepObject brepObject,HistoryRecord history)
: 
: since 6.1

void AddRhinoObject(CustomCurveObject curveObject,HistoryRecord history)
: 
: since 6.1

void AddRhinoObject(CustomMeshObject meshObject)
: 

void AddRhinoObject(CustomMeshObject meshObject,HistoryRecord history)
: 
: since 6.1

void AddRhinoObject(CustomPointObject pointObject)
: 
: since 5.6

void AddRhinoObject(CustomPointObject pointObject,HistoryRecord history)
: 
: since 6.1

void AddRhinoObject(MeshObject meshObject,Mesh mesh)
: 

void AddRhinoObject(PointObject pointObject,Point point)
: 
: since 5.6

Guid AddSphere(Sphere sphere)
: 

Guid AddSphere(Sphere sphere,ObjectAttributes attributes)
: 

Guid AddSphere(Sphere sphere,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddSubD(SubD subD)
: Adds a SubD object to Rhino.
: Returns - A unique identifier for the object.
: since 7.0

Guid AddSubD(SubD subD,ObjectAttributes attributes)
: Adds a SubD object to Rhino.
: Returns - A unique identifier for the object.
: since 7.0

Guid AddSubD(SubD subD,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds a SubD object to Rhino.
: Returns - A unique identifier for the object.
: since 7.0

Guid AddSurface(Surface surface)
: Adds a surface object to Rhino.
: Returns - A unique identifier for the object.

Guid AddSurface(Surface surface,ObjectAttributes attributes)
: Adds a surface object to Rhino.
: Returns - A unique identifier for the object.

Guid AddSurface(Surface surface,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic)
: Adds an annotation text object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic,ObjectAttributes attributes)
: Adds an annotation text object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic,TextJustification justification)
: 

Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic,TextJustification justification,ObjectAttributes attributes)
: 

Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic,TextJustification justification,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

Guid AddText(Text3d text3d)
: Adds an annotation text object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddText(Text3d text3d,ObjectAttributes attributes)
: Adds an annotation text object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddText(TextEntity text)
: Adds a v6_TextObject to the document.
: Returns - The Id of the newly added object or Guid.Empty on failure.

Guid AddText(TextEntity text,ObjectAttributes attributes)
: Adds a text object to the document.
: Returns - The Id of the newly added object or Guid.Empty on failure.

Guid AddText(TextEntity text,ObjectAttributes attributes,HistoryRecord history,bool reference)
: Adds a text object to the document.
: Returns - The Id of the newly added object or Guid.Empty on failure.

Guid AddTextDot(string text,Point3d location)
: Adds a text dot object to Rhino.
: Returns - A unique identifier for the object.

Guid AddTextDot(string text,Point3d location,ObjectAttributes attributes)
: Adds a text dot object to Rhino.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddTextDot(TextDot dot)
: Adds a text dot object to Rhino.
: Returns - A unique identifier for the object.

Guid AddTextDot(TextDot dot,ObjectAttributes attributes)
: Adds a text dot object to Rhino.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddTextDot(TextDot dot,ObjectAttributes attributes,HistoryRecord history,bool reference)
: 

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] AllObjectsSince(uint runtimeSerialNumber)
: Gets all the objects that have been added to the document since a given runtime serial number.
: Returns - An array of objects or None if no objects were added since the given runtime serial number.

bool Delete(Guid objectId,bool quiet)
: Deletes object from document. The deletion can be undone by calling UndeleteObject().
: Returns - True on success, False on failure.

int Delete(IEnumerable<Guid> objectIds,bool quiet)
: Deletes a collection of objects from the document.
: Returns - The number of successfully deleted objects.

bool Delete(ObjRef objref,bool quiet)
: Deletes objref.Object(). The deletion can be undone by calling UndeleteObject().
: Returns - True on success, False on failure.

bool Delete(ObjRef objref,bool quiet,bool ignoreModes)
: Deletes objref.Object(). The deletion can be undone by calling UndeleteObject().
: Returns - True on success, False on failure.
: since 6.0

bool Delete(RhinoObject item)
: Deletes an object, taking into account modes and not showing error message boxes.
: Returns - True on success.
: since 6.0

bool Delete(RhinoObject obj,bool quiet)
: Deletes object from document. The deletion can be undone by calling UndeleteObject().
: Returns - True on success, False on failure.

bool Delete(RhinoObject obj,bool quiet,bool ignoreModes)
: Deletes object from document. The deletion can be undone by calling UndeleteObject().
: Returns - True on success, False on failure.
: since 6.0

bool DeleteGrip(GripObject grip)
: Deletes a grip object.
: Returns - True on success.
: since 6.5

bool DeleteGrip(Guid gripId)
: Deletes a grip object.
: Returns - True on success.
: since 6.5

bool DeleteGrip(ObjRef gripRef)
: Deletes a grip object.
: Returns - True on success.
: since 6.5

int DeleteGrips(IEnumerable<GripObject> grips)
: Deletes one or more grip objects.
: Returns - The number of successfully deleted grip objects.
: since 6.5

int DeleteGrips(IEnumerable<Guid> gripIds)
: Deletes one or more grip objects.
: Returns - The number of successfully deleted grip objects.
: since 6.5

int DeleteGrips(IEnumerable<ObjRef> gripRefs)
: Deletes one or more grip objects.
: Returns - The number of successfully deleted grip objects.
: since 6.5

int DeleteGrips(RhinoObject owner,IEnumerable<int> gripIndices)
: Deletes one or more grip objects.
: Returns - The number of successfully deleted grip objects.
: since 6.5

Guid Duplicate(Guid objectId)
: Same as TransformObject(objref, ON_Xform.Identity, false)
: Returns - The new object ID.

Guid Duplicate(ObjRef objref)
: Duplicates the object that is referenced by objref.
     Same as Transform(objref, Transform.Identity, false)
: Returns - The new object ID.

Guid Duplicate(RhinoObject obj)
: Duplicates the object that is referenced by obj.
     Same as TransformObject(obj, Transform.Identityy, false)
: Returns - The new object ID.

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/) Find(Guid objectId)
: Please use FindId().
: Returns - Do not use this method.

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/) Find(uint runtimeSerialNumber)
: Use the object runtime serial number to find a rhino object in the document. This is the value stored on
     RhinoObject.RuntimeObjectSerialNumber. The RhinoObject constructor sets the runtime serial number and every
     instance of a RhinoObject class will have a unique serial number for the duration of the Rhino application.
     If an object is replaced with a new object, then the new object will have a different runtime serial number.
     Deleted objects stored in the undo list maintain their runtime serial numbers and this funtion will return
     pointers to these objects. Call RhinoObject.IsDeleted if you need to determine if the returned object is
     active or deleted.  The runtime serial number is not saved in files.
: Returns - Reference to the rhino object with the objectId or None if no such object could be found.

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] FindByCrossingWindowRegion(RhinoViewport viewport,IEnumerable<Point3d> region,bool inside,ObjectType filter)
: Finds objects bounded by a polyline region
: Returns - An array of RhinoObjects that are inside of this region
: since 5.7

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] FindByCrossingWindowRegion(RhinoViewport viewport,Point2d screen1,Point2d screen2,bool inside,ObjectType filter)
: Finds objects bounded by a region
: Returns - An array of RhinoObjects that are inside of this region
: since 5.8

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] FindByDrawColor(Color drawColor,bool includeLights)
: Finds all objects whose draw color matches a given color.
: Returns - An array of Rhino document objects. This array can be empty.

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] FindByFilter(ObjectEnumeratorSettings filter)
: Same as GetObjectList but converts the result to an array.
: Returns - A Rhino object array. This array can be emptry but not null.

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] FindByGroup(int groupIndex)
: Finds all RhinoObjects that are in a given group.
: Returns - An array of objects that belong to the specified group or None if no objects could be found.

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] FindByLayer(Layer layer)
: Finds all RhinoObjects that are in a given layer.
: Returns - Array of objects that belong to the specified group or None if no objects could be found.

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] FindByLayer(string layerName)
: Finds all RhinoObjects that are in a given layer.
: Returns - Array of objects that belong to the specified group or None if no objects could be found.

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] FindByObjectType(ObjectType typeFilter)
: 

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] FindByUserString(string key,string value,bool caseSensitive)
: Finds all objects whose UserString matches the search patterns.
: Returns - An array of all objects whose UserString matches with the search patterns or None when no such objects could be found.

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] FindByUserString(string key,string value,bool caseSensitive,bool searchGeometry,bool searchAttributes,ObjectEnumeratorSettings filter)
: Finds all objects whose UserString matches the search patterns.
: Returns - An array of all objects whose UserString matches with the search patterns or None when no such objects could be found.

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] FindByUserString(string key,string value,bool caseSensitive,bool searchGeometry,bool searchAttributes,ObjectType filter)
: Finds all objects whose UserString matches the search patterns.
: Returns - An array of all objects whose UserString matches with the search patterns or None when no such objects could be found.

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] FindByWindowRegion(RhinoViewport viewport,IEnumerable<Point3d> region,bool inside,ObjectType filter)
: Finds objects bounded by a polyline region
: Returns - An array of RhinoObjects that are inside of this region
: since 5.7

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] FindByWindowRegion(RhinoViewport viewport,Point2d screen1,Point2d screen2,bool inside,ObjectType filter)
: Finds objects bounded by a polyline region
: Returns - An array of RhinoObjects that are inside of this region
: since 5.8

[ClippingPlaneObject](/rhinocommon/rhino/docobjects/clippingplaneobject/)[] FindClippingPlanesForViewport(RhinoViewport viewport)
: Finds all of the clipping plane objects that actively clip a viewport.
: Returns - An array of clipping plane objects. The array can be emptry but not null.

[GeometryBase](/rhinocommon/rhino/geometry/geometrybase/) FindGeometry(Guid id)
: Same as FindId, but returns the Geometry property directly, if it exists.
: Returns - Reference to the geometry in the rhino object with the objectId or None if no such object could be found.
: since 6.0

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/) FindId(Guid id)
: Uses the object guid to find a rhino object. Deleted objects cannot be found by id.
     The guid is the value that is stored on RhinoObject.Id
     In a single document, no two active objects have the same guid. If an object is
     replaced with a new object, then the guid  persists. For example, if the _Move command
     moves an object, then the moved object inherits it's guid from the starting object.
     If the Copy command copies an object, then the copy gets a new guid. This guid persists
     through file saving/openning operations. This function will not find grip objects.
: Returns - Reference to the rhino object with the objectId or None if no such object could be found.
: since 6.0

IEnumerator<RhinoObject> GetEnumerator()
: 

IEnumerable<RhinoObject> GetObjectList(ObjectEnumeratorSettings settings)
: 

IEnumerable<RhinoObject> GetObjectList(ObjectType typeFilter)
: 

IEnumerable<RhinoObject> GetObjectList(Type typeFilter)
: 

IEnumerable<T> GetObjectsByType()
: 
: since 6.0

IEnumerable<T> GetObjectsByType(ObjectEnumeratorSettings settings)
: 
: since 6.0

IEnumerable<RhinoObject> GetSelectedObjects(bool includeLights,bool includeGrips)
: 

[ObjectType](/rhinocommon/rhino/docobjects/objecttype/) GetSelectedObjectTypes()
: 
: since 6.0

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/) GripUpdate(RhinoObject obj,bool deleteOriginal)
: Altered grip positions on a RhinoObject are used to calculate an updated object
     that is added to the document.
: Returns - new RhinoObject on success; otherwise null.

bool Hide(Guid objectId,bool ignoreLayerMode)
: If Object().IsNormal() is true, then the object will be hidden.
: Returns - True if the object was successfully hidden.

bool Hide(ObjRef objref,bool ignoreLayerMode)
: If objref.Object().IsNormal() is true, then the object will be hidden.
: Returns - True if the object was successfully hidden.

bool Hide(RhinoObject obj,bool ignoreLayerMode)
: If obj.IsNormal() is true, then the object will be hidden.
: Returns - True if the object was successfully hidden.

bool Lock(Guid objectId,bool ignoreLayerMode)
: If objref.Object().IsNormal() is true, then the object will be locked.
: Returns - True if the object was successfully locked.

bool Lock(ObjRef objref,bool ignoreLayerMode)
: If objref.Object().IsNormal() is true, then the object will be locked.
: Returns - True if the object was successfully locked.

bool Lock(RhinoObject obj,bool ignoreLayerMode)
: If obj.IsNormal() is true, then the object will be locked.
: Returns - True if the object was successfully locked.

bool ModifyAttributes(Guid objectId,ObjectAttributes newAttributes,bool quiet)
: Modifies an object's attributes.  Cannot be used to change object id.
: Returns - True if successful.

bool ModifyAttributes(ObjRef objref,ObjectAttributes newAttributes,bool quiet)
: Modifies an object's attributes.  Cannot be used to change object id.
: Returns - True if successful.

bool ModifyAttributes(RhinoObject obj,ObjectAttributes newAttributes,bool quiet)
: Modifies an object's attributes.  Cannot be used to change object id.
: Returns - True if successful.

bool ModifyRenderMaterial(Guid objectId,RenderMaterial material)
: Modifies an object's render material assignment, this will set the
     objects material source to ObjectMaterialSource.MaterialFromObject.
: Returns - Returns True on success otherwise returns false.
: since 5.7

bool ModifyRenderMaterial(ObjRef objRef,RenderMaterial material)
: Modifies an object's render material assignment, this will set the
     objects material source to ObjectMaterialSource.MaterialFromObject.
: Returns - Returns True on success otherwise returns false.
: since 5.7

bool ModifyRenderMaterial(RhinoObject obj,RenderMaterial material)
: Modifies an object's render material assignment, this will set the
     objects material source to ObjectMaterialSource.MaterialFromObject.
: Returns - Returns True on success otherwise returns false.
: since 5.7

bool ModifyTextureMapping(Guid objId,int channel,TextureMapping mapping)
: 
: since 5.7

bool ModifyTextureMapping(ObjRef objRef,int channel,TextureMapping mapping)
: 
: since 5.7

bool ModifyTextureMapping(RhinoObject obj,int channel,TextureMapping mapping)
: 
: since 5.7

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/) MostRecentObject()
: Gets the most recently added object that is still in the Document.
: Returns - The most recent (non-deleted) object in the document, or None if no such object exists.

int ObjectCount(ObjectEnumeratorSettings filter)
: 

[ObjRef](/rhinocommon/rhino/docobjects/objref/)[] PickObjects(PickContext pickContext)
: Pick one or more objects based on a given pick context
: Returns - zero or more objects
: since 6.0

bool Purge(RhinoObject rhinoObject)
: Removes object from document and deletes the pointer. Typically you will
     want to call Delete instead in order to keep the object on the undo list.
: Returns - True if the object was purged; otherwise false.

bool Purge(uint runtimeSerialNumber)
: Removes object from document and deletes the pointer. Typically you will
     want to call Delete instead in order to keep the object on the undo list.
: Returns - True if the object was purged; otherwise false.

bool Replace(Guid objectId,Arc arc)
: Replaces one object with new curve object.
: Returns - True if successful.

bool Replace(Guid objectId,Brep brep)
: Replaces one object with new brep object.
: Returns - True if successful.

bool Replace(Guid objectId,Brep brep,bool splitKinkySurfaces)
: 
: since 6.1

bool Replace(Guid objectId,Circle circle)
: Replaces one object with new curve object.
: Returns - True if successful.

bool Replace(Guid objectId,Curve curve)
: Replaces one object with new curve object.
: Returns - True if successful.

bool Replace(Guid objectId,Extrusion extrusion)
: Replaces one object with new extrusion object.
: Returns - True if successful.
: since 6.0

bool Replace(Guid objectId,Hatch hatch)
: Replaces one object with new hatch object.
: Returns - True if successful.
: since 6.1

bool Replace(Guid objectId,Leader leader)
: Replaces one object with new text object.
: Returns - True if successful.
: since 6.0

bool Replace(Guid objectId,Line line)
: Replaces one object with new line curve object.
: Returns - True if successful.

bool Replace(Guid objectId,Mesh mesh)
: Replaces one object with new mesh object.
: Returns - True if successful.

bool Replace(Guid objectId,Point point)
: Replaces one object with new point object.
: Returns - True if successful.
: since 6.0

bool Replace(Guid objectId,Point3d point)
: Replaces one object with new point object.
: Returns - True if successful.

bool Replace(Guid objectId,PointCloud pointcloud)
: Replaces one object with new pointcloud object.
: Returns - True if successful.

bool Replace(Guid objectId,Polyline polyline)
: Replaces one object with new curve object.
: Returns - True if successful.

bool Replace(Guid objectId,SubD subD)
: Replaces one object with new subd object.
: Returns - True if successful.
: since 7.0

bool Replace(Guid objectId,Surface surface)
: Replaces one object with new surface object.
: Returns - True if successful.

bool Replace(Guid objectId,TextDot dot)
: Replaces one object with new textdot object.
: Returns - True if successful.

bool Replace(Guid objectId,TextEntity text)
: Replaces one object with new text object.
: Returns - True if successful.

bool Replace(ObjRef objref,Arc arc)
: Replaces one object with new curve object.
: Returns - True if successful.

bool Replace(ObjRef objref,Brep brep)
: Replaces one object with new brep object.
: Returns - True if successful.

bool Replace(ObjRef objref,Brep brep,bool splitKinkySurfaces)
: 
: since 6.1

bool Replace(ObjRef objref,Circle circle)
: Replaces one object with new curve object.
: Returns - True if successful.

bool Replace(ObjRef objref,Curve curve)
: Replaces one object with new curve object.
: Returns - True if successful.

bool Replace(ObjRef objref,Extrusion extrusion)
: Replaces one object with new extrusion object.
: Returns - True if successful.
: since 6.0

bool Replace(ObjRef objref,Hatch hatch)
: Replaces one object with new hatch object.
: Returns - True if successful.
: since 6.1

bool Replace(ObjRef objref,Leader leader)
: Replaces one object with new text object.
: Returns - True if successful.
: since 6.0

bool Replace(ObjRef objref,Line line)
: Replaces one object with new line curve object.
: Returns - True if successful.

bool Replace(ObjRef objref,Mesh mesh)
: Replaces one object with new mesh object.
: Returns - True if successful.

bool Replace(ObjRef objref,Point point)
: Replaces one object with new point object.
: Returns - True if successful.
: since 6.0

bool Replace(ObjRef objref,Point3d point)
: Replaces one object with new point object.
: Returns - True if successful.

bool Replace(ObjRef objref,PointCloud pointcloud)
: Replaces one object with new pointcloud object.
: Returns - True if successful.

bool Replace(ObjRef objref,Polyline polyline)
: Replaces one object with new curve object.
: Returns - True if successful.

bool Replace(ObjRef objref,RhinoObject newObject)
: Replaces one object with another. Conceptually, this function is the same as calling
     Setting new_object attributes = old_object attributes
     DeleteObject(old_object);
     AddObject(old_object);
: Returns - True if successful.

bool Replace(ObjRef objref,SubD subD)
: Replaces one object with a new SubD object.
: Returns - True if successful.
: since 7.0

bool Replace(ObjRef objref,Surface surface)
: Replaces one object with new surface object.
: Returns - True if successful.

bool Replace(ObjRef objref,TextDot dot)
: Replaces one object with new textdot object.
: Returns - True if successful.

bool Replace(ObjRef objref,TextEntity text)
: Replaces one object with new text object.
: Returns - True if successful.

bool ReplaceInstanceObject(Guid objectId,int instanceDefinitionIndex)
: Replaces the underlying instance definition of an instance object.
: Returns - True if successful.
: since 6.8

bool ReplaceInstanceObject(ObjRef objref,int instanceDefinitionIndex)
: Replaces the underlying instance definition of an instance object.
: Returns - True if successful.
: since 6.8

bool Select(Guid objectId)
: Select a single object.
: Returns - True on success, False on failure.

bool Select(Guid objectId,bool select)
: Select or deselects a single object.
: Returns - True on success, False on failure.

bool Select(Guid objectId,bool select,bool syncHighlight)
: Select or deselects a single object.
: Returns - True on success, False on failure.

bool Select(Guid objectId,bool select,bool syncHighlight,bool persistentSelect)
: Select or deselects a single object.
: Returns - True on success, False on failure.

bool Select(Guid objectId,bool select,bool syncHighlight,bool persistentSelect,bool ignoreGripsState,bool ignoreLayerLocking,bool ignoreLayerVisibility)
: Select or deselects a single object.
: Returns - True on success, False on failure.

int Select(IEnumerable<Guid> objectIds)
: Selects a collection of objects.
: Returns - Number of objects successfully selected.

int Select(IEnumerable<Guid> objectIds,bool select)
: Selects or deselects a collection of objects.
: Returns - Number of objects successfully selected or deselected.

int Select(IEnumerable<ObjRef> objRefs)
: Selects a collection of objects.
: Returns - Number of objects successfully selected.

int Select(IEnumerable<ObjRef> objRefs,bool select)
: Selects or deselects a collection of objects.
: Returns - Number of objects successfully selected or deselected.

bool Select(ObjRef objref)
: Select a single object.
: Returns - True on success, False on failure.

bool Select(ObjRef objref,bool select)
: Select or deselects a single object.
: Returns - True on success, False on failure.

bool Select(ObjRef objref,bool select,bool syncHighlight)
: Select or deselects a single object.
: Returns - True on success, False on failure.

bool Select(ObjRef objref,bool select,bool syncHighlight,bool persistentSelect)
: Select or deselects a single object.
: Returns - True on success, False on failure.

bool Select(ObjRef objref,bool select,bool syncHighlight,bool persistentSelect,bool ignoreGripsState,bool ignoreLayerLocking,bool ignoreLayerVisibility)
: Select or deselects a single object.
: Returns - True on success, False on failure.

bool Show(Guid objectId,bool ignoreLayerMode)
: If Object().IsHidden() is true, then the object will be returned to normal (visible and selectable) mode.
: Returns - True if the object was successfully shown.

bool Show(ObjRef objref,bool ignoreLayerMode)
: If objref.Object().IsHidden() is true, then the object will be returned to normal (visible and selectable) mode.
: Returns - True if the object was successfully shown.

bool Show(RhinoObject obj,bool ignoreLayerMode)
: If obj.IsHidden() is true, then the object will be returned to normal (visible and selectable) mode.
: Returns - True if the object was successfully shown.

Guid Transform(Guid objectId,Transform xform,bool deleteOriginal)
: Constructs a new object that is the transformation of the existing object
     and deletes the existing object if deleteOriginal is true.
: Returns - Id of the new object that is the transformation of the existing_object.
     The new object has identical attributes.

Guid Transform(ObjRef objref,Transform xform,bool deleteOriginal)
: Constructs a new object that is the transformation of the existing object
     and deletes the existing object if deleteOriginal is true.
: Returns - Id of the new object that is the transformation of the existing_object.
     The new object has identical attributes.

Guid Transform(RhinoObject obj,Transform xform,bool deleteOriginal)
: Constructs a new object that is the transformation of the existing object
     and deletes the existing object if deleteOriginal is true.
: Returns - Id of the new object that is the transformation of the existing_object.
     The new object has identical attributes.

Guid TransformWithHistory(Guid objectId,Transform xform)
: Constructs a new object that is the transformation of the existing object
     and records history of the transformation if history recording is turned on.
     If history recording is not enabled, this function will act the same as
     Transform(objectId, xform, false)
: Returns - Id of the new object that is the transformation of the existing_object.
     The new object has identical attributes.

Guid TransformWithHistory(ObjRef objref,Transform xform)
: Constructs a new object that is the transformation of the existing object
     and records history of the transformation if history recording is turned on.
     If history recording is not enabled, this function will act the same as
     Transform(objref, xform, false)
: Returns - Id of the new object that is the transformation of the existing_object.
     The new object has identical attributes.

Guid TransformWithHistory(RhinoObject obj,Transform xform)
: Constructs a new object that is the transformation of the existing object
     and records history of the transformation if history recording is turned on.
     If history recording is not enabled, this function will act the same as
     Transform(obj, xform, false)
: Returns - Id of the new object that is the transformation of the existing_object.
     The new object has identical attributes.

bool TryFindPoint(Guid id,Point3d point)
: Finds the location of a point, if a point exists in the document.
: Returns - True on success; False if point was not found, id represented another geometry type, or on error.
: since 6.0

bool Undelete(RhinoObject rhinoObject)
: 

bool Undelete(uint runtimeSerialNumber)
: 

bool Unlock(Guid objectId,bool ignoreLayerMode)
: If Object().IsLocked() is true, then the object will be returned to normal (visible and selectable) mode.
: Returns - True if the object was successfully unlocked.

bool Unlock(ObjRef objref,bool ignoreLayerMode)
: If objref.Object().IsLocked() is true, then the object will be returned to normal (visible and selectable) mode.
: Returns - True if the object was successfully unlocked.

bool Unlock(RhinoObject obj,bool ignoreLayerMode)
: If obj.IsLocked() is true, then the object will be returned to normal (visible and selectable) mode.
: Returns - True if the object was successfully unlocked.

int UnselectAll()
: Unselect objects.
: Returns - Number of object that were unselected.

int UnselectAll(bool ignorePersistentSelections)
: Unselect objects.
: Returns - Number of object that were unselected.
