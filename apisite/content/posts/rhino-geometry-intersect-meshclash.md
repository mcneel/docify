---
title: "Rhino.Geometry.Intersect.MeshClash"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## Point3d ClashPoint
- (summary) 
     If valid, then the sphere centered at ClashPoint of ClashRadius
     distance intersects the clashing meshes.
     
- (since) 5.0
## double ClashRadius
- (summary) 
     Gets the clash, or intersection, radius.
     
- (since) 5.0
## Mesh MeshA
- (summary) 
     Gets the first mesh.
     
- (since) 5.0
## Mesh MeshB
- (summary) 
     Gets the second mesh.
     
- (since) 5.0
# Methods
## static Mesh[] FindDetail(RhinoObject objA,RhinoObject objB,double distance)
- (summary) 
     Finds all of the mesh faces on each of two Rhino objects that interfere within a clash distance.
     This function uses the object's mesh to calculate the interferences.
     Acceptable object types include: BrepObject, ExtrusionObject, MeshObject, and SubDObject. 
     
- (since) 7.0
- (returns) Mesh[] This is some return comment
## static Mesh[] FindDetail(RhinoObject objA,RhinoObject objB,double distance,MeshType meshType,MeshingParameters meshingParameters)
- (summary) 
     Finds all of the mesh faces on each of two Rhino objects that interfere within a clash distance.
     This function uses the object's mesh to calculate the interferences.
     Acceptable object types include: BrepObject, ExtrusionObject, MeshObject, and SubDObject. 
     
- (since) 7.0
- (returns) Mesh[] This is some return comment
## static MeshClash[] Search(IEnumerable<Mesh> setA,IEnumerable<Mesh> setB,double distance,int maxEventCount)
- (summary) 
     Searches for locations where the distance from a mesh in one set of meshes
     is less than distance to another mesh in a second set of meshes.
     
- (since) 5.0
- (returns) MeshClash[] This is some return comment
## static MeshInterference[] Search(IEnumerable<RhinoObject> setA,IEnumerable<RhinoObject> setB,double distance)
- (summary) 
     Searches for locations where the distance from a RhinoObject, in one set of objects,
     is less than the specified distance to another RhinoObject in a second set of objects.
     This function uses the object's mesh to calculate the interferences.
     Acceptable object types include: BrepObject, ExtrusionObject, MeshObject, and SubDObject. 
     
- (since) 7.0
- (returns) MeshInterference[] This is some return comment
## static MeshInterference[] Search(IEnumerable<RhinoObject> setA,IEnumerable<RhinoObject> setB,double distance,MeshType meshType,MeshingParameters meshingParameters)
- (summary) 
     Searches for locations where the distance from a RhinoObject, in one set of objects,
     is less than the specified distance to another RhinoObject in a second set of objects.
     This function uses the object's mesh to calculate the interferences.
     Acceptable object types include: BrepObject, ExtrusionObject, MeshObject, and SubDObject. 
     
- (since) 7.0
- (returns) MeshInterference[] This is some return comment
## static MeshClash[] Search(Mesh meshA,IEnumerable<Mesh> setB,double distance,int maxEventCount)
- (summary) 
     Searches the locations where the distance from the first mesh to a mesh in the second set of meshes
     is less than the provided value.
     
- (since) 5.0
- (returns) MeshClash[] This is some return comment
## static MeshClash[] Search(Mesh meshA,Mesh meshB,double distance,int maxEventCount)
- (summary) 
     Searches the locations where the distance from the first mesh to the second mesh
     is less than the provided value.
     
- (since) 5.0
- (returns) MeshClash[] This is some return comment
