---
title: "Rhino.Geometry.Curve"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## int Degree
- (summary) 
     Gets the maximum algebraic degree of any span
     or a good estimate if curve spans are not algebraic.
     
- (since) 5.0
## int Dimension
- (summary) 
     Gets the dimension of the object.
     The dimension is typically three. For parameter space trimming
     curves the dimension is two. In rare cases the dimension can
     be one or greater than three.
- (since) 5.0
## Interval Domain
- (summary) 
     Gets or sets the domain of the curve.
     
- (since) 5.0
## bool IsClosed
- (summary) 
     Gets a value indicating whether or not this curve is a closed curve.
     
- (since) 5.0
## bool IsPeriodic
- (summary) 
     Gets a value indicating whether or not this curve is considered to be Periodic.
     
- (since) 5.0
## Point3d PointAtEnd
- (summary) 
     Evaluates point at the end of the curve.
     
- (since) 5.0
## Point3d PointAtStart
- (summary) 
     Evaluates point at the start of the curve.
     
- (since) 5.0
## int SpanCount
- (summary) 
     Gets the number of non-empty smooth (c-infinity) spans in the curve.
     
- (since) 5.0
## Vector3d TangentAtEnd
- (summary) Evaluate unit tangent vector at the end of the curve.
- (since) 5.0
## Vector3d TangentAtStart
- (summary) Evaluates the unit tangent vector at the start of the curve.
- (since) 5.0
# Methods
## static Curve CreateArcBlend(Point3d startPt,Vector3d startDir,Point3d endPt,Vector3d endDir,double controlPointLengthRatio)
- (summary) 
     Creates a polycurve consisting of two tangent arc segments that connect two points and two directions.
     
- (since) 6.1
- (returns) Curve This is some return comment
## static Curve CreateBlendCurve(Curve curveA,Curve curveB,BlendContinuity continuity)
- (summary) 
     Create a Blend curve between two existing curves.
     
- (since) 5.0
- (returns) Curve This is some return comment
## static Curve CreateBlendCurve(Curve curveA,Curve curveB,BlendContinuity continuity,double bulgeA,double bulgeB)
- (summary) 
     Create a Blend curve between two existing curves.
     
- (since) 5.0
- (returns) Curve This is some return comment
## static Curve CreateBlendCurve(Curve curve0,double t0,bool reverse0,BlendContinuity continuity0,Curve curve1,double t1,bool reverse1,BlendContinuity continuity1)
- (summary) 
     Makes a curve blend between 2 curves at the parameters specified
     with the directions and continuities specified
     
- (since) 5.0
- (returns) Curve This is some return comment
## static Curve[] CreateBooleanDifference(Curve curveA,Curve curveB)
- (summary) 
     Calculates the boolean difference between two closed, planar curves. 
     Note, curves must be co-planar.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Curve[] CreateBooleanDifference(Curve curveA,Curve curveB,double tolerance)
- (summary) 
     Calculates the boolean difference between two closed, planar curves. 
     Note, curves must be co-planar.
     
- (since) 6.0
- (returns) Curve[] This is some return comment
## static Curve[] CreateBooleanDifference(Curve curveA,IEnumerable<Curve> subtractors)
- (summary) 
     Calculates the boolean difference between a closed planar curve, and a list of closed planar curves. 
     Note, curves must be co-planar.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Curve[] CreateBooleanDifference(Curve curveA,IEnumerable<Curve> subtractors,double tolerance)
- (summary) 
     Calculates the boolean difference between a closed planar curve, and a list of closed planar curves. 
     Note, curves must be co-planar.
     
- (since) 6.0
- (returns) Curve[] This is some return comment
## static Curve[] CreateBooleanIntersection(Curve curveA,Curve curveB)
- (summary) 
     Calculates the boolean intersection of two closed, planar curves. 
     Note, curves must be co-planar.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Curve[] CreateBooleanIntersection(Curve curveA,Curve curveB,double tolerance)
- (summary) 
     Calculates the boolean intersection of two closed, planar curves. 
     Note, curves must be co-planar.
     
- (since) 6.0
- (returns) Curve[] This is some return comment
## static CurveBooleanRegions CreateBooleanRegions(IEnumerable<Curve> curves,Plane plane,bool combineRegions,double tolerance)
- (summary) 
     Calculates curve Boolean regions, which trims and splits curves based on their overlapping regions.
     
- (since) 7.0
- (returns) CurveBooleanRegions This is some return comment
## static CurveBooleanRegions CreateBooleanRegions(IEnumerable<Curve> curves,Plane plane,IEnumerable<Point3d> points,bool combineRegions,double tolerance)
- (summary) 
     Curve Boolean method, which trims and splits curves based on their overlapping regions.
     
- (since) 7.0
- (returns) CurveBooleanRegions This is some return comment
## static Curve[] CreateBooleanUnion(IEnumerable<Curve> curves)
- (summary) 
     Calculates the boolean union of two or more closed, planar curves. 
     Note, curves must be co-planar.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Curve[] CreateBooleanUnion(IEnumerable<Curve> curves,double tolerance)
- (summary) 
     Calculates the boolean union of two or more closed, planar curves. 
     Note, curves must be co-planar.
     
- (since) 6.0
- (returns) Curve[] This is some return comment
## static Curve CreateControlPointCurve(IEnumerable<Point3d> points)
- (summary) 
     Constructs a control-point of degree=3 (or less).
     
- (since) 5.0
- (returns) Curve This is some return comment
## static Curve CreateControlPointCurve(IEnumerable<Point3d> points,int degree)
- (summary) 
     Constructs a curve from a set of control-point locations.
     
- (since) 5.0
- (returns) Curve This is some return comment
## static Curve[] CreateCurve2View(Curve curveA,Curve curveB,Vector3d vectorA,Vector3d vectorB,double tolerance,double angleTolerance)
- (summary) 
     Creates a third curve from two curves that are planar in different construction planes. 
     The new curve looks the same as each of the original curves when viewed in each plane.
     
- (since) 6.0
- (returns) Curve[] This is some return comment
## static Arc CreateFillet(Curve curve0,Curve curve1,double radius,double t0Base,double t1Base)
- (summary) 
     Computes the fillet arc for a curve filleting operation.
     
