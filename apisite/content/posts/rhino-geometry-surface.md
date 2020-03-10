---
title: "Surface"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents a base class that is common to most RhinoCommon surface types.
   A surface represents an entity that can be all visited by providing
   two independent parameters, usually called (u, v), or sometimes (s, t).
## Properties
#### bool IsSolid
- (summary) 
     Gets a values indicating whether a surface is solid.
     
- (since) 5.0
## Methods
#### static Surface CreateExtrusion(Curve profile,Vector3d direction)
- (summary) 
     Constructs a surface by extruding a curve along a vector.
     
- (since) 5.0
- (returns) Surface This is some return comment
#### static Surface CreateExtrusionToPoint(Curve profile,Point3d apexPoint)
- (summary) 
     Constructs a surface by extruding a curve to a point.
     
- (since) 5.0
- (returns) Surface This is some return comment
#### static Surface CreatePeriodicSurface(Surface surface,int direction)
- (summary) 
     Constructs a periodic surface from a base surface and a direction.
     
- (since) 5.0
- (returns) Surface This is some return comment
#### static Surface CreatePeriodicSurface(Surface surface,int direction,bool bSmooth)
- (summary) 
     Constructs a periodic surface from a base surface and a direction.
     
- (since) 6.0
- (returns) Surface This is some return comment
#### static Surface[] CreateRollingBallFillet(Surface surfaceA,bool flipA,Surface surfaceB,bool flipB,double radius,double tolerance)
- (summary) 
     Constructs a rolling ball fillet between two surfaces.
     
- (since) 5.0
- (returns) Surface[] This is some return comment
#### static Surface[] CreateRollingBallFillet(Surface surfaceA,Point2d uvA,Surface surfaceB,Point2d uvB,double radius,double tolerance)
- (summary) 
     Constructs a rolling ball fillet between two surfaces.
     
- (since) 5.0
- (returns) Surface[] This is some return comment
#### static Surface[] CreateRollingBallFillet(Surface surfaceA,Surface surfaceB,double radius,double tolerance)
- (summary) 
     Constructs a rolling ball fillet between two surfaces.
     
- (since) 5.0
- (returns) Surface[] This is some return comment
#### static Surface CreateSoftEditSurface(Surface surface,Point2d uv,Vector3d delta,double uLength,double vLength,double tolerance,bool fixEnds)
- (summary) 
     Creates a soft edited surface from an exising surface using a smooth field of influence.
     
- (since) 6.0
- (returns) Surface This is some return comment
#### bool ClosestPoint(Point3d testPoint,double u,double v)
- (summary) 
     Input the parameters of the point on the surface that is closest to testPoint.
     
- (since) 5.0
- (returns) bool This is some return comment
#### IsoStatus ClosestSide(double u,double v)
- (summary) 
     Gets the side that is closest, in terms of 3D-distance, to a U and V parameter.
     
- (since) 5.0
- (returns) IsoStatus This is some return comment
#### SurfaceCurvature CurvatureAt(double u,double v)
- (summary) 
     Computes the curvature at the given UV coordinate.
     
- (since) 5.0
- (returns) SurfaceCurvature This is some return comment
#### int Degree(int direction)
- (summary) 
     Returns the maximum algebraic degree of any span
     (or a good estimate if curve spans are not algebraic).
     
- (since) 5.0
- (returns) int This is some return comment
#### Interval Domain(int direction)
- (summary) Gets the domain in a direction.
- (since) 5.0
- (returns) Interval This is some return comment
#### bool Evaluate(double u,double v,int numberDerivatives,Point3d point,Vector3d[] derivatives)
- (summary) 
     Evaluates a surface mathematically.
     
- (since) 5.0
- (returns) bool This is some return comment
#### Surface Extend(IsoStatus edge,double extensionLength,bool smooth)
- (summary) 
     Extends an untrimmed surface along one edge.
     
- (since) 5.0
- (returns) Surface This is some return comment
#### Surface Fit(int uDegree,int vDegree,double fitTolerance)
- (summary) Fits a new surface through an existing surface.
- (since) 5.0
- (returns) Surface This is some return comment
#### bool FrameAt(double u,double v,Plane frame)
- (summary) 
     Computes the orient plane on a surface given a U and V parameter.
     This is the simple evaluation call with no error handling.
