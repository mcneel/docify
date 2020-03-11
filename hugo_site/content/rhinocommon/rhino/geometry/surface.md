---
title: "Surface"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a base class that is common to most RhinoCommon surface types.
   A surface represents an entity that can be all visited by providing
   two independent parameters, usually called (u, v), or sometimes (s, t).
```cs
[Serializable]
public class Surface : GeometryBase
```
## Properties

bool IsSolid
: Gets a values indicating whether a surface is solid.
## Methods

static Surface CreateExtrusion(Curve profile,Vector3d direction)
: Constructs a surface by extruding a curve along a vector.
: Returns - A surface on success or None on failure.

static Surface CreateExtrusionToPoint(Curve profile,Point3d apexPoint)
: Constructs a surface by extruding a curve to a point.
: Returns - A Surface on success or None on failure.

static Surface CreatePeriodicSurface(Surface surface,int direction)
: Constructs a periodic surface from a base surface and a direction.
: Returns - A Surface on success or None on failure.

static Surface CreatePeriodicSurface(Surface surface,int direction,bool bSmooth)
: Constructs a periodic surface from a base surface and a direction.
: Returns - A periodic surface if successful, None on failure.
: since 6.0

static Surface[] CreateRollingBallFillet(Surface surfaceA,bool flipA,Surface surfaceB,bool flipB,double radius,double tolerance)
: Constructs a rolling ball fillet between two surfaces.
: Returns - A new array of rolling ball fillet surfaces; this array can be empty on failure.

static Surface[] CreateRollingBallFillet(Surface surfaceA,Point2d uvA,Surface surfaceB,Point2d uvB,double radius,double tolerance)
: Constructs a rolling ball fillet between two surfaces.
: Returns - A new array of rolling ball fillet surfaces; this array can be empty on failure.

static Surface[] CreateRollingBallFillet(Surface surfaceA,Surface surfaceB,double radius,double tolerance)
: Constructs a rolling ball fillet between two surfaces.
: Returns - A new array of rolling ball fillet surfaces; this array can be empty on failure.

static Surface CreateSoftEditSurface(Surface surface,Point2d uv,Vector3d delta,double uLength,double vLength,double tolerance,bool fixEnds)
: Creates a soft edited surface from an exising surface using a smooth field of influence.
: Returns - The soft edited surface if successful. None on failure.
: since 6.0

bool ClosestPoint(Point3d testPoint,double u,double v)
: Input the parameters of the point on the surface that is closest to testPoint.
: Returns - True on success, False on failure.

[IsoStatus](/rhinocommon/rhino/geometry/isostatus/) ClosestSide(double u,double v)
: Gets the side that is closest, in terms of 3D-distance, to a U and V parameter.
: Returns - A side.

[SurfaceCurvature](/rhinocommon/rhino/geometry/surfacecurvature/) CurvatureAt(double u,double v)
: Computes the curvature at the given UV coordinate.
: Returns - Surface Curvature data for the point at uv or None on failure.

int Degree(int direction)
: Returns the maximum algebraic degree of any span
     (or a good estimate if curve spans are not algebraic).
: Returns - The maximum degree.

[Interval](/rhinocommon/rhino/geometry/interval/) Domain(int direction)
: Gets the domain in a direction.
: Returns - An interval value.

bool Evaluate(double u,double v,int numberDerivatives,Point3d point,Vector3d[] derivatives)
: Evaluates a surface mathematically.
: Returns - True if the operation succeeded; False otherwise.

Surface Extend(IsoStatus edge,double extensionLength,bool smooth)
: Extends an untrimmed surface along one edge.
: Returns - New extended surface on success.

Surface Fit(int uDegree,int vDegree,double fitTolerance)
: Fits a new surface through an existing surface.
: Returns - A surface, or None on error.

bool FrameAt(double u,double v,Plane frame)
: Computes the orient plane on a surface given a U and V parameter.
     This is the simple evaluation call with no error handling.
: Returns - True if this operation succeeded; otherwise false.

bool GetNextDiscontinuity(int direction,Continuity continuityType,double t0,double t1,double t)
: Searches for a derivative, tangent, or curvature discontinuity.
: Returns - Parametric continuity tests c = (C0_continuous, ..., G2_continuous):
     TRUE if a parametric discontinuity was found strictly between t0 and t1.
     Note well that all curves are parametrically continuous at the ends of their domains.
     
     Locus continuity tests c = (C0_locus_continuous, ...,G2_locus_continuous):
     TRUE if a locus discontinuity was found strictly between t0 and t1 or at t1 is the
     at the end of a curve. Note well that all open curves (IsClosed()=false) are locus
     discontinuous at the ends of their domains.  All closed curves (IsClosed()=true) are
     at least C0_locus_continuous at the ends of their domains.