- (since) 5.0
- (returns) Arc This is some return comment
## static Curve CreateFilletCornersCurve(Curve curve,double radius,double tolerance,double angleTolerance)
- (summary) 
     Rounds the corners of a kinked curve with arcs of a single, specified radius.
     
- (since) 6.0
- (returns) Curve This is some return comment
## static Curve[] CreateFilletCurves(Curve curve0,Point3d point0,Curve curve1,Point3d point1,double radius,bool join,bool trim,bool arcExtension,double tolerance,double angleTolerance)
- (summary) 
     Creates a tangent arc between two curves and trims or extends the curves to the arc.
     
- (since) 5.10
- (returns) Curve[] This is some return comment
## static Curve CreateInterpolatedCurve(IEnumerable<Point3d> points,int degree)
- (summary) 
     Interpolates a sequence of points. Used by InterpCurve Command
     This routine works best when degree=3.
     
- (since) 5.0
- (returns) Curve This is some return comment
## static Curve CreateInterpolatedCurve(IEnumerable<Point3d> points,int degree,CurveKnotStyle knots)
- (summary) 
     Interpolates a sequence of points. Used by InterpCurve Command
     This routine works best when degree=3.
     
- (since) 5.0
- (returns) Curve This is some return comment
## static Curve CreateInterpolatedCurve(IEnumerable<Point3d> points,int degree,CurveKnotStyle knots,Vector3d startTangent,Vector3d endTangent)
- (summary) 
     Interpolates a sequence of points. Used by InterpCurve Command
     This routine works best when degree=3.
     
- (since) 5.0
- (returns) Curve This is some return comment
## static Curve CreateMeanCurve(Curve curveA,Curve curveB)
- (summary) 
     Constructs a mean, or average, curve from two curves.
     
- (since) 5.0
- (returns) Curve This is some return comment
## static Curve CreateMeanCurve(Curve curveA,Curve curveB,double angleToleranceRadians)
- (summary) 
     Constructs a mean, or average, curve from two curves.
     
- (since) 5.0
- (returns) Curve This is some return comment
## static Curve CreatePeriodicCurve(Curve curve)
- (summary) 
     Removes kinks from a curve. Periodic curves deform smoothly without kinks.
     
- (since) 6.0
- (returns) Curve This is some return comment
## static Curve CreatePeriodicCurve(Curve curve,bool smooth)
- (summary) 
     Removes kinks from a curve. Periodic curves deform smoothly without kinks.
     
- (since) 6.0
- (returns) Curve This is some return comment
## static Curve CreateSoftEditCurve(Curve curve,double t,Vector3d delta,double length,bool fixEnds)
- (summary) 
     Creates a soft edited curve from an exising curve using a smooth field of influence.
     
- (since) 6.0
- (returns) Curve This is some return comment
## static Curve[] CreateTextOutlines(string text,string font,double textHeight,int textStyle,bool closeLoops,Plane plane,double smallCapsScale,double tolerance)
- (summary) 
     Creates outline curves created from a text string. The functionality is similar to what you find in Rhino's TextObject command or TextEntity.Explode() in RhinoCommon.
     
- (since) 6.0
- (returns) Curve[] This is some return comment
## static Curve[] CreateTweenCurves(Curve curve0,Curve curve1,int numCurves)
- (summary) 
     Creates curves between two open or closed input curves. Uses the control points of the curves for finding tween curves.
     That means the first control point of first curve is matched to first control point of the second curve and so on.
     There is no matching of curves direction. Caller must match input curves direction before calling the function.
     
- (since) 5.2
- (returns) Curve[] This is some return comment
## static Curve[] CreateTweenCurves(Curve curve0,Curve curve1,int numCurves,double tolerance)
- (summary) 
     Creates curves between two open or closed input curves. Uses the control points of the curves for finding tween curves.
     That means the first control point of first curve is matched to first control point of the second curve and so on.
     There is no matching of curves direction. Caller must match input curves direction before calling the function.
     
- (since) 6.0
- (returns) Curve[] This is some return comment
## static Curve[] CreateTweenCurvesWithMatching(Curve curve0,Curve curve1,int numCurves)
- (summary) 
     Creates curves between two open or closed input curves. Make the structure of input curves compatible if needed.
     Refits the input curves to have the same structure. The resulting curves are usually more complex than input unless
     input curves are compatible and no refit is needed. There is no matching of curves direction.
     Caller must match input curves direction before calling the function.
     
- (since) 5.2
- (returns) Curve[] This is some return comment
## static Curve[] CreateTweenCurvesWithMatching(Curve curve0,Curve curve1,int numCurves,double tolerance)
- (summary) 
     Creates curves between two open or closed input curves. Make the structure of input curves compatible if needed.
     Refits the input curves to have the same structure. The resulting curves are usually more complex than input unless
     input curves are compatible and no refit is needed. There is no matching of curves direction.
     Caller must match input curves direction before calling the function.
     
- (since) 6.0
- (returns) Curve[] This is some return comment
## static Curve[] CreateTweenCurvesWithSampling(Curve curve0,Curve curve1,int numCurves,int numSamples)
- (summary) 
     Creates curves between two open or closed input curves. Use sample points method to make curves compatible.
     This is how the algorithm workd: Divides the two curves into an equal number of points, finds the midpoint between the 
     corresponding points on the curves and interpolates the tween curve through those points. There is no matching of curves
     direction. Caller must match input curves direction before calling the function.
     
- (since) 5.2
- (returns) Curve[] This is some return comment
## static Curve[] CreateTweenCurvesWithSampling(Curve curve0,Curve curve1,int numCurves,int numSamples,double tolerance)
- (summary) 
     Creates curves between two open or closed input curves. Use sample points method to make curves compatible.
     This is how the algorithm workd: Divides the two curves into an equal number of points, finds the midpoint between the 
     corresponding points on the curves and interpolates the tween curve through those points. There is no matching of curves
     direction. Caller must match input curves direction before calling the function.
     
- (since) 6.0
- (returns) Curve[] This is some return comment
## static bool DoDirectionsMatch(Curve curveA,Curve curveB)
- (summary) 
     Determines whether two curves travel more or less in the same direction.
     
