---
title: "Rhino.Render.CachedTextureCoordinates"
draft: false
---

# Properties
## int Count
- (summary) 
     Number of cached coordinates.
     
- (since) 5.10
## int Dim
- (summary) 
     Coordinate dimension: 2 = UV, 3 = UVW
     
- (since) 5.10
## bool IsReadOnly
- (summary) 
     This collection is always read-only
     
- (since) 5.10
## Guid MappingId
- (summary) 
     The texture mapping Id.
     
- (since) 5.10
# Methods
## bool Contains(Point3d item)
- (summary) 
     Determines whether this collection contains a specific value.
     
- (since) 5.10
- (returns) bool This is some return comment
## void CopyTo(Point3d[] array,int arrayIndex)
- (summary) 
     Copies the elements of the this collection to an System.Array,
     starting at a particular System.Array index.
     
- (since) 5.10
- (returns) void This is some return comment
## IEnumerator<Point3d> GetEnumerator()
- (summary) 
     Returns an enumerator that iterates through this collection.
     
- (since) 5.10
- (returns) IEnumerator<Point3d> This is some return comment
## int IndexOf(Point3d item)
- (summary) 
     Determines the index of a specific point in this collection.
     
- (since) 5.10
- (returns) int This is some return comment
## bool TryGetAt(int index,double u,double v,double w)
- (summary) 
     Use this method to iterate the cached texture coordinate array.
     
- (since) 5.10
- (returns) bool This is some return comment
