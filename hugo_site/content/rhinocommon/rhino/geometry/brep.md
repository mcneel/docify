---
title: "Brep"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Boundary Representation. A surface or polysurface along with trim curve information.
```cs
[Serializable]
public class Brep : GeometryBase
```
## Constructors

Brep()
: Initializes a new empty brep
: since 5.4
## Properties

[BrepCurveList](/rhinocommon/rhino/geometry/collections/brepcurvelist/) Curves2D
: Parameter space trimming curves (used by trims)
: since 5.6

[BrepCurveList](/rhinocommon/rhino/geometry/collections/brepcurvelist/) Curves3D
: Pointers to 3d curves (used by edges)
: since 5.6

[BrepEdgeList](/rhinocommon/rhino/geometry/collections/brepedgelist/) Edges
: Gets the brep edges list accessor.

[BrepFaceList](/rhinocommon/rhino/geometry/collections/brepfacelist/) Faces
: Gets the brep faces list accessor.

bool IsManifold
: Gets a value indicating whether or not the Brep is manifold. 
     Non-Manifold breps have at least one edge that is shared among three or more faces.

bool IsSolid
: Determines whether this brep is a solid, or a closed oriented manifold.

bool IsSurface
: Returns True if the Brep has a single face and that face is geometrically the same
     as the underlying surface.  I.e., the face has trivial trimming.
     In this case, the surface is the first face surface. The flag
     Brep.Faces[0].OrientationIsReversed records the correspondence between the surface's
     natural parametric orientation and the orientation of the Brep.trivial trimming here means that there is only one loop curve in the brep
     and that loop curve is the same as the underlying surface boundary.

[BrepLoopList](/rhinocommon/rhino/geometry/collections/breplooplist/) Loops
: Gets the brep loop list accessor.

[BrepSolidOrientation](/rhinocommon/rhino/geometry/brepsolidorientation/) SolidOrientation
: Gets the solid orientation state of this Brep.

[BrepSurfaceList](/rhinocommon/rhino/geometry/collections/brepsurfacelist/) Surfaces
: Parametric surfaces used by faces
: since 5.4

[BrepTrimList](/rhinocommon/rhino/geometry/collections/breptrimlist/) Trims
: Gets the brep trims list accessor.
: since 5.1

[BrepVertexList](/rhinocommon/rhino/geometry/collections/brepvertexlist/) Vertices
: Gets the brep vertices list accessor.
: since 5.5
## Methods

static Brep ChangeSeam(BrepFace face,int direction,double parameter,double tolerance)
: Change the seam of a closed trimmed surface.
: Returns - A new Brep that has the same geoemtry as the face with a relocated seam if successful, or None on failure.
: since 6.4

static Brep CopyTrimCurves(BrepFace trimSource,Surface surfaceSource,double tolerance)
: Copy all trims from a Brep face onto a surface.
: Returns - A brep with the shape of surfaceSource and the trims of trimSource or None on failure.

static Brep CreateBaseballSphere(Point3d center,double radius,double tolerance)
: Creates a brep representation of the sphere with two similar trimmed NURBS surfaces, and no singularities.
: Returns - A new brep, or None on error.
: since 6.0

static [Curve](/rhinocommon/rhino/geometry/curve/) CreateBlendShape(BrepFace face0,BrepEdge edge0,double t0,bool rev0,BlendContinuity continuity0,BrepFace face1,BrepEdge edge1,double t1,bool rev1,BlendContinuity continuity1)
: Makes a curve blend between points on two surface edges. The blend will be tangent to the surfaces and perpendicular to the edges.
: Returns - The blend curve on success. None on failure
: since 6.0

static Brep[] CreateBlendSurface(BrepFace face0,BrepEdge edge0,Interval domain0,bool rev0,BlendContinuity continuity0,BrepFace face1,BrepEdge edge1,Interval domain1,bool rev1,BlendContinuity continuity1)
: Makes a surface blend between two surface edges.
: Returns - Array of Breps if successful.
: since 6.0

static Brep[] CreateBooleanDifference(Brep firstBrep,Brep secondBrep,double tolerance)
: Compute the Solid Difference of two Breps.
: Returns - An array of Brep results or None on failure.

static Brep[] CreateBooleanDifference(Brep firstBrep,Brep secondBrep,double tolerance,bool manifoldOnly)
: Compute the Solid Difference of two Breps.
: Returns - An array of Brep results or None on failure.
: since 6.0

static Brep[] CreateBooleanDifference(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance)
: Compute the Solid Difference of two sets of Breps.
: Returns - An array of Brep results or None on failure.