- (since) 5.0
- (returns) bool This is some return comment
## static bool GetDistancesBetweenCurves(Curve curveA,Curve curveB,double tolerance,double maxDistance,double maxDistanceParameterA,double maxDistanceParameterB,double minDistance,double minDistanceParameterA,double minDistanceParameterB)
- (summary) 
     Computes the distances between two arbitrary curves that overlap.
     
- (since) 5.0
- (returns) bool This is some return comment
## static bool GetFilletPoints(Curve curve0,Curve curve1,double radius,double t0Base,double t1Base,double t0,double t1,Plane filletPlane)
- (summary) 
     Finds points at which to cut a pair of curves so that a fillet of given radius can be inserted.
     
- (since) 5.0
- (returns) bool This is some return comment
## static Curve[] JoinCurves(IEnumerable<Curve> inputCurves)
- (summary) 
     Joins a collection of curve segments together.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Curve[] JoinCurves(IEnumerable<Curve> inputCurves,double joinTolerance)
- (summary) 
     Joins a collection of curve segments together.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Curve[] JoinCurves(IEnumerable<Curve> inputCurves,double joinTolerance,bool preserveDirection)
- (summary) 
     Joins a collection of curve segments together.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static bool MakeEndsMeet(Curve curveA,bool adjustStartCurveA,Curve curveB,bool adjustStartCurveB)
- (summary) 
     Makes adjustments to the ends of one or both input curves so that they meet at a point.
     
- (since) 5.0
- (returns) bool This is some return comment
## static RegionContainment PlanarClosedCurveRelationship(Curve curveA,Curve curveB,Plane testPlane,double tolerance)
- (summary) 
     Determines whether two coplanar simple closed curves are disjoint or intersect;
     otherwise, if the regions have a containment relationship, discovers
     which curve encloses the other.
     
- (since) 5.0
- (returns) RegionContainment This is some return comment
## static bool PlanarCurveCollision(Curve curveA,Curve curveB,Plane testPlane,double tolerance)
- (summary) 
     Determines if two coplanar curves collide (intersect).
     
- (since) 5.0
- (returns) bool This is some return comment
## static Curve[] ProjectToBrep(Curve curve,Brep brep,Vector3d direction,double tolerance)
- (summary) 
     Projects a Curve onto a Brep along a given direction.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Curve[] ProjectToBrep(Curve curve,IEnumerable<Brep> breps,Vector3d direction,double tolerance)
- (summary) 
     Projects a Curve onto a collection of Breps along a given direction.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Curve[] ProjectToBrep(Curve curve,IEnumerable<Brep> breps,Vector3d direction,double tolerance,int[] brepIndices)
- (summary) 
     Projects a Curve onto a collection of Breps along a given direction.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Curve[] ProjectToBrep(IEnumerable<Curve> curves,IEnumerable<Brep> breps,Vector3d direction,double tolerance)
- (summary) 
     Projects a collection of Curves onto a collection of Breps along a given direction.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Curve[] ProjectToBrep(IEnumerable<Curve> curves,IEnumerable<Brep> breps,Vector3d direction,double tolerance,int[] curveIndices,int[] brepIndices)
- (summary) 
     Projects a collection of Curves onto a collection of Breps along a given direction.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Curve[] ProjectToMesh(Curve curve,IEnumerable<Mesh> meshes,Vector3d direction,double tolerance)
- (summary) 
     Projects a curve to a set of meshes using a direction and tolerance.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Curve[] ProjectToMesh(Curve curve,Mesh mesh,Vector3d direction,double tolerance)
- (summary) 
     Projects a curve to a mesh using a direction and tolerance.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Curve[] ProjectToMesh(IEnumerable<Curve> curves,IEnumerable<Mesh> meshes,Vector3d direction,double tolerance)
- (summary) 
     Projects a curve to a set of meshes using a direction and tolerance.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## static Curve ProjectToPlane(Curve curve,Plane plane)
- (summary) 
     Constructs a curve by projecting an existing curve to a plane.
     
- (since) 5.0
- (returns) Curve This is some return comment
## static Curve[] PullToBrepFace(Curve curve,BrepFace face,double tolerance)
- (summary) 
     Pull a curve to a BrepFace using closest point projection.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## bool ChangeClosedCurveSeam(double t)
- (summary) 
     If this curve is closed, then modify it so that the start/end point is at curve parameter t.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ChangeDimension(int desiredDimension)
- (summary) 
     Changes the dimension of a curve.
     
- (since) 5.0
- (returns) bool This is some return comment
## CurveOrientation ClosedCurveOrientation()
- (summary) 
     Determines the orientation (counterclockwise or clockwise) of a closed, planar curve in the world xy plane.
     Only works with simple (no self intersections) closed, planar curves.
     
- (since) 6.0
- (returns) CurveOrientation This is some return comment
## CurveOrientation ClosedCurveOrientation(Plane plane)
- (summary) 
     Determines the orientation (counterclockwise or clockwise) of a closed, planar curve in a given plane.
     Only works with simple (no self intersections) closed, planar curves.
     
- (since) 5.0
- (returns) CurveOrientation This is some return comment
## CurveOrientation ClosedCurveOrientation(Transform xform)
- (summary) 
     Determines the orientation (counterclockwise or clockwise) of a closed, planar curve.
     Only works with simple (no self intersections) closed, planar curves.
     
- (since) 5.0
- (returns) CurveOrientation This is some return comment
## CurveOrientation ClosedCurveOrientation(Vector3d upDirection)
- (summary) 
     Determines the orientation (counterclockwise or clockwise) of a closed, planar curve in a given plane.
     Only works with simple (no self intersections) closed, planar curves.
     
- (since) 5.0
- (returns) CurveOrientation This is some return comment
## bool ClosestPoint(Point3d testPoint,double t)
- (summary) 
     Finds parameter of the point on a curve that is closest to testPoint.
     If the maximumDistance parameter is > 0, then only points whose distance
     to the given point is <= maximumDistance will be returned.  Using a 
     positive value of maximumDistance can substantially speed up the search.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ClosestPoint(Point3d testPoint,double t,double maximumDistance)
- (summary) 
     Finds the parameter of the point on a curve that is closest to testPoint.
     If the maximumDistance parameter is > 0, then only points whose distance
     to the given point is <= maximumDistance will be returned.  Using a 
     positive value of maximumDistance can substantially speed up the search.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ClosestPoints(Curve otherCurve,Point3d pointOnThisCurve,Point3d pointOnOtherCurve)
