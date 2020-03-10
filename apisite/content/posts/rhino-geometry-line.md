---
title: "Rhino.Geometry.Line"
draft: false
---

## static !=
- (summary) 
     Determines whether two lines have different values.
     
- (since) 5.0
## static ==
- (summary) 
     Determines whether two lines have the same value.
     
- (since) 5.0
# Constructors
## Rhino.Geometry.Line(double x0,double y0,double z0,double x1,double y1,double z1)
- (summary) 
     Constructs a new line segment between two points.
     
- (since) 5.0
## Rhino.Geometry.Line(Point3d from,Point3d to)
- (summary) 
     Constructs a new line segment between two points.
     
- (since) 5.0
## Rhino.Geometry.Line(Point3d start,Vector3d span)
- (summary) 
     Constructs a new line segment from start point and span vector.
     
- (since) 5.0
## Rhino.Geometry.Line(Point3d start,Vector3d direction,double length)
- (summary) 
     Constructs a new line segment from start point, direction and length.
     
- (since) 5.0
# Properties
## static Line Unset
- (summary) 
     Gets a line segment which has  end points.
     
- (since) 5.0
## BoundingBox BoundingBox
- (summary) 
     Gets the line's 3d axis aligned bounding box.
     
- (since) 5.0
## Vector3d Direction
- (summary) 
     Gets the direction of this line segment. 
     The length of the direction vector equals the length of 
     the line segment.
     
- (since) 5.0
## Point3d From
- (summary) 
     Start point of line segment.
     
- (since) 5.0
## double FromX
- (summary) 
     Gets or sets the X coordinate of the line From point.
     
- (since) 5.0
## double FromY
- (summary) 
     Gets or sets the Y coordinate of the line From point.
     
- (since) 5.0
## double FromZ
- (summary) 
     Gets or sets the Z coordinate of the line From point.
     
- (since) 5.0
## bool IsValid
- (summary) 
     Gets a value indicating whether or not this line is valid. 
     Valid lines must have valid start and end points.
     
- (since) 5.0
## double Length
- (summary) 
     Gets or sets the length of this line segment. 
     Note that a negative length will invert the line segment without 
     making the actual length negative. The line From point will remain fixed 
     when a new Length is set.
     
- (since) 5.0
## Point3d To
- (summary) 
     End point of line segment.
     
- (since) 5.0
## double ToX
- (summary) 
     Gets or sets the X coordinate of the line To point.
     
- (since) 5.0
## double ToY
- (summary) 
     Gets or sets the Y coordinate of the line To point.
     
- (since) 5.0
## double ToZ
- (summary) 
     Gets or sets the Z coordinate of the line To point.
     
- (since) 5.0
## Vector3d UnitTangent
- (summary) 
     Gets the tangent of the line segment. 
     Note that tangent vectors are always unit vectors.
     
- (since) 5.0
# Methods
## static bool TryCreateBetweenCurves(Curve curve0,Curve curve1,double t0,double t1,bool perpendicular0,bool perpendicular1,Line line)
- (summary) 
     Creates a line segment between a pair of curves such that the line segment is either tangent or perpendicular to each of the curves.
     
- (since) 5.2
- (returns) bool This is some return comment
## static bool TryFitLineToPoints(IEnumerable<Point3d> points,Line fitLine)
- (summary) 
     Attempt to fit a line through a set of points.
     
- (since) 5.0
- (returns) bool This is some return comment
## double ClosestParameter(Point3d testPoint)
- (summary) 
     Finds the parameter on the infinite line segment that is closest to a test point.
     
- (since) 5.0
- (returns) double This is some return comment
## Point3d ClosestPoint(Point3d testPoint,bool limitToFiniteSegment)
- (summary) 
     Finds the point on the (in)finite line segment that is closest to a test point.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## double DistanceTo(Point3d testPoint,bool limitToFiniteSegment)
- (summary) 
     Compute the shortest distance between this line segment and a test point.
     
- (since) 5.0
- (returns) double This is some return comment
## bool EpsilonEquals(Line other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## bool Equals(Line other)
- (summary) 
     Determines whether a line has the same value as this line.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Equals(object obj)
- (summary) 
     Determines whether an object is a line that has the same value as this line.
     
- (since) (unknown)
- (returns) bool This is some return comment
## bool Extend(double startLength,double endLength)
- (summary) 
     Extend the line by custom distances on both sides.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ExtendThroughBox(BoundingBox box)
- (summary) 
     Ensure the line extends all the way through a box. 
     Note, this does not result in the shortest possible line 
     that overlaps the box.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ExtendThroughBox(BoundingBox box,double additionalLength)
- (summary) 
     Ensure the line extends all the way through a box. 
     Note, this does not result in the shortest possible line that overlaps the box.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ExtendThroughBox(Box box)
- (summary) 
     Ensure the line extends all the way through a box. 
     Note, this does not result in the shortest possible line that overlaps the box.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ExtendThroughBox(Box box,double additionalLength)
- (summary) 
     Ensure the line extends all the way through a box. 
     Note, this does not result in the shortest possible line that overlaps the box.
     
- (since) 5.0
- (returns) bool This is some return comment
## void Flip()
- (summary) 
     Flip the endpoints of the line segment.
     
- (since) 5.0
- (returns) void This is some return comment
## int GetHashCode()
- (summary) 
     Computes a hash number that represents this line.
     
- (since) (unknown)
- (returns) int This is some return comment
## double MaximumDistanceTo(Line testLine)
- (summary) 
     Finds the largest distance between this line as a finite segment
     and another finite segment.
     
- (since) 5.0
- (returns) double This is some return comment
## double MaximumDistanceTo(Point3d testPoint)
- (summary) 
     Finds the largest distance between this line as a finite segment
     and a test point.
     
- (since) 5.0
- (returns) double This is some return comment
## double MinimumDistanceTo(Line testLine)
- (summary) 
     Finds the shortest distance between this line as a finite segment
     and another finite segment.
     
- (since) 5.0
- (returns) double This is some return comment
## double MinimumDistanceTo(Point3d testPoint)
- (summary) 
     Finds the shortest distance between this line as a finite segment
     and a test point.
     
- (since) 5.0
- (returns) double This is some return comment
## Point3d PointAt(double t)
- (summary) 
     Evaluates the line at the specified parameter.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## Point3d PointAtLength(double distance)
- (summary) 
     Computes a point located at a specific metric distance from the line origin ().
     If line start and end coincide, then the start point is always returned.
- (since) 6.0
- (returns) Point3d This is some return comment
## NurbsCurve ToNurbsCurve()
- (summary) 
     Constructs a nurbs curve representation of this line. 
     This amounts to the same as calling NurbsCurve.CreateFromLine().
     
- (since) 5.0
- (returns) NurbsCurve This is some return comment
## string ToString()
- (summary) 
     Constructs the string representation of this line, in the form "From,To".
     
- (since) (unknown)
- (returns) string This is some return comment
## string ToString(string format,IFormatProvider formatProvider)
- (summary) 
- (since) 7.0
- (returns) string This is some return comment
## bool Transform(Transform xform)
- (summary) 
     Transform the line using a Transformation matrix.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetPlane(Plane plane)
- (summary) 
     Gets a plane that contains the line. The origin of the plane is at the start of the line.
     If possible, a plane parallel to the world xy, yz, or zx plane is returned.
     
- (since) 5.0
- (returns) bool This is some return comment