bool GetNurbsFormParameterFromSurfaceParameter(double surfaceS,double surfaceT,double nurbsS,double nurbsT)
: Translates a parameter from the current surface to the parameter space of the surface returned by .
: Returns - True if the operation succeded; otherwise, false.
: since 6.0

double[] GetSpanVector(int direction)
: Gets array of span "knots".
: Returns - An array with span vectors; or None on error.

bool GetSurfaceParameterFromNurbsFormParameter(double nurbsS,double nurbsT,double surfaceS,double surfaceT)
: Translates a parameter from a value on the surface returned by  to the current surface.
: Returns - True if the operation succeded; otherwise, false.
: since 6.0

bool GetSurfaceSize(double width,double height)
: Gets an estimate of the size of the rectangle that would be created
     if the 3d surface where flattened into a rectangle.
: Returns - True if successful.

int HasNurbsForm()
: Is there a NURBS surface representation of this surface.
: Returns - 0 unable to create NURBS representation with desired accuracy.
     1 success - NURBS parameterization matches the surface's
     2 success - NURBS point locus matches the surface's and the
     domain of the NURBS surface is correct. However, This surface's
     parameterization and the NURBS surface parameterization may not
     match.  This situation happens when getting NURBS representations
     of surfaces that have a transendental parameterization like spheres,
     cylinders, and cones.

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) InterpolatedCurveOnSurface(IEnumerable<Point3d> points,double tolerance)
: Constructs an interpolated curve on a surface, using 3D points.
: Returns - A new nurbs curve, or None on error.

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) InterpolatedCurveOnSurfaceUV(IEnumerable<Point2d> points,double tolerance)
: Returns a curve that interpolates points on a surface. The interpolant lies on the surface.
: Returns - A new NURBS curve if successful, or None on error.

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) InterpolatedCurveOnSurfaceUV(IEnumerable<Point2d> points,double tolerance,bool closed,int closedSurfaceHandling)
: Returns a curve that interpolates points on a surface. The interpolant lies on the surface.
: Returns - A new NURBS curve if successful, or None on error.
: since 6.18

int IsAtSeam(double u,double v)
: Tests if a surface parameter value is at a seam.
: Returns - 0 if not a seam,
     1 if u == Domain(0)[i] and srf(u, v) == srf(Domain(0)[1-i], v)
     2 if v == Domain(1)[i] and srf(u, v) == srf(u, Domain(1)[1-i])
     3 if 1 and 2 are true.

bool IsAtSingularity(double u,double v,bool exact)
: Tests if a surface parameter value is at a singularity.
: Returns - True if surface is singular at (s,t)

bool IsClosed(int direction)
: Gets a value indicating if the surface is closed in a direction.
: Returns - The indicating boolean value.

bool IsCone()
: Determines if the surface is a portion of a cone within RhinoMath.ZeroTolerance.
: Returns - True if the surface is a portion of a cone.

bool IsCone(double tolerance)
: Determines if the surface is a portion of a cone within a given tolerance.
: Returns - True if the surface is a portion of a cone.

bool IsContinuous(Continuity continuityType,double u,double v)
: Tests continuity at a surface parameter value.
: Returns - True if the surface has at least the specified continuity at the (u,v) parameter.

bool IsCylinder()
: Determines if the surface is a portion of a cylinder within RhinoMath.ZeroTolerance.
: Returns - True if the surface is a portion of a cylinder.

bool IsCylinder(double tolerance)
: Determines if the surface is a portion of a cylinder within a given tolerance.
: Returns - True if the surface is a portion of a cylinder.

[IsoStatus](/rhinocommon/rhino/geometry/isostatus/) IsIsoparametric(BoundingBox bbox)
: Determines if a 2d bounding box is iso-parameteric in the parameter space of this surface.
: Returns - IsoStatus flag describing the iso-parametric relationship between the surface and the bounding box.

[IsoStatus](/rhinocommon/rhino/geometry/isostatus/) IsIsoparametric(Curve curve)
: Determines if a 2d curve is iso-parameteric in the parameter space of this surface.
: Returns - IsoStatus flag describing the iso-parametric relationship between the surface and the curve.

[IsoStatus](/rhinocommon/rhino/geometry/isostatus/) IsIsoparametric(Curve curve,Interval curveDomain)
: Determines if a 2D curve is iso-parameteric in the parameter space of this surface.
: Returns - IsoStatus flag describing the iso-parametric relationship between the surface and the curve.

