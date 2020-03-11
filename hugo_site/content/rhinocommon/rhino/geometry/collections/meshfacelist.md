---
title: "MeshFaceList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to the faces and Face related functionality of a Mesh.
```cs
public class MeshFaceList : IResizableList<MeshFace>, IList, IReadOnlyList<MeshFace>
```
## Properties

int Capacity
: Gets or sets the total number of mesh triangles and quads the internal data structure can hold without resizing.
: since 6.0

int Count
: Gets or sets the number of mesh faces. When getting this can includes invalid faces.

int QuadCount
: Gets the number of faces that are valid quads (4 corners).

int TriangleCount
: Gets the number of faces that are valid triangles (3 corners).
## Methods

int AddFace(int vertex1,int vertex2,int vertex3)
: Appends a new triangular face to the end of the mesh face list.
: Returns - The index of the newly added triangle.

int AddFace(int vertex1,int vertex2,int vertex3,int vertex4)
: Appends a new quadragular face to the end of the mesh face list.
: Returns - The index of the newly added quad.

int AddFace(MeshFace face)
: Appends a new mesh face to the end of the mesh face list.
: Returns - The index of the newly added face.

int[] AddFaces(IEnumerable<MeshFace> faces)
: Appends a list of faces to the end of the mesh face list.
: Returns - Indices of the newly created faces

int[] AdjacentFaces(int faceIndex)
: Gets all faces that share a topological edge with a given face.
: Returns - All indices that share an edge.

void Clear()
: Clears the Face list on the mesh.

int ConvertNonPlanarQuadsToTriangles(double planarTolerance,double angleToleranceRadians,int splitMethod)
: Splits non-planar quads into two triangles based on given params.
: Returns - Number of quads that were converted to triangles.
: since 6.0

bool ConvertQuadsToTriangles()
: Splits all quads along the short diagonal.
: Returns - True on success, False on failure.

bool ConvertTrianglesToQuads(double angleToleranceRadians,double minimumDiagonalLengthRatio)
: Joins adjacent triangles into quads if the resulting quad is 'nice'.
: Returns - True on success, False on failure.

int CullDegenerateFaces()
: Attempts to removes degenerate faces from the mesh.
     Degenerate faces are faces that contains such a combination of indices,
     that their final shape collapsed in a line or point.Before returning, this method also attempts to repair faces by juggling
     vertex indices.
: Returns - The number of degenerate faces that were removed.

int DeleteFaces(IEnumerable<int> faceIndexes)
: Removes a collection of faces from the mesh without affecting the remaining geometry.
: Returns - The number of faces deleted on success.

int DeleteFaces(IEnumerable<int> faceIndexes,bool compact)
: Removes a collection of faces from the mesh without affecting the remaining geometry.
: Returns - The number of faces deleted on success.
: since 6.6

void Destroy()
: Releases all memory allocated to store faces. The list capacity will be 0 after this call.
     Subsequent calls can add new items.
: since 6.0

[Mesh](/rhinocommon/rhino/geometry/mesh/) ExtractDuplicateFaces()
: Extracts, or removes, duplicate faces.
: Returns - A mesh containing the extracted duplicate faces if successful, None otherwise.
: since 6.0

[Mesh](/rhinocommon/rhino/geometry/mesh/) ExtractFaces(IEnumerable<int> faceIndices)
: Extracts, or removes, faces.
: Returns - A mesh containing the extracted faces if successful, None otherwise.
: since 6.0

[IndexPair](/rhinocommon/rhino/indexpair/)[] GetClashingFacePairs(int maxPairCount)
: Gets an array of pairs of mesh faces that clash.
: Returns - Array of pairs of mesh face indices.
: since 6.0

int[] GetConnectedFaces(int faceIndex,double angleRadians,bool greaterThanAngle)
: Find all connected face indices where adjacent face normals meet
     the criteria of angleRadians and greaterThanAngle
: Returns - list of connected face indices
: since 5.6

