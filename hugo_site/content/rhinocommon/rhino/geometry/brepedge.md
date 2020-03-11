---
title: "BrepEdge"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Represents a single edge curve in a Brep object.
```cs
public class BrepEdge : CurveProxy
```
## Properties

[Brep](/rhinocommon/rhino/geometry/brep/) Brep
: Gets the Brep that owns this edge.

[Curve](/rhinocommon/rhino/geometry/curve/) EdgeCurve
: Get the brep.Curves3D[] 3d curve geometry used by this edge or null.
: since 6.0

int EdgeCurveIndex
: Get the brep.Curves3D[] index of the 3d curve geometry used by this edge or -1.
: since 6.0

int EdgeIndex
: Gets the index of this edge in the Brep.Edges collection.

[BrepVertex](/rhinocommon/rhino/geometry/brepvertex/) EndVertex
: BrepVertex at end of edge
: since 5.10

[BrepVertex](/rhinocommon/rhino/geometry/brepvertex/) StartVertex
: BrepVertex at start of edge
: since 5.10

double Tolerance
: Gets or sets the accuracy of the edge curve (>=0.0 or RhinoMath.UnsetValue)
     A value of UnsetValue indicates that the tolerance should be computed.
    
     The maximum distance from the edge's 3d curve to any surface of a face
     that has this edge as a portion of its boundary must be <= this tolerance.

int TrimCount
: Gets the number of trim-curves that use this edge.

[EdgeAdjacency](/rhinocommon/rhino/geometry/edgeadjacency/) Valence
: Gets the topological valency of this edge. The topological valency 
     is defined by how many adjacent faces share this edge.
## Methods

int[] AdjacentFaces()
: Gets the indices of all the BrepFaces that use this edge.

[Concavity](/rhinocommon/rhino/geometry/concavity/) ConcavityAt(double t,double tolerance)
: Determine the concavity of this edge at a specific parameter.
: Returns - Concavity measure at parameter.
: since 6.2

bool GetEdgeParameter(int trimIndex,double trimParameter,double edgeParameter)
: Get corresponding edge parameter for given trim at given trim parameter.
: Returns - True on success
: since 5.12

bool IsSmoothManifoldEdge(double angleToleranceRadians)
: For a manifold, non-boundary edge, decides whether or not the two surfaces
     on either side meet smoothly.
: Returns - True if edge is manifold, has exactly 2 trims, and surface normals on either
     side agree to within angle_tolerance.

bool SetEdgeCurve(int curve3dIndex)
: Set 3d curve geometry used by a b-rep edge.
: Returns - True if successful
: since 5.4

bool SetEdgeCurve(int curve3dIndex,Interval subDomain)
: Set 3d curve geometry used by a b-rep edge.
: Returns - True if successful
: since 5.4

int[] TrimIndices()
: Gets the indices of all trims associated with this edge.
: Returns - Empty array on failure.
: since 5.12
