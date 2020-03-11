---
title: "Curve"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a base class that is common to most RhinoCommon curve types.
   A curve represents an entity that can be all visited by providing
   a single parameter, usually called t.
```cs
[Serializable]
public class Curve : GeometryBase
```
## Properties

int Degree
: Gets the maximum algebraic degree of any span
     or a good estimate if curve spans are not algebraic.

int Dimension
: Gets the dimension of the object.
     The dimension is typically three. For parameter space trimming
     curves the dimension is two. In rare cases the dimension can
     be one or greater than three.

[Interval](/rhinocommon/rhino/geometry/interval/) Domain
: Gets or sets the domain of the curve.

bool IsClosed
: Gets a value indicating whether or not this curve is a closed curve.

bool IsPeriodic
: Gets a value indicating whether or not this curve is considered to be Periodic.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAtEnd
: Evaluates point at the end of the curve.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAtStart
: Evaluates point at the start of the curve.

int SpanCount
: Gets the number of non-empty smooth (c-infinity) spans in the curve.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) TangentAtEnd
: Evaluate unit tangent vector at the end of the curve.
: Returns - Unit tangent vector of the curve at the end point.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) TangentAtStart
: Evaluates the unit tangent vector at the start of the curve.
: Returns - Unit tangent vector of the curve at the start point.
## Methods

static Curve CreateArcBlend(Point3d startPt,Vector3d startDir,Point3d endPt,Vector3d endDir,double controlPointLengthRatio)
: Creates a polycurve consisting of two tangent arc segments that connect two points and two directions.
: Returns - The arc blend curve, or None on error.
: since 6.1

static Curve CreateBlendCurve(Curve curveA,Curve curveB,BlendContinuity continuity)
: Create a Blend curve between two existing curves.
: Returns - A curve representing the blend between A and B or None on failure.

static Curve CreateBlendCurve(Curve curveA,Curve curveB,BlendContinuity continuity,double bulgeA,double bulgeB)
: Create a Blend curve between two existing curves.
: Returns - A curve representing the blend between A and B or None on failure.

static Curve CreateBlendCurve(Curve curve0,double t0,bool reverse0,BlendContinuity continuity0,Curve curve1,double t1,bool reverse1,BlendContinuity continuity1)
: Makes a curve blend between 2 curves at the parameters specified
     with the directions and continuities specified
: Returns - The blend curve on success. None on failure

static Curve[] CreateBooleanDifference(Curve curveA,Curve curveB)
: Calculates the boolean difference between two closed, planar curves. 
     Note, curves must be co-planar.
: Returns - Result curves on success, empty array if no difference could be calculated.

static Curve[] CreateBooleanDifference(Curve curveA,Curve curveB,double tolerance)
: Calculates the boolean difference between two closed, planar curves. 
     Note, curves must be co-planar.
: Returns - Result curves on success, empty array if no difference could be calculated.
: since 6.0

static Curve[] CreateBooleanDifference(Curve curveA,IEnumerable<Curve> subtractors)
: Calculates the boolean difference between a closed planar curve, and a list of closed planar curves. 
     Note, curves must be co-planar.
: Returns - Result curves on success, empty array if no difference could be calculated.

static Curve[] CreateBooleanDifference(Curve curveA,IEnumerable<Curve> subtractors,double tolerance)
: Calculates the boolean difference between a closed planar curve, and a list of closed planar curves. 
     Note, curves must be co-planar.
: Returns - Result curves on success, empty array if no difference could be calculated.
: since 6.0

static Curve[] CreateBooleanIntersection(Curve curveA,Curve curveB)
: Calculates the boolean intersection of two closed, planar curves. 
     Note, curves must be co-planar.
: Returns - Result curves on success, empty array if no intersection could be calculated.

static Curve[] CreateBooleanIntersection(Curve curveA,Curve curveB,double tolerance)
: Calculates the boolean intersection of two closed, planar curves. 
     Note, curves must be co-planar.
: Returns - Result curves on success, empty array if no intersection could be calculated.
: since 6.0

static [CurveBooleanRegions](/rhinocommon/rhino/geometry/curvebooleanregions/) CreateBooleanRegions(IEnumerable<Curve> curves,Plane plane,bool combineRegions,double tolerance)
: Calculates curve Boolean regions, which trims and splits curves based on their overlapping regions.
: Returns - The curve Boolean regions if successful, None of no successful.
: since 7.0

static [CurveBooleanRegions](/rhinocommon/rhino/geometry/curvebooleanregions/) CreateBooleanRegions(IEnumerable<Curve> curves,Plane plane,IEnumerable<Point3d> points,bool combineRegions,double tolerance)
: Curve Boolean method, which trims and splits curves based on their overlapping regions.
: Returns - The curve Boolean regions if successful, None of no successful.
: since 7.0

static Curve[] CreateBooleanUnion(IEnumerable<Curve> curves)
: Calculates the boolean union of two or more closed, planar curves. 
     Note, curves must be co-planar.
: Returns - Result curves on success, empty array if no union could be calculated.

static Curve[] CreateBooleanUnion(IEnumerable<Curve> curves,double tolerance)
: Calculates the boolean union of two or more closed, planar curves. 
     Note, curves must be co-planar.
: Returns - Result curves on success, empty array if no union could be calculated.
: since 6.0

static Curve CreateControlPointCurve(IEnumerable<Point3d> points)
: Constructs a control-point of degree=3 (or less).

static Curve CreateControlPointCurve(IEnumerable<Point3d> points,int degree)
: Constructs a curve from a set of control-point locations.

static Curve[] CreateCurve2View(Curve curveA,Curve curveB,Vector3d vectorA,Vector3d vectorB,double tolerance,double angleTolerance)
: Creates a third curve from two curves that are planar in different construction planes. 
     The new curve looks the same as each of the original curves when viewed in each plane.
: Returns - An array containing one or more curves if successful.
: since 6.0

static [Arc](/rhinocommon/rhino/geometry/arc/) CreateFillet(Curve curve0,Curve curve1,double radius,double t0Base,double t1Base)
: Computes the fillet arc for a curve filleting operation.
: Returns - The fillet arc on success, or Arc.Unset on failure.

static Curve CreateFilletCornersCurve(Curve curve,double radius,double tolerance,double angleTolerance)
: Rounds the corners of a kinked curve with arcs of a single, specified radius.
: Returns - The filleted curve if successful. None on failure.
: since 6.0

