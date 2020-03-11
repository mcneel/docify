---
title: "BinaryArchiveWriter"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Represents an entity that is able to write data to an archive.
```cs
public class BinaryArchiveWriter
```
## Properties

int Archive3dmVersion
: If a 3dm archive is being read or written, then this is the
     version of the 3dm archive format (1, 2, 3, 4 or 5).
     0     a 3dm archive is not being read/written
     1     a version 1 3dm archive is being read/written
     2     a version 2 3dm archive is being read/written
     3     a version 3 3dm archive is being read/written
     4     a version 4 3dm archive is being read/written
     5     an old version 5 3dm archive is being read
     50    a version 5 3dm archive is being read/written.

bool WriteErrorOccured
: Gets or sets whether an error occurred.
## Methods

bool BeginWrite3dmChunk(uint typecode,int majorVersion,int minorVersion)
: Begins writing a chunk
: Returns - True if input was valid and chunk was started.  In this case you must call
     EndWrite3dmChunk(), even if something goes wrong while you attempt to write
     the contents of the chunk.
     False if input was not valid or the write failed.
: since 6.0

bool BeginWrite3dmChunk(uint typecode,long value)
: Begins writing a chunk
: since (unknown)

bool EnableCRCCalculation(bool enable)
: Expert user function to control CRC calculation while reading and writing.
     Typically this is used when seeking around and reading/writing information
     in non-serial order.
: Returns - Current state of CRC calculation.  Use the returned value to restore the
     CRC calculation setting after you are finished doing your fancy pants
     expert IO.
: since 6.0

bool EndWrite3dmChunk()
: updates length in chunk header
: since 6.0

void Write3dmChunkVersion(int major,int minor)
: A chunk version is a single byte that encodes a major.minor
     version number.  Useful when creating I/O code for 3dm chunks
     that may change in the future.  Increment the minor version 
     number if new information is added to the end of the chunk. 
     Increment the major version if the format of the chunk changes
     in some other way.
: Returns - True on successful read.

void WriteBool(bool value)
: Writes a  value to the archive.

void WriteBoolArray(IEnumerable<bool> value)
: Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.

void WriteBoundingBox(BoundingBox value)
: Writes a  value to the archive.

void WriteByte(byte value)
: Writes a  value to the archive.

void WriteByteArray(IEnumerable<byte> value)
: Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.

void WriteColor(Color value)
: Writes a  value to the archive.

void WriteCompressedBuffer(IEnumerable<byte> value)
: Writes a list, an array, or any enumerable of  to the archive as a compressed buffer.
     The return will always be an array.
: since 5.9

void WriteDictionary(ArchivableDictionary dictionary)
: Delivers the complete content of a dictionary to the archive.

void WriteDouble(double value)
: Writes a  value to the archive.

void WriteDoubleArray(IEnumerable<double> value)
: Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.

void WriteEmptyCheckSum()
: Reads a legacy ON_CheckSum, only provided to read data chunks from old
     V5 files, the CheckSum read is discarded
: since 6.0

void WriteFont(Font value)
: Writes a  value to the archive.

void WriteGeometry(GeometryBase value)
: Writes a  value to the archive.

void WriteGeometryArray(IEnumerable<GeometryBase> geometry)
: 
: since 7.0

void WriteGuid(Guid value)
: Writes a  value to the archive.

void WriteGuidArray(IEnumerable<Guid> value)
: Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.

void WriteInt(int value)
: Writes a  value to the archive.

void WriteInt64(Int64 value)
: Writes a  value to the archive.

void WriteIntArray(IEnumerable<int> value)
: Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.

void WriteInterval(Interval value)
: Writes a  value to the archive.

void WriteLine(Line value)
: Writes a  value to the archive.

void WriteMeshingParameters(MeshingParameters value)
: Writes a  value to the archive.

void WriteObjRef(ObjRef objref)
: Writes a  to the archive
: Returns - the element that was read
: since 5.8

void WriteObjRefArray(IEnumerable<ObjRef> objrefs)
: Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.
: since 5.8

void WritePlane(Plane value)
: Writes a  value to the archive.

void WritePoint(Point value)
: Writes a  value to the archive.

void WritePoint2d(Point2d value)
: Writes a  value to the archive.

void WritePoint3d(Point3d value)
: Writes a  value to the archive.

void WritePoint3f(Point3f value)
: Writes a  value to the archive.

void WritePoint4d(Point4d value)
: Writes a  value to the archive.

void WritePointF(PointF value)
: Writes a  value to the archive.

void WriteRay3d(Ray3d value)
: Writes a  value to the archive.

void WriteRectangle(Rectangle value)
: Writes a  value to the archive.

void WriteRectangleF(RectangleF value)
: Writes a  value to the archive.

void WriteRenderSettings(RenderSettings value)
: Writes a  value to the archive.
: since 6.0

void WriteSByte(sbyte value)
: Writes a  value to the archive.

void WriteSByteArray(IEnumerable<sbyte> value)
: Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.

void WriteShort(short value)
: Writes a  value to the archive.

void WriteShortArray(IEnumerable<short> value)
: Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.

void WriteSingle(float value)
: Writes a  value to the archive.

void WriteSingleArray(IEnumerable<float> value)
: Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.

void WriteSize(Size value)
: Writes a  value to the archive.

void WriteSizeF(SizeF value)
: Writes a  value to the archive.

void WriteString(string value)
: Writes a  value to the archive.

void WriteStringArray(IEnumerable<string> value)
: Writes a list, an array, or any enumerable of  to the archive.
     The return will always be an array.

void WriteTransform(Transform value)
: Writes a  value to the archive.

void WriteUInt(uint value)
: Writes a  value to the archive.

void WriteUShort(ushort value)
: Writes a  value to the archive.

void WriteUtf8String(string value)
: Writes a  value to the archive.
: since 6.0

void WriteVector2d(Vector2d value)
: Writes a  value to the archive.

void WriteVector3d(Vector3d value)
: Writes a  value to the archive.

void WriteVector3f(Vector3f value)
: Writes a  value to the archive.
