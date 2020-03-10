---
title: "Rhino.Render.Sun"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Render.Sun()
- (summary) 
     Create a non-document controlled Sun
     
- (since) 5.0
# Events
## static Changed
- (summary) 
     This event is raised when a Sun property value is changed.
     
- (since) 5.10
# Properties
## double Altitude
- (summary) 
     Get the altitude for the sun. To set use SetPosition(azimuth, altitude)
     
- (since) 5.0
## double Azimuth
- (summary) 
     Get the azimuth for the sun. To set use SetPosition(azimuth, altitude)
     
- (since) 5.0
## bool DaylightSaving
- (summary) Daylight savings time
- (since) 5.10
## int DaylightSavingMinutes
- (summary) Daylight saving minutes
- (since) 6.0
## bool Enabled
- (summary) Turn the sun on/off in this document.
- (since) 5.0
## double Intensity
- (summary) 
     Sun intensity.
     
- (since) 7.0
## double Latitude
- (summary) 
- (since) 5.0
## Geometry.Light Light
- (summary) 
     Get a Light which represents the sun. If manual control is in effect, no sun calculation
     is performed; the function uses the values last used in calls to Azimuth, Altitude
     or Vector. If manual control is not in effect, the observer's position, date, time,
     time zone and daylight saving values are used to calculate the position of the sun.
     
- (since) 6.0
## double Longitude
- (summary) 
- (since) 5.0
## bool ManualControl
- (summary) Set angles directly or use place/date/time
- (since) 5.10
## double North
- (summary) 
     Angle in degrees on world X-Y plane that should be considered north in the model. Angle is
     measured starting at X-Axis and travels counterclockwise. Y-Axis would be a north angle of 90
     degrees.
     
- (since) 5.0
## bool SkylightOn
- (summary) Turn skylight on or off.
- (since) 5.10
## double TimeZone
- (summary) 
     Measured in hours += UTC
     
- (since) 5.10
## Geometry.Vector3d Vector
- (summary) 
- (since) 5.0
# Methods
## static double AltitudeFromValues(double latitude,double longitude,double timezoneHours,int daylightMinutes,DateTime when,double hours,bool fast)
- (summary) 
- (since) 6.0
- (returns) double This is some return comment
## static System.Drawing.Color ColorFromAltitude(double altitudeDegrees)
- (summary) Get sun color based on altitude.
- (since) 6.0
- (returns) System.Drawing.Color This is some return comment
## static bool Here(double latitude,double longitude)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## static double JulianDay(double timezoneHours,int daylightMinutes,DateTime when,double hours)
- (summary) 
- (since) 6.0
- (returns) double This is some return comment
## static Geometry.Vector3d SunDirection(double latitude,double longitude,DateTime when)
- (summary) 
- (since) 5.0
- (returns) Geometry.Vector3d This is some return comment
## static double TwilightZone()
- (summary) 
- (since) 6.0
- (returns) double This is some return comment
## void CopyFrom(FreeFloatingBase src)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## void Dispose()
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## DateTime GetDateTime(DateTimeKind kind)
- (summary) 
- (since) 5.0
- (returns) DateTime This is some return comment
## void SetDateTime(DateTime time,DateTimeKind kind)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## void SetPosition(DateTime when,double latitudeDegrees,double longitudeDegrees)
- (summary) 
     Sets position of the sun based on physical location and time.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetPosition(double azimuthDegrees,double altitudeDegrees)
- (summary) 
     Sets position of the Sun based on azimuth and altitude values.
     Using this function will also set sun to manual.
     
- (since) 5.0
- (returns) void This is some return comment
## void ShowDialog()
- (summary) Show the tabbed sun dialog.
- (since) 5.0
- (returns) void This is some return comment
