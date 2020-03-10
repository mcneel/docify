---
title: "Rhino.Geometry.SubD"
draft: false
---

# Constructors
## Rhino.Geometry.SubD()
- (summary) 
     Create a new instance of SubD geometry
     
- (since) 7.0
# Properties
## Collections.SubDEdgeList Edges
- (summary) 
     All edges in this SubD
     
- (since) 7.0
## Collections.SubDFaceList Faces
- (summary) 
     All faces in this SubD
     
- (since) 7.0
## bool IsSolid
- (summary) 
     Test subd to see if the active level is a solid.  
     A "solid" is a closed oriented manifold, or a closed oriented manifold.
     
- (since) 7.0
## Collections.SubDVertexList Vertices
- (summary) 
     All vertices in this SubD
     
- (since) 7.0
# Methods
## static SubD CreateFromMesh(Mesh mesh)
- (summary) 
     Create a new SubD from a mesh
     
- (since) 7.0
- (returns) SubD This is some return comment
## static SubD CreateFromMesh(Mesh mesh,SubDCreationOptions options)
- (summary) 
     Create a new SubD from a mesh
     
- (since) 7.0
- (returns) SubD This is some return comment
## void ClearEvaluationCache()
- (summary) 
     Clear cached information that depends on the location of vertex control points
     
- (since) 7.0
- (returns) void This is some return comment
## bool Subdivide(int count)
- (summary) 
     Apply the Catmull-Clark subdivision algorithm and save the results in
     this SubD
     
- (since) 7.0
- (returns) bool This is some return comment
## Brep ToBrep()
- (summary) 
     Create a Brep based on this SubD geometry
     
- (since) 7.0
- (returns) Brep This is some return comment
## uint UpdateAllTagsAndSectorCoefficients()
- (summary) 
     Updates vertex tag, edge tag, and edge coefficient values on the active
     level. After completing custom editing operations that modify the
     topology of the SubD control net or changing values of vertex or edge
     tags, the tag and sector coefficients information on nearby components
     in the edited areas need to be updated.
     
- (since) 7.0
- (returns) uint This is some return comment
