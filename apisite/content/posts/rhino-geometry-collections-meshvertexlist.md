---
title: "MeshVertexList"
draft: false
---

*Namespace: Rhino.Geometry.Collections*

   Provides access to the vertices and vertex-related functionality of a mesh.
   
## Properties
#### int Capacity
- (summary) 
     Gets or sets the total number of vertices the internal data structure can hold without resizing.
     
- (since) 6.0
#### int Count
- (summary) 
     Gets or sets the number of mesh vertices.
     
- (since) 5.0
#### bool UseDoublePrecisionVertices
- (summary) 
     Set to True if the vertices should be stored in double precision
     
- (since) 6.4
## Methods
#### static int Align(IEnumerable<Mesh> meshes,double distance,IEnumerable<IEnumerable<bool>> whichVertices)
- (summary) 
     Moves mesh vertices that belong to naked edges to neighboring vertices, within the specified distance.
     This forces unaligned mesh vertices to the same location and is helpful to clean meshes for 3D printing.See the _AlignMeshVertices Rhino command for more information.
- (since) (unknown)
- (returns) int This is some return comment
#### int Add(double x,double y,double z)
- (summary) 
     Adds a new vertex to the end of the Vertex list.
     
- (since) 5.0
- (returns) int This is some return comment
#### int Add(float x,float y,float z)
- (summary) 
     Adds a new vertex to the end of the Vertex list.
     
- (since) 5.0
- (returns) int This is some return comment
#### int Add(Point3d vertex)
- (summary) 
     Adds a new vertex to the end of the Vertex list.
     
- (since) 5.0
- (returns) int This is some return comment
#### int Add(Point3f vertex)
- (summary) 
     Adds a new vertex to the end of the Vertex list.
     
- (since) 5.0
- (returns) int This is some return comment
#### void AddVertices(IEnumerable<Point3d> vertices)
- (summary) 
     Adds a series of new vertices to the end of the vertex list.
     This overload accepts double-precision points.
- (since) 5.0
- (returns) void This is some return comment
#### void AddVertices(IEnumerable<Point3f> vertices)
- (summary) 
     Adds a series of new vertices to the end of the vertex list.
     This overload accepts single-precision points.
- (since) 5.0
- (returns) void This is some return comment
#### int Align(double distance,IEnumerable<bool> whichVertices)
- (summary) 
     Moves mesh vertices that belong to naked edges to neighboring vertices, within the specified distance.
     This forces unaligned mesh vertices to the same location and is helpful to clean meshes for 3D printing.See the _AlignMeshVertices Rhino command for more information.
- (since) 6.0
- (returns) int This is some return comment
#### void Clear()
- (summary) 
     Clears the Vertex list on the mesh.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool CombineIdentical(bool ignoreNormals,bool ignoreAdditional)
- (summary) 
     Merges identical vertices.
     
- (since) 5.0
- (returns) bool This is some return comment
#### int CullUnused()
- (summary) 
     Removes all vertices that are currently not used by the Face list.
     
- (since) 5.0
- (returns) int This is some return comment
#### void Destroy()
- (summary) 
     Releases all memory allocated to store faces. The list capacity will be 0 after this call.
     Subsequent calls can add new items.
- (since) 6.0
- (returns) void This is some return comment
#### int[] GetConnectedVertices(int vertexIndex)
- (summary) 
     Gets indices of all vertices that form "edges" with a given vertex index.
     
- (since) 5.0
- (returns) int[] This is some return comment
#### IEnumerator<Point3f> GetEnumerator()
- (summary) 
     Gets an enumerator that yields all mesh vertices (points) in this collection.
     
- (since) 5.0
- (returns) IEnumerator<Point3f> This is some return comment
#### int[] GetTopologicalIndenticalVertices(int vertexIndex)
- (summary) 
     Gets a list of other vertices which are "topologically" identical
     to this vertex.
     
- (since) 5.0
- (returns) int[] This is some return comment
#### int[] GetVertexFaces(int vertexIndex)
- (summary) 
     Gets a list of all of the faces that share a given vertex.
     
- (since) 5.0
- (returns) int[] This is some return comment
#### void Hide(int vertexIndex)
- (summary) 
     Hides the vertex at the given index.
     
- (since) 5.0
- (returns) void This is some return comment
#### void HideAll()
- (summary) 
     Hides all vertices in the mesh.
     
- (since) 5.0
- (returns) void This is some return comment
#### bool IsHidden(int vertexIndex)
- (summary) 
     Gets a value indicating whether or not a vertex is hidden.
     
- (since) 5.0
- (returns) bool This is some return comment
#### Point3d Point3dAt(int index)
- (summary) 
     Get double precision location at a given index
     
- (since) 6.4
- (returns) Point3d This is some return comment
#### bool Remove(IEnumerable<int> indices,bool shrinkFaces)
- (summary) 
     Removes the vertices at the given indices and all faces that reference those vertices.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Remove(int index,bool shrinkFaces)
- (summary) 
     Removes the vertex at the given index and all faces that reference that index.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetVertex(int index,double x,double y,double z)
- (summary) 
     Sets or adds a vertex to the Vertex List.
     If [index] is less than [Count], the existing vertex at [index] will be modified.If [index] equals [Count], a new vertex is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetVertex(int index,double x,double y,double z,bool updateNormals)
- (summary) 
     Sets or adds a vertex to the Vertex List.
     If [index] is less than [Count], the existing vertex at [index] will be modified.If [index] equals [Count], a new vertex is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
- (since) 6.6
- (returns) bool This is some return comment
#### bool SetVertex(int index,float x,float y,float z)
- (summary) 
     Sets or adds a vertex to the Vertex List.
     If [index] is less than [Count], the existing vertex at [index] will be modified.If [index] equals [Count], a new vertex is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetVertex(int index,Point3d vertex)
- (summary) 
     Sets or adds a vertex to the Vertex List.
     If [index] is less than [Count], the existing vertex at [index] will be modified.If [index] equals [Count], a new vertex is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetVertex(int index,Point3f vertex)
- (summary) 
     Sets or adds a vertex to the Vertex List.
     If [index] is less than [Count], the existing vertex at [index] will be modified.If [index] equals [Count], a new vertex is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
- (since) 5.0
- (returns) bool This is some return comment
#### void Show(int vertexIndex)
- (summary) 
     Shows the vertex at the given index.
     
- (since) 5.0
- (returns) void This is some return comment
#### void ShowAll()
- (summary) 
     Shows all vertices in the mesh.
     
- (since) 5.0
- (returns) void This is some return comment
#### float[] ToFloatArray()
- (summary) 
     Copies all vertices to a linear array of float in x,y,z order
     
- (since) 5.9
- (returns) float[] This is some return comment
#### Point3d[] ToPoint3dArray()
- (summary) 
     Copies all vertices to a new array of .
     
- (since) 5.0
- (returns) Point3d[] This is some return comment
#### Point3f[] ToPoint3fArray()
- (summary) 
     Copies all vertices to a new array of .
     
- (since) 5.0
- (returns) Point3f[] This is some return comment