static Curve[] CreateFilletCurves(Curve curve0,Point3d point0,Curve curve1,Point3d point1,double radius,bool join,bool trim,bool arcExtension,double tolerance,double angleTolerance)
: Creates a tangent arc between two curves and trims or extends the curves to the arc.
: Returns - The results of the fillet operation. The number of output curves depends
     on the input curves and the values of the parameters that were used
     during the fillet operation. In most cases, the output array will contain
     either one or three curves, although two curves can be returned if the
     radius is zero and join = false.
     For example, if both join and trim = true, then the output curve
     will be a polycurve containing the fillet curve joined with trimmed copies
     of the input curves. If join = False and trim = true, then three curves,
     the fillet curve and trimmed copies of the input curves, will be returned.
     If both join and trim = false, then just the fillet curve is returned.
: since 5.10

static Curve CreateInterpolatedCurve(IEnumerable<Point3d> points,int degree)
: Interpolates a sequence of points. Used by InterpCurve Command
     This routine works best when degree=3.
: Returns - interpolated curve on success. None on failure.

static Curve CreateInterpolatedCurve(IEnumerable<Point3d> points,int degree,CurveKnotStyle knots)
: Interpolates a sequence of points. Used by InterpCurve Command
     This routine works best when degree=3.
: Returns - interpolated curve on success. None on failure.

static Curve CreateInterpolatedCurve(IEnumerable<Point3d> points,int degree,CurveKnotStyle knots,Vector3d startTangent,Vector3d endTangent)
: Interpolates a sequence of points. Used by InterpCurve Command
     This routine works best when degree=3.
: Returns - interpolated curve on success. None on failure.

static Curve CreateMeanCurve(Curve curveA,Curve curveB)
: Constructs a mean, or average, curve from two curves.
: Returns - The average curve, or None on error.

static Curve CreateMeanCurve(Curve curveA,Curve curveB,double angleToleranceRadians)
: Constructs a mean, or average, curve from two curves.
: Returns - The average curve, or None on error.

static Curve CreatePeriodicCurve(Curve curve)
: Removes kinks from a curve. Periodic curves deform smoothly without kinks.
: Returns - The resulting curve if successful, None otherwise.
: since 6.0

static Curve CreatePeriodicCurve(Curve curve,bool smooth)
: Removes kinks from a curve. Periodic curves deform smoothly without kinks.
: Returns - The resulting curve if successful, None otherwise.
: since 6.0

static Curve CreateSoftEditCurve(Curve curve,double t,Vector3d delta,double length,bool fixEnds)
: Creates a soft edited curve from an exising curve using a smooth field of influence.
: Returns - The soft edited curve if successful. None on failure.
: since 6.0

static Curve[] CreateTextOutlines(string text,string font,double textHeight,int textStyle,bool closeLoops,Plane plane,double smallCapsScale,double tolerance)
: Creates outline curves created from a text string. The functionality is similar to what you find in Rhino's TextObject command or TextEntity.Explode() in RhinoCommon.
: Returns - An array containing one or more curves if successful.
: since 6.0

static Curve[] CreateTweenCurves(Curve curve0,Curve curve1,int numCurves)
: Creates curves between two open or closed input curves. Uses the control points of the curves for finding tween curves.
     That means the first control point of first curve is matched to first control point of the second curve and so on.
     There is no matching of curves direction. Caller must match input curves direction before calling the function.
: Returns - An array of joint curves. This array can be empty.
: since 5.2

static Curve[] CreateTweenCurves(Curve curve0,Curve curve1,int numCurves,double tolerance)
: Creates curves between two open or closed input curves. Uses the control points of the curves for finding tween curves.
     That means the first control point of first curve is matched to first control point of the second curve and so on.
     There is no matching of curves direction. Caller must match input curves direction before calling the function.
: Returns - An array of joint curves. This array can be empty.
: since 6.0

static Curve[] CreateTweenCurvesWithMatching(Curve curve0,Curve curve1,int numCurves)
: Creates curves between two open or closed input curves. Make the structure of input curves compatible if needed.
     Refits the input curves to have the same structure. The resulting curves are usually more complex than input unless
     input curves are compatible and no refit is needed. There is no matching of curves direction.
     Caller must match input curves direction before calling the function.
: Returns - An array of joint curves. This array can be empty.
: since 5.2

static Curve[] CreateTweenCurvesWithMatching(Curve curve0,Curve curve1,int numCurves,double tolerance)
: Creates curves between two open or closed input curves. Make the structure of input curves compatible if needed.
     Refits the input curves to have the same structure. The resulting curves are usually more complex than input unless
     input curves are compatible and no refit is needed. There is no matching of curves direction.
     Caller must match input curves direction before calling the function.
: Returns - An array of joint curves. This array can be empty.
: since 6.0

static Curve[] CreateTweenCurvesWithSampling(Curve curve0,Curve curve1,int numCurves,int numSamples)
: Creates curves between two open or closed input curves. Use sample points method to make curves compatible.
     This is how the algorithm workd: Divides the two curves into an equal number of points, finds the midpoint between the 
     corresponding points on the curves and interpolates the tween curve through those points. There is no matching of curves
     direction. Caller must match input curves direction before calling the function.
: Returns - >An array of joint curves. This array can be empty.
: since 5.2

static Curve[] CreateTweenCurvesWithSampling(Curve curve0,Curve curve1,int numCurves,int numSamples,double tolerance)
: Creates curves between two open or closed input curves. Use sample points method to make curves compatible.
     This is how the algorithm workd: Divides the two curves into an equal number of points, finds the midpoint between the 
     corresponding points on the curves and interpolates the tween curve through those points. There is no matching of curves
     direction. Caller must match input curves direction before calling the function.
: Returns - >An array of joint curves. This array can be empty.
: since 6.0

static bool DoDirectionsMatch(Curve curveA,Curve curveB)
: Determines whether two curves travel more or less in the same direction.
: Returns - True if both curves more or less point in the same direction, 
     False if they point in the opposite directions.

static bool GetDistancesBetweenCurves(Curve curveA,Curve curveB,double tolerance,double maxDistance,double maxDistanceParameterA,double maxDistanceParameterB,double minDistance,double minDistanceParameterA,double minDistanceParameterB)
: Computes the distances between two arbitrary curves that overlap.
: Returns - True if the operation succeeded; otherwise false.

static bool GetFilletPoints(Curve curve0,Curve curve1,double radius,double t0Base,double t1Base,double t0,double t1,Plane filletPlane)
: Finds points at which to cut a pair of curves so that a fillet of given radius can be inserted.
: Returns - True on success, False on failure.

static Curve[] JoinCurves(IEnumerable<Curve> inputCurves)
: Joins a collection of curve segments together.
: Returns - An array of curves which contains.

