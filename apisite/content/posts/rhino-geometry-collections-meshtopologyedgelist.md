---
title: "Rhino.Geometry.Collections.MeshTopologyEdgeList"
draft: false
---

# Properties
## int Count
- (summary) 
     Gets the amount of edges in this list.
     
- (since) 5.0
# Methods
## bool CollapseEdge(int topologyEdgeIndex)
- (summary) 
     Replaces a mesh edge with a vertex at its center and update adjacent faces as needed.
     
- (since) 5.0
- (returns) bool This is some return comment
## Line EdgeLine(int topologyEdgeIndex)
- (summary) Gets the 3d line along an edge.
- (since) 5.0
- (returns) Line This is some return comment
## int[] GetConnectedFaces(int topologyEdgeIndex)
- (summary) 
     Gets indices of faces connected to an edge.
     
- (since) 5.0
- (returns) int[] This is some return comment
## int[] GetConnectedFaces(int topologyEdgeIndex,bool[] faceOrientationMatchesEdgeDirection)
- (summary) 
     Gets indices of faces connected to an edge.
     
- (since) 5.0
- (returns) int[] This is some return comment
## int GetEdgeIndex(int topologyVertex1,int topologyVertex2)
- (summary) 
     Returns index of edge that connects topological vertices. 
     returns -1 if no edge is found.
     
- (since) 5.0
- (returns) int This is some return comment
## int[] GetEdgesForFace(int faceIndex)
- (summary) 
     Gets indices of edges that surround a given face.
     
- (since) 5.0
- (returns) int[] This is some return comment
## int[] GetEdgesForFace(int faceIndex,bool[] sameOrientation)
- (summary) 
     Gets indices of edges that surround a given face.
     
- (since) 5.0
- (returns) int[] This is some return comment
## IndexPair GetTopologyVertices(int topologyEdgeIndex)
- (summary) Gets the two topology vertices for a given topology edge.
- (since) 5.0
- (returns) IndexPair This is some return comment
## bool IsEdgeUnwelded(int topologyEdgeIndex)
- (summary) 
     Determines if the mesh edge is unwelded, or if the mesh faces that share the edge have unique vertex indices.
     
- (since) 6.13
- (returns) bool This is some return comment
## bool IsHidden(int topologyEdgeIndex)
- (summary) 
     Returns True if the topological edge is hidden. The mesh topology
     edge is hidden only if either of its mesh topology vertices is hidden.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool IsNgonInterior(int topologyEdgeIndex)
- (summary) 
     Returns True if the topological edge is an interior ngon edge
     
- (since) 6.0
- (returns) bool This is some return comment
## bool IsSwappableEdge(int topologyEdgeIndex)
- (summary) 
     Determines if a mesh edge index is valid input for .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SplitEdge(int topologyEdgeIndex,double t)
- (summary) 
     Divides a mesh edge to create two or more triangles
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SplitEdge(int topologyEdgeIndex,Point3d point)
- (summary) 
     Divides a mesh edge to create two or more triangles
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SwapEdge(int topologyEdgeIndex)
- (summary) 
     If the edge is shared by two triangular face, then the edge is swapped.
     
- (since) 5.0
- (returns) bool This is some return comment
