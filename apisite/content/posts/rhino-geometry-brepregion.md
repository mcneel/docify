---
title: "Rhino.Geometry.BrepRegion"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## BoundingBox BoundingBox
- (summary) Gets the region bounding box.
- (since) 5.0
## Brep Brep
- (summary) Gets a reference to the Brep this region belongs to.
- (since) 5.0
## int Index
- (summary) Gets the index of region in the RegionTopology array.
- (since) 5.0
## bool IsFinite
- (summary) 
     Gets a value indicating whether this region is finite.
     
- (since) 5.0
# Methods
## Brep BoundaryBrep()
- (summary) 
     Gets the boundary of a region as a brep object. If the region is finite,
     the boundary will be a closed  manifold brep. The boundary may have more than one
     connected component.
     
- (since) 5.0
- (returns) Brep This is some return comment
## BrepRegionFaceSide[] GetFaceSides()
- (summary) 
     Gets an array of  entities delimiting this region.
     
- (since) 5.0
- (returns) BrepRegionFaceSide[] This is some return comment
