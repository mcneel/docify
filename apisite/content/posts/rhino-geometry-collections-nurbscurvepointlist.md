---
title: "Rhino.Geometry.Collections.NurbsCurvePointList"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## double ControlPolygonLength
- (summary) 
     Gets the length of the polyline connecting all control points.
     
- (since) 5.0
## int Count
- (summary) 
     Gets the number of control points in this curve.
     
- (since) 5.0
## int PointSize
- (summary) 
     Returns the control point size, or the number of doubles per control point. 
     For rational curves, PointSize = Curve.Dimension + 1. 
     For non-rational curves, PointSize = Curve.Dimension.
     
- (since) 6.9
# Methods
## bool ChangeEndWeights(double w0,double w1)
- (summary) 
     Use a combination of scaling and reparameterization to change the end weights to the specified values.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Contains(ControlPoint item)
- (summary) 
     Determines if this list contains an item.
     
- (since) 6.0
- (returns) bool This is some return comment
## Polyline ControlPolygon()
- (summary) 
     Constructs a polyline through all the control points. 
     Note that periodic curves generate a closed polyline with fewer 
     points than control-points.
     
- (since) 5.0
- (returns) Polyline This is some return comment
## void CopyTo(ControlPoint[] array,int arrayIndex)
- (summary) 
     Copied the list to an array.
     
- (since) 6.0
- (returns) void This is some return comment
## void EnsurePrivateCopy()
- (summary) 
     If you want to keep a copy of this class around by holding onto it in a variable after a command
     completes, call EnsurePrivateCopy to make sure that this class is not tied to the document. You can
     call this function as many times as you want.
     
- (since) 5.0
- (returns) void This is some return comment
## bool EpsilonEquals(NurbsCurvePointList other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## bool GetPoint(int index,Point3d point)
- (summary) 
     Gets a world 3-D, or Euclidean, control point at the given index.
     The 4-D representation is (x, y, z, 1.0).
     
- (since) 6.0
- (returns) bool This is some return comment
## bool GetPoint(int index,Point4d point)
- (summary) 
     Gets a homogeneous control point at the given index, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
     
- (since) 6.0
- (returns) bool This is some return comment
## double GetWeight(int index)
- (summary) 
     Gets the weight of a control point at the given index.
     Note, if the curve is non-rational, the weight will be 1.0.
     
- (since) 6.0
- (returns) double This is some return comment
## int IndexOf(ControlPoint item)
- (summary) 
     Gets the index of a control point, or -1.
     
- (since) 6.0
- (returns) int This is some return comment
## bool MakeNonRational()
- (summary) 
     Converts the curve to a Non-rational NURBS curve. Non-rational curves have unweighted control points.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool MakeRational()
- (summary) 
     Converts the curve to a Rational NURBS curve. Rational NURBS curves have weighted control points.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetPoint(int index,double x,double y,double z)
- (summary) 
     Sets a world 3-D, or Euclidean, control point at the given index.
     The 4-D representation is (x, y, z, 1.0).
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SetPoint(int index,double x,double y,double z,double weight)
- (summary) 
     Sets a homogeneous control point at the given index, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetPoint(int index,Point3d point)
- (summary) 
     Sets a world 3-D, or Euclidean, control point at the given index.
     The 4-D representation is (x, y, z, 1.0).
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetPoint(int index,Point3d point,double weight)
- (summary) 
     Sets a world 3-D, or Euclidean, control point and weight at a given index.
     The 4-D representation is (x*w, y*w, z*w, w).
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SetPoint(int index,Point4d point)
- (summary) 
     Sets a homogeneous control point at the given index, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetWeight(int index,double weight)
- (summary) 
     Sets the weight of a control point at the given index
     Note, if the curve is non-rational, it will be converted to rational.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool UVNDirectionsAt(int index,Vector3d uDir,Vector3d vDir,Vector3d nDir)
- (summary) 
     Calculates the U, V, and N directions of a NURBS curve control point similar to the method used by Rhino's MoveUVN command.
     
- (since) 7.0
- (returns) bool This is some return comment
## bool ValidateSpacing(double closeTolerance,double stackTolerance,int[] closeIndices,int[] stackedIndices)
- (summary) 
     Simple check of distance between adjacent control points
     
- (since) 6.0
- (returns) bool This is some return comment
