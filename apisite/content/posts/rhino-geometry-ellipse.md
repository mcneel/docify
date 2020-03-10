---
title: "Rhino.Geometry.Ellipse"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Geometry.Ellipse(Plane plane,double radius1,double radius2)
- (summary) 
     Initializes a new ellipse from base plane and both principal radii.
     
- (since) 5.0
## Rhino.Geometry.Ellipse(Point3d center,Point3d second,Point3d third)
- (summary) 
     Initializes a new ellipse from a center point and the two semiaxes intersections.
     
- (since) 5.0
# Properties
## bool IsValid
- (summary) 
     Returns an indication of the validity of this ellipse.
     
- (since) 6.0
## Plane Plane
- (summary) 
     Gets or sets the base plane of the ellipse.
     
- (since) 5.0
## double Radius1
- (summary) 
     Gets or sets the radius of the ellipse along the base plane X semiaxis.
     
- (since) 5.0
## double Radius2
- (summary) 
     Gets or sets the radius of the ellipse along the base plane Y semiaxis.
     
- (since) 5.0
# Methods
## bool EpsilonEquals(Ellipse other,double epsilon)
- (summary) 
     Check that all values in other are within epsilon of the values in this
     
- (since) 5.4
- (returns) bool This is some return comment
## NurbsCurve ToNurbsCurve()
- (summary) 
     Constructs a nurbs curve representation of this ellipse. 
     This is equivalent to calling NurbsCurve.CreateFromEllipse().
- (since) 5.0
- (returns) NurbsCurve This is some return comment