static Brep[] CreateBooleanDifference(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance,bool manifoldOnly)
: Compute the Solid Difference of two sets of Breps.
: Returns - An array of Brep results or None on failure.
: since 6.0

static Brep[] CreateBooleanIntersection(Brep firstBrep,Brep secondBrep,double tolerance)
: Compute the Solid Intersection of two Breps.
: Returns - An array of Brep results or None on failure.

static Brep[] CreateBooleanIntersection(Brep firstBrep,Brep secondBrep,double tolerance,bool manifoldOnly)
: Compute the Solid Intersection of two Breps.
: Returns - An array of Brep results or None on failure.
: since 6.0

static Brep[] CreateBooleanIntersection(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance)
: Compute the Solid Intersection of two sets of Breps.
: Returns - An array of Brep results or None on failure.

static Brep[] CreateBooleanIntersection(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance,bool manifoldOnly)
: Compute the Solid Intersection of two sets of Breps.
: Returns - An array of Brep results or None on failure.
: since 6.0

static Brep[] CreateBooleanSplit(Brep firstBrep,Brep secondBrep,double tolerance)
: Splits shared areas of Breps and creates separate Breps from the shared and unshared parts.
: Returns - An array of Brep if successful, an empty array on failure.
: since 6.16

static Brep[] CreateBooleanSplit(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance)
: Splits shared areas of Breps and creates separate Breps from the shared and unshared parts.
: Returns - An array of Brep if successful, an empty array on failure.
: since 6.16

static Brep[] CreateBooleanUnion(IEnumerable<Brep> breps,double tolerance)
: Compute the Boolean Union of a set of Breps.
: Returns - An array of Brep results or None on failure.

static Brep[] CreateBooleanUnion(IEnumerable<Brep> breps,double tolerance,bool manifoldOnly)
: Compute the Boolean Union of a set of Breps.
: Returns - An array of Brep results or None on failure.
: since 6.0

static Brep[] CreateChamferSurface(BrepFace face0,Point2d uv0,double radius0,BrepFace face1,Point2d uv1,double radius1,bool trim,bool extend,double tolerance,Brep[] outBreps0,Brep[] outBreps1)
: Creates a ruled surface as a bevel between two input surface edges.
: Returns - Array of Breps if successful.
: since 6.0

static Brep[] CreateChamferSurface(BrepFace face0,Point2d uv0,double radius0,BrepFace face1,Point2d uv1,double radius1,bool extend,double tolerance)
: Creates a ruled surface as a bevel between two input surface edges.
: Returns - Array of Breps if successful.
: since 6.0

static [Curve](/rhinocommon/rhino/geometry/curve/)[] CreateContourCurves(Brep brepToContour,Plane sectionPlane)
: Constructs the contour curves for a brep, using a slicing plane.
: Returns - An array with intersected curves. This array can be empty.

static [Curve](/rhinocommon/rhino/geometry/curve/)[] CreateContourCurves(Brep brepToContour,Point3d contourStart,Point3d contourEnd,double interval)
: Constructs the contour curves for a brep at a specified interval.
: Returns - An array with intersected curves. This array can be empty.

static [Mesh](/rhinocommon/rhino/geometry/mesh/)[] CreateCurvatureAnalysisMesh(Brep brep,CurvatureAnalysisSettingsState state)
: Create an array of analysis meshes for the brep using the specified settings.
     Meshes aren't set on the brep.
: Returns - True if meshes were created
: since 6.0

static Brep[] CreateDevelopableLoft(Curve crv0,Curve crv1,bool reverse0,bool reverse1,int density)
: Creates a single developable surface between two curves.
: Returns - The output Breps if successful, otherwise an empty array.
: since 6.10

static Brep[] CreateDevelopableLoft(NurbsCurve rail0,NurbsCurve rail1,IEnumerable<Point2d> fixedRulings)
: Creates a single developable surface between two curves.
: Returns - The output Breps if successful, otherwise an empty array.
: since 6.10

static Brep CreateEdgeSurface(IEnumerable<Curve> curves)
: Constructs a coons patch from 2, 3, or 4 curves.
: Returns - resulting brep or None on failure.

static Brep[] CreateFilletEdges(Brep brep,IEnumerable<int> edgeIndices,IEnumerable<double> startRadii,IEnumerable<double> endRadii,BlendType blendType,RailType railType,double tolerance)
: Fillets, chamfers, or blends the edges of a brep.
: Returns - Array of Breps if successful.
: since 6.0

static Brep[] CreateFilletSurface(BrepFace face0,Point2d uv0,BrepFace face1,Point2d uv1,double radius,bool trim,bool extend,double tolerance,Brep[] outBreps0,Brep[] outBreps1)
: Creates a constant-radius round surface between two surfaces.
: Returns - Array of Breps if successful.
: since 6.0

