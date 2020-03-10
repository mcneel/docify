---
title: "ObjectTable"
draft: false
---

*Namespace: Rhino.DocObjects.Tables*
## Properties
#### BoundingBox BoundingBox
- (summary) 
     Gets the boundingbox for all objects (normal, locked and hidden) in this
     document that exist in "model" space. This bounding box does not include
     objects that exist in layout space.
     
- (since) 5.0
#### BoundingBox BoundingBoxVisible
- (summary) 
     Gets the boundingbox for all visible objects (normal and locked) in this
     document that exist in "model" space. This bounding box does not include
     hidden objects or any objects that exist in layout space.
     
- (since) 5.0
#### ModelComponentType ComponentType
- (summary) 
- (since) 6.0
#### RhinoDoc Document
- (summary) 
     Gets the document that owns this object table.
     
- (since) 5.0
#### int HistoryRecordCount
- (summary) 
     Returns the amount of history records in this document.
     
- (since) 6.0
## Methods
#### Guid Add(GeometryBase geometry)
- (summary) 
     Adds geometry that is not further specified.
     This is meant, for example, to handle addition of sets of different geometrical entities.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid Add(GeometryBase geometry,ObjectAttributes attributes)
- (summary) 
     Adds geometry that is not further specified.
     This is meant, for example, to handle addition of sets of different geometrical entities.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid Add(GeometryBase geometry,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
     Adds geometry that is not further specified.
     This is meant, for example, to handle addition of sets of different geometrical entities.
- (since) 6.0
- (returns) Guid This is some return comment
#### Guid AddAngularDimension(AngularDimension dimension)
- (summary) 
     Adds a angular dimension object to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddAngularDimension(AngularDimension dimension,ObjectAttributes attributes)
- (summary) 
     Adds a angular dimension object to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddAngularDimension(AngularDimension dimension,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
     Adds an angular dimension object to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddArc(Arc arc)
- (summary) Adds a curve object to the document representing an arc.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddArc(Arc arc,ObjectAttributes attributes)
- (summary) Adds a curve object to the document representing an arc.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddArc(Arc arc,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddBox(Box box)
- (summary) 
     Adds a box to the object table.
     
- (since) 6.0
- (returns) Guid This is some return comment
#### Guid AddBox(Box box,ObjectAttributes attributes)
- (summary) 
     Adds a box to the object table.
     
- (since) 6.0
- (returns) Guid This is some return comment
#### Guid AddBox(Box box,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
     Adds a box to the object table, as an extrusion.
     
- (since) 6.0
- (returns) Guid This is some return comment
#### Guid AddBrep(Brep brep)
- (summary) Adds a brep object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddBrep(Brep brep,ObjectAttributes attributes)
- (summary) Adds a brep object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddBrep(Brep brep,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddBrep(Brep brep,ObjectAttributes attributes,HistoryRecord history,bool reference,bool splitKinkySurfaces)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddCentermark(Centermark centermark,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
     Adds an ordinate dimension object to the document.
     
- (since) 6.0
- (returns) Guid This is some return comment
#### Guid AddCircle(Circle circle)
- (summary) Adds a curve object to the document representing a circle.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddCircle(Circle circle,ObjectAttributes attributes)
- (summary) Adds a curve object to the document representing a circle.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddCircle(Circle circle,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,Guid clippedViewportId)
- (summary) 
     Adds a clipping plane object to Rhino.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,Guid clippedViewportId,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
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
#### Guid AddClippingPlane(Plane plane,double uMagnitude,double vMagnitude,IEnumerable<Guid> clippedViewportIds,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddCurve(Curve curve)
- (summary) Adds a curve object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddCurve(Curve curve,ObjectAttributes attributes)
- (summary) Adds a curve object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddCurve(Curve curve,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
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
#### Guid AddEllipse(Ellipse ellipse,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid[] AddExplodedInstancePieces(InstanceObject instance,bool explodeNestedInstances,bool deleteInstance)
- (summary) 
- (since) 5.11
- (returns) Guid[] This is some return comment
#### Guid AddExtrusion(Extrusion extrusion)
- (summary) Adds an extrusion object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddExtrusion(Extrusion extrusion,ObjectAttributes attributes)
- (summary) Adds an extrusion object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddExtrusion(Extrusion extrusion,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddHatch(Hatch hatch)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddHatch(Hatch hatch,ObjectAttributes attributes)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddHatch(Hatch hatch,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddInstanceObject(int instanceDefinitionIndex,Transform instanceXform)
- (summary) 
     Adds an instance object to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddInstanceObject(int instanceDefinitionIndex,Transform instanceXform,ObjectAttributes attributes)
- (summary) 
     Adds an instance object to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddInstanceObject(int instanceDefinitionIndex,Transform instanceXform,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
     Adds an instance object to the document.
     
- (since) 6.24
- (returns) Guid This is some return comment
#### Guid AddLeader(IEnumerable<Point3d> points)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLeader(Leader leader)
- (summary) 
     Adds a Leader object to the document.
     
- (since) 6.0
- (returns) Guid This is some return comment
#### Guid AddLeader(Leader leader,ObjectAttributes attributes)
- (summary)  Addsa Leader object to the document. 
- (since) 6.0
- (returns) Guid This is some return comment
#### Guid AddLeader(Leader leader,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
     Adds a Leader object to the document.
     
- (since) 6.0
- (returns) Guid This is some return comment
#### Guid AddLeader(Plane plane,IEnumerable<Point2d> points)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLeader(Plane plane,IEnumerable<Point2d> points,ObjectAttributes attributes)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLeader(string text,IEnumerable<Point3d> points)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLeader(string text,Plane plane,IEnumerable<Point2d> points)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLeader(string text,Plane plane,IEnumerable<Point2d> points,ObjectAttributes attributes)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLeader(string text,Plane plane,IEnumerable<Point2d> points,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
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
#### Guid AddLine(Point3d from,Point3d to,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLinearDimension(LinearDimension dimension)
- (summary) 
     Adds a linear dimension object to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLinearDimension(LinearDimension dimension,ObjectAttributes attributes)
- (summary) 
     Adds a linear dimension object to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddLinearDimension(LinearDimension dimension,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
     Adds a linear dimension object to the document.
     
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
#### Guid AddMesh(Mesh mesh,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddMesh(Mesh mesh,ObjectAttributes attributes,HistoryRecord history,bool reference,bool requireValidMesh)
- (summary) 
- (since) 6.0
- (returns) Guid This is some return comment
#### Guid AddMorphControl(MorphControl morphControl)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddMorphControl(MorphControl morphControl,ObjectAttributes attributes)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddMorphControl(MorphControl morphControl,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
- (since) 6.0
- (returns) Guid This is some return comment
#### Guid AddOrdinateDimension(OrdinateDimension dimordinate,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
     Adds an ordinate dimension object to the document.
     
- (since) 6.0
- (returns) Guid This is some return comment
#### Guid AddPictureFrame(Plane plane,string texturePath,bool asMesh,double width,double height,bool selfIllumination,bool embedBitmap)
- (summary) 
     Creates a PictureFrame object from a plane and a path to an image file,
     Note, a PictureFrame object is just a Plane surface or mesh that has a
     material with a texture assigned to it that displays in all display
     modes.
     
- (since) 5.10
- (returns) Guid This is some return comment
#### Guid AddPoint(double x,double y,double z)
- (summary) 
     Adds a point object to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddPoint(Point point,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) Adds a point object and its geometry-linked information to the document
- (since) 6.0
- (returns) Guid This is some return comment
#### Guid AddPoint(Point3d point)
- (summary) Adds a point object to the document.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddPoint(Point3d point,ObjectAttributes attributes)
- (summary) Adds a point object to the document.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddPoint(Point3d point,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) Adds a point object to the document
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
#### Guid AddPointCloud(IEnumerable<Point3d> points,ObjectAttributes attributes,HistoryRecord history,bool reference)
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
#### Guid AddPointCloud(PointCloud cloud,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) Adds a point cloud object to the document.
- (since) 5.0
- (returns) Guid This is some return comment
#### RhinoList<Guid> AddPoints(IEnumerable<Point3d> points)
- (summary) 
     Adds multiple points to the document.
     
- (since) 5.0
- (returns) RhinoList<Guid> This is some return comment
#### RhinoList<Guid> AddPoints(IEnumerable<Point3d> points,ObjectAttributes attributes)
- (summary) 
     Adds multiple points to the document.
     
- (since) 5.0
- (returns) RhinoList<Guid> This is some return comment
#### RhinoList<Guid> AddPoints(IEnumerable<Point3f> points)
- (summary) 
     Adds multiple points to the document.
     
- (since) 5.0
- (returns) RhinoList<Guid> This is some return comment
#### RhinoList<Guid> AddPoints(IEnumerable<Point3f> points,ObjectAttributes attributes)
- (summary) 
     Adds multiple points to the document.
     
- (since) 5.0
- (returns) RhinoList<Guid> This is some return comment
#### Guid AddPolyline(IEnumerable<Point3d> points)
- (summary) Adds a polyline object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddPolyline(IEnumerable<Point3d> points,ObjectAttributes attributes)
- (summary) Adds a polyline object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddPolyline(IEnumerable<Point3d> points,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddRadialDimension(RadialDimension dimension)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddRadialDimension(RadialDimension dimension,ObjectAttributes attributes)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddRadialDimension(RadialDimension dimension,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
     Adds a radial dimension object to the document.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddRectangle(Rectangle3d rectangle)
- (summary) 
     Adds a rectangle to the object table.
     
- (since) 6.0
- (returns) Guid This is some return comment
#### Guid AddRectangle(Rectangle3d rectangle,ObjectAttributes attributes)
- (summary) 
     Adds a rectangle to the object table.
     
- (since) 6.0
- (returns) Guid This is some return comment
#### Guid AddRectangle(Rectangle3d rectangle,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
     Adds a rectangle to the object table.
     
- (since) 6.0
- (returns) Guid This is some return comment
#### void AddRhinoObject(BrepObject brepObject,Brep brep)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void AddRhinoObject(CurveObject curveObject,Curve curve)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void AddRhinoObject(CustomBrepObject brepObject)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void AddRhinoObject(CustomBrepObject brepObject,HistoryRecord history)
- (summary) 
- (since) 6.1
- (returns) void This is some return comment
#### void AddRhinoObject(CustomCurveObject curveObject,HistoryRecord history)
- (summary) 
- (since) 6.1
- (returns) void This is some return comment
#### void AddRhinoObject(CustomMeshObject meshObject)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void AddRhinoObject(CustomMeshObject meshObject,HistoryRecord history)
- (summary) 
- (since) 6.1
- (returns) void This is some return comment
#### void AddRhinoObject(CustomPointObject pointObject)
- (summary) 
- (since) 5.6
- (returns) void This is some return comment
#### void AddRhinoObject(CustomPointObject pointObject,HistoryRecord history)
- (summary) 
- (since) 6.1
- (returns) void This is some return comment
#### void AddRhinoObject(MeshObject meshObject,Mesh mesh)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
#### void AddRhinoObject(PointObject pointObject,Point point)
- (summary) 
- (since) 5.6
- (returns) void This is some return comment
#### Guid AddSphere(Sphere sphere)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddSphere(Sphere sphere,ObjectAttributes attributes)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddSphere(Sphere sphere,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddSubD(SubD subD)
- (summary) Adds a SubD object to Rhino.
- (since) 7.0
- (returns) Guid This is some return comment
#### Guid AddSubD(SubD subD,ObjectAttributes attributes)
- (summary) Adds a SubD object to Rhino.
- (since) 7.0
- (returns) Guid This is some return comment
#### Guid AddSubD(SubD subD,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) Adds a SubD object to Rhino.
- (since) 7.0
- (returns) Guid This is some return comment
#### Guid AddSurface(Surface surface)
- (summary) Adds a surface object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddSurface(Surface surface,ObjectAttributes attributes)
- (summary) Adds a surface object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddSurface(Surface surface,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
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
#### Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic,TextJustification justification)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic,TextJustification justification,ObjectAttributes attributes)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddText(string text,Plane plane,double height,string fontName,bool bold,bool italic,TextJustification justification,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
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
#### Guid AddText(TextEntity text)
- (summary)  Adds a v6_TextObject to the document. 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddText(TextEntity text,ObjectAttributes attributes)
- (summary)  Adds a text object to the document. 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddText(TextEntity text,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary)  Adds a text object to the document. 
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddTextDot(string text,Point3d location)
- (summary) Adds a text dot object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddTextDot(string text,Point3d location,ObjectAttributes attributes)
- (summary) Adds a text dot object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddTextDot(TextDot dot)
- (summary) Adds a text dot object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddTextDot(TextDot dot,ObjectAttributes attributes)
- (summary) Adds a text dot object to Rhino.
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid AddTextDot(TextDot dot,ObjectAttributes attributes,HistoryRecord history,bool reference)
- (summary) 
- (since) 5.0
- (returns) Guid This is some return comment
#### RhinoObject[] AllObjectsSince(uint runtimeSerialNumber)
- (summary) 
     Gets all the objects that have been added to the document since a given runtime serial number. 
     
- (since) 5.0
- (returns) RhinoObject[] This is some return comment
#### bool Delete(Guid objectId,bool quiet)
- (summary) 
     Deletes object from document. The deletion can be undone by calling UndeleteObject().
     
- (since) 5.0
- (returns) bool This is some return comment
#### int Delete(IEnumerable<Guid> objectIds,bool quiet)
- (summary) 
     Deletes a collection of objects from the document.
     
- (since) 5.0
- (returns) int This is some return comment
#### bool Delete(ObjRef objref,bool quiet)
- (summary) 
     Deletes objref.Object(). The deletion can be undone by calling UndeleteObject().
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Delete(ObjRef objref,bool quiet,bool ignoreModes)
- (summary) 
     Deletes objref.Object(). The deletion can be undone by calling UndeleteObject(). 
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool Delete(RhinoObject item)
- (summary) 
     Deletes an object, taking into account modes and not showing error message boxes.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool Delete(RhinoObject obj,bool quiet)
- (summary) 
     Deletes object from document. The deletion can be undone by calling UndeleteObject().
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Delete(RhinoObject obj,bool quiet,bool ignoreModes)
- (summary) 
     Deletes object from document. The deletion can be undone by calling UndeleteObject().
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool DeleteGrip(GripObject grip)
- (summary) 
     Deletes a grip object.
     
- (since) 6.5
- (returns) bool This is some return comment
#### bool DeleteGrip(Guid gripId)
- (summary) 
     Deletes a grip object.
     
- (since) 6.5
- (returns) bool This is some return comment
#### bool DeleteGrip(ObjRef gripRef)
- (summary) 
     Deletes a grip object.
     
- (since) 6.5
- (returns) bool This is some return comment
#### int DeleteGrips(IEnumerable<GripObject> grips)
- (summary) 
     Deletes one or more grip objects.
     
- (since) 6.5
- (returns) int This is some return comment
#### int DeleteGrips(IEnumerable<Guid> gripIds)
- (summary) 
     Deletes one or more grip objects.
     
- (since) 6.5
- (returns) int This is some return comment
#### int DeleteGrips(IEnumerable<ObjRef> gripRefs)
- (summary) 
     Deletes one or more grip objects.
     
- (since) 6.5
- (returns) int This is some return comment
#### int DeleteGrips(RhinoObject owner,IEnumerable<int> gripIndices)
- (summary) 
     Deletes one or more grip objects.
     
- (since) 6.5
- (returns) int This is some return comment
#### Guid Duplicate(Guid objectId)
- (summary) 
     Same as TransformObject(objref, ON_Xform.Identity, false)
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid Duplicate(ObjRef objref)
- (summary) 
     Duplicates the object that is referenced by objref.
     Same as Transform(objref, Transform.Identity, false)
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid Duplicate(RhinoObject obj)
- (summary) 
     Duplicates the object that is referenced by obj.
     Same as TransformObject(obj, Transform.Identityy, false)
- (since) 5.0
- (returns) Guid This is some return comment
#### RhinoObject Find(Guid objectId)
- (summary) 
     Please use FindId().
     
- (since) 5.0
- (returns) RhinoObject This is some return comment
#### RhinoObject Find(uint runtimeSerialNumber)
- (summary) 
     Use the object runtime serial number to find a rhino object in the document. This is the value stored on
     RhinoObject.RuntimeObjectSerialNumber. The RhinoObject constructor sets the runtime serial number and every
     instance of a RhinoObject class will have a unique serial number for the duration of the Rhino application.
     If an object is replaced with a new object, then the new object will have a different runtime serial number.
     Deleted objects stored in the undo list maintain their runtime serial numbers and this funtion will return
     pointers to these objects. Call RhinoObject.IsDeleted if you need to determine if the returned object is
     active or deleted.  The runtime serial number is not saved in files.
     
- (since) 5.0
- (returns) RhinoObject This is some return comment
#### RhinoObject[] FindByCrossingWindowRegion(RhinoViewport viewport,IEnumerable<Point3d> region,bool inside,ObjectType filter)
- (summary) 
     Finds objects bounded by a polyline region
     
- (since) 5.7
- (returns) RhinoObject[] This is some return comment
#### RhinoObject[] FindByCrossingWindowRegion(RhinoViewport viewport,Point2d screen1,Point2d screen2,bool inside,ObjectType filter)
- (summary) 
     Finds objects bounded by a region
     
- (since) 5.8
- (returns) RhinoObject[] This is some return comment
#### RhinoObject[] FindByDrawColor(Color drawColor,bool includeLights)
- (summary) 
     Finds all objects whose draw color matches a given color.
     
- (since) 5.0
- (returns) RhinoObject[] This is some return comment
#### RhinoObject[] FindByFilter(ObjectEnumeratorSettings filter)
- (summary) 
     Same as GetObjectList but converts the result to an array.
     
- (since) 5.0
- (returns) RhinoObject[] This is some return comment
#### RhinoObject[] FindByGroup(int groupIndex)
- (summary) 
     Finds all RhinoObjects that are in a given group.
     
- (since) 5.0
- (returns) RhinoObject[] This is some return comment
#### RhinoObject[] FindByLayer(Layer layer)
- (summary) 
     Finds all RhinoObjects that are in a given layer.
     
- (since) 5.0
- (returns) RhinoObject[] This is some return comment
#### RhinoObject[] FindByLayer(string layerName)
- (summary) 
     Finds all RhinoObjects that are in a given layer.
     
- (since) 5.0
- (returns) RhinoObject[] This is some return comment
#### RhinoObject[] FindByObjectType(ObjectType typeFilter)
- (summary) 
- (since) 5.0
- (returns) RhinoObject[] This is some return comment
#### RhinoObject[] FindByUserString(string key,string value,bool caseSensitive)
- (summary) 
     Finds all objects whose UserString matches the search patterns.
     
- (since) 5.0
- (returns) RhinoObject[] This is some return comment
#### RhinoObject[] FindByUserString(string key,string value,bool caseSensitive,bool searchGeometry,bool searchAttributes,ObjectEnumeratorSettings filter)
- (summary) 
     Finds all objects whose UserString matches the search patterns.
     
- (since) 5.0
- (returns) RhinoObject[] This is some return comment
#### RhinoObject[] FindByUserString(string key,string value,bool caseSensitive,bool searchGeometry,bool searchAttributes,ObjectType filter)
- (summary) 
     Finds all objects whose UserString matches the search patterns.
     
- (since) 5.0
- (returns) RhinoObject[] This is some return comment
#### RhinoObject[] FindByWindowRegion(RhinoViewport viewport,IEnumerable<Point3d> region,bool inside,ObjectType filter)
- (summary) 
     Finds objects bounded by a polyline region
     
- (since) 5.7
- (returns) RhinoObject[] This is some return comment
#### RhinoObject[] FindByWindowRegion(RhinoViewport viewport,Point2d screen1,Point2d screen2,bool inside,ObjectType filter)
- (summary) 
     Finds objects bounded by a polyline region
     
- (since) 5.8
- (returns) RhinoObject[] This is some return comment
#### ClippingPlaneObject[] FindClippingPlanesForViewport(RhinoViewport viewport)
- (summary) 
     Finds all of the clipping plane objects that actively clip a viewport.
     
- (since) 5.0
- (returns) ClippingPlaneObject[] This is some return comment
#### GeometryBase FindGeometry(Guid id)
- (summary) 
     Same as FindId, but returns the Geometry property directly, if it exists.
     
- (since) 6.0
- (returns) GeometryBase This is some return comment
#### RhinoObject FindId(Guid id)
- (summary) Uses the object guid to find a rhino object. Deleted objects cannot be found by id.
     The guid is the value that is stored on RhinoObject.Id
     In a single document, no two active objects have the same guid. If an object is
     replaced with a new object, then the guid  persists. For example, if the _Move command
     moves an object, then the moved object inherits it's guid from the starting object.
     If the Copy command copies an object, then the copy gets a new guid. This guid persists
     through file saving/openning operations. This function will not find grip objects.
     
- (since) 6.0
- (returns) RhinoObject This is some return comment
#### IEnumerator<RhinoObject> GetEnumerator()
- (summary) 
- (since) 5.0
- (returns) IEnumerator<RhinoObject> This is some return comment
#### IEnumerable<RhinoObject> GetObjectList(ObjectEnumeratorSettings settings)
- (summary) 
- (since) 5.0
- (returns) IEnumerable<RhinoObject> This is some return comment
#### IEnumerable<RhinoObject> GetObjectList(ObjectType typeFilter)
- (summary) 
- (since) 5.0
- (returns) IEnumerable<RhinoObject> This is some return comment
#### IEnumerable<RhinoObject> GetObjectList(Type typeFilter)
- (summary) 
- (since) 5.0
- (returns) IEnumerable<RhinoObject> This is some return comment
#### IEnumerable<T> GetObjectsByType()
- (summary) 
- (since) 6.0
- (returns) IEnumerable<T> This is some return comment
#### IEnumerable<T> GetObjectsByType(ObjectEnumeratorSettings settings)
- (summary) 
- (since) 6.0
- (returns) IEnumerable<T> This is some return comment
#### IEnumerable<RhinoObject> GetSelectedObjects(bool includeLights,bool includeGrips)
- (summary) 
- (since) 5.0
- (returns) IEnumerable<RhinoObject> This is some return comment
#### ObjectType GetSelectedObjectTypes()
- (summary) 
- (since) 6.0
- (returns) ObjectType This is some return comment
#### RhinoObject GripUpdate(RhinoObject obj,bool deleteOriginal)
- (summary) 
     Altered grip positions on a RhinoObject are used to calculate an updated object
     that is added to the document.
     
- (since) 5.0
- (returns) RhinoObject This is some return comment
#### bool Hide(Guid objectId,bool ignoreLayerMode)
- (summary) 
     If Object().IsNormal() is true, then the object will be hidden.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Hide(ObjRef objref,bool ignoreLayerMode)
- (summary) 
     If objref.Object().IsNormal() is true, then the object will be hidden.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Hide(RhinoObject obj,bool ignoreLayerMode)
- (summary) 
     If obj.IsNormal() is true, then the object will be hidden.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Lock(Guid objectId,bool ignoreLayerMode)
- (summary) 
     If objref.Object().IsNormal() is true, then the object will be locked.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Lock(ObjRef objref,bool ignoreLayerMode)
- (summary) 
     If objref.Object().IsNormal() is true, then the object will be locked.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Lock(RhinoObject obj,bool ignoreLayerMode)
- (summary) 
     If obj.IsNormal() is true, then the object will be locked.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool ModifyAttributes(Guid objectId,ObjectAttributes newAttributes,bool quiet)
- (summary) 
     Modifies an object's attributes.  Cannot be used to change object id.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool ModifyAttributes(ObjRef objref,ObjectAttributes newAttributes,bool quiet)
- (summary) 
     Modifies an object's attributes.  Cannot be used to change object id.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool ModifyAttributes(RhinoObject obj,ObjectAttributes newAttributes,bool quiet)
- (summary) 
     Modifies an object's attributes.  Cannot be used to change object id.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool ModifyRenderMaterial(Guid objectId,RenderMaterial material)
- (summary) 
     Modifies an object's render material assignment, this will set the
     objects material source to ObjectMaterialSource.MaterialFromObject.
     
- (since) 5.7
- (returns) bool This is some return comment
#### bool ModifyRenderMaterial(ObjRef objRef,RenderMaterial material)
- (summary) 
     Modifies an object's render material assignment, this will set the
     objects material source to ObjectMaterialSource.MaterialFromObject.
     
- (since) 5.7
- (returns) bool This is some return comment
#### bool ModifyRenderMaterial(RhinoObject obj,RenderMaterial material)
- (summary) 
     Modifies an object's render material assignment, this will set the
     objects material source to ObjectMaterialSource.MaterialFromObject.
     
- (since) 5.7
- (returns) bool This is some return comment
#### bool ModifyTextureMapping(Guid objId,int channel,TextureMapping mapping)
- (summary) 
- (since) 5.7
- (returns) bool This is some return comment
#### bool ModifyTextureMapping(ObjRef objRef,int channel,TextureMapping mapping)
- (summary) 
- (since) 5.7
- (returns) bool This is some return comment
#### bool ModifyTextureMapping(RhinoObject obj,int channel,TextureMapping mapping)
- (summary) 
- (since) 5.7
- (returns) bool This is some return comment
#### RhinoObject MostRecentObject()
- (summary) 
     Gets the most recently added object that is still in the Document.
     
- (since) 5.0
- (returns) RhinoObject This is some return comment
#### int ObjectCount(ObjectEnumeratorSettings filter)
- (summary) 
- (since) 5.0
- (returns) int This is some return comment
#### ObjRef[] PickObjects(PickContext pickContext)
- (summary) 
     Pick one or more objects based on a given pick context
     
- (since) 6.0
- (returns) ObjRef[] This is some return comment
#### bool Purge(RhinoObject rhinoObject)
- (summary) 
     Removes object from document and deletes the pointer. Typically you will
     want to call Delete instead in order to keep the object on the undo list.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Purge(uint runtimeSerialNumber)
- (summary) 
     Removes object from document and deletes the pointer. Typically you will
     want to call Delete instead in order to keep the object on the undo list.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,Arc arc)
- (summary) Replaces one object with new curve object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,Brep brep)
- (summary) Replaces one object with new brep object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,Brep brep,bool splitKinkySurfaces)
- (summary) 
- (since) 6.1
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,Circle circle)
- (summary) Replaces one object with new curve object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,Curve curve)
- (summary) Replaces one object with new curve object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,Extrusion extrusion)
- (summary) Replaces one object with new extrusion object.
- (since) 6.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,Hatch hatch)
- (summary) Replaces one object with new hatch object.
- (since) 6.1
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,Leader leader)
- (summary) Replaces one object with new text object.
- (since) 6.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,Line line)
- (summary) Replaces one object with new line curve object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,Mesh mesh)
- (summary) Replaces one object with new mesh object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,Point point)
- (summary) Replaces one object with new point object.
- (since) 6.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,Point3d point)
- (summary) Replaces one object with new point object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,PointCloud pointcloud)
- (summary) 
     Replaces one object with new pointcloud object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,Polyline polyline)
