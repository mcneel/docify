---
title: "Rhino.Geometry.Collections.MeshFaceList"
draft: false
---

# Properties
## int Capacity
- (summary) 
     Gets or sets the total number of mesh triangles and quads the internal data structure can hold without resizing.
     
- (since) 6.0
## int Count
- (summary) 
     Gets or sets the number of mesh faces. When getting this can includes invalid faces.
     
- (since) 5.0
## int QuadCount
- (summary) 
     Gets the number of faces that are valid quads (4 corners).
     
- (since) 5.0
## int TriangleCount
- (summary) 
     Gets the number of faces that are valid triangles (3 corners).
     
- (since) 5.0
# Methods
## int AddFace(int vertex1,int vertex2,int vertex3)
- (summary) 
     Appends a new triangular face to the end of the mesh face list.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddFace(int vertex1,int vertex2,int vertex3,int vertex4)
- (summary) 
     Appends a new quadragular face to the end of the mesh face list.
     
- (since) 5.0
- (returns) int This is some return comment
## int AddFace(MeshFace face)
- (summary) 
     Appends a new mesh face to the end of the mesh face list.
     
- (since) 5.0
- (returns) int This is some return comment
## int[] AddFaces(IEnumerable<MeshFace> faces)
- (summary) 
     Appends a list of faces to the end of the mesh face list.
     
- (since) 5.0
- (returns) int[] This is some return comment
## int[] AdjacentFaces(int faceIndex)
- (summary) 
     Gets all faces that share a topological edge with a given face.
     
- (since) 5.0
- (returns) int[] This is some return comment
## void Clear()
- (summary) 
     Clears the Face list on the mesh.
     
- (since) 5.0
- (returns) void This is some return comment
## int ConvertNonPlanarQuadsToTriangles(double planarTolerance,double angleToleranceRadians,int splitMethod)
- (summary) 
     Splits non-planar quads into two triangles based on given params.
     
- (since) 6.0
- (returns) int This is some return comment
## bool ConvertQuadsToTriangles()
- (summary) Splits all quads along the short diagonal.
- (since) 5.0
- (returns) bool This is some return comment
## bool ConvertTrianglesToQuads(double angleToleranceRadians,double minimumDiagonalLengthRatio)
- (summary) 
     Joins adjacent triangles into quads if the resulting quad is 'nice'.
     
- (since) 5.0
- (returns) bool This is some return comment
## int CullDegenerateFaces()
- (summary) 
     Attempts to removes degenerate faces from the mesh.
     Degenerate faces are faces that contains such a combination of indices,
     that their final shape collapsed in a line or point.Before returning, this method also attempts to repair faces by juggling
     vertex indices.
- (since) 5.0
- (returns) int This is some return comment
## int DeleteFaces(IEnumerable<int> faceIndexes)
- (summary) 
     Removes a collection of faces from the mesh without affecting the remaining geometry.
     
- (since) 5.0
- (returns) int This is some return comment
## int DeleteFaces(IEnumerable<int> faceIndexes,bool compact)
- (summary) 
     Removes a collection of faces from the mesh without affecting the remaining geometry.
     
- (since) 6.6
- (returns) int This is some return comment
## void Destroy()
- (summary) 
     Releases all memory allocated to store faces. The list capacity will be 0 after this call.
     Subsequent calls can add new items.
- (since) 6.0
- (returns) void This is some return comment
## Mesh ExtractDuplicateFaces()
- (summary) 
     Extracts, or removes, duplicate faces.
     
- (since) 6.0
- (returns) Mesh This is some return comment
## Mesh ExtractFaces(IEnumerable<int> faceIndices)
- (summary) 
     Extracts, or removes, faces.
     
- (since) 6.0
- (returns) Mesh This is some return comment
## IndexPair[] GetClashingFacePairs(int maxPairCount)
- (summary) 
     Gets an array of pairs of mesh faces that clash.
     
- (since) 6.0
- (returns) IndexPair[] This is some return comment
## int[] GetConnectedFaces(int faceIndex,double angleRadians,bool greaterThanAngle)
- (summary) 
     Find all connected face indices where adjacent face normals meet
     the criteria of angleRadians and greaterThanAngle
     
