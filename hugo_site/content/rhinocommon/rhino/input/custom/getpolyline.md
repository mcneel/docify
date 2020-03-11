---
title: "GetPolyline"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Input.Custom](../)*

Use to interactively get a polyline.
```cs
public class GetPolyline : IDisposable
```
## Constructors

GetPolyline()
: 
: since 6.0
## Properties

string FirstPointPrompt
: Prompt when getting first point
: since 6.0

string FourthPointPrompt
: Prompt when getting fourth point
: since 6.0

int MaxPointCount
: 
: since 6.0

int MinPointCount
: 
: since 6.0

string SecondPointPrompt
: Prompt when getting second point
: since 6.0

string ThirdPointPrompt
: Prompt when getting third point
: since 6.0
## Methods

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 6.0

Commands.Result Get(Polyline polyline)
: Perform the 'get' operation.
: since 6.0

void SetFirstPoint(Point3d point)
: Use SetFirstPoint to specify the line's starting point and skip
     the start point interactive picking
: since 6.0