- (since) 5.0
- (returns) bool This is some return comment
#### bool GetNextDiscontinuity(int direction,Continuity continuityType,double t0,double t1,double t)
- (summary) 
     Searches for a derivative, tangent, or curvature discontinuity.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool GetNurbsFormParameterFromSurfaceParameter(double surfaceS,double surfaceT,double nurbsS,double nurbsT)
- (summary) 
     Translates a parameter from the current surface to the parameter space of the surface returned by .
     
- (since) 6.0
- (returns) bool This is some return comment
#### double[] GetSpanVector(int direction)
- (summary) 
     Gets array of span "knots".
     
- (since) 5.0
- (returns) double[] This is some return comment
#### bool GetSurfaceParameterFromNurbsFormParameter(double nurbsS,double nurbsT,double surfaceS,double surfaceT)
- (summary) 
     Translates a parameter from a value on the surface returned by  to the current surface.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool GetSurfaceSize(double width,double height)
- (summary) 
     Gets an estimate of the size of the rectangle that would be created
     if the 3d surface where flattened into a rectangle.
     
- (since) 5.0
- (returns) bool This is some return comment
#### int HasNurbsForm()
- (summary) 
     Is there a NURBS surface representation of this surface.
     
- (since) 5.0
- (returns) int This is some return comment
#### NurbsCurve InterpolatedCurveOnSurface(IEnumerable<Point3d> points,double tolerance)
- (summary) 
     Constructs an interpolated curve on a surface, using 3D points.
     
- (since) 5.0
- (returns) NurbsCurve This is some return comment
#### NurbsCurve InterpolatedCurveOnSurfaceUV(IEnumerable<Point2d> points,double tolerance)
- (summary) 
     Returns a curve that interpolates points on a surface. The interpolant lies on the surface.
     
- (since) 5.0
- (returns) NurbsCurve This is some return comment
#### NurbsCurve InterpolatedCurveOnSurfaceUV(IEnumerable<Point2d> points,double tolerance,bool closed,int closedSurfaceHandling)
- (summary) 
     Returns a curve that interpolates points on a surface. The interpolant lies on the surface.
     
- (since) 6.18
- (returns) NurbsCurve This is some return comment
#### int IsAtSeam(double u,double v)
- (summary) 
     Tests if a surface parameter value is at a seam.
     
- (since) 5.0
- (returns) int This is some return comment
#### bool IsAtSingularity(double u,double v,bool exact)
- (summary) 
     Tests if a surface parameter value is at a singularity.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsClosed(int direction)
- (summary) 
     Gets a value indicating if the surface is closed in a direction.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsCone()
- (summary) 
     Determines if the surface is a portion of a cone within RhinoMath.ZeroTolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsCone(double tolerance)
- (summary) Determines if the surface is a portion of a cone within a given tolerance.
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsContinuous(Continuity continuityType,double u,double v)
- (summary) 
     Tests continuity at a surface parameter value.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsCylinder()
- (summary) 
     Determines if the surface is a portion of a cylinder within RhinoMath.ZeroTolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsCylinder(double tolerance)
- (summary) Determines if the surface is a portion of a cylinder within a given tolerance.
- (since) 5.0
- (returns) bool This is some return comment
#### IsoStatus IsIsoparametric(BoundingBox bbox)
- (summary) 
     Determines if a 2d bounding box is iso-parameteric in the parameter space of this surface.
     
- (since) 5.0
- (returns) IsoStatus This is some return comment
#### IsoStatus IsIsoparametric(Curve curve)
- (summary) 
     Determines if a 2d curve is iso-parameteric in the parameter space of this surface.
     
- (since) 5.0
- (returns) IsoStatus This is some return comment
#### IsoStatus IsIsoparametric(Curve curve,Interval curveDomain)
- (summary) 
     Determines if a 2D curve is iso-parameteric in the parameter space of this surface.
     
- (since) 5.0
- (returns) IsoStatus This is some return comment
#### Curve IsoCurve(int direction,double constantParameter)
- (summary) Gets isoparametric curve.
- (since) 5.0
- (returns) Curve This is some return comment
#### bool IsPeriodic(int direction)
- (summary) 
     Gets a value indicating if thr surface is periodic in a direction (default is false).
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsPlanar()
- (summary) 
     Tests a surface to see if it is planar to zero tolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsPlanar(double tolerance)
- (summary) 
     Tests a surface to see if it is planar to a given tolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsSingular(int side)
