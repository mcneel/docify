---
title: "File3dmObjectTable"
draft: false
---

*Namespace: Rhino.FileIO*

   Represents a simple object table for a file that is open externally.
   This class mimics Rhino.DocObjects.Tables.ObjectTable while providing external eccess to the file.
## Properties
#### ModelComponentType ComponentType
- (summary) 
     Returns .
     
- (since) 6.0
#### int Count
- (summary) 
     Returns the total amount of items in the object table, including lights.
     
- (since) 5.0
## Methods
#### void Add(File3dmObject item)
- (summary) 
     Duplicates the object, then adds a copy of the object to the document.
     
- (since) 6.0
- (returns) void This is some return comment
#### Guid AddAngularDimension(AngularDimension dimension)
- (summary) 
     Adds a angular dimension object to the 3dm file object table.
     
- (since) 6.5
- (returns) Guid This is some return comment
#### Guid AddAngularDimension(AngularDimension dimension,ObjectAttributes attributes)
- (summary) 
     Adds a angular dimension object to the 3dm file object table.
     
- (since) 6.5
- (returns) Guid This is some return comment
#### Guid AddArc(Arc arc)
- (summary) Adds a curve object to the document representing an arc.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddArc(Arc arc,ObjectAttributes attributes)
- (summary) Adds a curve object to the document representing an arc.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddBrep(Brep brep)
- (summary) Adds a brep object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddBrep(Brep brep,ObjectAttributes attributes)
- (summary) Adds a brep object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddCircle(Circle circle)
- (summary) Adds a curve object to the document representing a circle.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddCircle(Circle circle,ObjectAttributes attributes)
- (summary) Adds a curve object to the document representing a circle.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,Guid clippedViewportId)
- (summary) 
     Adds a clipping plane object to Rhino.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,IEnumerable<Guid> clippedViewportIds)
- (summary) 
     Adds a clipping plane object to Rhino.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,IEnumerable<Guid> clippedViewportIds,ObjectAttributes attributes)
- (summary) 
     Adds a clipping plane object to Rhino.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddCurve(Curve curve)
- (summary) Adds a curve object to the table.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddCurve(Curve curve,ObjectAttributes attributes)
- (summary) Adds a curve object to the table.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddEllipse(Ellipse ellipse)
- (summary) Adds a curve object to the document representing an ellipse.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddEllipse(Ellipse ellipse,ObjectAttributes attributes)
- (summary) Adds a curve object to the document representing an ellipse.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddExtrusion(Extrusion extrusion)
- (summary) Adds an extrusion object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddExtrusion(Extrusion extrusion,ObjectAttributes attributes)
- (summary) Adds an extrusion object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddHatch(Hatch hatch)
- (summary) 
     Adds a hatch to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddHatch(Hatch hatch,ObjectAttributes attributes)
- (summary) 
     Adds a hatch to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddInstanceObject(InstanceReferenceGeometry instanceReference)
- (summary) 
     Adds an instance reference geometry object to the table.
     
- (since) 6.5
- (returns) Guid This is some return comment
#### Guid AddInstanceObject(InstanceReferenceGeometry instanceReference,ObjectAttributes attributes)
- (summary) 
     Adds an instance reference geometry object to the table.
     
- (since) 6.5
- (returns) Guid This is some return comment
#### Guid AddInstanceObject(int instanceDefinitionIndex,Transform instanceXform)
- (summary) 
     Adds an instance reference geometry object to the table.
     
- (since) 6.5
- (returns) Guid This is some return comment
#### Guid AddInstanceObject(int instanceDefinitionIndex,Transform instanceXform,ObjectAttributes attributes)
- (summary) 
     Adds an instance reference geometry object to the table.
     
- (since) 6.5
- (returns) Guid This is some return comment
#### Guid AddLeader(IEnumerable<Point3d> points)
- (summary) 
     Adds an annotation leader to the document. This overload is only provided in the Rhino SDK.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLeader(Plane plane,IEnumerable<Point2d> points)
- (summary) 
     Adds an annotation leader to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLeader(Plane plane,IEnumerable<Point2d> points,ObjectAttributes attributes)
- (summary) 
     Adds an annotation leader to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLeader(string text,IEnumerable<Point3d> points)
- (summary) 
     Adds an annotation leader to the document. This overload is only provided in the Rhino SDK.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLeader(string text,Plane plane,IEnumerable<Point2d> points)
- (summary) 
     Adds an annotation leader to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLeader(string text,Plane plane,IEnumerable<Point2d> points,ObjectAttributes attributes)
- (summary) 
     Adds an annotation leader to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLine(Line line)
- (summary) Adds a line object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLine(Line line,ObjectAttributes attributes)
- (summary) Adds a line object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLine(Point3d from,Point3d to)
- (summary) Adds a line object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLine(Point3d from,Point3d to,ObjectAttributes attributes)
- (summary) Adds a line object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLinearDimension(LinearDimension dimension)
- (summary) 
     Adds a linear dimension to the 3dm file object table.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLinearDimension(LinearDimension dimension,ObjectAttributes attributes)
