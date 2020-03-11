---
title: "Sphere"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents the plane and radius values of a sphere.
## Constructors

Sphere(Plane equatorialPlane,double radius)
: Initializes a new sphere given the plane of the equator circle and radius.

Sphere(Point3d center,double radius)
: Initializes a new sphere given center point and radius.
## Properties

static Sphere Unset
: Gets a sphere with invalid members.

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox
: Gets the world aligned boundingbox for this Sphere. 
     If the Sphere is Invalid, an empty box is returned.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Center
: Gets or sets the center point of the sphere.

double Diameter
: Gets or sets the diameter for this sphere.

[Plane](/rhinocommon/rhino/geometry/plane/) EquatorialPlane
: Gets or sets the Equatorial plane for this sphere.
: since 6.0

[Plane](/rhinocommon/rhino/geometry/plane/) EquitorialPlane
: Gets or sets the Equatorial plane for this sphere.

bool IsValid
: Gets a value that indicates whether the sphere is valid.

[Point3d](/rhinocommon/rhino/geometry/point3d/) NorthPole
: Gets the point at the North Pole of the sphere.
     This is the parameterization singularity that can be obtained,
     at V value +Math.Pi/2.

double Radius
: Gets or sets the Radius for this sphere.

[Point3d](/rhinocommon/rhino/geometry/point3d/) SouthPole
: Gets the point at the South Pole of the sphere.
     This is the parameterization singularity that can be obtained,
     at V value -Math.Pi/2.
## Methods

static Sphere FitSphereToPoints(IEnumerable<Point3d> points)
: Attempts to fit a sphere to a collection of points.
: Returns - The Sphere that best approximates the points or Sphere.Unset on failure.

bool ClosestParameter(Point3d testPoint,double longitudeRadians,double latitudeRadians)
: Finds the angle parameters on this sphere that are closest to a test point.
: Returns - True on success, False on failure. This function will fail if the point it coincident with the sphere center.

[Point3d](/rhinocommon/rhino/geometry/point3d/) ClosestPoint(Point3d testPoint)
: Returns point on sphere that is closest to given point.
: Returns - Point on sphere surface closest to testPoint.

bool EpsilonEquals(Sphere other,double epsilon)
: Check that all values in other are within epsilon of the values in this
: since 5.4

[Circle](/rhinocommon/rhino/geometry/circle/) LatitudeDegrees(double degrees)
: Computes the parallel at a specific latitude angle.
     The angle is specified in degrees.
: Returns - A circle.

[Circle](/rhinocommon/rhino/geometry/circle/) LatitudeRadians(double radians)
: Computes the parallel at a specific latitude angle.
     The angle is specified in radians.
: Returns - A circle.

[Circle](/rhinocommon/rhino/geometry/circle/) LongitudeDegrees(double degrees)
: Computes the meridian at a specific longitude angle.
     The angle is specified in degrees.
: Returns - A circle.

[Circle](/rhinocommon/rhino/geometry/circle/) LongitudeRadians(double radians)
: Computes the meridian at a specific longitude angle.
     The angle is specified in radians.
: Returns - A circle.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) NormalAt(double longitudeRadians,double latitudeRadians)
: Computes the normal at a specific angular location on the sphere.
: Returns - A vector.

[Point3d](/rhinocommon/rhino/geometry/point3d/) PointAt(double longitudeRadians,double latitudeRadians)
: Evaluates the sphere at specific longitude and latitude angles.
: Returns - A point value.

bool Rotate(double sinAngle,double cosAngle,Vector3d axisOfRotation)
: Rotates this sphere about the center point.
: Returns - True on success; False on failure.

bool Rotate(double sinAngle,double cosAngle,Vector3d axisOfRotation,Point3d centerOfRotation)
: Rotates this sphere about a point and an axis.
: Returns - True on success; False on failure.

bool Rotate(double angleRadians,Vector3d axisOfRotation)
: Rotates the sphere about the center point.
: Returns - True on success; False on failure.

bool Rotate(double angleRadians,Vector3d axisOfRotation,Point3d centerOfRotation)
: Rotates this sphere about a point and an axis.
: Returns - True on success; False on failure.

[Brep](/rhinocommon/rhino/geometry/brep/) ToBrep()
: Converts this sphere is it Brep representation

[NurbsSurface](/rhinocommon/rhino/geometry/nurbssurface/) ToNurbsSurface()
: Converts this sphere to its NurbsSurface representation. 
     This is synonymous with calling NurbsSurface.CreateFromSphere().
: Returns - A nurbs surface representation of this sphere or null.

[RevSurface](/rhinocommon/rhino/geometry/revsurface/) ToRevSurface()
: Converts this Sphere to a RevSurface representation. 
     This is synonymous with calling RevSurface.CreateFromSphere().
: Returns - A surface of revolution representation of this sphere or null.

bool Transform(Transform xform)
: Transforms this sphere. Note that non-similarity preserving transformations 
     cannot be applied to a sphere as that would result in an ellipsoid.
: Returns - True on success, False on failure.

bool Translate(Vector3d delta)
: Moves this sphere along a motion vector.
: Returns - True on success; False on failure.
