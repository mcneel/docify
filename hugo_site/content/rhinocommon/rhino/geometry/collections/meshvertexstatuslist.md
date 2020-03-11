---
title: "MeshVertexStatusList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to status information relative to components of a mesh.
```cs
public class MeshVertexStatusList : IResizableList<bool>, IList, IReadOnlyList<bool>
```
## Properties

int Capacity
: Gets or sets the total number of hidden vertex information the internal data structure can hold without resizing.
: since 6.0

int Count
: Gets or sets the number of hidden vertices. For this to be a valid part of a mesh, this count should be the same as the one of mesh vertices.
: since 6.0

int HiddenCount
: Gets a value indicating how many vertices have been set to hidden.
: since 6.0
## Methods

void Add(bool hidden)
: Adds a new flag at the end of the list.
: Returns - The index of the newly added hidden vertex.
: since 6.0

void AddRange(IEnumerable<bool> values)
: Appends an array, a list or any enumerable of flags to the end of the list.
: Returns - True on success, False on failure.
: since 6.0

void Clear()
: Clears the hidden vertex list on the mesh. This results in a fully visible mesh.
: since 6.0

bool Contains(bool hidden)
: Determines if some vertices are hidden or some are shown.
: Returns - True if the array contains the specified value.
: since 6.0

void CopyTo(bool[] array,int arrayIndex)
: Copies to an array, starting at an index.
: since 6.0

void Destroy()
: Releases all memory allocated to store hidden vertices. The list capacity will be 0 after this call.
     Vertices will be immediately considered visible.Subsequent calls can add new items.
: since 6.0

IEnumerator<bool> GetEnumerator()
: Gets an enumerator that yields all flags in this collection.
: Returns - The enumerator.
: since 6.0