int[] GetConnectedFacesToEdges(int startFaceIndex,bool treatNonmanifoldLikeUnwelded)
: Uses startFaceIndex and finds all connected face indexes up to unwelded
     or naked edges. If treatNonmanifoldLikeUnwelded is True then non-manifold
     edges will be considered as unwelded or naked
: Returns - Array of connected face indexes
: since 5.6

int[] GetDuplicateFaces()
: Finds all of the duplicate faces.
: Returns - The indexes that are duplicates of other indexes if successful. 
     If there are no duplicate, then an empty array is returned.
: since 6.0

IEnumerator<MeshFace> GetEnumerator()
: Gets an enumerator that yields all faces in this collection.
: Returns - The enumerator.

[MeshFace](/rhinocommon/rhino/geometry/meshface/) GetFace(int index)
: Returns the mesh face at the given index.
: Returns - The mesh face at the given index on success or MeshFace.Unset if the index is out of range.

double GetFaceAspectRatio(int index)
: Returns the mesh face at the given index.
: Returns - The mesh face at the given index on success or MeshFace.Unset if the index is out of range.
: since 6.0

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) GetFaceBoundingBox(int faceIndex)
: Gets the bounding box of a face.
: Returns - A new bounding box, or  on error.

[Point3d](/rhinocommon/rhino/geometry/point3d/) GetFaceCenter(int faceIndex)
: Gets the center point of a face.
     For a triangular face, this is the centroid or barycenter.For a quad, this is the avarage of four coner points.
: Returns - The center point.

bool GetFaceVertices(int faceIndex,Point3f a,Point3f b,Point3f c,Point3f d)
: Gets the 3D location of the vertices forming a face.
: Returns - True if the operation succeeded, otherwise false.

int[] GetTopologicalVertices(int faceIndex)
: Gets the topology vertex indices of a face.
: Returns - An array of integers.

bool GetZeroAreaFaces(int[] whollyDegenerateFaces,int[] partiallyDegenerateFaces)
: Examines and adds face indexes to whollyDegenerateFaces if the face is a triangle with zero area or a quad both triangles have zero area.
     Face indexes are added to partiallyDegenerateFaces when a quad has one triangle with zero area.
: Returns - Returns True if the mesh has wholly or partially degenerate faces, False otherwise.
: since 6.0

bool HasNakedEdges(int faceIndex)
: Returns True if at least one of the face edges are not topologically
     connected to any other faces.
: Returns - True if that face makes the mesh open, otherwise false.

void Insert(int index,MeshFace face)
: Inserts a mesh face at a defined index in this list.

bool IsHidden(int faceIndex)
: Gets a value indicating whether a face is hidden.
     A face is hidden if, and only if, at least one of its vertices is hidden.
: Returns - True if hidden, False if fully visible.

void RemoveAt(int index)
: Removes a face from the mesh.

void RemoveAt(int index,bool compact)
: Removes a face from the mesh.
: since 6.6

int RemoveZeroAreaFaces(int fixedFaceCount)
: Deletes or fixes mesh faces that have zero area.
: Returns - Number of removed wholly degenerate faces.
: since 6.0

bool SetFace(int index,int vertex1,int vertex2,int vertex3)
: Sets a triangular face at a specific index of the mesh.
: Returns - True if the operation succeeded, otherwise false.

bool SetFace(int index,int vertex1,int vertex2,int vertex3,int vertex4)
: Sets a quadrangular face at a specific index of the mesh.
: Returns - True if the operation succeeded, otherwise false.

bool SetFace(int index,MeshFace face)
: Sets a face at a specific index of the mesh.
: Returns - True if the operation succeeded, otherwise false.

int[] ToIntArray(bool asTriangles)
: Copies all of the face indices to a linear array of indices per face.
     
     Note that this includes indices from invalid faces too.
: Returns - The int array. This method never returns null.
: since 5.9

int[] ToIntArray(bool asTriangles,List<int> replacedIndices)
: Copies all of the faces to a linear array of indices.
     
     Clean-up of vertex indices if replacedIndices is a valid List<int>
: Returns - The int array. This method never returns null.
: since (unknown)
