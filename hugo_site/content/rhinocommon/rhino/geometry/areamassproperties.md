---
title: "AreaMassProperties"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Contains static initialization methods and allows access to the computed
   metrics of area, area centroid and area moments in closed
   planar curves, in meshes, in surfaces, in hatches and in boundary representations.
```cs
public class AreaMassProperties : IDisposable
```
## Properties

double Area
: Gets the area solution.

double AreaError
: Gets the uncertainty in the area calculation.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Centroid
: Gets the area centroid in the world coordinate system.

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
: Gets the uncertainty in the centroid calculation.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) WorldCoordinatesFirstMoments
: Returns the world coordinate first moments if they were able to be calculated.
     X is integral of "x dm" over the area
     Y is integral of "y dm" over the area
     Z is integral of "z dm" over the area.

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

static AreaMassProperties Compute(Brep brep)
: Computes an AreaMassProperties for a brep.
: Returns - The AreaMassProperties for the given Brep or None on failure.

static AreaMassProperties Compute(Brep brep,bool area,bool firstMoments,bool secondMoments,bool productMoments)
: Compute the AreaMassProperties for a single Brep.
: Returns - The AreaMassProperties for the given Brep or None on failure.
: since 6.3

static AreaMassProperties Compute(Curve closedPlanarCurve)
: Computes an AreaMassProperties for a closed planar curve.
: Returns - The AreaMassProperties for the given curve or None on failure.

static AreaMassProperties Compute(Curve closedPlanarCurve,double planarTolerance)
: Computes an AreaMassProperties for a closed planar curve.
: Returns - The AreaMassProperties for the given curve or None on failure.

static AreaMassProperties Compute(Hatch hatch)
: Computes an AreaMassProperties for a hatch.
: Returns - The AreaMassProperties for the given hatch or None on failure.

static AreaMassProperties Compute(IEnumerable<GeometryBase> geometry)
: Computes the Area properties for a collection of geometric objects. 
     At present only Breps, Surfaces, Meshes and Planar Closed Curves are supported.
: Returns - The Area properties for the entire collection or None on failure.
: since 5.1

static AreaMassProperties Compute(IEnumerable<GeometryBase> geometry,bool area,bool firstMoments,bool secondMoments,bool productMoments)
: Computes the AreaMassProperties for a collection of geometric objects. 
     At present only Breps, Surfaces, Meshes and Planar Closed Curves are supported.
: Returns - The AreaMassProperties for the entire collection or None on failure.
: since 6.3

static AreaMassProperties Compute(Mesh mesh)
: Computes an AreaMassProperties for a mesh.
: Returns - The AreaMassProperties for the given Mesh or None on failure.

static AreaMassProperties Compute(Mesh mesh,bool area,bool firstMoments,bool secondMoments,bool productMoments)
: Compute the AreaMassProperties for a single Mesh.
: Returns - The AreaMassProperties for the given Mesh or None on failure.
: since 6.3

static AreaMassProperties Compute(Surface surface)
: Computes an AreaMassProperties for a surface.
: Returns - The AreaMassProperties for the given Surface or None on failure.

static AreaMassProperties Compute(Surface surface,bool area,bool firstMoments,bool secondMoments,bool productMoments)
: Compute the AreaMassProperties for a single Surface.
: Returns - The AreaMassProperties for the given Surface or None on failure.
: since 6.3

bool CentroidCoordinatesPrincipalMoments(double x,Vector3d xaxis,double y,Vector3d yaxis,double z,Vector3d zaxis)
: Calculates the principal moments and principal axes with repect to centroid coordinates. 
     These are simply the eigenvalues and eigenvectors of the centroid coordinate inertia matrix.
: Returns - True if successful.
: since 6.9

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

bool WorldCoordinatesPrincipalMoments(double x,Vector3d xaxis,double y,Vector3d yaxis,double z,Vector3d zaxis)
: Calculates the principal moments and principal axes with repect to world coordinates. 
     These are simply the eigenvalues and eigenvectors of the world coordinate inertia matrix.
: Returns - True if successful.
: since 6.9
