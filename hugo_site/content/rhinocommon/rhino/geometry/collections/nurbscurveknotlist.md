---
title: "NurbsCurveKnotList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to the knot vector of a nurbs curve.
```cs
public class NurbsCurveKnotList :
    IEnumerable<double>, IRhinoTable<double>, IEpsilonComparable<NurbsCurveKnotList>,
    IList<double>
```
## Properties

int Count
: Total number of knots in this curve.

bool IsClampedEnd
: Gets a value indicating whether or not the knot vector is clamped at the end of the curve. 
     Clamped curves are coincident with the first and last control-point. This requires fully multiple knots.

bool IsClampedStart
: Gets a value indicating whether or not the knot vector is clamped at the start of the curve. 
     Clamped curves start at the first control-point. This requires fully multiple knots.
## Methods

bool ClampEnd(CurveEnd end)
: Clamp end knots. Does not modify control point locations.
: Returns - True on success, False on failure.

bool Contains(double item)
: Returns an indication of the presence of a value in the knot list.
: Returns - True if present, False otherwise.
: since 6.0

void CopyTo(double[] array,int arrayIndex)
: Copies the list to an array.
: since 6.0

bool CreatePeriodicKnots(double knotSpacing)
: Compute a clamped, uniform, periodic knot vector based on the current
     degree and control point count. Does not change values of control
     vertices.
: Returns - True on success, False on failure.

bool CreateUniformKnots(double knotSpacing)
: Compute a clamped, uniform knot vector based on the current
     degree and control point count. Does not change values of control
     vertices.
: Returns - True on success, False on failure.

void EnsurePrivateCopy()
: If you want to keep a copy of this class around by holding onto it in a variable after a command
     completes, call EnsurePrivateCopy to make sure that this class is not tied to the document. You can
     call this function as many times as you want.

bool EpsilonEquals(NurbsCurveKnotList other,double epsilon)
: Checks that all values in the other list are sequentially equal within epsilon to the values in this list.
: Returns - True if values are, orderly, equal within epsilon. False otherwise.
: since 5.4

int IndexOf(double item)
: Returns the first item in the list.
: Returns - The index, or -1 if no index is found.
: since 6.0

bool InsertKnot(double value)
: Inserts a knot and update control point locations.
     Does not change parameterization or locus of curve.
: Returns - True on success, False on failure.

bool InsertKnot(double value,int multiplicity)
: Inserts a knot and update control point locations.
     Does not change parameterization or locus of curve.
: Returns - True on success, False on failure.

int KnotMultiplicity(int index)
: Get knot multiplicity.
: Returns - The multiplicity (valence) of the knot.

bool RemoveKnotAt(double t)
: Remove a knot from a curve and adjusts the remaining control points to maintain curve position as closely as possible.
: Returns - True if successful, False on failure.
: since 6.0

bool RemoveKnots(int index0,int index1)
: Remove knots from a curve and adjusts the remaining control points to maintain curve position as closely as possible.
     The knots from Knots[index0] through Knots[index1 - 1] will be removed.
: Returns - True if successful, False on failure.
: since 6.0

int RemoveMultipleKnots(int minimumMultiplicity,int maximumMultiplicity,double tolerance)
: Remove multiple knots from this curve.
: Returns - number of knots removed on success. 0 if no knots were removed
: since 6.0

double SuperfluousKnot(bool start)
: Computes the knots that are superfluous because they are not used in NURBs evaluation.
     These make it appear so that the first and last curve spans are different from interior spans.
     http://wiki.mcneel.com/developer/onsuperfluousknot
: Returns - A component.
