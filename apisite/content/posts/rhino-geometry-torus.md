---
title: "Rhino.Geometry.Torus"
draft: false
---

# Constructors
## Rhino.Geometry.Torus(Plane basePlane,double majorRadius,double minorRadius)
- (summary) 
     Initializes a new Torus from base pane and two radii.
     
- (since) 5.0
# Properties
## static Torus Unset
- (summary) 
     Gets an invalid Torus.
     
- (since) 5.0
## bool IsValid
- (summary) 
     Gets a value indicating whether this torus is valid.
     
- (since) 5.0
## double MajorRadius
- (summary) 
     Gets or sets the radius of the circle that lies at the heart of the torus.
     
- (since) 5.0
## double MinorRadius
- (summary) 
     Gets or sets the radius of the torus section.
     
- (since) 5.0
## Plane Plane
- (summary) 
     Gets or sets the plane for the torus large circle.
     
- (since) 5.0
# Methods
## bool EpsilonEquals(Torus other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## NurbsSurface ToNurbsSurface()
- (summary) 
     Converts this torus to its nurbs surface representation. 
     This is synonymous with calling NurbsSurface.CreateFromTorus().
     
- (since) 5.0
- (returns) NurbsSurface This is some return comment
## RevSurface ToRevSurface()
- (summary) 
     Convert this torus to a surface of revolution representation. 
     This is synonymous with calling RevSurface.CreateFromTorus().
     
- (since) 5.0
- (returns) RevSurface This is some return comment