static Brep[] CreateFilletSurface(BrepFace face0,Point2d uv0,BrepFace face1,Point2d uv1,double radius,bool extend,double tolerance)
: Creates a constant-radius round surface between two surfaces.
: Returns - Array of Breps if successful.
: since 6.0

static Brep CreateFromBox(BoundingBox box)
: Constructs new brep that matches a bounding box.
: Returns - A new brep; or None on failure.

static Brep CreateFromBox(Box box)
: Constructs new brep that matches an aligned box.
: Returns - A Brep with 6 faces that is similar to the Box.

static Brep CreateFromBox(IEnumerable<Point3d> corners)
: Constructs new brep from 8 corner points.
: Returns - A new brep, or None on error.

static Brep CreateFromCone(Cone cone,bool capBottom)
: Constructs a Brep representation of the cone with a single
     face for the cone, an edge along the cone seam, 
     and vertices at the base and apex ends of this seam edge.
     The optional cap is a single face with one circular edge 
     starting and ending at the base vertex.
: Returns - A Brep if successful, None on error.

static Brep CreateFromCornerPoints(Point3d corner1,Point3d corner2,Point3d corner3,double tolerance)
: Makes a brep with one face.
: Returns - A boundary representation, or None on error.

static Brep CreateFromCornerPoints(Point3d corner1,Point3d corner2,Point3d corner3,Point3d corner4,double tolerance)
: make a Brep with one face.
: Returns - A boundary representation, or None on error.

static Brep CreateFromCylinder(Cylinder cylinder,bool capBottom,bool capTop)
: Constructs a Brep definition of a cylinder.
: Returns - A Brep representation of the cylinder with a single face for the cylinder,
     an edge along the cylinder seam, and vertices at the bottom and top ends of this
     seam edge. The optional bottom/top caps are single faces with one circular edge
     starting and ending at the bottom/top vertex.

static Brep CreateFromJoinedEdges(Brep brep0,int edgeIndex0,Brep brep1,int edgeIndex1,double joinTolerance)
: Joins two naked edges, or edges that are coincident or close together, from two Breps.
: Returns - The resulting Brep if successful, None on failure.
: since 6.0

static Brep[] CreateFromLoft(IEnumerable<Curve> curves,Point3d start,Point3d end,LoftType loftType,bool closed)
: Constructs one or more Breps by lofting through a set of curves.
: Returns - Constructs a closed surface, continuing the surface past the last curve around to the
     first curve. Available when you have selected three shape curves.

static Brep[] CreateFromLoftRebuild(IEnumerable<Curve> curves,Point3d start,Point3d end,LoftType loftType,bool closed,int rebuildPointCount)
: Constructs one or more Breps by lofting through a set of curves. Input for the loft is simplified by
     rebuilding to a specified number of control points.
: Returns - Constructs a closed surface, continuing the surface past the last curve around to the
     first curve. Available when you have selected three shape curves.

static Brep[] CreateFromLoftRefit(IEnumerable<Curve> curves,Point3d start,Point3d end,LoftType loftType,bool closed,double refitTolerance)
: Constructs one or more Breps by lofting through a set of curves. Input for the loft is simplified by
     refitting to a specified tolerance.
: Returns - Constructs a closed surface, continuing the surface past the last curve around to the
     first curve. Available when you have selected three shape curves.

static Brep CreateFromMesh(Mesh mesh,bool trimmedTriangles)
: Create a brep representation of a mesh
: since 5.1

static Brep CreateFromOffsetFace(BrepFace face,double offsetDistance,double offsetTolerance,bool bothSides,bool createSolid)
: Offsets a face including trim information to create a new brep.
: Returns - A new brep if successful. The brep can be disjoint if bothSides is True and createSolid is false,
     or if createSolid is True and connecting the offsets with side surfaces fails.
     None if unsuccessful.

static Brep CreateFromRevSurface(RevSurface surface,bool capStart,bool capEnd)
: Constructs a brep form of a surface of revolution.
: Returns - A Brep if successful, None on error.

static Brep CreateFromSphere(Sphere sphere)
: Constructs a Brep definition of a sphere.
: Returns - A Brep if successful, None on error.

static Brep CreateFromSurface(Surface surface)
: Constructs a Brep from a surface. The resulting Brep has an outer boundary made
     from four trims. The trims are ordered so that they run along the south, east,
     north, and then west side of the surface's parameter space.
: Returns - Resulting brep or None on failure.

static Brep[] CreateFromSweep(Curve rail,Curve shape,bool closed,double tolerance)
: Sweep1 function that fits a surface through a profile curve that define the surface cross-sections
     and one curve that defines a surface edge.
