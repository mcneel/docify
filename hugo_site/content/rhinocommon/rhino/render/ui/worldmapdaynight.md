---
title: "WorldMapDayNight"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render.UI](../)*

```cs
public class WorldMapDayNight : IDisposable
```
## Constructors

WorldMapDayNight()
: 
: since 6.0
## Methods

void Dispose()
: 
: since 6.0

bool HasMapForCurrentSettings()
: 
: since 6.0

System.Drawing.Point LocationToMap(Point2d latlong)
: 
: since 6.0

void MakeMapBitmap()
: 
: since 6.0

System.Drawing.Image Map()
: 
: since 6.0

Rhino.Geometry.Point2d MapToLocation(Point mapPoint)
: 
: since 6.0

void SetDayNightDisplay(bool bOn)
: 
: since 6.0

void SetEnabled(bool bEnabled)
: 
: since 6.0

void SetTimeInfo(DateTime dt,double timezone,int daylightSavingMinutes,bool bDaylightSavingsOn)
: 
: since 6.0