- (summary) Replaces one object with new curve object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,SubD subD)
- (summary) Replaces one object with new subd object.
- (since) 7.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,Surface surface)
- (summary) Replaces one object with new surface object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,TextDot dot)
- (summary) Replaces one object with new textdot object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(Guid objectId,TextEntity text)
- (summary) Replaces one object with new text object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,Arc arc)
- (summary) Replaces one object with new curve object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,Brep brep)
- (summary) 
     Replaces one object with new brep object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,Brep brep,bool splitKinkySurfaces)
- (summary) 
- (since) 6.1
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,Circle circle)
- (summary) Replaces one object with new curve object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,Curve curve)
- (summary) 
     Replaces one object with new curve object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,Extrusion extrusion)
- (summary) Replaces one object with new extrusion object.
- (since) 6.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,Hatch hatch)
- (summary) Replaces one object with new hatch object.
- (since) 6.1
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,Leader leader)
- (summary) Replaces one object with new text object.
- (since) 6.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,Line line)
- (summary) Replaces one object with new line curve object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,Mesh mesh)
- (summary) 
     Replaces one object with new mesh object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,Point point)
- (summary) Replaces one object with new point object.
- (since) 6.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,Point3d point)
- (summary) Replaces one object with new point object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,PointCloud pointcloud)
- (summary) 
     Replaces one object with new pointcloud object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,Polyline polyline)
