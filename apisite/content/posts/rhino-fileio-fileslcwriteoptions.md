---
title: "FileSlcWriteOptions"
draft: false
---

*Namespace: Rhino.FileIO*
 Options used when writing a slc file 
## Properties
#### double AngleBetweenSegmentsDegrees
- (summary) 
     The angle that determines how smooth the polylines of the slice curves
     will be. When the number is small you will get a smooth final output
     but it will take more time to export and a larger file.
     
- (since) 7.0
#### Point3d EndPoint
- (summary) 
     End of the slicing normal
     
- (since) 7.0
#### double SliceDistance
- (summary) 
     The distance between the slices or layers of curves that your final
     output will contain. The distance should be based on the slice
     thickness of your final output device
     
- (since) 7.0
#### Point3d StartPoint
- (summary) 
     Start of the slicing normal
     
- (since) 7.0
#### bool UseMeshes
- (summary) 
     Use meshes to generate slices. The curves for each slice are generated
     by intersecting the object mesh with a plane. the Angle between
     polyline segments data is not used when this value is true
     
- (since) 7.0
