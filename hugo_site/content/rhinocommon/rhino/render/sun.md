---
title: "Sun"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Represents the Sun on a little portion of Earth.
```cs
public class Sun : DocumentOrFreeFloatingBase, IDisposable
```
## Constructors

Sun()
: Create a non-document controlled Sun
## Events

static Changed
: This event is raised when a Sun property value is changed.
: since 5.10
## Properties

double Altitude
: Get the altitude for the sun. To set use SetPosition(azimuth, altitude)

double Azimuth
: Get the azimuth for the sun. To set use SetPosition(azimuth, altitude)

bool DaylightSaving
: Daylight savings time
: since 5.10

int DaylightSavingMinutes
: Daylight saving minutes
: since 6.0

bool Enabled
: Turn the sun on/off in this document.

double Intensity
: Sun intensity.
: since 7.0

double Latitude
: 

[Light](/rhinocommon/rhino/geometry/light/) Light
: Get a Light which represents the sun. If manual control is in effect, no sun calculation
     is performed; the function uses the values last used in calls to Azimuth, Altitude
     or Vector. If manual control is not in effect, the observer's position, date, time,
     time zone and daylight saving values are used to calculate the position of the sun.
: since 6.0

double Longitude
: 

bool ManualControl
: Set angles directly or use place/date/time
: since 5.10

double North
: Angle in degrees on world X-Y plane that should be considered north in the model. Angle is
     measured starting at X-Axis and travels counterclockwise. Y-Axis would be a north angle of 90
     degrees.

bool SkylightOn
: Turn skylight on or off.
: since 5.10

double TimeZone
: Measured in hours += UTC
: since 5.10

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Vector
: 
## Methods

static double AltitudeFromValues(double latitude,double longitude,double timezoneHours,int daylightMinutes,DateTime when,double hours,bool fast)
: 
: since 6.0

static System.Drawing.Color ColorFromAltitude(double altitudeDegrees)
: Get sun color based on altitude.
: Returns - Returns color for altitude.
: since 6.0

static bool Here(double latitude,double longitude)
: 
: since 6.0

static double JulianDay(double timezoneHours,int daylightMinutes,DateTime when,double hours)
: 
: since 6.0

static Geometry.Vector3d SunDirection(double latitude,double longitude,DateTime when)
: 

static double TwilightZone()
: 
: since 6.0

void CopyFrom(FreeFloatingBase src)
: 
: since 6.0

void Dispose()
: 

DateTime GetDateTime(DateTimeKind kind)
: 

void SetDateTime(DateTime time,DateTimeKind kind)
: 
: since 6.0

void SetPosition(DateTime when,double latitudeDegrees,double longitudeDegrees)
: Sets position of the sun based on physical location and time.

void SetPosition(double azimuthDegrees,double altitudeDegrees)
: Sets position of the Sun based on azimuth and altitude values.
     Using this function will also set sun to manual.

void ShowDialog()
: Show the tabbed sun dialog.
