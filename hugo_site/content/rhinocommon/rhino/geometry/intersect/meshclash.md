---
title: "MeshClash"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Intersect](../)*

Represents a particular instance of a clash or intersection between two meshes.
```cs
public class MeshClash
```
## Properties

[Point3d](/rhinocommon/rhino/geometry/point3d/) ClashPoint
: If valid, then the sphere centered at ClashPoint of ClashRadius
     distance intersects the clashing meshes.

double ClashRadius
: Gets the clash, or intersection, radius.

[Mesh](/rhinocommon/rhino/geometry/mesh/) MeshA
: Gets the first mesh.

[Mesh](/rhinocommon/rhino/geometry/mesh/) MeshB
: Gets the second mesh.
## Methods

static [Mesh](/rhinocommon/rhino/geometry/mesh/)[] FindDetail(RhinoObject objA,RhinoObject objB,double distance)
: Finds all of the mesh faces on each of two Rhino objects that interfere within a clash distance.
     This function uses the object's mesh to calculate the interferences.
     Acceptable object types include: BrepObject, ExtrusionObject, MeshObject, and SubDObject.
: Returns - The resulting meshes are sub-meshes of the input meshes if successful, or an empty array on error.
: since 7.0

static [Mesh](/rhinocommon/rhino/geometry/mesh/)[] FindDetail(RhinoObject objA,RhinoObject objB,double distance,MeshType meshType,MeshingParameters meshingParameters)
: Finds all of the mesh faces on each of two Rhino objects that interfere within a clash distance.
     This function uses the object's mesh to calculate the interferences.
     Acceptable object types include: BrepObject, ExtrusionObject, MeshObject, and SubDObject.
: Returns - The resulting meshes are sub-meshes of the input meshes if successful, or an empty array on error.
: since 7.0

static MeshClash[] Search(IEnumerable<Mesh> setA,IEnumerable<Mesh> setB,double distance,int maxEventCount)
: Searches for locations where the distance from a mesh in one set of meshes
     is less than distance to another mesh in a second set of meshes.
: Returns - An array of clash objects.

static [MeshInterference](/rhinocommon/rhino/geometry/intersect/meshinterference/)[] Search(IEnumerable<RhinoObject> setA,IEnumerable<RhinoObject> setB,double distance)
: Searches for locations where the distance from a RhinoObject, in one set of objects,
     is less than the specified distance to another RhinoObject in a second set of objects.
     This function uses the object's mesh to calculate the interferences.
     Acceptable object types include: BrepObject, ExtrusionObject, MeshObject, and SubDObject.
: Returns - An array of mesh interference object if successful, or an empty array on failure.
: since 7.0

static [MeshInterference](/rhinocommon/rhino/geometry/intersect/meshinterference/)[] Search(IEnumerable<RhinoObject> setA,IEnumerable<RhinoObject> setB,double distance,MeshType meshType,MeshingParameters meshingParameters)
: Searches for locations where the distance from a RhinoObject, in one set of objects,
     is less than the specified distance to another RhinoObject in a second set of objects.
     This function uses the object's mesh to calculate the interferences.
     Acceptable object types include: BrepObject, ExtrusionObject, MeshObject, and SubDObject.
: Returns - An array of mesh interference object if successful, or an empty array on failure.
: since 7.0

static MeshClash[] Search(Mesh meshA,IEnumerable<Mesh> setB,double distance,int maxEventCount)
: Searches the locations where the distance from the first mesh to a mesh in the second set of meshes
     is less than the provided value.
: Returns - An array of clash objects.

static MeshClash[] Search(Mesh meshA,Mesh meshB,double distance,int maxEventCount)
: Searches the locations where the distance from the first mesh to the second mesh
     is less than the provided value.
: Returns - An array of clash objects.
