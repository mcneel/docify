---
title: "Rhino.Geometry.PolyCurve"
draft: false
---

# Constructors
## Rhino.Geometry.PolyCurve()
- (summary) 
     Initializes a new, empty polycurve.
     
- (since) 5.0
# Properties
## bool HasGap
- (summary) 
     This is a quick way to see if the curve has gaps between the sub curve segments. 
     
- (since) 5.0
## bool IsNested
- (summary) 
     Gets a value indicating whether or not a PolyCurve contains nested PolyCurves.
     
- (since) 5.0
## int SegmentCount
- (summary) 
     Gets the number of segments that make up this Polycurve.
     
- (since) 5.0
# Methods
## bool Append(Arc arc)
- (summary) 
     Appends and matches the start of the arc to the end of polycurve. 
     This function will fail if the polycurve is closed or if SegmentCount > 0 and the arc is closed.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Append(Curve curve)
- (summary) 
     Appends and matches the start of the curve to the end of polycurve. 
     This function will fail if the PolyCurve is closed or if SegmentCount > 0 and the new segment is closed.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Append(Line line)
- (summary) 
     Appends and matches the start of the line to the end of polycurve. 
     This function will fail if the polycurve is closed.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool AppendSegment(Curve curve)
- (summary) 
     Appends the curve to the polycurve without changing the new segment's geometry. 
     This function will fail if the PolyCurve is closed or if SegmentCount > 0 and the new segment is closed.
     
- (since) 6.0
- (returns) bool This is some return comment
## Curve CleanUp()
- (summary) 
     Removes any nesting of polycurves. If this polycurve has just a single segment, the segment is returned.
     If, after nest removal, there are adjacent segments which are polylines, they are combined into a single polyline.
     The new curve may have a different domain from this polycurve. If the start and end segments of a closed input are polylines,
     the result may have a different seam location since the start and end segments will be combined.
     
- (since) 7.0
- (returns) Curve This is some return comment
## GeometryBase Duplicate()
- (summary) 
     Duplicates this polycurve.
     When not overridden in a derived class, this calls .
- (since) 5.0
- (returns) GeometryBase This is some return comment
## PolyCurve DuplicatePolyCurve()
- (summary) 
     Duplicates this polycurve.
     This is the same as .
- (since) 5.0
- (returns) PolyCurve This is some return comment
## Curve[] Explode()
- (summary) 
     Explodes this PolyCurve into a list of Curve segments. This will not explode nested polycurves. 
     Call  first if you need all individual segments.
     
- (since) 5.0
- (returns) Curve[] This is some return comment
## double PolyCurveParameter(int segmentIndex,double segmentCurveParameter)
- (summary) 
     Converts a segment curve parameter to a polycurve parameter.
     
- (since) 5.0
- (returns) double This is some return comment
## bool RemoveNesting()
- (summary) 
     Explodes nested polycurve segments and reconstructs this curve from the shattered remains. 
     The result will have not have any PolyCurves as segments but it will have identical 
     locus and parameterization.
     
- (since) 5.0
- (returns) bool This is some return comment
## Curve SegmentCurve(int index)
- (summary) 
     Gets the segment curve at the given index.
     
- (since) 5.0
- (returns) Curve This is some return comment
## double SegmentCurveParameter(double polycurveParameter)
- (summary) 
     Converts a polycurve parameter to a segment curve parameter.
     
- (since) 5.0
- (returns) double This is some return comment
## Interval SegmentDomain(int segmentIndex)
- (summary) 
     Returns the polycurve subdomain assigned to a segment curve.
     
- (since) 5.0
- (returns) Interval This is some return comment
## int SegmentIndex(double polycurveParameter)
- (summary) 
     Finds the segment used for evaluation at polycurve_parameter.
     
- (since) 5.0
- (returns) int This is some return comment
## int SegmentIndexes(Interval subdomain,int segmentIndex0,int segmentIndex1)
- (summary) Finds the segments that overlap the Polycurve sub domain.
- (since) 5.0
- (returns) int This is some return comment