- (summary) Replaces one object with new curve object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,RhinoObject newObject)
- (summary) 
     Replaces one object with another. Conceptually, this function is the same as calling
     Setting new_object attributes = old_object attributes
     DeleteObject(old_object);
     AddObject(old_object);
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,SubD subD)
- (summary) 
     Replaces one object with a new SubD object.
     
- (since) 7.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,Surface surface)
- (summary) 
     Replaces one object with new surface object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,TextDot dot)
- (summary) Replaces one object with new textdot object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Replace(ObjRef objref,TextEntity text)
- (summary) Replaces one object with new text object.
- (since) 5.0
- (returns) bool This is some return comment
#### bool ReplaceInstanceObject(Guid objectId,int instanceDefinitionIndex)
- (summary) 
     Replaces the underlying instance definition of an instance object.
     
- (since) 6.8
- (returns) bool This is some return comment
#### bool ReplaceInstanceObject(ObjRef objref,int instanceDefinitionIndex)
- (summary) 
     Replaces the underlying instance definition of an instance object.
     
- (since) 6.8
- (returns) bool This is some return comment
#### bool Select(Guid objectId)
- (summary) 
     Select a single object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Select(Guid objectId,bool select)
- (summary) 
     Select or deselects a single object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Select(Guid objectId,bool select,bool syncHighlight)
