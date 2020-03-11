---
title: "File3dmObjectTable"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Represents a simple object table for a file that is open externally.
   This class mimics Rhino.DocObjects.Tables.ObjectTable while providing external eccess to the file.
```cs
public class File3dmObjectTable :
    File3dmCommonComponentTable<File3dmObject>,
    IEnumerable<File3dmObject>
```
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.0

int Count
: Returns the total amount of items in the object table, including lights.
## Methods

void Add(File3dmObject item)
: Duplicates the object, then adds a copy of the object to the document.
: since 6.0

Guid AddAngularDimension(AngularDimension dimension)
: Adds a angular dimension object to the 3dm file object table.
: Returns - A unique identifier for the object.
: since 6.5

Guid AddAngularDimension(AngularDimension dimension,ObjectAttributes attributes)
: Adds a angular dimension object to the 3dm file object table.
: Returns - A unique identifier for the object.
: since 6.5

Guid AddArc(Arc arc)
: Adds a curve object to the document representing an arc.
: Returns - A unique identifier for the object.

Guid AddArc(Arc arc,ObjectAttributes attributes)
: Adds a curve object to the document representing an arc.
: Returns - A unique identifier for the object.

Guid AddBrep(Brep brep)
: Adds a brep object to Rhino.
: Returns - A unique identifier for the object.

Guid AddBrep(Brep brep,ObjectAttributes attributes)
: Adds a brep object to Rhino.
: Returns - A unique identifier for the object.

Guid AddCircle(Circle circle)
: Adds a curve object to the document representing a circle.
: Returns - A unique identifier for the object.

Guid AddCircle(Circle circle,ObjectAttributes attributes)
: Adds a curve object to the document representing a circle.
: Returns - A unique identifier for the object.

Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,Guid clippedViewportId)
: Adds a clipping plane object to Rhino.
: Returns - A unique identifier for the object.

Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,IEnumerable<Guid> clippedViewportIds)
: Adds a clipping plane object to Rhino.
: Returns - A unique identifier for the object.

Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,IEnumerable<Guid> clippedViewportIds,ObjectAttributes attributes)
: Adds a clipping plane object to Rhino.
: Returns - A unique identifier for the object.

Guid AddCurve(Curve curve)
: Adds a curve object to the table.
: Returns - A unique identifier for the object.

Guid AddCurve(Curve curve,ObjectAttributes attributes)
: Adds a curve object to the table.
: Returns - A unique identifier for the object.

Guid AddEllipse(Ellipse ellipse)
: Adds a curve object to the document representing an ellipse.
: Returns - A unique identifier for the object.

Guid AddEllipse(Ellipse ellipse,ObjectAttributes attributes)
: Adds a curve object to the document representing an ellipse.
: Returns - A unique identifier for the object.

Guid AddExtrusion(Extrusion extrusion)
: Adds an extrusion object to Rhino.
: Returns - A unique identifier for the object.

Guid AddExtrusion(Extrusion extrusion,ObjectAttributes attributes)
: Adds an extrusion object to Rhino.
: Returns - A unique identifier for the object.

Guid AddHatch(Hatch hatch)
: Adds a hatch to the document.
: Returns - A unique identifier for the hatch, or  on failure.

Guid AddHatch(Hatch hatch,ObjectAttributes attributes)
: Adds a hatch to the document.
: Returns - A unique identifier for the hatch, or  on failure.

Guid AddInstanceObject(InstanceReferenceGeometry instanceReference)
: Adds an instance reference geometry object to the table.
: Returns - A unique identifier for the object.
: since 6.5

Guid AddInstanceObject(InstanceReferenceGeometry instanceReference,ObjectAttributes attributes)
: Adds an instance reference geometry object to the table.
: Returns - A unique identifier for the object.
: since 6.5

Guid AddInstanceObject(int instanceDefinitionIndex,Transform instanceXform)
: Adds an instance reference geometry object to the table.
: Returns - A unique identifier for the object.
: since 6.5

Guid AddInstanceObject(int instanceDefinitionIndex,Transform instanceXform,ObjectAttributes attributes)
: Adds an instance reference geometry object to the table.
: Returns - A unique identifier for the object.
: since 6.5

Guid AddLeader(IEnumerable<Point3d> points)
: Adds an annotation leader to the document. This overload is only provided in the Rhino SDK.
: Returns - A unique identifier for the object; or  on failure.

Guid AddLeader(Plane plane,IEnumerable<Point2d> points)
: Adds an annotation leader to the document.
: Returns - A unique identifier for the object; or  on failure.

Guid AddLeader(Plane plane,IEnumerable<Point2d> points,ObjectAttributes attributes)
: Adds an annotation leader to the document.
: Returns - A unique identifier for the object; or  on failure.

Guid AddLeader(string text,IEnumerable<Point3d> points)
: Adds an annotation leader to the document. This overload is only provided in the Rhino SDK.
: Returns - A unique identifier for the object; or  on failure.

Guid AddLeader(string text,Plane plane,IEnumerable<Point2d> points)
: Adds an annotation leader to the document.
: Returns - A unique identifier for the object; or  on failure.

Guid AddLeader(string text,Plane plane,IEnumerable<Point2d> points,ObjectAttributes attributes)
: Adds an annotation leader to the document.
: Returns - A unique identifier for the object; or  on failure.

Guid AddLine(Line line)
: Adds a line object to Rhino.
: Returns - A unique identifier for the object.

Guid AddLine(Line line,ObjectAttributes attributes)
: Adds a line object to Rhino.
: Returns - A unique identifier for the object.

