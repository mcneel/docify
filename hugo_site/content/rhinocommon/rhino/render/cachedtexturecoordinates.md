---
title: "CachedTextureCoordinates"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Used for cached texture coordinates
```cs
public class CachedTextureCoordinates : Runtime.CommonObject, IList<Point3d>
```
## Properties

int Count
: Number of cached coordinates.
: since 5.10

int Dim
: Coordinate dimension: 2 = UV, 3 = UVW
: since 5.10

bool IsReadOnly
: This collection is always read-only
: since 5.10

Guid MappingId
: The texture mapping Id.
: since 5.10
## Methods

bool Contains(Point3d item)
: Determines whether this collection contains a specific value.
: since 5.10

void CopyTo(Point3d[] array,int arrayIndex)
: Copies the elements of the this collection to an System.Array,
     starting at a particular System.Array index.
: since 5.10

IEnumerator<Point3d> GetEnumerator()
: Returns an enumerator that iterates through this collection.
: Returns - A enumerator that can be used to iterate through this collection.
: since 5.10

int IndexOf(Point3d item)
: Determines the index of a specific point in this collection.
: Returns - The index of item if found in the list; otherwise, -1.
: since 5.10

bool TryGetAt(int index,double u,double v,double w)
: Use this method to iterate the cached texture coordinate array.
: Returns - Returns True if index is valid; otherwise returns false.
: since 5.10
