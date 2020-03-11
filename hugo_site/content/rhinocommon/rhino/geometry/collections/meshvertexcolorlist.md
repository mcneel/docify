---
title: "MeshVertexColorList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to the vertex colors of a mesh object.
```cs
public class MeshVertexColorList : IResizableList<Color>, IList, IReadOnlyList<Color>
```
## Properties

int Capacity
: Gets or sets the total number of vertex colors the internal data structure can hold without resizing.
: since 6.0

int Count
: Gets or sets the number of mesh colors.

[MappingTag](/rhinocommon/rhino/render/mappingtag/) Tag
: Gets or sets a mapping information for the mesh associated with these vertex colors.
## Methods

int Add(Color color)
: Adds a new vertex color to the end of the color list.
: Returns - The index of the newly added color.

int Add(int red,int green,int blue)
: Adds a new vertex color to the end of the color list.
: Returns - The index of the newly added color.

bool AppendColors(Color[] colors)
: Appends a collection of colors to the vertex color list. 
     For the Mesh to be valid, the number of colors must match the number of vertices.
: Returns - True on success, False on failure.

void Clear()
: Clears the vertex color list on the mesh.

bool CreateMonotoneMesh(Color baseColor)
: Constructs a valid vertex color list consisting of a single color.
: Returns - True on success, False on failure.

void Destroy()
: Releases all memory allocated to store vertex colors. The list capacity will be 0 after this call.
     Subsequent calls can add new items.
: since 6.0

IEnumerator<Color> GetEnumerator()
: Gets an enumerator that yields all colors in this collection.
: Returns - The enumerator.

bool SetColor(int index,Color color)
: Sets or adds a vertex to the Vertex List.
     If [index] is less than [Count], the existing vertex at [index] will be modified.If [index] equals [Count], a new vertex is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
: Returns - True on success, False on failure.

bool SetColor(int index,int red,int green,int blue)
: Sets or adds a vertex color to the color List.
     If [index] is less than [Count], the existing vertex at [index] will be modified.If [index] equals [Count], a new vertex is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
: Returns - True on success, False on failure.

bool SetColor(MeshFace face,Color color)
: Sets a color at the three or four vertex indices of a specified face.
: Returns - True on success; False on error.

bool SetColors(Color[] colors)
: Sets all the vertex colors in one go. For the Mesh to be valid, the number 
     of colors must match the number of vertices.
: Returns - True on success, False on failure.

int[] ToARGBArray()
: Return colors as an array of integers with packed ARGB values
: since 7.0
