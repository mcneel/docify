---
title: "NurbsSurfaceKnotList"
draft: false
---

*Namespace: Rhino.Geometry.Collections*

   Provides access to the knot vector of a nurbs surface.
   
## Properties
#### bool ClampedAtEnd
- (summary) Determines if a knot vector is clamped.
- (since) 5.0
#### bool ClampedAtStart
- (summary) Determines if a knot vector is clamped.
- (since) 5.0
#### int Count
- (summary) Gets the total number of knots in this curve.
- (since) 5.0
## Methods
#### bool CreatePeriodicKnots(double knotSpacing)
- (summary) 
     Compute a clamped, uniform, periodic knot vector based on the current
     degree and control point count. Does not change values of control
     vertices.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool CreateUniformKnots(double knotSpacing)
- (summary) 
     Compute a clamped, uniform knot vector based on the current
     degree and control point count. Does not change values of control
     vertices.
     
- (since) 5.0
- (returns) bool This is some return comment
#### void EnsurePrivateCopy()
- (summary) 
     If you want to keep a copy of this class around by holding onto it in a variable after a command
     completes, call EnsurePrivateCopy to make sure that this class is not tied to the document. You can
     call this function as many times as you want.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool EpsilonEquals(NurbsSurfaceKnotList other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
#### bool InsertKnot(double value)
- (summary) 
     Inserts a knot and update control point locations.
     Does not change parameterization or locus of curve.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool InsertKnot(double value,int multiplicity)
- (summary) 
     Inserts a knot and update control point locations.
     Does not change parameterization or locus of curve.
     
- (since) 5.0
- (returns) bool This is some return comment
#### int KnotMultiplicity(int index)
- (summary) Get knot multiplicity.
- (since) 5.0
- (returns) int This is some return comment
#### bool RemoveKnots(int index0,int index1)
- (summary) 
     Remove knots from the knot vector and adjusts the remaining control points to maintain surface position as closely as possible.
     The knots from Knots[index0] through Knots[index1 - 1] will be removed.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool RemoveKnotsAt(double u,double v)
- (summary) 
     Remove knots from the surface and adjusts the remaining control points to maintain surface position as closely as possible.
     
- (since) 6.0
- (returns) bool This is some return comment
#### int RemoveMultipleKnots(int minimumMultiplicity,int maximumMultiplicity,double tolerance)
- (summary) Remove multiple knots from this surface
- (since) 6.0
- (returns) int This is some return comment
#### double SuperfluousKnot(bool start)
- (summary) 
     Computes the knots that are superfluous because they are not used in NURBs evaluation.
     These make it appear so that the first and last surface spans are different from interior spans.
     http://wiki.mcneel.com/developer/onsuperfluousknot
- (since) 5.0
- (returns) double This is some return comment
