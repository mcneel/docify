---
title: "Rhino.Geometry.Brep"
draft: false
---

# Constructors
## Rhino.Geometry.Brep()
- (summary) Initializes a new empty brep
- (since) 5.4
# Properties
## Collections.BrepCurveList Curves2D
- (summary) 
     Parameter space trimming curves (used by trims)
     
- (since) 5.6
## Collections.BrepCurveList Curves3D
- (summary) 
     Pointers to 3d curves (used by edges)
     
- (since) 5.6
## Collections.BrepEdgeList Edges
- (summary) 
     Gets the brep edges list accessor.
     
- (since) 5.0
## Collections.BrepFaceList Faces
- (summary) 
     Gets the brep faces list accessor.
     
- (since) 5.0
## bool IsManifold
- (summary) 
     Gets a value indicating whether or not the Brep is manifold. 
     Non-Manifold breps have at least one edge that is shared among three or more faces.
     
- (since) 5.0
## bool IsSolid
- (summary) 
     Determines whether this brep is a solid, or a closed oriented manifold.
     
- (since) 5.0
## bool IsSurface
- (summary) 
     Returns True if the Brep has a single face and that face is geometrically the same
     as the underlying surface.  I.e., the face has trivial trimming.
     In this case, the surface is the first face surface. The flag
     Brep.Faces[0].OrientationIsReversed records the correspondence between the surface's
     natural parametric orientation and the orientation of the Brep.trivial trimming here means that there is only one loop curve in the brep
     and that loop curve is the same as the underlying surface boundary.
- (since) 5.0
## Collections.BrepLoopList Loops
- (summary) 
     Gets the brep loop list accessor.
     
- (since) 5.0
## BrepSolidOrientation SolidOrientation
- (summary) 
     Gets the solid orientation state of this Brep.
     
- (since) 5.0
## Collections.BrepSurfaceList Surfaces
- (summary)  Parametric surfaces used by faces 
- (since) 5.4
## Collections.BrepTrimList Trims
- (summary) 
     Gets the brep trims list accessor.
     
- (since) 5.1
## Collections.BrepVertexList Vertices
- (summary) 
     Gets the brep vertices list accessor.
     
- (since) 5.5
# Methods
## static Brep ChangeSeam(BrepFace face,int direction,double parameter,double tolerance)
- (summary) 
     Change the seam of a closed trimmed surface.
     
- (since) 6.4
- (returns) Brep This is some return comment
## static Brep CopyTrimCurves(BrepFace trimSource,Surface surfaceSource,double tolerance)
- (summary) 
     Copy all trims from a Brep face onto a surface.
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep CreateBaseballSphere(Point3d center,double radius,double tolerance)
- (summary) 
     Creates a brep representation of the sphere with two similar trimmed NURBS surfaces, and no singularities.
     
- (since) 6.0
- (returns) Brep This is some return comment
## static Curve CreateBlendShape(BrepFace face0,BrepEdge edge0,double t0,bool rev0,BlendContinuity continuity0,BrepFace face1,BrepEdge edge1,double t1,bool rev1,BlendContinuity continuity1)
- (summary) 
     Makes a curve blend between points on two surface edges. The blend will be tangent to the surfaces and perpendicular to the edges.
     
- (since) 6.0
- (returns) Curve This is some return comment
## static Brep[] CreateBlendSurface(BrepFace face0,BrepEdge edge0,Interval domain0,bool rev0,BlendContinuity continuity0,BrepFace face1,BrepEdge edge1,Interval domain1,bool rev1,BlendContinuity continuity1)
- (summary) 
     Makes a surface blend between two surface edges.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateBooleanDifference(Brep firstBrep,Brep secondBrep,double tolerance)
- (summary) 
     Compute the Solid Difference of two Breps.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateBooleanDifference(Brep firstBrep,Brep secondBrep,double tolerance,bool manifoldOnly)
- (summary) 
     Compute the Solid Difference of two Breps.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateBooleanDifference(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance)
- (summary) 
     Compute the Solid Difference of two sets of Breps.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateBooleanDifference(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance,bool manifoldOnly)
- (summary) 
     Compute the Solid Difference of two sets of Breps.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateBooleanIntersection(Brep firstBrep,Brep secondBrep,double tolerance)