- (summary) 
     Gets closest points between this and another curves.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ClosestPoints(IEnumerable<GeometryBase> geometry,Point3d pointOnCurve,Point3d pointOnObject,int whichGeometry)
- (summary) 
     Finds the object (and the closest point in that object) that is closest to
     this curve. Breps, surfaces,
     curves and point clouds are examples of
     objects that can be passed to this function.
- (since) 5.0
- (returns) bool This is some return comment
## bool ClosestPoints(IEnumerable<GeometryBase> geometry,Point3d pointOnCurve,Point3d pointOnObject,int whichGeometry,double maximumDistance)
- (summary) 
     Finds the object (and the closest point in that object) that is closest to
     this curve. Breps, surfaces,
     curves and point clouds are examples of
     objects that can be passed to this function.
- (since) 5.0
- (returns) bool This is some return comment
## PointContainment Contains(Point3d testPoint)
- (summary) 
     Computes the relationship between a point and a closed curve region. 
     This curve must be closed or the return value will be Unset.
     Both curve and point are projected to the World XY plane.
     
- (since) 5.0
- (returns) PointContainment This is some return comment
## PointContainment Contains(Point3d testPoint,Plane plane)
- (summary) 
     Computes the relationship between a point and a closed curve region. 
     This curve must be closed or the return value will be Unset.
     
- (since) 5.0
- (returns) PointContainment This is some return comment
## PointContainment Contains(Point3d testPoint,Plane plane,double tolerance)
- (summary) 
     Computes the relationship between a point and a closed curve region. 
     This curve must be closed or the return value will be Unset.
     
- (since) 5.0
- (returns) PointContainment This is some return comment
## Vector3d CurvatureAt(double t)
- (summary) Evaluate the curvature vector at a curve parameter.
- (since) 5.0
- (returns) Vector3d This is some return comment
## Vector3d[] DerivativeAt(double t,int derivativeCount)
- (summary) 
     Evaluate the derivatives at the specified curve parameter.
     
- (since) 5.0
- (returns) Vector3d[] This is some return comment
## Vector3d[] DerivativeAt(double t,int derivativeCount,CurveEvaluationSide side)
- (summary) 
     Evaluate the derivatives at the specified curve parameter.
     
- (since) 5.0
- (returns) Vector3d[] This is some return comment
## Point3d[] DivideAsContour(Point3d contourStart,Point3d contourEnd,double interval)
- (summary) 
     Divides this curve at fixed steps along a defined contour line.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
## double[] DivideByCount(int segmentCount,bool includeEnds)
- (summary) 
     Divide the curve into a number of equal-length segments.
     
- (since) 5.0
- (returns) double[] This is some return comment
## double[] DivideByCount(int segmentCount,bool includeEnds,Point3d[] points)
- (summary) 
     Divide the curve into a number of equal-length segments.
     
- (since) 5.0
- (returns) double[] This is some return comment
## double[] DivideByLength(double segmentLength,bool includeEnds)
- (summary) 
     Divide the curve into specific length segments.
     
- (since) 5.0
- (returns) double[] This is some return comment
## double[] DivideByLength(double segmentLength,bool includeEnds,bool reverse)
- (summary) 
     Divide the curve into specific length segments.
     
- (since) 6.0
- (returns) double[] This is some return comment
## double[] DivideByLength(double segmentLength,bool includeEnds,bool reverse,Point3d[] points)
- (summary) 
     Divide the curve into specific length segments.
     
- (since) 6.0
- (returns) double[] This is some return comment
## double[] DivideByLength(double segmentLength,bool includeEnds,Point3d[] points)
- (summary) 
     Divide the curve into specific length segments.
     
- (since) 5.0
- (returns) double[] This is some return comment
## Point3d[] DivideEquidistant(double distance)
- (summary) 
     Calculates 3d points on a curve where the linear distance between the points is equal.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
## GeometryBase Duplicate()
- (summary) 
     Constructs an exact duplicate of this Curve.
     
- (since) 5.0
- (returns) GeometryBase This is some return comment
## Curve DuplicateCurve()
- (summary) 
     Constructs an exact duplicate of this curve.
     
- (since) 5.0
- (returns) Curve This is some return comment
## Curve[] DuplicateSegments()
- (summary) 
     Polylines will be exploded into line segments. ExplodeCurves will
     return the curves in topological order.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## Curve Extend(CurveEnd side,CurveExtensionStyle style,IEnumerable<GeometryBase> geometry)
- (summary) 
     Extends a curve until it intersects a collection of objects.
     
- (since) 5.0
- (returns) Curve This is some return comment
## Curve Extend(CurveEnd side,CurveExtensionStyle style,Point3d endPoint)
- (summary) 
     Extends a curve to a point.
     
- (since) 5.0
- (returns) Curve This is some return comment
## Curve Extend(CurveEnd side,double length,CurveExtensionStyle style)
- (summary) 
     Extends a curve by a specific length.
     
- (since) 5.0
- (returns) Curve This is some return comment
## Curve Extend(double t0,double t1)
- (summary) 
     Where possible, analytically extends curve to include the given domain. 
     This will not work on closed curves. The original curve will be identical to the 
     restriction of the resulting curve to the original curve domain.
     
- (since) 5.0
- (returns) Curve This is some return comment
## Curve Extend(Interval domain)
- (summary) 
     Where possible, analytically extends curve to include the given domain. 
     This will not work on closed curves. The original curve will be identical to the 
     restriction of the resulting curve to the original curve domain.
     
- (since) 5.0
- (returns) Curve This is some return comment
## Curve ExtendByArc(CurveEnd side,IEnumerable<GeometryBase> geometry)
- (summary) 
     Extends a curve by an Arc until it intersects a collection of objects.
     
- (since) 5.0
- (returns) Curve This is some return comment
## Curve ExtendByLine(CurveEnd side,IEnumerable<GeometryBase> geometry)
- (summary) 
     Extends a curve by a line until it intersects a collection of objects.
     
- (since) 5.0
- (returns) Curve This is some return comment
## Curve ExtendOnSurface(CurveEnd side,BrepFace face)
- (summary) 
     Extends a curve on a surface.
     
- (since) 5.0
- (returns) Curve This is some return comment
## Curve ExtendOnSurface(CurveEnd side,Surface surface)
- (summary) 
     Extends a curve on a surface.
     
