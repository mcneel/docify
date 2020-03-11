---
title: "MeshTopologyEdgeList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Represents an entry point to the list of edges in a mesh topology.
```cs
public class MeshTopologyEdgeList
```
## Properties

int Count
: Gets the amount of edges in this list.
## Methods

bool CollapseEdge(int topologyEdgeIndex)
: Replaces a mesh edge with a vertex at its center and update adjacent faces as needed.
: Returns - True if successful.

[Line](/rhinocommon/rhino/geometry/line/) EdgeLine(int topologyEdgeIndex)
: Gets the 3d line along an edge.
: Returns - Line along edge. If input is not valid, an Invalid Line is returned.

int[] GetConnectedFaces(int topologyEdgeIndex)
: Gets indices of faces connected to an edge.
: Returns - An array of face indices the edge borders. This might be empty on error.

int[] GetConnectedFaces(int topologyEdgeIndex,bool[] faceOrientationMatchesEdgeDirection)
: Gets indices of faces connected to an edge.
: Returns - An array of face indices the edge borders. This might be empty on error.

int GetEdgeIndex(int topologyVertex1,int topologyVertex2)
: Returns index of edge that connects topological vertices. 
     returns -1 if no edge is found.
: Returns - The edge index.

int[] GetEdgesForFace(int faceIndex)
: Gets indices of edges that surround a given face.
: Returns - A new array of indices to the topological edges that are connected with the specified face.

int[] GetEdgesForFace(int faceIndex,bool[] sameOrientation)
: Gets indices of edges that surround a given face.
: Returns - A new array of indices to the topological edges that are connected with the specified face.

[IndexPair](/rhinocommon/rhino/indexpair/) GetTopologyVertices(int topologyEdgeIndex)
: Gets the two topology vertices for a given topology edge.
: Returns - The pair of vertex indices the edge connects.

bool IsEdgeUnwelded(int topologyEdgeIndex)
: Determines if the mesh edge is unwelded, or if the mesh faces that share the edge have unique vertex indices.
: Returns - True if the edge is unwelded, False if the edge is welded.
: since 6.13

bool IsHidden(int topologyEdgeIndex)
: Returns True if the topological edge is hidden. The mesh topology
     edge is hidden only if either of its mesh topology vertices is hidden.
: Returns - True if mesh topology edge is hidden.

bool IsNgonInterior(int topologyEdgeIndex)
: Returns True if the topological edge is an interior ngon edge
: Returns - True if mesh topology edge is an interior ngon edge.
: since 6.0

bool IsSwappableEdge(int topologyEdgeIndex)
: Determines if a mesh edge index is valid input for .
: Returns - True if edge can be swapped.

bool SplitEdge(int topologyEdgeIndex,double t)
: Divides a mesh edge to create two or more triangles
: Returns - True if successful

bool SplitEdge(int topologyEdgeIndex,Point3d point)
: Divides a mesh edge to create two or more triangles
: Returns - True if successful

bool SwapEdge(int topologyEdgeIndex)
: If the edge is shared by two triangular face, then the edge is swapped.
: Returns - True if successful.
