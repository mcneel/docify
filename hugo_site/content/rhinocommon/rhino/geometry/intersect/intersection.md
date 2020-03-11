---
title: "Intersection"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Intersect](../)*

Provides static methods for the computation of intersections, projections, sections and similar.
```cs
public class Intersection
```
## Properties

static double MeshIntersectionsTolerancesCoefficient
: Offers a requested adjustment coefficient for mesh-mesh intersections tolerances.
     The value can be used to multiply the document absolute tolerance.This is only a UI value; it is up to developer to honor (or not) this request, depending on application needs.
: since 7.0
## Methods

static bool BrepBrep(Brep brepA,Brep brepB,double tolerance,Curve[] intersectionCurves,Point3d[] intersectionPoints)
: Intersects two Breps.
: Returns - True on success; False on failure.

static bool BrepPlane(Brep brep,Plane plane,double tolerance,Curve[] intersectionCurves,Point3d[] intersectionPoints)
: Intersects a Brep with an (infinite) plane.
: Returns - True on success, False on failure.

static bool BrepSurface(Brep brep,Surface surface,double tolerance,Curve[] intersectionCurves,Point3d[] intersectionPoints)
: Intersects a Brep and a Surface.
: Returns - True on success; False on failure.

static bool CurveBrep(Curve curve,Brep brep,double tolerance,Curve[] overlapCurves,Point3d[] intersectionPoints)
: Intersects a curve with a Brep. This function returns the 3D points of intersection
     and 3D overlap curves. If an error occurs while processing overlap curves, this function 
     will return false, but it will still provide partial results.
: Returns - True on success, False on failure.

static bool CurveBrep(Curve curve,Brep brep,double tolerance,Curve[] overlapCurves,Point3d[] intersectionPoints,double[] curveParameters)
: Intersects a curve with a Brep. This function returns the 3D points of intersection, curve parameters at the intersection locations,
     and 3D overlap curves. If an error occurs while processing overlap curves, this function 
     will return false, but it will still provide partial results.
: Returns - True on success, False on failure.
: since 6.0

static bool CurveBrep(Curve curve,Brep brep,double tolerance,double angleTolerance,double[] t)
: Intersect a curve with a Brep. This function returns the intersection parameters on the curve.
: Returns - True on success, False on failure.
: since 6.0

static bool CurveBrepFace(Curve curve,BrepFace face,double tolerance,Curve[] overlapCurves,Point3d[] intersectionPoints)
: Intersects a curve with a Brep face.
: Returns - True on success, False on failure.

static [CurveIntersections](/rhinocommon/rhino/geometry/intersect/curveintersections/) CurveCurve(Curve curveA,Curve curveB,double tolerance,double overlapTolerance)
: Finds the intersections between two curves.
: Returns - A collection of intersection events.

static [CurveIntersections](/rhinocommon/rhino/geometry/intersect/curveintersections/) CurveCurveValidate(Curve curveA,Curve curveB,double tolerance,double overlapTolerance,int[] invalidIndices,TextLog textLog)
: Finds the intersections between two curves.
: Returns - A collection of intersection events.
: since 7.0

static [CurveIntersections](/rhinocommon/rhino/geometry/intersect/curveintersections/) CurveLine(Curve curve,Line line,double tolerance,double overlapTolerance)
: Intersects a curve and an infinite line.
: Returns - A collection of intersection events.
: since 6.0

static [CurveIntersections](/rhinocommon/rhino/geometry/intersect/curveintersections/) CurvePlane(Curve curve,Plane plane,double tolerance)
: Intersects a curve with an (infinite) plane.
: Returns - A list of intersection events or None if no intersections were recorded.

static [CurveIntersections](/rhinocommon/rhino/geometry/intersect/curveintersections/) CurveSelf(Curve curve,double tolerance)
: Finds the places where a curve intersects itself.
: Returns - A collection of intersection events.

static [CurveIntersections](/rhinocommon/rhino/geometry/intersect/curveintersections/) CurveSurface(Curve curve,Interval curveDomain,Surface surface,double tolerance,double overlapTolerance)
: Intersects a sub-curve and a surface.
: Returns - A collection of intersection events.

static [CurveIntersections](/rhinocommon/rhino/geometry/intersect/curveintersections/) CurveSurface(Curve curve,Surface surface,double tolerance,double overlapTolerance)
: Intersects a curve and a surface.
: Returns - A collection of intersection events.

