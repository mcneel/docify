---
title: "MeshVertexList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to the vertices and vertex-related functionality of a mesh.
```cs
public class MeshVertexList : IResizableList<Point3f>, IReadOnlyList<Point3f>, IList
```
## Properties

int Capacity
: Gets or sets the total number of vertices the internal data structure can hold without resizing.
: since 6.0

int Count
: Gets or sets the number of mesh vertices.

bool UseDoublePrecisionVertices
: Set to True if the vertices should be stored in double precision
: since 6.4
## Methods

static int Align(IEnumerable<Mesh> meshes,double distance,IEnumerable<IEnumerable<bool>> whichVertices)
: Moves mesh vertices that belong to naked edges to neighboring vertices, within the specified distance.
     This forces unaligned mesh vertices to the same location and is helpful to clean meshes for 3D printing.See the _AlignMeshVertices Rhino command for more information.
: Returns - If the operation succeeded, the number of moved vertices, or -1 on error.
: since (unknown)

int Add(double x,double y,double z)
: Adds a new vertex to the end of the Vertex list.
: Returns - The index of the newly added vertex.

int Add(float x,float y,float z)
: Adds a new vertex to the end of the Vertex list.
: Returns - The index of the newly added vertex.

int Add(Point3d vertex)
: Adds a new vertex to the end of the Vertex list.
: Returns - The index of the newly added vertex.

int Add(Point3f vertex)
: Adds a new vertex to the end of the Vertex list.
: Returns - The index of the newly added vertex.

void AddVertices(IEnumerable<Point3d> vertices)
: Adds a series of new vertices to the end of the vertex list.
     This overload accepts double-precision points.

void AddVertices(IEnumerable<Point3f> vertices)
: Adds a series of new vertices to the end of the vertex list.
     This overload accepts single-precision points.

int Align(double distance,IEnumerable<bool> whichVertices)
: Moves mesh vertices that belong to naked edges to neighboring vertices, within the specified distance.
     This forces unaligned mesh vertices to the same location and is helpful to clean meshes for 3D printing.See the _AlignMeshVertices Rhino command for more information.
: Returns - If the operation succeeded, the number of moved vertices, or -1 on error.
: since 6.0

void Clear()
: Clears the Vertex list on the mesh.

bool CombineIdentical(bool ignoreNormals,bool ignoreAdditional)
: Merges identical vertices.
: Returns - True if the mesh is changed, in which case the mesh will have fewer vertices than before.

int CullUnused()
: Removes all vertices that are currently not used by the Face list.
: Returns - The number of unused vertices that were removed.

void Destroy()
: Releases all memory allocated to store faces. The list capacity will be 0 after this call.
     Subsequent calls can add new items.
: since 6.0

int[] GetConnectedVertices(int vertexIndex)
: Gets indices of all vertices that form "edges" with a given vertex index.
: Returns - An array of vertex indices that are connected with the specified vertex.

IEnumerator<Point3f> GetEnumerator()
: Gets an enumerator that yields all mesh vertices (points) in this collection.
: Returns - The enumerator.

int[] GetTopologicalIndenticalVertices(int vertexIndex)
: Gets a list of other vertices which are "topologically" identical
     to this vertex.
: Returns - Array of indices of vertices that are topoligically the same as this vertex. The
     array includes vertexIndex. Returns None on failure.

int[] GetVertexFaces(int vertexIndex)
: Gets a list of all of the faces that share a given vertex.
: Returns - An array of indices of faces on success, None on failure.

void Hide(int vertexIndex)
: Hides the vertex at the given index.

void HideAll()
: Hides all vertices in the mesh.

bool IsHidden(int vertexIndex)
: Gets a value indicating whether or not a vertex is hidden.
: Returns - True if the vertex is hidden, False if it is not.

[Point3d](/rhinocommon/rhino/geometry/point3d/) Point3dAt(int index)
: Get double precision location at a given index
: since 6.4

bool Remove(IEnumerable<int> indices,bool shrinkFaces)
: Removes the vertices at the given indices and all faces that reference those vertices.
: Returns - True on success, False on failure.

bool Remove(int index,bool shrinkFaces)
: Removes the vertex at the given index and all faces that reference that index.
: Returns - True on success, False on failure.

bool SetVertex(int index,double x,double y,double z)
: Sets or adds a vertex to the Vertex List.
     If [index] is less than [Count], the existing vertex at [index] will be modified.If [index] equals [Count], a new vertex is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
: Returns - True on success, False on failure.

bool SetVertex(int index,double x,double y,double z,bool updateNormals)
: Sets or adds a vertex to the Vertex List.
     If [index] is less than [Count], the existing vertex at [index] will be modified.If [index] equals [Count], a new vertex is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
: Returns - True on success, False on failure.
: since 6.6

bool SetVertex(int index,float x,float y,float z)
: Sets or adds a vertex to the Vertex List.
     If [index] is less than [Count], the existing vertex at [index] will be modified.If [index] equals [Count], a new vertex is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
: Returns - True on success, False on failure.

bool SetVertex(int index,Point3d vertex)
: Sets or adds a vertex to the Vertex List.
     If [index] is less than [Count], the existing vertex at [index] will be modified.If [index] equals [Count], a new vertex is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
: Returns - True on success, False on failure.

bool SetVertex(int index,Point3f vertex)
: Sets or adds a vertex to the Vertex List.
     If [index] is less than [Count], the existing vertex at [index] will be modified.If [index] equals [Count], a new vertex is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
: Returns - True on success, False on failure.

void Show(int vertexIndex)
: Shows the vertex at the given index.

void ShowAll()
: Shows all vertices in the mesh.

float[] ToFloatArray()
: Copies all vertices to a linear array of float in x,y,z order
: Returns - The float array.
: since 5.9

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] ToPoint3dArray()
: Copies all vertices to a new array of .
: Returns - A new array.

[Point3f](/rhinocommon/rhino/geometry/point3f/)[] ToPoint3fArray()
: Copies all vertices to a new array of .
: Returns - A new array.
