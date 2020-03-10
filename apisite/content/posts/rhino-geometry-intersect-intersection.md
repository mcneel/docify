---
title: "Intersection"
draft: false
---

*Namespace: Rhino.Geometry.Intersect*

   Provides static methods for the computation of intersections, projections, sections and similar.
   
## Properties
#### static double MeshIntersectionsTolerancesCoefficient
- (summary) Offers a requested adjustment coefficient for mesh-mesh intersections tolerances.
     The value can be used to multiply the document absolute tolerance.This is only a UI value; it is up to developer to honor (or not) this request, depending on application needs.
- (since) 7.0
## Methods
#### static bool BrepBrep(Brep brepA,Brep brepB,double tolerance,Curve[] intersectionCurves,Point3d[] intersectionPoints)
- (summary) 
     Intersects two Breps.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static bool BrepPlane(Brep brep,Plane plane,double tolerance,Curve[] intersectionCurves,Point3d[] intersectionPoints)
- (summary) 
     Intersects a Brep with an (infinite) plane.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static bool BrepSurface(Brep brep,Surface surface,double tolerance,Curve[] intersectionCurves,Point3d[] intersectionPoints)
- (summary) 
     Intersects a Brep and a Surface.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static bool CurveBrep(Curve curve,Brep brep,double tolerance,Curve[] overlapCurves,Point3d[] intersectionPoints)
- (summary) 
     Intersects a curve with a Brep. This function returns the 3D points of intersection
     and 3D overlap curves. If an error occurs while processing overlap curves, this function 
     will return false, but it will still provide partial results.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static bool CurveBrep(Curve curve,Brep brep,double tolerance,Curve[] overlapCurves,Point3d[] intersectionPoints,double[] curveParameters)
- (summary) 
     Intersects a curve with a Brep. This function returns the 3D points of intersection, curve parameters at the intersection locations,
     and 3D overlap curves. If an error occurs while processing overlap curves, this function 
     will return false, but it will still provide partial results.
     
- (since) 6.0
- (returns) bool This is some return comment
#### static bool CurveBrep(Curve curve,Brep brep,double tolerance,double angleTolerance,double[] t)
- (summary) 
     Intersect a curve with a Brep. This function returns the intersection parameters on the curve.
     
- (since) 6.0
- (returns) bool This is some return comment
#### static bool CurveBrepFace(Curve curve,BrepFace face,double tolerance,Curve[] overlapCurves,Point3d[] intersectionPoints)
- (summary) 
     Intersects a curve with a Brep face.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static CurveIntersections CurveCurve(Curve curveA,Curve curveB,double tolerance,double overlapTolerance)
- (summary) 
     Finds the intersections between two curves. 
     
- (since) 5.0
- (returns) CurveIntersections This is some return comment
#### static CurveIntersections CurveCurveValidate(Curve curveA,Curve curveB,double tolerance,double overlapTolerance,int[] invalidIndices,TextLog textLog)
- (summary) 
     Finds the intersections between two curves.
     
- (since) 7.0
- (returns) CurveIntersections This is some return comment
#### static CurveIntersections CurveLine(Curve curve,Line line,double tolerance,double overlapTolerance)
- (summary) 
     Intersects a curve and an infinite line. 
     
- (since) 6.0
- (returns) CurveIntersections This is some return comment
#### static CurveIntersections CurvePlane(Curve curve,Plane plane,double tolerance)
- (summary) 
     Intersects a curve with an (infinite) plane.
     
- (since) 5.0
- (returns) CurveIntersections This is some return comment
#### static CurveIntersections CurveSelf(Curve curve,double tolerance)
- (summary) 
     Finds the places where a curve intersects itself. 
     
- (since) 5.0
- (returns) CurveIntersections This is some return comment
#### static CurveIntersections CurveSurface(Curve curve,Interval curveDomain,Surface surface,double tolerance,double overlapTolerance)
- (summary) 
     Intersects a sub-curve and a surface.
     