- (summary) 
     Compute the Solid Intersection of two Breps.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateBooleanIntersection(Brep firstBrep,Brep secondBrep,double tolerance,bool manifoldOnly)
- (summary) 
     Compute the Solid Intersection of two Breps.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateBooleanIntersection(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance)
- (summary) 
     Compute the Solid Intersection of two sets of Breps.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateBooleanIntersection(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance,bool manifoldOnly)
- (summary) 
     Compute the Solid Intersection of two sets of Breps.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateBooleanSplit(Brep firstBrep,Brep secondBrep,double tolerance)
- (summary) 
     Splits shared areas of Breps and creates separate Breps from the shared and unshared parts.
     
- (since) 6.16
- (returns) Brep[] This is some return comment
## static Brep[] CreateBooleanSplit(IEnumerable<Brep> firstSet,IEnumerable<Brep> secondSet,double tolerance)
- (summary) 
     Splits shared areas of Breps and creates separate Breps from the shared and unshared parts.
     
- (since) 6.16
- (returns) Brep[] This is some return comment
## static Brep[] CreateBooleanUnion(IEnumerable<Brep> breps,double tolerance)
- (summary) 
     Compute the Boolean Union of a set of Breps.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateBooleanUnion(IEnumerable<Brep> breps,double tolerance,bool manifoldOnly)
- (summary) 
     Compute the Boolean Union of a set of Breps.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateChamferSurface(BrepFace face0,Point2d uv0,double radius0,BrepFace face1,Point2d uv1,double radius1,bool trim,bool extend,double tolerance,Brep[] outBreps0,Brep[] outBreps1)
- (summary) 
     Creates a ruled surface as a bevel between two input surface edges.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateChamferSurface(BrepFace face0,Point2d uv0,double radius0,BrepFace face1,Point2d uv1,double radius1,bool extend,double tolerance)
- (summary) 
     Creates a ruled surface as a bevel between two input surface edges.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Curve[] CreateContourCurves(Brep brepToContour,Plane sectionPlane)
- (summary) 
     Constructs the contour curves for a brep, using a slicing plane.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Curve[] CreateContourCurves(Brep brepToContour,Point3d contourStart,Point3d contourEnd,double interval)
- (summary) 
     Constructs the contour curves for a brep at a specified interval.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Mesh[] CreateCurvatureAnalysisMesh(Brep brep,CurvatureAnalysisSettingsState state)
- (summary) 
     Create an array of analysis meshes for the brep using the specified settings.
     Meshes aren't set on the brep.
     
- (since) 6.0
- (returns) Mesh[] This is some return comment
## static Brep[] CreateDevelopableLoft(Curve crv0,Curve crv1,bool reverse0,bool reverse1,int density)
- (summary) 
     Creates a single developable surface between two curves.
     
- (since) 6.10
- (returns) Brep[] This is some return comment
## static Brep[] CreateDevelopableLoft(NurbsCurve rail0,NurbsCurve rail1,IEnumerable<Point2d> fixedRulings)
- (summary) 
     Creates a single developable surface between two curves.
     
- (since) 6.10
- (returns) Brep[] This is some return comment
## static Brep CreateEdgeSurface(IEnumerable<Curve> curves)
- (summary) 
     Constructs a coons patch from 2, 3, or 4 curves.
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep[] CreateFilletEdges(Brep brep,IEnumerable<int> edgeIndices,IEnumerable<double> startRadii,IEnumerable<double> endRadii,BlendType blendType,RailType railType,double tolerance)
- (summary) 
     Fillets, chamfers, or blends the edges of a brep.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateFilletSurface(BrepFace face0,Point2d uv0,BrepFace face1,Point2d uv1,double radius,bool trim,bool extend,double tolerance,Brep[] outBreps0,Brep[] outBreps1)
- (summary) 
      Creates a constant-radius round surface between two surfaces.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateFilletSurface(BrepFace face0,Point2d uv0,BrepFace face1,Point2d uv1,double radius,bool extend,double tolerance)
- (summary) 
     Creates a constant-radius round surface between two surfaces.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep CreateFromBox(BoundingBox box)
