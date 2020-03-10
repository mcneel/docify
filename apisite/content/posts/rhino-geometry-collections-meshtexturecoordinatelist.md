---
title: "Rhino.Geometry.Collections.MeshTextureCoordinateList"
draft: false
---

# Properties
## int Capacity
- (summary) 
     Gets or sets the total number of texture coordinates the internal data structure can hold without resizing.
     
- (since) 6.0
## int Count
- (summary) 
     Gets or sets the number of texture coordinates.
     
- (since) 5.0
# Methods
## int Add(double s,double t)
- (summary) 
     Adds a new texture coordinate to the end of the Texture list.
     
- (since) 5.0
- (returns) int This is some return comment
## int Add(float s,float t)
- (summary) 
     Adds a new texture coordinate to the end of the Texture list.
     
- (since) 5.0
- (returns) int This is some return comment
## int Add(Point2f tc)
- (summary) 
     Adds a new texture coordinate to the end of the Texture list.
     
- (since) 5.0
- (returns) int This is some return comment
## int Add(Point3d tc)
- (summary) 
     Adds a new texture coordinate to the end of the Texture list.
     
- (since) 5.0
- (returns) int This is some return comment
## bool AddRange(Point2f[] textureCoordinates)
- (summary) 
     Appends an array of texture coordinates.
     
- (since) 5.0
- (returns) bool This is some return comment
## void Clear()
- (summary) 
     Clears the Texture Coordinate list on the mesh.
     
- (since) 5.0
- (returns) void This is some return comment
## void Destroy()
- (summary) 
     Releases all memory allocated to store texture coordinates. The list capacity will be 0 after this call.
     Subsequent calls can add new items.
- (since) 6.0
- (returns) void This is some return comment
## IEnumerator<Point2f> GetEnumerator()
- (summary) 
     Gets an enumerator that yields all texture coordinates in this collection.
     
- (since) 5.0
- (returns) IEnumerator<Point2f> This is some return comment
## bool NormalizeTextureCoordinates()
- (summary) 
     Scales the texture coordinates so the texture domains are [0,1] 
     and eliminate any texture rotations.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool ReverseTextureCoordinates(int direction)
- (summary) 
     Reverses one coordinate direction of the texture coordinates.
     The region of the bitmap the texture uses does not change.
     Either Us or Vs direction is flipped.
- (since) 5.0
- (returns) bool This is some return comment
## bool SetTextureCoordinate(int index,double s,double t)
- (summary) 
     Sets or adds a texture coordinate to the Texture Coordinate List.
     If [index] is less than [Count], the existing coordinate at [index] will be modified.If [index] equals [Count], a new coordinate is appended to the end of the coordinate list.If [index] is larger than [Count], the function will return false.
- (since) 5.0
- (returns) bool This is some return comment
## bool SetTextureCoordinate(int index,float s,float t)
- (summary) 
     Sets or adds a texture coordinate to the Texture Coordinate List.
     If [index] is less than [Count], the existing coordinate at [index] will be modified.If [index] equals [Count], a new coordinate is appended to the end of the coordinate list.If [index] is larger than [Count], the function will return false.
- (since) 5.0
- (returns) bool This is some return comment
## bool SetTextureCoordinate(int index,Point2f tc)
- (summary) 
     Sets or adds a texture coordinate to the Texture Coordinate List.
     If [index] is less than [Count], the existing coordinate at [index] will be modified.If [index] equals [Count], a new coordinate is appended to the end of the coordinate list.If [index] is larger than [Count], the function will return false.
- (since) 5.0
- (returns) bool This is some return comment
## bool SetTextureCoordinate(int index,Point3f tc)
- (summary) 
     Sets or adds a texture coordinate to the Texture Coordinate List.
     If [index] is less than [Count], the existing coordinate at [index] will be modified.If [index] equals [Count], a new coordinate is appended to the end of the coordinate list.If [index] is larger than [Count], the function will return false.
- (since) 5.0
- (returns) bool This is some return comment
## bool SetTextureCoordinates(Point2f[] textureCoordinates)
- (summary) 
     Sets all texture coordinates in one go.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetTextureCoordinates(TextureMapping mapping)
- (summary) 
     Set all texture coordinates based on a texture mapping function
     
- (since) 5.0
- (returns) bool This is some return comment
## float[] ToFloatArray()
- (summary) 
     Copies all vertices to a linear array of float in u,v order
     
- (since) 6.0
- (returns) float[] This is some return comment
## bool TransposeTextureCoordinates()
- (summary) 
     Transposes texture coordinates.
     The region of the bitmap the texture uses does not change.
     All texture coordinates rows (Us) become columns (Vs), and vice versa.
- (since) 5.0
- (returns) bool This is some return comment
