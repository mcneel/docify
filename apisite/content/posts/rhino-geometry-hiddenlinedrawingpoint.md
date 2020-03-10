---
title: "HiddenLineDrawingPoint"
draft: false
---

*Namespace: Rhino.Geometry*

   Points generated from source objects which coorespond to point and point cloud source objects.
   
## Properties
#### int ClippingPlaneIndex
- (summary) 
     Index into HiddenLineDrawing.ClippingPlanes when SilhouetteType == SilhouetteType.SectionCut.
     
- (since) 6.8
#### int Index
- (summary) 
     Index of this object in HiddenLineDrawing.Points.
     
- (since) 6.8
#### Point3d Location
- (summary) 
     Returns the location of this object in HiddenLineDrawing coordinates.
     
- (since) 6.8
#### Visibility PointVisibility
- (summary) 
     Returns the point's visibility
     
- (since) 6.8
#### HiddenLineDrawingObject SourceObject
- (summary) 
     Return the source object that this point came from.
     
- (since) 6.8
#### ComponentIndex SourceObjectComponentIndex
- (summary) 
     Component of source object part that generated this curve.
     
- (since) 6.8
