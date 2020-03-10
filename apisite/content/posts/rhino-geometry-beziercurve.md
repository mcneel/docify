---
title: "Rhino.Geometry.BezierCurve"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Geometry.BezierCurve(IEnumerable<Point2d> controlPoints)
- (summary) 
     Create bezier curve with controls defined by a list of 2d points
     
- (since) 5.0
## Rhino.Geometry.BezierCurve(IEnumerable<Point3d> controlPoints)
- (summary) 
     Create bezier curve with controls defined by a list of 3d points
     
- (since) 5.0
## Rhino.Geometry.BezierCurve(IEnumerable<Point4d> controlPoints)
- (summary) 
     Create bezier curve with controls defined by a list of 4d points
     
- (since) 5.0
# Properties
## int ControlVertexCount
- (summary) 
     Number of control vertices in this curve
     
- (since) 5.0
## int Dimension
- (summary) 
     Dimension of Bezier
     
- (since) 6.3
## bool IsRational
- (summary) 
     Gets a value indicating whether or not the curve is rational. 
     Rational curves have control-points with custom weights.
     
- (since) 5.0
## bool IsValid
- (summary) Tests an object to see if it is valid.
- (since) 5.0
# Methods
## static BezierCurve[] CreateBeziers(Curve sourceCurve)
- (summary) 
     Create an array of Bezier curves that fit to an existing curve. Please note, these
     Beziers can be of any order and may be rational.
     
- (since) 6.0
- (returns) BezierCurve[] This is some return comment
## static BezierCurve[] CreateCubicBeziers(Curve sourceCurve,double distanceTolerance,double kinkTolerance)
- (summary) 
     Constructs an array of cubic, non-rational beziers that fit a curve to a tolerance.
     
- (since) 5.0
- (returns) BezierCurve[] This is some return comment
## static BezierCurve CreateLoftedBezier(IEnumerable<Point2d> points)
- (summary) 
     Loft a bezier through a list of points
     
- (since) 5.0
- (returns) BezierCurve This is some return comment
## static BezierCurve CreateLoftedBezier(IEnumerable<Point3d> points)
- (summary) 
     Loft a bezier through a list of points
     
- (since) 5.0
- (returns) BezierCurve This is some return comment
## bool ChangeDimension(int desiredDimension)
- (summary) Change dimension of bezier.
- (since) 5.0
- (returns) bool This is some return comment
## Vector3d CurvatureAt(double t)
- (summary) Evaluate the curvature vector at a curve parameter.
- (since) 5.0
- (returns) Vector3d This is some return comment
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
## BoundingBox GetBoundingBox(bool accurate)
- (summary) 
     Boundingbox solver. Gets the world axis aligned boundingbox for the curve.
     
- (since) 5.0
- (returns) BoundingBox This is some return comment
## Point2d GetControlVertex2d(int index)
- (summary) Get location of a control vertex.
- (since) 5.0
- (returns) Point2d This is some return comment
## Point3d GetControlVertex3d(int index)
- (summary) Get location of a control vertex.
- (since) 5.0
- (returns) Point3d This is some return comment
## Point4d GetControlVertex4d(int index)
- (summary) Get location of a control vertex.
- (since) 5.0
- (returns) Point4d This is some return comment
## void GetObjectData(SerializationInfo info,StreamingContext context)
- (summary) 
     Populates a System.Runtime.Serialization.SerializationInfo with the data needed to serialize the target object.
     
- (since) 6.3
- (returns) void This is some return comment
## bool IncreaseDegree(int desiredDegree)
- (summary) Increase degree of bezier
- (since) 5.0
- (returns) bool This is some return comment
## bool MakeNonRational()
- (summary) Make bezier non-rational
- (since) 5.0
- (returns) bool This is some return comment
## bool MakeRational()
- (summary) Make bezier rational
- (since) 5.0
- (returns) bool This is some return comment
## Point3d PointAt(double t)
- (summary) Evaluates point at a curve parameter.
- (since) 5.0
- (returns) Point3d This is some return comment
## bool Split(double t,BezierCurve left,BezierCurve right)
- (summary) 
     Divides the Bezier curve at the specified parameter.
     
- (since) 6.0
- (returns) bool This is some return comment
## Vector3d TangentAt(double t)
- (summary) Evaluates the unit tangent vector at a curve parameter.
- (since) 5.0
- (returns) Vector3d This is some return comment
## NurbsCurve ToNurbsCurve()
- (summary) 
     Constructs a NURBS curve representation of this curve.
     
- (since) 5.0
- (returns) NurbsCurve This is some return comment