- (since) 5.0
- (returns) CurveIntersections This is some return comment
#### static CurveIntersections CurveSurface(Curve curve,Surface surface,double tolerance,double overlapTolerance)
- (summary) 
     Intersects a curve and a surface.
     
- (since) 5.0
- (returns) CurveIntersections This is some return comment
#### static CurveIntersections CurveSurfaceValidate(Curve curve,Interval curveDomain,Surface surface,double tolerance,double overlapTolerance,int[] invalidIndices,TextLog textLog)
- (summary) 
     Intersects a sub-curve and a surface.
     
- (since) 7.0
- (returns) CurveIntersections This is some return comment
#### static CurveIntersections CurveSurfaceValidate(Curve curve,Surface surface,double tolerance,double overlapTolerance,int[] invalidIndices,TextLog textLog)
- (summary) 
     Intersects a curve and a surface.
     
- (since) 7.0
- (returns) CurveIntersections This is some return comment
#### static bool LineBox(Line line,BoundingBox box,double tolerance,Interval lineParameters)
- (summary) 
     Intersects an infinite line and an axis aligned bounding box.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static bool LineBox(Line line,Box box,double tolerance,Interval lineParameters)
- (summary) 
     Intersects an infinite line with a box volume.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static LineCircleIntersection LineCircle(Line line,Circle circle,double t1,Point3d point1,double t2,Point3d point2)
- (summary) 
     Intersects a line with a circle using exact calculations.
     
- (since) 5.0
- (returns) LineCircleIntersection This is some return comment
#### static LineCylinderIntersection LineCylinder(Line line,Cylinder cylinder,Point3d intersectionPoint1,Point3d intersectionPoint2)
- (summary) 
     Intersects a line with a cylinder using exact calculations.
     
- (since) 5.0
- (returns) LineCylinderIntersection This is some return comment
#### static bool LineLine(Line lineA,Line lineB,double a,double b)
- (summary) 
     Finds the closest point between two infinite lines.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static bool LineLine(Line lineA,Line lineB,double a,double b,double tolerance,bool finiteSegments)
- (summary) 
     Intersects two lines.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static bool LinePlane(Line line,Plane plane,double lineParameter)
- (summary) 
     Intersects a line and a plane. This function only returns True if the 
     intersection result is a single point (i.e. if the line is coincident with 
     the plane then no intersection is assumed).
     
- (since) 5.0
- (returns) bool This is some return comment
#### static LineSphereIntersection LineSphere(Line line,Sphere sphere,Point3d intersectionPoint1,Point3d intersectionPoint2)
- (summary) 
     Intersects a line with a sphere using exact calculations.
     
- (since) 5.0
- (returns) LineSphereIntersection This is some return comment
#### static Point3d[] MeshLine(Mesh mesh,Line line,int[] faceIds)
- (summary) 
     Finds the intersection of a mesh and a line
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
#### static bool MeshMesh(IEnumerable<Mesh> meshes,double tolerance,Polyline[] intersections,bool overlapsPolylines,Polyline[] overlapsPolylinesResult,bool overlapsMesh,Mesh overlapsMeshResult,TextLog textLog,CancellationToken cancel,IProgress<double> progress)
- (summary) 
     Intersects meshes. Overlaps and perforations are provided in the output list.
     
- (since) 7.0
- (returns) bool This is some return comment
#### static Polyline[] MeshMeshAccurate(Mesh meshA,Mesh meshB,double tolerance)
- (summary) 
     Intersects two meshes. Overlaps and near misses are handled. This is an old method kept for compatibility.
     
- (since) 5.0
- (returns) Polyline[] This is some return comment
#### static Line[] MeshMeshFast(Mesh meshA,Mesh meshB)
- (summary) 
     This is an old overload kept for compatibility. Overlaps and near misses are ignored.
     
