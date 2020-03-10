---
title: "Rhino.Geometry.NurbsCurve"
draft: false
---

# Constructors
## Rhino.Geometry.NurbsCurve(int dimension,bool rational,int order,int pointCount)
- (summary) 
     Constructs a new NURBS curve with knot and CV memory allocated.
     
- (since) 5.0
## Rhino.Geometry.NurbsCurve(int degree,int pointCount)
- (summary) 
     Constructs a new NURBS curve with a specific degree and control point count.
     
- (since) 5.0
## Rhino.Geometry.NurbsCurve(NurbsCurve other)
- (summary) 
     Initializes a NURBS curve by copying its values from another NURBS curve.
     
- (since) 5.0
# Properties
## bool HasBezierSpans
- (summary) 
     Returns True if the NURBS curve has bezier spans (all distinct knots have multiplitity = degree)
     
- (since) 5.0
## bool IsRational
- (summary) 
     Gets a value indicating whether or not the curve is rational. 
     Rational curves have control-points with custom weights.
     
- (since) 5.0
## Collections.NurbsCurveKnotList Knots
- (summary) 
     Gets access to the knots (or "knot vector") of this nurbs curve.
     
- (since) 5.0
## int Order
- (summary) 
     Gets the order of the curve. Order = Degree + 1.
     
- (since) 5.0
## Collections.NurbsCurvePointList Points
- (summary) 
     Gets access to the control points of this nurbs curve.
     
- (since) 5.0
# Methods
## static NurbsCurve Create(bool periodic,int degree,IEnumerable<Point3d> points)
- (summary) 
     Constructs a 3D NURBS curve from a list of control points.
     
- (since) 5.0
- (returns) NurbsCurve This is some return comment
## static NurbsCurve CreateFromArc(Arc arc)
- (summary) 
     Gets a rational degree 2 NURBS curve representation
     of the arc. Note that the parameterization of NURBS curve
     does not match arc's transcendental paramaterization.
     
- (since) 5.0
- (returns) NurbsCurve This is some return comment
## static NurbsCurve CreateFromArc(Arc arc,int degree,int cvCount)
- (summary) 
     Create a uniform non-ratonal cubic NURBS approximation of an arc.
     
- (since) 6.0
- (returns) NurbsCurve This is some return comment
## static NurbsCurve CreateFromCircle(Circle circle)
- (summary) 
     Gets a rational degree 2 NURBS curve representation
     of the circle. Note that the parameterization of NURBS curve
     does not match circle's transcendental paramaterization.  
     Use GetRadianFromNurbFormParameter() and
     GetParameterFromRadian() to convert between the NURBS curve 
     parameter and the transcendental parameter.
     
- (since) 5.0
- (returns) NurbsCurve This is some return comment
## static NurbsCurve CreateFromCircle(Circle circle,int degree,int cvCount)
- (summary) 
     Create a uniform non-ratonal cubic NURBS approximation of a circle.
     
- (since) 6.0
- (returns) NurbsCurve This is some return comment
## static NurbsCurve CreateFromEllipse(Ellipse ellipse)
- (summary) 
     Gets a rational degree 2 NURBS curve representation of the ellipse.
     Note that the parameterization of the NURBS curve does not match
     with the transcendental paramaterization of the ellipsis.
- (since) 5.0
- (returns) NurbsCurve This is some return comment
## static NurbsCurve CreateFromLine(Line line)
- (summary) 
     Gets a non-rational, degree 1 Nurbs curve representation of the line.
     
- (since) 5.0
- (returns) NurbsCurve This is some return comment
## static NurbsCurve CreateHSpline(IEnumerable<Point3d> points)
- (summary) 
     Construct an H-spline from a sequence of interpolation points
     
- (since) 7.0
- (returns) NurbsCurve This is some return comment
## static NurbsCurve CreateHSpline(IEnumerable<Point3d> points,Vector3d startTangent,Vector3d endTangent)
- (summary) 
     Construct an H-spline from a sequence of interpolation points and
     optional start and end derivative information
     
- (since) 7.0
- (returns) NurbsCurve This is some return comment
## static NurbsCurve CreateParabolaFromFocus(Point3d focus,Point3d startPoint,Point3d endPoint)
- (summary) 
     Creates a parabola from focus and end points.
     
