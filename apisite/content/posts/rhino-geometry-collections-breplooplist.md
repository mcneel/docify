---
title: "BrepLoopList"
draft: false
---

*Namespace: Rhino.Geometry.Collections*

   Provides access to all the Loops in a Brep object.
   
## Properties
#### int Count
- (summary) 
     Gets the number of brep loops.
     
- (since) 5.0
## Methods
#### BrepLoop Add(BrepLoopType loopType)
- (summary) 
     Create a new empty boundary loop. The new loop will not be part of a face and
     will not include any trim curves.
     
- (since) 5.4
- (returns) BrepLoop This is some return comment
#### BrepLoop Add(BrepLoopType loopType,BrepFace face)
- (summary) 
     Create a new boundary loop on a face.  After you get this
     BrepLoop, you still need to create the vertices, edges, 
     and trims that define the loop.
     
- (since) 5.4
- (returns) BrepLoop This is some return comment
#### BrepLoop AddOuterLoop(int faceIndex)
- (summary) 
     Create a new outer boundary loop that runs along the sides
     of the face's surface.  All the necessary trims, edges,
     and vertices are created and added to the brep.
     
- (since) 5.4
- (returns) BrepLoop This is some return comment
#### BrepLoop AddPlanarFaceLoop(int faceIndex,BrepLoopType loopType,IEnumerable<Curve> boundaryCurves)
- (summary) 
     Add a planar trimming loop to a planar face
     
- (since) 5.4
- (returns) BrepLoop This is some return comment
#### IEnumerator<BrepLoop> GetEnumerator()
- (summary) 
     Gets an enumerator that visits all edges.
     
- (since) 5.0
- (returns) IEnumerator<BrepLoop> This is some return comment
