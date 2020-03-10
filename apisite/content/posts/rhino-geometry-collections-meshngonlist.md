---
title: "Rhino.Geometry.Collections.MeshNgonList"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## int Count
- (summary) 
     Gets or sets the number of mesh ngons.
     
- (since) 6.0
## uint UnsignedCount
- (summary) 
     Gets or sets the number of mesh ngons.
     
- (since) 6.0
# Methods
## int AddNgon(MeshNgon ngon)
- (summary) 
     Appends a new ngon to the end of the mesh ngon list.
     
- (since) 6.0
- (returns) int This is some return comment
## int[] AddNgons(IEnumerable<MeshNgon> ngons)
- (summary) 
     Appends a list of ngons to the end of the mesh ngon list.
     
- (since) 6.0
- (returns) int[] This is some return comment
## int AddPlanarNgons(double planarTolerance)
- (summary) 
     Add an ngon for each group of connected coplanar faces.
     
- (since) 6.0
- (returns) int This is some return comment
## int AddPlanarNgons(double planarTolerance,int minimumNgonVertexCount,int minimumNgonFaceCount,bool allowHoles)
- (summary) 
     Add an ngon for each group of connected coplanar faces.
     
- (since) 6.0
- (returns) int This is some return comment
## void Clear()
- (summary) 
     Clears the Ngon list on the mesh.
     
- (since) 6.0
- (returns) void This is some return comment
## IEnumerator<MeshNgon> GetEnumerator()
- (summary) 
     Gets an enumerator that yields all ngons in this collection.
     
- (since) 6.0
- (returns) IEnumerator<MeshNgon> This is some return comment
## MeshNgon GetNgon(int index)
- (summary) 
     Returns the mesh ngon at the given index. 
     
- (since) 6.0
- (returns) MeshNgon This is some return comment
## int[] GetNgonBoundary(IEnumerable<int> ngonFaceIndexList)
- (summary) 
     Get a list of vertices that form the boundary of a face set. This is often use to get n-gon boundaries.
     
- (since) 6.0
- (returns) int[] This is some return comment
## BoundingBox GetNgonBoundingBox(int index)
- (summary) 
     Gets the bounding box of an ngon.
     
- (since) 6.0
- (returns) BoundingBox This is some return comment
## BoundingBox GetNgonBoundingBox(MeshNgon ngon)
- (summary) 
     Gets the bounding box of an ngon.
     
- (since) 6.0
- (returns) BoundingBox This is some return comment
## Point3d GetNgonCenter(int index)
- (summary) 
     Gets the center point of an ngon.
     This the avarage of the corner points.
- (since) 6.0
- (returns) Point3d This is some return comment
## Point3d GetNgonCenter(MeshNgon ngon)
- (summary) 
     Gets the center point of an ngon.
     This the avarage of the corner points.
- (since) 6.0
- (returns) Point3d This is some return comment
## int GetNgonEdgeCount(int index)
- (summary) 
     Gets the complete edge count of an ngon.
     
- (since) 6.0
- (returns) int This is some return comment
## int GetNgonOuterEdgeCount(int index)
- (summary) 
     Gets the outer edge count of an ngon.
     
- (since) 6.0
- (returns) int This is some return comment
## void Insert(int index,MeshNgon ngon)
- (summary) 
     Inserts a mesh ngon at a defined index in this list.
     
- (since) 6.0
- (returns) void This is some return comment
## uint IsValid(int index)
- (summary) 
     Tests an ngon to see if the vertex and face references are valid and pass partial boundary validity checks.
     
- (since) 6.0
- (returns) uint This is some return comment
## uint IsValid(int index,TextLog textLog)
- (summary) 
     Tests an ngon to see if the vertex and face references are valid and pass partial boundary validity checks.
     
- (since) 6.0
- (returns) uint This is some return comment
## Point3d[] NgonBoundaryVertexList(MeshNgon ngon,bool bAppendStartPoint)
- (summary) 
     Get an ngon's boundary points.
     
- (since) 6.0
- (returns) Point3d[] This is some return comment
## bool NgonHasHoles(int index)
- (summary) 
     Determines whether a ngon has holes.
     
- (since) 6.0
- (returns) bool This is some return comment
## int NgonIndexFromFaceIndex(int meshFaceIndex)
- (summary) 
     Returns the index of a mesh ngon the face belongs to.
     
- (since) 6.0
- (returns) int This is some return comment
## int Orientation(int index,bool permitHoles)
- (summary) 
     Determine if the ngon's boundary orientation matches that of the set of faces it is made from.
     
- (since) 7.0
- (returns) int This is some return comment
## void RemoveAt(int index)
- (summary) 
     Removes an ngon from the mesh.
     
- (since) 6.0
- (returns) void This is some return comment
## int RemoveNgons(IEnumerable<int> indices)
- (summary) 
     Remove one or more ngons from the mesh.
     
- (since) 6.0
- (returns) int This is some return comment
## void ReverseOuterBoundary(int index)
- (summary) 
     Reverse the order of the m_vi[] array for an ngon
     
- (since) 7.0
- (returns) void This is some return comment
## void SetNgon(int index,MeshNgon ngon)
- (summary) 
     Set an ngon in this list.
     
- (since) 6.0
- (returns) void This is some return comment