: Returns - Array of Brep sweep results

static Brep[] CreateFromSweep(Curve rail1,Curve rail2,Curve shape,bool closed,double tolerance)
: General 2 rail sweep. If you are not producing the sweep results that you are after, then
     use the SweepTwoRail class with options to generate the swept geometry.
: Returns - Array of Brep sweep results

static Brep[] CreateFromSweep(Curve rail1,Curve rail2,IEnumerable<Curve> shapes,bool closed,double tolerance)
: General 2 rail sweep. If you are not producing the sweep results that you are after, then
     use the SweepTwoRail class with options to generate the swept geometry.
: Returns - Array of Brep sweep results

static Brep[] CreateFromSweep(Curve rail1,Curve rail2,IEnumerable<Curve> shapes,Point3d start,Point3d end,bool closed,double tolerance,SweepRebuild rebuild,int rebuildPointCount,double refitTolerance,bool preserveHeight)
: Sweep2 function that fits a surface through profile curves that define the surface cross-sections
     and two curves that defines a surface edge.
: Returns - Array of Brep sweep results
: since 6.16

static Brep[] CreateFromSweep(Curve rail,IEnumerable<Curve> shapes,bool closed,double tolerance)
: Sweep1 function that fits a surface through profile curves that define the surface cross-sections
     and one curve that defines a surface edge.
: Returns - Array of Brep sweep results

static Brep[] CreateFromSweepInParts(Curve rail1,Curve rail2,IEnumerable<Curve> shapes,IEnumerable<Point2d> rail_params,bool closed,double tolerance)
: Makes a 2 rail sweep. Like CreateFromSweep but the result is split where parameterization along a rail changes abruptly.
: Returns - Array of Brep sweep results
: since 6.0

static Brep[] CreateFromSweepSegmented(Curve rail,Curve shape,bool closed,double tolerance)
: Sweep1 function that fits a surface through a profile curve that define the surface cross-sections
     and one curve that defines a surface edge. The Segmented version breaks the rail at curvature kinks
     and sweeps each piece separately, then put the results together into a Brep.
: Returns - Array of Brep sweep results
: since 6.14

static Brep[] CreateFromSweepSegmented(Curve rail,IEnumerable<Curve> shapes,bool closed,double tolerance)
: Sweep1 function that fits a surface through a series of profile curves that define the surface cross-sections
     and one curve that defines a surface edge. The Segmented version breaks the rail at curvature kinks
     and sweeps each piece separately, then put the results together into a Brep.
: Returns - Array of Brep sweep results
: since 6.14

static Brep[] CreateFromTaperedExtrude(Curve curveToExtrude,double distance,Vector3d direction,Point3d basePoint,double draftAngleRadians,ExtrudeCornerType cornerType)
: Extrude a curve to a taper making a brep (potentially more than 1)
: Returns - array of breps on success
: since 5.1

static Brep[] CreateFromTaperedExtrude(Curve curveToExtrude,double distance,Vector3d direction,Point3d basePoint,double draftAngleRadians,ExtrudeCornerType cornerType,double tolerance,double angleToleranceRadians)
: Extrude a curve to a taper making a brep (potentially more than 1)
: Returns - array of breps on success
: since 6.0

static Brep[] CreateFromTaperedExtrudeWithRef(Curve curve,Vector3d direction,double distance,double draftAngle,Plane plane,double tolerance)
: Creates one or more Breps by extruding a curve a distance along an axis with draft angle.
: Returns - An array of Breps if successful.
: since 6.14

static Brep[] CreateOffsetBrep(Brep brep,double distance,bool solid,bool extend,double tolerance,Brep[] outBlends,Brep[] outWalls)
: Offsets a Brep.
: Returns - Array of Breps if successful. If the function succeeds in offsetting, a
     single Brep will be returned. Otherwise, the array will contain the 
     offset surfaces, outBlends will contain the set of blends used to fill
     in gaps (if extend is false), and outWalls will contain the set of wall
     surfaces that was supposed to join the offset to the original (if solid
     is true).
: since 6.0

static Brep CreatePatch(IEnumerable<GeometryBase> geometry,int uSpans,int vSpans,double tolerance)
: Constructs a brep patch.
     This is the simple version of fit that uses a plane with u x v spans.
     It makes a plane by fitting to the points from the input geometry to use as the starting surface.
     The surface has the specified u and v span count.
: Returns - A brep fit through input on success, or None on error.

static Brep CreatePatch(IEnumerable<GeometryBase> geometry,Surface startingSurface,double tolerance)
: Constructs a brep patch.
     This is the simple version of fit that uses a specified starting surface.
: Returns - Brep fit through input on success, or None on error.

