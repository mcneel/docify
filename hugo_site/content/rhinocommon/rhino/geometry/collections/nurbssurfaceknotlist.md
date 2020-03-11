---
title: "NurbsSurfaceKnotList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to the knot vector of a nurbs surface.
```cs
public class NurbsSurfaceKnotList : IEnumerable<double>, Rhino.Collections.IRhinoTable<double>, IEpsilonComparable<NurbsSurfaceKnotList>
```
## Properties

bool ClampedAtEnd
: Determines if a knot vector is clamped.

bool ClampedAtStart
: Determines if a knot vector is clamped.

int Count
: Gets the total number of knots in this curve.
## Methods

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

bool EpsilonEquals(NurbsSurfaceKnotList other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

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

bool RemoveKnots(int index0,int index1)
: Remove knots from the knot vector and adjusts the remaining control points to maintain surface position as closely as possible.
     The knots from Knots[index0] through Knots[index1 - 1] will be removed.
: Returns - True if successful, False on failure.
: since 6.0

bool RemoveKnotsAt(double u,double v)
: Remove knots from the surface and adjusts the remaining control points to maintain surface position as closely as possible.
: Returns - True if successful, False on failure.
: since 6.0

int RemoveMultipleKnots(int minimumMultiplicity,int maximumMultiplicity,double tolerance)
: Remove multiple knots from this surface
: Returns - number of knots removed on success. 0 if no knots were removed
: since 6.0

double SuperfluousKnot(bool start)
: Computes the knots that are superfluous because they are not used in NURBs evaluation.
     These make it appear so that the first and last surface spans are different from interior spans.
     http://wiki.mcneel.com/developer/onsuperfluousknot
: Returns - A component.
