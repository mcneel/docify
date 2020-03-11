---
title: "NurbsCurvePointList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to the control points of a nurbs curve.
```cs
public class NurbsCurvePointList :
    IEnumerable<ControlPoint>, IRhinoTable<ControlPoint>, IEpsilonComparable<NurbsCurvePointList>,
    IList<ControlPoint>
```
## Properties

double ControlPolygonLength
: Gets the length of the polyline connecting all control points.

int Count
: Gets the number of control points in this curve.

int PointSize
: Returns the control point size, or the number of doubles per control point. 
     For rational curves, PointSize = Curve.Dimension + 1. 
     For non-rational curves, PointSize = Curve.Dimension.
: since 6.9
## Methods

bool ChangeEndWeights(double w0,double w1)
: Use a combination of scaling and reparameterization to change the end weights to the specified values.
: Returns - True on success, False on failure.

bool Contains(ControlPoint item)
: Determines if this list contains an item.
: Returns - A boolean value.
: since 6.0

[Polyline](/rhinocommon/rhino/geometry/polyline/) ControlPolygon()
: Constructs a polyline through all the control points. 
     Note that periodic curves generate a closed polyline with fewer 
     points than control-points.
: Returns - A polyline connecting all control points.

void CopyTo(ControlPoint[] array,int arrayIndex)
: Copied the list to an array.
: since 6.0

void EnsurePrivateCopy()
: If you want to keep a copy of this class around by holding onto it in a variable after a command
     completes, call EnsurePrivateCopy to make sure that this class is not tied to the document. You can
     call this function as many times as you want.

bool EpsilonEquals(NurbsCurvePointList other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool GetPoint(int index,Point3d point)
: Gets a world 3-D, or Euclidean, control point at the given index.
     The 4-D representation is (x, y, z, 1.0).
: Returns - True on success, False on failure.
: since 6.0

bool GetPoint(int index,Point4d point)
: Gets a homogeneous control point at the given index, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
: Returns - True on success, False on failure.
: since 6.0

double GetWeight(int index)
: Gets the weight of a control point at the given index.
     Note, if the curve is non-rational, the weight will be 1.0.
: Returns - The control point weight if successful, Rhino.Math.UnsetValue otherwise.
: since 6.0

int IndexOf(ControlPoint item)
: Gets the index of a control point, or -1.
: Returns - The index.
: since 6.0

bool MakeNonRational()
: Converts the curve to a Non-rational NURBS curve. Non-rational curves have unweighted control points.
: Returns - True on success, False on failure.

bool MakeRational()
: Converts the curve to a Rational NURBS curve. Rational NURBS curves have weighted control points.
: Returns - True on success, False on failure.

bool SetPoint(int index,double x,double y,double z)
: Sets a world 3-D, or Euclidean, control point at the given index.
     The 4-D representation is (x, y, z, 1.0).
: Returns - True on success, False on failure.
: since 6.0

bool SetPoint(int index,double x,double y,double z,double weight)
: Sets a homogeneous control point at the given index, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
: Returns - True on success, False on failure.

bool SetPoint(int index,Point3d point)
: Sets a world 3-D, or Euclidean, control point at the given index.
     The 4-D representation is (x, y, z, 1.0).
: Returns - True on success, False on failure.

bool SetPoint(int index,Point3d point,double weight)
: Sets a world 3-D, or Euclidean, control point and weight at a given index.
     The 4-D representation is (x*w, y*w, z*w, w).
: Returns - True on success, False on failure.
: since 6.0

bool SetPoint(int index,Point4d point)
: Sets a homogeneous control point at the given index, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
: Returns - True on success, False on failure.

bool SetWeight(int index,double weight)
: Sets the weight of a control point at the given index
     Note, if the curve is non-rational, it will be converted to rational.
: Returns - True if successful, False otherwise.
: since 6.0

bool UVNDirectionsAt(int index,Vector3d uDir,Vector3d vDir,Vector3d nDir)
: Calculates the U, V, and N directions of a NURBS curve control point similar to the method used by Rhino's MoveUVN command.
: Returns - True if successful, False otherwise.
: since 7.0

bool ValidateSpacing(double closeTolerance,double stackTolerance,int[] closeIndices,int[] stackedIndices)
: Simple check of distance between adjacent control points
: Returns - True if close or stacked indices are found
: since 6.0
