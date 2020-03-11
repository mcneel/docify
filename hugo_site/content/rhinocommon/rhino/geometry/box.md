---
title: "Box"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the value of a plane and three intervals in
   an orthogonal, oriented box that is not necessarily parallel to the world Y, X, Z axes.
## Constructors

Box(BoundingBox bbox)
: Initializes a new Box that mimics a BoundingBox struct. 
     The orientation plane of the Box is coincident with the 
     World XY plane.

Box(Plane basePlane,BoundingBox boundingbox)
: Initializes a world aligned box from a base plane and a boundingbox.

Box(Plane basePlane,GeometryBase geometry)
: Initializes a box that contains a generic piece of geometry.
     This box will be aligned with an arbitrary plane.

Box(Plane basePlane,IEnumerable<Point3d> points)
: Initializes the smallest box that contains a set of points.

Box(Plane basePlane,Interval xSize,Interval ySize,Interval zSize)
: Initializes a new box from a base Plane and three Intervals.
## Properties

static Box Empty
: Empty Box. Empty boxes are considered to be invalid.

static Box Unset
: Gets a Box whose base plane and axis dimensions are all Unset.

double Area
: Gets the total surface area of this box.

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox
: Gets the world axis aligned Bounding box for this oriented box.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Center
: Gets the point that is in the center of the box.

bool IsValid
: Gets the validity of this Box. Boxes are invalid when the base plane or any of 
     the dimension intervals are invalid or decreasing.

[Plane](/rhinocommon/rhino/geometry/plane/) Plane
: Gets or sets the orientation plane for this Box.

double Volume
: Gets the total volume of this box.

[Interval](/rhinocommon/rhino/geometry/interval/) X
: Gets or sets the Interval that describes the dimension of the 
     Box along the orientation plane X-Axis. Otherwise known as the Width of the Box.

[Interval](/rhinocommon/rhino/geometry/interval/) Y
: Gets or sets the Interval that describes the dimension of the 
     Box along the orientation plane Y-Axis. Otherwise known as the Depth of the Box.

[Interval](/rhinocommon/rhino/geometry/interval/) Z
: Gets or sets the Interval that describes the dimension of the 
     Box along the orientation plane Z-Axis. Otherwise known as the Height of the Box.
## Methods

[Point3d](/rhinocommon/rhino/geometry/point3d/) ClosestPoint(Point3d point)
: Finds the closest point on or in the Box. The box should be Valid for this to work.
: Returns - The point on or in the box that is closest to the sample point.

bool Contains(BoundingBox box)
: Test a boundingbox for Box inclusion. This is the same as calling Contains(box,false)
: Returns - True if the box is on the inside of or coincident with this Box.

bool Contains(BoundingBox box,bool strict)
: Test a boundingbox for Box inclusion.
: Returns - True if the box is (strictly) on the inside of this Box.

bool Contains(Box box)
: Test a box for Box inclusion. This is the same as calling Contains(box,false)
: Returns - True if the box is on the inside of or coincident with this Box.

bool Contains(Box box,bool strict)
: Test a box for Box inclusion.
: Returns - True if the box is (strictly) on the inside of this Box.

bool Contains(Point3d point)
: Determines whether a point is included in this box. This is the same as calling Contains(point,false)
: Returns - True if the point is on the inside of or coincident with this Box.

bool Contains(Point3d point,bool strict)
: Determines whether a point is included in this box.
: Returns - True if the point is (strictly) on the inside of this Box.

bool EpsilonEquals(Box other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

[Point3d](/rhinocommon/rhino/geometry/point3d/) FurthestPoint(Point3d point)
: Finds the furthest point on the Box. The Box should be Valid for this to work properly.
: Returns - The point on the box that is furthest from the sample point.

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] GetCorners()
: Gets an array of the 8 corner points of this box.
: Returns - An array of 8 corners.

void Inflate(double amount)
: Inflates the box by a given offset in each direction.
     Inflating with negative amounts may result in decreasing boxes. 
     InValid boxes cannot be inflated.

void Inflate(double xAmount,double yAmount,double zAmount)
: Inflates the box by a given offset in each direction.
     Inflating with negative amounts may result in decreasing boxes.
     InValid boxes cannot be inflated.

bool MakeValid()
: Attempts to make the Box valid. This is not always possible.
: Returns - True if the box was made valid, or if it was valid to begin with. 
     False if the box remains in a differently abled state.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(double x,double y,double z)
: Evaluates the box volume at the given unitized parameters.
     The box has idealized side length of 1x1x1.
: Returns - The point at (x,y,z).

void RepositionBasePlane(Point3d origin)
: Repositions the origin of the Base plane for this box without affecting 
     the physical dimensions.

[Brep](/rhinocommon/rhino/geometry/brep/) ToBrep()
: Constructs a brep representation of this box.
: Returns - A Brep representation of this box or null.

[Extrusion](/rhinocommon/rhino/geometry/extrusion/) ToExtrusion()
: Constructs an extrusion representation of this box.
: Returns - An Extrusion representation of this box or null.
: since 6.0

bool Transform(Transform xform)
: Transforms this Box using a Transformation matrix. If the Transform does not preserve 
     Similarity, the dimensions of the resulting box cannot be trusted.
: Returns - True if the Box was successfully transformed, False if otherwise.

void Union(Point3d point)
: Constructs a union between this Box and the given point. 
     This grows the box in directions so it contains the point.
