---
title: "Rhino.Geometry.Collections.NurbsSurfacePointList"
draft: false
---

# Properties
## int CountU
- (summary) 
     Gets the number of control points in the U direction of this surface.
     
- (since) 5.0
## int CountV
- (summary) 
     Gets the number of control points in the V direction of this surface.
     
- (since) 5.0
## int PointSize
- (summary) 
     Returns the control point size, or the number of doubles per control point. 
     For rational curves, PointSize = Surface.Dimension + 1. 
     For non-rational curves, PointSize = Surface.Dimension.
     
- (since) 6.9
# Methods
## void EnsurePrivateCopy()
- (summary) 
     If you want to keep a copy of this class around by holding onto it in a variable after a command
     completes, call EnsurePrivateCopy to make sure that this class is not tied to the document. You can
     call this function as many times as you want.
     
- (since) 5.0
- (returns) void This is some return comment
## bool EpsilonEquals(NurbsSurfacePointList other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## ControlPoint GetControlPoint(int u,int v)
- (summary) 
     Gets the control point at the given (u, v) index.
     
- (since) 5.0
- (returns) ControlPoint This is some return comment
## Point2d GetGrevillePoint(int u,int v)
- (summary) 
     Gets the 2-D Greville point associated with the control point at the given (u, v) index.
     
- (since) 5.0
- (returns) Point2d This is some return comment
## bool GetPoint(int u,int v,Point3d point)
- (summary) 
     Gets a world 3-D, or Euclidean, control point at the given (u, v) index.
     The 4-D representation is (x, y, z, 1.0).
     
- (since) 6.0
- (returns) bool This is some return comment
## bool GetPoint(int u,int v,Point4d point)
- (summary) 
     Gets a homogeneous control point at the given (u, v) index, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
     
- (since) 6.0
- (returns) bool This is some return comment
## double GetWeight(int u,int v)
- (summary) 
     Gets the weight of a control point at the given (u, v) index.
     Note, if the surface is non-rational, the weight will be 1.0.
     
- (since) 6.0
- (returns) double This is some return comment
## bool SetControlPoint(int u,int v,ControlPoint cp)
- (summary) 
     Sets the control point at the given (u, v) index.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetControlPoint(int u,int v,Point3d cp)
- (summary) 
     Sets the control point at the given (u, v) index.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetPoint(int u,int v,double x,double y,double z)
- (summary) 
     Sets a world 3-D, or Euclidean, control point at the given (u, v) index.
     The 4-D representation is (x, y, z, 1.0).
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SetPoint(int u,int v,double x,double y,double z,double weight)
- (summary) 
     Sets a homogeneous control point at the given (u, v) index, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SetPoint(int u,int v,Point3d point)
- (summary) 
     Sets a world 3-D, or Euclidean, control point at the given (u, v) index.
     The 4-D representation is (x, y, z, 1.0).
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SetPoint(int u,int v,Point3d point,double weight)
- (summary) 
     Sets a world 3-D, or Euclidean, control point and weight at a given index.
     The 4-D representation is (x*w, y*w, z*w, w).
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SetPoint(int u,int v,Point4d point)
- (summary) 
     Sets a homogeneous control point at the given (u, v) index, where the 4-D representation is (x, y, z, w).
     The world 3-D, or Euclidean, representation is (x/w, y/w, z/w).
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SetWeight(int u,int v,double weight)
- (summary) 
     Sets the weight of a control point at the given (u, v) index.
     Note, if the surface is non-rational, it will be converted to rational.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool UVNDirectionsAt(int u,int v,Vector3d uDir,Vector3d vDir,Vector3d nDir)
- (summary) 
     Calculates the U, V, and N directions of a NURBS surface control point similar to the method used by Rhino's MoveUVN command.
     
- (since) 7.0
- (returns) bool This is some return comment
## bool ValidateSpacing(double closeTolerance,double stackTolerance,IndexPair[] closeIndices,IndexPair[] stackedIndices)
- (summary) 
     Simple check of distance between adjacent control points
     
- (since) 6.0
- (returns) bool This is some return comment