- (since) 5.0
- (returns) Curve This is some return comment
## double[] ExtremeParameters(Vector3d direction)
- (summary) 
     Returns the parameter values of all local extrema. 
     Parameter values are in increasing order so consecutive extrema 
     define an interval on which each component of the curve is monotone. 
     Note, non-periodic curves always return the end points.
     
- (since) 6.0
- (returns) double[] This is some return comment
## Curve Fair(double distanceTolerance,double angleTolerance,int clampStart,int clampEnd,int iterations)
- (summary) 
     Fairs a curve object. Fair works best on degree 3 (cubic) curves. Attempts to 
     remove large curvature variations while limiting the geometry changes to be no 
     more than the specified tolerance. 
     
- (since) 5.0
- (returns) Curve This is some return comment
## Curve Fit(int degree,double fitTolerance,double angleTolerance)
- (summary) 
     Fits a new curve through an existing curve.
     
- (since) 5.0
- (returns) Curve This is some return comment
## bool FrameAt(double t,Plane plane)
- (summary) Returns a 3d frame at a parameter.
- (since) 5.0
- (returns) bool This is some return comment
## ConicSectionType GetConicSectionType()
- (summary) 
     Returns the type of conic section based on the curve's shape.
     
- (since) 6.0
- (returns) ConicSectionType This is some return comment
## ConicSectionType GetConicSectionType(Point3d focus1,Point3d focus2,Point3d center)
- (summary) 
     Returns the type of conic section based on the curve's shape.
     
- (since) 6.0
- (returns) ConicSectionType This is some return comment
## bool GetCurveParameterFromNurbsFormParameter(double nurbsParameter,double curveParameter)
- (summary) 
     Convert a NURBS curve parameter to a curve parameter.
     
- (since) 5.0
- (returns) bool This is some return comment
## double GetLength()
- (summary) 
     Gets the length of the curve with a fractional tolerance of 1.0e-8.
     
- (since) 5.0
- (returns) double This is some return comment
## double GetLength(double fractionalTolerance)
- (summary) Get the length of the curve.
- (since) 5.0
- (returns) double This is some return comment
## double GetLength(double fractionalTolerance,Interval subdomain)
- (summary) Get the length of a sub-section of the curve.
- (since) 5.0
- (returns) double This is some return comment
## double GetLength(Interval subdomain)
- (summary) Get the length of a sub-section of the curve with a fractional tolerance of 1e-8.
- (since) 5.0
- (returns) double This is some return comment
## bool GetLocalPerpPoint(Point3d testPoint,double seedParmameter,double curveParameter)
- (summary) 
     Search for a location on the curve, near seedParmameter, that is perpendicular to a test point.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool GetLocalPerpPoint(Point3d testPoint,double seedParmameter,Interval subDomain,double curveParameter)
- (summary) 
     Search for a location on the curve, near seedParmameter, that is perpendicular to a test point.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool GetLocalTangentPoint(Point3d testPoint,double seedParmameter,double curveParameter)
- (summary) 
     Search for a location on the curve, near seedParmameter, that is tangent to a test point.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool GetLocalTangentPoint(Point3d testPoint,double seedParmameter,Interval subDomain,double curveParameter)
- (summary) 
     Search for a location on the curve, near seedParmameter, that is tangent to a test point.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool GetNextDiscontinuity(Continuity continuityType,double t0,double t1,double t)
- (summary) 
     Searches for a derivative, tangent, or curvature discontinuity.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool GetNurbsFormParameterFromCurveParameter(double curveParameter,double nurbsParameter)
- (summary) Convert a curve parameter to a NURBS curve parameter.
- (since) 5.0
- (returns) bool This is some return comment
## Plane[] GetPerpendicularFrames(IEnumerable<double> parameters)
- (summary) 
     Gets a collection of perpendicular frames along the curve. Perpendicular frames 
     are also known as 'Zero-twisting frames' and they minimize rotation from one frame to the next.
     
- (since) 5.0
- (returns) Plane[] This is some return comment
## int HasNurbsForm()
- (summary) 
     Does a NURBS curve representation of this curve exist?
     
- (since) 5.0
- (returns) int This is some return comment
## Point3d[] InflectionPoints()
- (summary) 
     Returns a curve's inflection points. An inflection point is a location on
     a curve at which the sign of the curvature (i.e., the concavity) changes. 
     The curvature at these locations is always 0.
     
- (since) 7.0
- (returns) Point3d[] This is some return comment
## bool IsArc()
- (summary) 
     Test a curve to see if it can be represented by an arc or circle within RhinoMath.ZeroTolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsArc(double tolerance)
- (summary) 
     Test a curve to see if it can be represented by an arc or circle within the given tolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsCircle()
- (summary) 
     Test a curve to see if it can be represented by a circle within RhinoMath.ZeroTolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsCircle(double tolerance)
- (summary) 
     Test a curve to see if it can be represented by a circle within the given tolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsClosable(double tolerance)
- (summary) 
     Decide if it makes sense to close off this curve by moving the endpoint 
     to the start based on start-end gap size and length of curve as 
     approximated by chord defined by 6 points.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsClosable(double tolerance,double minimumAbsoluteSize,double minimumRelativeSize)
- (summary) 
     Decide if it makes sense to close off this curve by moving the endpoint
     to the start based on start-end gap size and length of curve as
     approximated by chord defined by 6 points.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsContinuous(Continuity continuityType,double t)
- (summary) 
     Test continuity at a curve parameter value.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsEllipse()
- (summary) 
     Test a curve to see if it can be represented by an ellipse within RhinoMath.ZeroTolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsEllipse(double tolerance)
- (summary) 
     Test a curve to see if it can be represented by an ellipse within a given tolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsInPlane(Plane testPlane)
- (summary) Test a curve to see if it lies in a specific plane.
- (since) 5.0
- (returns) bool This is some return comment
## bool IsInPlane(Plane testPlane,double tolerance)
- (summary) Test a curve to see if it lies in a specific plane.
- (since) 5.0
- (returns) bool This is some return comment
## bool IsLinear()
- (summary) 
     Test a curve to see if it is linear to within RhinoMath.ZeroTolerance units (1e-12).
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsLinear(double tolerance)
- (summary) 
     Test a curve to see if it is linear to within the custom tolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsPlanar()
