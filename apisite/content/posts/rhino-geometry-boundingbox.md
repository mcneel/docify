---
title: "Rhino.Geometry.BoundingBox"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Geometry.BoundingBox(double minX,double minY,double minZ,double maxX,double maxY,double maxZ)
- (summary) 
     Constructs a boundingbox from numeric extremes.
     
- (since) 5.0
## Rhino.Geometry.BoundingBox(IEnumerable<Point3d> points)
- (summary) 
     Constructs a boundingbox from a collection of points.
     
- (since) 5.0
## Rhino.Geometry.BoundingBox(IEnumerable<Point3d> points,Transform xform)
- (summary) 
     Constructs a boundingbox from a collection of points.
     
- (since) 6.0
## Rhino.Geometry.BoundingBox(Point3d min,Point3d max)
- (summary) 
     Constructs a new boundingbox from two corner points.
     
- (since) 5.0
# Properties
## static BoundingBox Empty
- (summary) 
     Gets an [Empty] boundingbox. An Empty box is an invalid structure that has negative width.
     
- (since) 5.0
## static BoundingBox Unset
- (summary) 
     Gets a boundingbox that has Unset coordinates for Min and Max.
     
- (since) 5.0
## double Area
- (summary) 
     Gets the area of this BoundingBox. 
     
- (since) 6.0
## Point3d Center
- (summary) 
     Gets the point in the center of the boundingbox.
     
- (since) 5.0
## Vector3d Diagonal
- (summary) 
     Gets the diagonal vector of this BoundingBox. 
     The diagonal connects the Min and Max points. 
     
- (since) 5.0
## bool IsValid
- (summary) 
     Gets a value that indicates whether or not this boundingbox is valid. 
     Empty boxes are not valid, and neither are boxes with unset points.
     
- (since) 5.0
## Point3d Max
- (summary) 
     Gets or sets the point in the maximal corner.
     
- (since) 5.0
## Point3d Min
- (summary) 
     Gets or sets the point in the minimal corner.
     
- (since) 5.0
## double Volume
- (summary) 
     Gets the volume of this BoundingBox. 
     
- (since) 6.0
# Methods
## static BoundingBox Intersection(BoundingBox a,BoundingBox b)
- (summary) 
     Computes the intersection of two bounding boxes.
     
- (since) 5.0
- (returns) BoundingBox This is some return comment
## static BoundingBox Union(BoundingBox a,BoundingBox b)
- (summary) 
     Returns a new BoundingBox that represents the union of boxes a and b.
     
- (since) 5.0
- (returns) BoundingBox This is some return comment
## static BoundingBox Union(BoundingBox box,Point3d point)
- (summary) 
     Returns a new BoundingBox that represents the union of a bounding box and a point.
     
- (since) 5.0
- (returns) BoundingBox This is some return comment
## Point3d ClosestPoint(Point3d point)
- (summary) 
     Finds the closest point on or in the boundingbox.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## Point3d ClosestPoint(Point3d point,bool includeInterior)
- (summary) 
     Finds the closest point on or in the boundingbox.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## bool Contains(BoundingBox box)
- (summary) 
     Determines whether this boundingbox contains another boundingbox.
     This is the same as calling Contains(box,false).
- (since) 5.0
- (returns) bool This is some return comment
## bool Contains(BoundingBox box,bool strict)
- (summary) 
     Determines whether this boundingbox contains another boundingbox.
     The user can choose how to treat boundingboxes with coincidents surfaces.
- (since) 5.0
- (returns) bool This is some return comment
## bool Contains(Point3d point)
- (summary) 
     Tests a point for boundingbox inclusion. This is the same as calling Contains(point, false)
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Contains(Point3d point,bool strict)
- (summary) 
     Tests a point for BoundingBox inclusion.
     
- (since) 5.0
- (returns) bool This is some return comment
## Point3d Corner(bool minX,bool minY,bool minZ)
- (summary) 
     Gets one of the eight corners of the box.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## Point3d FurthestPoint(Point3d point)
- (summary) 
     Finds the furthest point on the Box.
     
- (since) 5.0
- (returns) Point3d This is some return comment
## Point3d[] GetCorners()
- (summary) 
     Gets an array filled with the 8 corner points of this box.
     See remarks for the return order.
- (since) 5.0
- (returns) Point3d[] This is some return comment
## Line[] GetEdges()
- (summary) 
     Gets an array of the 12 edges of this box.
     
- (since) 5.0
- (returns) Line[] This is some return comment
## void Inflate(double amount)
- (summary) 
     Inflates the box with equal amounts in all directions. 
     Inflating with negative amounts may result in decreasing boxes. 
     Invalid boxes can not be inflated.
- (since) 5.0
- (returns) void This is some return comment
## void Inflate(double xAmount,double yAmount,double zAmount)
- (summary) 
     Inflate the box with custom amounts in all directions. 
     Inflating with negative amounts may result in decreasing boxes. 
     InValid boxes can not be inflated.
- (since) 5.0
- (returns) void This is some return comment
## int IsDegenerate(double tolerance)
- (summary) 
     Determines whether a bounding box is degenerate (flat) in one or more directions.
     
- (since) 5.0
- (returns) int This is some return comment
## bool MakeValid()
- (summary) 
     Ensures that the box is defined in an increasing fashion along X, Y and Z axes.
     If the Min or Max points are unset, this function will not change the box.
     
- (since) 5.0
- (returns) bool This is some return comment
## Point3d PointAt(double tx,double ty,double tz)
- (summary) 
     Evaluates the boundingbox with normalized parameters.
     The box has idealized side length of 1x1x1.
- (since) 5.0
- (returns) Point3d This is some return comment
## Brep ToBrep()
- (summary) 
     Constructs a  representation of this boundingbox.
     
- (since) 5.0
- (returns) Brep This is some return comment
## string ToString()
- (summary) 
     Constructs the string representation of this aligned boundingbox.
     
- (since) (unknown)
- (returns) string This is some return comment
## bool Transform(Transform xform)
- (summary) 
     Updates this boundingbox to be the smallest axis aligned
     boundingbox that contains the transformed result of its 8 original corner
     points.
     
- (since) 5.0
- (returns) bool This is some return comment
## void Union(BoundingBox other)
- (summary) 
     Updates this BoundingBox to represent the union of itself and another box.
     
- (since) 5.0
- (returns) void This is some return comment
## void Union(Point3d point)
- (summary) 
     Updates this BoundingBox to represent the union of itself and a point.
     
- (since) 5.0
- (returns) void This is some return comment