static Brep CreatePatch(IEnumerable<GeometryBase> geometry,Surface startingSurface,int uSpans,int vSpans,bool trim,bool tangency,double pointSpacing,double flexibility,double surfacePull,bool[] fixEdges,double tolerance)
: Constructs a brep patch using all controls
: Returns - A brep fit through input on success, or None on error.

static Brep[] CreatePipe(Curve rail,double radius,bool localBlending,PipeCapMode cap,bool fitRail,double absoluteTolerance,double angleToleranceRadians)
: Creates a single walled pipe
: Returns - Array of created pipes on success

static Brep[] CreatePipe(Curve rail,IEnumerable<double> railRadiiParameters,IEnumerable<double> radii,bool localBlending,PipeCapMode cap,bool fitRail,double absoluteTolerance,double angleToleranceRadians)
: Creates a single walled pipe
: Returns - Array of created pipes on success

static Brep[] CreatePlanarBreps(Curve inputLoop)
: Constructs a set of planar breps as outlines by the loops.
: Returns - An array of Planar Breps.

static Brep[] CreatePlanarBreps(Curve inputLoop,double tolerance)
: Constructs a set of planar breps as outlines by the loops.
: Returns - An array of Planar Breps.
: since 6.0

static Brep[] CreatePlanarBreps(CurveList inputLoops)
: Constructs a set of planar Breps as outlines by the loops.
: Returns - An array of Planar Breps or None on error.

static Brep[] CreatePlanarBreps(CurveList inputLoops,double tolerance)
: Constructs a set of planar Breps as outlines by the loops.
: Returns - An array of Planar Breps.
: since 6.0

static Brep[] CreatePlanarBreps(IEnumerable<Curve> inputLoops)
: Constructs a set of planar breps as outlines by the loops.
: Returns - An array of Planar Breps.

static Brep[] CreatePlanarBreps(IEnumerable<Curve> inputLoops,double tolerance)
: Constructs a set of planar breps as outlines by the loops.
: Returns - An array of Planar Breps.
: since 6.0

static Brep CreateQuadSphere(Sphere sphere)
: Constructs a Brep definition of a quad sphere.
: Returns - A Brep if successful, None on error.
: since 6.0

static Brep[] CreateShell(Brep brep,IEnumerable<int> facesToRemove,double distance,double tolerance)
: Creates a hollowed out shell from a solid Brep. Function only operates on simple, solid, manifold Breps.
: Returns - An array of Brep results or None on failure.
: since 5.4

static Brep[] CreateSolid(IEnumerable<Brep> breps,double tolerance)
: Constructs closed polysurfaces from surfaces and polysurfaces that bound a region in space.
: Returns - The resulting polysurfaces on success or None on failure.

static Brep CreateTrimmedPlane(Plane plane,Curve curve)
: Create a Brep trimmed plane.
: Returns - Resulting brep or None on failure.
: since 6.0

static Brep CreateTrimmedPlane(Plane plane,IEnumerable<Curve> curves)
: Create a Brep trimmed plane.
: Returns - Resulting brep or None on failure.
: since 6.0

static Brep CreateTrimmedSurface(BrepFace trimSource,Surface surfaceSource)
: Constructs a Brep using the trimming information of a brep face and a surface. 
     Surface must be roughly the same shape and in the same location as the trimming brep face.
: Returns - A brep with the shape of surfaceSource and the trims of trimSource or None on failure.

static Brep CreateTrimmedSurface(BrepFace trimSource,Surface surfaceSource,double tolerance)
: Constructs a Brep using the trimming information of a brep face and a surface. 
     Surface must be roughly the same shape and in the same location as the trimming brep face.
: Returns - A brep with the shape of surfaceSource and the trims of trimSource or None on failure.
: since 6.0

static Brep[] JoinBreps(IEnumerable<Brep> brepsToJoin,double tolerance)
: Joins the breps in the input array at any overlapping edges to form
     as few as possible resulting breps. There may be more than one brep in the result array.
: Returns - new joined breps on success, None on failure.

static Brep MergeBreps(IEnumerable<Brep> brepsToMerge,double tolerance)
: Combines two or more breps into one. A merge is like a boolean union that keeps the inside pieces. This
     function creates non-manifold Breps which in general are unusual in Rhino. You may want to consider using
     JoinBreps or CreateBooleanUnion functions instead.
: Returns - Single merged Brep on success. Null on error.

static Brep MergeSurfaces(Brep brep0,Brep brep1,double tolerance,double angleToleranceRadians)
: Merges two surfaces into one surface at untrimmed edges. Both surfaces must be untrimmed and share an edge.
: Returns - The merged Brep if successful, None if not successful.
: since 6.0

