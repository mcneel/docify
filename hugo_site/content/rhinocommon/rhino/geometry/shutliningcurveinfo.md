---
title: "ShutLiningCurveInfo"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Contains shutlining curve information. This is used in .
```cs
public class ShutLiningCurveInfo
```
## Constructors

ShutLiningCurveInfo(Curve curve,double radius,int profile,bool pull,bool isBump,IEnumerable<Interval> curveIntervals,bool enabled)
: Creates a new instance of the ShutLining curve information class.
: since 6.0
## Properties

[Curve](/rhinocommon/rhino/geometry/curve/) Curve
: The profile curve.
: since 6.0

ReadOnlyCollection<Interval> CurveIntervals
: The parts of the curve to use as profiles.
: since 6.0

bool Enabled
: If true, this curve is active.
: since 6.0

bool IsBump
: True if profile constitutes a bump. See Rhino's Help for more information.
: since 6.0

int Profile
: >The profile type.
: since 6.0

bool Pull
: True if the curve should be pulled.
: since 6.0

double Radius
: The profile radius.
: since 6.0
