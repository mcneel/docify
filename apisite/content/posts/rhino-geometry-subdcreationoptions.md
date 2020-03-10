---
title: "Rhino.Geometry.SubDCreationOptions"
draft: false
---

# Constructors
## Rhino.Geometry.SubDCreationOptions()
- (summary) 
     Create default options
     
- (since) 7.0
# Properties
## static SubDCreationOptions ConvexCornerAtMeshCorner
- (summary) 
     Look for convex corners at sub-D vertices with 2 edges that have an
     included angle <= 90 degrees.
     
- (since) 7.0
## static SubDCreationOptions InteriorCreaseAtMeshCrease
- (summary) 
     Create an interior sub-D crease along coincident input mesh edges
     where the vertex normal directions at one end differ by at 
     least 30 degrees.
     
- (since) 7.0
## static SubDCreationOptions InteriorCreaseAtMeshEdge
- (summary) 
     Create an interior sub-D crease along all coincident input mesh edges.
     
- (since) 7.0
## static SubDCreationOptions Smooth
- (summary) 
     No interior creases and no corners.
     
- (since) 7.0
## ConvexCornerOption ConvexCornerTest
- (summary) 
     how convex corners are treated
     
- (since) 7.0
## InteriorCreaseOption InteriorCreaseTest
- (summary) 
     how interior creases are treated
     
- (since) 7.0
## bool InterpolateMeshVertices
- (summary) 
     If false, input mesh vertex locations will be used to set subd vertex control net locations.
     If true, input mesh vertex locations will be used to set subd vertex limit surface locations.
     
- (since) 7.0
## double MaximumConvexCornerAngleRadians
- (summary) 
     If ConvexCornerTest is at_mesh_corner, then an input mesh boundary
     vertex becomes a sub-D corner when the number of edges that end at the
     vertex is <= MaximumConvexCornerEdgeCount edges and the corner angle
     is <= MaximumConvexCornerAngleRadians.
     
- (since) 7.0
## uint MaximumConvexCornerEdgeCount
- (summary) 
     If ConvexCornerTest is at_mesh_corner, then an input mesh boundary
     vertex becomes a sub-D corner when the number of edges that end at the
     vertex is <= MaximumConvexCornerEdgeCount edges and the corner angle
     is <= MaximumConvexCornerAngleRadians.
     
- (since) 7.0
## double MinimumCreaseAngleRadians
- (summary) 
     When the interior crease option is AtMeshCreases the value of
     MinimumCreaseAngleRadians determines which coincident input mesh edges
     generate sub-D creases.
     If the input mesh has vertex normals, and the angle between vertex
     normals is > MinimumCreaseAngleRadians at an end of a coincident
     input mesh edge, the the correspondeing sub-D edge will be a crease.
     
- (since) 7.0
# Methods
## void Dispose()
- (summary) 
     Delete unmanager pointer for this
     
- (since) 7.0
- (returns) void This is some return comment
