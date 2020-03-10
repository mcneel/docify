---
title: "Rhino.Geometry.Polyline"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Geometry.Polyline()
- (summary) 
     Initializes a new empty polyline.
     
- (since) 5.0
## Rhino.Geometry.Polyline(IEnumerable<Point3d> collection)
- (summary) 
     Initializes a new polyline from a collection of points.
     
- (since) 5.0
## Rhino.Geometry.Polyline(int initialCapacity)
- (summary) 
     Initializes a new empty polyline with an initial capacity.
     
- (since) 5.0
# Properties
## bool IsClosed
- (summary) 
     Gets a value that indicates whether this polyline is closed. 
     The polyline is considered to be closed if its start is 
     identical to its endpoint.
- (since) 5.0
## bool IsValid
- (summary) 
     Gets a value that indicates whether this polyline is valid. 
     Valid polylines have at least one segment, no Invalid points and no zero length segments.Closed polylines with only two segments are also not considered valid.
- (since) 5.0
## double Length
- (summary) 
     Gets the total length of the polyline.
     
- (since) 5.0
## int SegmentCount
- (summary) 
     Gets the number of segments for this polyline.
     
- (since) 5.0
# Methods
## static Polyline CreateCircumscribedPolygon(Circle circle,int sideCount)
- (summary) 
     Create a regular polygon circumscribe about a circle. The midpoints of the polygon's edges will be tanget to the circle.
     
- (since) 6.10
- (returns) Polyline This is some return comment
## static Polyline CreateInscribedPolygon(Circle circle,int sideCount)
- (summary) 
     Create a regular polygon inscribed in a circle. The vertices of the polygon will be on the circle.
     
- (since) 6.10
- (returns) Polyline This is some return comment
## static Polyline CreateStarPolygon(Circle circle,double radius,int cornerCount)
- (summary) 
     Create a regular star polygon. The star begins at circle.PointAt(0) and the vertices
     alternate between being on circle and begin on a concentric circle of other_radius.
     
- (since) 6.10
- (returns) Polyline This is some return comment
## Polyline[] BreakAtAngles(double angle)
- (summary) 
     Breaks this polyline into sections at sharp kinks. 
     Closed polylines will also be broken at the first and last vertex.
     
- (since) 5.0
- (returns) Polyline[] This is some return comment
## Point3d CenterPoint()
- (summary) 
     Compute the center point of the polyline as the weighted average of all segments.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## double ClosestParameter(Point3d testPoint)
- (summary) 
     Gets the parameter along the polyline which is closest to a test-point.
     
- (since) 5.0
- (returns) double This is some return comment
## Point3d ClosestPoint(Point3d testPoint)
- (summary) 
     Gets the point on the polyline which is closest to a test-point.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## int CollapseShortSegments(double tolerance)
- (summary) 
     Collapses all segments until none are shorter than tolerance. 
     This function is significantly slower than DeleteShortSegments, 
     since it recursively operates on the shortest segment. 
     When a segment is collapsed the end-points are placed in the center of the segment.
     
- (since) 5.0
- (returns) int This is some return comment
## int DeleteShortSegments(double tolerance)
- (summary) 
     Removes all points that are closer than tolerance to the previous point. 
     Start and end points are left intact.
- (since) 5.0
- (returns) int This is some return comment
## Polyline Duplicate()
- (summary) 
     Returns a deep copy of this polyline instance.
     
- (since) 6.0
- (returns) Polyline This is some return comment
## Line[] GetSegments()
- (summary) 
     Constructs an array of line segments that make up the entire polyline.
     
- (since) 5.0
- (returns) Line[] This is some return comment
## bool IsClosedWithinTolerance(double tolerance)
- (summary) 
     Determines whether the polyline is closed, provided a tolerance value.
     
- (since) 5.0
- (returns) bool This is some return comment
## int MergeColinearSegments(double angleTolerance,bool includeSeam)
- (summary) 
     Merge co-linear consecutive segments in a polyline.
     This method will automatically remove any zero-length segments as well.
     
- (since) 6.3
- (returns) int This is some return comment
## Point3d PointAt(double t)
- (summary) 
     Gets the point on the polyline at the given parameter. 
     The integer part of the parameter indicates the index of the segment.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## int ReduceSegments(double tolerance)
- (summary) 
     Constructs a reduction of this polyline by recursively removing the least significant segments. 
     
- (since) 5.0
- (returns) int This is some return comment
## Line SegmentAt(int index)
- (summary) 
     Gets the line segment at the given index.
     
- (since) 5.0
- (returns) Line This is some return comment
## bool Smooth(double amount)
- (summary) 
     Smoothens the polyline segments by averaging adjacent vertices. 
     Smoothing requires a polyline with exclusively valid vertices.
     
- (since) 5.0
- (returns) bool This is some return comment
## Vector3d TangentAt(double t)
- (summary) 
     Gets the unit tangent vector along the polyline at the given parameter. 
     The integer part of the parameter indicates the index of the segment.
     
- (since) 5.0
- (returns) Vector3d This is some return comment
## NurbsCurve ToNurbsCurve()
- (summary) 
     Constructs a nurbs curve representation of this polyline.
     
- (since) 5.0
- (returns) NurbsCurve This is some return comment
## PolylineCurve ToPolylineCurve()
- (summary) 
     Constructs a polyline curve representation of this polyline.
     
- (since) 6.0
- (returns) PolylineCurve This is some return comment
## MeshFace[] TriangulateClosedPolyline()
- (summary) 
     Attempts to create a list of triangles which represent a
     triangulation of a closed polyline
     
- (since) 5.0
- (returns) MeshFace[] This is some return comment
## Polyline Trim(Interval domain)
- (summary) 
     Constructs a polyline out of a parameter subdomain in this curve.
     
- (since) 5.0
- (returns) Polyline This is some return comment
