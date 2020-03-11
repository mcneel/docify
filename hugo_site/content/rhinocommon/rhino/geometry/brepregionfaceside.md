---
title: "BrepRegionFaceSide"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a side of a  entity.
```cs
public class BrepRegionFaceSide : Runtime.CommonObject
```
## Properties

[Brep](/rhinocommon/rhino/geometry/brep/) Brep
: The brep this side belongs to.

[BrepFace](/rhinocommon/rhino/geometry/brepface/) Face
: Gets the face this side belongs to.

[BrepRegion](/rhinocommon/rhino/geometry/brepregion/) Region
: The region this side belongs to.

bool SurfaceNormalPointsIntoRegion
: Gets True if BrepFace's surface normal points into region; False otherwise.
