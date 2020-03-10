---
title: "Rhino.FileIO.DracoCompression"
draft: false
---

# Methods
## static DracoCompression Compress(Mesh mesh)
- (summary) 
     Compress a mesh using default compression options.
     
- (since) 7.0
- (returns) DracoCompression This is some return comment
## static DracoCompression Compress(Mesh mesh,DracoCompressionOptions options)
- (summary) 
     Compress a mesh
     
- (since) 7.0
- (returns) DracoCompression This is some return comment
## static Rhino.Geometry.GeometryBase DecompressBase64String(string encoded)
- (summary) 
     Decompress base64 encoded version of draco data into either a mesh or point cloud
     
- (since) 7.0
- (returns) Rhino.Geometry.GeometryBase This is some return comment
## static Rhino.Geometry.GeometryBase DecompressByteArray(byte[] bytes)
- (summary) 
     Decompress data into either a mesh or point cloud.
     
- (since) 7.0
- (returns) Rhino.Geometry.GeometryBase This is some return comment
## static Rhino.Geometry.GeometryBase DecompressFile(string path)
- (summary) 
     Read compressed data from disk and decompress to RhinoCommon geometry
     
- (since) 7.0
- (returns) Rhino.Geometry.GeometryBase This is some return comment
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 7.0
- (returns) void This is some return comment
## string ToBase64String()
- (summary) 
     Convert byte array of draco compressed data into a base64 encoded string
     
- (since) 7.0
- (returns) string This is some return comment
## bool Write(string path)
- (summary) 
     Write the compressed data to disk
     
- (since) 7.0
- (returns) bool This is some return comment