- (summary) 
     Select or deselects a single object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Select(Guid objectId,bool select,bool syncHighlight,bool persistentSelect)
- (summary) 
     Select or deselects a single object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Select(Guid objectId,bool select,bool syncHighlight,bool persistentSelect,bool ignoreGripsState,bool ignoreLayerLocking,bool ignoreLayerVisibility)
- (summary) 
     Select or deselects a single object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### int Select(IEnumerable<Guid> objectIds)
- (summary) 
     Selects a collection of objects.
     
- (since) 5.0
- (returns) int This is some return comment
#### int Select(IEnumerable<Guid> objectIds,bool select)
- (summary) 
     Selects or deselects a collection of objects.
     
- (since) 5.0
- (returns) int This is some return comment
#### int Select(IEnumerable<ObjRef> objRefs)
- (summary) 
     Selects a collection of objects.
     
- (since) 5.0
- (returns) int This is some return comment
#### int Select(IEnumerable<ObjRef> objRefs,bool select)
- (summary) 
     Selects or deselects a collection of objects.
     
- (since) 5.0
- (returns) int This is some return comment
#### bool Select(ObjRef objref)
- (summary) 
     Select a single object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Select(ObjRef objref,bool select)
- (summary) 
     Select or deselects a single object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Select(ObjRef objref,bool select,bool syncHighlight)
