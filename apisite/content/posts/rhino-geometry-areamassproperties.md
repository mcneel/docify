---
title: "Rhino.Geometry.AreaMassProperties"
draft: false
---

# Properties
## double Area
- (summary) 
     Gets the area solution.
     
- (since) 5.0
## double AreaError
- (summary) 
     Gets the uncertainty in the area calculation.
     
- (since) 5.0
## Point3d Centroid
- (summary) 
     Gets the area centroid in the world coordinate system.
     
- (since) 5.0
## Vector3d CentroidCoordinatesMomentsOfInertia
- (summary) 
     Moments of inertia with respect to centroid coordinate system.
     X = integral of ((y-y0)^2 + (z-z0)^2) dm
     Y = integral of ((z-z0)^2 + (x-x0)^2) dm
     Z = integral of ((z-z0)^2 + (y-y0)^2) dm
     where (x0,y0,z0) = centroid.
     
- (since) 5.0
## Vector3d CentroidCoordinatesMomentsOfInertiaError
- (summary) 
     Uncertainty in centroid coordinates moments of inertia calculation.
     
- (since) 5.0
## Vector3d CentroidCoordinatesRadiiOfGyration
- (summary) 
     Radii of gyration with respect to centroid coordinate system.
     X = sqrt(integral of ((y-y0)^2 + (z-z0)^2) dm/M)
     Y = sqrt(integral of ((z-z0)^2 + (x-x0)^2) dm/M)
     Z = sqrt(integral of ((z-z0)^2 + (y-y0)^2) dm/M)
     where (x0,y0,z0) = centroid.
     
- (since) 5.0
## Vector3d CentroidCoordinatesSecondMoments
- (summary) 
     Second moments with respect to centroid coordinate system.
     X = integral of (x-x0)^2 dm
     Y = integral of (y-y0)^2 dm
     Z = integral of (z-z0)^2 dm
     where (x0,y0,z0) = centroid.
     
- (since) 5.0
## Vector3d CentroidCoordinatesSecondMomentsError
- (summary) 
     Uncertainty in centroid coordinates second moments calculation.
     
- (since) 5.0
## Vector3d CentroidError
- (summary) 
     Gets the uncertainty in the centroid calculation.
     
- (since) 5.0
## Vector3d WorldCoordinatesFirstMoments
- (summary) 
     Returns the world coordinate first moments if they were able to be calculated.
     X is integral of "x dm" over the area
     Y is integral of "y dm" over the area
     Z is integral of "z dm" over the area.
     
- (since) 5.0
## Vector3d WorldCoordinatesFirstMomentsError
- (summary) 
     Uncertainty in world coordinates first moments calculation.
     
- (since) 5.0
## Vector3d WorldCoordinatesMomentsOfInertia
- (summary) 
     The moments of inertia about the world coordinate axes.
     X = integral of (y^2 + z^2) dm
     Y = integral of (z^2 + x^2) dm
     Z = integral of (z^2 + y^2) dm.
     
- (since) 5.0
## Vector3d WorldCoordinatesMomentsOfInertiaError
- (summary) 
     Uncertainty in world coordinates moments of inertia calculation.
     
- (since) 5.0
## Vector3d WorldCoordinatesProductMoments
- (summary) 
     Returns the world coordinate product moments if they were able to be calculated.
     X is integral of "xy dm" over the area
     Y is integral of "yz dm" over the area
     Z is integral of "zx dm" over the area.
     
- (since) 5.0
## Vector3d WorldCoordinatesProductMomentsError
- (summary) 
     Uncertainty in world coordinates second moments calculation.
     
- (since) 5.0
## Vector3d WorldCoordinatesRadiiOfGyration
- (summary) 
     Radii of gyration with respect to world coordinate system.
     X = sqrt(integral of (y^2 + z^2) dm/M)
     Y = sqrt(integral of (z^2 + x^2) dm/M)
     Z = sqrt(integral of (z^2 + y^2) dm/M)
     