static Curve[] JoinCurves(IEnumerable<Curve> inputCurves,double joinTolerance)
: Joins a collection of curve segments together.
: Returns - An array of joint curves. This array can be empty.

static Curve[] JoinCurves(IEnumerable<Curve> inputCurves,double joinTolerance,bool preserveDirection)
: Joins a collection of curve segments together.
: Returns - An array of joint curves. This array can be empty.

static bool MakeEndsMeet(Curve curveA,bool adjustStartCurveA,Curve curveB,bool adjustStartCurveB)
: Makes adjustments to the ends of one or both input curves so that they meet at a point.
: Returns - True on success.

static [RegionContainment](/rhinocommon/rhino/geometry/regioncontainment/) PlanarClosedCurveRelationship(Curve curveA,Curve curveB,Plane testPlane,double tolerance)
: Determines whether two coplanar simple closed curves are disjoint or intersect;
     otherwise, if the regions have a containment relationship, discovers
     which curve encloses the other.
: Returns - A value indicating the relationship between the first and the second curve.

static bool PlanarCurveCollision(Curve curveA,Curve curveB,Plane testPlane,double tolerance)
: Determines if two coplanar curves collide (intersect).
: Returns - True if the curves intersect, otherwise false

static Curve[] ProjectToBrep(Curve curve,Brep brep,Vector3d direction,double tolerance)
: Projects a Curve onto a Brep along a given direction.
: Returns - An array of projected curves or empty array if the projection set is empty.

static Curve[] ProjectToBrep(Curve curve,IEnumerable<Brep> breps,Vector3d direction,double tolerance)
: Projects a Curve onto a collection of Breps along a given direction.
: Returns - An array of projected curves or empty array if the projection set is empty.

static Curve[] ProjectToBrep(Curve curve,IEnumerable<Brep> breps,Vector3d direction,double tolerance,int[] brepIndices)
: Projects a Curve onto a collection of Breps along a given direction.
: Returns - An array of projected curves or None if the projection set is empty.

static Curve[] ProjectToBrep(IEnumerable<Curve> curves,IEnumerable<Brep> breps,Vector3d direction,double tolerance)
: Projects a collection of Curves onto a collection of Breps along a given direction.
: Returns - An array of projected curves or empty array if the projection set is empty.

static Curve[] ProjectToBrep(IEnumerable<Curve> curves,IEnumerable<Brep> breps,Vector3d direction,double tolerance,int[] curveIndices,int[] brepIndices)
: Projects a collection of Curves onto a collection of Breps along a given direction.
: Returns - An array of projected curves. Array is empty if the projection set is empty.

static Curve[] ProjectToMesh(Curve curve,IEnumerable<Mesh> meshes,Vector3d direction,double tolerance)
: Projects a curve to a set of meshes using a direction and tolerance.
: Returns - A curve array.

static Curve[] ProjectToMesh(Curve curve,Mesh mesh,Vector3d direction,double tolerance)
: Projects a curve to a mesh using a direction and tolerance.
: Returns - A curve array.

static Curve[] ProjectToMesh(IEnumerable<Curve> curves,IEnumerable<Mesh> meshes,Vector3d direction,double tolerance)
: Projects a curve to a set of meshes using a direction and tolerance.
: Returns - A curve array.

static Curve ProjectToPlane(Curve curve,Plane plane)
: Constructs a curve by projecting an existing curve to a plane.
: Returns - The projected curve on success; None on failure.

static Curve[] PullToBrepFace(Curve curve,BrepFace face,double tolerance)
: Pull a curve to a BrepFace using closest point projection.
: Returns - An array of pulled curves, or an empty array on failure.

bool ChangeClosedCurveSeam(double t)
: If this curve is closed, then modify it so that the start/end point is at curve parameter t.
: Returns - True on success, False on failure.

bool ChangeDimension(int desiredDimension)
: Changes the dimension of a curve.
: Returns - True if the curve's dimension was already desiredDimension
     or if the curve's dimension was successfully changed to desiredDimension;
     otherwise false.

[CurveOrientation](/rhinocommon/rhino/geometry/curveorientation/) ClosedCurveOrientation()
: Determines the orientation (counterclockwise or clockwise) of a closed, planar curve in the world xy plane.
     Only works with simple (no self intersections) closed, planar curves.
: Returns - The orientation of this curve with respect to world xy plane.
: since 6.0

[CurveOrientation](/rhinocommon/rhino/geometry/curveorientation/) ClosedCurveOrientation(Plane plane)
: Determines the orientation (counterclockwise or clockwise) of a closed, planar curve in a given plane.
     Only works with simple (no self intersections) closed, planar curves.
: Returns - The orientation of this curve in the given plane.

[CurveOrientation](/rhinocommon/rhino/geometry/curveorientation/) ClosedCurveOrientation(Transform xform)
: Determines the orientation (counterclockwise or clockwise) of a closed, planar curve.
     Only works with simple (no self intersections) closed, planar curves.
: Returns - The orientation of this curve in the world xy-plane.

[CurveOrientation](/rhinocommon/rhino/geometry/curveorientation/) ClosedCurveOrientation(Vector3d upDirection)
: Determines the orientation (counterclockwise or clockwise) of a closed, planar curve in a given plane.
     Only works with simple (no self intersections) closed, planar curves.
: Returns - The orientation of this curve with respect to a defined up direction.

bool ClosestPoint(Point3d testPoint,double t)
: Finds parameter of the point on a curve that is closest to testPoint.
     If the maximumDistance parameter is > 0, then only points whose distance
     to the given point is <= maximumDistance will be returned.  Using a 
     positive value of maximumDistance can substantially speed up the search.
: Returns - True on success, False on failure.

bool ClosestPoint(Point3d testPoint,double t,double maximumDistance)
: Finds the parameter of the point on a curve that is closest to testPoint.
     If the maximumDistance parameter is > 0, then only points whose distance
     to the given point is <= maximumDistance will be returned.  Using a 
     positive value of maximumDistance can substantially speed up the search.
: Returns - True on success, False on failure.

bool ClosestPoints(Curve otherCurve,Point3d pointOnThisCurve,Point3d pointOnOtherCurve)
: Gets closest points between this and another curves.
: Returns - True on success; False on error.

bool ClosestPoints(IEnumerable<GeometryBase> geometry,Point3d pointOnCurve,Point3d pointOnObject,int whichGeometry)
: Finds the object (and the closest point in that object) that is closest to
     this curve. Breps, surfaces,
     curves and point clouds are examples of
     objects that can be passed to this function.
: Returns - True on success; False if no object was found or selected.

