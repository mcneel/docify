---
title: "MeshTextureCoordinateList"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Geometry.Collections](../)*

Provides access to the Vertex Texture coordinates of a Mesh.
```cs
public class MeshTextureCoordinateList : IResizableList<Point2f>, IList, IReadOnlyList<Point2f>
```
## Properties

int Capacity
: Gets or sets the total number of texture coordinates the internal data structure can hold without resizing.
: since 6.0

int Count
: Gets or sets the number of texture coordinates.
## Methods

int Add(double s,double t)
: Adds a new texture coordinate to the end of the Texture list.
: Returns - The index of the newly added texture coordinate.

int Add(float s,float t)
: Adds a new texture coordinate to the end of the Texture list.
: Returns - The index of the newly added texture coordinate.

int Add(Point2f tc)
: Adds a new texture coordinate to the end of the Texture list.
: Returns - The index of the newly added texture coordinate.

int Add(Point3d tc)
: Adds a new texture coordinate to the end of the Texture list.
: Returns - The index of the newly added texture coordinate.

bool AddRange(Point2f[] textureCoordinates)
: Appends an array of texture coordinates.
: Returns - True on success, False on failure.

void Clear()
: Clears the Texture Coordinate list on the mesh.

void Destroy()
: Releases all memory allocated to store texture coordinates. The list capacity will be 0 after this call.
     Subsequent calls can add new items.
: since 6.0

IEnumerator<Point2f> GetEnumerator()
: Gets an enumerator that yields all texture coordinates in this collection.
: Returns - The enumerator.

bool NormalizeTextureCoordinates()
: Scales the texture coordinates so the texture domains are [0,1] 
     and eliminate any texture rotations.
: Returns - True on success, False on failure.

bool ReverseTextureCoordinates(int direction)
: Reverses one coordinate direction of the texture coordinates.
     The region of the bitmap the texture uses does not change.
     Either Us or Vs direction is flipped.
: Returns - True if operation succeeded; otherwise, false.

bool SetTextureCoordinate(int index,double s,double t)
: Sets or adds a texture coordinate to the Texture Coordinate List.
     If [index] is less than [Count], the existing coordinate at [index] will be modified.If [index] equals [Count], a new coordinate is appended to the end of the coordinate list.If [index] is larger than [Count], the function will return false.
: Returns - True on success, False on failure.

bool SetTextureCoordinate(int index,float s,float t)
: Sets or adds a texture coordinate to the Texture Coordinate List.
     If [index] is less than [Count], the existing coordinate at [index] will be modified.If [index] equals [Count], a new coordinate is appended to the end of the coordinate list.If [index] is larger than [Count], the function will return false.
: Returns - True on success, False on failure.

bool SetTextureCoordinate(int index,Point2f tc)
: Sets or adds a texture coordinate to the Texture Coordinate List.
     If [index] is less than [Count], the existing coordinate at [index] will be modified.If [index] equals [Count], a new coordinate is appended to the end of the coordinate list.If [index] is larger than [Count], the function will return false.
: Returns - True on success, False on failure.

bool SetTextureCoordinate(int index,Point3f tc)
: Sets or adds a texture coordinate to the Texture Coordinate List.
     If [index] is less than [Count], the existing coordinate at [index] will be modified.If [index] equals [Count], a new coordinate is appended to the end of the coordinate list.If [index] is larger than [Count], the function will return false.
: Returns - True on success, False on failure.

bool SetTextureCoordinates(Point2f[] textureCoordinates)
: Sets all texture coordinates in one go.
: Returns - True on success, False on failure.

bool SetTextureCoordinates(TextureMapping mapping)
: Set all texture coordinates based on a texture mapping function
: Returns - True on success, False on failure.

float[] ToFloatArray()
: Copies all vertices to a linear array of float in u,v order
: Returns - The float array.
: since 6.0

bool TransposeTextureCoordinates()
: Transposes texture coordinates.
     The region of the bitmap the texture uses does not change.
     All texture coordinates rows (Us) become columns (Vs), and vice versa.
: Returns - True on success, False on failure.
