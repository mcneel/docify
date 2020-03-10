---
title: "Rhino.Geometry.MeshCheckParameters"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## bool CheckForBadNormals
- (summary) 
     If true, then then look for vertex normals that are not unit vectors,
     are zero length or vary greatly from the general direction of the
     face normals.
     
- (since) 7.0
## bool CheckForDegenerateFaces
- (summary) 
     If true, then look for triangles and quads that have zero area and quads
     where one sub triangle has zero area.
     
- (since) 7.0
## bool CheckForDisjointMeshes
- (summary) 
     If true, then look for faces in the mesh that are totally isolated from other faces in the mesh.  
     (i.e. an island of faces, or many islands, that have a boundary of naked edges)
     
- (since) 7.0
## bool CheckForDuplicateFaces
- (summary) 
     If true, then look for faces that have vertexes (not necessarily vertex indexes) that are identical.
     
- (since) 7.0
## bool CheckForExtremelyShortEdges
- (summary) 
     If true, then look for topological edges where the distance between the
     endpoints is less than ExtremelyShortEdgeDistance.  
     
- (since) 7.0
## bool CheckForInvalidNgons
- (summary) 
     If true, then look for ngons that have invalid information.
     
- (since) 7.0
## bool CheckForNakedEdges
- (summary) 
     If true, then look for topological edges in the mesh topology where the
     face count is 1. Note, this check is also made if CheckForDuplicateFaces
     is True but the output is not shown if CheckForNakedEdges is false.
     
- (since) 7.0
## bool CheckForNonManifoldEdges
- (summary) 
     If true, then look for topological edges in the mesh topology where the
     face count is greater than 2. Note, this check is also made if
     CheckForDuplicateFaces is True but the output is not shown if 
     CheckForNonManifoldEdges is false.
     
- (since) 7.0
## bool CheckForRandomFaceNormals
- (summary) 
     If true, then look for adjacent faces that have the same edge orientation.
     This typically means that clockwise/counterclockwise orientation, and face normal
     are not in sync.  
     
- (since) 7.0
## bool CheckForSelfIntersection
- (summary) 
     If true, then look for self intersections.
     
- (since) 7.0
## bool CheckForUnusedVertices
- (summary) 
     If true, then look for vertices that are not referenced by any face in the mesh.  
     
- (since) 7.0
## int DegenerateFaceCount
- (summary) 
     Gets the total degenerate face count for all meshes.
     
- (since) 7.0
## int DisjointMeshCount
- (summary) 
     Gets the total count of disjoint pieces for all meshes.
     
- (since) 7.0
## int DuplicateFaceCount
- (summary) 
     Gets the total count of duplicate faces for all meshes.
     
- (since) 7.0
## int ExtremelyShortEdgeCount
- (summary) 
     Gets the total number of extremely short edges for all meshes.
     
- (since) 7.0
## int InvalidNgonCount
- (summary) 
     Gets the total number of invalid ngons for all meshes.
     
- (since) 7.0
## int NakedEdgeCount
- (summary) 
     Gets the total number of naked edges for all meshes.
     
- (since) 7.0
## int NonManifoldEdgeCount
- (summary) 
     Gets the total number of non-manifold edges for all meshes.
     
- (since) 7.0
## int NonUnitVectorNormalCount
- (summary) 
     Get the total count of normals that are not unit vectors for all meshes.
     
- (since) 7.0
## int RandomFaceNormalCount
- (summary) 
     Gets the total count of random face normals for all meshes.
     
- (since) 7.0
## int SelfIntersectingPairsCount
- (summary) 
     Gets the total count of self intersections for all meshes.  
     
- (since) 7.0
## int UnusedVertexCount
- (summary) 
     Gets the total count of unused vertices for all meshes.  
     
- (since) 7.0
## int VertexFaceNormalsDifferCount
- (summary) 
     Gets the total count of vertex normals that differ greatly from face 
     normals for all meshes.
     
- (since) 7.0
## int ZeroLengthNormalCount
- (summary) 
     Gets the total count of zero length normals for all meshes.
     
- (since) 7.0
# Methods
## static MeshCheckParameters Defaults()
- (summary) 
     Gets the default mesh check parameters.
     
- (since) 7.0
- (returns) MeshCheckParameters This is some return comment
