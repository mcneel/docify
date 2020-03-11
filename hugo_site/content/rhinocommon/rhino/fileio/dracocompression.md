---
title: "DracoCompression"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Google draco compression for mesh and point cloud data
```cs
public class DracoCompression : IDisposable
```
## Methods

static DracoCompression Compress(Mesh mesh)
: Compress a mesh using default compression options.
: Returns - instance of class representing the compressed data
: since 7.0

static DracoCompression Compress(Mesh mesh,DracoCompressionOptions options)
: Compress a mesh
: Returns - instance of class representing the compressed data
: since 7.0

static Rhino.Geometry.GeometryBase DecompressBase64String(string encoded)
: Decompress base64 encoded version of draco data into either a mesh or point cloud
: Returns - Mesh or point cloud on success. None on failure
: since 7.0

static Rhino.Geometry.GeometryBase DecompressByteArray(byte[] bytes)
: Decompress data into either a mesh or point cloud.
: Returns - Mesh or point cloud on success. None on failure
: since 7.0

static Rhino.Geometry.GeometryBase DecompressFile(string path)
: Read compressed data from disk and decompress to RhinoCommon geometry
: Returns - Mesh or point cloud on success. None on failure
: since 7.0

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.
: since 7.0

string ToBase64String()
: Convert byte array of draco compressed data into a base64 encoded string
: since 7.0

bool Write(string path)
: Write the compressed data to disk
: Returns - True on success
: since 7.0
