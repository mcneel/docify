---
title: "IntersectionEvent"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Intersect](../)*

Provides all the information for a single Curve Intersection event.
```cs
public class IntersectionEvent
```
## Properties

bool IsOverlap
: All curve intersection events are either a single point or an overlap.

bool IsPoint
: All curve intersection events are either a single point or an overlap.

[Interval](/rhinocommon/rhino/geometry/interval/) OverlapA
: Gets the interval on curve A where the overlap occurs. 
     If the intersection type is not overlap, this value is meaningless.

[Interval](/rhinocommon/rhino/geometry/interval/) OverlapB
: Gets the interval on curve B where the overlap occurs. 
     If the intersection type is not overlap, this value is meaningless.

double ParameterA
: Gets the parameter on Curve A where the intersection occured. 
     If the intersection type is overlap, then this will return the 
     start of the overlap region.

double ParameterB
: Gets the parameter on Curve B where the intersection occured. 
     If the intersection type is overlap, then this will return the 
     start of the overlap region.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointA
: Gets the point on Curve A where the intersection occured. 
     If the intersection type is overlap, then this will return the 
     start of the overlap region.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointA2
: Gets the end point of the overlap on Curve A. 
     If the intersection type is not overlap, this value is meaningless.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointB
: Gets the point on Curve B (or Surface B) where the intersection occured. 
     If the intersection type is overlap, then this will return the 
     start of the overlap region.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointB2
: Gets the end point of the overlap on Curve B (or Surface B). 
     If the intersection type is not overlap, this value is meaningless.
## Methods

static bool CompareEquivalent(IntersectionEvent eventA,IntersectionEvent eventB,double relativePointTolerance)
: Compare intersection events.
: Returns - True if the two inputs represent the same intersection, False otherwise.
: since 7.0

static bool CompareEquivalent(IntersectionEvent eventA,IntersectionEvent eventB,double relativePointTolerance,TextLog log)
: Compare intersection events.
: since 7.0

void SurfaceOverlapParameter(Interval uDomain,Interval vDomain)
: If this instance records a Curve|Surface intersection event, 
     and the intersection type if overlap, then use this function 
     to get the U and V domains on the surface where the overlap occurs.

void SurfacePointParameter(double u,double v)
: If this instance records a Curve|Surface intersection event, 
     and the intersection type is point, then use this function 
     to get the U and V parameters on the surface where the intersection occurs.
