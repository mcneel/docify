---
title: "CurveBooleanRegions"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the results of a Curve.CreateBooleanRegions calculation.
```cs
[Serializable]
public class CurveBooleanRegions : IDisposable
```
## Properties

int PlanarCurveCount
: Returns number of planar curves that were calculated by Curve.CreateBooleanRegions.
: since 7.0

int PointCount
: If this object were created using the Curve.CreateBooleanRegions override that
     accepts a collection of points as input, then this value will be equal to the length
     of the points collection.
: since 7.0

int RegionCount
: Returns the number of curve regions. A curve region is a collection of
     curves that bound a single connected region of the plane.
: since 7.0
## Methods

int BoundaryCount(int regionIndex)
: Returns the number of boundary curves in a curve region.
: Returns - The number of boundary curves in the curve region.
: since 7.0

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 7.0

[Curve](/rhinocommon/rhino/geometry/curve/) PlanarCurve(int planarCurveIndex)
: Returns a planar curve that was calculated by Curve.CreateBooleanRegions.
: Returns - The planar curve if succesful, None if not successful.
: since 7.0

[Curve](/rhinocommon/rhino/geometry/curve/)[] RegionCurves(int regionIndex)
: Returns the boundary curves in a curve region. A curve region is a collection of
     curves that bound a single connected region of the plane. Note, the first curve
     is always the outer boundary.
: Returns - An array of boundary curves if successful, an empty array if not successful.
: since 7.0

int RegionPointIndex(int pointIndex)
: If this object were created using the Curve.CreateBooleanRegions override that
     accepts a collection of points as input, then you this method to retrieve the
     index of the point contained in a curve region.
     If this.RegionPointIndex(i) = n, then points[i] is contained in this.RegionCurves(n).
     If points[i] is not in any region, then this.RegionPointIndex(i) = -1.
: Returns - The index of the input point contained in the specified region if successful,
     or -1 if points[i] was not used in any region or if not successful.
: since 7.0

int SegmentCount(int regionIndex,int boundaryIndex)
: Returns the number of segments in a boundary curve in a curve region.
: Returns - The number of curve segments in th boundary curves.
: since 7.0

int SegmentDetails(int regionIndex,int boundaryIndex,int segmmentIndex,Interval subDomain,bool reversed)
: Returns the details of a segment in a boundary curve in a curve region.
: Returns - The index of the planar curve used by the specified segment if successful, -1 if not successful.
: since 7.0
