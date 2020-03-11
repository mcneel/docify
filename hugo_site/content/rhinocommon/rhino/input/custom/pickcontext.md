---
title: "PickContext"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

Utility for determining if objects are picked
```cs
public class PickContext : IDisposable
```
## Constructors

PickContext()
: 
## Properties

[GetObject](/rhinocommon/rhino/input/custom/getobject/) GetObjectUsed
: 

bool PickGroupsEnabled
: Thue if GroupObjects should be added to the pick list

[Line](/rhinocommon/rhino/geometry/line/) PickLine
: pick chord starts on near clipping plane and ends on far clipping plane.

[PickMode](/rhinocommon/rhino/input/custom/pickmode/) PickMode
: 

[PickStyle](/rhinocommon/rhino/input/custom/pickstyle/) PickStyle
: 

bool SubObjectSelectionEnabled
: True if the user had activated subobject selection

[RhinoView](/rhinocommon/rhino/display/rhinoview/) View
: This view can be a model view or a page view. When view is a page view,
     then you need to distingish between the viewports MainViewport() and
     ActiveViewport().  When m_view is a model view, both MainViewport() and
     ActiveViewport() return the world view's viewport.
## Methods

void Dispose()
: 

bool PickFrustumTest(BezierCurve bezier,double t,double depth,double distance)
: 

bool PickFrustumTest(BoundingBox box,bool boxCompletelyInFrustum)
: Fast test to check if a bounding box intersects a pick frustum.
: Returns - False if bbox is invalid or box does not intersect the pick frustum

bool PickFrustumTest(Line line,double t,double depth,double distance)
: 

bool PickFrustumTest(Mesh mesh,MeshPickStyle pickStyle,Point3d hitPoint,double depth,double distance,MeshHitFlag hitFlag,int hitIndex)
: Utility for picking meshes

bool PickFrustumTest(Mesh mesh,MeshPickStyle pickStyle,Point3d hitPoint,Point2d hitSurfaceUV,Point2d hitTextureCoordinate,double depth,double distance,MeshHitFlag hitFlag,int hitIndex)
: Utility for picking meshes

bool PickFrustumTest(NurbsCurve curve,double t,double depth,double distance)
: 

bool PickFrustumTest(Point3d point,double depth,double distance)
: Utility for picking 3d point
: Returns - True if there is a hit

bool PickFrustumTest(Point3d[] points,int pointIndex,double depth,double distance)
: 

bool PickFrustumTest(PointCloud cloud,int pointIndex,double depth,double distance)
: 

int[] PickMeshTopologyVertices(Mesh mesh)
: Utility for picking mesh vertices
: Returns - indices of mesh topology vertices that were picked

void SetPickTransform(Transform transform)
: 

void UpdateClippingPlanes()
: Updates the clipping plane information in pick region. The
     SetClippingPlanes and View fields must be called before calling
     UpdateClippingPlanes().
