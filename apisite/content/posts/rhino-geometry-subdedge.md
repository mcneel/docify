---
title: "Rhino.Geometry.SubDEdge"
draft: false
---

# Properties
## Line ControlNetLine
- (summary) 
     Line representing the control net end points
     
- (since) 7.0
## int FaceCount
- (summary)  Number of faces for this edge 
- (since) 7.0
## SubDEdgeTag Tag
- (summary) 
     identifies the type of subdivision edge
     
- (since) 7.0
## SubDVertex VertexFrom
- (summary) 
     Start vertex for this edge
     
- (since) 7.0
## SubDVertex VertexTo
- (summary) 
     End vertex for this edge
     
- (since) 7.0
# Methods
## SubDFace FaceAt(int index)
- (summary) 
     Retrieve a SubDFace from this edge
     
- (since) 7.0
- (returns) SubDFace This is some return comment
## NurbsCurve ToNurbsCurve(bool clampEnds)
- (summary) 
     Get a cubic, uniform, nonrational, NURBS curve that is on the
     edge's limit curve.
     
- (since) 7.0
- (returns) NurbsCurve This is some return comment
