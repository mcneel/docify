---
title: "Cone"
draft: false
---

*Namespace: Rhino.Geometry*

   Represents the center plane, radius and height values in a right circular cone.
   
## Constructors
#### Rhino.Geometry.Cone(Plane plane,double height,double radius)
- (summary) 
         Initializes a new cone with a specified base plane, height and radius.
         
- (since) 5.0
## Properties
#### static Cone Unset
- (summary) 
     Gets an invalid Cone.
     
- (since) 5.0
#### Point3d ApexPoint
- (summary) Point at tip of the cone.
- (since) 5.0
#### Vector3d Axis
- (summary) Unit vector axis of cone.
- (since) 5.0
#### Point3d BasePoint
- (summary) Center of base circle.
- (since) 5.0
#### double Height
- (summary) 
     Gets or sets the height of the circular right cone.
     
- (since) 5.0
#### bool IsValid
- (summary) 
     True if plane is valid, height is not zero and radius is not zero.
     
- (since) 5.0
#### Plane Plane
- (summary) 
     Gets or sets the base plane of the cone.  The apex of the cone is at the plane's origin.
     
- (since) 5.0
#### double Radius
- (summary) 
     Gets or sets the radius of the cone.
     
- (since) 5.0
## Methods
#### double AngleInDegrees()
- (summary) 
     Computes the angle (in degrees) between the axis and the 
     side of the cone.
     The angle and the height have the same sign.
     
- (since) 5.0
- (returns) double This is some return comment
#### double AngleInRadians()
- (summary) 
     Computes the angle (in radians) between the axis and the 
     side of the cone.
     The angle and the height have the same sign.
     
- (since) 5.0
- (returns) double This is some return comment
#### bool EpsilonEquals(Cone other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
#### Brep ToBrep(bool capBottom)
- (summary) 
     Gets a Brep representation of the cone with a single
     face for the cone, an edge along the cone seam, 
     and vertices at the base and apex ends of this seam edge.
     The optional cap is a single face with one circular edge 
     starting and ending at the base vertex.
     
- (since) 5.0
- (returns) Brep This is some return comment
#### NurbsSurface ToNurbsSurface()
- (summary) 
     Constructs a Nurbs surface representation of this Cone. 
     This is synonymous with calling NurbsSurface.CreateFromCone().
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
#### RevSurface ToRevSurface()
- (summary) 
     Constructs a RevSurface representation of this Cone. 
     This is synonymous with calling RevSurface.CreateFromCone().
     
- (since) 5.0
- (returns) RevSurface This is some return comment
