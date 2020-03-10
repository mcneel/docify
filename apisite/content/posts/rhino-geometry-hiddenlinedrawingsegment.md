---
title: "Rhino.Geometry.HiddenLineDrawingSegment"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## Curve CurveGeometry
- (summary)  The actual curve geometry 
- (since) 6.0
## SideFill[] CurveSideFills
- (summary) 
     The SideFill fields are only valid for visible curves.
     With respect to the HiddenLineDrawing, the region to the left (or right respecively) of this curve is
     described by CurveSideFills[0] or CurveSideFills[1], respectively.  If exactly one of these regions is empty 
     this is a scene silhouette. If this region conains a surface it is either a surface which in 3-D is adjacent 
     to this edge or it an surface that is further away from the camera, we call this a shadow surface.  
     unknown is used for unset values and for projecting curves
     
- (since) 6.0
## int Index
- (summary) 
     Index of this curve in HiddenLineDrawing.Curves.
     
- (since) 6.0
## bool IsSceneSilhouette
- (summary) 
     Returns True if this curve is a scene silhoutte.
     
- (since) 6.0
## HiddenLineDrawingObjectCurve ParentCurve
- (summary) 
     This curve is a subcurve of the returned HiddenLineDrawingFullCurve object.
     
- (since) 6.0
## Visibility SegmentVisibility
- (summary) 
     Returns the segment's visibility
     
- (since) 6.0
