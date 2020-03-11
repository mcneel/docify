---
title: "TimeZone"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

TimeZone
```cs
public class TimeZone
```
## Properties

double Hours
: Gets hours of a time zone.
: since 6.0

double Latitude
: Returns the latitude of a major city nearby
: Returns - Latitude
: since 6.15

double Longitude
: Returns the Longitude of a major city nearby
: Returns - Longitude
: since 6.15

String Name
: Gets name of a time zone.
: since 6.0
## Methods

static TimeZone TimeZoneAt(int index)
: Returns a time zone at given index.
: Returns - Time zone at index.
: since 6.0

static int TimeZones()
: Returns number of available time zones.
: Returns - Time zone count.
: since 6.0
