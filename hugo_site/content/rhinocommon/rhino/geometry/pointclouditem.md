---
title: "PointCloudItem"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a single item in a pointcloud. A PointCloud item 
   always has a location, but it has an optional normal vector and color.
```cs
public class PointCloudItem
```
## Properties

Color Color
: Gets or sets the color of this point cloud item.

bool Hidden
: Gets or sets the hidden flag of this point cloud item.

int Index
: Gets the index of this point cloud item.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Location
: Gets or sets the location of this point cloud item.

[Vector3d](/rhinocommon/rhino/geometry/vector3d/) Normal
: Gets or sets the normal vector for this point cloud item.

double X
: Gets or sets the X component of this point cloud item location.

double Y
: Gets or sets the Y component of this point cloud item location.

double Z
: Gets or sets the Z component of this point cloud item location.