bool ClosestPoints(IEnumerable<GeometryBase> geometry,Point3d pointOnCurve,Point3d pointOnObject,int whichGeometry,double maximumDistance)
: Finds the object (and the closest point in that object) that is closest to
     this curve. Breps, surfaces,
     curves and point clouds are examples of
     objects that can be passed to this function.
: Returns - True on success; False if no object was found or selected.

[PointContainment](/rhinocommon/rhino/geometry/pointcontainment/) Contains(Point3d testPoint)
: Computes the relationship between a point and a closed curve region. 
     This curve must be closed or the return value will be Unset.
     Both curve and point are projected to the World XY plane.
: Returns - Relationship between point and curve region.

[PointContainment](/rhinocommon/rhino/geometry/pointcontainment/) Contains(Point3d testPoint,Plane plane)
: Computes the relationship between a point and a closed curve region. 
     This curve must be closed or the return value will be Unset.
: Returns - Relationship between point and curve region.

[PointContainment](/rhinocommon/rhino/geometry/pointcontainment/) Contains(Point3d testPoint,Plane plane,double tolerance)
: Computes the relationship between a point and a closed curve region. 
     This curve must be closed or the return value will be Unset.
: Returns - Relationship between point and curve region.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CurvatureAt(double t)
: Evaluate the curvature vector at a curve parameter.
: Returns - Curvature vector of the curve at the parameter t.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/)[] DerivativeAt(double t,int derivativeCount)
: Evaluate the derivatives at the specified curve parameter.
: Returns - An array of vectors that represents all the derivatives starting at zero.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/)[] DerivativeAt(double t,int derivativeCount,CurveEvaluationSide side)
: Evaluate the derivatives at the specified curve parameter.
: Returns - An array of vectors that represents all the derivatives starting at zero.

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] DivideAsContour(Point3d contourStart,Point3d contourEnd,double interval)
: Divides this curve at fixed steps along a defined contour line.
: Returns - An array of points; or None on error.

double[] DivideByCount(int segmentCount,bool includeEnds)
: Divide the curve into a number of equal-length segments.
: Returns - List of curve parameters at the division points on success, None on failure.

double[] DivideByCount(int segmentCount,bool includeEnds,Point3d[] points)
: Divide the curve into a number of equal-length segments.
: Returns - Array containing division curve parameters on success, None on failure.

double[] DivideByLength(double segmentLength,bool includeEnds)
: Divide the curve into specific length segments.
: Returns - Array containing division curve parameters if successful, None on failure.

double[] DivideByLength(double segmentLength,bool includeEnds,bool reverse)
: Divide the curve into specific length segments.
: Returns - Array containing division curve parameters if successful, None on failure.
: since 6.0

double[] DivideByLength(double segmentLength,bool includeEnds,bool reverse,Point3d[] points)
: Divide the curve into specific length segments.
: Returns - Array containing division curve parameters if successful, None on failure.
: since 6.0

double[] DivideByLength(double segmentLength,bool includeEnds,Point3d[] points)
: Divide the curve into specific length segments.
: Returns - Array containing division curve parameters if successful, None on failure.

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] DivideEquidistant(double distance)
: Calculates 3d points on a curve where the linear distance between the points is equal.
: Returns - An array of equidistant points, or None on error.

[GeometryBase](/rhinocommon/rhino/geometry/geometrybase/) Duplicate()
: Constructs an exact duplicate of this Curve.

Curve DuplicateCurve()
: Constructs an exact duplicate of this curve.
: Returns - An exact copy of this curve.

Curve[] DuplicateSegments()
: Polylines will be exploded into line segments. ExplodeCurves will
     return the curves in topological order.
: Returns - An array of all the segments that make up this curve.

Curve Extend(CurveEnd side,CurveExtensionStyle style,IEnumerable<GeometryBase> geometry)
: Extends a curve until it intersects a collection of objects.
: Returns - New extended curve result on success, None on failure.

Curve Extend(CurveEnd side,CurveExtensionStyle style,Point3d endPoint)
: Extends a curve to a point.
: Returns - New extended curve result on success, None on failure.

Curve Extend(CurveEnd side,double length,CurveExtensionStyle style)
: Extends a curve by a specific length.
: Returns - A curve with extended ends or None on failure.

Curve Extend(double t0,double t1)
: Where possible, analytically extends curve to include the given domain. 
     This will not work on closed curves. The original curve will be identical to the 
     restriction of the resulting curve to the original curve domain.
: Returns - Extended curve on success, None on failure.

Curve Extend(Interval domain)
: Where possible, analytically extends curve to include the given domain. 
     This will not work on closed curves. The original curve will be identical to the 
     restriction of the resulting curve to the original curve domain.
: Returns - Extended curve on success, None on failure.

Curve ExtendByArc(CurveEnd side,IEnumerable<GeometryBase> geometry)
: Extends a curve by an Arc until it intersects a collection of objects.
: Returns - New extended curve result on success, None on failure.

Curve ExtendByLine(CurveEnd side,IEnumerable<GeometryBase> geometry)
: Extends a curve by a line until it intersects a collection of objects.
: Returns - New extended curve result on success, None on failure.

Curve ExtendOnSurface(CurveEnd side,BrepFace face)
: Extends a curve on a surface.
: Returns - New extended curve result on success, None on failure.

Curve ExtendOnSurface(CurveEnd side,Surface surface)
: Extends a curve on a surface.
: Returns - New extended curve result on success, None on failure.

double[] ExtremeParameters(Vector3d direction)
: Returns the parameter values of all local extrema. 
     Parameter values are in increasing order so consecutive extrema 
     define an interval on which each component of the curve is monotone. 
     Note, non-periodic curves always return the end points.
: Returns - The parameter values of all local extrema.
: since 6.0

Curve Fair(double distanceTolerance,double angleTolerance,int clampStart,int clampEnd,int iterations)
: Fairs a curve object. Fair works best on degree 3 (cubic) curves. Attempts to 
     remove large curvature variations while limiting the geometry changes to be no 
     more than the specified tolerance.
: Returns - Returns new faired Curve on success, None on failure.

Curve Fit(int degree,double fitTolerance,double angleTolerance)
: Fits a new curve through an existing curve.
: Returns - Returns a new fitted Curve if successful, None on failure.

bool FrameAt(double t,Plane plane)
: Returns a 3d frame at a parameter.
: Returns - True on success, False on failure.

[ConicSectionType](/rhinocommon/rhino/geometry/conicsectiontype/) GetConicSectionType()
: Returns the type of conic section based on the curve's shape.
: since 6.0

