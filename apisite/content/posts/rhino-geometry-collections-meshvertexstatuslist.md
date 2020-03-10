---
title: "Rhino.Geometry.Collections.MeshVertexStatusList"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## int Capacity
- (summary) 
     Gets or sets the total number of hidden vertex information the internal data structure can hold without resizing.
     
- (since) 6.0
## int Count
- (summary) 
     Gets or sets the number of hidden vertices. For this to be a valid part of a mesh, this count should be the same as the one of mesh vertices.
     
- (since) 6.0
## int HiddenCount
- (summary) 
     Gets a value indicating how many vertices have been set to hidden.
     
- (since) 6.0
# Methods
## void Add(bool hidden)
- (summary) 
     Adds a new flag at the end of the list.
     
- (since) 6.0
- (returns) void This is some return comment
## void AddRange(IEnumerable<bool> values)
- (summary) 
     Appends an array, a list or any enumerable of flags to the end of the list.
     
- (since) 6.0
- (returns) void This is some return comment
## void Clear()
- (summary) 
     Clears the hidden vertex list on the mesh. This results in a fully visible mesh.
     
- (since) 6.0
- (returns) void This is some return comment
## bool Contains(bool hidden)
- (summary) 
     Determines if some vertices are hidden or some are shown.
     
- (since) 6.0
- (returns) bool This is some return comment
## void CopyTo(bool[] array,int arrayIndex)
- (summary) 
     Copies to an array, starting at an index.
     
- (since) 6.0
- (returns) void This is some return comment
## void Destroy()
- (summary) 
     Releases all memory allocated to store hidden vertices. The list capacity will be 0 after this call.
     Vertices will be immediately considered visible.Subsequent calls can add new items.
- (since) 6.0
- (returns) void This is some return comment
## IEnumerator<bool> GetEnumerator()
- (summary) 
     Gets an enumerator that yields all flags in this collection.
     
- (since) 6.0
- (returns) IEnumerator<bool> This is some return comment