static Brep MergeSurfaces(Brep brep0,Brep brep1,double tolerance,double angleToleranceRadians,Point2d point0,Point2d point1,double roundness,bool smooth)
: Merges two surfaces into one surface at untrimmed edges. Both surfaces must be untrimmed and share an edge.
: Returns - The merged Brep if successful, None if not successful.
: since 6.0

static Brep MergeSurfaces(Surface surface0,Surface surface1,double tolerance,double angleToleranceRadians)
: Merges two surfaces into one surface at untrimmed edges.
: Returns - The merged surfaces as a Brep if successful, None if not successful.
: since 6.0

static Brep TryConvertBrep(GeometryBase geometry)
: Attempts to convert a generic Geometry object into a Brep.
: Returns - Brep if a brep form could be created or None if this is not possible. If geometry was of type Brep to 
     begin with, the same object is returned, i.e. it is not duplicated.

int AddEdgeCurve(Curve curve)
: Add a 3d curve used by the brep edges
: Returns - Index used to reference this geometry in the edge curve list
: since 5.4

int AddSurface(Surface surface)
: Adds a 3D surface used by BrepFace.
: Returns - Index that should be used to reference the geometry.
     -1 is returned if the input is not acceptable.

int AddTrimCurve(Curve curve)
: Add a 2d curve used by the brep trims
: Returns - Index used to reference this geometry in the trimming curve list
: since 5.4

void Append(Brep other)
: Appends a copy of another brep to this and updates indices of appended
     brep parts.  Duplicates are not removed
: since 5.4

Brep CapPlanarHoles(double tolerance)
: Returns a new Brep that is equivalent to this Brep with all planar holes capped.
: Returns - New brep on success. None on error.

[Point3d](/rhinocommon/rhino/geometry/point3d/) ClosestPoint(Point3d testPoint)
: Finds a point on the brep that is closest to testPoint.
: Returns - The point on the Brep closest to testPoint or Point3d.Unset if the operation failed.

bool ClosestPoint(Point3d testPoint,Point3d closestPoint,ComponentIndex ci,double s,double t,double maximumDistance,Vector3d normal)
: Finds a point on a Brep that is closest to testPoint.
     The method searches all Brep faces looking for the one closest to testPoint.
     When found, if the closest point falls on the inactive region of the face, then 
     the method finds the face's edge that is closest to testPoint.
: Returns - True if the operation succeeded; otherwise, false.

void Compact()
: Deletes any unreferenced objects from arrays, reindexes as needed, and
     shrinks arrays to minimum required size. Uses CUllUnused* members to
     delete any unreferenced objects from arrays.

bool CullUnused2dCurves()
: Culls 3d curves not referenced by an edge.
: Returns - True if operation succeeded; False otherwise.

bool CullUnused3dCurves()
: Culls 2d curves not referenced by a trim.
: Returns - True if operation succeeded; False otherwise.

bool CullUnusedEdges()
: Culls edges with m_edge_index == -1.
: Returns - True if operation succeeded; False otherwise.

bool CullUnusedFaces()
: Culls faces with m_face_index == -1.
: Returns - True if operation succeeded; False otherwise.

bool CullUnusedLoops()
: Culls loops with m_loop_index == -1.
: Returns - True if operation succeeded; False otherwise.

bool CullUnusedSurfaces()
: Culls surfaces not referenced by a face.
: Returns - True if operation succeeded; False otherwise.

bool CullUnusedTrims()
: Culls trims with m_trim_index == -1.
: Returns - True if operation succeeded; False otherwise.

bool CullUnusedVertices()
: Culls vertices with m_vertex_index == -1.
: Returns - True if operation succeeded; False otherwise.

[GeometryBase](/rhinocommon/rhino/geometry/geometrybase/) Duplicate()
: Copies this brep.
: Returns - A brep.

Brep DuplicateBrep()
: Same as , but already performs a cast to a brep.
     This cast always succeeds.
: Returns - A brep.

[Curve](/rhinocommon/rhino/geometry/curve/)[] DuplicateEdgeCurves()
: Duplicate all the edges of this Brep.
: Returns - An array of edge curves.

[Curve](/rhinocommon/rhino/geometry/curve/)[] DuplicateEdgeCurves(bool nakedOnly)
: Duplicate edges of this Brep.
: Returns - Array of edge curves on success.

[Curve](/rhinocommon/rhino/geometry/curve/)[] DuplicateNakedEdgeCurves(bool outer,bool inner)
: Duplicate naked edges of this Brep
: since 5.7

Brep DuplicateSubBrep(IEnumerable<int> faceIndices)
: Copy a subset of this Brep into another Brep.
: Returns - A brep, or None on error.

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] DuplicateVertices()
: Duplicate all the corner vertices of this Brep.
: Returns - An array or corner vertices.

