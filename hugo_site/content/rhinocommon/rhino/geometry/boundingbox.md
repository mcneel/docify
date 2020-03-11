---
title: "BoundingBox"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the value of two points in a bounding box 
   defined by the two extreme corner points.
   This box is therefore aligned to the world X, Y and Z axes.
## Constructors

BoundingBox(double minX,double minY,double minZ,double maxX,double maxY,double maxZ)
: Constructs a boundingbox from numeric extremes.

BoundingBox(IEnumerable<Point3d> points)
: Constructs a boundingbox from a collection of points.

BoundingBox(IEnumerable<Point3d> points,Transform xform)
: Constructs a boundingbox from a collection of points.
: since 6.0

BoundingBox(Point3d min,Point3d max)
: Constructs a new boundingbox from two corner points.
## Properties

static BoundingBox Empty
: Gets an [Empty] boundingbox. An Empty box is an invalid structure that has negative width.

static BoundingBox Unset
: Gets a boundingbox that has Unset coordinates for Min and Max.

double Area
: Gets the area of this BoundingBox.
: since 6.0

[Point3d](/rhinocommon/rhino/geometry/point3d/) Center
: Gets the point in the center of the boundingbox.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Diagonal
: Gets the diagonal vector of this BoundingBox. 
     The diagonal connects the Min and Max points.

bool IsValid
: Gets a value that indicates whether or not this boundingbox is valid. 
     Empty boxes are not valid, and neither are boxes with unset points.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Max
: Gets or sets the point in the maximal corner.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Min
: Gets or sets the point in the minimal corner.

double Volume
: Gets the volume of this BoundingBox.
: since 6.0
## Methods

static BoundingBox Intersection(BoundingBox a,BoundingBox b)
: Computes the intersection of two bounding boxes.
: Returns - The intersection bounding box.

static BoundingBox Union(BoundingBox a,BoundingBox b)
: Returns a new BoundingBox that represents the union of boxes a and b.
: Returns - The BoundingBox that contains both a and b.

static BoundingBox Union(BoundingBox box,Point3d point)
: Returns a new BoundingBox that represents the union of a bounding box and a point.
: Returns - The BoundingBox that contains both the box and the point.

[Point3d](/rhinocommon/rhino/geometry/point3d/) ClosestPoint(Point3d point)
: Finds the closest point on or in the boundingbox.
: Returns - The point on or in the box that is closest to the sample point.

[Point3d](/rhinocommon/rhino/geometry/point3d/) ClosestPoint(Point3d point,bool includeInterior)
: Finds the closest point on or in the boundingbox.
: Returns - The point on or in the box that is closest to the sample point.

bool Contains(BoundingBox box)
: Determines whether this boundingbox contains another boundingbox.
     This is the same as calling Contains(box,false).
: Returns - True if the box is on the inside of this boundingbox, or is coincident with the surface of it.

bool Contains(BoundingBox box,bool strict)
: Determines whether this boundingbox contains another boundingbox.
     The user can choose how to treat boundingboxes with coincidents surfaces.
: Returns - True if the box is (strictly) on the inside of this BoundingBox.

bool Contains(Point3d point)
: Tests a point for boundingbox inclusion. This is the same as calling Contains(point, false)
: Returns - True if the point is on the inside of or coincident with this boundingbox; otherwise false.

bool Contains(Point3d point,bool strict)
: Tests a point for BoundingBox inclusion.
: Returns - If 'strict' is affirmative, True if the point is inside this boundingbox; False if it is on the surface or outside.If 'strict' is negative, True if the point is on the surface or on the inside of the boundingbox; otherwise false.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Corner(bool minX,bool minY,bool minZ)
: Gets one of the eight corners of the box.
: Returns - The requested point.

[Point3d](/rhinocommon/rhino/geometry/point3d/) FurthestPoint(Point3d point)
: Finds the furthest point on the Box.
: Returns - The point on the box that is furthest from the sample point.

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] GetCorners()
: Gets an array filled with the 8 corner points of this box.
     See remarks for the return order.
: Returns - An array of 8 corners.

[Line](/rhinocommon/rhino/geometry/line/)[] GetEdges()
: Gets an array of the 12 edges of this box.
: Returns - If the boundingbox IsValid, the 12 edges; otherwise, null.

void Inflate(double amount)
: Inflates the box with equal amounts in all directions. 
     Inflating with negative amounts may result in decreasing boxes. 
     Invalid boxes can not be inflated.

void Inflate(double xAmount,double yAmount,double zAmount)
: Inflate the box with custom amounts in all directions. 
     Inflating with negative amounts may result in decreasing boxes. 
     InValid boxes can not be inflated.

int IsDegenerate(double tolerance)
: Determines whether a bounding box is degenerate (flat) in one or more directions.
: Returns - 0 = box is not degenerate
     1 = box is a rectangle (degenerate in one direction).
     2 = box is a line (degenerate in two directions).
     3 = box is a point (degenerate in three directions)
     4 = box is not valid.

bool MakeValid()
: Ensures that the box is defined in an increasing fashion along X, Y and Z axes.
     If the Min or Max points are unset, this function will not change the box.
: Returns - True if the box was made valid, False if the box could not be made valid.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(double tx,double ty,double tz)
: Evaluates the boundingbox with normalized parameters.
     The box has idealized side length of 1x1x1.
: Returns - The point at the {tx, ty, tz} parameters.

[Brep](/rhinocommon/rhino/geometry/brep/) ToBrep()
: Constructs a  representation of this boundingbox.
: Returns - If this operation is sucessfull, a Brep representation of this box; otherwise null.

string ToString()
: Constructs the string representation of this aligned boundingbox.
: Returns - Text.
: since (unknown)

bool Transform(Transform xform)
: Updates this boundingbox to be the smallest axis aligned
     boundingbox that contains the transformed result of its 8 original corner
     points.
: Returns - True if this operation is sucessfull; otherwise false.

void Union(BoundingBox other)
: Updates this BoundingBox to represent the union of itself and another box.

void Union(Point3d point)
: Updates this BoundingBox to represent the union of itself and a point.
