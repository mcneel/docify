---
title: "Sphere"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents the plane and radius values of a sphere.
   
## Constructors
#### Rhino.Geometry.Sphere(Plane equatorialPlane,double radius)
- (summary) 
     Initializes a new sphere given the plane of the equator circle and radius.
     
- (since) 5.0
#### Rhino.Geometry.Sphere(Point3d center,double radius)
- (summary) 
     Initializes a new sphere given center point and radius.
     
- (since) 5.0
## Properties
#### static Sphere Unset
- (summary) 
     Gets a sphere with invalid members.
     
- (since) 5.0
#### BoundingBox BoundingBox
- (summary) 
     Gets the world aligned boundingbox for this Sphere. 
     If the Sphere is Invalid, an empty box is returned.
     
- (since) 5.0
#### Point3d Center
- (summary) 
     Gets or sets the center point of the sphere.
     
- (since) 5.0
#### double Diameter
- (summary) 
     Gets or sets the diameter for this sphere.
     
- (since) 5.0
#### Plane EquatorialPlane
- (summary) 
     Gets or sets the Equatorial plane for this sphere.
     
- (since) 6.0
#### Plane EquitorialPlane
- (summary) 
     Gets or sets the Equatorial plane for this sphere.
     
- (since) 5.0
#### bool IsValid
- (summary) 
     Gets a value that indicates whether the sphere is valid.
     
- (since) 5.0
#### Point3d NorthPole
- (summary) 
     Gets the point at the North Pole of the sphere.
     This is the parameterization singularity that can be obtained,
     at V value +Math.Pi/2.
- (since) 5.0
#### double Radius
- (summary) 
     Gets or sets the Radius for this sphere.
     
- (since) 5.0
#### Point3d SouthPole
- (summary) 
     Gets the point at the South Pole of the sphere.
     This is the parameterization singularity that can be obtained,
     at V value -Math.Pi/2.
- (since) 5.0
## Methods
#### static Sphere FitSphereToPoints(IEnumerable<Point3d> points)
- (summary) 
     Attempts to fit a sphere to a collection of points.
     
- (since) 5.0
- (returns) Sphere This is some return comment
#### bool ClosestParameter(Point3d testPoint,double longitudeRadians,double latitudeRadians)
- (summary) 
     Finds the angle parameters on this sphere that are closest to a test point.
     
- (since) 5.0
- (returns) bool This is some return comment
#### Point3d ClosestPoint(Point3d testPoint)
- (summary) 
     Returns point on sphere that is closest to given point.
     
- (since) 5.0
- (returns) Point3d This is some return comment
#### bool EpsilonEquals(Sphere other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
#### Circle LatitudeDegrees(double degrees)
- (summary) 
     Computes the parallel at a specific latitude angle.
     The angle is specified in degrees.
- (since) 5.0
- (returns) Circle This is some return comment
#### Circle LatitudeRadians(double radians)
- (summary) 
     Computes the parallel at a specific latitude angle.
     The angle is specified in radians.
- (since) 5.0
- (returns) Circle This is some return comment
#### Circle LongitudeDegrees(double degrees)
- (summary) 
     Computes the meridian at a specific longitude angle.
     The angle is specified in degrees.
- (since) 5.0
- (returns) Circle This is some return comment
#### Circle LongitudeRadians(double radians)
- (summary) 
     Computes the meridian at a specific longitude angle.
     The angle is specified in radians.
- (since) 5.0
- (returns) Circle This is some return comment
#### Vector3d NormalAt(double longitudeRadians,double latitudeRadians)
- (summary) 
     Computes the normal at a specific angular location on the sphere.
     
- (since) 5.0
- (returns) Vector3d This is some return comment
#### Point3d PointAt(double longitudeRadians,double latitudeRadians)
- (summary) Evaluates the sphere at specific longitude and latitude angles.
- (since) 5.0
- (returns) Point3d This is some return comment
#### bool Rotate(double sinAngle,double cosAngle,Vector3d axisOfRotation)
- (summary) 
     Rotates this sphere about the center point.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Rotate(double sinAngle,double cosAngle,Vector3d axisOfRotation,Point3d centerOfRotation)
- (summary) 
     Rotates this sphere about a point and an axis.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Rotate(double angleRadians,Vector3d axisOfRotation)
- (summary) 
     Rotates the sphere about the center point.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Rotate(double angleRadians,Vector3d axisOfRotation,Point3d centerOfRotation)
- (summary) 
     Rotates this sphere about a point and an axis.
     
- (since) 5.0
- (returns) bool This is some return comment
#### Brep ToBrep()
- (summary) 
     Converts this sphere is it Brep representation
     
- (since) 5.0
- (returns) Brep This is some return comment
#### NurbsSurface ToNurbsSurface()
- (summary) 
     Converts this sphere to its NurbsSurface representation. 
     This is synonymous with calling NurbsSurface.CreateFromSphere().
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
#### RevSurface ToRevSurface()
- (summary) 
     Converts this Sphere to a RevSurface representation. 
     This is synonymous with calling RevSurface.CreateFromSphere().
     
- (since) 5.0
- (returns) RevSurface This is some return comment
#### bool Transform(Transform xform)
- (summary) 
     Transforms this sphere. Note that non-similarity preserving transformations 
     cannot be applied to a sphere as that would result in an ellipsoid.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Translate(Vector3d delta)
- (summary) 
     Moves this sphere along a motion vector.
     
- (since) 5.0
- (returns) bool This is some return comment
