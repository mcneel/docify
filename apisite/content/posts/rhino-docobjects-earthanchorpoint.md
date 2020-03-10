---
title: "EarthAnchorPoint"
draft: false
---

*Namespace: Rhino.DocObjects*

   Contains information about the model's position in latitude, longitude,
   and elevation for GIS mapping applications.
   
## Constructors
#### Rhino.DocObjects.EarthAnchorPoint()
- (summary) 
     Initializes a new instance of the  class.
     
- (since) 5.0
## Properties
#### string Description
- (summary) 
     Gets or sets the long form of the identifying information about this location.
     
- (since) 5.0
#### double EarthBasepointElevation
- (summary) 
     Gets or sets the point elevation on earth, in meters.
     
- (since) 5.0
#### BasepointZero EarthBasepointElevationZero
- (summary) 
     Gets or sets a value indicating the zero level convention relating to a location on Earth.
     
- (since) 5.0
#### double EarthBasepointLatitude
- (summary) 
     Gets or sets a point latitude on earth, in decimal degrees.
     +90 = north pole, 0 = equator, -90 = south pole.
     
- (since) 5.0
#### double EarthBasepointLongitude
- (summary) 
     Gets or sets the point longitude on earth, in decimal degrees.
     0 = prime meridian (Greenwich meridian)Values increase towards West
- (since) 5.0
#### Point3d ModelBasePoint
- (summary) Corresponding model point in model coordinates.
- (since) 5.0
#### Vector3d ModelEast
- (summary) Earth directions in model coordinates.
- (since) 5.0
#### Vector3d ModelNorth
- (summary) Earth directions in model coordinates.
- (since) 5.0
#### string Name
- (summary) 
     Gets or sets the short form of the identifying information about this location.
     
- (since) 5.0
## Methods
#### void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool EarthLocationIsSet()
- (summary) 
     Checks if the earth location is set or not.
     
- (since) 6.0
- (returns) bool This is some return comment
#### Plane GetEarthAnchorPlane(Vector3d anchorNorth)
- (summary)  Returns the earth anchor plane 
- (since) 6.0
- (returns) Plane This is some return comment
#### Plane GetModelCompass()
- (summary) 
     Returns a plane in model coordinates whose X axis points East,
     Y axis points North and Z axis points Up. The origin
     is set to ModelBasepoint.
     
- (since) 5.0
- (returns) Plane This is some return comment
#### Transform GetModelToEarthTransform(UnitSystem modelUnitSystem)
- (summary) 
     Gets a transformation from model coordinates to earth coordinates.
     This transformation assumes the model is small enough that
     the curvature of the earth can be ignored.
     
- (since) 5.0
- (returns) Transform This is some return comment
