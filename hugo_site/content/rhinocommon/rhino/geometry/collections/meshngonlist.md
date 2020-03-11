---
title: "MeshNgonList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to the ngons and n-gon related functionality of a Mesh.
   See also the  property for Ngon functionality details.
```cs
public class MeshNgonList : IResizableList<MeshNgon>, IList, IReadOnlyList<MeshNgon>
```
## Properties

int Count
: Gets or sets the number of mesh ngons.
: since 6.0

uint UnsignedCount
: Gets or sets the number of mesh ngons.
: since 6.0
## Methods

int AddNgon(MeshNgon ngon)
: Appends a new ngon to the end of the mesh ngon list.
: Returns - The index of the newly added ngon.
: since 6.0

int[] AddNgons(IEnumerable<MeshNgon> ngons)
: Appends a list of ngons to the end of the mesh ngon list.
: Returns - Indices of the newly created ngons
: since 6.0

int AddPlanarNgons(double planarTolerance)
: Add an ngon for each group of connected coplanar faces.
: Returns - Number of ngons added to the mesh.
: since 6.0

int AddPlanarNgons(double planarTolerance,int minimumNgonVertexCount,int minimumNgonFaceCount,bool allowHoles)
: Add an ngon for each group of connected coplanar faces.
: Returns - Number of ngons added to the mesh.
: since 6.0

void Clear()
: Clears the Ngon list on the mesh.
: since 6.0

IEnumerator<MeshNgon> GetEnumerator()
: Gets an enumerator that yields all ngons in this collection.
: Returns - The enumerator.
: since 6.0

[MeshNgon](/rhinocommon/rhino/geometry/meshngon/) GetNgon(int index)
: Returns the mesh ngon at the given index.
: Returns - The mesh ngon at the given index.  This ngon can be MeshNgon.Empty.
: since 6.0

int[] GetNgonBoundary(IEnumerable<int> ngonFaceIndexList)
: Get a list of vertices that form the boundary of a face set. This is often use to get n-gon boundaries.
: Returns - List of mesh vertex indices that form the boundary of the face set.
: since 6.0

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) GetNgonBoundingBox(int index)
: Gets the bounding box of an ngon.
: Returns - A new bounding box, or  on error.
: since 6.0

[BoundingBox](/rhinocommon/rhino/geometry/boundingbox/) GetNgonBoundingBox(MeshNgon ngon)
: Gets the bounding box of an ngon.
: Returns - A new bounding box, or  on error.
: since 6.0

[Point3d](/rhinocommon/rhino/geometry/point3d/) GetNgonCenter(int index)
: Gets the center point of an ngon.
     This the avarage of the corner points.
: Returns - The center point.
: since 6.0

[Point3d](/rhinocommon/rhino/geometry/point3d/) GetNgonCenter(MeshNgon ngon)
: Gets the center point of an ngon.
     This the avarage of the corner points.
: Returns - The center point.
: since 6.0

int GetNgonEdgeCount(int index)
: Gets the complete edge count of an ngon.
: Returns - Complete edge count or zero on error.
: since 6.0

int GetNgonOuterEdgeCount(int index)
: Gets the outer edge count of an ngon.
: Returns - Outer edge count or zero on error.
: since 6.0

void Insert(int index,MeshNgon ngon)
: Inserts a mesh ngon at a defined index in this list.
: since 6.0

uint IsValid(int index)
: Tests an ngon to see if the vertex and face references are valid and pass partial boundary validity checks.
: Returns - 0 if the ngon is not valid, otherwise the number of boundary edges.
: since 6.0

uint IsValid(int index,TextLog textLog)
: Tests an ngon to see if the vertex and face references are valid and pass partial boundary validity checks.
: Returns - 0 if the ngon is not valid, otherwise the number of boundary edges.
: since 6.0

[Point3d](/rhinocommon/rhino/geometry/point3d/)[] NgonBoundaryVertexList(MeshNgon ngon,bool bAppendStartPoint)
: Get an ngon's boundary points.
: Returns - A list of ngon boundary points.
: since 6.0

bool NgonHasHoles(int index)
: Determines whether a ngon has holes.
: Returns - True for holes (or malformed ngon, see remarks), False for no holes.
: since 6.0

int NgonIndexFromFaceIndex(int meshFaceIndex)
: Returns the index of a mesh ngon the face belongs to.
: Returns - The index of the mesh ngon the face belongs to or -1 if the face does not belong to an ngon.
: since 6.0

int Orientation(int index,bool permitHoles)
: Determine if the ngon's boundary orientation matches that of the set of faces it is made from.
: Returns - 1: The ngon does not have holes, the ngon's faces are compatibly oriented, 
     and the ngon's outer boundary orientation matches the faces' orientation.
     -1: The ngon does not have holes, the ngon's faces are compatibly oriented,
     and the ngon's outer boundary orientation is opposite the faces' orientation.
     0: Otherwise.The ngon may be invalid, have holes, the ngon's faces may not be
     compatibly oriented, the ngons edges may not have a consistent orientation
     with respect to the faces, or some other issue.
: since 7.0

void RemoveAt(int index)
: Removes an ngon from the mesh.
: since 6.0

int RemoveNgons(IEnumerable<int> indices)
: Remove one or more ngons from the mesh.
: Returns - The number of deleted ngons.
: since 6.0

void ReverseOuterBoundary(int index)
: Reverse the order of the m_vi[] array for an ngon
: since 7.0

void SetNgon(int index,MeshNgon ngon)
: Set an ngon in this list.
: since 6.0