- (summary) 
     True if surface side is collapsed to a point.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsSphere()
- (summary) 
     Determines if the surface is a portion of a sphere within RhinoMath.ZeroTolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsSphere(double tolerance)
- (summary) 
     Determines if the surface is a portion of a sphere within a given tolerance.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsTorus()
- (summary) Determines if the surface is a portion of a torus within RhinoMath.ZeroTolerance.
- (since) 5.0
- (returns) bool This is some return comment
#### bool IsTorus(double tolerance)
- (summary) Determines if the surface is a portion of a torus within a given tolerance.
- (since) 5.0
- (returns) bool This is some return comment
#### bool LocalClosestPoint(Point3d testPoint,double seedU,double seedV,double u,double v)
- (summary) 
     Find parameters of the point on a surface that is locally closest to
     the testPoint. The search for a local close point starts at seed parameters.
     
- (since) 6.3
- (returns) bool This is some return comment
#### Vector3d NormalAt(double u,double v)
- (summary) 
     Computes the surface normal at a point.
     This is the simple evaluation call - it does not support error handling.
- (since) 5.0
- (returns) Vector3d This is some return comment
#### Surface Offset(double distance,double tolerance)
- (summary) 
     Constructs a new surface which is offset from the current surface.
     
- (since) 5.0
- (returns) Surface This is some return comment
#### Point3d PointAt(double u,double v)
- (summary) 
     Evaluates a point at a given parameter.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### Curve Pullback(Curve curve3d,double tolerance)
- (summary) 
     Pulls a 3d curve back to the surface's parameter space.
     
- (since) 5.0
- (returns) Curve This is some return comment
#### Curve Pullback(Curve curve3d,double tolerance,Interval curve3dSubdomain)
- (summary) 
     Pulls a 3d curve back to the surface's parameter space.
     
- (since) 5.0
- (returns) Curve This is some return comment
#### Curve Pushup(Curve curve2d,double tolerance)
- (summary) 
     Computes a 3d curve that is the composite of a 2d curve and the surface map.
     
- (since) 5.0
- (returns) Curve This is some return comment
#### Curve Pushup(Curve curve2d,double tolerance,Interval curve2dSubdomain)
- (summary) 
     Computes a 3d curve that is the composite of a 2d curve and the surface map.
     
- (since) 5.0
- (returns) Curve This is some return comment
#### NurbsSurface Rebuild(int uDegree,int vDegree,int uPointCount,int vPointCount)
- (summary) 
     Rebuilds an existing surface to a given degree and point count.
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
#### NurbsSurface RebuildOneDirection(int direction,int pointCount,LoftType loftType,double refitTolerance)
- (summary) 
     Rebuilds an existing surface with a new surface to a given point count in either the u or v directions independently.
     
- (since) 6.7
- (returns) NurbsSurface This is some return comment
#### Surface Reverse(int direction)
- (summary) 
     Reverses parameterization Domain changes from [a,b] to [-b,-a]
     
- (since) 5.0
- (returns) Surface This is some return comment
#### Surface Reverse(int direction,bool inPlace)
- (summary) 
     Same as Reverse, but if inPlace is set to True this Surface is modified
     instead of a new copy being created.
     
- (since) 5.8
- (returns) Surface This is some return comment
#### bool SetDomain(int direction,Interval domain)
- (summary) 
     Sets the domain in a direction.
     
- (since) 5.0
- (returns) bool This is some return comment
#### Curve ShortPath(Point2d start,Point2d end,double tolerance)
- (summary) 
     Constructs a geodesic between 2 points, used by ShortPath command in Rhino.
     
- (since) 5.0
- (returns) Curve This is some return comment
#### Surface Smooth(double smoothFactor,bool bXSmooth,bool bYSmooth,bool bZSmooth,bool bFixBoundaries,SmoothingCoordinateSystem coordinateSystem)
- (summary) 
     Smooths a surface by averaging the positions of control points in a specified region.
     
- (since) 6.0
- (returns) Surface This is some return comment
#### Surface Smooth(double smoothFactor,bool bXSmooth,bool bYSmooth,bool bZSmooth,bool bFixBoundaries,SmoothingCoordinateSystem coordinateSystem,Plane plane)
- (summary) 
     Smooths a surface by averaging the positions of control points in a specified region.
     
