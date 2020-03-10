---
title: "Rhino.Geometry.Collections.MeshVertexColorList"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## int Capacity
- (summary) 
     Gets or sets the total number of vertex colors the internal data structure can hold without resizing.
     
- (since) 6.0
## int Count
- (summary) 
     Gets or sets the number of mesh colors.
     
- (since) 5.0
## MappingTag Tag
- (summary) 
     Gets or sets a mapping information for the mesh associated with these vertex colors.
     
- (since) 5.0
# Methods
## int Add(Color color)
- (summary) 
     Adds a new vertex color to the end of the color list.
     
- (since) 5.0
- (returns) int This is some return comment
## int Add(int red,int green,int blue)
- (summary) 
     Adds a new vertex color to the end of the color list.
     
- (since) 5.0
- (returns) int This is some return comment
## bool AppendColors(Color[] colors)
- (summary) 
     Appends a collection of colors to the vertex color list. 
     For the Mesh to be valid, the number of colors must match the number of vertices.
     
- (since) 5.0
- (returns) bool This is some return comment
## void Clear()
- (summary) 
     Clears the vertex color list on the mesh.
     
- (since) 5.0
- (returns) void This is some return comment
## bool CreateMonotoneMesh(Color baseColor)
- (summary) 
     Constructs a valid vertex color list consisting of a single color.
     
- (since) 5.0
- (returns) bool This is some return comment
## void Destroy()
- (summary) 
     Releases all memory allocated to store vertex colors. The list capacity will be 0 after this call.
     Subsequent calls can add new items.
- (since) 6.0
- (returns) void This is some return comment
## IEnumerator<Color> GetEnumerator()
- (summary) 
     Gets an enumerator that yields all colors in this collection.
     
- (since) 5.0
- (returns) IEnumerator<Color> This is some return comment
## bool SetColor(int index,Color color)
- (summary) 
     Sets or adds a vertex to the Vertex List.
     If [index] is less than [Count], the existing vertex at [index] will be modified.If [index] equals [Count], a new vertex is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
- (since) 5.0
- (returns) bool This is some return comment
## bool SetColor(int index,int red,int green,int blue)
- (summary) 
     Sets or adds a vertex color to the color List.
     If [index] is less than [Count], the existing vertex at [index] will be modified.If [index] equals [Count], a new vertex is appended to the end of the vertex list.If [index] is larger than [Count], the function will return false.
- (since) 5.0
- (returns) bool This is some return comment
## bool SetColor(MeshFace face,Color color)
- (summary) 
     Sets a color at the three or four vertex indices of a specified face.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetColors(Color[] colors)
- (summary) 
     Sets all the vertex colors in one go. For the Mesh to be valid, the number 
     of colors must match the number of vertices.
     
- (since) 5.0
- (returns) bool This is some return comment
## int[] ToARGBArray()
- (summary) 
     Return colors as an array of integers with packed ARGB values
     
- (since) 7.0
- (returns) int[] This is some return comment
