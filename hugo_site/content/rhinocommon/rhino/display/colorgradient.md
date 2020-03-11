---
title: "ColorGradient"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Display](../)*

```cs
public class ColorGradient
```
## Properties

[Point3d](/rhinocommon/rhino/geometry/point3d/) EndPoint
: End point of gradient
: since 7.0

[GradientType](/rhinocommon/rhino/display/gradienttype/) GradientType
: Gradient fill type associated with this hatch
: since 7.0

double Repeat
: Repeat factor for gradient. Factors greater than 1 define a reflected
     repeat factor while values less than -1 define a wrapped repeat factor.
: since 7.0

[Point3d](/rhinocommon/rhino/geometry/point3d/) StartPoint
: Start point of gradient
: since 7.0
## Methods

[ColorStop](/rhinocommon/rhino/display/colorstop/)[] GetColorStops()
: Get sorted list of colors / positions that a gradient is defined over
: since 7.0

void SetColorStops(IEnumerable<ColorStop> stops)
: Set color stops for the gradient
: since 7.0