- (summary) Test a curve for planarity.
- (since) 5.0
- (returns) bool This is some return comment
## bool IsPlanar(double tolerance)
- (summary) Test a curve for planarity.
- (since) 5.0
- (returns) bool This is some return comment
## bool IsPolyline()
- (summary) 
     Several types of Curve can have the form of a polyline
     including a degree 1 NurbsCurve, a PolylineCurve,
     and a PolyCurve all of whose segments are some form of
     polyline. IsPolyline tests a curve to see if it can be
     represented as a polyline.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsShort(double tolerance)
- (summary) Used to quickly find short curves.
- (since) 5.0
- (returns) bool This is some return comment
## bool IsShort(double tolerance,Interval subdomain)
- (summary) Used to quickly find short curves.
- (since) 5.0
- (returns) bool This is some return comment
## bool LcoalClosestPoint(Point3d testPoint,double seed,double t)
- (summary) 
     Find parameter of the point on a curve that is locally closest to 
     the testPoint.  The search for a local close point starts at
     a seed parameter.
     
- (since) 6.3
- (returns) bool This is some return comment
## bool LengthParameter(double segmentLength,double t)
- (summary) 
     Gets the parameter along the curve which coincides with a given length along the curve. 
     A fractional tolerance of 1e-8 is used in this version of the function.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool LengthParameter(double segmentLength,double t,double fractionalTolerance)
- (summary) 
     Gets the parameter along the curve which coincides with a given length along the curve.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool LengthParameter(double segmentLength,double t,double fractionalTolerance,Interval subdomain)
- (summary) 
     Gets the parameter along the curve which coincides with a given length along the curve.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool LengthParameter(double segmentLength,double t,Interval subdomain)
- (summary) 
     Gets the parameter along the curve which coincides with a given length along the curve. 
     A fractional tolerance of 1e-8 is used in this version of the function.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool LocalClosestPoint(Point3d testPoint,double seed,double t)
- (summary) 
     Find parameter of the point on a curve that is locally closest to 
     the testPoint.  The search for a local close point starts at
     a seed parameter.
     
- (since) 6.18
- (returns) bool This is some return comment
## bool MakeClosed(double tolerance)
- (summary) 
     If IsClosed, just return true. Otherwise, decide if curve can be closed as 
     follows: Linear curves polylinear curves with 2 segments, Nurbs with 3 or less 
     control points cannot be made closed. Also, if tolerance > 0 and the gap between 
     start and end is larger than tolerance, curve cannot be made closed. 
     Adjust the curve's endpoint to match its start point.
     
- (since) 5.0
- (returns) bool This is some return comment
## Point3d[] MaxCurvaturePoints()
- (summary) 
     Returns a curve's maximum curvature points. The maximum curvature points identify
     where the curvature starts to decrease in both directions from the points.
     
- (since) 7.0
- (returns) Point3d[] This is some return comment
## bool NormalizedLengthParameter(double s,double t)
- (summary) 
     Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve. 
     A fractional tolerance of 1e-8 is used in this version of the function.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool NormalizedLengthParameter(double s,double t,double fractionalTolerance)
- (summary) 
     Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool NormalizedLengthParameter(double s,double t,double fractionalTolerance,Interval subdomain)
- (summary) 
     Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool NormalizedLengthParameter(double s,double t,Interval subdomain)
- (summary) 
     Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve. 
     A fractional tolerance of 1e-8 is used in this version of the function.
     
- (since) 5.0
- (returns) bool This is some return comment
## double[] NormalizedLengthParameters(double[] s,double absoluteTolerance)
- (summary) 
     Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve. 
     A fractional tolerance of 1e-8 is used in this version of the function.
     
- (since) 5.0
- (returns) double[] This is some return comment
## double[] NormalizedLengthParameters(double[] s,double absoluteTolerance,double fractionalTolerance)
- (summary) 
     Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve.
     
- (since) 5.0
- (returns) double[] This is some return comment
## double[] NormalizedLengthParameters(double[] s,double absoluteTolerance,double fractionalTolerance,Interval subdomain)
- (summary) 
     Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve.
     
- (since) 5.0
- (returns) double[] This is some return comment
## double[] NormalizedLengthParameters(double[] s,double absoluteTolerance,Interval subdomain)
- (summary) 
     Input the parameter of the point on the curve that is a prescribed arc length from the start of the curve. 
     A fractional tolerance of 1e-8 is used in this version of the function.
     
- (since) 5.0
- (returns) double[] This is some return comment
## Curve[] Offset(Plane plane,double distance,double tolerance,CurveOffsetCornerStyle cornerStyle)
- (summary) 
     Offsets this curve. If you have a nice offset, then there will be one entry in 
     the array. If the original curve had kinks or the offset curve had self 
     intersections, you will get multiple segments in the offset_curves[] array.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## Curve[] Offset(Point3d directionPoint,Vector3d normal,double distance,double tolerance,CurveOffsetCornerStyle cornerStyle)
- (summary) 
     Offsets this curve. If you have a nice offset, then there will be one entry in 
     the array. If the original curve had kinks or the offset curve had self 
     intersections, you will get multiple segments in the offset_curves[] array.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## Curve OffsetNormalToSurface(Surface surface,double height)
- (summary) 
     Finds a curve by offsetting an existing curve normal to a surface.
     The caller is responsible for ensuring that the curve lies on the input surface.
     
- (since) 5.0
- (returns) Curve This is some return comment
## Curve[] OffsetOnSurface(BrepFace face,double distance,double fittingTolerance)
- (summary) 
     Offset this curve on a brep face surface. This curve must lie on the surface.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## Curve[] OffsetOnSurface(BrepFace face,double[] curveParameters,double[] offsetDistances,double fittingTolerance)
- (summary) 
     Offset a curve on a brep face surface. This curve must lie on the surface.
     This overload allows to specify different offsets for different curve parameters.
- (since) 5.0
- (returns) Curve[] This is some return comment
## Curve[] OffsetOnSurface(BrepFace face,Point2d throughPoint,double fittingTolerance)
- (summary) 
     Offset a curve on a brep face surface. This curve must lie on the surface.
     This overload allows to specify a surface point at which the offset will pass.
