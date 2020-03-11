---
title: "BrepEdgeList"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to all the Edges in a Brep object.
```cs
public class BrepEdgeList : IEnumerable<BrepEdge>, Rhino.Collections.IRhinoTable<BrepEdge>
```
## Properties

int Count
: Gets the number of brep edges.
## Methods

[BrepEdge](/rhinocommon/rhino/geometry/brepedge/) Add(BrepVertex startVertex,BrepVertex endVertex,int curve3dIndex,double edgeTolerance)
: Create and add a new edge to this list
: since 5.4

[BrepEdge](/rhinocommon/rhino/geometry/brepedge/) Add(BrepVertex startVertex,BrepVertex endVertex,int curve3dIndex,Interval subDomain,double edgeTolerance)
: Create and add a new edge to this list
: since 5.4

[BrepEdge](/rhinocommon/rhino/geometry/brepedge/) Add(int curve3dIndex)
: Create and add a new edge to this list
: since 5.4

[BrepEdge](/rhinocommon/rhino/geometry/brepedge/) Add(int startVertexIndex,int endVertexIndex,int curve3dIndex,double edgeTolerance)
: Create and add a new edge to this list
: since 5.6

[BrepEdge](/rhinocommon/rhino/geometry/brepedge/) Add(int startVertexIndex,int endVertexIndex,int curve3dIndex,Interval subDomain,double edgeTolerance)
: Create and add a new edge to this list
: since 5.6

IEnumerator<BrepEdge> GetEnumerator()
: Gets an enumerator that visits all edges.
: Returns - The enumerator.

int MergeAllEdges(double angleTolerance)
: Merges all possible Brep edges. Edges across kinks cannot be merged.
     A pair of adjacent edges in a Brep  are mergable if the angle between them is less than tolerance and the valence of the shared vertex is 2.
: Returns - The number of edges merged.
: since 6.23

int MergeEdge(int edgeIndex,double angleTolerance)
: Merge adjacent edges to a specified edge recursively.
     A pair of adjacent edges in a Brep  are mergable if the angle between them is less than tolerance and the valence of the shared vertex is 2.
: Returns - The number of edges merged.
: since 6.23

int SplitEdgeAtParameters(int edgeIndex,IEnumerable<double> edgeParameters)
: Splits an edge at the specified parameters.
: Returns - Number of splits applied to the edge.

bool SplitKinkyEdge(int edgeIndex,double kinkToleranceRadians)
: Splits the edge into G1 pieces.
: Returns - True if successful.