void FindCoincidentBrepComponents(Point3d point,double tolerance,int[] faces,int[] edges,int[] vertices)
: Find the indices of all brep faces, edges and vertices that are within tolerance of a test-point.
: since 6.2

void Flip()
: Reverses entire brep orientation of all faces.

double GetArea()
: Compute the Area of the Brep. If you want proper Area data with moments 
     and error information, use the AreaMassProperties class.
: Returns - The area of the Brep.

double GetArea(double relativeTolerance,double absoluteTolerance)
: Compute the Area of the Brep. If you want proper Area data with moments 
     and error information, use the AreaMassProperties class.
: Returns - The area of the Brep.

bool GetPointInside(double tolerance,Point3d point)
: Finds a point inside of a solid Brep.
: Returns - Returns False if the input is not solid and manifold, if the Brep's bounding box is less than 2.0 * tolerance wide, 
     or if no point could be found due to ray shooting or other errors. Otherwise, True is returned.
: since 6.19

[BrepRegion](/rhinocommon/rhino/geometry/brepregion/)[] GetRegions()
: Gets an array containing all regions in this brep.
: Returns - An array of regions in this brep. This array can be empty, but not null.

double GetVolume()
: Compute the Volume of the Brep. If you want proper Volume data with moments 
     and error information, use the VolumeMassProperties class.
: Returns - The volume of the Brep.

double GetVolume(double relativeTolerance,double absoluteTolerance)
: Compute the Volume of the Brep. If you want proper Volume data with moments 
     and error information, use the VolumeMassProperties class.
: Returns - The volume of the Brep.

[Curve](/rhinocommon/rhino/geometry/curve/)[] GetWireframe(int density)
: Constructs all the Wireframe curves for this Brep.
: Returns - An array of Wireframe curves or None on failure.

bool IsDuplicate(Brep other,double tolerance)
: See if this and other are same brep geometry.
: Returns - True if breps are the same.

bool IsPointInside(Point3d point,double tolerance,bool strictlyIn)
: Determines if point is inside a Brep.  This question only makes sense when
     the brep is a closed and manifold.  This function does not not check for
     closed or manifold, so result is not valid in those cases.  Intersects
     a line through point with brep, finds the intersection point Q closest
     to point, and looks at face normal at Q.  If the point Q is on an edge
     or the intersection is not transverse at Q, then another line is used.
: Returns - True if point is in, False if not.

bool IsValidGeometry(string log)
: Expert user function that tests the brep to see if its geometry information is valid.
     The value of brep.IsValidTopology() must be True before brep.IsValidGeometry() can be
     safely called.
: Returns - A value that indicates whether the geometry is valid.

bool IsValidTolerancesAndFlags(string log)
: Expert user function that tests the brep to see if its tolerances and
     flags are valid.  The values of brep.IsValidTopology() and
     brep.IsValidGeometry() must be True before brep.IsValidTolerancesAndFlags()
     can be safely called.
: Returns - A value that indicates

bool IsValidTopology(string log)
: Tests the brep to see if its topology information is valid.
: Returns - True if the topology is valid; False otherwise.

bool Join(Brep otherBrep,double tolerance,bool compact)
: If any edges of this brep overlap edges of otherBrep, merge a copy of otherBrep into this
     brep joining all edges that overlap within tolerance.
: Returns - True if any edges were joined.

bool JoinEdges(int edgeIndex0,int edgeIndex1,double joinTolerance,bool compact)
: Joins two naked edges, or edges that are coincident or close together.
: Returns - True if successful, False otherwise.
: since 6.0

int JoinNakedEdges(double tolerance)
: Joins naked edge pairs within the same brep that overlap within tolerance.
: Returns - number of joins made.

bool MakeValidForV2()
: No support is available for this function.
     Expert user function that converts all geometry in brep to nurbs form.
: since 6.0

bool MergeCoplanarFaces(double tolerance)
: Merges adjacent coplanar faces into single faces.
: Returns - True if faces were merged, False if no faces were merged.

bool MergeCoplanarFaces(double tolerance,double angleTolerance)
: Merges adjacent coplanar faces into single faces.
: Returns - True if faces were merged, False if no faces were merged.
: since 6.10

void RebuildTrimsForV2(BrepFace face,NurbsSurface nurbsSurface)
: No support is available for this function.
     Expert user function used by MakeValidForV2 to convert trim
     curves from one surface to its NURBS form. After calling this function,
     you need to change the surface of the face to a NurbsSurface.

