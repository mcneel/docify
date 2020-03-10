---
title: "Rhino.Geometry.NurbsSurface"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Geometry.NurbsSurface(NurbsSurface other)
- (summary) 
     Initializes a new NURBS surface by copying the values from another surface.
     
- (since) 5.0
# Properties
## bool IsRational
- (summary) 
     Gets a value indicating whether or not the nurbs surface is rational.
     
- (since) 5.0
## Collections.NurbsSurfaceKnotList KnotsU
- (summary) 
     The U direction knot vector.
     
- (since) 5.0
## Collections.NurbsSurfaceKnotList KnotsV
- (summary) 
     The V direction knot vector.
     
- (since) 5.0
## int OrderU
- (summary) 
     Gets the order in the U direction.
     
- (since) 5.0
## int OrderV
- (summary) 
     Gets the order in the V direction.
     
- (since) 5.0
## Collections.NurbsSurfacePointList Points
- (summary) 
     Gets a collection of surface control points that form this surface.
     
- (since) 5.0
# Methods
## static NurbsSurface Create(int dimension,bool isRational,int order0,int order1,int controlPointCount0,int controlPointCount1)
- (summary) 
     Constructs a new NURBS surface with internal uninitialized arrays.
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
## static NurbsCurve CreateCurveOnSurface(Surface surface,IEnumerable<Point2d> points,double tolerance,bool periodic)
- (summary) 
     Fit a sequence of 2d points on a surface to make a curve on the surface.
     
- (since) 6.3
- (returns) NurbsCurve This is some return comment
## static Point2d[] CreateCurveOnSurfacePoints(Surface surface,IEnumerable<Point2d> fixedPoints,double tolerance,bool periodic,int initCount,int levels)
- (summary) 
     Computes a discrete spline curve on the surface. In other words, computes a sequence 
     of points on the surface, each with a corresponding parameter value.
     
- (since) 6.3
- (returns) Point2d[] This is some return comment
## static NurbsSurface CreateFromCone(Cone cone)
- (summary) 
     Constructs a new NURBS surfaces from cone data.
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
## static NurbsSurface CreateFromCorners(Point3d corner1,Point3d corner2,Point3d corner3)
- (summary) 
     Makes a surface from 3 corner points.
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
## static NurbsSurface CreateFromCorners(Point3d corner1,Point3d corner2,Point3d corner3,Point3d corner4)
- (summary) 
     Makes a surface from 4 corner points.
     This is the same as calling  with tolerance 0.
- (since) 5.0
- (returns) NurbsSurface This is some return comment
## static NurbsSurface CreateFromCorners(Point3d corner1,Point3d corner2,Point3d corner3,Point3d corner4,double tolerance)
- (summary) 
     Makes a surface from 4 corner points.
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
## static NurbsSurface CreateFromCylinder(Cylinder cylinder)
- (summary) 
     Constructs a new NURBS surfaces from cylinder data.
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
## static NurbsSurface CreateFromPoints(IEnumerable<Point3d> points,int uCount,int vCount,int uDegree,int vDegree)
- (summary) 
     Constructs a NURBS surface from a 2D grid of control points.
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
## static NurbsSurface CreateFromSphere(Sphere sphere)
- (summary) 
     Constructs a new NURBS surfaces from sphere data.
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
## static NurbsSurface CreateFromTorus(Torus torus)
- (summary) 
     Constructs a new NURBS surfaces from torus data.
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
## static NurbsSurface CreateNetworkSurface(IEnumerable<Curve> curves,int continuity,double edgeTolerance,double interiorTolerance,double angleTolerance,int error)
- (summary) 
     Builds a surface from an autosorted network of curves/edges.
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
## static NurbsSurface CreateNetworkSurface(IEnumerable<Curve> uCurves,int uContinuityStart,int uContinuityEnd,IEnumerable<Curve> vCurves,int vContinuityStart,int vContinuityEnd,double edgeTolerance,double interiorTolerance,double angleTolerance,int error)
- (summary) 
     Builds a surface from an ordered network of curves/edges.
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
## static NurbsSurface CreateRailRevolvedSurface(Curve profile,Curve rail,Line axis,bool scaleHeight)
- (summary) 
     Constructs a railed Surface-of-Revolution.
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
## static NurbsSurface CreateRuledSurface(Curve curveA,Curve curveB)
- (summary) 
     Constructs a ruled surface between two curves. Curves must share the same knot-vector.
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
## static NurbsSurface CreateThroughPoints(IEnumerable<Point3d> points,int uCount,int vCount,int uDegree,int vDegree,bool uClosed,bool vClosed)
- (summary) 
     Constructs a NURBS surface from a 2D grid of points.
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
## static bool MakeCompatible(Surface surface0,Surface surface1,NurbsSurface nurb0,NurbsSurface nurb1)
- (summary) 
     For expert use only. Makes a pair of compatible NURBS surfaces based on two input surfaces.
     
- (since) 6.0
- (returns) bool This is some return comment
## void CopyFrom(NurbsSurface other)
- (summary) 
     Copies this NURBS surface from another NURBS surface.
     
- (since) 5.0
- (returns) void This is some return comment
## bool EpsilonEquals(NurbsSurface other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## bool IncreaseDegreeU(int desiredDegree)
- (summary) 
     Increase the degree of this surface in U direction.
     
- (since) 5.10
- (returns) bool This is some return comment
## bool IncreaseDegreeV(int desiredDegree)
- (summary) 
     Increase the degree of this surface in V direction.
     
- (since) 5.10
- (returns) bool This is some return comment
## bool MakeNonRational()
- (summary) 
     Makes this surface non-rational.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool MakeRational()
- (summary) 
     Makes this surface rational.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool UVNDirectionsAt(double u,double v,Vector3d uDir,Vector3d vDir,Vector3d nDir)
- (summary) 
     Calculates the U, V, and N directions of a NURBS surface at a u,v parameter similar to the method used by Rhino's MoveUVN command.
     
- (since) 7.0
- (returns) bool This is some return comment