- (summary) 
     Constructs new brep that matches a bounding box.
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep CreateFromBox(Box box)
- (summary) 
     Constructs new brep that matches an aligned box.
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep CreateFromBox(IEnumerable<Point3d> corners)
- (summary) 
     Constructs new brep from 8 corner points.
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep CreateFromCone(Cone cone,bool capBottom)
- (summary) 
     Constructs a Brep representation of the cone with a single
     face for the cone, an edge along the cone seam, 
     and vertices at the base and apex ends of this seam edge.
     The optional cap is a single face with one circular edge 
     starting and ending at the base vertex.
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep CreateFromCornerPoints(Point3d corner1,Point3d corner2,Point3d corner3,double tolerance)
- (summary) 
     Makes a brep with one face.
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep CreateFromCornerPoints(Point3d corner1,Point3d corner2,Point3d corner3,Point3d corner4,double tolerance)
- (summary) 
     make a Brep with one face.
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep CreateFromCylinder(Cylinder cylinder,bool capBottom,bool capTop)
- (summary) 
     Constructs a Brep definition of a cylinder.
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep CreateFromJoinedEdges(Brep brep0,int edgeIndex0,Brep brep1,int edgeIndex1,double joinTolerance)
- (summary) 
     Joins two naked edges, or edges that are coincident or close together, from two Breps.
     
- (since) 6.0
- (returns) Brep This is some return comment
## static Brep[] CreateFromLoft(IEnumerable<Curve> curves,Point3d start,Point3d end,LoftType loftType,bool closed)
- (summary) 
     Constructs one or more Breps by lofting through a set of curves.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateFromLoftRebuild(IEnumerable<Curve> curves,Point3d start,Point3d end,LoftType loftType,bool closed,int rebuildPointCount)
- (summary) 
     Constructs one or more Breps by lofting through a set of curves. Input for the loft is simplified by
     rebuilding to a specified number of control points.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateFromLoftRefit(IEnumerable<Curve> curves,Point3d start,Point3d end,LoftType loftType,bool closed,double refitTolerance)
- (summary) 
     Constructs one or more Breps by lofting through a set of curves. Input for the loft is simplified by
     refitting to a specified tolerance.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep CreateFromMesh(Mesh mesh,bool trimmedTriangles)
- (summary) 
     Create a brep representation of a mesh
     
- (since) 5.1
- (returns) Brep This is some return comment
## static Brep CreateFromOffsetFace(BrepFace face,double offsetDistance,double offsetTolerance,bool bothSides,bool createSolid)
- (summary) 
     Offsets a face including trim information to create a new brep.
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep CreateFromRevSurface(RevSurface surface,bool capStart,bool capEnd)
- (summary) 
     Constructs a brep form of a surface of revolution.
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep CreateFromSphere(Sphere sphere)
- (summary) 
     Constructs a Brep definition of a sphere.
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep CreateFromSurface(Surface surface)
- (summary) 
     Constructs a Brep from a surface. The resulting Brep has an outer boundary made
     from four trims. The trims are ordered so that they run along the south, east,
     north, and then west side of the surface's parameter space.
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep[] CreateFromSweep(Curve rail,Curve shape,bool closed,double tolerance)
- (summary) 
     Sweep1 function that fits a surface through a profile curve that define the surface cross-sections
     and one curve that defines a surface edge. 
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateFromSweep(Curve rail1,Curve rail2,Curve shape,bool closed,double tolerance)
- (summary) 
     General 2 rail sweep. If you are not producing the sweep results that you are after, then
     use the SweepTwoRail class with options to generate the swept geometry.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateFromSweep(Curve rail1,Curve rail2,IEnumerable<Curve> shapes,bool closed,double tolerance)
- (summary) 
     General 2 rail sweep. If you are not producing the sweep results that you are after, then
     use the SweepTwoRail class with options to generate the swept geometry.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateFromSweep(Curve rail1,Curve rail2,IEnumerable<Curve> shapes,Point3d start,Point3d end,bool closed,double tolerance,SweepRebuild rebuild,int rebuildPointCount,double refitTolerance,bool preserveHeight)
- (summary) 
     Sweep2 function that fits a surface through profile curves that define the surface cross-sections
     and two curves that defines a surface edge.
     
- (since) 6.16
- (returns) Brep[] This is some return comment
## static Brep[] CreateFromSweep(Curve rail,IEnumerable<Curve> shapes,bool closed,double tolerance)
- (summary) 
     Sweep1 function that fits a surface through profile curves that define the surface cross-sections
     and one curve that defines a surface edge.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateFromSweepInParts(Curve rail1,Curve rail2,IEnumerable<Curve> shapes,IEnumerable<Point2d> rail_params,bool closed,double tolerance)
