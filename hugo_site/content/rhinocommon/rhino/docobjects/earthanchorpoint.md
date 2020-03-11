---
title: "EarthAnchorPoint"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Contains information about the model's position in latitude, longitude,
   and elevation for GIS mapping applications.
```cs
public class EarthAnchorPoint : IDisposable
```
## Constructors

EarthAnchorPoint()
: Initializes a new instance of the  class.
## Properties

string Description
: Gets or sets the long form of the identifying information about this location.

double EarthBasepointElevation
: Gets or sets the point elevation on earth, in meters.

[BasepointZero](/rhinocommon/rhino/docobjects/basepointzero/) EarthBasepointElevationZero
: Gets or sets a value indicating the zero level convention relating to a location on Earth.

double EarthBasepointLatitude
: Gets or sets a point latitude on earth, in decimal degrees.
     +90 = north pole, 0 = equator, -90 = south pole.

double EarthBasepointLongitude
: Gets or sets the point longitude on earth, in decimal degrees.
     0 = prime meridian (Greenwich meridian)Values increase towards West

[Point3d](/rhinocommon/rhino/geometry/point3d/) ModelBasePoint
: Corresponding model point in model coordinates.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) ModelEast
: Earth directions in model coordinates.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) ModelNorth
: Earth directions in model coordinates.

string Name
: Gets or sets the short form of the identifying information about this location.
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

bool EarthLocationIsSet()
: Checks if the earth location is set or not.
: Returns - Bool value, True if set else false
: since 6.0

[Plane](/rhinocommon/rhino/geometry/plane/) GetEarthAnchorPlane(Vector3d anchorNorth)
: Returns the earth anchor plane
: Returns - A plane value.
: since 6.0

[Plane](/rhinocommon/rhino/geometry/plane/) GetModelCompass()
: Returns a plane in model coordinates whose X axis points East,
     Y axis points North and Z axis points Up. The origin
     is set to ModelBasepoint.
: Returns - A plane value. This might be invalid on error.

[Transform](/rhinocommon/rhino/geometry/transform/) GetModelToEarthTransform(UnitSystem modelUnitSystem)
: Gets a transformation from model coordinates to earth coordinates.
     This transformation assumes the model is small enough that
     the curvature of the earth can be ignored.
: Returns - Transform on success. Inalid Transform on error.
