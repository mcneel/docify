---
title: "BrepRegion"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a brep topological region that has sides.
```cs
public class BrepRegion : Runtime.CommonObject
```
## Properties

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox
: Gets the region bounding box.

[Brep](/rhinocommon/rhino/geometry/brep/) Brep
: Gets a reference to the Brep this region belongs to.

int Index
: Gets the index of region in the RegionTopology array.

bool IsFinite
: Gets a value indicating whether this region is finite.
## Methods

[Brep](/rhinocommon/rhino/geometry/brep/) BoundaryBrep()
: Gets the boundary of a region as a brep object. If the region is finite,
     the boundary will be a closed  manifold brep. The boundary may have more than one
     connected component.
: Returns - A brep or None on error.

[BrepRegionFaceSide](/rhinocommon/rhino/geometry/brepregionfaceside/)[] GetFaceSides()
: Gets an array of  entities delimiting this region.
: Returns - An array of region face sides. This array might be empty on failure.