- (summary) 
     Makes a 2 rail sweep. Like CreateFromSweep but the result is split where parameterization along a rail changes abruptly.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateFromSweepSegmented(Curve rail,Curve shape,bool closed,double tolerance)
- (summary) 
     Sweep1 function that fits a surface through a profile curve that define the surface cross-sections
     and one curve that defines a surface edge. The Segmented version breaks the rail at curvature kinks
     and sweeps each piece separately, then put the results together into a Brep.
     
- (since) 6.14
- (returns) Brep[] This is some return comment
## static Brep[] CreateFromSweepSegmented(Curve rail,IEnumerable<Curve> shapes,bool closed,double tolerance)
- (summary) 
     Sweep1 function that fits a surface through a series of profile curves that define the surface cross-sections
     and one curve that defines a surface edge. The Segmented version breaks the rail at curvature kinks
     and sweeps each piece separately, then put the results together into a Brep.
     
- (since) 6.14
- (returns) Brep[] This is some return comment
## static Brep[] CreateFromTaperedExtrude(Curve curveToExtrude,double distance,Vector3d direction,Point3d basePoint,double draftAngleRadians,ExtrudeCornerType cornerType)
- (summary) 
     Extrude a curve to a taper making a brep (potentially more than 1)
     
- (since) 5.1
- (returns) Brep[] This is some return comment
## static Brep[] CreateFromTaperedExtrude(Curve curveToExtrude,double distance,Vector3d direction,Point3d basePoint,double draftAngleRadians,ExtrudeCornerType cornerType,double tolerance,double angleToleranceRadians)
- (summary) 
     Extrude a curve to a taper making a brep (potentially more than 1)
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep[] CreateFromTaperedExtrudeWithRef(Curve curve,Vector3d direction,double distance,double draftAngle,Plane plane,double tolerance)
- (summary) 
     Creates one or more Breps by extruding a curve a distance along an axis with draft angle.
     
- (since) 6.14
- (returns) Brep[] This is some return comment
## static Brep[] CreateOffsetBrep(Brep brep,double distance,bool solid,bool extend,double tolerance,Brep[] outBlends,Brep[] outWalls)
- (summary) 
     Offsets a Brep.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep CreatePatch(IEnumerable<GeometryBase> geometry,int uSpans,int vSpans,double tolerance)
- (summary) 
     Constructs a brep patch.
     This is the simple version of fit that uses a plane with u x v spans.
     It makes a plane by fitting to the points from the input geometry to use as the starting surface.
     The surface has the specified u and v span count.
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep CreatePatch(IEnumerable<GeometryBase> geometry,Surface startingSurface,double tolerance)
- (summary) 
     Constructs a brep patch.
     This is the simple version of fit that uses a specified starting surface.
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep CreatePatch(IEnumerable<GeometryBase> geometry,Surface startingSurface,int uSpans,int vSpans,bool trim,bool tangency,double pointSpacing,double flexibility,double surfacePull,bool[] fixEdges,double tolerance)
- (summary) 
     Constructs a brep patch using all controls
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep[] CreatePipe(Curve rail,double radius,bool localBlending,PipeCapMode cap,bool fitRail,double absoluteTolerance,double angleToleranceRadians)
- (summary) 
     Creates a single walled pipe
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreatePipe(Curve rail,IEnumerable<double> railRadiiParameters,IEnumerable<double> radii,bool localBlending,PipeCapMode cap,bool fitRail,double absoluteTolerance,double angleToleranceRadians)
- (summary) 
     Creates a single walled pipe
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreatePlanarBreps(Curve inputLoop)
- (summary) 
     Constructs a set of planar breps as outlines by the loops.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreatePlanarBreps(Curve inputLoop,double tolerance)
- (summary) 
     Constructs a set of planar breps as outlines by the loops.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep[] CreatePlanarBreps(CurveList inputLoops)
- (summary) 
     Constructs a set of planar Breps as outlines by the loops.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreatePlanarBreps(CurveList inputLoops,double tolerance)
- (summary) 
     Constructs a set of planar Breps as outlines by the loops.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep[] CreatePlanarBreps(IEnumerable<Curve> inputLoops)