- (since) 5.0
- (returns) Curve[] This is some return comment
## Curve[] OffsetOnSurface(Surface surface,double distance,double fittingTolerance)
- (summary) 
     Offset a curve on a surface. This curve must lie on the surface.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## Curve[] OffsetOnSurface(Surface surface,double[] curveParameters,double[] offsetDistances,double fittingTolerance)
- (summary) 
     Offset this curve on a surface. This curve must lie on the surface.
     This overload allows to specify different offsets for different curve parameters.
- (since) 5.0
- (returns) Curve[] This is some return comment
## Curve[] OffsetOnSurface(Surface surface,Point2d throughPoint,double fittingTolerance)
- (summary) 
     Offset a curve on a surface. This curve must lie on the surface.
     This overload allows to specify a surface point at which the offset will pass.
- (since) 5.0
- (returns) Curve[] This is some return comment
## bool PerpendicularFrameAt(double t,Plane plane)
- (summary) 
     Return a 3d frame at a parameter. This is slightly different than FrameAt in
     that the frame is computed in a way so there is minimal rotation from one
     frame to the next.
     
- (since) 5.0
- (returns) bool This is some return comment
## Point3d PointAt(double t)
- (summary) Evaluates point at a curve parameter.
- (since) 5.0
- (returns) Point3d This is some return comment
## Point3d PointAtLength(double length)
- (summary) 
     Gets a point at a certain length along the curve. The length must be 
     non-negative and less than or equal to the length of the curve. 
     Lengths will not be wrapped when the curve is closed or periodic.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## Point3d PointAtNormalizedLength(double length)
- (summary) 
     Gets a point at a certain normalized length along the curve. The length must be 
     between or including 0.0 and 1.0, where 0.0 equals the start of the curve and 
     1.0 equals the end of the curve. 
     
- (since) 5.0
- (returns) Point3d This is some return comment
## Curve[] PullToBrepFace(BrepFace face,double tolerance)
- (summary) 
     Pulls this curve to a brep face and returns the result of that operation.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## PolylineCurve PullToMesh(Mesh mesh,double tolerance)
- (summary) 
     Makes a polyline approximation of the curve and gets the closest point on the mesh for each point on the curve. 
     Then it "connects the points" so that you have a polyline on the mesh.
     
- (since) 5.0
- (returns) PolylineCurve This is some return comment
## NurbsCurve Rebuild(int pointCount,int degree,bool preserveTangents)
- (summary) 
     Rebuild a curve with a specific point count.
     
- (since) 5.0
- (returns) NurbsCurve This is some return comment
## bool RemoveShortSegments(double tolerance)
- (summary) 
     Looks for segments that are shorter than tolerance that can be removed. 
     Does not change the domain, but it will change the relative parameterization.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Reverse()
- (summary) 
     Reverses the direction of the curve.
     
- (since) 5.0
- (returns) bool This is some return comment
## Curve RibbonOffset(double distance,double blendRadius,Point3d directionPoint,Vector3d normal,double tolerance)
- (summary) 
     Offsets a closed curve in the following way: pProject the curve to a plane with given normal.
     Then, loose Offset the projection by distance + blend_radius and trim off self-intersection.
     THen, Offset the remaining curve back in the opposite direction by blend_radius, filling gaps with blends.
     Finally, use the elevations of the input curve to get the correct elevations of the result.
     
- (since) 7.0
- (returns) Curve This is some return comment
## Curve RibbonOffset(double distance,double blendRadius,Point3d directionPoint,Vector3d normal,double tolerance,Curve[] crossSections,Surface[] ruledSurfaces)
- (summary) 
     Offsets a closed curve in the following way: pProject the curve to a plane with given normal.
     Then, loose Offset the projection by distance + blend_radius and trim off self-intersection.
     THen, Offset the remaining curve back in the opposite direction by blend_radius, filling gaps with blends.
     Finally, use the elevations of the input curve to get the correct elevations of the result.
     
- (since) 7.0
- (returns) Curve This is some return comment
## Curve RibbonOffset(double distance,double blendRadius,Point3d directionPoint,Vector3d normal,double tolerance,double[] outputParameters,double[] curveParameters)
- (summary) 
     Offsets a closed curve in the following way: pProject the curve to a plane with given normal.
     Then, loose Offset the projection by distance + blend_radius and trim off self-intersection.
     THen, Offset the remaining curve back in the opposite direction by blend_radius, filling gaps with blends.
     Finally, use the elevations of the input curve to get the correct elevations of the result.
     
- (since) 7.0
- (returns) Curve This is some return comment
## bool SetEndPoint(Point3d point)
- (summary) Forces the curve to end at a specified point. 
     Not all curve types support this operation.
- (since) 5.0
- (returns) bool This is some return comment
## bool SetStartPoint(Point3d point)
- (summary) Forces the curve to start at a specified point. 
     Not all curve types support this operation.
- (since) 5.0
- (returns) bool This is some return comment
## Curve Simplify(CurveSimplifyOptions options,double distanceTolerance,double angleToleranceRadians)
- (summary) 
     Returns a geometrically equivalent PolyCurve.
     The PolyCurve has the following properties
     1. All the PolyCurve segments are LineCurve, PolylineCurve, ArcCurve, or NurbsCurve.
     
     2. The Nurbs Curves segments do not have fully multiple interior knots.
     
     3. Rational Nurbs curves do not have constant weights.
     
     4. Any segment for which IsLinear() or IsArc() is True is a Line, 
        Polyline segment, or an Arc.
     
     5. Adjacent Colinear or Cocircular segments are combined.
     
     6. Segments that meet with G1-continuity have there ends tuned up so
        that they meet with G1-continuity to within machine precision.
     
- (since) 5.0
- (returns) Curve This is some return comment
## Curve SimplifyEnd(CurveEnd end,CurveSimplifyOptions options,double distanceTolerance,double angleToleranceRadians)
- (summary) 
     Same as SimplifyCurve, but simplifies only the last two segments at "side" end.
     
- (since) 5.0
- (returns) Curve This is some return comment
## Curve Smooth(double smoothFactor,bool bXSmooth,bool bYSmooth,bool bZSmooth,bool bFixBoundaries,SmoothingCoordinateSystem coordinateSystem)
- (summary) 
     Smooths a curve by averaging the positions of control points in a specified region.
     