[ConicSectionType](/rhinocommon/rhino/geometry/conicsectiontype/) GetConicSectionType(Point3d focus1,Point3d focus2,Point3d center)
: Returns the type of conic section based on the curve's shape.
: since 6.0

bool GetCurveParameterFromNurbsFormParameter(double nurbsParameter,double curveParameter)
: Convert a NURBS curve parameter to a curve parameter.
: Returns - True on success, False on failure.

double GetLength()
: Gets the length of the curve with a fractional tolerance of 1.0e-8.
: Returns - The length of the curve on success, or zero on failure.

double GetLength(double fractionalTolerance)
: Get the length of the curve.
: Returns - The length of the curve on success, or zero on failure.

double GetLength(double fractionalTolerance,Interval subdomain)
: Get the length of a sub-section of the curve.
: Returns - The length of the sub-curve on success, or zero on failure.

double GetLength(Interval subdomain)
: Get the length of a sub-section of the curve with a fractional tolerance of 1e-8.
: Returns - The length of the sub-curve on success, or zero on failure.

bool GetLocalPerpPoint(Point3d testPoint,double seedParmameter,double curveParameter)
: Search for a location on the curve, near seedParmameter, that is perpendicular to a test point.
: Returns - True if a solution is found, False otherwise.
: since 6.0

bool GetLocalPerpPoint(Point3d testPoint,double seedParmameter,Interval subDomain,double curveParameter)
: Search for a location on the curve, near seedParmameter, that is perpendicular to a test point.
: Returns - True if a solution is found, False otherwise.
: since 6.0

bool GetLocalTangentPoint(Point3d testPoint,double seedParmameter,double curveParameter)
: Search for a location on the curve, near seedParmameter, that is tangent to a test point.
: Returns - True if a solution is found, False otherwise.
: since 6.0

bool GetLocalTangentPoint(Point3d testPoint,double seedParmameter,Interval subDomain,double curveParameter)
: Search for a location on the curve, near seedParmameter, that is tangent to a test point.
: Returns - True if a solution is found, False otherwise.
: since 6.0

bool GetNextDiscontinuity(Continuity continuityType,double t0,double t1,double t)
: Searches for a derivative, tangent, or curvature discontinuity.
: Returns - Parametric continuity tests c = (C0_continuous, ..., G2_continuous):
      True if a parametric discontinuity was found strictly between t0 and t1. Note well that
      all curves are parametrically continuous at the ends of their domains.
     
     Locus continuity tests c = (C0_locus_continuous, ...,G2_locus_continuous):
      True if a locus discontinuity was found strictly between t0 and t1 or at t1 is the at the end
      of a curve. Note well that all open curves (IsClosed()=false) are locus discontinuous at the
      ends of their domains.  All closed curves (IsClosed()=true) are at least C0_locus_continuous at 
      the ends of their domains.

bool GetNurbsFormParameterFromCurveParameter(double curveParameter,double nurbsParameter)
: Convert a curve parameter to a NURBS curve parameter.
: Returns - True on success, False on failure.

[Plane](/rhinocommon/rhino/geometry/plane/)[] GetPerpendicularFrames(IEnumerable<double> parameters)
: Gets a collection of perpendicular frames along the curve. Perpendicular frames 
     are also known as 'Zero-twisting frames' and they minimize rotation from one frame to the next.
: Returns - An array of perpendicular frames on success or None on failure.

int HasNurbsForm()
: Does a NURBS curve representation of this curve exist?
: Returns - 0   unable to create NURBS representation with desired accuracy.
     1   success - NURBS parameterization matches the curve's to the desired accuracy
     2   success - NURBS point locus matches the curve's and the domain of the NURBS
                   curve is correct. However, This curve's parameterization and the
                   NURBS curve parameterization may not match. This situation happens
                   when getting NURBS representations of curves that have a
                   transendental parameterization like circles.

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] InflectionPoints()
: Returns a curve's inflection points. An inflection point is a location on
     a curve at which the sign of the curvature (i.e., the concavity) changes. 
     The curvature at these locations is always 0.
: Returns - An array of points if successful, None if not successful or on error.
: since 7.0

bool IsArc()
: Test a curve to see if it can be represented by an arc or circle within RhinoMath.ZeroTolerance.
: Returns - True if the curve can be represented by an arc or a circle within tolerance.

bool IsArc(double tolerance)
: Test a curve to see if it can be represented by an arc or circle within the given tolerance.
: Returns - True if the curve can be represented by an arc or a circle within tolerance.

bool IsCircle()
: Test a curve to see if it can be represented by a circle within RhinoMath.ZeroTolerance.
: Returns - True if the Curve can be represented by a circle within tolerance.

bool IsCircle(double tolerance)
: Test a curve to see if it can be represented by a circle within the given tolerance.
: Returns - True if the curve can be represented by a circle to within tolerance.

bool IsClosable(double tolerance)
: Decide if it makes sense to close off this curve by moving the endpoint 
     to the start based on start-end gap size and length of curve as 
     approximated by chord defined by 6 points.
: Returns - True if start and end points are close enough based on above conditions.

bool IsClosable(double tolerance,double minimumAbsoluteSize,double minimumRelativeSize)
: Decide if it makes sense to close off this curve by moving the endpoint
     to the start based on start-end gap size and length of curve as
     approximated by chord defined by 6 points.
: Returns - True if start and end points are close enough based on above conditions.

bool IsContinuous(Continuity continuityType,double t)
: Test continuity at a curve parameter value.
: Returns - True if the curve has at least the c type continuity at the parameter t.

bool IsEllipse()
: Test a curve to see if it can be represented by an ellipse within RhinoMath.ZeroTolerance.
: Returns - True if the Curve can be represented by an ellipse within tolerance.

bool IsEllipse(double tolerance)
: Test a curve to see if it can be represented by an ellipse within a given tolerance.
: Returns - True if the Curve can be represented by an ellipse within tolerance.

bool IsInPlane(Plane testPlane)
: Test a curve to see if it lies in a specific plane.
: Returns - True if the maximum distance from the curve to the testPlane is <= RhinoMath.ZeroTolerance.

bool IsInPlane(Plane testPlane,double tolerance)
: Test a curve to see if it lies in a specific plane.
: Returns - True if the maximum distance from the curve to the testPlane is <= tolerance.

bool IsLinear()
: Test a curve to see if it is linear to within RhinoMath.ZeroTolerance units (1e-12).
: Returns - True if the curve is linear.

bool IsLinear(double tolerance)
: Test a curve to see if it is linear to within the custom tolerance.
: Returns - True if the ends of the curve are farther than tolerance apart
     and the maximum distance from any point on the curve to
     the line segment connecting the curve ends is <= tolerance.