- (summary) 
     Constructs a set of planar breps as outlines by the loops.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep[] CreatePlanarBreps(IEnumerable<Curve> inputLoops,double tolerance)
- (summary) 
     Constructs a set of planar breps as outlines by the loops.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
## static Brep CreateQuadSphere(Sphere sphere)
- (summary) 
     Constructs a Brep definition of a quad sphere.
     
- (since) 6.0
- (returns) Brep This is some return comment
## static Brep[] CreateShell(Brep brep,IEnumerable<int> facesToRemove,double distance,double tolerance)
- (summary) 
     Creates a hollowed out shell from a solid Brep. Function only operates on simple, solid, manifold Breps.
     
- (since) 5.4
- (returns) Brep[] This is some return comment
## static Brep[] CreateSolid(IEnumerable<Brep> breps,double tolerance)
- (summary) 
     Constructs closed polysurfaces from surfaces and polysurfaces that bound a region in space.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep CreateTrimmedPlane(Plane plane,Curve curve)
- (summary) 
     Create a Brep trimmed plane.
     
- (since) 6.0
- (returns) Brep This is some return comment
## static Brep CreateTrimmedPlane(Plane plane,IEnumerable<Curve> curves)
- (summary) 
     Create a Brep trimmed plane.
     
- (since) 6.0
- (returns) Brep This is some return comment
## static Brep CreateTrimmedSurface(BrepFace trimSource,Surface surfaceSource)
- (summary) 
     Constructs a Brep using the trimming information of a brep face and a surface. 
     Surface must be roughly the same shape and in the same location as the trimming brep face.
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep CreateTrimmedSurface(BrepFace trimSource,Surface surfaceSource,double tolerance)
- (summary) 
     Constructs a Brep using the trimming information of a brep face and a surface. 
     Surface must be roughly the same shape and in the same location as the trimming brep face.
     
- (since) 6.0
- (returns) Brep This is some return comment
## static Brep[] JoinBreps(IEnumerable<Brep> brepsToJoin,double tolerance)
- (summary) 
     Joins the breps in the input array at any overlapping edges to form
     as few as possible resulting breps. There may be more than one brep in the result array.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## static Brep MergeBreps(IEnumerable<Brep> brepsToMerge,double tolerance)
- (summary) 
     Combines two or more breps into one. A merge is like a boolean union that keeps the inside pieces. This
     function creates non-manifold Breps which in general are unusual in Rhino. You may want to consider using
     JoinBreps or CreateBooleanUnion functions instead.
     
- (since) 5.0
- (returns) Brep This is some return comment
## static Brep MergeSurfaces(Brep brep0,Brep brep1,double tolerance,double angleToleranceRadians)
- (summary) 
     Merges two surfaces into one surface at untrimmed edges. Both surfaces must be untrimmed and share an edge.
     
- (since) 6.0
- (returns) Brep This is some return comment
## static Brep MergeSurfaces(Brep brep0,Brep brep1,double tolerance,double angleToleranceRadians,Point2d point0,Point2d point1,double roundness,bool smooth)
- (summary) 
     Merges two surfaces into one surface at untrimmed edges. Both surfaces must be untrimmed and share an edge.
     
- (since) 6.0
- (returns) Brep This is some return comment
## static Brep MergeSurfaces(Surface surface0,Surface surface1,double tolerance,double angleToleranceRadians)
- (summary) 
     Merges two surfaces into one surface at untrimmed edges.
     
- (since) 6.0
- (returns) Brep This is some return comment
## static Brep TryConvertBrep(GeometryBase geometry)
- (summary) 
     Attempts to convert a generic Geometry object into a Brep.
     
- (since) 5.0
- (returns) Brep This is some return comment
## int AddEdgeCurve(Curve curve)
- (summary) 
     Add a 3d curve used by the brep edges
     
- (since) 5.4
- (returns) int This is some return comment
## int AddSurface(Surface surface)
- (summary) 
     Adds a 3D surface used by BrepFace.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddTrimCurve(Curve curve)
- (summary) 
     Add a 2d curve used by the brep trims
     
- (since) 5.4
- (returns) int This is some return comment
## void Append(Brep other)
- (summary) 
     Appends a copy of another brep to this and updates indices of appended
     brep parts.  Duplicates are not removed
     
