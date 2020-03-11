---
title: "Light"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a light that shines in the modeling space.
```cs
[Serializable]
public class Light : GeometryBase
```
## Constructors

Light()
: Initializes a new light.
## Properties

Color Ambient
: Gets or sets the ambient color.

[Attenuation](/rhinocommon/rhino/geometry/light/attenuation/) AttenuationType
: Get the type of attenuation for this light.
: since 7.0

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) AttenuationVector
: Gets or Sets the attenuation vector.
: since 5.7

[CoordinateSystem](/rhinocommon/rhino/docobjects/coordinatesystem/) CoordinateSystem
: Gets a value, determined by LightStyle, that explains whether
     the camera directions are relative to World or Camera spaces.

Color Diffuse
: Gets or sets the diffuse color.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Direction
: Gets or sets the vector direction of the camera.

double HotSpot
: The hot spot setting runs from 0.0 to 1.0 and is used to
     provides a linear interface for controling the focus or 
     concentration of a spotlight.
     A hot spot setting of 0.0 corresponds to a spot exponent of 128.
     A hot spot setting of 1.0 corresponds to a spot exponent of 0.0.

Guid Id
: Gets the ID of this light.
: since 6.0

double Intensity
: Gets or sets the light intensity.

bool IsDirectionalLight
: Gets a value indicating whether the light style
     is  CameraDirectional or WorldDirectional.

bool IsEnabled
: Gets or sets a value that defines if the light is turned on (true) or off (false).

bool IsLinearLight
: Gets a value indicating whether the light style
     is  WorldLinear.

bool IsPointLight
: Gets a value indicating whether the light style
     is  CameraPoint or WorldPoint.

bool IsRectangularLight
: Gets a value indicating whether the light style
     is  WorldRectangular.

bool IsSpotLight
: Gets a value indicating whether the light style
     is  CameraSpot or WorldSpot.

bool IsSunLight
: Gets a value indicating whether this object is a Sun light.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Length
: Gets or sets the height in linear and rectangular lights.
     (ignored for non-linear/rectangular lights.)

[LightStyle](/rhinocommon/rhino/geometry/lightstyle/) LightStyle
: Gets or sets a light style on this camera.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Location
: Gets or sets the light or 3D position or location.

string Name
: Gets or sets the spot light name.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) PerpendicularDirection
: Gets a perpendicular vector to the camera direction.

double PowerCandela
: Gets or sets the light power in candelas (cd).

double PowerLumens
: Gets or sets the light power in lumens (lm).

double PowerWatts
: Gets or sets the light power in watts (W).

double ShadowIntensity
: Gets or sets the shadow intensity for the light.
: since 6.0

Color Specular
: Gets or sets the specular color.

double SpotAngleRadians
: Gets or sets the spot angle in radians.
     Ignored for non-spot lights.angle = 0 to pi/2  (0 to 90 degrees).

double SpotExponent
: The spot exponent varies from 0.0 to 128.0 and provides
     an exponential interface for controling the focus or 
     concentration of a spotlight (like the 
     OpenGL GL_SPOT_EXPONENT parameter).  The spot exponent
     and hot spot parameters are linked; changing one will
     change the other.
     A hot spot setting of 0.0 corresponds to a spot exponent of 128.
     A hot spot setting of 1.0 corresponds to a spot exponent of 0.0.

double SpotLightShadowIntensity
: Gets or sets the spot light shadow intensity.
     (ignored for non-spot lights.)

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Width
: Gets or sets the width in linear and rectangular lights.
     (ignored for non-linear/rectangular lights.)
## Methods

static Light CreateSunLight(double northAngleDegrees,DateTime when,double latitudeDegrees,double longitudeDegrees)
: Constructs a light which simulates the Sun based on a given time and location on Earth.
: Returns - A newly constructed light object.

static Light CreateSunLight(double northAngleDegrees,double azimuthDegrees,double altitudeDegrees)
: Constructs a light that represents the Sun.
: Returns - A new sun light.

static Light CreateSunLight(Sun sun)
: Constructs a light which simulates a .
: Returns - A light.

double GetAttenuation(double d)
: Gets the attenuation settings (ignored for "directional" and "ambient" lights).
     attenuation = 1/(a0 + d*a1 + d^2*a2) where d = distance to light.
: Returns - 0 if a0 + d*a1 + d^2*a2 <= 0.

bool GetSpotLightRadii(double innerRadius,double outerRadius)
: Gets the spot light radii.
: Returns - True if operation succeeded; otherwise, false.

void SetAttenuation(double a0,double a1,double a2)
: Sets the attenuation settings (ignored for "directional" and "ambient" lights).
     attenuation = 1/(a0 + d*a1 + d^2*a2) where d = distance to light.
