---
title: "Rhino.Geometry.BrepEdge"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## Brep Brep
- (summary) 
     Gets the Brep that owns this edge.
     
- (since) 5.0
## Curve EdgeCurve
- (summary) 
     Get the brep.Curves3D[] 3d curve geometry used by this edge or null.
     
- (since) 6.0
## int EdgeCurveIndex
- (summary) 
     Get the brep.Curves3D[] index of the 3d curve geometry used by this edge or -1.
     
- (since) 6.0
## int EdgeIndex
- (summary) 
     Gets the index of this edge in the Brep.Edges collection.
     
- (since) 5.0
## BrepVertex EndVertex
- (summary) 
     BrepVertex at end of edge
     
- (since) 5.10
## BrepVertex StartVertex
- (summary) 
     BrepVertex at start of edge
     
- (since) 5.10
## double Tolerance
- (summary) 
     Gets or sets the accuracy of the edge curve (>=0.0 or RhinoMath.UnsetValue)
     A value of UnsetValue indicates that the tolerance should be computed.
    
     The maximum distance from the edge's 3d curve to any surface of a face
     that has this edge as a portion of its boundary must be <= this tolerance.
     
- (since) 5.0
## int TrimCount
- (summary) 
     Gets the number of trim-curves that use this edge.
     
- (since) 5.0
## EdgeAdjacency Valence
- (summary) 
     Gets the topological valency of this edge. The topological valency 
     is defined by how many adjacent faces share this edge.
     
- (since) 5.0
# Methods
## int[] AdjacentFaces()
- (summary) 
     Gets the indices of all the BrepFaces that use this edge.
     
- (since) 5.0
- (returns) int[] This is some return comment
## Concavity ConcavityAt(double t,double tolerance)
- (summary) 
     Determine the concavity of this edge at a specific parameter.
     
- (since) 6.2
- (returns) Concavity This is some return comment
## bool GetEdgeParameter(int trimIndex,double trimParameter,double edgeParameter)
- (summary) 
     Get corresponding edge parameter for given trim at given trim parameter.
     
- (since) 5.12
- (returns) bool This is some return comment
## bool IsSmoothManifoldEdge(double angleToleranceRadians)
- (summary) 
     For a manifold, non-boundary edge, decides whether or not the two surfaces
     on either side meet smoothly.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetEdgeCurve(int curve3dIndex)
- (summary) 
     Set 3d curve geometry used by a b-rep edge.
     
- (since) 5.4
- (returns) bool This is some return comment
## bool SetEdgeCurve(int curve3dIndex,Interval subDomain)
- (summary) 
     Set 3d curve geometry used by a b-rep edge.
     
- (since) 5.4
- (returns) bool This is some return comment
## int[] TrimIndices()
- (summary) 
     Gets the indices of all trims associated with this edge.
     
- (since) 5.12
- (returns) int[] This is some return comment
