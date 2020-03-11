---
title: "BrepLoopList"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to all the Loops in a Brep object.
```cs
public class BrepLoopList : IEnumerable<BrepLoop>, Rhino.Collections.IRhinoTable<BrepLoop>
```
## Properties

int Count
: Gets the number of brep loops.
## Methods

[BrepLoop](/rhinocommon/rhino/geometry/breploop/) Add(BrepLoopType loopType)
: Create a new empty boundary loop. The new loop will not be part of a face and
     will not include any trim curves.
: since 5.4

[BrepLoop](/rhinocommon/rhino/geometry/breploop/) Add(BrepLoopType loopType,BrepFace face)
: Create a new boundary loop on a face.  After you get this
     BrepLoop, you still need to create the vertices, edges, 
     and trims that define the loop.
: Returns - New loop that needs to be filled in
: since 5.4

[BrepLoop](/rhinocommon/rhino/geometry/breploop/) AddOuterLoop(int faceIndex)
: Create a new outer boundary loop that runs along the sides
     of the face's surface.  All the necessary trims, edges,
     and vertices are created and added to the brep.
: Returns - New outer boundary loop that is complete.
: since 5.4

[BrepLoop](/rhinocommon/rhino/geometry/breploop/) AddPlanarFaceLoop(int faceIndex,BrepLoopType loopType,IEnumerable<Curve> boundaryCurves)
: Add a planar trimming loop to a planar face
: Returns - new loop if successful
: since 5.4

IEnumerator<BrepLoop> GetEnumerator()
: Gets an enumerator that visits all edges.
: Returns - The enumerator.
