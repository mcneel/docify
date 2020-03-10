---
title: "Rhino.Geometry.Light"
draft: false
---

# Constructors
## Rhino.Geometry.Light()
- (summary) 
     Initializes a new light.
     
- (since) 5.0
# Properties
## System.Drawing.Color Ambient
- (summary) 
     Gets or sets the ambient color.
     
- (since) 5.0
## Attenuation AttenuationType
- (summary) 
     Get the type of attenuation for this light.
     
- (since) 7.0
## Vector3d AttenuationVector
- (summary) 
     Gets or Sets the attenuation vector.
     
- (since) 5.7
## DocObjects.CoordinateSystem CoordinateSystem
- (summary) 
     Gets a value, determined by LightStyle, that explains whether
     the camera directions are relative to World or Camera spaces.
     
- (since) 5.0
## System.Drawing.Color Diffuse
- (summary) 
     Gets or sets the diffuse color.
     
- (since) 5.0
## Vector3d Direction
- (summary) 
     Gets or sets the vector direction of the camera.
     
- (since) 5.0
## double HotSpot
- (summary) 
     The hot spot setting runs from 0.0 to 1.0 and is used to
     provides a linear interface for controling the focus or 
     concentration of a spotlight.
     A hot spot setting of 0.0 corresponds to a spot exponent of 128.
     A hot spot setting of 1.0 corresponds to a spot exponent of 0.0.
     
- (since) 5.0
## Guid Id
- (summary) Gets the ID of this light.
- (since) 6.0
## double Intensity
- (summary) 
     Gets or sets the light intensity.
     
- (since) 5.0
## bool IsDirectionalLight
- (summary) 
     Gets a value indicating whether the light style
     is  CameraDirectional or WorldDirectional.
     
- (since) 5.0
## bool IsEnabled
- (summary) 
     Gets or sets a value that defines if the light is turned on (true) or off (false).
     
- (since) 5.0
## bool IsLinearLight
- (summary) 
     Gets a value indicating whether the light style
     is  WorldLinear.
     
- (since) 5.0
## bool IsPointLight
- (summary) 
     Gets a value indicating whether the light style
     is  CameraPoint or WorldPoint.
     
- (since) 5.0
## bool IsRectangularLight
- (summary) 
     Gets a value indicating whether the light style
     is  WorldRectangular.
     
- (since) 5.0
## bool IsSpotLight
- (summary) 
     Gets a value indicating whether the light style
     is  CameraSpot or WorldSpot.
     
- (since) 5.0
## bool IsSunLight
- (summary) 
     Gets a value indicating whether this object is a Sun light.
     
- (since) 5.0
## Vector3d Length
- (summary) 
     Gets or sets the height in linear and rectangular lights.
     (ignored for non-linear/rectangular lights.)
- (since) 5.0
## LightStyle LightStyle
- (summary) 
     Gets or sets a light style on this camera.
     
- (since) 5.0
## Point3d Location
- (summary) 
     Gets or sets the light or 3D position or location.
     
- (since) 5.0
## string Name
- (summary) 
     Gets or sets the spot light name.
     
- (since) 5.0
## Vector3d PerpendicularDirection
- (summary) 
     Gets a perpendicular vector to the camera direction.
     
- (since) 5.0
## double PowerCandela
- (summary) 
     Gets or sets the light power in candelas (cd).
     
- (since) 5.0
## double PowerLumens
- (summary) 
     Gets or sets the light power in lumens (lm).
     
- (since) 5.0
## double PowerWatts
- (summary) 
     Gets or sets the light power in watts (W).
     
- (since) 5.0
## double ShadowIntensity
- (summary) 
     Gets or sets the shadow intensity for the light.
     
- (since) 6.0
## System.Drawing.Color Specular
- (summary) 
     Gets or sets the specular color.
     
- (since) 5.0
## double SpotAngleRadians
- (summary) 
     Gets or sets the spot angle in radians.
     Ignored for non-spot lights.angle = 0 to pi/2  (0 to 90 degrees).
- (since) 5.0
## double SpotExponent
- (summary) 
     The spot exponent varies from 0.0 to 128.0 and provides
     an exponential interface for controling the focus or 
     concentration of a spotlight (like the 
     OpenGL GL_SPOT_EXPONENT parameter).  The spot exponent
     and hot spot parameters are linked; changing one will
     change the other.
     A hot spot setting of 0.0 corresponds to a spot exponent of 128.
     A hot spot setting of 1.0 corresponds to a spot exponent of 0.0.
     
- (since) 5.0
## double SpotLightShadowIntensity
- (summary) 
     Gets or sets the spot light shadow intensity.
     (ignored for non-spot lights.)
- (since) 5.0
## Vector3d Width
- (summary) 
     Gets or sets the width in linear and rectangular lights.
     (ignored for non-linear/rectangular lights.)
- (since) 5.0
# Methods
## static Light CreateSunLight(double northAngleDegrees,DateTime when,double latitudeDegrees,double longitudeDegrees)
- (summary) 
     Constructs a light which simulates the Sun based on a given time and location on Earth.
     
- (since) 5.0
- (returns) Light This is some return comment
## static Light CreateSunLight(double northAngleDegrees,double azimuthDegrees,double altitudeDegrees)
- (summary) 
     Constructs a light that represents the Sun.
     
- (since) 5.0
- (returns) Light This is some return comment
## static Light CreateSunLight(Sun sun)
- (summary) 
     Constructs a light which simulates a .
     
- (since) 5.0
- (returns) Light This is some return comment
## double GetAttenuation(double d)
- (summary) 
     Gets the attenuation settings (ignored for "directional" and "ambient" lights).
     attenuation = 1/(a0 + d*a1 + d^2*a2) where d = distance to light.
- (since) 5.0
- (returns) double This is some return comment
## bool GetSpotLightRadii(double innerRadius,double outerRadius)
- (summary) 
     Gets the spot light radii.
     
- (since) 5.0
- (returns) bool This is some return comment
## void SetAttenuation(double a0,double a1,double a2)
- (summary) 
     Sets the attenuation settings (ignored for "directional" and "ambient" lights).
     attenuation = 1/(a0 + d*a1 + d^2*a2) where d = distance to light.
- (since) 5.0
- (returns) void This is some return comment
