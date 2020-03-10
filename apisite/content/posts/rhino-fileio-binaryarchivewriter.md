---
title: "Rhino.FileIO.BinaryArchiveWriter"
draft: false
---

# Properties
## int Archive3dmVersion
- (summary) 
     If a 3dm archive is being read or written, then this is the
     version of the 3dm archive format (1, 2, 3, 4 or 5).
     0     a 3dm archive is not being read/written
     1     a version 1 3dm archive is being read/written
     2     a version 2 3dm archive is being read/written
     3     a version 3 3dm archive is being read/written
     4     a version 4 3dm archive is being read/written
     5     an old version 5 3dm archive is being read
     50    a version 5 3dm archive is being read/written.
     
- (since) 5.0
## bool WriteErrorOccured
- (summary) 
     Gets or sets whether an error occurred.
     
- (since) 5.0
# Methods
## bool BeginWrite3dmChunk(uint typecode,int majorVersion,int minorVersion)
- (summary) 
     Begins writing a chunk
     
- (since) 6.0
- (returns) bool This is some return comment
## bool BeginWrite3dmChunk(uint typecode,long value)
- (summary)  Begins writing a chunk 
- (since) (unknown)
- (returns) bool This is some return comment
## bool EnableCRCCalculation(bool enable)
- (summary) 
     Expert user function to control CRC calculation while reading and writing.
     Typically this is used when seeking around and reading/writing information
     in non-serial order.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool EndWrite3dmChunk()
- (summary) 
     updates length in chunk header
     
- (since) 6.0
- (returns) bool This is some return comment
## void Write3dmChunkVersion(int major,int minor)
- (summary) 
     A chunk version is a single byte that encodes a major.minor
     version number.  Useful when creating I/O code for 3dm chunks
     that may change in the future.  Increment the minor version 
     number if new information is added to the end of the chunk. 
     Increment the major version if the format of the chunk changes
     in some other way.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteBool(bool value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteBoolArray(IEnumerable<bool> value)
- (summary) 
     Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.
- (since) 5.0
- (returns) void This is some return comment
## void WriteBoundingBox(BoundingBox value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteByte(byte value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteByteArray(IEnumerable<byte> value)
- (summary) 
     Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.
- (since) 5.0
- (returns) void This is some return comment
## void WriteColor(Color value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteCompressedBuffer(IEnumerable<byte> value)
- (summary) 
     Writes a list, an array, or any enumerable of  to the archive as a compressed buffer.
     The return will always be an array.
- (since) 5.9
- (returns) void This is some return comment
## void WriteDictionary(ArchivableDictionary dictionary)
- (summary) 
     Delivers the complete content of a dictionary to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteDouble(double value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteDoubleArray(IEnumerable<double> value)
- (summary) 
     Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.
- (since) 5.0
- (returns) void This is some return comment
## void WriteEmptyCheckSum()
- (summary) 
     Reads a legacy ON_CheckSum, only provided to read data chunks from old
     V5 files, the CheckSum read is discarded
     
- (since) 6.0
- (returns) void This is some return comment
## void WriteFont(Font value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteGeometry(GeometryBase value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteGeometryArray(IEnumerable<GeometryBase> geometry)
- (summary) 
- (since) 7.0
- (returns) void This is some return comment
## void WriteGuid(Guid value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteGuidArray(IEnumerable<Guid> value)
- (summary) 
     Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.
- (since) 5.0
- (returns) void This is some return comment
## void WriteInt(int value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteInt64(Int64 value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteIntArray(IEnumerable<int> value)
- (summary) 
     Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.
- (since) 5.0
- (returns) void This is some return comment
## void WriteInterval(Interval value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteLine(Line value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteMeshingParameters(MeshingParameters value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteObjRef(ObjRef objref)
- (summary) 
     Writes a  to the archive
     
- (since) 5.8
- (returns) void This is some return comment
## void WriteObjRefArray(IEnumerable<ObjRef> objrefs)
- (summary) 
     Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.
- (since) 5.8
- (returns) void This is some return comment
## void WritePlane(Plane value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WritePoint(Point value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WritePoint2d(Point2d value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WritePoint3d(Point3d value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WritePoint3f(Point3f value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WritePoint4d(Point4d value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WritePointF(PointF value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteRay3d(Ray3d value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteRectangle(Rectangle value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteRectangleF(RectangleF value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteRenderSettings(RenderSettings value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 6.0
- (returns) void This is some return comment
## void WriteSByte(sbyte value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteSByteArray(IEnumerable<sbyte> value)
- (summary) 
     Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.
- (since) 5.0
- (returns) void This is some return comment
## void WriteShort(short value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteShortArray(IEnumerable<short> value)
- (summary) 
     Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.
- (since) 5.0
- (returns) void This is some return comment
## void WriteSingle(float value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteSingleArray(IEnumerable<float> value)
- (summary) 
     Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.
- (since) 5.0
- (returns) void This is some return comment
## void WriteSize(Size value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteSizeF(SizeF value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteString(string value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteStringArray(IEnumerable<string> value)
- (summary) 
     Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.
- (since) 5.0
- (returns) void This is some return comment
## void WriteTransform(Transform value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteUInt(uint value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteUShort(ushort value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteUtf8String(string value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 6.0
- (returns) void This is some return comment
## void WriteVector2d(Vector2d value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteVector3d(Vector3d value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
## void WriteVector3f(Vector3f value)
- (summary) 
     Writes a  value to the archive.
     
- (since) 5.0
- (returns) void This is some return comment