- (since) 6.0
- (returns) Surface This is some return comment
#### int SpanCount(int direction)
- (summary) 
     Gets number of smooth nonempty spans in the parameter direction.
     
- (since) 5.0
- (returns) int This is some return comment
#### Surface[] Split(int direction,double parameter)
- (summary) 
     Splits (divides) the surface into two parts at the specified parameter
     
- (since) 5.0
- (returns) Surface[] This is some return comment
#### Brep ToBrep()
- (summary) 
     Converts the surface into a Brep.
     
- (since) 5.0
- (returns) Brep This is some return comment
#### NurbsSurface ToNurbsSurface()
- (summary) 
     Gets a NURBS surface representation of this surface. Default 
     tolerance of 0.0 is used. 
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
#### NurbsSurface ToNurbsSurface(double tolerance,int accuracy)
- (summary) 
     Gets a NURBS surface representation of this surface.
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
#### Surface Transpose()
- (summary) 
     Transposes surface parameterization (swap U and V)
     
- (since) 5.0
- (returns) Surface This is some return comment
#### Surface Transpose(bool inPlace)
- (summary) 
     Transposes surface parameterization (swap U and V)
     
- (since) 5.8
- (returns) Surface This is some return comment
#### Surface Trim(Interval u,Interval v)
- (summary) 
     Constructs a sub-surface that covers the specified UV trimming domain.
     
- (since) 5.0
- (returns) Surface This is some return comment
#### bool TryGetCone(Cone cone)
- (summary) Tests a surface to see if it is a portion of a cone within RhinoMath.ZeroTolerance and return the cone.
- (since) 5.0
- (returns) bool This is some return comment
#### bool TryGetCone(Cone cone,double tolerance)
- (summary) Tests a surface to see if it is a portion of a cone and returns the cone.
- (since) 5.0
- (returns) bool This is some return comment
#### bool TryGetCylinder(Cylinder cylinder)
- (summary) Tests a surface to see if it is a portion of a cylinder within RhinoMath.ZeroTolerance and return the cylinder.
- (since) 5.0
- (returns) bool This is some return comment
#### bool TryGetCylinder(Cylinder cylinder,double tolerance)
- (summary) Tests a surface to see if it is a portion of a cylinder and return the infinite cylinder.
- (since) 5.0
- (returns) bool This is some return comment
#### bool TryGetFiniteCylinder(Cylinder cylinder,double tolerance)
- (summary) Tests a surface with the assumption that it might be a right circular cylinder and returns this geometry.
- (since) 6.0
- (returns) bool This is some return comment
#### bool TryGetPlane(Plane plane)
- (summary) Tests a surface for planarity and return the plane.
- (since) 5.0
- (returns) bool This is some return comment
#### bool TryGetPlane(Plane plane,double tolerance)
- (summary) Tests a surface for planarity and return the plane.
- (since) 5.0
- (returns) bool This is some return comment
#### bool TryGetSphere(Sphere sphere)
- (summary) Test a surface to see if it is a portion of a sphere and return the sphere.
- (since) 5.0
- (returns) bool This is some return comment
#### bool TryGetSphere(Sphere sphere,double tolerance)
- (summary) Test a surface to see if it is a portion of a sphere and return the sphere.
- (since) 5.0
- (returns) bool This is some return comment
#### bool TryGetTorus(Torus torus)
- (summary) Tests a surface to see if it is a portion of a torus within RhinoMath.ZeroTolerance and returns the torus.
- (since) 5.0
- (returns) bool This is some return comment
#### bool TryGetTorus(Torus torus,double tolerance)
- (summary) Tests a surface to see if it is a portion of a torus and returns the torus.
- (since) 5.0
- (returns) bool This is some return comment
#### Surface VariableOffset(double uMinvMin,double uMinvMax,double uMaxvMin,double uMaxvMax,double tolerance)
- (summary) 
     Copies a surface so that all locations at the corners of the copied surface are specified distances from the original surface.
     
- (since) 6.13
- (returns) Surface This is some return comment
#### Surface VariableOffset(double uMinvMin,double uMinvMax,double uMaxvMin,double uMaxvMax,IEnumerable<Point2d> interiorParameters,IEnumerable<double> interiorDistances,double tolerance)
- (summary) 
     Copies a surface so that all locations at the corners, and from specified interior locations, of the copied surface are specified distances from the original surface.
     
- (since) 6.13
- (returns) Surface This is some return comment