- (summary) 
     Select or deselects a single object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Select(ObjRef objref,bool select,bool syncHighlight,bool persistentSelect)
- (summary) 
     Select or deselects a single object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Select(ObjRef objref,bool select,bool syncHighlight,bool persistentSelect,bool ignoreGripsState,bool ignoreLayerLocking,bool ignoreLayerVisibility)
- (summary) 
     Select or deselects a single object.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Show(Guid objectId,bool ignoreLayerMode)
- (summary) 
     If Object().IsHidden() is true, then the object will be returned to normal (visible and selectable) mode.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Show(ObjRef objref,bool ignoreLayerMode)
- (summary) 
     If objref.Object().IsHidden() is true, then the object will be returned to normal (visible and selectable) mode.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Show(RhinoObject obj,bool ignoreLayerMode)
- (summary) 
     If obj.IsHidden() is true, then the object will be returned to normal (visible and selectable) mode.
     
- (since) 5.0
- (returns) bool This is some return comment
#### Guid Transform(Guid objectId,Transform xform,bool deleteOriginal)
- (summary) 
     Constructs a new object that is the transformation of the existing object
     and deletes the existing object if deleteOriginal is true.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid Transform(ObjRef objref,Transform xform,bool deleteOriginal)
- (summary) 
     Constructs a new object that is the transformation of the existing object
     and deletes the existing object if deleteOriginal is true.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid Transform(RhinoObject obj,Transform xform,bool deleteOriginal)