bool IsPlanar()
: Test a curve for planarity.
: Returns - True if the curve is planar (flat) to within RhinoMath.ZeroTolerance units (1e-12).

bool IsPlanar(double tolerance)
: Test a curve for planarity.
: Returns - True if there is a plane such that the maximum distance from the curve to the plane is <= tolerance.

bool IsPolyline()
: Several types of Curve can have the form of a polyline
     including a degree 1 NurbsCurve, a PolylineCurve,
     and a PolyCurve all of whose segments are some form of
     polyline. IsPolyline tests a curve to see if it can be
     represented as a polyline.
: Returns - True if this curve can be represented as a polyline; otherwise, false.

bool IsShort(double tolerance)
: Used to quickly find short curves.
: Returns - True if the length of the curve is <= tolerance.

bool IsShort(double tolerance,Interval subdomain)
: Used to quickly find short curves.
: Returns - True if the length of the curve is <= tolerance.

bool LcoalClosestPoint(Point3d testPoint,double seed,double t)
: Find parameter of the point on a curve that is locally closest to 
     the testPoint.  The search for a local close point starts at
     a seed parameter.
: Returns - True if the search is successful, False if the search fails.
: since 6.3

bool LengthParameter(double segmentLength,double t)
: Gets the parameter along the curve which coincides with a given length along the curve. 
     A fractional tolerance of 1e-8 is used in this version of the function.
: Returns - True on success, False on failure.

bool LengthParameter(double segmentLength,double t,double fractionalTolerance)
: Gets the parameter along the curve which coincides with a given length along the curve.
: Returns - True on success, False on failure.

bool LengthParameter(double segmentLength,double t,double fractionalTolerance,Interval subdomain)
: Gets the parameter along the curve which coincides with a given length along the curve.
: Returns - True on success, False on failure.

bool LengthParameter(double segmentLength,double t,Interval subdomain)
: Gets the parameter along the curve which coincides with a given length along the curve. 
     A fractional tolerance of 1e-8 is used in this version of the function.
: Returns - True on success, False on failure.

bool LocalClosestPoint(Point3d testPoint,double seed,double t)
: Find parameter of the point on a curve that is locally closest to 
     the testPoint.  The search for a local close point starts at
     a seed parameter.
: Returns - True if the search is successful, False if the search fails.
: since 6.18

bool MakeClosed(double tolerance)
: If IsClosed, just return true. Otherwise, decide if curve can be closed as 
     follows: Linear curves polylinear curves with 2 segments, Nurbs with 3 or less 
     control points cannot be made closed. Also, if tolerance > 0 and the gap between 
     start and end is larger than tolerance, curve cannot be made closed. 
     Adjust the curve's endpoint to match its start point.
: Returns - True on success, False on failure.

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] MaxCurvaturePoints()
: Returns a curve's maximum curvature points. The maximum curvature points identify
     where the curvature starts to decrease in both directions from the points.
: Returns - An array of points if successful, None if not successful or on error.
: since 7.0

bool NormalizedLengthParameter(double s,double t)
: Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve. 
     A fractional tolerance of 1e-8 is used in this version of the function.
: Returns - True on success, False on failure.

bool NormalizedLengthParameter(double s,double t,double fractionalTolerance)
: Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve.
: Returns - True on success, False on failure.

bool NormalizedLengthParameter(double s,double t,double fractionalTolerance,Interval subdomain)
: Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve.
: Returns - True on success, False on failure.

bool NormalizedLengthParameter(double s,double t,Interval subdomain)
: Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve. 
     A fractional tolerance of 1e-8 is used in this version of the function.
: Returns - True on success, False on failure.

double[] NormalizedLengthParameters(double[] s,double absoluteTolerance)
: Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve. 
     A fractional tolerance of 1e-8 is used in this version of the function.
: Returns - If successful, array of curve parameters such that the length of the curve from its start to t[i] is s[i]*curve_length. 
     Null on failure.

double[] NormalizedLengthParameters(double[] s,double absoluteTolerance,double fractionalTolerance)
: Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve.
: Returns - If successful, array of curve parameters such that the length of the curve from its start to t[i] is s[i]*curve_length. 
     Null on failure.

double[] NormalizedLengthParameters(double[] s,double absoluteTolerance,double fractionalTolerance,Interval subdomain)
: Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve.
: Returns - If successful, array of curve parameters such that the length of the curve from its start to t[i] is s[i]*curve_length. 
     Null on failure.

double[] NormalizedLengthParameters(double[] s,double absoluteTolerance,Interval subdomain)
: Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve. 
     A fractional tolerance of 1e-8 is used in this version of the function.
: Returns - If successful, array of curve parameters such that the length of the curve from its start to t[i] is s[i]*curve_length. 
     Null on failure.

Curve[] Offset(Plane plane,double distance,double tolerance,CurveOffsetCornerStyle cornerStyle)
: Offsets this curve. If you have a nice offset, then there will be one entry in 
     the array. If the original curve had kinks or the offset curve had self 
     intersections, you will get multiple segments in the offset_curves[] array.
: Returns - Offset curves on success, None on failure.

Curve[] Offset(Point3d directionPoint,Vector3d normal,double distance,double tolerance,CurveOffsetCornerStyle cornerStyle)
: Offsets this curve. If you have a nice offset, then there will be one entry in 
     the array. If the original curve had kinks or the offset curve had self 
     intersections, you will get multiple segments in the offset_curves[] array.
: Returns - Offset curves on success, None on failure.

Curve OffsetNormalToSurface(Surface surface,double height)
: Finds a curve by offsetting an existing curve normal to a surface.
     The caller is responsible for ensuring that the curve lies on the input surface.
: Returns - Offset curve at distance height from the surface.  The offset curve is
     interpolated through a small number of points so if the surface is irregular
     or complicated, the result will not be a very accurate offset.

Curve[] OffsetOnSurface(BrepFace face,double distance,double fittingTolerance)
: Offset this curve on a brep face surface. This curve must lie on the surface.
: Returns - Offset curves on success, or None on failure.

Curve[] OffsetOnSurface(BrepFace face,double[] curveParameters,double[] offsetDistances,double fittingTolerance)
: Offset a curve on a brep face surface. This curve must lie on the surface.
     This overload allows to specify different offsets for different curve parameters.
: Returns - Offset curves on success, or None on failure.

Curve[] OffsetOnSurface(BrepFace face,Point2d throughPoint,double fittingTolerance)
: Offset a curve on a brep face surface. This curve must lie on the surface.
     This overload allows to specify a surface point at which the offset will pass.