- (since) 5.4
- (returns) void This is some return comment
## Brep CapPlanarHoles(double tolerance)
- (summary) 
     Returns a new Brep that is equivalent to this Brep with all planar holes capped.
     
- (since) 5.0
- (returns) Brep This is some return comment
## Point3d ClosestPoint(Point3d testPoint)
- (summary) 
     Finds a point on the brep that is closest to testPoint.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## bool ClosestPoint(Point3d testPoint,Point3d closestPoint,ComponentIndex ci,double s,double t,double maximumDistance,Vector3d normal)
- (summary) 
     Finds a point on a Brep that is closest to testPoint.
     The method searches all Brep faces looking for the one closest to testPoint.
     When found, if the closest point falls on the inactive region of the face, then 
     the method finds the face's edge that is closest to testPoint.
     
- (since) 5.0
- (returns) bool This is some return comment
## void Compact()
- (summary) 
     Deletes any unreferenced objects from arrays, reindexes as needed, and
     shrinks arrays to minimum required size. Uses CUllUnused* members to
     delete any unreferenced objects from arrays.
     
- (since) 5.0
- (returns) void This is some return comment
## bool CullUnused2dCurves()
- (summary) Culls 3d curves not referenced by an edge.
- (since) 5.0
- (returns) bool This is some return comment
## bool CullUnused3dCurves()
- (summary) Culls 2d curves not referenced by a trim.
- (since) 5.0
- (returns) bool This is some return comment
## bool CullUnusedEdges()
- (summary) Culls edges with m_edge_index == -1.
- (since) 5.0
- (returns) bool This is some return comment
## bool CullUnusedFaces()
- (summary) Culls faces with m_face_index == -1.
- (since) 5.0
- (returns) bool This is some return comment
## bool CullUnusedLoops()
- (summary) Culls loops with m_loop_index == -1.
- (since) 5.0
- (returns) bool This is some return comment
## bool CullUnusedSurfaces()
- (summary) Culls surfaces not referenced by a face.
- (since) 5.0
- (returns) bool This is some return comment
## bool CullUnusedTrims()
- (summary) Culls trims with m_trim_index == -1.
- (since) 5.0
- (returns) bool This is some return comment
## bool CullUnusedVertices()
- (summary) Culls vertices with m_vertex_index == -1.
- (since) 5.0
- (returns) bool This is some return comment
## GeometryBase Duplicate()
- (summary) 
     Copies this brep.
     
- (since) 5.0
- (returns) GeometryBase This is some return comment
## Brep DuplicateBrep()
- (summary) 
     Same as , but already performs a cast to a brep.
     This cast always succeeds.
- (since) 5.0
- (returns) Brep This is some return comment
## Curve[] DuplicateEdgeCurves()
- (summary) 
     Duplicate all the edges of this Brep.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## Curve[] DuplicateEdgeCurves(bool nakedOnly)
- (summary) 
     Duplicate edges of this Brep.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## Curve[] DuplicateNakedEdgeCurves(bool outer,bool inner)
- (summary) 
     Duplicate naked edges of this Brep
     
- (since) 5.7
- (returns) Curve[] This is some return comment
## Brep DuplicateSubBrep(IEnumerable<int> faceIndices)
- (summary) 
     Copy a subset of this Brep into another Brep.
     
- (since) 5.0
- (returns) Brep This is some return comment
## Point3d[] DuplicateVertices()
- (summary) 
     Duplicate all the corner vertices of this Brep.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
## void FindCoincidentBrepComponents(Point3d point,double tolerance,int[] faces,int[] edges,int[] vertices)
- (summary) 
     Find the indices of all brep faces, edges and vertices that are within tolerance of a test-point.
     
- (since) 6.2
- (returns) void This is some return comment
## void Flip()
- (summary) 
     Reverses entire brep orientation of all faces.
     
- (since) 5.0
- (returns) void This is some return comment
## double GetArea()
- (summary) 
     Compute the Area of the Brep. If you want proper Area data with moments 
     and error information, use the AreaMassProperties class.
     
- (since) 5.0
- (returns) double This is some return comment
## double GetArea(double relativeTolerance,double absoluteTolerance)
- (summary) 
     Compute the Area of the Brep. If you want proper Area data with moments 
     and error information, use the AreaMassProperties class.
     
- (since) 5.0
- (returns) double This is some return comment
## bool GetPointInside(double tolerance,Point3d point)
- (summary) 
     Finds a point inside of a solid Brep.
     