- (summary) 
     Constructs a new object that is the transformation of the existing object
     and deletes the existing object if deleteOriginal is true.
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid TransformWithHistory(Guid objectId,Transform xform)
- (summary) 
     Constructs a new object that is the transformation of the existing object
     and records history of the transformation if history recording is turned on.
     If history recording is not enabled, this function will act the same as
     Transform(objectId, xform, false)
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid TransformWithHistory(ObjRef objref,Transform xform)
- (summary) 
     Constructs a new object that is the transformation of the existing object
     and records history of the transformation if history recording is turned on.
     If history recording is not enabled, this function will act the same as
     Transform(objref, xform, false)
     
- (since) 5.0
- (returns) Guid This is some return comment
#### Guid TransformWithHistory(RhinoObject obj,Transform xform)
- (summary) 
     Constructs a new object that is the transformation of the existing object
     and records history of the transformation if history recording is turned on.
     If history recording is not enabled, this function will act the same as
     Transform(obj, xform, false)
     
- (since) 5.0
- (returns) Guid This is some return comment
#### bool TryFindPoint(Guid id,Point3d point)
- (summary) 
     Finds the location of a point, if a point exists in the document.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool Undelete(RhinoObject rhinoObject)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool Undelete(uint runtimeSerialNumber)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
#### bool Unlock(Guid objectId,bool ignoreLayerMode)
- (summary) 
     If Object().IsLocked() is true, then the object will be returned to normal (visible and selectable) mode.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Unlock(ObjRef objref,bool ignoreLayerMode)
- (summary) 
     If objref.Object().IsLocked() is true, then the object will be returned to normal (visible and selectable) mode.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Unlock(RhinoObject obj,bool ignoreLayerMode)
- (summary) 
     If obj.IsLocked() is true, then the object will be returned to normal (visible and selectable) mode.
     
- (since) 5.0
- (returns) bool This is some return comment
#### int UnselectAll()
- (summary) Unselect objects.
- (since) 5.0
- (returns) int This is some return comment
#### int UnselectAll(bool ignorePersistentSelections)
- (summary) Unselect objects.
- (since) 5.0
- (returns) int This is some return comment
