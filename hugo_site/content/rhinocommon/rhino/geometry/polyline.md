---
title: "Polyline"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents an ordered set of points connected by linear segments.
   Polylines are closed if start and end points coincide.
```cs
[Serializable]
public class Polyline : Rhino.Collections.Point3dList, ICloneable
```
## Constructors

Polyline()
: Initializes a new empty polyline.

Polyline(IEnumerable<Point3d> collection)
: Initializes a new polyline from a collection of points.

Polyline(int initialCapacity)
: Initializes a new empty polyline with an initial capacity.
## Properties

bool IsClosed
: Gets a value that indicates whether this polyline is closed. 
     The polyline is considered to be closed if its start is 
     identical to its endpoint.

bool IsValid
: Gets a value that indicates whether this polyline is valid. 
     Valid polylines have at least one segment, no Invalid points and no zero length segments.Closed polylines with only two segments are also not considered valid.

double Length
: Gets the total length of the polyline.

int SegmentCount
: Gets the number of segments for this polyline.
## Methods

static Polyline CreateCircumscribedPolygon(Circle circle,int sideCount)
: Create a regular polygon circumscribe about a circle. The midpoints of the polygon's edges will be tanget to the circle.
: Returns - A closed polyline if successful, None otherwise.
: since 6.10

static Polyline CreateInscribedPolygon(Circle circle,int sideCount)
: Create a regular polygon inscribed in a circle. The vertices of the polygon will be on the circle.
: Returns - A closed polyline if successful, None otherwise.
: since 6.10

static Polyline CreateStarPolygon(Circle circle,double radius,int cornerCount)
: Create a regular star polygon. The star begins at circle.PointAt(0) and the vertices
     alternate between being on circle and begin on a concentric circle of other_radius.
: Returns - A closed polyline if successful, None otherwise.
: since 6.10

Polyline[] BreakAtAngles(double angle)
: Breaks this polyline into sections at sharp kinks. 
     Closed polylines will also be broken at the first and last vertex.
: Returns - An array of polyline segments, or None on error.

[Point3d](/rhinocommon/rhino/geometry/point3d/) CenterPoint()
: Compute the center point of the polyline as the weighted average of all segments.
: Returns - The weighted average of all segments.

double ClosestParameter(Point3d testPoint)
: Gets the parameter along the polyline which is closest to a test-point.
: Returns - The parameter along the polyline closest to testPoint.

[Point3d](/rhinocommon/rhino/geometry/point3d/) ClosestPoint(Point3d testPoint)
: Gets the point on the polyline which is closest to a test-point.
: Returns - The point on the polyline closest to testPoint.

int CollapseShortSegments(double tolerance)
: Collapses all segments until none are shorter than tolerance. 
     This function is significantly slower than DeleteShortSegments, 
     since it recursively operates on the shortest segment. 
     When a segment is collapsed the end-points are placed in the center of the segment.
: Returns - The number of segments that were collapsed.

int DeleteShortSegments(double tolerance)
: Removes all points that are closer than tolerance to the previous point. 
     Start and end points are left intact.
: Returns - Number of points (and segments) removed.

Polyline Duplicate()
: Returns a deep copy of this polyline instance.
: Returns - The duplicated polyline.
: since 6.0

[Line](/rhinocommon/rhino/geometry/line/)[] GetSegments()
: Constructs an array of line segments that make up the entire polyline.
: Returns - An array of line segments or None if the polyline contains fewer than 2 points.

bool IsClosedWithinTolerance(double tolerance)
: Determines whether the polyline is closed, provided a tolerance value.
: Returns - True if the polyline is closed to within tolerance, False otherwise.

int MergeColinearSegments(double angleTolerance,bool includeSeam)
: Merge co-linear consecutive segments in a polyline.
     This method will automatically remove any zero-length segments as well.
: Returns - Number of segments removed from the entire polyline.
: since 6.3

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(double t)
: Gets the point on the polyline at the given parameter. 
     The integer part of the parameter indicates the index of the segment.
: Returns - The point on the polyline at t.

int ReduceSegments(double tolerance)
: Constructs a reduction of this polyline by recursively removing the least significant segments.
: Returns - The number of vertices that disappeared due to reduction.

[Line](/rhinocommon/rhino/geometry/line/) SegmentAt(int index)
: Gets the line segment at the given index.
: Returns - Line segment at index or Line.Unset on failure.

bool Smooth(double amount)
: Smoothens the polyline segments by averaging adjacent vertices. 
     Smoothing requires a polyline with exclusively valid vertices.
: Returns - True on success, False on failure.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) TangentAt(double t)
: Gets the unit tangent vector along the polyline at the given parameter. 
     The integer part of the parameter indicates the index of the segment.
: Returns - The tangent along the polyline at t.

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) ToNurbsCurve()
: Constructs a nurbs curve representation of this polyline.
: Returns - A Nurbs curve shaped like this polyline or None on failure.

[PolylineCurve](/rhinocommon/rhino/geometry/polylinecurve/) ToPolylineCurve()
: Constructs a polyline curve representation of this polyline.
: Returns - A curve shaped like this polyline or None on failure.
: since 6.0

[MeshFace](/rhinocommon/rhino/geometry/meshface/)[] TriangulateClosedPolyline()
: Attempts to create a list of triangles which represent a
     triangulation of a closed polyline

Polyline Trim(Interval domain)
: Constructs a polyline out of a parameter subdomain in this curve.
: Returns - The polyline as defined by the subdomain, or None on failure.
