---
title: "MeshCheckParameters"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry](../)*

Output of a mesh checking operations.
## Properties

bool CheckForBadNormals
: If true, then then look for vertex normals that are not unit vectors,
     are zero length or vary greatly from the general direction of the
     face normals.
: since 7.0

bool CheckForDegenerateFaces
: If true, then look for triangles and quads that have zero area and quads
     where one sub triangle has zero area.
: since 7.0

bool CheckForDisjointMeshes
: If true, then look for faces in the mesh that are totally isolated from other faces in the mesh.  
     (i.e. an island of faces, or many islands, that have a boundary of naked edges)
: since 7.0

bool CheckForDuplicateFaces
: If true, then look for faces that have vertexes (not necessarily vertex indexes) that are identical.
: since 7.0

bool CheckForExtremelyShortEdges
: If true, then look for topological edges where the distance between the
     endpoints is less than ExtremelyShortEdgeDistance.
: since 7.0

bool CheckForInvalidNgons
: If true, then look for ngons that have invalid information.
: since 7.0

bool CheckForNakedEdges
: If true, then look for topological edges in the mesh topology where the
     face count is 1. Note, this check is also made if CheckForDuplicateFaces
     is True but the output is not shown if CheckForNakedEdges is false.
: since 7.0

bool CheckForNonManifoldEdges
: If true, then look for topological edges in the mesh topology where the
     face count is greater than 2. Note, this check is also made if
     CheckForDuplicateFaces is True but the output is not shown if 
     CheckForNonManifoldEdges is false.
: since 7.0

bool CheckForRandomFaceNormals
: If true, then look for adjacent faces that have the same edge orientation.
     This typically means that clockwise/counterclockwise orientation, and face normal
     are not in sync.
: since 7.0

bool CheckForSelfIntersection
: If true, then look for self intersections.
: since 7.0

bool CheckForUnusedVertices
: If true, then look for vertices that are not referenced by any face in the mesh.
: since 7.0

int DegenerateFaceCount
: Gets the total degenerate face count for all meshes.
: since 7.0

int DisjointMeshCount
: Gets the total count of disjoint pieces for all meshes.
: since 7.0

int DuplicateFaceCount
: Gets the total count of duplicate faces for all meshes.
: since 7.0

int ExtremelyShortEdgeCount
: Gets the total number of extremely short edges for all meshes.
: since 7.0

int InvalidNgonCount
: Gets the total number of invalid ngons for all meshes.
: since 7.0

int NakedEdgeCount
: Gets the total number of naked edges for all meshes.
: since 7.0

int NonManifoldEdgeCount
: Gets the total number of non-manifold edges for all meshes.
: since 7.0

int NonUnitVectorNormalCount
: Get the total count of normals that are not unit vectors for all meshes.
: since 7.0

int RandomFaceNormalCount
: Gets the total count of random face normals for all meshes.
: since 7.0

int SelfIntersectingPairsCount
: Gets the total count of self intersections for all meshes.
: since 7.0

int UnusedVertexCount
: Gets the total count of unused vertices for all meshes.
: since 7.0

int VertexFaceNormalsDifferCount
: Gets the total count of vertex normals that differ greatly from face 
     normals for all meshes.
: since 7.0

int ZeroLengthNormalCount
: Gets the total count of zero length normals for all meshes.
: since 7.0
## Methods

static MeshCheckParameters Defaults()
: Gets the default mesh check parameters.
: Returns - The default mesh check parameters.
: since 7.0
