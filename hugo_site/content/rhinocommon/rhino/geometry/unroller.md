---
title: "Unroller"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the operation of unrolling a single surface.
```cs
public class Unroller
```
## Constructors

Unroller(Brep brep)
: Initializes a new instance of the  class with a brep.

Unroller(Surface surface)
: Initializes a new instance of the  class with surface.
## Properties

double AbsoluteTolerance
: Gets or sets the absolute tolerance for the unrolling operation.
     Absolute tolerance is used in the evaluation of new entities,
     such as intersections, reprojections and splits.In the current implementation, absolute tolerance is used 
     in tessellating rails, fitting curves and pulling back trims.

bool ExplodeOutput
: Gets or sets a value determining whether geometry should be exploded.

double ExplodeSpacing
: Gets or sets a value determining whether spacing should be exploded.

double RelativeTolerance
: Gets or sets the relative tolerance for the unrolling operation.
     Relative tolerance is used in the evaluation of intrinsic properties,
     such as computations "along" the surface or brep.In the current implementation, relative tolerance is used to decide
     if a surface is flat enough to try to unroll. That helps ease the scale dependency.
     The surface has to be linear in one direction within (length * RelativeTolerance)
     to be considered linear for that purpose. Otherwise smash will ignore that tolerance and
     unroll anything.
## Methods

void AddFollowingGeometry(Curve curve)
: Adds a curve that should be unrolled along with the surface/brep.

void AddFollowingGeometry(IEnumerable<Curve> curves)
: Adds curves that should be unrolled along with the surface/brep.

void AddFollowingGeometry(IEnumerable<Point3d> points)
: Adds points that should be unrolled along with the surface/brep.

void AddFollowingGeometry(IEnumerable<Point3d> dotLocations,IEnumerable<string> dotText)
: Adds text dots that should be unrolled along with the surface/brep.

void AddFollowingGeometry(IEnumerable<TextDot> dots)
: Adds text dots that should be unrolled along with the surface/brep.

void AddFollowingGeometry(Point point)
: Adds a point that should be unrolled along with the surface/brep.

void AddFollowingGeometry(Point3d point)
: Adds a point that should be unrolled along with the surface/brep.

void AddFollowingGeometry(Point3d dotLocation,string dotText)
: Adds a text dot that should be unrolled along with the surface/brep.

void AddFollowingGeometry(TextDot dot)
: Adds a text dot that should be unrolled along with the surface/brep.

int FollowingGeometryIndex(Curve curve)
: Given an unrolled curve, returns the index of the source, or following curve.
: Returns - The index of the curve added by Unroller.AddFollowingGeometry if successful, otherwise -1.
: since 6.0

int FollowingGeometryIndex(TextDot dot)
: Given an unrolled text dot, returns the index of the source, or following text dot.
: Returns - The index of the text dot added by Unroller.AddFollowingGeometry if successful, otherwise -1.
: since 6.0

[Brep](/rhinocommon/rhino/geometry/brep/)[] PerformUnroll(Curve[] unrolledCurves,Point3d[] unrolledPoints,TextDot[] unrolledDots)
: Executes unrolling operations.
: Returns - An array of breps. This array can be empty.

int PerformUnroll(List<Brep> flatbreps)
: Executes unrolling operations.
: Returns - Number of breps in result
: since 6.0
