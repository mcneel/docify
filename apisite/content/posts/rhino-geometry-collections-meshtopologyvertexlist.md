---
title: "Rhino.Geometry.Collections.MeshTopologyVertexList"
draft: false
---

# Properties
## int Count
- (summary) 
     Gets or sets the number of mesh topology vertices.
     
- (since) 5.0
# Methods
## int ConnectedEdge(int topologyVertexIndex,int edgeAtVertexIndex)
- (summary) 
     Gets a particular edge that is connected to a topological vertex.
     Call TopologyVertices.SortVertices before this if you are interested in ordered edges.
- (since) 6.0
- (returns) int This is some return comment
## int[] ConnectedEdges(int topologyVertexIndex)
- (summary) 
     Gets all edges that are connected to a given vertex.
     Call TopologyVertices.SortVertices before this if you are interested in ordered edges.
- (since) 6.0
- (returns) int[] This is some return comment
## int ConnectedEdgesCount(int topologyVertexIndex)
- (summary) 
     Gets the count of edges that are connected to a given vertex.
     
- (since) 6.0
- (returns) int This is some return comment
## int[] ConnectedFaces(int topologyVertexIndex)
- (summary) 
     Gets all faces that are connected to a given vertex.
     
- (since) 5.0
- (returns) int[] This is some return comment
## int[] ConnectedTopologyVertices(int topologyVertexIndex)
- (summary) 
     Gets all topological vertices that are connected to a given vertex.
     
- (since) 5.0
- (returns) int[] This is some return comment
## int[] ConnectedTopologyVertices(int topologyVertexIndex,bool sorted)
- (summary) 
     Gets all topological vertices that are connected to a given vertex.
     
- (since) 5.0
- (returns) int[] This is some return comment
## IEnumerator<Point3f> GetEnumerator()
- (summary) 
     Gets an enumerator that yields all topology vertices in this collection.
     
- (since) 5.0
- (returns) IEnumerator<Point3f> This is some return comment
## int[] IndicesFromFace(int faceIndex)
- (summary) 
     Returns TopologyVertexIndices for a given mesh face index.
     
- (since) 5.0
- (returns) int[] This is some return comment
## bool IsHidden(int topologyVertexIndex)
- (summary) 
     Returns True if the topological vertex is hidden. The mesh topology
     vertex is hidden if and only if all the ON_Mesh vertices it represents is hidden.
     
- (since) 5.0
- (returns) bool This is some return comment
## int[] MeshVertexIndices(int topologyVertexIndex)
- (summary) 
     Gets all indices of the mesh vertices that a given topology vertex represents.
     
- (since) 5.0
- (returns) int[] This is some return comment
## bool SortEdges()
- (summary) 
     Sorts the edge list for the mesh topology vertex list so that
     the edges are in radial order when you call ConnectedTopologyVertices.
     A nonmanifold edge is treated as a boundary edge with respect
     to sorting.  If any boundary or nonmanifold edges end at the
     vertex, then the first edge will be a boundary or nonmanifold edge.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SortEdges(int topologyVertexIndex)
- (summary) 
     Sorts the edge list for as single mesh topology vertex so that
     the edges are in radial order when you call ConnectedTopologyVertices.
     A nonmanifold edge is treated as a boundary edge with respect
     to sorting.  If any boundary or nonmanifold edges end at the
     vertex, then the first edge will be a boundary or nonmanifold edge.
     
- (since) 5.0
- (returns) bool This is some return comment
## int TopologyVertexIndex(int vertexIndex)
- (summary) 
     Gets the topology vertex index for an existing mesh vertex in the mesh's
     VertexList.
     
- (since) 5.0
- (returns) int This is some return comment