static [CurveIntersections](/rhinocommon/rhino/geometry/intersect/curveintersections/) CurveSurfaceValidate(Curve curve,Interval curveDomain,Surface surface,double tolerance,double overlapTolerance,int[] invalidIndices,TextLog textLog)
: Intersects a sub-curve and a surface.
: Returns - A collection of intersection events.
: since 7.0

static [CurveIntersections](/rhinocommon/rhino/geometry/intersect/curveintersections/) CurveSurfaceValidate(Curve curve,Surface surface,double tolerance,double overlapTolerance,int[] invalidIndices,TextLog textLog)
: Intersects a curve and a surface.
: Returns - A collection of intersection events.
: since 7.0

static bool LineBox(Line line,BoundingBox box,double tolerance,Interval lineParameters)
: Intersects an infinite line and an axis aligned bounding box.
: Returns - True if the line intersects the box, False if no intersection occurs.

static bool LineBox(Line line,Box box,double tolerance,Interval lineParameters)
: Intersects an infinite line with a box volume.
: Returns - True if the line intersects the box, False if no intersection occurs.

static [LineCircleIntersection](/rhinocommon/rhino/geometry/intersect/linecircleintersection/) LineCircle(Line line,Circle circle,double t1,Point3d point1,double t2,Point3d point2)
: Intersects a line with a circle using exact calculations.
: Returns - If  is returned, only t1 and point1 will have valid values. 
     If  is returned, t2 and point2 will also be filled out.

static [LineCylinderIntersection](/rhinocommon/rhino/geometry/intersect/linecylinderintersection/) LineCylinder(Line line,Cylinder cylinder,Point3d intersectionPoint1,Point3d intersectionPoint2)
: Intersects a line with a cylinder using exact calculations.
: Returns - If None is returned, the first point is the point on the line closest
     to the cylinder and the second point is the point on the cylinder closest to
     the line. 
     If  is returned, the first point
     is the point on the line and the second point is the  same point on the
     cylinder.

static bool LineLine(Line lineA,Line lineB,double a,double b)
: Finds the closest point between two infinite lines.
: Returns - True if points are found and False if the lines are numerically parallel. 
     Numerically parallel means the 2x2 matrix:
     +AoA  -AoB-AoB  +BoB
     is numerically singular, where A = (lineA.To - lineA.From) and B = (lineB.To-lineB.From)

static bool LineLine(Line lineA,Line lineB,double a,double b,double tolerance,bool finiteSegments)
: Intersects two lines.
: Returns - True if a closest point can be calculated and the result passes the tolerance parameter test; otherwise false.

static bool LinePlane(Line line,Plane plane,double lineParameter)
: Intersects a line and a plane. This function only returns True if the 
     intersection result is a single point (i.e. if the line is coincident with 
     the plane then no intersection is assumed).
: Returns - True on success, False on failure.

static [LineSphereIntersection](/rhinocommon/rhino/geometry/intersect/linesphereintersection/) LineSphere(Line line,Sphere sphere,Point3d intersectionPoint1,Point3d intersectionPoint2)
: Intersects a line with a sphere using exact calculations.
: Returns - If  is returned, the first point is the point on the line closest to the sphere and 
     the second point is the point on the sphere closest to the line. 
     If  is returned, the first point is the point on the line and the second point is the 
     same point on the sphere.

static [Point3d](/rhinocommon/rhino/geometry/point3d/)[] MeshLine(Mesh mesh,Line line,int[] faceIds)
: Finds the intersection of a mesh and a line
: Returns - An array of points: one for each face that was passed by the faceIds out reference.

static bool MeshMesh(IEnumerable<Mesh> meshes,double tolerance,Polyline[] intersections,bool overlapsPolylines,Polyline[] overlapsPolylinesResult,bool overlapsMesh,Mesh overlapsMeshResult,TextLog textLog,CancellationToken cancel,IProgress<double> progress)
: Intersects meshes. Overlaps and perforations are provided in the output list.
: Returns - True, if the operation succeeded, otherwise false.
: since 7.0

static [Polyline](/rhinocommon/rhino/geometry/polyline/)[] MeshMeshAccurate(Mesh meshA,Mesh meshB,double tolerance)
: Intersects two meshes. Overlaps and near misses are handled. This is an old method kept for compatibility.
: Returns - An array of intersection and overlaps polylines.

static [Line](/rhinocommon/rhino/geometry/line/)[] MeshMeshFast(Mesh meshA,Mesh meshB)
: This is an old overload kept for compatibility. Overlaps and near misses are ignored.
: Returns - An array of intersection line segments, or null.