- (since) 6.19
- (returns) bool This is some return comment
## BrepRegion[] GetRegions()
- (summary) 
     Gets an array containing all regions in this brep.
     
- (since) 5.0
- (returns) BrepRegion[] This is some return comment
## double GetVolume()
- (summary) 
     Compute the Volume of the Brep. If you want proper Volume data with moments 
     and error information, use the VolumeMassProperties class.
     
- (since) 5.0
- (returns) double This is some return comment
## double GetVolume(double relativeTolerance,double absoluteTolerance)
- (summary) 
     Compute the Volume of the Brep. If you want proper Volume data with moments 
     and error information, use the VolumeMassProperties class.
     
- (since) 5.0
- (returns) double This is some return comment
## Curve[] GetWireframe(int density)
- (summary) 
     Constructs all the Wireframe curves for this Brep.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## bool IsDuplicate(Brep other,double tolerance)
- (summary) See if this and other are same brep geometry.
- (since) 5.0
- (returns) bool This is some return comment
## bool IsPointInside(Point3d point,double tolerance,bool strictlyIn)
- (summary) 
     Determines if point is inside a Brep.  This question only makes sense when
     the brep is a closed and manifold.  This function does not not check for
     closed or manifold, so result is not valid in those cases.  Intersects
     a line through point with brep, finds the intersection point Q closest
     to point, and looks at face normal at Q.  If the point Q is on an edge
     or the intersection is not transverse at Q, then another line is used.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsValidGeometry(string log)
- (summary) 
     Expert user function that tests the brep to see if its geometry information is valid.
     The value of brep.IsValidTopology() must be True before brep.IsValidGeometry() can be
     safely called.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsValidTolerancesAndFlags(string log)
- (summary) 
     Expert user function that tests the brep to see if its tolerances and
     flags are valid.  The values of brep.IsValidTopology() and
     brep.IsValidGeometry() must be True before brep.IsValidTolerancesAndFlags()
     can be safely called.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsValidTopology(string log)
- (summary) 
     Tests the brep to see if its topology information is valid.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Join(Brep otherBrep,double tolerance,bool compact)
- (summary) 
     If any edges of this brep overlap edges of otherBrep, merge a copy of otherBrep into this
     brep joining all edges that overlap within tolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool JoinEdges(int edgeIndex0,int edgeIndex1,double joinTolerance,bool compact)
- (summary) 
     Joins two naked edges, or edges that are coincident or close together.
     
- (since) 6.0
- (returns) bool This is some return comment
## int JoinNakedEdges(double tolerance)
- (summary) 
     Joins naked edge pairs within the same brep that overlap within tolerance.
     
- (since) 5.0
- (returns) int This is some return comment
## bool MakeValidForV2()
- (summary) 
     No support is available for this function.
     Expert user function that converts all geometry in brep to nurbs form.
- (since) 6.0
- (returns) bool This is some return comment
## bool MergeCoplanarFaces(double tolerance)
- (summary) 
     Merges adjacent coplanar faces into single faces.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool MergeCoplanarFaces(double tolerance,double angleTolerance)
- (summary) 
     Merges adjacent coplanar faces into single faces.
     
- (since) 6.10
- (returns) bool This is some return comment
## void RebuildTrimsForV2(BrepFace face,NurbsSurface nurbsSurface)
- (summary) 
     No support is available for this function.
     Expert user function used by MakeValidForV2 to convert trim
     curves from one surface to its NURBS form. After calling this function,
     you need to change the surface of the face to a NurbsSurface.
- (since) 5.0
- (returns) void This is some return comment
## bool RemoveFins()
- (summary) 
     Recursively removes any Brep face with a naked edge. This function is only useful for non-manifold Breps.
     
- (since) 7.0
- (returns) bool This is some return comment
## Brep RemoveHoles(double tolerance)
- (summary) 
     Remove all inner loops, or holes, in a Brep.
     
- (since) 6.0
- (returns) Brep This is some return comment
## Brep RemoveHoles(IEnumerable<ComponentIndex> loops,double tolerance)
- (summary) 
     Removes inner loops, or holes, in a Brep.
     
- (since) 6.8
- (returns) Brep This is some return comment
## bool Repair(double tolerance)
- (summary) 
     Fills in missing or fixes incorrect component information from a Brep. 
     Useful when reading Brep information from other file formats that do not 
     provide as complete of a Brep definition as requried by Rhino.
     
