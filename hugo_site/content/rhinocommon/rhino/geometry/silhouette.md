---
title: "Silhouette"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Information about silhouette curves that are generated from
   geometry (surfaces, brep faces, meshes)
```cs
public class Silhouette
```
## Properties

[Curve](/rhinocommon/rhino/geometry/curve/) Curve
: 3D curve representing the shape of the silhouette.
: since 6.0

[ComponentIndex](/rhinocommon/rhino/geometry/componentindex/) GeometryComponentIndex
: Gets the component index corresponding with this silhouette curve.
     This field is only set when the entire silhouette curve is part of some geometry component.
: since 6.0

[SilhouetteType](/rhinocommon/rhino/geometry/silhouettetype/) SilhouetteType
: Gets the type of this silhouette curve.
: since 6.0
## Methods

static Silhouette[] Compute(GeometryBase geometry,SilhouetteType silhouetteType,Point3d perspectiveCameraLocation,double tolerance,double angleToleranceRadians)
: Compute silhouettes of a shape for a perspective projection.
: Returns - Array of silhouette curves.
: since 6.0

static Silhouette[] Compute(GeometryBase geometry,SilhouetteType silhouetteType,Point3d perspectiveCameraLocation,double tolerance,double angleToleranceRadians,IEnumerable<Plane> clippingPlanes,CancellationToken cancelToken)
: Compute silhouettes of a shape for a perspective projection.
: Returns - Array of silhouette curves.
: since 6.0

static Silhouette[] Compute(GeometryBase geometry,SilhouetteType silhouetteType,Vector3d parallelCameraDirection,double tolerance,double angleToleranceRadians)
: Compute silhouettes of a shape for a parallel projection.
: Returns - Array of silhouette curves.
: since 6.0

static Silhouette[] Compute(GeometryBase geometry,SilhouetteType silhouetteType,Vector3d parallelCameraDirection,double tolerance,double angleToleranceRadians,IEnumerable<Plane> clippingPlanes,CancellationToken cancelToken)
: Compute silhouettes of a shape for a parallel projection.
: Returns - Array of silhouette curves.
: since 6.0

static Silhouette[] Compute(GeometryBase geometry,SilhouetteType silhouetteType,ViewportInfo viewport,double tolerance,double angleToleranceRadians)
: Compute silhouettes of a shape for a specified projection.
: Returns - Array of silhouette curves.
: since 6.0

static Silhouette[] Compute(GeometryBase geometry,SilhouetteType silhouetteType,ViewportInfo viewport,double tolerance,double angleToleranceRadians,IEnumerable<Plane> clippingPlanes,CancellationToken cancelToken)
: Compute silhouettes of a shape for a specified projection.
: Returns - Array of silhouette curves.
: since 6.0

static Silhouette[] ComputeDraftCurve(GeometryBase geometry,double draftAngle,Vector3d pullDirection,double tolerance,double angleToleranceRadians)
: Computes draft curve silhouettes of a shape.
: Returns - Array of silhouette curves.
: since 7.0

static Silhouette[] ComputeDraftCurve(GeometryBase geometry,double draftAngle,Vector3d pullDirection,double tolerance,double angleToleranceRadians,CancellationToken cancelToken)
: Computes draft curve silhouettes of a shape.
: Returns - Array of silhouette curves.
: since 7.0