Guid AddLine(Point3d from,Point3d to)
: Adds a line object to Rhino.
: Returns - A unique identifier of new rhino object.

Guid AddLine(Point3d from,Point3d to,ObjectAttributes attributes)
: Adds a line object to Rhino.
: Returns - A unique identifier for the object.

Guid AddLinearDimension(LinearDimension dimension)
: Adds a linear dimension to the 3dm file object table.
: Returns - A unique identifier for the object.

Guid AddLinearDimension(LinearDimension dimension,ObjectAttributes attributes)
: Adds a linear dimension to the 3dm file object table.
: Returns - A unique identifier for the object.

Guid AddMesh(Mesh mesh)
: Adds a mesh object to Rhino.
: Returns - A unique identifier for the object.

Guid AddMesh(Mesh mesh,ObjectAttributes attributes)
: Adds a mesh object to Rhino.
: Returns - A unique identifier for the object.

Guid AddPoint(double x,double y,double z)
: Adds a point object to the table.
: Returns - id of new object.

Guid AddPoint(Point3d point)
: Adds a point object to the table.
: Returns - Id of new object.

Guid AddPoint(Point3d point,ObjectAttributes attributes)
: Adds a point object to the document.
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

Guid AddPointCloud(PointCloud cloud)
: Adds a point cloud object to the document.
: Returns - A unique identifier for the object.

Guid AddPointCloud(PointCloud cloud,ObjectAttributes attributes)
: Adds a point cloud object to the document.
: Returns - A unique identifier for the object.

Guid[] AddPoints(IEnumerable<Point3d> points)
: Adds multiple points to the document.
: Returns - List of object ids.

Guid[] AddPoints(IEnumerable<Point3d> points,ObjectAttributes attributes)
: Adds multiple points to the document.
: Returns - An array of object unique identifiers.

Guid[] AddPoints(IEnumerable<Point3f> points)
: Adds multiple points to the document.
: Returns - An array of object unique identifiers.

Guid[] AddPoints(IEnumerable<Point3f> points,ObjectAttributes attributes)
: Adds multiple points to the document.
: Returns - An array of object unique identifiers.

Guid AddPolyline(IEnumerable<Point3d> points)
: Adds a polyline object to Rhino.
: Returns - A unique identifier for the object.

Guid AddPolyline(IEnumerable<Point3d> points,ObjectAttributes attributes)
: Adds a polyline object to Rhino.
: Returns - A unique identifier for the object.

Guid AddSphere(Sphere sphere)
: Adds a surface object to the document representing a sphere.
: Returns - A unique identifier for the object.

Guid AddSphere(Sphere sphere,ObjectAttributes attributes)
: Adds a surface object to the document representing a sphere.
: Returns - A unique identifier for the object.

Guid AddSurface(Surface surface)
: Adds a surface object to Rhino.
: Returns - A unique identifier for the object.

Guid AddSurface(Surface surface,ObjectAttributes attributes)
: Adds a surface object to Rhino.
: Returns - A unique identifier for the object.

Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic)
: Adds an annotation text object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic,ObjectAttributes attributes)
: Adds an annotation text object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic,TextJustification justification)
: Adds an annotation text object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic,TextJustification justification,ObjectAttributes attributes)
: Adds an annotation text object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddText(Text3d text3d)
: Adds an annotation text object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddText(Text3d text3d,ObjectAttributes attributes)
: Adds an annotation text object to the document.
: Returns - The Guid of the newly added object or Guid.Empty on failure.

Guid AddTextDot(string text,Point3d location)
: Adds a text dot object to the table.
: Returns - A unique identifier for the object.

Guid AddTextDot(string text,Point3d location,ObjectAttributes attributes)
: Adds a text dot object to the table.
: Returns - A unique identifier for the object.

Guid AddTextDot(TextDot dot)
: Adds a text dot object to the table.
: Returns - A unique identifier for the object.

Guid AddTextDot(TextDot dot,ObjectAttributes attributes)
: Adds a text dot object to the table.
: Returns - A unique identifier for the object.

bool Delete(Guid objectId)
: Deletes object from document.
: Returns - True on success, False on failure.
: since 5.2

int Delete(IEnumerable<Guid> objectIds)
: Deletes a collection of objects from the document.
: Returns - The number of successfully deleted objects.
: since 5.2

[File3dmObject](/rhinocommon/rhino/fileio/file3dmobject/)[] FindByGroup(Group group)
: Finds all File3dmObject that are in a given group.
: Returns - Array of objects that belong to the specified group or empty array if no objects could be found.
: since 6.20

[File3dmObject](/rhinocommon/rhino/fileio/file3dmobject/)[] FindByLayer(Layer layer)
: Finds all File3dmObject that are in a given layer.
: Returns - Array of objects that belong to the specified layer or empty array if no objects could be found.
: since 6.0

[File3dmObject](/rhinocommon/rhino/fileio/file3dmobject/)[] FindByLayer(string layer)
: Finds all File3dmObject that are in a given layer.
: Returns - Array of objects that belong to the specified layer or empty array if no objects could be found.

Rhino.Geometry.BoundingBox GetBoundingBox()
: Gets the bounding box containing every object in this table.
: Returns - The computed bounding box.

IEnumerator<File3dmObject> GetEnumerator()
: Returns an enumerator that yields all objects in this document.
     Like in Rhino, this includes lights. Unlike in Rhino, however, all lights are returned in the end of the list.
: Returns - An enumerator that yields all objects in a document.
