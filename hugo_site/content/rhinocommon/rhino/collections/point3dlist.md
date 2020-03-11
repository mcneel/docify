---
title: "Point3dList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Collections](../)*

Represents a list of .
```cs
[Serializable]
public class Point3dList : RhinoList<Point3d>, ICloneable
```
## Constructors

Point3dList()
: Initializes a new empty list with default capacity.

Point3dList(IEnumerable<Point3d> collection)
: Initializes a new point list by copying the values from another set.

Point3dList(int initialCapacity)
: Initializes a new point list with a preallocated initial capacity.

Point3dList(Point3d[] initialPoints)
: Constructs a new point list from values in a point array.
## Properties

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) BoundingBox
: Even though this is a property, it is not a "fast" calculation. Every point is
     evaluated in order to get the bounding box of the list.

[XAccess](/rhinocommon/rhino/collections/point3dlist/xaccess/) X
: Returns an indexer with all X coordinates in this list.

[YAccess](/rhinocommon/rhino/collections/point3dlist/yaccess/) Y
: Returns an indexer with all Y coordinates in this list.

[ZAccess](/rhinocommon/rhino/collections/point3dlist/zaccess/) Z
: Returns an indexer with all Z coordinates in this list.
## Methods

static int ClosestIndexInList(IList<Point3d> list,Point3d testPoint)
: Finds the index of the point in a list of points that is closest to a test point.
: Returns - Index of closest point in the list on success or -1 on error.

static [Point3d](/rhinocommon/rhino/geometry/point3d/) ClosestPointInList(IList<Point3d> list,Point3d testPoint)
: Finds the point in a list of points that is closest to a test point.
: Returns - A point.

void Add(double x,double y,double z)
: Adds a Point3d to the end of the list with given x,y,z coordinates.

int ClosestIndex(Point3d testPoint)
: Finds the index of the point that is closest to a test point in this list.
: Returns - index of closest point in the list on success. -1 on error.

Point3dList Duplicate()
: Returns a deep copy of this point list instance.
: Returns - The duplicated list.
: since 6.0

void SetAllX(double xValue)
: Set all the X values for the points to a single value
: since 5.6

void SetAllY(double yValue)
: Set all the Y values for the points to a single value
: since 5.6

void SetAllZ(double zValue)
: Set all the Z values for the points to a single value
: since 5.6

void Transform(Transform xform)
: Applies a transform to all the points in the list.