- (since) 5.6
- (returns) int[] This is some return comment
## int[] GetConnectedFacesToEdges(int startFaceIndex,bool treatNonmanifoldLikeUnwelded)
- (summary) 
     Uses startFaceIndex and finds all connected face indexes up to unwelded
     or naked edges. If treatNonmanifoldLikeUnwelded is True then non-manifold
     edges will be considered as unwelded or naked
     
- (since) 5.6
- (returns) int[] This is some return comment
## int[] GetDuplicateFaces()
- (summary) 
     Finds all of the duplicate faces.
     
- (since) 6.0
- (returns) int[] This is some return comment
## IEnumerator<MeshFace> GetEnumerator()
- (summary) 
     Gets an enumerator that yields all faces in this collection.
     
- (since) 5.0
- (returns) IEnumerator<MeshFace> This is some return comment
## MeshFace GetFace(int index)
- (summary) 
     Returns the mesh face at the given index. 
     
- (since) 5.0
- (returns) MeshFace This is some return comment
## double GetFaceAspectRatio(int index)
- (summary) 
     Returns the mesh face at the given index. 
     
- (since) 6.0
- (returns) double This is some return comment
## BoundingBox GetFaceBoundingBox(int faceIndex)
- (summary) 
     Gets the bounding box of a face.
     
- (since) 5.0
- (returns) BoundingBox This is some return comment
## Point3d GetFaceCenter(int faceIndex)
- (summary) 
     Gets the center point of a face.
     For a triangular face, this is the centroid or barycenter.For a quad, this is the avarage of four coner points.
- (since) 5.0
- (returns) Point3d This is some return comment
## bool GetFaceVertices(int faceIndex,Point3f a,Point3f b,Point3f c,Point3f d)
- (summary) 
     Gets the 3D location of the vertices forming a face.
     
- (since) 5.0
- (returns) bool This is some return comment
## int[] GetTopologicalVertices(int faceIndex)
- (summary) 
     Gets the topology vertex indices of a face.
     
- (since) 5.0
- (returns) int[] This is some return comment
## bool GetZeroAreaFaces(int[] whollyDegenerateFaces,int[] partiallyDegenerateFaces)
- (summary) 
     Examines and adds face indexes to whollyDegenerateFaces if the face is a triangle with zero area or a quad both triangles have zero area.
     Face indexes are added to partiallyDegenerateFaces when a quad has one triangle with zero area.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool HasNakedEdges(int faceIndex)
- (summary) 
     Returns True if at least one of the face edges are not topologically
     connected to any other faces.
     
- (since) 5.0
- (returns) bool This is some return comment
## void Insert(int index,MeshFace face)
- (summary) 
     Inserts a mesh face at a defined index in this list.
     
- (since) 5.0
- (returns) void This is some return comment
## bool IsHidden(int faceIndex)
- (summary) 
     Gets a value indicating whether a face is hidden.
     A face is hidden if, and only if, at least one of its vertices is hidden.
- (since) 5.0
- (returns) bool This is some return comment
## void RemoveAt(int index)
- (summary) 
     Removes a face from the mesh.
     
- (since) 5.0
- (returns) void This is some return comment
## void RemoveAt(int index,bool compact)
- (summary) 
     Removes a face from the mesh.
     
- (since) 6.6
- (returns) void This is some return comment
## int RemoveZeroAreaFaces(int fixedFaceCount)
- (summary) 
     Deletes or fixes mesh faces that have zero area.
     
- (since) 6.0
- (returns) int This is some return comment
## bool SetFace(int index,int vertex1,int vertex2,int vertex3)
- (summary) 
     Sets a triangular face at a specific index of the mesh.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetFace(int index,int vertex1,int vertex2,int vertex3,int vertex4)
- (summary) 
     Sets a quadrangular face at a specific index of the mesh.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetFace(int index,MeshFace face)
- (summary) 
     Sets a face at a specific index of the mesh.
     
- (since) 5.0
- (returns) bool This is some return comment
## int[] ToIntArray(bool asTriangles)
- (summary) 
     Copies all of the face indices to a linear array of indices per face.
     
     Note that this includes indices from invalid faces too.
     
- (since) 5.9
- (returns) int[] This is some return comment
## int[] ToIntArray(bool asTriangles,List<int> replacedIndices)
- (summary) 
     Copies all of the faces to a linear array of indices.
     
     Clean-up of vertex indices if replacedIndices is a valid List<int>
      
- (since) (unknown)
- (returns) int[] This is some return comment
