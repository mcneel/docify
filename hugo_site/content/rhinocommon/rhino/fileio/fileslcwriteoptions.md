---
title: "FileSlcWriteOptions"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Options used when writing a slc file
```cs
public class FileSlcWriteOptions
```
## Properties

double AngleBetweenSegmentsDegrees
: The angle that determines how smooth the polylines of the slice curves
     will be. When the number is small you will get a smooth final output
     but it will take more time to export and a larger file.
: since 7.0

[Point3d](/rhinocommon/rhino/geometry/point3d/) EndPoint
: End of the slicing normal
: since 7.0

double SliceDistance
: The distance between the slices or layers of curves that your final
     output will contain. The distance should be based on the slice
     thickness of your final output device
: since 7.0

[Point3d](/rhinocommon/rhino/geometry/point3d/) StartPoint
: Start of the slicing normal
: since 7.0

bool UseMeshes
: Use meshes to generate slices. The curves for each slice are generated
     by intersecting the object mesh with a plane. the Angle between
     polyline segments data is not used when this value is true
: since 7.0