- (since) 6.0
- (returns) bool This is some return comment
## void SetTolerancesBoxesAndFlags()
- (summary) 
     Set tolerances and flags in a Brep.
     
- (since) 6.0
- (returns) void This is some return comment
## void SetTolerancesBoxesAndFlags(bool bLazy,bool bSetVertexTolerances,bool bSetEdgeTolerances,bool bSetTrimTolerances,bool bSetTrimIsoFlags,bool bSetTrimTypeFlags,bool bSetLoopTypeFlags,bool bSetTrimBoxes)
- (summary) 
     Set tolerances and flags in a Brep.
     
- (since) 6.0
- (returns) void This is some return comment
## void SetTrimIsoFlags()
- (summary) 
     This function can be used to set the BrepTrim::m_iso
     flag. It is intended to be used when creating a Brep from
     a definition that does not include compatible parameter space
     type information.
     
- (since) 5.4
- (returns) void This is some return comment
## void SetVertices()
- (summary) 
     This function can be used to compute vertex information for a
     b-rep when everything but the Vertices array is properly filled in.
     It is intended to be used when creating a Brep from a 
     definition that does not include explicit vertex information.
     
- (since) 5.4
- (returns) void This is some return comment
## Brep[] Split(Brep cutter,double intersectionTolerance)
- (summary) 
     Splits a Brep into pieces using a Brep as a cutter.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## Brep[] Split(Brep cutter,double intersectionTolerance,bool toleranceWasRaised)
- (summary) 
     Splits a Brep into pieces using a Brep as a cutter.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## Brep[] Split(IEnumerable<Brep> cutters,double intersectionTolerance)
- (summary) 
     Splits a Brep into pieces using Breps as cutters.
     
- (since) 6.13
- (returns) Brep[] This is some return comment
## Brep[] Split(IEnumerable<Curve> cutters,double intersectionTolerance)
- (summary) 
     Splits a Brep into pieces using curves, at least partially on the Brep, as cutters.
     
- (since) 6.13
- (returns) Brep[] This is some return comment
## Brep[] Split(IEnumerable<GeometryBase> cutters,Vector3d normal,bool planView,double intersectionTolerance)
- (summary) 
     Splits a Brep into pieces using a combination of curves, to be extruded, and Breps as cutters.
     
- (since) 6.13
- (returns) Brep[] This is some return comment
## void Standardize()
- (summary) 
     Standardizes all trims, edges, and faces in the brep.
     After standardizing, there may be unused curves and surfaces in the
     brep.  Call Brep.Compact to remove these unused curves and surfaces.
     
- (since) 5.0
- (returns) void This is some return comment
## bool TransformComponent(IEnumerable<ComponentIndex> components,Transform xform,double tolerance,double timeLimit,bool useMultipleThreads)
- (summary) 
     Transform an array of Brep components, bend neighbors to match, and leave the rest fixed.
     
- (since) 6.0
- (returns) bool This is some return comment
## Brep[] Trim(Brep cutter,double intersectionTolerance)
- (summary) 
     Trims a brep with an oriented cutter. The parts of the brep that lie inside
     (opposite the normal) of the cutter are retained while the parts to the
     outside (in the direction of the normal) are discarded.  If the Cutter is
     closed, then a connected component of the Brep that does not intersect the
     cutter is kept if and only if it is contained in the inside of cutter.
     That is the region bounded by cutter opposite from the normal of cutter,
     If cutter is not closed all these components are kept.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## Brep[] Trim(Plane cutter,double intersectionTolerance)
- (summary) 
     Trims a Brep with an oriented cutter.  The parts of Brep that lie inside
     (opposite the normal) of the cutter are retained while the parts to the
     outside ( in the direction of the normal ) are discarded. A connected
     component of Brep that does not intersect the cutter is kept if and only
     if it is contained in the inside of Cutter.  That is the region bounded by
     cutter opposite from the normal of cutter, or in the case of a Plane cutter
     the halfspace opposite from the plane normal.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## Brep[] UnjoinEdges(IEnumerable<int> edgesToUnjoin)
- (summary) 
     Unjoins, or separates, edges within the Brep. Note, seams in closed surfaces will not separate.
     
- (since) 6.0
- (returns) Brep[] This is some return comment
