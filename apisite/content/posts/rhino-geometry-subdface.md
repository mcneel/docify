---
title: "Rhino.Geometry.SubDFace"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## int EdgeCount
- (summary) 
     Number of edges for this face. Note that EdgeCount is always the same
     as VertexCount. Two properties are provided simply for clarity.
     
- (since) 7.0
## Point3d LimitSurfaceCenterPoint
- (summary) 
     Get the limit surface point location at the center of the face
     
- (since) 7.0
## int VertexCount
- (summary) 
     Number of vertices for this face. Note that EdgeCount is always the same
     as VertexCount. Two properties are provided simply for clarity.
     
- (since) 7.0
# Methods
## SubDEdge EdgeAt(int index)
- (summary) 
     Get an edge at a given index
     
- (since) 7.0
- (returns) SubDEdge This is some return comment
## bool EdgeDirectionMatchesFaceOrientation(int index)
- (summary) 
     Check if a given edge in this face has the same direction as the face orientation
     
- (since) 7.0
- (returns) bool This is some return comment
## SubDVertex VertexAt(int index)
- (summary) 
     Get a vertex that this face uses by index
     
- (since) 7.0
- (returns) SubDVertex This is some return comment