- (since) 5.0
## Vector3d WorldCoordinatesSecondMoments
- (summary) 
     Returns the world coordinate first moments if they were able to be calculated.
     X is integral of "xx dm" over the area
     Y is integral of "yy dm" over the area
     Z is integral of "zz dm" over the area.
     
- (since) 5.0
## Vector3d WorldCoordinatesSecondMomentsError
- (summary) 
     Uncertainty in world coordinates second moments calculation.
     
- (since) 5.0
# Methods
## static AreaMassProperties Compute(Brep brep)
- (summary) 
     Computes an AreaMassProperties for a brep.
     
- (since) 5.0
- (returns) AreaMassProperties This is some return comment
## static AreaMassProperties Compute(Brep brep,bool area,bool firstMoments,bool secondMoments,bool productMoments)
- (summary) 
     Compute the AreaMassProperties for a single Brep.
     
- (since) 6.3
- (returns) AreaMassProperties This is some return comment
## static AreaMassProperties Compute(Curve closedPlanarCurve)
- (summary) 
     Computes an AreaMassProperties for a closed planar curve.
     
- (since) 5.0
- (returns) AreaMassProperties This is some return comment
## static AreaMassProperties Compute(Curve closedPlanarCurve,double planarTolerance)
- (summary) 
     Computes an AreaMassProperties for a closed planar curve.
     
- (since) 5.0
- (returns) AreaMassProperties This is some return comment
## static AreaMassProperties Compute(Hatch hatch)
- (summary) 
     Computes an AreaMassProperties for a hatch.
     
- (since) 5.0
- (returns) AreaMassProperties This is some return comment
## static AreaMassProperties Compute(IEnumerable<GeometryBase> geometry)
- (summary) 
     Computes the Area properties for a collection of geometric objects. 
     At present only Breps, Surfaces, Meshes and Planar Closed Curves are supported.
     
- (since) 5.1
- (returns) AreaMassProperties This is some return comment
## static AreaMassProperties Compute(IEnumerable<GeometryBase> geometry,bool area,bool firstMoments,bool secondMoments,bool productMoments)
- (summary) 
     Computes the AreaMassProperties for a collection of geometric objects. 
     At present only Breps, Surfaces, Meshes and Planar Closed Curves are supported.
     
- (since) 6.3
- (returns) AreaMassProperties This is some return comment
## static AreaMassProperties Compute(Mesh mesh)
- (summary) 
     Computes an AreaMassProperties for a mesh.
     
- (since) 5.0
- (returns) AreaMassProperties This is some return comment
## static AreaMassProperties Compute(Mesh mesh,bool area,bool firstMoments,bool secondMoments,bool productMoments)
- (summary) 
     Compute the AreaMassProperties for a single Mesh.
     
- (since) 6.3
- (returns) AreaMassProperties This is some return comment
## static AreaMassProperties Compute(Surface surface)
- (summary) 
     Computes an AreaMassProperties for a surface.
     
- (since) 5.0
- (returns) AreaMassProperties This is some return comment
## static AreaMassProperties Compute(Surface surface,bool area,bool firstMoments,bool secondMoments,bool productMoments)
- (summary) 
     Compute the AreaMassProperties for a single Surface.
     
- (since) 6.3
- (returns) AreaMassProperties This is some return comment
## bool CentroidCoordinatesPrincipalMoments(double x,Vector3d xaxis,double y,Vector3d yaxis,double z,Vector3d zaxis)
- (summary) 
     Calculates the principal moments and principal axes with repect to centroid coordinates. 
     These are simply the eigenvalues and eigenvectors of the centroid coordinate inertia matrix.
     
- (since) 6.9
- (returns) bool This is some return comment
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
## bool WorldCoordinatesPrincipalMoments(double x,Vector3d xaxis,double y,Vector3d yaxis,double z,Vector3d zaxis)
- (summary) 
     Calculates the principal moments and principal axes with repect to world coordinates. 
     These are simply the eigenvalues and eigenvectors of the world coordinate inertia matrix.
     
- (since) 6.9
- (returns) bool This is some return comment
