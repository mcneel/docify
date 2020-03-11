---
title: "VolumeMassProperties"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Contains static initialization methods and allows access to the computed
   metrics of volume, volume centroid and volume moments in 
   in solid meshes, in solid surfaces and in solid (closed) boundary representations.
```cs
public class VolumeMassProperties : IDisposable
```
## Properties

[Point3d](/rhinocommon/rhino/geometry/point3d/) Centroid
: Gets the volume centroid in the world coordinate system.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CentroidCoordinatesMomentsOfInertia
: Moments of inertia with respect to centroid coordinate system.
     X = integral of ((y-y0)^2 + (z-z0)^2) dm
     Y = integral of ((z-z0)^2 + (x-x0)^2) dm
     Z = integral of ((z-z0)^2 + (y-y0)^2) dm
     where (x0,y0,z0) = centroid.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CentroidCoordinatesMomentsOfInertiaError
: Uncertainty in centroid coordinates moments of inertia calculation.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CentroidCoordinatesRadiiOfGyration
: Radii of gyration with respect to centroid coordinate system.
     X = sqrt(integral of ((y-y0)^2 + (z-z0)^2) dm/M)
     Y = sqrt(integral of ((z-z0)^2 + (x-x0)^2) dm/M)
     Z = sqrt(integral of ((z-z0)^2 + (y-y0)^2) dm/M)
     where (x0,y0,z0) = centroid.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CentroidCoordinatesSecondMoments
: Second moments with respect to centroid coordinate system.
     X = integral of (x-x0)^2 dm
     Y = integral of (y-y0)^2 dm
     Z = integral of (z-z0)^2 dm
     where (x0,y0,z0) = centroid.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CentroidCoordinatesSecondMomentsError
: Uncertainty in centroid coordinates second moments calculation.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) CentroidError
: Gets the uncertainty in the Centroid calculation.

double Volume
: Gets the volume solution.

double VolumeError
: Gets the uncertainty in the volume calculation.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) WorldCoordinatesFirstMoments
: Returns the world coordinate first moments if they were able to be calculated.
     X is integral of "x dm" over the volume
     Y is integral of "y dm" over the volume
     Z is integral of "z dm" over the volume.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) WorldCoordinatesFirstMomentsError
: Uncertainty in world coordinates first moments calculation.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) WorldCoordinatesMomentsOfInertia
: The moments of inertia about the world coordinate axes.
     X = integral of (y^2 + z^2) dm
     Y = integral of (z^2 + x^2) dm
     Z = integral of (z^2 + y^2) dm.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) WorldCoordinatesMomentsOfInertiaError
: Uncertainty in world coordinates moments of inertia calculation.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) WorldCoordinatesProductMoments
: Returns the world coordinate product moments if they were able to be calculated.
     X is integral of "xy dm" over the area
     Y is integral of "yz dm" over the area
     Z is integral of "zx dm" over the area.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) WorldCoordinatesProductMomentsError
: Uncertainty in world coordinates second moments calculation.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) WorldCoordinatesRadiiOfGyration
: Radii of gyration with respect to world coordinate system.
     X = sqrt(integral of (y^2 + z^2) dm/M)
     Y = sqrt(integral of (z^2 + x^2) dm/M)
     Z = sqrt(integral of (z^2 + y^2) dm/M)

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) WorldCoordinatesSecondMoments
: Returns the world coordinate first moments if they were able to be calculated.
     X is integral of "xx dm" over the area
     Y is integral of "yy dm" over the area
     Z is integral of "zz dm" over the area.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) WorldCoordinatesSecondMomentsError
: Uncertainty in world coordinates second moments calculation.
## Methods

static VolumeMassProperties Compute(Brep brep)
: Compute the VolumeMassProperties for a single Brep.
: Returns - The VolumeMassProperties for the given Brep or None on failure.

static VolumeMassProperties Compute(Brep brep,bool volume,bool firstMoments,bool secondMoments,bool productMoments)
: Compute the VolumeMassProperties for a single Brep.
: Returns - The VolumeMassProperties for the given Brep or None on failure.
: since 6.3

static VolumeMassProperties Compute(IEnumerable<GeometryBase> geometry)
: Computes the VolumeMassProperties for a collection of geometric objects. 
     At present only Breps, Surfaces, and Meshes are supported.
: Returns - The VolumeMassProperties for the entire collection or None on failure.
: since 6.3

static VolumeMassProperties Compute(IEnumerable<GeometryBase> geometry,bool volume,bool firstMoments,bool secondMoments,bool productMoments)
: Computes the VolumeMassProperties for a collection of geometric objects. 
     At present only Breps, Surfaces, Meshes and Planar Closed Curves are supported.
: Returns - The VolumeMassProperties for the entire collection or None on failure.
: since 6.3

static VolumeMassProperties Compute(Mesh mesh)
: Compute the VolumeMassProperties for a single Mesh.
: Returns - The VolumeMassProperties for the given Mesh or None on failure.

static VolumeMassProperties Compute(Mesh mesh,bool volume,bool firstMoments,bool secondMoments,bool productMoments)
: Compute the VolumeMassProperties for a single Mesh.
: Returns - The VolumeMassProperties for the given Mesh or None on failure.
: since 6.3

static VolumeMassProperties Compute(Surface surface)
: Compute the VolumeMassProperties for a single Surface.
: Returns - The VolumeMassProperties for the given Surface or None on failure.

static VolumeMassProperties Compute(Surface surface,bool volume,bool firstMoments,bool secondMoments,bool productMoments)
: Compute the VolumeMassProperties for a single Surface.
: Returns - The VolumeMassProperties for the given Surface or None on failure.
: since 6.3

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

bool Sum(VolumeMassProperties summand)
: Sum mass properties together to get an aggregate mass.
: Returns - True if successful.
