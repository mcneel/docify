---
title: "Rhino.Geometry.Unroller"
date: 2020-03-10 09:24:56Z
draft: false
---

# Constructors
## Rhino.Geometry.Unroller(Brep brep)
- (summary) 
     Initializes a new instance of the  class with a brep.
     
- (since) 5.0
## Rhino.Geometry.Unroller(Surface surface)
- (summary) 
     Initializes a new instance of the  class with surface.
     
- (since) 5.0
# Properties
## double AbsoluteTolerance
- (summary) 
     Gets or sets the absolute tolerance for the unrolling operation.
     Absolute tolerance is used in the evaluation of new entities,
     such as intersections, reprojections and splits.In the current implementation, absolute tolerance is used 
     in tessellating rails, fitting curves and pulling back trims.
- (since) 5.0
## bool ExplodeOutput
- (summary) 
     Gets or sets a value determining whether geometry should be exploded.
     
- (since) 5.0
## double ExplodeSpacing
- (summary) 
     Gets or sets a value determining whether spacing should be exploded.
     
- (since) 5.0
## double RelativeTolerance
- (summary) 
     Gets or sets the relative tolerance for the unrolling operation.
     Relative tolerance is used in the evaluation of intrinsic properties,
     such as computations "along" the surface or brep.In the current implementation, relative tolerance is used to decide
     if a surface is flat enough to try to unroll. That helps ease the scale dependency.
     The surface has to be linear in one direction within (length * RelativeTolerance)
     to be considered linear for that purpose. Otherwise smash will ignore that tolerance and
     unroll anything.
- (since) 5.0
# Methods
## void AddFollowingGeometry(Curve curve)
- (summary) 
     Adds a curve that should be unrolled along with the surface/brep.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddFollowingGeometry(IEnumerable<Curve> curves)
- (summary) 
     Adds curves that should be unrolled along with the surface/brep.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddFollowingGeometry(IEnumerable<Point3d> points)
- (summary) 
     Adds points that should be unrolled along with the surface/brep.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddFollowingGeometry(IEnumerable<Point3d> dotLocations,IEnumerable<string> dotText)
- (summary) 
     Adds text dots that should be unrolled along with the surface/brep.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddFollowingGeometry(IEnumerable<TextDot> dots)
- (summary) 
     Adds text dots that should be unrolled along with the surface/brep.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddFollowingGeometry(Point point)
- (summary) 
     Adds a point that should be unrolled along with the surface/brep.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddFollowingGeometry(Point3d point)
- (summary) 
     Adds a point that should be unrolled along with the surface/brep.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddFollowingGeometry(Point3d dotLocation,string dotText)
- (summary) 
     Adds a text dot that should be unrolled along with the surface/brep.
     
- (since) 5.0
- (returns) void This is some return comment
## void AddFollowingGeometry(TextDot dot)
- (summary) 
     Adds a text dot that should be unrolled along with the surface/brep.
     
- (since) 5.0
- (returns) void This is some return comment
## int FollowingGeometryIndex(Curve curve)
- (summary) 
     Given an unrolled curve, returns the index of the source, or following curve. 
     
- (since) 6.0
- (returns) int This is some return comment
## int FollowingGeometryIndex(TextDot dot)
- (summary) 
     Given an unrolled text dot, returns the index of the source, or following text dot. 
     
- (since) 6.0
- (returns) int This is some return comment
## Brep[] PerformUnroll(Curve[] unrolledCurves,Point3d[] unrolledPoints,TextDot[] unrolledDots)
- (summary) 
     Executes unrolling operations.
     
- (since) 5.0
- (returns) Brep[] This is some return comment
## int PerformUnroll(List<Brep> flatbreps)
- (summary) 
     Executes unrolling operations.
     
- (since) 6.0
- (returns) int This is some return comment
