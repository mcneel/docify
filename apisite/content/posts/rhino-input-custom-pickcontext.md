---
title: "Rhino.Input.Custom.PickContext"
draft: false
---

# Constructors
## Rhino.Input.Custom.PickContext()
- (summary) 
- (since) 5.0
# Properties
## GetObject GetObjectUsed
- (summary) 
- (since) 5.0
## bool PickGroupsEnabled
- (summary) 
     Thue if GroupObjects should be added to the pick list
     
- (since) 5.0
## Geometry.Line PickLine
- (summary) 
     pick chord starts on near clipping plane and ends on far clipping plane.
     
- (since) 5.0
## PickMode PickMode
- (summary) 
- (since) 5.0
## PickStyle PickStyle
- (summary) 
- (since) 5.0
## bool SubObjectSelectionEnabled
- (summary) 
     True if the user had activated subobject selection
     
- (since) 5.0
## Display.RhinoView View
- (summary) 
     This view can be a model view or a page view. When view is a page view,
     then you need to distingish between the viewports MainViewport() and
     ActiveViewport().  When m_view is a model view, both MainViewport() and
     ActiveViewport() return the world view's viewport.
     
- (since) 5.0
# Methods
## void Dispose()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## bool PickFrustumTest(BezierCurve bezier,double t,double depth,double distance)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool PickFrustumTest(BoundingBox box,bool boxCompletelyInFrustum)
- (summary) 
     Fast test to check if a bounding box intersects a pick frustum.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool PickFrustumTest(Line line,double t,double depth,double distance)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool PickFrustumTest(Mesh mesh,MeshPickStyle pickStyle,Point3d hitPoint,double depth,double distance,MeshHitFlag hitFlag,int hitIndex)
- (summary) Utility for picking meshes
- (since) 5.0
- (returns) bool This is some return comment
## bool PickFrustumTest(Mesh mesh,MeshPickStyle pickStyle,Point3d hitPoint,Point2d hitSurfaceUV,Point2d hitTextureCoordinate,double depth,double distance,MeshHitFlag hitFlag,int hitIndex)
- (summary) Utility for picking meshes
- (since) 5.0
- (returns) bool This is some return comment
## bool PickFrustumTest(NurbsCurve curve,double t,double depth,double distance)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool PickFrustumTest(Point3d point,double depth,double distance)
- (summary) Utility for picking 3d point
- (since) 5.0
- (returns) bool This is some return comment
## bool PickFrustumTest(Point3d[] points,int pointIndex,double depth,double distance)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool PickFrustumTest(PointCloud cloud,int pointIndex,double depth,double distance)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## int[] PickMeshTopologyVertices(Mesh mesh)
- (summary) 
     Utility for picking mesh vertices
     
- (since) 5.0
- (returns) int[] This is some return comment
## void SetPickTransform(Transform transform)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void UpdateClippingPlanes()
- (summary) 
     Updates the clipping plane information in pick region. The
     SetClippingPlanes and View fields must be called before calling
     UpdateClippingPlanes().
     
- (since) 5.0
- (returns) void This is some return comment