bool RemoveFins()
: Recursively removes any Brep face with a naked edge. This function is only useful for non-manifold Breps.
: Returns - True if successful, False if everything is removed or if the result has any Brep edges with more than two Brep trims.
: since 7.0

Brep RemoveHoles(double tolerance)
: Remove all inner loops, or holes, in a Brep.
: Returns - The Brep without holes if successful, None otherwise.
: since 6.0

Brep RemoveHoles(IEnumerable<ComponentIndex> loops,double tolerance)
: Removes inner loops, or holes, in a Brep.
: Returns - The Brep without holes if successful, None otherwise.
: since 6.8

bool Repair(double tolerance)
: Fills in missing or fixes incorrect component information from a Brep. 
     Useful when reading Brep information from other file formats that do not 
     provide as complete of a Brep definition as requried by Rhino.
: Returns - True on success.
: since 6.0

void SetTolerancesBoxesAndFlags()
: Set tolerances and flags in a Brep.
: since 6.0

void SetTolerancesBoxesAndFlags(bool bLazy,bool bSetVertexTolerances,bool bSetEdgeTolerances,bool bSetTrimTolerances,bool bSetTrimIsoFlags,bool bSetTrimTypeFlags,bool bSetLoopTypeFlags,bool bSetTrimBoxes)
: Set tolerances and flags in a Brep.
: since 6.0

void SetTrimIsoFlags()
: This function can be used to set the BrepTrim::m_iso
     flag. It is intended to be used when creating a Brep from
     a definition that does not include compatible parameter space
     type information.
: since 5.4

void SetVertices()
: This function can be used to compute vertex information for a
     b-rep when everything but the Vertices array is properly filled in.
     It is intended to be used when creating a Brep from a 
     definition that does not include explicit vertex information.
: since 5.4

Brep[] Split(Brep cutter,double intersectionTolerance)
: Splits a Brep into pieces using a Brep as a cutter.
: Returns - A new array of Breps. This array can be empty.

Brep[] Split(Brep cutter,double intersectionTolerance,bool toleranceWasRaised)
: Splits a Brep into pieces using a Brep as a cutter.
: Returns - A new array of Breps. This array can be empty.

Brep[] Split(IEnumerable<Brep> cutters,double intersectionTolerance)
: Splits a Brep into pieces using Breps as cutters.
: Returns - A new array of Breps. This array can be empty.
: since 6.13

Brep[] Split(IEnumerable<Curve> cutters,double intersectionTolerance)
: Splits a Brep into pieces using curves, at least partially on the Brep, as cutters.
: Returns - A new array of Breps. This array can be empty.
: since 6.13

Brep[] Split(IEnumerable<GeometryBase> cutters,Vector3d normal,bool planView,double intersectionTolerance)
: Splits a Brep into pieces using a combination of curves, to be extruded, and Breps as cutters.
: Returns - A new array of Breps. This array can be empty.
: since 6.13

void Standardize()
: Standardizes all trims, edges, and faces in the brep.
     After standardizing, there may be unused curves and surfaces in the
     brep.  Call Brep.Compact to remove these unused curves and surfaces.

bool TransformComponent(IEnumerable<ComponentIndex> components,Transform xform,double tolerance,double timeLimit,bool useMultipleThreads)
: Transform an array of Brep components, bend neighbors to match, and leave the rest fixed.
: Returns - True if successful, False otherwise.
: since 6.0

Brep[] Trim(Brep cutter,double intersectionTolerance)
: Trims a brep with an oriented cutter. The parts of the brep that lie inside
     (opposite the normal) of the cutter are retained while the parts to the
     outside (in the direction of the normal) are discarded.  If the Cutter is
     closed, then a connected component of the Brep that does not intersect the
     cutter is kept if and only if it is contained in the inside of cutter.
     That is the region bounded by cutter opposite from the normal of cutter,
     If cutter is not closed all these components are kept.
: Returns - This Brep is not modified, the trim results are returned in an array.

Brep[] Trim(Plane cutter,double intersectionTolerance)
: Trims a Brep with an oriented cutter.  The parts of Brep that lie inside
     (opposite the normal) of the cutter are retained while the parts to the
     outside ( in the direction of the normal ) are discarded. A connected
     component of Brep that does not intersect the cutter is kept if and only
     if it is contained in the inside of Cutter.  That is the region bounded by
     cutter opposite from the normal of cutter, or in the case of a Plane cutter
     the halfspace opposite from the plane normal.
: Returns - This Brep is not modified, the trim results are returned in an array.

Brep[] UnjoinEdges(IEnumerable<int> edgesToUnjoin)
: Unjoins, or separates, edges within the Brep. Note, seams in closed surfaces will not separate.
: Returns - This Brep is not modified, the trim results are returned in an array.
: since 6.0