: Returns - Offset curves on success, or None on failure.

Curve[] OffsetOnSurface(Surface surface,double distance,double fittingTolerance)
: Offset a curve on a surface. This curve must lie on the surface.
: Returns - Offset curves on success, or None on failure.

Curve[] OffsetOnSurface(Surface surface,double[] curveParameters,double[] offsetDistances,double fittingTolerance)
: Offset this curve on a surface. This curve must lie on the surface.
     This overload allows to specify different offsets for different curve parameters.
: Returns - Offset curves on success, or None on failure.

Curve[] OffsetOnSurface(Surface surface,Point2d throughPoint,double fittingTolerance)
: Offset a curve on a surface. This curve must lie on the surface.
     This overload allows to specify a surface point at which the offset will pass.
: Returns - Offset curves on success, or None on failure.

bool PerpendicularFrameAt(double t,Plane plane)
: Return a 3d frame at a parameter. This is slightly different than FrameAt in
     that the frame is computed in a way so there is minimal rotation from one
     frame to the next.
: Returns - True on success, False on failure.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(double t)
: Evaluates point at a curve parameter.
: Returns - Point (location of curve at the parameter t).

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAtLength(double length)
: Gets a point at a certain length along the curve. The length must be 
     non-negative and less than or equal to the length of the curve. 
     Lengths will not be wrapped when the curve is closed or periodic.
: Returns - Point on the curve at the specified length from the start point or Poin3d.Unset on failure.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAtNormalizedLength(double length)
: Gets a point at a certain normalized length along the curve. The length must be 
     between or including 0.0 and 1.0, where 0.0 equals the start of the curve and 
     1.0 equals the end of the curve.
: Returns - Point on the curve at the specified normalized length from the start point or Poin3d.Unset on failure.

Curve[] PullToBrepFace(BrepFace face,double tolerance)
: Pulls this curve to a brep face and returns the result of that operation.
: Returns - An array containing the resulting curves after pulling. This array could be empty.

[PolylineCurve](/rhinocommon/rhino/geometry/polylinecurve/) PullToMesh(Mesh mesh,double tolerance)
: Makes a polyline approximation of the curve and gets the closest point on the mesh for each point on the curve. 
     Then it "connects the points" so that you have a polyline on the mesh.
: Returns - A polyline curve on success, None on failure.

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) Rebuild(int pointCount,int degree,bool preserveTangents)
: Rebuild a curve with a specific point count.
: Returns - A Nurbs curve on success or None on failure.

bool RemoveShortSegments(double tolerance)
: Looks for segments that are shorter than tolerance that can be removed. 
     Does not change the domain, but it will change the relative parameterization.
: Returns - True if removable short segments were found. 
     False if no removable short segments were found.

bool Reverse()
: Reverses the direction of the curve.
: Returns - True on success, False on failure.

Curve RibbonOffset(double distance,double blendRadius,Point3d directionPoint,Vector3d normal,double tolerance)
: Offsets a closed curve in the following way: pProject the curve to a plane with given normal.
     Then, loose Offset the projection by distance + blend_radius and trim off self-intersection.
     THen, Offset the remaining curve back in the opposite direction by blend_radius, filling gaps with blends.
     Finally, use the elevations of the input curve to get the correct elevations of the result.
: Returns - The offset curve if successful.
: since 7.0

Curve RibbonOffset(double distance,double blendRadius,Point3d directionPoint,Vector3d normal,double tolerance,Curve[] crossSections,Surface[] ruledSurfaces)
: Offsets a closed curve in the following way: pProject the curve to a plane with given normal.
     Then, loose Offset the projection by distance + blend_radius and trim off self-intersection.
     THen, Offset the remaining curve back in the opposite direction by blend_radius, filling gaps with blends.
     Finally, use the elevations of the input curve to get the correct elevations of the result.
: Returns - The offset curve if successful.
: since 7.0

Curve RibbonOffset(double distance,double blendRadius,Point3d directionPoint,Vector3d normal,double tolerance,double[] outputParameters,double[] curveParameters)
: Offsets a closed curve in the following way: pProject the curve to a plane with given normal.
     Then, loose Offset the projection by distance + blend_radius and trim off self-intersection.
     THen, Offset the remaining curve back in the opposite direction by blend_radius, filling gaps with blends.
     Finally, use the elevations of the input curve to get the correct elevations of the result.
: Returns - The offset curve if successful.
: since 7.0

bool SetEndPoint(Point3d point)
: Forces the curve to end at a specified point. 
     Not all curve types support this operation.
: Returns - True on success, False on failure.

bool SetStartPoint(Point3d point)
: Forces the curve to start at a specified point. 
     Not all curve types support this operation.
: Returns - True on success, False on failure.

Curve Simplify(CurveSimplifyOptions options,double distanceTolerance,double angleToleranceRadians)
: Returns a geometrically equivalent PolyCurve.
     The PolyCurve has the following properties
     1. All the PolyCurve segments are LineCurve, PolylineCurve, ArcCurve, or NurbsCurve.
     
     2. The Nurbs Curves segments do not have fully multiple interior knots.
     
     3. Rational Nurbs curves do not have constant weights.
     
     4. Any segment for which IsLinear() or IsArc() is True is a Line, 
        Polyline segment, or an Arc.
     
     5. Adjacent Colinear or Cocircular segments are combined.
     
     6. Segments that meet with G1-continuity have there ends tuned up so
        that they meet with G1-continuity to within machine precision.
: Returns - New simplified curve on success, None on failure.

Curve SimplifyEnd(CurveEnd end,CurveSimplifyOptions options,double distanceTolerance,double angleToleranceRadians)
: Same as SimplifyCurve, but simplifies only the last two segments at "side" end.
: Returns - New simplified curve on success, None on failure.

Curve Smooth(double smoothFactor,bool bXSmooth,bool bYSmooth,bool bZSmooth,bool bFixBoundaries,SmoothingCoordinateSystem coordinateSystem)
: Smooths a curve by averaging the positions of control points in a specified region.
: Returns - The smoothed curve if successful, None otherwise.
: since 6.0

Curve Smooth(double smoothFactor,bool bXSmooth,bool bYSmooth,bool bZSmooth,bool bFixBoundaries,SmoothingCoordinateSystem coordinateSystem,Plane plane)
: Smooths a curve by averaging the positions of control points in a specified region.
: Returns - The smoothed curve if successful, None otherwise.
: since 6.0

[Interval](/rhinocommon/rhino/geometry/interval/) SpanDomain(int spanIndex)
: Get the domain of the curve span with the given index. 
     Use the SpanCount property to test how many spans there are.
