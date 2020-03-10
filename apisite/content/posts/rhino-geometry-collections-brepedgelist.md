---
title: "BrepEdgeList"
draft: false
---

*Namespace: Rhino.Geometry.Collections*

   Provides access to all the Edges in a Brep object.
   
## Properties
#### int Count
- (summary) 
     Gets the number of brep edges.
     
- (since) 5.0
## Methods
#### BrepEdge Add(BrepVertex startVertex,BrepVertex endVertex,int curve3dIndex,double edgeTolerance)
- (summary) 
     Create and add a new edge to this list
     
- (since) 5.4
- (returns) BrepEdge This is some return comment
#### BrepEdge Add(BrepVertex startVertex,BrepVertex endVertex,int curve3dIndex,Interval subDomain,double edgeTolerance)
- (summary) 
     Create and add a new edge to this list
     
- (since) 5.4
- (returns) BrepEdge This is some return comment
#### BrepEdge Add(int curve3dIndex)
- (summary) 
     Create and add a new edge to this list
     
- (since) 5.4
- (returns) BrepEdge This is some return comment
#### BrepEdge Add(int startVertexIndex,int endVertexIndex,int curve3dIndex,double edgeTolerance)
- (summary) 
     Create and add a new edge to this list
     
- (since) 5.6
- (returns) BrepEdge This is some return comment
#### BrepEdge Add(int startVertexIndex,int endVertexIndex,int curve3dIndex,Interval subDomain,double edgeTolerance)
- (summary) 
     Create and add a new edge to this list
     
- (since) 5.6
- (returns) BrepEdge This is some return comment
#### IEnumerator<BrepEdge> GetEnumerator()
- (summary) 
     Gets an enumerator that visits all edges.
     
- (since) 5.0
- (returns) IEnumerator<BrepEdge> This is some return comment
#### int MergeAllEdges(double angleTolerance)
- (summary) 
     Merges all possible Brep edges. Edges across kinks cannot be merged.
     A pair of adjacent edges in a Brep  are mergable if the angle between them is less than tolerance and the valence of the shared vertex is 2.
     
- (since) 6.23
- (returns) int This is some return comment
#### int MergeEdge(int edgeIndex,double angleTolerance)
- (summary) 
     Merge adjacent edges to a specified edge recursively.
     A pair of adjacent edges in a Brep  are mergable if the angle between them is less than tolerance and the valence of the shared vertex is 2.
     
- (since) 6.23
- (returns) int This is some return comment
#### int SplitEdgeAtParameters(int edgeIndex,IEnumerable<double> edgeParameters)
- (summary) 
     Splits an edge at the specified parameters.
     
- (since) 5.0
- (returns) int This is some return comment
#### bool SplitKinkyEdge(int edgeIndex,double kinkToleranceRadians)
- (summary) Splits the edge into G1 pieces.
- (since) 5.0
- (returns) bool This is some return comment
