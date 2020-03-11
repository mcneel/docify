---
title: "Line"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the value of start and end points in a single line segment.

static !=
: Determines whether two lines have different values.
: Returns - True if a has any coordinate that distinguishes it from b; otherwise false.

static ==
: Determines whether two lines have the same value.
: Returns - True if a has the same coordinates as b; otherwise false.
## Constructors

Line(double x0,double y0,double z0,double x1,double y1,double z1)
: Constructs a new line segment between two points.

Line(Point3d from,Point3d to)
: Constructs a new line segment between two points.

Line(Point3d start,Vector3d span)
: Constructs a new line segment from start point and span vector.

Line(Point3d start,Vector3d direction,double length)
: Constructs a new line segment from start point, direction and length.
## Properties

static Line Unset
: Gets a line segment which has  end points.

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox
: Gets the line's 3d axis aligned bounding box.
: Returns - 3d bounding box.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Direction
: Gets the direction of this line segment. 
     The length of the direction vector equals the length of 
     the line segment.

[Point3d](/rhinocommon/rhino/geometry/point3d/) From
: Start point of line segment.

double FromX
: Gets or sets the X coordinate of the line From point.

double FromY
: Gets or sets the Y coordinate of the line From point.

double FromZ
: Gets or sets the Z coordinate of the line From point.

bool IsValid
: Gets a value indicating whether or not this line is valid. 
     Valid lines must have valid start and end points.

double Length
: Gets or sets the length of this line segment. 
     Note that a negative length will invert the line segment without 
     making the actual length negative. The line From point will remain fixed 
     when a new Length is set.

[Point3d](/rhinocommon/rhino/geometry/point3d/) To
: End point of line segment.

double ToX
: Gets or sets the X coordinate of the line To point.

double ToY
: Gets or sets the Y coordinate of the line To point.

double ToZ
: Gets or sets the Z coordinate of the line To point.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) UnitTangent
: Gets the tangent of the line segment. 
     Note that tangent vectors are always unit vectors.
## Methods

static bool TryCreateBetweenCurves(Curve curve0,Curve curve1,double t0,double t1,bool perpendicular0,bool perpendicular1,Line line)
: Creates a line segment between a pair of curves such that the line segment is either tangent or perpendicular to each of the curves.
: Returns - True on success, False on failure.
: since 5.2

static bool TryFitLineToPoints(IEnumerable<Point3d> points,Line fitLine)
: Attempt to fit a line through a set of points.
: Returns - True on success, False on failure.

double ClosestParameter(Point3d testPoint)
: Finds the parameter on the infinite line segment that is closest to a test point.
: Returns - The parameter on the line that is closest to testPoint.

[Point3d](/rhinocommon/rhino/geometry/point3d/) ClosestPoint(Point3d testPoint,bool limitToFiniteSegment)
: Finds the point on the (in)finite line segment that is closest to a test point.
: Returns - The point on the (in)finite line that is closest to testPoint.

double DistanceTo(Point3d testPoint,bool limitToFiniteSegment)
: Compute the shortest distance between this line segment and a test point.
: Returns - The shortest distance between this line segment and testPoint.

bool EpsilonEquals(Line other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

bool Equals(Line other)
: Determines whether a line has the same value as this line.
: Returns - True if other has the same coordinates as this; otherwise false.

bool Equals(object obj)
: Determines whether an object is a line that has the same value as this line.
: Returns - True if obj is a Line and has the same coordinates as this; otherwise false.
: since (unknown)

bool Extend(double startLength,double endLength)
: Extend the line by custom distances on both sides.
: Returns - True on success, False on failure.

bool ExtendThroughBox(BoundingBox box)
: Ensure the line extends all the way through a box. 
     Note, this does not result in the shortest possible line 
     that overlaps the box.
: Returns - True on success, False on failure.

bool ExtendThroughBox(BoundingBox box,double additionalLength)
: Ensure the line extends all the way through a box. 
     Note, this does not result in the shortest possible line that overlaps the box.
: Returns - True on success, False on failure.

bool ExtendThroughBox(Box box)
: Ensure the line extends all the way through a box. 
     Note, this does not result in the shortest possible line that overlaps the box.
: Returns - True on success, False on failure.

bool ExtendThroughBox(Box box,double additionalLength)
: Ensure the line extends all the way through a box. 
     Note, this does not result in the shortest possible line that overlaps the box.
: Returns - True on success, False on failure.

void Flip()
: Flip the endpoints of the line segment.

int GetHashCode()
: Computes a hash number that represents this line.
: Returns - A number that is not unique to the value of this line.
: since (unknown)

double MaximumDistanceTo(Line testLine)
: Finds the largest distance between this line as a finite segment
     and another finite segment.
: Returns - The maximum distance.

double MaximumDistanceTo(Point3d testPoint)
: Finds the largest distance between this line as a finite segment
     and a test point.
: Returns - The maximum distance.

double MinimumDistanceTo(Line testLine)
: Finds the shortest distance between this line as a finite segment
     and another finite segment.
: Returns - The minimum distance.

double MinimumDistanceTo(Point3d testPoint)
: Finds the shortest distance between this line as a finite segment
     and a test point.
: Returns - The minimum distance.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(double t)
: Evaluates the line at the specified parameter.
: Returns - The point at the specified parameter.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAtLength(double distance)
: Computes a point located at a specific metric distance from the line origin ().
     If line start and end coincide, then the start point is always returned.
: Returns - The newly found point.
: since 6.0

[NurbsCurve](/rhinocommon/rhino/geometry/nurbscurve/) ToNurbsCurve()
: Constructs a nurbs curve representation of this line. 
     This amounts to the same as calling NurbsCurve.CreateFromLine().
: Returns - A nurbs curve representation of this line or None if no such representation could be made.

string ToString()
: Constructs the string representation of this line, in the form "From,To".
: Returns - A text string.
: since (unknown)

string ToString(string format,IFormatProvider formatProvider)
: 
: since 7.0

bool Transform(Transform xform)
: Transform the line using a Transformation matrix.
: Returns - True on success, False on failure.

bool TryGetPlane(Plane plane)
: Gets a plane that contains the line. The origin of the plane is at the start of the line.
     If possible, a plane parallel to the world xy, yz, or zx plane is returned.
: Returns - True on success.
