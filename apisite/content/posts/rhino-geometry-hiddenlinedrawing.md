---
title: "Rhino.Geometry.HiddenLineDrawing"
draft: false
---

# Properties
## IEnumerable<HiddenLineDrawingPoint> Points
- (summary) 
     Point objects calculated by the hidden line drawing.
     
- (since) 6.8
## IEnumerable<HiddenLineDrawingSegment> Segments
- (summary) 
     Subcurve objects calculated by the hidden line drawing.
     
- (since) 6.0
## ViewportInfo Viewport
- (summary)  Returns the ViewportInfo used by the hidden line drawing.
- (since) 6.0
## Transform WorldToHiddenLine
- (summary) 
     Returns the world-coordinate system to HLD-coordinate system transformation. 
     
- (since) 6.0
# Methods
## static HiddenLineDrawing Compute(HiddenLineDrawingParameters parameters,bool multipleThreads)
- (summary) 
     Perform the hidden line drawing calculation based on input parameters
     
- (since) 6.0
- (returns) HiddenLineDrawing This is some return comment
## static HiddenLineDrawing Compute(HiddenLineDrawingParameters parameters,bool multipleThreads,IProgress<double> progress,CancellationToken cancelToken)
- (summary) 
     Perform the hidden line drawing calculation based on input parameters
     
- (since) 6.0
- (returns) HiddenLineDrawing This is some return comment
## BoundingBox BoundingBox(bool includeHidden)
- (summary) 
     Get tight bounding box of the hidden line drawing.
     
- (since) 6.0
- (returns) BoundingBox This is some return comment
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 6.0
- (returns) void This is some return comment
