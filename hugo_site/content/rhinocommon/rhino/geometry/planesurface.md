---
title: "PlaneSurface"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a plane surface, with plane and two intervals.
```cs
[Serializable]
public class PlaneSurface : Surface
```
## Constructors

PlaneSurface(Plane plane,Interval xExtents,Interval yExtents)
: Initializes a plane surface with x and y intervals.
## Methods

static PlaneSurface CreateThroughBox(Line lineInPlane,Vector3d vectorInPlane,BoundingBox box)
: Makes a plane that includes a line and a vector and goes through a bounding box.
: Returns - A new plane surface on success, or None on error.

static PlaneSurface CreateThroughBox(Plane plane,BoundingBox box)
: Extends a plane into a plane surface so that the latter goes through a bounding box.
: Returns - A new plane surface on success, or None on error.
