---
title: "BrepFaceList"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to all the Faces in a Brep object.
```cs
public class BrepFaceList : IEnumerable<BrepFace>, Rhino.Collections.IRhinoTable<BrepFace>
```
## Properties

int Count
: Gets the number of brep faces.
## Methods

[BrepFace](/rhinocommon/rhino/geometry/brepface/) Add(int surfaceIndex)
: Create and add a new face to this list. An incomplete face is added.
     The caller must create and fill in the loops used by the face.
: since 5.4

[BrepFace](/rhinocommon/rhino/geometry/brepface/) Add(Surface surface)
: Add a new face to a brep.  This creates a complete face with
     new vertices at the surface corners, new edges along the surface
     boundary, etc.  The loop of the returned face has four trims that
     correspond to the south, east, north, and west side of the 
     surface in that order.  If you use this version of Add to
     add an exiting brep, then you are responsible for using a tool
     like JoinEdges() to hook the new face to its neighbors.
: since 5.4

[BrepFace](/rhinocommon/rhino/geometry/brepface/) AddConeFace(BrepVertex vertex,BrepEdge edge,bool revEdge)
: Add a new face to the brep whose surface geometry is a 
     ruled cone with the edge as the base and the vertex as
     the apex point.
: since 5.4

[BrepFace](/rhinocommon/rhino/geometry/brepface/) AddRuledFace(BrepEdge edgeA,bool revEdgeA,BrepEdge edgeB,bool revEdgeB)
: Add a new face to the brep whose surface geometry is a 
     ruled surface between two edges.
: since 5.4

[Brep](/rhinocommon/rhino/geometry/brep/) ExtractFace(int faceIndex)
: Extracts a face from a Brep.
: Returns - A brep. This can be null.

void Flip(bool onlyReversedFaces)
: Flips the orientation of faces.

IEnumerator<BrepFace> GetEnumerator()
: Gets an enumerators that yields  objects.
: Returns - The enumerator.

void RemoveAt(int faceIndex)
: Deletes a face at a specified index.

bool RemoveSlits()
: Remove slit trims and slit boundaries from each face.
: Returns - True if any slits were removed
: since 5.10

bool ShrinkFaces()
: Shrinks all the underlying surfaces in this Brep. 
     Sometimes the surfaces extend far beyond the trimming boundaries of the Brep Face. 
     This function will remove those portions of the surfaces that are not used.
: Returns - True on success, False on failure.

bool SplitBipolarFaces()
: Splits surfaces with two singularities, like spheres, so the results
     have at most one singularity.
: Returns - True if successful.

bool SplitClosedFaces(int minimumDegree)
: Splits closed surfaces so they are not closed.
: Returns - True if successful.

bool SplitFaceAtTangents(int faceIndex)
: Splits the face of a Brep at tangent locations.
: Returns - True if successful, False otherwise.
: since 6.0

bool SplitFacesAtTangents()
: Splits all of the faces of a Brep at tangent locations.
: Returns - True if successful, False otherwise.
: since 6.0

bool SplitKinkyFace(int faceIndex,double kinkTolerance)
: Splits a single face into G1 pieces.
: Returns - True on success, False on failure.

bool SplitKinkyFaces()
: Splits any faces with creases into G1 pieces.
: Returns - True on success, False on failure.

bool SplitKinkyFaces(double kinkTolerance)
: Splits any faces with creases into G1 pieces.
: Returns - True on success, False on failure.

bool SplitKinkyFaces(double kinkTolerance,bool compact)
: Splits any faces with creases into G1 pieces.
: Returns - True on success, False on failure.

bool StandardizeFaceSurface(int faceIndex)
: Standardizes the relationship between a BrepFace and the 3d surface it
     uses.  When done, the face will be the only face that references its 3d
     surface, and the orientations of the face and 3d surface will be the same.
: Returns - True if successful.

void StandardizeFaceSurfaces()
: Standardize all faces in the brep.
