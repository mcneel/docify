---
title: "Rhino.Geometry.CurveBooleanRegions"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## int PlanarCurveCount
- (summary) 
     Returns number of planar curves that were calculated by Curve.CreateBooleanRegions.
     
- (since) 7.0
## int PointCount
- (summary) 
     If this object were created using the Curve.CreateBooleanRegions override that
     accepts a collection of points as input, then this value will be equal to the length
     of the points collection.
     
- (since) 7.0
## int RegionCount
- (summary) 
     Returns the number of curve regions. A curve region is a collection of
     curves that bound a single connected region of the plane.
     
- (since) 7.0
# Methods
## int BoundaryCount(int regionIndex)
- (summary) 
     Returns the number of boundary curves in a curve region.
     
- (since) 7.0
- (returns) int This is some return comment
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 7.0
- (returns) void This is some return comment
## Curve PlanarCurve(int planarCurveIndex)
- (summary) 
     Returns a planar curve that was calculated by Curve.CreateBooleanRegions.
     
- (since) 7.0
- (returns) Curve This is some return comment
## Curve[] RegionCurves(int regionIndex)
- (summary) 
     Returns the boundary curves in a curve region. A curve region is a collection of
     curves that bound a single connected region of the plane. Note, the first curve
     is always the outer boundary.
     
- (since) 7.0
- (returns) Curve[] This is some return comment
## int RegionPointIndex(int pointIndex)
- (summary) 
     If this object were created using the Curve.CreateBooleanRegions override that
     accepts a collection of points as input, then you this method to retrieve the
     index of the point contained in a curve region.
     If this.RegionPointIndex(i) = n, then points[i] is contained in this.RegionCurves(n).
     If points[i] is not in any region, then this.RegionPointIndex(i) = -1.
     
- (since) 7.0
- (returns) int This is some return comment
## int SegmentCount(int regionIndex,int boundaryIndex)
- (summary) 
     Returns the number of segments in a boundary curve in a curve region.
     
- (since) 7.0
- (returns) int This is some return comment
## int SegmentDetails(int regionIndex,int boundaryIndex,int segmmentIndex,Interval subDomain,bool reversed)
- (summary) 
     Returns the details of a segment in a boundary curve in a curve region.
     
- (since) 7.0
- (returns) int This is some return comment
