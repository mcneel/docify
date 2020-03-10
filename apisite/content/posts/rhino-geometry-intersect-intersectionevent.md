---
title: "Rhino.Geometry.Intersect.IntersectionEvent"
draft: false
---

# Properties
## bool IsOverlap
- (summary) 
     All curve intersection events are either a single point or an overlap.
     
- (since) 5.0
## bool IsPoint
- (summary) 
     All curve intersection events are either a single point or an overlap.
     
- (since) 5.0
## Interval OverlapA
- (summary) 
     Gets the interval on curve A where the overlap occurs. 
     If the intersection type is not overlap, this value is meaningless.
     
- (since) 5.0
## Interval OverlapB
- (summary) 
     Gets the interval on curve B where the overlap occurs. 
     If the intersection type is not overlap, this value is meaningless.
     
- (since) 5.0
## double ParameterA
- (summary) 
     Gets the parameter on Curve A where the intersection occured. 
     If the intersection type is overlap, then this will return the 
     start of the overlap region.
     
- (since) 5.0
## double ParameterB
- (summary) 
     Gets the parameter on Curve B where the intersection occured. 
     If the intersection type is overlap, then this will return the 
     start of the overlap region.
     
- (since) 5.0
## Point3d PointA
- (summary) 
     Gets the point on Curve A where the intersection occured. 
     If the intersection type is overlap, then this will return the 
     start of the overlap region.
     
- (since) 5.0
## Point3d PointA2
- (summary) 
     Gets the end point of the overlap on Curve A. 
     If the intersection type is not overlap, this value is meaningless.
     
- (since) 5.0
## Point3d PointB
- (summary) 
     Gets the point on Curve B (or Surface B) where the intersection occured. 
     If the intersection type is overlap, then this will return the 
     start of the overlap region.
     
- (since) 5.0
## Point3d PointB2
- (summary) 
     Gets the end point of the overlap on Curve B (or Surface B). 
     If the intersection type is not overlap, this value is meaningless.
     
- (since) 5.0
# Methods
## static bool CompareEquivalent(IntersectionEvent eventA,IntersectionEvent eventB,double relativePointTolerance)
- (summary) 
     Compare intersection events.
     
- (since) 7.0
- (returns) bool This is some return comment
## static bool CompareEquivalent(IntersectionEvent eventA,IntersectionEvent eventB,double relativePointTolerance,TextLog log)
- (summary) 
     Compare intersection events.
     
- (since) 7.0
- (returns) bool This is some return comment
## void SurfaceOverlapParameter(Interval uDomain,Interval vDomain)
- (summary) 
     If this instance records a Curve|Surface intersection event, 
     and the intersection type if overlap, then use this function 
     to get the U and V domains on the surface where the overlap occurs.
     
- (since) 5.0
- (returns) void This is some return comment
## void SurfacePointParameter(double u,double v)
- (summary) 
     If this instance records a Curve|Surface intersection event, 
     and the intersection type is point, then use this function 
     to get the U and V parameters on the surface where the intersection occurs.
     
- (since) 5.0
- (returns) void This is some return comment