: Returns - Interval of the span with the given index.

Curve[] Split(Brep cutter,double tolerance)
: Splits a curve into pieces using a polysurface.
: Returns - An array of curves. This array can be empty.

Curve[] Split(Brep cutter,double tolerance,double angleToleranceRadians)
: Splits a curve into pieces using a polysurface.
: Returns - An array of curves. This array can be empty.
: since 6.0

Curve[] Split(double t)
: Splits (divides) the curve at the specified parameter. 
     The parameter must be in the interior of the curve's domain.
: Returns - Two curves on success, None on failure.

Curve[] Split(IEnumerable<double> t)
: Splits (divides) the curve at a series of specified parameters. 
     The parameter must be in the interior of the curve domain.
: Returns - Multiple curves on success, None on failure.

Curve[] Split(Surface cutter,double tolerance)
: Splits a curve into pieces using a surface.
: Returns - An array of curves. This array can be empty.

Curve[] Split(Surface cutter,double tolerance,double angleToleranceRadians)
: Splits a curve into pieces using a surface.
: Returns - An array of curves. This array can be empty.
: since 6.0

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) TangentAt(double t)
: Evaluates the unit tangent vector at a curve parameter.
: Returns - Unit tangent vector of the curve at the parameter t.

[PolyCurve](/rhinocommon/rhino/geometry/polycurve/) ToArcsAndLines(double tolerance,double angleTolerance,double minimumLength,double maximumLength)
: Converts a curve into polycurve consisting of arc segments. Sections of the input curves that are nearly straight are converted to straight-line segments.
: Returns - PolyCurve on success, None on error.
: since 6.0

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) ToNurbsCurve()
: Constructs a NURBS curve representation of this curve.
: Returns - NURBS representation of the curve on success, None on failure.

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) ToNurbsCurve(Interval subdomain)
: Constructs a NURBS curve representation of this curve.
: Returns - NURBS representation of the curve on success, None on failure.

[PolylineCurve](/rhinocommon/rhino/geometry/polylinecurve/) ToPolyline(double tolerance,double angleTolerance,double minimumLength,double maximumLength)
: Gets a polyline approximation of a curve.
: Returns - PolyCurve on success, None on error.
: since 6.0

[PolylineCurve](/rhinocommon/rhino/geometry/polylinecurve/) ToPolyline(int mainSegmentCount,int subSegmentCount,double maxAngleRadians,double maxChordLengthRatio,double maxAspectRatio,double tolerance,double minEdgeLength,double maxEdgeLength,bool keepStartPoint)
: Gets a polyline approximation of a curve.
: Returns - PolylineCurve on success, None on error.

[PolylineCurve](/rhinocommon/rhino/geometry/polylinecurve/) ToPolyline(int mainSegmentCount,int subSegmentCount,double maxAngleRadians,double maxChordLengthRatio,double maxAspectRatio,double tolerance,double minEdgeLength,double maxEdgeLength,bool keepStartPoint,Interval curveDomain)
: Gets a polyline approximation of a curve.
: Returns - PolylineCurve on success, None on error.

Curve Trim(CurveEnd side,double length)
: Shortens a curve by a given length
: Returns - Trimmed curve if successful, None on failure.
: since 5.1

Curve Trim(double t0,double t1)
: Removes portions of the curve outside the specified interval.
: Returns - Trimmed portion of this curve is successfull, None on failure.

Curve Trim(Interval domain)
: Removes portions of the curve outside the specified interval.
: Returns - Trimmed curve if successful, None on failure.

bool TryGetArc(Arc arc)
: Try to convert this curve into an Arc using RhinoMath.ZeroTolerance.
: Returns - True if the curve could be converted into an arc.

bool TryGetArc(Arc arc,double tolerance)
: Try to convert this curve into an Arc using a custom tolerance.
: Returns - True if the curve could be converted into an arc.

bool TryGetArc(Plane plane,Arc arc)
: Try to convert this curve into an Arc using RhinoMath.ZeroTolerance.
: Returns - True if the curve could be converted into an arc within the given plane.

bool TryGetArc(Plane plane,Arc arc,double tolerance)
: Try to convert this curve into an Arc using a custom tolerance.
: Returns - True if the curve could be converted into an arc within the given plane.

bool TryGetCircle(Circle circle)
: Try to convert this curve into a circle using RhinoMath.ZeroTolerance.
: Returns - True if the curve could be converted into a Circle.

bool TryGetCircle(Circle circle,double tolerance)
: Try to convert this curve into a Circle using a custom tolerance.
: Returns - True if the curve could be converted into a Circle within tolerance.

bool TryGetEllipse(Ellipse ellipse)
: Try to convert this curve into an Ellipse within RhinoMath.ZeroTolerance.
: Returns - True if the curve could be converted into an Ellipse.

bool TryGetEllipse(Ellipse ellipse,double tolerance)
: Try to convert this curve into an Ellipse using a custom tolerance.
: Returns - True if the curve could be converted into an Ellipse.

bool TryGetEllipse(Plane plane,Ellipse ellipse)
: Try to convert this curve into an Ellipse within RhinoMath.ZeroTolerance.
: Returns - True if the curve could be converted into an Ellipse within the given plane.

bool TryGetEllipse(Plane plane,Ellipse ellipse,double tolerance)
: Try to convert this curve into an Ellipse using a custom tolerance.
: Returns - True if the curve could be converted into an Ellipse within the given plane.

bool TryGetPlane(Plane plane)
: Test a curve for planarity and return the plane.
: Returns - True if there is a plane such that the maximum distance from the curve to the plane is <= RhinoMath.ZeroTolerance.

bool TryGetPlane(Plane plane,double tolerance)
: Test a curve for planarity and return the plane.
: Returns - True if there is a plane such that the maximum distance from the curve to the plane is <= tolerance.

bool TryGetPolyline(Polyline polyline)
: Several types of Curve can have the form of a polyline 
     including a degree 1 NurbsCurve, a PolylineCurve, 
     and a PolyCurve all of whose segments are some form of 
     polyline. IsPolyline tests a curve to see if it can be 
     represented as a polyline.
: Returns - True if this curve can be represented as a polyline; otherwise, false.

bool TryGetPolyline(Polyline polyline,double[] parameters)
: Several types of Curve can have the form of a polyline 
     including a degree 1 NurbsCurve, a PolylineCurve, 
     and a PolyCurve all of whose segments are some form of 
     polyline. IsPolyline tests a curve to see if it can be 
     represented as a polyline.
: Returns - True if this curve can be represented as a polyline; otherwise, false.