- (since) 6.0
- (returns) NurbsCurve This is some return comment
## static NurbsCurve CreateParabolaFromVertex(Point3d vertex,Point3d startPoint,Point3d endPoint)
- (summary) 
     Createsa a parabola from vertex and end points.
     
- (since) 6.0
- (returns) NurbsCurve This is some return comment
## static NurbsCurve CreateSpiral(Curve railCurve,double t0,double t1,Point3d radiusPoint,double pitch,double turnCount,double radius0,double radius1,int pointsPerTurn)
- (summary) 
     Create a C2 non-rational uniform cubic NURBS approximation of a swept helix or spiral.
     
- (since) 5.2
- (returns) NurbsCurve This is some return comment
## static NurbsCurve CreateSpiral(Point3d axisStart,Vector3d axisDir,Point3d radiusPoint,double pitch,double turnCount,double radius0,double radius1)
- (summary) 
     Creates a C1 cubic NURBS approximation of a helix or spiral. For a helix,
     you may have radius0 == radius1. For a spiral radius0 == radius0 produces
     a circle. Zero and negative radii are permissible.
     
- (since) 5.2
- (returns) NurbsCurve This is some return comment
## static bool IsDuplicate(NurbsCurve curveA,NurbsCurve curveB,bool ignoreParameterization,double tolerance)
- (summary) 
     Determines if two curves are similar.
     
- (since) 5.0
- (returns) bool This is some return comment
## static NurbsCurve[] MakeCompatible(IEnumerable<Curve> curves,Point3d startPt,Point3d endPt,int simplifyMethod,int numPoints,double refitTolerance,double angleTolerance)
- (summary) 
     For expert use only. From the input curves, make an array of compatible NURBS curves.
     
- (since) 6.0
- (returns) NurbsCurve[] This is some return comment
## bool EpsilonEquals(NurbsCurve other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## double GrevilleParameter(int index)
- (summary) 
     Gets the greville (edit point) parameter that belongs 
     to the control point at the specified index.
     
- (since) 5.0
- (returns) double This is some return comment
## double[] GrevilleParameters()
- (summary) 
     Gets all Greville parameters for this curve.
     
- (since) 5.0
- (returns) double[] This is some return comment
## Point3d GrevillePoint(int index)
- (summary) 
     Gets the Greville parameter that belongs 
     to the control point at the specified index.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## Point3dList GrevillePoints()
- (summary) 
     Gets all Greville points for this curve.
     
- (since) 5.0
- (returns) Point3dList This is some return comment
## Point3dList GrevillePoints(bool all)
- (summary) 
     Gets Greville points for this curve.
     
- (since) 6.18
- (returns) Point3dList This is some return comment
## bool IncreaseDegree(int desiredDegree)
- (summary) 
     Increase the degree of this curve.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool MakePiecewiseBezier(bool setEndWeightsToOne)
- (summary) 
     Clamps ends and adds knots so the NURBS curve has bezier spans 
     (all distinct knots have multiplitity = degree).
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Reparameterize(double c)
- (summary) 
     Use a linear fractional transformation to reparameterize the NURBS curve.
     This does not change the curve's domain.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetEndCondition(bool bSetEnd,NurbsCurveEndConditionType continuity,Point3d point,Vector3d tangent)
- (summary) 
     Set end condition of a nurbs curve to point, tangent and curvature.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SetEndCondition(bool bSetEnd,NurbsCurveEndConditionType continuity,Point3d point,Vector3d tangent,Vector3d curvature)
- (summary) 
     Set end condition of a nurbs curve to point, tangent and curvature.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SetGrevillePoints(IEnumerable<Point3d> points)
- (summary) 
     Sets all Greville edit points for this curve.
     
- (since) 6.4
- (returns) bool This is some return comment
## bool UVNDirectionsAt(double t,Vector3d uDir,Vector3d vDir,Vector3d nDir)
- (summary) 
     Calculates the u, V, and N directions of a NURBS curve at a parameter similar to the method used by Rhino's MoveUVN command.
     
- (since) 7.0
- (returns) bool This is some return comment