static [Polyline](/rhinocommon/rhino/geometry/polyline/)[] MeshPlane(Mesh mesh,IEnumerable<Plane> planes)
: Intersects a mesh with a collection of (infinite) planes.
: Returns - An array of polylines describing the intersection loops or None (Nothing in Visual Basic) if no intersections could be found.

static [Polyline](/rhinocommon/rhino/geometry/polyline/)[] MeshPlane(Mesh mesh,Plane plane)
: Intersects a mesh with an (infinite) plane.
: Returns - An array of polylines describing the intersection loops or None (Nothing in Visual Basic) if no intersections could be found.

static [Point3d](/rhinocommon/rhino/geometry/point3d/)[] MeshPolyline(Mesh mesh,PolylineCurve curve,int[] faceIds)
: Finds the intersection of a mesh and a polyline.
: Returns - An array of points: one for each face that was passed by the faceIds out reference.

static double MeshRay(Mesh mesh,Ray3d ray)
: Finds the first intersection of a ray with a mesh.
: Returns - >= 0.0 parameter along ray if successful.
     < 0.0 if no intersection found.

static double MeshRay(Mesh mesh,Ray3d ray,int[] meshFaceIndices)
: Finds the first intersection of a ray with a mesh.
: Returns - >= 0.0 parameter along ray if successful.
     < 0.0 if no intersection found.

static [PlaneCircleIntersection](/rhinocommon/rhino/geometry/intersect/planecircleintersection/) PlaneCircle(Plane plane,Circle circle,double firstCircleParameter,double secondCircleParameter)
: Intersects a plane with a circle using exact calculations.
: Returns - The type of intersection that occured.

static bool PlanePlane(Plane planeA,Plane planeB,Line intersectionLine)
: Intersects two planes and return the intersection line. If the planes are 
     parallel or coincident, no intersection is assumed.
: Returns - True on success, False on failure.

static bool PlanePlanePlane(Plane planeA,Plane planeB,Plane planeC,Point3d intersectionPoint)
: Intersects three planes to find the single point they all share.
: Returns - True on success, False on failure. If at least two out of the three planes 
     are parallel or coincident, failure is assumed.

static [PlaneSphereIntersection](/rhinocommon/rhino/geometry/intersect/planesphereintersection/) PlaneSphere(Plane plane,Sphere sphere,Circle intersectionCircle)
: Intersects a plane with a sphere using exact calculations.
: Returns - If  is returned, the intersectionCircle has a radius of zero and the center point 
     is the point on the plane closest to the sphere.

static [Point3d](/rhinocommon/rhino/geometry/point3d/)[] ProjectPointsToBreps(IEnumerable<Brep> breps,IEnumerable<Point3d> points,Vector3d direction,double tolerance)
: Projects points onto breps.
: Returns - Array of projected points, or None in case of any error or invalid input.

static [Point3d](/rhinocommon/rhino/geometry/point3d/)[] ProjectPointsToBrepsEx(IEnumerable<Brep> breps,IEnumerable<Point3d> points,Vector3d direction,double tolerance,int[] indices)
: Projects points onto breps.
: Returns - Array of projected points, or None in case of any error or invalid input.
: since 5.10

static [Point3d](/rhinocommon/rhino/geometry/point3d/)[] ProjectPointsToMeshes(IEnumerable<Mesh> meshes,IEnumerable<Point3d> points,Vector3d direction,double tolerance)
: Projects points onto meshes.
: Returns - Array of projected points, or None in case of any error or invalid input.

static [Point3d](/rhinocommon/rhino/geometry/point3d/)[] ProjectPointsToMeshesEx(IEnumerable<Mesh> meshes,IEnumerable<Point3d> points,Vector3d direction,double tolerance,int[] indices)
: Projects points onto meshes.
: Returns - Array of projected points, or None in case of any error or invalid input.
: since 5.10

static [Point3d](/rhinocommon/rhino/geometry/point3d/)[] RayShoot(Ray3d ray,IEnumerable<GeometryBase> geometry,int maxReflections)
: Computes point intersections that occur when shooting a ray to a collection of surfaces.
: Returns - An array of points: one for each face that was passed by the faceIds out reference.

static [SphereSphereIntersection](/rhinocommon/rhino/geometry/intersect/spheresphereintersection/) SphereSphere(Sphere sphereA,Sphere sphereB,Circle intersectionCircle)
: Intersects two spheres using exact calculations.
: Returns - The intersection type.

static bool SurfaceSurface(Surface surfaceA,Surface surfaceB,double tolerance,Curve[] intersectionCurves,Point3d[] intersectionPoints)
: Intersects two Surfaces.
: Returns - True on success, False on failure.