- (since) 5.0
- (returns) Line[] This is some return comment
#### static Polyline[] MeshPlane(Mesh mesh,IEnumerable<Plane> planes)
- (summary) 
     Intersects a mesh with a collection of (infinite) planes.
     
- (since) 5.0
- (returns) Polyline[] This is some return comment
#### static Polyline[] MeshPlane(Mesh mesh,Plane plane)
- (summary) 
     Intersects a mesh with an (infinite) plane.
     
- (since) 5.0
- (returns) Polyline[] This is some return comment
#### static Point3d[] MeshPolyline(Mesh mesh,PolylineCurve curve,int[] faceIds)
- (summary) 
     Finds the intersection of a mesh and a polyline.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
#### static double MeshRay(Mesh mesh,Ray3d ray)
- (summary) Finds the first intersection of a ray with a mesh.
- (since) 5.0
- (returns) double This is some return comment
#### static double MeshRay(Mesh mesh,Ray3d ray,int[] meshFaceIndices)
- (summary) Finds the first intersection of a ray with a mesh.
- (since) 5.0
- (returns) double This is some return comment
#### static PlaneCircleIntersection PlaneCircle(Plane plane,Circle circle,double firstCircleParameter,double secondCircleParameter)
- (summary) 
     Intersects a plane with a circle using exact calculations.
     
- (since) 5.0
- (returns) PlaneCircleIntersection This is some return comment
#### static bool PlanePlane(Plane planeA,Plane planeB,Line intersectionLine)
- (summary) 
     Intersects two planes and return the intersection line. If the planes are 
     parallel or coincident, no intersection is assumed.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static bool PlanePlanePlane(Plane planeA,Plane planeB,Plane planeC,Point3d intersectionPoint)
- (summary) 
     Intersects three planes to find the single point they all share.
     
- (since) 5.0
- (returns) bool This is some return comment
#### static PlaneSphereIntersection PlaneSphere(Plane plane,Sphere sphere,Circle intersectionCircle)
- (summary) 
     Intersects a plane with a sphere using exact calculations.
     
- (since) 5.0
- (returns) PlaneSphereIntersection This is some return comment
#### static Point3d[] ProjectPointsToBreps(IEnumerable<Brep> breps,IEnumerable<Point3d> points,Vector3d direction,double tolerance)
- (summary) 
     Projects points onto breps.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
#### static Point3d[] ProjectPointsToBrepsEx(IEnumerable<Brep> breps,IEnumerable<Point3d> points,Vector3d direction,double tolerance,int[] indices)
- (summary) 
     Projects points onto breps.
     
- (since) 5.10
- (returns) Point3d[] This is some return comment
#### static Point3d[] ProjectPointsToMeshes(IEnumerable<Mesh> meshes,IEnumerable<Point3d> points,Vector3d direction,double tolerance)
- (summary) 
     Projects points onto meshes.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
#### static Point3d[] ProjectPointsToMeshesEx(IEnumerable<Mesh> meshes,IEnumerable<Point3d> points,Vector3d direction,double tolerance,int[] indices)
- (summary) 
     Projects points onto meshes.
     
- (since) 5.10
- (returns) Point3d[] This is some return comment
#### static Point3d[] RayShoot(Ray3d ray,IEnumerable<GeometryBase> geometry,int maxReflections)
- (summary) 
     Computes point intersections that occur when shooting a ray to a collection of surfaces.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
#### static SphereSphereIntersection SphereSphere(Sphere sphereA,Sphere sphereB,Circle intersectionCircle)
- (summary) 
     Intersects two spheres using exact calculations.
     
- (since) 5.0
- (returns) SphereSphereIntersection This is some return comment
#### static bool SurfaceSurface(Surface surfaceA,Surface surfaceB,double tolerance,Curve[] intersectionCurves,Point3d[] intersectionPoints)
- (summary) 
     Intersects two Surfaces.
     
- (since) 5.0
- (returns) bool This is some return comment
