---
title: "NurbsSurface"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a Non Uniform Rational B-Splines (NURBS) surface.
```cs
[Serializable]
public class NurbsSurface : Surface, IEpsilonComparable<NurbsSurface>
```
## Constructors

NurbsSurface(NurbsSurface other)
: Initializes a new NURBS surface by copying the values from another surface.
## Properties

bool IsRational
: Gets a value indicating whether or not the nurbs surface is rational.

[NurbsSurfaceKnotList](/rhinocommon/rhino/geometry/collections/nurbssurfaceknotlist/) KnotsU
: The U direction knot vector.

[NurbsSurfaceKnotList](/rhinocommon/rhino/geometry/collections/nurbssurfaceknotlist/) KnotsV
: The V direction knot vector.

int OrderU
: Gets the order in the U direction.

int OrderV
: Gets the order in the V direction.

[NurbsSurfacePointList](/rhinocommon/rhino/geometry/collections/nurbssurfacepointlist/) Points
: Gets a collection of surface control points that form this surface.
## Methods

static NurbsSurface Create(int dimension,bool isRational,int order0,int order1,int controlPointCount0,int controlPointCount1)
: Constructs a new NURBS surface with internal uninitialized arrays.
: Returns - A new NURBS surface, or None on error.

static [NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) CreateCurveOnSurface(Surface surface,IEnumerable<Point2d> points,double tolerance,bool periodic)
: Fit a sequence of 2d points on a surface to make a curve on the surface.
: Returns - A curve interpolating the points if successful, None on error.
: since 6.3

static [Point2d](/rhinocommon/rhino/geometry/point2d/)[] CreateCurveOnSurfacePoints(Surface surface,IEnumerable<Point2d> fixedPoints,double tolerance,bool periodic,int initCount,int levels)
: Computes a discrete spline curve on the surface. In other words, computes a sequence 
     of points on the surface, each with a corresponding parameter value.
: Returns - A sequence of surface points, given by surface parameters, if successful.
     The number of output points is approximatelely: 2 ^ (level-1) * initCount * fixedPoints.Count.
: since 6.3

static NurbsSurface CreateFromCone(Cone cone)
: Constructs a new NURBS surfaces from cone data.
: Returns - A new NURBS surface, or None on error.

static NurbsSurface CreateFromCorners(Point3d corner1,Point3d corner2,Point3d corner3)
: Makes a surface from 3 corner points.
: Returns - The resulting surface or None on error.

static NurbsSurface CreateFromCorners(Point3d corner1,Point3d corner2,Point3d corner3,Point3d corner4)
: Makes a surface from 4 corner points.
     This is the same as calling  with tolerance 0.
: Returns - the resulting surface or None on error.

static NurbsSurface CreateFromCorners(Point3d corner1,Point3d corner2,Point3d corner3,Point3d corner4,double tolerance)
: Makes a surface from 4 corner points.
: Returns - The resulting surface or None on error.

static NurbsSurface CreateFromCylinder(Cylinder cylinder)
: Constructs a new NURBS surfaces from cylinder data.
: Returns - A new NURBS surface, or None on error.

static NurbsSurface CreateFromPoints(IEnumerable<Point3d> points,int uCount,int vCount,int uDegree,int vDegree)
: Constructs a NURBS surface from a 2D grid of control points.
: Returns - A NurbsSurface on success or None on failure.

static NurbsSurface CreateFromSphere(Sphere sphere)
: Constructs a new NURBS surfaces from sphere data.
: Returns - A new NURBS surface, or None on error.

static NurbsSurface CreateFromTorus(Torus torus)
: Constructs a new NURBS surfaces from torus data.
: Returns - A new NURBS surface, or None on error.

static NurbsSurface CreateNetworkSurface(IEnumerable<Curve> curves,int continuity,double edgeTolerance,double interiorTolerance,double angleTolerance,int error)
: Builds a surface from an autosorted network of curves/edges.
: Returns - A NurbsSurface or None on failure.

static NurbsSurface CreateNetworkSurface(IEnumerable<Curve> uCurves,int uContinuityStart,int uContinuityEnd,IEnumerable<Curve> vCurves,int vContinuityStart,int vContinuityEnd,double edgeTolerance,double interiorTolerance,double angleTolerance,int error)
: Builds a surface from an ordered network of curves/edges.
: Returns - A NurbsSurface or None on failure.

static NurbsSurface CreateRailRevolvedSurface(Curve profile,Curve rail,Line axis,bool scaleHeight)
: Constructs a railed Surface-of-Revolution.
: Returns - A NurbsSurface or None on failure.

static NurbsSurface CreateRuledSurface(Curve curveA,Curve curveB)
: Constructs a ruled surface between two curves. Curves must share the same knot-vector.
: Returns - A ruled surface on success or None on failure.

static NurbsSurface CreateThroughPoints(IEnumerable<Point3d> points,int uCount,int vCount,int uDegree,int vDegree,bool uClosed,bool vClosed)
: Constructs a NURBS surface from a 2D grid of points.
: Returns - A NurbsSurface on success or None on failure.

static bool MakeCompatible(Surface surface0,Surface surface1,NurbsSurface nurb0,NurbsSurface nurb1)
: For expert use only. Makes a pair of compatible NURBS surfaces based on two input surfaces.
: Returns - True if successsful, False on failure.
: since 6.0

void CopyFrom(NurbsSurface other)
: Copies this NURBS surface from another NURBS surface.

bool EpsilonEquals(NurbsSurface other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool IncreaseDegreeU(int desiredDegree)
: Increase the degree of this surface in U direction.
: Returns - True on success, False on failure.
: since 5.10

bool IncreaseDegreeV(int desiredDegree)
: Increase the degree of this surface in V direction.
: Returns - True on success, False on failure.
: since 5.10

bool MakeNonRational()
: Makes this surface non-rational.
: Returns - True if the operation succeeded; otherwise, false.

bool MakeRational()
: Makes this surface rational.
: Returns - True if the operation succeeded; otherwise, false.

bool UVNDirectionsAt(double u,double v,Vector3d uDir,Vector3d vDir,Vector3d nDir)
: Calculates the U, V, and N directions of a NURBS surface at a u,v parameter similar to the method used by Rhino's MoveUVN command.
: Returns - True if successful, False otherwise.
: since 7.0