[Curve](/rhinocommon/rhino/geometry/curve/) IsoCurve(int direction,double constantParameter)
: Gets isoparametric curve.
: Returns - An isoparametric curve or None on error.

bool IsPeriodic(int direction)
: Gets a value indicating if thr surface is periodic in a direction (default is false).
: Returns - The indicating boolean value.

bool IsPlanar()
: Tests a surface to see if it is planar to zero tolerance.
: Returns - True if the surface is planar (flat) to within RhinoMath.ZeroTolerance units (1e-12).

bool IsPlanar(double tolerance)
: Tests a surface to see if it is planar to a given tolerance.
: Returns - True if there is a plane such that the maximum distance from
     the surface to the plane is <= tolerance.

bool IsSingular(int side)
: True if surface side is collapsed to a point.
: Returns - True if this specific side of the surface is singular; otherwise, false.

bool IsSphere()
: Determines if the surface is a portion of a sphere within RhinoMath.ZeroTolerance.
: Returns - True if the surface is a portion of a sphere.

bool IsSphere(double tolerance)
: Determines if the surface is a portion of a sphere within a given tolerance.
: Returns - True if the surface is a portion of a sphere.

bool IsTorus()
: Determines if the surface is a portion of a torus within RhinoMath.ZeroTolerance.
: Returns - True if the surface is a portion of a torus.

bool IsTorus(double tolerance)
: Determines if the surface is a portion of a torus within a given tolerance.
: Returns - True if the surface is a portion of a torus.

bool LocalClosestPoint(Point3d testPoint,double seedU,double seedV,double u,double v)
: Find parameters of the point on a surface that is locally closest to
     the testPoint. The search for a local close point starts at seed parameters.
: Returns - True if the search is successful, False if the search fails.
: since 6.3

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) NormalAt(double u,double v)
: Computes the surface normal at a point.
     This is the simple evaluation call - it does not support error handling.
: Returns - The normal.

Surface Offset(double distance,double tolerance)
: Constructs a new surface which is offset from the current surface.
: Returns - The offsetted surface or None on failure.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(double u,double v)
: Evaluates a point at a given parameter.
: Returns - Point3d.Unset on failure.

[Curve](/rhinocommon/rhino/geometry/curve/) Pullback(Curve curve3d,double tolerance)
: Pulls a 3d curve back to the surface's parameter space.
: Returns - 2d curve.

[Curve](/rhinocommon/rhino/geometry/curve/) Pullback(Curve curve3d,double tolerance,Interval curve3dSubdomain)
: Pulls a 3d curve back to the surface's parameter space.
: Returns - 2d curve.

[Curve](/rhinocommon/rhino/geometry/curve/) Pushup(Curve curve2d,double tolerance)
: Computes a 3d curve that is the composite of a 2d curve and the surface map.
: Returns - 3d curve.

[Curve](/rhinocommon/rhino/geometry/curve/) Pushup(Curve curve2d,double tolerance,Interval curve2dSubdomain)
: Computes a 3d curve that is the composite of a 2d curve and the surface map.
: Returns - 3d curve.

[NurbsSurface](/rhinocommon/rhino/geometry/nurbssurface/) Rebuild(int uDegree,int vDegree,int uPointCount,int vPointCount)
: Rebuilds an existing surface to a given degree and point count.
: Returns - new rebuilt surface on success. None on failure.

[NurbsSurface](/rhinocommon/rhino/geometry/nurbssurface/) RebuildOneDirection(int direction,int pointCount,LoftType loftType,double refitTolerance)
: Rebuilds an existing surface with a new surface to a given point count in either the u or v directions independently.
: Returns - new rebuilt surface on success. None on failure.
: since 6.7

Surface Reverse(int direction)
: Reverses parameterization Domain changes from [a,b] to [-b,-a]
: Returns - a new reversed surface on success.

Surface Reverse(int direction,bool inPlace)
: Same as Reverse, but if inPlace is set to True this Surface is modified
     instead of a new copy being created.
: Returns - If inPlace is False, a new reversed surface on success. If inPlace is
     true, this surface instance is returned on success.
: since 5.8

bool SetDomain(int direction,Interval domain)
: Sets the domain in a direction.
: Returns - True if setting succeeded, otherwise false.

[Curve](/rhinocommon/rhino/geometry/curve/) ShortPath(Point2d start,Point2d end,double tolerance)
: Constructs a geodesic between 2 points, used by ShortPath command in Rhino.
: Returns - a geodesic curve on the surface on success. None on failure.

Surface Smooth(double smoothFactor,bool bXSmooth,bool bYSmooth,bool bZSmooth,bool bFixBoundaries,SmoothingCoordinateSystem coordinateSystem)
: Smooths a surface by averaging the positions of control points in a specified region.
: Returns - The smoothed surface if successful, None otherwise.
: since 6.0

