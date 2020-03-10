---
title: "NurbsCurveKnotList"
draft: false
---

*Namespace: Rhino.Geometry.Collections*

   Provides access to the knot vector of a nurbs curve.
   
## Properties
#### int Count
- (summary) Total number of knots in this curve.
- (since) 5.0
#### bool IsClampedEnd
- (summary) 
     Gets a value indicating whether or not the knot vector is clamped at the end of the curve. 
     Clamped curves are coincident with the first and last control-point. This requires fully multiple knots.
     
- (since) 5.0
#### bool IsClampedStart
- (summary) 
     Gets a value indicating whether or not the knot vector is clamped at the start of the curve. 
     Clamped curves start at the first control-point. This requires fully multiple knots.
     
- (since) 5.0
## Methods
#### bool ClampEnd(CurveEnd end)
- (summary) 
     Clamp end knots. Does not modify control point locations.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Contains(double item)
- (summary) 
     Returns an indication of the presence of a value in the knot list.
     
- (since) 6.0
- (returns) bool This is some return comment
#### void CopyTo(double[] array,int arrayIndex)
- (summary) 
     Copies the list to an array.
     
- (since) 6.0
- (returns) void This is some return comment
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
#### bool EpsilonEquals(NurbsCurveKnotList other,double epsilon)
- (summary) 
     Checks that all values in the other list are sequentially equal within epsilon to the values in this list.
     
- (since) 5.4
- (returns) bool This is some return comment
#### int IndexOf(double item)
- (summary) 
     Returns the first item in the list.
     
- (since) 6.0
- (returns) int This is some return comment
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
#### bool RemoveKnotAt(double t)
- (summary) 
     Remove a knot from a curve and adjusts the remaining control points to maintain curve position as closely as possible.
     
- (since) 6.0
- (returns) bool This is some return comment
#### bool RemoveKnots(int index0,int index1)
- (summary) 
     Remove knots from a curve and adjusts the remaining control points to maintain curve position as closely as possible.
     The knots from Knots[index0] through Knots[index1 - 1] will be removed.
     
- (since) 6.0
- (returns) bool This is some return comment
#### int RemoveMultipleKnots(int minimumMultiplicity,int maximumMultiplicity,double tolerance)
- (summary)  Remove multiple knots from this curve. 
- (since) 6.0
- (returns) int This is some return comment
#### double SuperfluousKnot(bool start)
- (summary) 
     Computes the knots that are superfluous because they are not used in NURBs evaluation.
     These make it appear so that the first and last curve spans are different from interior spans.
     http://wiki.mcneel.com/developer/onsuperfluousknot
- (since) 5.0
- (returns) double This is some return comment