- (summary) 
     Adds a linear dimension to the 3dm file object table.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddMesh(Mesh mesh)
- (summary) Adds a mesh object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddMesh(Mesh mesh,ObjectAttributes attributes)
- (summary) Adds a mesh object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddPoint(double x,double y,double z)
- (summary) 
     Adds a point object to the table.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddPoint(Point3d point)
- (summary) Adds a point object to the table.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddPoint(Point3d point,ObjectAttributes attributes)
- (summary) Adds a point object to the document.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddPoint(Point3f point)
- (summary) Adds a point object to the document.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddPoint(Point3f point,ObjectAttributes attributes)
- (summary) Adds a point object to the document.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddPointCloud(IEnumerable<Point3d> points)
- (summary) Adds a point cloud object to the document.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddPointCloud(IEnumerable<Point3d> points,ObjectAttributes attributes)
- (summary) Adds a point cloud object to the document.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddPointCloud(PointCloud cloud)
- (summary) Adds a point cloud object to the document.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddPointCloud(PointCloud cloud,ObjectAttributes attributes)
- (summary) Adds a point cloud object to the document.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid[] AddPoints(IEnumerable<Point3d> points)
- (summary) 
     Adds multiple points to the document.
     
- (since) 5.0
- (returns) Guid[] This is some return comment
#### Guid[] AddPoints(IEnumerable<Point3d> points,ObjectAttributes attributes)
- (summary) 
     Adds multiple points to the document.
     
- (since) 5.0
- (returns) Guid[] This is some return comment
#### Guid[] AddPoints(IEnumerable<Point3f> points)
- (summary) 
     Adds multiple points to the document.
     
- (since) 5.0
- (returns) Guid[] This is some return comment
#### Guid[] AddPoints(IEnumerable<Point3f> points,ObjectAttributes attributes)
- (summary) 
     Adds multiple points to the document.
     
- (since) 5.0
- (returns) Guid[] This is some return comment
#### Guid AddPolyline(IEnumerable<Point3d> points)
- (summary) Adds a polyline object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddPolyline(IEnumerable<Point3d> points,ObjectAttributes attributes)
- (summary) Adds a polyline object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddSphere(Sphere sphere)
- (summary) 
     Adds a surface object to the document representing a sphere.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddSphere(Sphere sphere,ObjectAttributes attributes)
- (summary) 
     Adds a surface object to the document representing a sphere.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddSurface(Surface surface)
- (summary) Adds a surface object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddSurface(Surface surface,ObjectAttributes attributes)
- (summary) Adds a surface object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic)
- (summary) 
     Adds an annotation text object to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic,ObjectAttributes attributes)
- (summary) 
     Adds an annotation text object to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic,TextJustification justification)
- (summary) 
     Adds an annotation text object to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic,TextJustification justification,ObjectAttributes attributes)
- (summary) 
     Adds an annotation text object to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddText(Text3d text3d)
- (summary) 
     Adds an annotation text object to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddText(Text3d text3d,ObjectAttributes attributes)
- (summary) 
     Adds an annotation text object to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddTextDot(string text,Point3d location)
- (summary) Adds a text dot object to the table.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddTextDot(string text,Point3d location,ObjectAttributes attributes)
- (summary) Adds a text dot object to the table.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddTextDot(TextDot dot)
- (summary) Adds a text dot object to the table.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddTextDot(TextDot dot,ObjectAttributes attributes)
- (summary) Adds a text dot object to the table.
- (since) 5.0
- (returns) Guid This is some return comment
#### bool Delete(Guid objectId)
- (summary) 
     Deletes object from document.
     
- (since) 5.2
- (returns) bool This is some return comment
#### int Delete(IEnumerable<Guid> objectIds)
- (summary) 
     Deletes a collection of objects from the document.
     
- (since) 5.2
- (returns) int This is some return comment
#### File3dmObject[] FindByGroup(Group group)
- (summary) 
     Finds all File3dmObject that are in a given group.
     
- (since) 6.20
- (returns) File3dmObject[] This is some return comment
#### File3dmObject[] FindByLayer(Layer layer)
- (summary) 
     Finds all File3dmObject that are in a given layer.
     
- (since) 6.0
- (returns) File3dmObject[] This is some return comment
#### File3dmObject[] FindByLayer(string layer)
- (summary) 
     Finds all File3dmObject that are in a given layer.
     
- (since) 5.0
- (returns) File3dmObject[] This is some return comment
#### Rhino.Geometry.BoundingBox GetBoundingBox()
- (summary) Gets the bounding box containing every object in this table.
- (since) 5.0
- (returns) Rhino.Geometry.BoundingBox This is some return comment
#### IEnumerator<File3dmObject> GetEnumerator()
- (summary) 
     Returns an enumerator that yields all objects in this document.
     Like in Rhino, this includes lights. Unlike in Rhino, however, all lights are returned in the end of the list.
     
- (since) 5.0
- (returns) IEnumerator<File3dmObject> This is some return comment
