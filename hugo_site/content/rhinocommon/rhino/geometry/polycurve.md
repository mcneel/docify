---
title: "PolyCurve"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a curve that is the result of joining several (possibly different)
   types of curves.
```cs
[Serializable]
public class PolyCurve : Curve
```
## Constructors

PolyCurve()
: Initializes a new, empty polycurve.
## Properties

bool HasGap
: This is a quick way to see if the curve has gaps between the sub curve segments.

bool IsNested
: Gets a value indicating whether or not a PolyCurve contains nested PolyCurves.

int SegmentCount
: Gets the number of segments that make up this Polycurve.
## Methods

bool Append(Arc arc)
: Appends and matches the start of the arc to the end of polycurve. 
     This function will fail if the polycurve is closed or if SegmentCount > 0 and the arc is closed.
: Returns - True on success, False on failure.

bool Append(Curve curve)
: Appends and matches the start of the curve to the end of polycurve. 
     This function will fail if the PolyCurve is closed or if SegmentCount > 0 and the new segment is closed.
: Returns - True on success, False on failure.

bool Append(Line line)
: Appends and matches the start of the line to the end of polycurve. 
     This function will fail if the polycurve is closed.
: Returns - True on success, False on failure.

bool AppendSegment(Curve curve)
: Appends the curve to the polycurve without changing the new segment's geometry. 
     This function will fail if the PolyCurve is closed or if SegmentCount > 0 and the new segment is closed.
: Returns - True on success, False on failure.
: since 6.0

[Curve](/rhinocommon/rhino/geometry/curve/) CleanUp()
: Removes any nesting of polycurves. If this polycurve has just a single segment, the segment is returned.
     If, after nest removal, there are adjacent segments which are polylines, they are combined into a single polyline.
     The new curve may have a different domain from this polycurve. If the start and end segments of a closed input are polylines,
     the result may have a different seam location since the start and end segments will be combined.
: Returns - A new curve that is not necessarily a polycurve if succesful, None otherwise.
: since 7.0

[GeometryBase](/rhinocommon/rhino/geometry/geometrybase/) Duplicate()
: Duplicates this polycurve.
     When not overridden in a derived class, this calls .
: Returns - An exact duplicate of this curve.

PolyCurve DuplicatePolyCurve()
: Duplicates this polycurve.
     This is the same as .
: Returns - An exact duplicate of this curve.

[Curve](/rhinocommon/rhino/geometry/curve/)[] Explode()
: Explodes this PolyCurve into a list of Curve segments. This will not explode nested polycurves. 
     Call  first if you need all individual segments.
: Returns - An array of polycurve segments.

double PolyCurveParameter(int segmentIndex,double segmentCurveParameter)
: Converts a segment curve parameter to a polycurve parameter.
: Returns - Polycurve evaluation parameter or UnsetValue if the polycurve curve parameter could not be computed.

bool RemoveNesting()
: Explodes nested polycurve segments and reconstructs this curve from the shattered remains. 
     The result will have not have any PolyCurves as segments but it will have identical 
     locus and parameterization.
: Returns - True if any nested PolyCurve was found and absorbed, False if no PolyCurve segments could be found.

[Curve](/rhinocommon/rhino/geometry/curve/) SegmentCurve(int index)
: Gets the segment curve at the given index.
: Returns - The segment at the given index or None on failure.

double SegmentCurveParameter(double polycurveParameter)
: Converts a polycurve parameter to a segment curve parameter.
: Returns - Segment curve evaluation parameter or UnsetValue if the 
     segment curve parameter could not be computed.

[Interval](/rhinocommon/rhino/geometry/interval/) SegmentDomain(int segmentIndex)
: Returns the polycurve subdomain assigned to a segment curve.
: Returns - The polycurve subdomain assigned to a segment curve. 
     Returns Interval.Unset if segment_index < 0 or segment_index >= Count().

int SegmentIndex(double polycurveParameter)
: Finds the segment used for evaluation at polycurve_parameter.
: Returns - Index of the segment used for evaluation at polycurve_parameter. 
     If polycurve_parameter < Domain.Min(), then 0 is returned. 
     If polycurve_parameter > Domain.Max(), then Count()-1 is returned.

int SegmentIndexes(Interval subdomain,int segmentIndex0,int segmentIndex1)
: Finds the segments that overlap the Polycurve sub domain.
: Returns - Number of segments that overlap the subdomain.