- (since) 6.0
- (returns) Curve This is some return comment
## Curve Smooth(double smoothFactor,bool bXSmooth,bool bYSmooth,bool bZSmooth,bool bFixBoundaries,SmoothingCoordinateSystem coordinateSystem,Plane plane)
- (summary) 
     Smooths a curve by averaging the positions of control points in a specified region.
     
- (since) 6.0
- (returns) Curve This is some return comment
## Interval SpanDomain(int spanIndex)
- (summary) 
     Get the domain of the curve span with the given index. 
     Use the SpanCount property to test how many spans there are.
     
- (since) 5.0
- (returns) Interval This is some return comment
## Curve[] Split(Brep cutter,double tolerance)
- (summary) 
     Splits a curve into pieces using a polysurface.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## Curve[] Split(Brep cutter,double tolerance,double angleToleranceRadians)
- (summary) 
     Splits a curve into pieces using a polysurface.
     
- (since) 6.0
- (returns) Curve[] This is some return comment
## Curve[] Split(double t)
- (summary) 
     Splits (divides) the curve at the specified parameter. 
     The parameter must be in the interior of the curve's domain.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## Curve[] Split(IEnumerable<double> t)
- (summary) 
     Splits (divides) the curve at a series of specified parameters. 
     The parameter must be in the interior of the curve domain.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## Curve[] Split(Surface cutter,double tolerance)
- (summary) 
     Splits a curve into pieces using a surface.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## Curve[] Split(Surface cutter,double tolerance,double angleToleranceRadians)
- (summary) 
     Splits a curve into pieces using a surface.
     
- (since) 6.0
- (returns) Curve[] This is some return comment
## Vector3d TangentAt(double t)
- (summary) Evaluates the unit tangent vector at a curve parameter.
- (since) 5.0
- (returns) Vector3d This is some return comment
## PolyCurve ToArcsAndLines(double tolerance,double angleTolerance,double minimumLength,double maximumLength)
- (summary) 
     Converts a curve into polycurve consisting of arc segments. Sections of the input curves that are nearly straight are converted to straight-line segments.
     
- (since) 6.0
- (returns) PolyCurve This is some return comment
## NurbsCurve ToNurbsCurve()
- (summary) 
     Constructs a NURBS curve representation of this curve.
     
- (since) 5.0
- (returns) NurbsCurve This is some return comment
## NurbsCurve ToNurbsCurve(Interval subdomain)
- (summary) 
     Constructs a NURBS curve representation of this curve.
     
- (since) 5.0
- (returns) NurbsCurve This is some return comment
## PolylineCurve ToPolyline(double tolerance,double angleTolerance,double minimumLength,double maximumLength)
- (summary) 
     Gets a polyline approximation of a curve.
     
- (since) 6.0
- (returns) PolylineCurve This is some return comment
## PolylineCurve ToPolyline(int mainSegmentCount,int subSegmentCount,double maxAngleRadians,double maxChordLengthRatio,double maxAspectRatio,double tolerance,double minEdgeLength,double maxEdgeLength,bool keepStartPoint)
- (summary) 
     Gets a polyline approximation of a curve.
     
- (since) 5.0
- (returns) PolylineCurve This is some return comment
## PolylineCurve ToPolyline(int mainSegmentCount,int subSegmentCount,double maxAngleRadians,double maxChordLengthRatio,double maxAspectRatio,double tolerance,double minEdgeLength,double maxEdgeLength,bool keepStartPoint,Interval curveDomain)
- (summary) 
     Gets a polyline approximation of a curve.
     
- (since) 5.0
- (returns) PolylineCurve This is some return comment
## Curve Trim(CurveEnd side,double length)
- (summary) 
     Shortens a curve by a given length
     
- (since) 5.1
- (returns) Curve This is some return comment
## Curve Trim(double t0,double t1)
- (summary) 
     Removes portions of the curve outside the specified interval.
     
- (since) 5.0
- (returns) Curve This is some return comment
## Curve Trim(Interval domain)
- (summary) 
     Removes portions of the curve outside the specified interval.
     
- (since) 5.0
- (returns) Curve This is some return comment
## bool TryGetArc(Arc arc)
- (summary) 
     Try to convert this curve into an Arc using RhinoMath.ZeroTolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetArc(Arc arc,double tolerance)
- (summary) 
     Try to convert this curve into an Arc using a custom tolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetArc(Plane plane,Arc arc)
- (summary) 
     Try to convert this curve into an Arc using RhinoMath.ZeroTolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetArc(Plane plane,Arc arc,double tolerance)
- (summary) 
     Try to convert this curve into an Arc using a custom tolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetCircle(Circle circle)
- (summary) 
     Try to convert this curve into a circle using RhinoMath.ZeroTolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetCircle(Circle circle,double tolerance)
- (summary) 
     Try to convert this curve into a Circle using a custom tolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetEllipse(Ellipse ellipse)
- (summary) 
     Try to convert this curve into an Ellipse within RhinoMath.ZeroTolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetEllipse(Ellipse ellipse,double tolerance)
- (summary) 
     Try to convert this curve into an Ellipse using a custom tolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetEllipse(Plane plane,Ellipse ellipse)
- (summary) 
     Try to convert this curve into an Ellipse within RhinoMath.ZeroTolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetEllipse(Plane plane,Ellipse ellipse,double tolerance)
- (summary) 
     Try to convert this curve into an Ellipse using a custom tolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetPlane(Plane plane)
- (summary) Test a curve for planarity and return the plane.
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetPlane(Plane plane,double tolerance)
- (summary) Test a curve for planarity and return the plane.
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetPolyline(Polyline polyline)
- (summary) 
     Several types of Curve can have the form of a polyline 
     including a degree 1 NurbsCurve, a PolylineCurve, 
     and a PolyCurve all of whose segments are some form of 
     polyline. IsPolyline tests a curve to see if it can be 
     represented as a polyline.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetPolyline(Polyline polyline,double[] parameters)
- (summary) 
     Several types of Curve can have the form of a polyline 
     including a degree 1 NurbsCurve, a PolylineCurve, 
     and a PolyCurve all of whose segments are some form of 
     polyline. IsPolyline tests a curve to see if it can be 
     represented as a polyline.
     
- (since) 5.0
- (returns) bool This is some return comment
