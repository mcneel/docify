---
title: "NurbsCurve"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a Non Uniform Rational B-Splines (NURBS) curve.
```cs
[Serializable]
public class NurbsCurve : Curve, IEpsilonComparable<NurbsCurve>
```
## Constructors

NurbsCurve(int dimension,bool rational,int order,int pointCount)
: Constructs a new NURBS curve with knot and CV memory allocated.

NurbsCurve(int degree,int pointCount)
: Constructs a new NURBS curve with a specific degree and control point count.

NurbsCurve(NurbsCurve other)
: Initializes a NURBS curve by copying its values from another NURBS curve.
## Properties

bool HasBezierSpans
: Returns True if the NURBS curve has bezier spans (all distinct knots have multiplitity = degree)

bool IsRational
: Gets a value indicating whether or not the curve is rational. 
     Rational curves have control-points with custom weights.

[NurbsCurveKnotList](/rhinocommon/rhino/geometry/collections/nurbscurveknotlist/) Knots
: Gets access to the knots (or "knot vector") of this nurbs curve.

int Order
: Gets the order of the curve. Order = Degree + 1.

[NurbsCurvePointList](/rhinocommon/rhino/geometry/collections/nurbscurvepointlist/) Points
: Gets access to the control points of this nurbs curve.
## Methods

static NurbsCurve Create(bool periodic,int degree,IEnumerable<Point3d> points)
: Constructs a 3D NURBS curve from a list of control points.
: Returns - new NURBS curve on success
     None on error.

static NurbsCurve CreateFromArc(Arc arc)
: Gets a rational degree 2 NURBS curve representation
     of the arc. Note that the parameterization of NURBS curve
     does not match arc's transcendental paramaterization.
: Returns - Curve on success, None on failure.

static NurbsCurve CreateFromArc(Arc arc,int degree,int cvCount)
: Create a uniform non-ratonal cubic NURBS approximation of an arc.
: Returns - NURBS curve approximation of an arc on success
: since 6.0

static NurbsCurve CreateFromCircle(Circle circle)
: Gets a rational degree 2 NURBS curve representation
     of the circle. Note that the parameterization of NURBS curve
     does not match circle's transcendental paramaterization.  
     Use GetRadianFromNurbFormParameter() and
     GetParameterFromRadian() to convert between the NURBS curve 
     parameter and the transcendental parameter.
: Returns - Curve on success, None on failure.

static NurbsCurve CreateFromCircle(Circle circle,int degree,int cvCount)
: Create a uniform non-ratonal cubic NURBS approximation of a circle.
: Returns - NURBS curve approximation of a circle on success
: since 6.0

static NurbsCurve CreateFromEllipse(Ellipse ellipse)
: Gets a rational degree 2 NURBS curve representation of the ellipse.
     Note that the parameterization of the NURBS curve does not match
     with the transcendental paramaterization of the ellipsis.
: Returns - A nurbs curve representation of this ellipse or None if no such representation could be made.

static NurbsCurve CreateFromLine(Line line)
: Gets a non-rational, degree 1 Nurbs curve representation of the line.
: Returns - Curve on success, None on failure.

static NurbsCurve CreateHSpline(IEnumerable<Point3d> points)
: Construct an H-spline from a sequence of interpolation points
: since 7.0

static NurbsCurve CreateHSpline(IEnumerable<Point3d> points,Vector3d startTangent,Vector3d endTangent)
: Construct an H-spline from a sequence of interpolation points and
     optional start and end derivative information
: since 7.0

static NurbsCurve CreateParabolaFromFocus(Point3d focus,Point3d startPoint,Point3d endPoint)
: Creates a parabola from focus and end points.
: Returns - A 2 degree NURBS curve if successful, False otherwise.
: since 6.0

static NurbsCurve CreateParabolaFromVertex(Point3d vertex,Point3d startPoint,Point3d endPoint)
: Createsa a parabola from vertex and end points.
: Returns - A 2 degree NURBS curve if successful, False otherwise.
: since 6.0

static NurbsCurve CreateSpiral(Curve railCurve,double t0,double t1,Point3d radiusPoint,double pitch,double turnCount,double radius0,double radius1,int pointsPerTurn)
: Create a C2 non-rational uniform cubic NURBS approximation of a swept helix or spiral.
: Returns - NurbsCurve on success, None on failure.
: since 5.2

static NurbsCurve CreateSpiral(Point3d axisStart,Vector3d axisDir,Point3d radiusPoint,double pitch,double turnCount,double radius0,double radius1)
: Creates a C1 cubic NURBS approximation of a helix or spiral. For a helix,
     you may have radius0 == radius1. For a spiral radius0 == radius0 produces
     a circle. Zero and negative radii are permissible.
: Returns - NurbsCurve on success, None on failure.
: since 5.2

static bool IsDuplicate(NurbsCurve curveA,NurbsCurve curveB,bool ignoreParameterization,double tolerance)
: Determines if two curves are similar.
: Returns - True if curves are similar within tolerance.

static NurbsCurve[] MakeCompatible(IEnumerable<Curve> curves,Point3d startPt,Point3d endPt,int simplifyMethod,int numPoints,double refitTolerance,double angleTolerance)
: For expert use only. From the input curves, make an array of compatible NURBS curves.
: Returns - The output NURBS surfaces if successful.
: since 6.0

bool EpsilonEquals(NurbsCurve other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

double GrevilleParameter(int index)
: Gets the greville (edit point) parameter that belongs 
     to the control point at the specified index.

double[] GrevilleParameters()
: Gets all Greville parameters for this curve.

[Point3d](/rhinocommon/rhino/geometry/point3d/) GrevillePoint(int index)
: Gets the Greville parameter that belongs 
     to the control point at the specified index.

[Point3dList](/rhinocommon/rhino/collections/point3dlist/) GrevillePoints()
: Gets all Greville points for this curve.

[Point3dList](/rhinocommon/rhino/collections/point3dlist/) GrevillePoints(bool all)
: Gets Greville points for this curve.
: Returns - A list of points if successful, None otherwise.
: since 6.18

bool IncreaseDegree(int desiredDegree)
: Increase the degree of this curve.
: Returns - True on success, False on failure.

bool MakePiecewiseBezier(bool setEndWeightsToOne)
: Clamps ends and adds knots so the NURBS curve has bezier spans 
     (all distinct knots have multiplitity = degree).
: Returns - True on success, False on failure.

bool Reparameterize(double c)
: Use a linear fractional transformation to reparameterize the NURBS curve.
     This does not change the curve's domain.
: Returns - True if successful.

bool SetEndCondition(bool bSetEnd,NurbsCurveEndConditionType continuity,Point3d point,Vector3d tangent)
: Set end condition of a nurbs curve to point, tangent and curvature.
: Returns - True on success, False on failure.
: since 6.0

bool SetEndCondition(bool bSetEnd,NurbsCurveEndConditionType continuity,Point3d point,Vector3d tangent,Vector3d curvature)
: Set end condition of a nurbs curve to point, tangent and curvature.
: Returns - True on success, False on failure.
: since 6.0

bool SetGrevillePoints(IEnumerable<Point3d> points)
: Sets all Greville edit points for this curve.
: Returns - True if successful, False otherwise.
: since 6.4

bool UVNDirectionsAt(double t,Vector3d uDir,Vector3d vDir,Vector3d nDir)
: Calculates the u, V, and N directions of a NURBS curve at a parameter similar to the method used by Rhino's MoveUVN command.
: Returns - True if successful, False otherwise.
: since 7.0
