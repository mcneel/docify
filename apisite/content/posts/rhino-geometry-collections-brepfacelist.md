---
title: "Rhino.Geometry.Collections.BrepFaceList"
draft: false
---

# Properties
## int Count
- (summary) 
     Gets the number of brep faces.
     
- (since) 5.0
# Methods
## BrepFace Add(int surfaceIndex)
- (summary) 
     Create and add a new face to this list. An incomplete face is added.
     The caller must create and fill in the loops used by the face.
     
- (since) 5.4
- (returns) BrepFace This is some return comment
## BrepFace Add(Surface surface)
- (summary) 
     Add a new face to a brep.  This creates a complete face with
     new vertices at the surface corners, new edges along the surface
     boundary, etc.  The loop of the returned face has four trims that
     correspond to the south, east, north, and west side of the 
     surface in that order.  If you use this version of Add to
     add an exiting brep, then you are responsible for using a tool
     like JoinEdges() to hook the new face to its neighbors.
     
- (since) 5.4
- (returns) BrepFace This is some return comment
## BrepFace AddConeFace(BrepVertex vertex,BrepEdge edge,bool revEdge)
- (summary) 
     Add a new face to the brep whose surface geometry is a 
     ruled cone with the edge as the base and the vertex as
     the apex point.
     
- (since) 5.4
- (returns) BrepFace This is some return comment
## BrepFace AddRuledFace(BrepEdge edgeA,bool revEdgeA,BrepEdge edgeB,bool revEdgeB)
- (summary) 
     Add a new face to the brep whose surface geometry is a 
     ruled surface between two edges.
     
- (since) 5.4
- (returns) BrepFace This is some return comment
## Brep ExtractFace(int faceIndex)
- (summary) 
     Extracts a face from a Brep.
     
- (since) 5.0
- (returns) Brep This is some return comment
## void Flip(bool onlyReversedFaces)
- (summary) 
     Flips the orientation of faces.
     
- (since) 5.0
- (returns) void This is some return comment
## IEnumerator<BrepFace> GetEnumerator()
- (summary) 
     Gets an enumerators that yields  objects.
     
- (since) 5.0
- (returns) IEnumerator<BrepFace> This is some return comment
## void RemoveAt(int faceIndex)
- (summary) 
     Deletes a face at a specified index.
     
- (since) 5.0
- (returns) void This is some return comment
## bool RemoveSlits()
- (summary) 
     Remove slit trims and slit boundaries from each face.
     
- (since) 5.10
- (returns) bool This is some return comment
## bool ShrinkFaces()
- (summary) 
     Shrinks all the underlying surfaces in this Brep. 
     Sometimes the surfaces extend far beyond the trimming boundaries of the Brep Face. 
     This function will remove those portions of the surfaces that are not used.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SplitBipolarFaces()
- (summary) 
     Splits surfaces with two singularities, like spheres, so the results
     have at most one singularity.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SplitClosedFaces(int minimumDegree)
- (summary) 
     Splits closed surfaces so they are not closed.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SplitFaceAtTangents(int faceIndex)
- (summary) 
     Splits the face of a Brep at tangent locations.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SplitFacesAtTangents()
- (summary) 
     Splits all of the faces of a Brep at tangent locations.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool SplitKinkyFace(int faceIndex,double kinkTolerance)
- (summary) 
     Splits a single face into G1 pieces.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SplitKinkyFaces()
- (summary) 
     Splits any faces with creases into G1 pieces.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SplitKinkyFaces(double kinkTolerance)
- (summary) 
     Splits any faces with creases into G1 pieces.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SplitKinkyFaces(double kinkTolerance,bool compact)
- (summary) 
     Splits any faces with creases into G1 pieces.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool StandardizeFaceSurface(int faceIndex)
- (summary) 
     Standardizes the relationship between a BrepFace and the 3d surface it
     uses.  When done, the face will be the only face that references its 3d
     surface, and the orientations of the face and 3d surface will be the same. 
     
- (since) 5.0
- (returns) bool This is some return comment
## void StandardizeFaceSurfaces()
- (summary) Standardize all faces in the brep.
- (since) 5.0
- (returns) void This is some return comment
