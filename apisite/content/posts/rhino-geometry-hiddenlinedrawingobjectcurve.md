---
title: "Rhino.Geometry.HiddenLineDrawingObjectCurve"
draft: false
---

# Properties
## int ClippingPlaneIndex
- (summary) 
     Index into HiddenLineDrawing.ClippingPlanes when SilhouetteType == SilhouetteType.SectionCut.
     
- (since) 6.0
## int Index
- (summary) 
     Index of this object in HiddenLineDrawing.FullCurves.
     
- (since) 6.0
## bool IsProjecting
- (summary) 
     Returns True if all the non clipped portions of this curve are projecting.
     
- (since) 6.0
## bool IsValid
- (summary) 
     Verifies the object is valid.
     
- (since) 6.0
## double OriginalDomainStart
- (summary) 
     Initialized to RhinoMath.UnsetValue. Valid if the full curve is closed.
     Rejoin can reparmeterize the curve by moving the seam.  When this has been
      done the original domain start is stored here.
     
- (since) 6.0
## double[] Parameters
- (summary) 
     Increasing, partition of curve.Domain.
     
- (since) 6.0
## HiddenLineDrawingSegment[] Segments
- (summary) 
     The HiddenLineDrawingCurve objects that make up this full curve.
     
- (since) 6.0
## SilhouetteType SilhouetteType
- (summary) 
     The silhouette event type
     
- (since) 6.0
## HiddenLineDrawingObject SourceObject
- (summary) 
     Return the source object that this curve came from
     
- (since) 6.0
## ComponentIndex SourceObjectComponentIndex
- (summary) 
     Component of source object part that generated this curve.
     
- (since) 6.0
# Methods
## HiddenLineDrawingSegment Curve(double t)
- (summary) 
     Returns the HiddenLineDrawingCurve object containing parameter 't'.
     
- (since) 6.0
- (returns) HiddenLineDrawingSegment This is some return comment
## HiddenLineDrawingSegment Curve(double t,int side)
- (summary) 
     Returns the HiddenLineDrawingCurve object containing parameter 't'.
     
- (since) 6.0
- (returns) HiddenLineDrawingSegment This is some return comment
