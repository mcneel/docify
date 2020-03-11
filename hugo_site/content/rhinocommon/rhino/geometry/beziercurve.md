---
title: "BezierCurve"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a Bezier curve.
   Note: as an exception, the bezier curve is not derived from .
```cs
[Serializable]
public class BezierCurve : IDisposable, ISerializable
```
## Constructors

BezierCurve(IEnumerable<Point2d> controlPoints)
: Create bezier curve with controls defined by a list of 2d points

BezierCurve(IEnumerable<Point3d> controlPoints)
: Create bezier curve with controls defined by a list of 3d points

BezierCurve(IEnumerable<Point4d> controlPoints)
: Create bezier curve with controls defined by a list of 4d points
## Properties

int ControlVertexCount
: Number of control vertices in this curve

int Dimension
: Dimension of Bezier
: since 6.3

bool IsRational
: Gets a value indicating whether or not the curve is rational. 
     Rational curves have control-points with custom weights.

bool IsValid
: Tests an object to see if it is valid.
## Methods

static BezierCurve[] CreateBeziers(Curve sourceCurve)
: Create an array of Bezier curves that fit to an existing curve. Please note, these
     Beziers can be of any order and may be rational.
: Returns - A new array of Bezier curves
: since 6.0

static BezierCurve[] CreateCubicBeziers(Curve sourceCurve,double distanceTolerance,double kinkTolerance)
: Constructs an array of cubic, non-rational beziers that fit a curve to a tolerance.
: Returns - A new array of bezier curves. The array can be empty and might contain None items.

static BezierCurve CreateLoftedBezier(IEnumerable<Point2d> points)
: Loft a bezier through a list of points
: Returns - new bezier curve if successful

static BezierCurve CreateLoftedBezier(IEnumerable<Point3d> points)
: Loft a bezier through a list of points
: Returns - new bezier curve if successful

bool ChangeDimension(int desiredDimension)
: Change dimension of bezier.
: Returns - True if successful.  False if desired_dimension < 1

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CurvatureAt(double t)
: Evaluate the curvature vector at a curve parameter.
: Returns - Curvature vector of the curve at the parameter t.

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) GetBoundingBox(bool accurate)
: Boundingbox solver. Gets the world axis aligned boundingbox for the curve.
: Returns - The boundingbox of the geometry in world coordinates or BoundingBox.Empty 
     if not bounding box could be found.

[Point2d](/rhinocommon/rhino/geometry/point2d/) GetControlVertex2d(int index)
: Get location of a control vertex.
: Returns - If the bezier is rational, the euclidean location is returned.

[Point3d](/rhinocommon/rhino/geometry/point3d/) GetControlVertex3d(int index)
: Get location of a control vertex.
: Returns - If the bezier is rational, the euclidean location is returned.

[Point4d](/rhinocommon/rhino/geometry/point4d/) GetControlVertex4d(int index)
: Get location of a control vertex.
: Returns - Homogenous value of control vertex. If the bezier is not
     rational, the weight is 1.

void GetObjectData(SerializationInfo info,StreamingContext context)
: Populates a System.Runtime.Serialization.SerializationInfo with the data needed to serialize the target object.
: since 6.3

bool IncreaseDegree(int desiredDegree)
: Increase degree of bezier
: Returns - True if successful.  False if desiredDegree < current degree.

bool MakeNonRational()
: Make bezier non-rational
: Returns - treu if successful

bool MakeRational()
: Make bezier rational
: Returns - True if successful

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(double t)
: Evaluates point at a curve parameter.
: Returns - Point (location of curve at the parameter t).

bool Split(double t,BezierCurve left,BezierCurve right)
: Divides the Bezier curve at the specified parameter.
: Returns - True on success
: since 6.0

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) TangentAt(double t)
: Evaluates the unit tangent vector at a curve parameter.
: Returns - Unit tangent vector of the curve at the parameter t.

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) ToNurbsCurve()
: Constructs a NURBS curve representation of this curve.
: Returns - NURBS representation of the curve on success, None on failure.
