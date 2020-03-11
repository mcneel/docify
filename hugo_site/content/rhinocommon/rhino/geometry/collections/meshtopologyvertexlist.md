---
title: "MeshTopologyVertexList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to the mesh topology vertices of a mesh. Topology vertices are
   sets of vertices in the MeshVertexList that can topologically be considered the
   same vertex.
```cs
public class MeshTopologyVertexList : IEnumerable<Point3f>, IList<Point3f>, IList, IReadOnlyList<Point3f>
```
## Properties

int Count
: Gets or sets the number of mesh topology vertices.
## Methods

int ConnectedEdge(int topologyVertexIndex,int edgeAtVertexIndex)
: Gets a particular edge that is connected to a topological vertex.
     Call TopologyVertices.SortVertices before this if you are interested in ordered edges.
: Returns - The index of the connected edge.
: since 6.0

int[] ConnectedEdges(int topologyVertexIndex)
: Gets all edges that are connected to a given vertex.
     Call TopologyVertices.SortVertices before this if you are interested in ordered edges.
: Returns - Indices of all edges around vertex that are connected to this topological vertex.
     None if no faces are connected to this vertex.
: since 6.0

int ConnectedEdgesCount(int topologyVertexIndex)
: Gets the count of edges that are connected to a given vertex.
: Returns - The amount of edges at this vertex. This can be 0.
: since 6.0

int[] ConnectedFaces(int topologyVertexIndex)
: Gets all faces that are connected to a given vertex.
: Returns - Indices of all faces in Mesh.Faces that are connected to this topological vertex.
     None if no faces are connected to this vertex.

int[] ConnectedTopologyVertices(int topologyVertexIndex)
: Gets all topological vertices that are connected to a given vertex.
: Returns - Indices of all topological vertices that are connected to this topological vertex.
     None if no vertices are connected to this vertex.

int[] ConnectedTopologyVertices(int topologyVertexIndex,bool sorted)
: Gets all topological vertices that are connected to a given vertex.
: Returns - Indices of all topological vertices that are connected to this topological vertex.
     None if no vertices are connected to this vertex.

IEnumerator<Point3f> GetEnumerator()
: Gets an enumerator that yields all topology vertices in this collection.
: Returns - The enumerator.

int[] IndicesFromFace(int faceIndex)
: Returns TopologyVertexIndices for a given mesh face index.
: Returns - An array of vertex indices.

bool IsHidden(int topologyVertexIndex)
: Returns True if the topological vertex is hidden. The mesh topology
     vertex is hidden if and only if all the ON_Mesh vertices it represents is hidden.
: Returns - True if mesh topology vertex is hidden.

int[] MeshVertexIndices(int topologyVertexIndex)
: Gets all indices of the mesh vertices that a given topology vertex represents.
: Returns - Indices of all vertices that in Mesh.Vertices that a topology vertex represents.

bool SortEdges()
: Sorts the edge list for the mesh topology vertex list so that
     the edges are in radial order when you call ConnectedTopologyVertices.
     A nonmanifold edge is treated as a boundary edge with respect
     to sorting.  If any boundary or nonmanifold edges end at the
     vertex, then the first edge will be a boundary or nonmanifold edge.
: Returns - True on success.

bool SortEdges(int topologyVertexIndex)
: Sorts the edge list for as single mesh topology vertex so that
     the edges are in radial order when you call ConnectedTopologyVertices.
     A nonmanifold edge is treated as a boundary edge with respect
     to sorting.  If any boundary or nonmanifold edges end at the
     vertex, then the first edge will be a boundary or nonmanifold edge.
: Returns - True on success.

int TopologyVertexIndex(int vertexIndex)
: Gets the topology vertex index for an existing mesh vertex in the mesh's
     VertexList.
: Returns - Index of a topology vertex in the Mesh.TopologyVertices.
