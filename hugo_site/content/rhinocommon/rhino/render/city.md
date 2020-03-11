---
title: "City"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

City
```cs
public class City
```
## Properties

double Latitude
: Gets latitude of city.
: since 6.0

double Longitude
: Gets longitude of city.
: since 6.0

String Name
: Gets name of city.
: since 6.0

double TimeZone
: Gets time zone of city.
: since 6.0
## Methods

static int Cities()
: Returns number of available cities.
: Returns - City count.
: since 6.0

static City CityAt(int index)
: Returns city at given index.
: Returns - City at index.
: since 6.0

static City FindNearest(double latitude,double longitude)
: Finds nearest city of specified input parameters.
: Returns - Nearest city.
: since 6.0
