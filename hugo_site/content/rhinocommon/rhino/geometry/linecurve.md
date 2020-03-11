---
title: "LineCurve"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a linear curve.
```cs
[Serializable]
public class LineCurve : Curve
```
## Constructors

LineCurve()
: Initializes a new instance of the  class.

LineCurve(Line line)
: Initializes a new instance of the  class, by
     retrieving its value from a line.

LineCurve(Line line,double t0,double t1)
: Initializes a new instance of the  class, by
     retrieving its value from a line and setting the domain.

LineCurve(LineCurve other)
: Initializes a new instance of the  class, by
     copying values from another linear curve.

LineCurve(Point2d from,Point2d to)
: Initializes a new instance of the  class, by
     setting start and end point from two 2D points.

LineCurve(Point3d from,Point3d to)
: Initializes a new instance of the  class, by
     setting start and end point from two 3D points.
## Properties

[Line](/rhinocommon/rhino/geometry/line/) Line
: Gets or sets the Line value inside this curve.
