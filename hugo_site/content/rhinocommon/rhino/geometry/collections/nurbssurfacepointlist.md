---
title: "NurbsSurfacePointList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to the control points of a nurbs surface.
```cs
public class NurbsSurfacePointList : IEnumerable<ControlPoint>, IEpsilonComparable<NurbsSurfacePointList>
```
## Properties

int CountU
: Gets the number of control points in the U direction of this surface.

int CountV
: Gets the number of control points in the V direction of this surface.

int PointSize
: Returns the control point size, or the number of doubles per control point. 
     For rational curves, PointSize = Surface.Dimension + 1. 
     For non-rational curves, PointSize = Surface.Dimension.
: since 6.9
## Methods

void EnsurePrivateCopy()
: If you want to keep a copy of this class around by holding onto it in a variable after a command
     completes, call EnsurePrivateCopy to make sure that this class is not tied to the document. You can
     call this function as many times as you want.

bool EpsilonEquals(NurbsSurfacePointList other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

[ControlPoint](/rhinocommon/rhino/geometry/controlpoint/) GetControlPoint(int u,int v)
: Gets the control point at the given (u, v) index.
: Returns - The control point at the given (u, v) index.

[Point2d](/rhinocommon/rhino/geometry/point2d/) GetGrevillePoint(int u,int v)
: Gets the 2-D Greville point associated with the control point at the given (u, v) index.
: Returns - A Surface UV coordinate on success, Point2d.Unset on failure.

bool GetPoint(int u,int v,Point3d point)
: Gets a world 3-D, or Euclidean, control point at the given (u, v) index.
     The 4-D representation is (x, y, z, 1.0).
: Returns - True on success, False on failure.
: since 6.0

bool GetPoint(int u,int v,Point4d point)
: Gets a homogeneous control point at the given (u, v) index, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
: Returns - True on success, False on failure.
: since 6.0

double GetWeight(int u,int v)
: Gets the weight of a control point at the given (u, v) index.
     Note, if the surface is non-rational, the weight will be 1.0.
: Returns - The control point weight if successful, Rhino.Math.UnsetValue otherwise.
: since 6.0

bool SetControlPoint(int u,int v,ControlPoint cp)
: Sets the control point at the given (u, v) index.
: Returns - True on success, False on failure.

bool SetControlPoint(int u,int v,Point3d cp)
: Sets the control point at the given (u, v) index.
: Returns - True on success, False on failure.

bool SetPoint(int u,int v,double x,double y,double z)
: Sets a world 3-D, or Euclidean, control point at the given (u, v) index.
     The 4-D representation is (x, y, z, 1.0).
: Returns - True on success, False on failure.
: since 6.0

bool SetPoint(int u,int v,double x,double y,double z,double weight)
: Sets a homogeneous control point at the given (u, v) index, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
: Returns - True on success, False on failure.
: since 6.0

bool SetPoint(int u,int v,Point3d point)
: Sets a world 3-D, or Euclidean, control point at the given (u, v) index.
     The 4-D representation is (x, y, z, 1.0).
: Returns - True on success, False on failure.
: since 6.0

bool SetPoint(int u,int v,Point3d point,double weight)
: Sets a world 3-D, or Euclidean, control point and weight at a given index.
     The 4-D representation is (x*w, y*w, z*w, w).
: Returns - True on success, False on failure.
: since 6.0

bool SetPoint(int u,int v,Point4d point)
: Sets a homogeneous control point at the given (u, v) index, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
: Returns - True on success, False on failure.
: since 6.0

bool SetWeight(int u,int v,double weight)
: Sets the weight of a control point at the given (u, v) index.
     Note, if the surface is non-rational, it will be converted to rational.
: Returns - True if successful, False otherwise.
: since 6.0

bool UVNDirectionsAt(int u,int v,Vector3d uDir,Vector3d vDir,Vector3d nDir)
: Calculates the U, V, and N directions of a NURBS surface control point similar to the method used by Rhino's MoveUVN command.
: Returns - True if successful, False otherwise.
: since 7.0

bool ValidateSpacing(double closeTolerance,double stackTolerance,IndexPair[] closeIndices,IndexPair[] stackedIndices)
: Simple check of distance between adjacent control points
: since 6.0