Surface Smooth(double smoothFactor,bool bXSmooth,bool bYSmooth,bool bZSmooth,bool bFixBoundaries,SmoothingCoordinateSystem coordinateSystem,Plane plane)
: Smooths a surface by averaging the positions of control points in a specified region.
: Returns - The smoothed surface if successful, None otherwise.
: since 6.0

int SpanCount(int direction)
: Gets number of smooth nonempty spans in the parameter direction.
: Returns - The span count.

Surface[] Split(int direction,double parameter)
: Splits (divides) the surface into two parts at the specified parameter
: Returns - Array of two surfaces on success

[Brep](/rhinocommon/rhino/geometry/brep/) ToBrep()
: Converts the surface into a Brep.
: Returns - A Brep with a similar shape like this surface or null.

[NurbsSurface](/rhinocommon/rhino/geometry/nurbssurface/) ToNurbsSurface()
: Gets a NURBS surface representation of this surface. Default 
     tolerance of 0.0 is used.
: Returns - NurbsSurface on success, None on failure.

[NurbsSurface](/rhinocommon/rhino/geometry/nurbssurface/) ToNurbsSurface(double tolerance,int accuracy)
: Gets a NURBS surface representation of this surface.
: Returns - NurbsSurface on success, None on failure.

Surface Transpose()
: Transposes surface parameterization (swap U and V)
: Returns - New transposed surface on success, None on failure.

Surface Transpose(bool inPlace)
: Transposes surface parameterization (swap U and V)
: Returns - New transposed surface on success, None on failure.
: since 5.8

Surface Trim(Interval u,Interval v)
: Constructs a sub-surface that covers the specified UV trimming domain.
: Returns - SubSurface on success, None on failure.

bool TryGetCone(Cone cone)
: Tests a surface to see if it is a portion of a cone within RhinoMath.ZeroTolerance and return the cone.
: Returns - True if the surface is a portion of a cone.

bool TryGetCone(Cone cone,double tolerance)
: Tests a surface to see if it is a portion of a cone and returns the cone.
: Returns - True if the surface is a portion of a cone.

bool TryGetCylinder(Cylinder cylinder)
: Tests a surface to see if it is a portion of a cylinder within RhinoMath.ZeroTolerance and return the cylinder.
: Returns - True if the surface is a portion of a cylinder.

bool TryGetCylinder(Cylinder cylinder,double tolerance)
: Tests a surface to see if it is a portion of a cylinder and return the infinite cylinder.
: Returns - True if the surface is a portion of a cylinder.

bool TryGetFiniteCylinder(Cylinder cylinder,double tolerance)
: Tests a surface with the assumption that it might be a right circular cylinder and returns this geometry.
: Returns - True if the surface is a portion of a cylinder.
: since 6.0

bool TryGetPlane(Plane plane)
: Tests a surface for planarity and return the plane.
: Returns - True if there is a plane such that the maximum distance from the surface to the plane is <= RhinoMath.ZeroTolerance.

bool TryGetPlane(Plane plane,double tolerance)
: Tests a surface for planarity and return the plane.
: Returns - True if there is a plane such that the maximum distance from the surface to the plane is <= tolerance.

bool TryGetSphere(Sphere sphere)
: Test a surface to see if it is a portion of a sphere and return the sphere.
: Returns - True if the surface is a portion of a sphere.

bool TryGetSphere(Sphere sphere,double tolerance)
: Test a surface to see if it is a portion of a sphere and return the sphere.
: Returns - True if the surface is a portion of a sphere.

bool TryGetTorus(Torus torus)
: Tests a surface to see if it is a portion of a torus within RhinoMath.ZeroTolerance and returns the torus.
: Returns - True if the surface is a portion of a torus.

bool TryGetTorus(Torus torus,double tolerance)
: Tests a surface to see if it is a portion of a torus and returns the torus.
: Returns - True if the surface is a portion of a torus.

Surface VariableOffset(double uMinvMin,double uMinvMax,double uMaxvMin,double uMaxvMax,double tolerance)
: Copies a surface so that all locations at the corners of the copied surface are specified distances from the original surface.
: Returns - The offset surface if successful, None otherwise.
: since 6.13

Surface VariableOffset(double uMinvMin,double uMinvMax,double uMaxvMin,double uMaxvMax,IEnumerable<Point2d> interiorParameters,IEnumerable<double> interiorDistances,double tolerance)
: Copies a surface so that all locations at the corners, and from specified interior locations, of the copied surface are specified distances from the original surface.
: Returns - The offset surface if successful, None otherwise.
: since 6.13
