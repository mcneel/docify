---
title: "Box"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents the value of a plane and three intervals in
   an orthogonal, oriented box that is not necessarily parallel to the world Y, X, Z axes.
   
## Constructors
#### Rhino.Geometry.Box(BoundingBox bbox)
- (summary) 
     Initializes a new Box that mimics a BoundingBox struct. 
     The orientation plane of the Box is coincident with the 
     World XY plane.
- (since) 5.0
#### Rhino.Geometry.Box(Plane basePlane,BoundingBox boundingbox)
- (summary) 
     Initializes a world aligned box from a base plane and a boundingbox.
     
- (since) 5.0
#### Rhino.Geometry.Box(Plane basePlane,GeometryBase geometry)
- (summary) 
     Initializes a box that contains a generic piece of geometry.
     This box will be aligned with an arbitrary plane.
     
- (since) 5.0
#### Rhino.Geometry.Box(Plane basePlane,IEnumerable<Point3d> points)
- (summary) 
     Initializes the smallest box that contains a set of points.
     
- (since) 5.0
#### Rhino.Geometry.Box(Plane basePlane,Interval xSize,Interval ySize,Interval zSize)
- (summary) 
     Initializes a new box from a base Plane and three Intervals.
     
- (since) 5.0
## Properties
#### static Box Empty
- (summary) 
     Empty Box. Empty boxes are considered to be invalid.
     
- (since) 5.0
#### static Box Unset
- (summary) 
     Gets a Box whose base plane and axis dimensions are all Unset.
     
- (since) 5.0
#### double Area
- (summary) 
     Gets the total surface area of this box.
     
- (since) 5.0
#### BoundingBox BoundingBox
- (summary) 
     Gets the world axis aligned Bounding box for this oriented box.
     
- (since) 5.0
#### Point3d Center
- (summary) 
     Gets the point that is in the center of the box.
     
- (since) 5.0
#### bool IsValid
- (summary) 
     Gets the validity of this Box. Boxes are invalid when the base plane or any of 
     the dimension intervals are invalid or decreasing.
     
- (since) 5.0
#### Plane Plane
- (summary) 
     Gets or sets the orientation plane for this Box.
     
- (since) 5.0
#### double Volume
- (summary) 
     Gets the total volume of this box.
     
- (since) 5.0
#### Interval X
- (summary) 
     Gets or sets the Interval that describes the dimension of the 
     Box along the orientation plane X-Axis. Otherwise known as the Width of the Box.
     
- (since) 5.0
#### Interval Y
- (summary) 
     Gets or sets the Interval that describes the dimension of the 
     Box along the orientation plane Y-Axis. Otherwise known as the Depth of the Box.
     
- (since) 5.0
#### Interval Z
- (summary) 
     Gets or sets the Interval that describes the dimension of the 
     Box along the orientation plane Z-Axis. Otherwise known as the Height of the Box.
     
- (since) 5.0
## Methods
#### Point3d ClosestPoint(Point3d point)
- (summary) 
     Finds the closest point on or in the Box. The box should be Valid for this to work.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### bool Contains(BoundingBox box)
- (summary) 
     Test a boundingbox for Box inclusion. This is the same as calling Contains(box,false)
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Contains(BoundingBox box,bool strict)
- (summary) 
     Test a boundingbox for Box inclusion.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Contains(Box box)
- (summary) 
     Test a box for Box inclusion. This is the same as calling Contains(box,false)
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Contains(Box box,bool strict)
- (summary) 
     Test a box for Box inclusion.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Contains(Point3d point)
- (summary) 
     Determines whether a point is included in this box. This is the same as calling Contains(point,false)
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Contains(Point3d point,bool strict)
- (summary) 
     Determines whether a point is included in this box. 
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool EpsilonEquals(Box other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
#### Point3d FurthestPoint(Point3d point)
- (summary) 
     Finds the furthest point on the Box. The Box should be Valid for this to work properly.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### Point3d[] GetCorners()
- (summary) 
     Gets an array of the 8 corner points of this box.
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
#### void Inflate(double amount)
- (summary) 
     Inflates the box by a given offset in each direction.
     Inflating with negative amounts may result in decreasing boxes. 
     InValid boxes cannot be inflated.
     
- (since) 5.0
- (returns) void This is some return comment
#### void Inflate(double xAmount,double yAmount,double zAmount)
- (summary) 
     Inflates the box by a given offset in each direction.
     Inflating with negative amounts may result in decreasing boxes.
     InValid boxes cannot be inflated.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool MakeValid()
- (summary) 
     Attempts to make the Box valid. This is not always possible.
     
- (since) 5.0
- (returns) bool This is some return comment
#### Point3d PointAt(double x,double y,double z)
- (summary) 
     Evaluates the box volume at the given unitized parameters.
     The box has idealized side length of 1x1x1.
- (since) 5.0
- (returns) Point3d This is some return comment
#### void RepositionBasePlane(Point3d origin)
- (summary) 
     Repositions the origin of the Base plane for this box without affecting 
     the physical dimensions.
     
- (since) 5.0
- (returns) void This is some return comment
#### Brep ToBrep()
- (summary) 
     Constructs a brep representation of this box.
     
- (since) 5.0
- (returns) Brep This is some return comment
#### Extrusion ToExtrusion()
- (summary) 
     Constructs an extrusion representation of this box.
     
- (since) 6.0
- (returns) Extrusion This is some return comment
#### bool Transform(Transform xform)
- (summary) 
     Transforms this Box using a Transformation matrix. If the Transform does not preserve 
     Similarity, the dimensions of the resulting box cannot be trusted.
     
- (since) 5.0
- (returns) bool This is some return comment
#### void Union(Point3d point)
- (summary) 
     Constructs a union between this Box and the given point. 
     This grows the box in directions so it contains the point.
     
- (since) 5.0
- (returns) void This is some return comment
