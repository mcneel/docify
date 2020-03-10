---
title: "SurfaceCurvature"
draft: false
---

*Namespace: Rhino.Geometry*

   Maintains computed information for surface curvature evaluation.
   
## Properties
#### double Gaussian
- (summary) 
     Gets the Gaussian curvature value at UV.
     
- (since) 5.0
#### double Mean
- (summary) 
     Gets the Mean curvature value at UV.
     
- (since) 5.0
#### Vector3d Normal
- (summary) 
     Gets the surface normal at UV.
     
- (since) 5.0
#### Point3d Point
- (summary) 
     Gets the surface point at UV.
     
- (since) 5.0
#### Point2d UVPoint
- (summary) 
     Gets the UV location where the curvature was computed.
     
- (since) 5.0
## Methods
#### Vector3d Direction(int direction)
- (summary) 
     Gets the principal curvature direction vector.
     
- (since) 5.0
- (returns) Vector3d This is some return comment
#### double Kappa(int direction)
- (summary) 
     Gets the Kappa curvature value.
     
- (since) 5.0
- (returns) double This is some return comment
#### Circle OsculatingCircle(int direction)
- (summary) 
     Computes the osculating circle along the given direction.
     
- (since) 5.0
- (returns) Circle This is some return comment
