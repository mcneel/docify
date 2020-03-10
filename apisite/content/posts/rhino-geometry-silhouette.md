---
title: "Rhino.Geometry.Silhouette"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## Curve Curve
- (summary)  
     3D curve representing the shape of the silhouette.
     
- (since) 6.0
## ComponentIndex GeometryComponentIndex
- (summary) 
     Gets the component index corresponding with this silhouette curve.
     This field is only set when the entire silhouette curve is part of some geometry component.
     
- (since) 6.0
## SilhouetteType SilhouetteType
- (summary) 
     Gets the type of this silhouette curve.
     
- (since) 6.0
# Methods
## static Silhouette[] Compute(GeometryBase geometry,SilhouetteType silhouetteType,Point3d perspectiveCameraLocation,double tolerance,double angleToleranceRadians)
- (summary) 
     Compute silhouettes of a shape for a perspective projection.
     
- (since) 6.0
- (returns) Silhouette[] This is some return comment
## static Silhouette[] Compute(GeometryBase geometry,SilhouetteType silhouetteType,Point3d perspectiveCameraLocation,double tolerance,double angleToleranceRadians,IEnumerable<Plane> clippingPlanes,CancellationToken cancelToken)
- (summary) 
     Compute silhouettes of a shape for a perspective projection.
     
- (since) 6.0
- (returns) Silhouette[] This is some return comment
## static Silhouette[] Compute(GeometryBase geometry,SilhouetteType silhouetteType,Vector3d parallelCameraDirection,double tolerance,double angleToleranceRadians)
- (summary) 
     Compute silhouettes of a shape for a parallel projection.
     
- (since) 6.0
- (returns) Silhouette[] This is some return comment
## static Silhouette[] Compute(GeometryBase geometry,SilhouetteType silhouetteType,Vector3d parallelCameraDirection,double tolerance,double angleToleranceRadians,IEnumerable<Plane> clippingPlanes,CancellationToken cancelToken)
- (summary) 
     Compute silhouettes of a shape for a parallel projection.
     
- (since) 6.0
- (returns) Silhouette[] This is some return comment
## static Silhouette[] Compute(GeometryBase geometry,SilhouetteType silhouetteType,ViewportInfo viewport,double tolerance,double angleToleranceRadians)
- (summary) 
     Compute silhouettes of a shape for a specified projection.
     
- (since) 6.0
- (returns) Silhouette[] This is some return comment
## static Silhouette[] Compute(GeometryBase geometry,SilhouetteType silhouetteType,ViewportInfo viewport,double tolerance,double angleToleranceRadians,IEnumerable<Plane> clippingPlanes,CancellationToken cancelToken)
- (summary) 
     Compute silhouettes of a shape for a specified projection.
     
- (since) 6.0
- (returns) Silhouette[] This is some return comment
## static Silhouette[] ComputeDraftCurve(GeometryBase geometry,double draftAngle,Vector3d pullDirection,double tolerance,double angleToleranceRadians)
- (summary) 
     Computes draft curve silhouettes of a shape.
     
- (since) 7.0
- (returns) Silhouette[] This is some return comment
## static Silhouette[] ComputeDraftCurve(GeometryBase geometry,double draftAngle,Vector3d pullDirection,double tolerance,double angleToleranceRadians,CancellationToken cancelToken)
- (summary) 
     Computes draft curve silhouettes of a shape.
     
- (since) 7.0
- (returns) Silhouette[] This is some return comment
