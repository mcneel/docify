---
title: "ReplayHistoryResult"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

```cs
public class ReplayHistoryResult
```
## Properties

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/) ExistingObject
: The previously existing object.
     Do not attempt to edit this object. It might have been already deleted by, for example, dragging.
## Methods

bool UpdateToAngularDimension(AngularDimension dimension,ObjectAttributes attributes)
: 

bool UpdateToArc(Arc arc,ObjectAttributes attributes)
: 

bool UpdateToBrep(Brep brep,ObjectAttributes attributes)
: 

bool UpdateToCircle(Circle circle,ObjectAttributes attributes)
: 

bool UpdateToClippingPlane(Plane plane,double uMagnitude,double vMagnitude,Guid clippedViewportId,ObjectAttributes attributes)
: 

bool UpdateToClippingPlane(Plane plane,double uMagnitude,double vMagnitude,IEnumerable<Guid> clippedViewportIds,ObjectAttributes attributes)
: 

bool UpdateToCurve(Curve curve,ObjectAttributes attributes)
: 

bool UpdateToEllipse(Ellipse ellipse,ObjectAttributes attributes)
: 

bool UpdateToExtrusion(Extrusion extrusion,ObjectAttributes attributes)
: 

bool UpdateToHatch(Hatch hatch,ObjectAttributes attributes)
: 

bool UpdateToLeader(Leader leader,ObjectAttributes attributes)
: 

bool UpdateToLine(Point3d from,Point3d to,ObjectAttributes attributes)
: 

bool UpdateToLinearDimension(LinearDimension dimension,ObjectAttributes attributes)
: 

bool UpdateToMesh(Mesh mesh,ObjectAttributes attributes)
: 

bool UpdateToPoint(Point3d point,ObjectAttributes attributes)
: 

bool UpdateToPointCloud(IEnumerable<Point3d> points,ObjectAttributes attributes)
: 

bool UpdateToPointCloud(PointCloud cloud,ObjectAttributes attributes)
: 

bool UpdateToPolyline(IEnumerable<Point3d> points,ObjectAttributes attributes)
: 

bool UpdateToRadialDimension(RadialDimension dimension,ObjectAttributes attributes)
: 

bool UpdateToSphere(Sphere sphere,ObjectAttributes attributes)
: 

bool UpdateToSurface(Surface surface,ObjectAttributes attributes)
: 

bool UpdateToText(string text,Plane plane,double height,string fontName,bool bold,bool italic,TextJustification justification,ObjectAttributes attributes)
: 

bool UpdateToText(TextEntity text,ObjectAttributes attributes)
: 

bool UpdateToTextDot(TextDot dot,ObjectAttributes attributes)
: 
