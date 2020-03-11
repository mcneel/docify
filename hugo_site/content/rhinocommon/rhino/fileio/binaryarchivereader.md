---
title: "BinaryArchiveReader"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Represents an entity that is capable of reading a binary archive and
   instantiating strongly-typed objects.
```cs
public class BinaryArchiveReader
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

ulong CurrentPosition
: current offset (in bytes) into archive ( like ftell() )
: since 6.0

bool ReadErrorOccured
: Gets or sets whether en error occurred during reading.
## Methods

bool AtEnd()
: True if at end of a file
: since 5.1

bool BeginRead3dmChunk(uint expectedTypeCode,int majorVersion,int minorVersion)
: Begins reading a chunk that must be in the archive at this location.
: Returns - True if beginning of the chunk was read.  In this case you must call EndRead3dmChunk(),
     even if something goes wrong while you attempt to read the interior of the chunk.
     False if the chunk did not exist at the current location in the file.
: since 6.0

bool BeginRead3dmChunk(uint typeCode,long value)
: Begins reading a chunk that must be in the archive at this location.
: since (unknown)

uint Dump3dmChunk(TextLog log)
: Fnction for studying contents of a file.  The primary use is as an aid
     to help dig through files that have been damaged (bad disks, transmission
     errors, etc.) If an error is found, a line that begins with the word
     "ERROR" is printed.
: Returns - 0 if something went wrong, otherwise the typecode of the chunk that
     was just studied.
: since 5.1

bool EnableCRCCalculation(bool enable)
: Expert user function to control CRC calculation while reading and writing.
     Typically this is used when seeking around and reading/writing information
     in non-serial order.
: Returns - Current state of CRC calculation.  Use the returned value to restore the
     CRC calculation setting after you are finished doing your fancy pants
     expert IO.
: since 6.0

bool EndRead3dmChunk(bool suppressPartiallyReadChunkWarning)
: Calling this will skip rest of stuff in chunk if it was only partially read.
: since 6.0

void Read3dmChunkVersion(int major,int minor)
: A chunk version is a single byte that encodes a major.minor
     version number.  Useful when creating I/O code for 3dm chunks
     that may change in the future.  Increment the minor version 
     number if new information is added to the end of the chunk. 
     Increment the major version if the format of the chunk changes
     in some other way.
: Returns - True on successful read.

bool Read3dmStartSection(int version,string comment)
: 
: Returns - True on success
: since 5.1

bool ReadBool()
: Reads a  from the archive.
: Returns - The value that was read.

bool[] ReadBoolArray()
: Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
: Returns - The array that was read.

Geometry.BoundingBox ReadBoundingBox()
: Reads a  from the archive.
: Returns - The element that was read.

byte ReadByte()
: Reads a  from the archive.
: Returns - The value that was read.

byte[] ReadByteArray()
: Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
: Returns - The array that was read.

void ReadCheckSum()
: Reads a legacy ON_CheckSum, only provided to read data chunks from old
     V5 files, the CheckSum read is discarded
: since 6.0

System.Drawing.Color ReadColor()
: Reads a  from the archive.
: Returns - The element that was read.

byte[] ReadCompressedBuffer()
: Reads an array of compressed  information from the archive and uncompresses it.
     An array is returned even if the input was another enumerable type.
: Returns - The array that was read.
: since 5.9

Rhino.Collections.ArchivableDictionary ReadDictionary()
: Reads a complete  from the archive.
: Returns - The newly instantiated object.

double ReadDouble()
: Reads a  from the archive.
: Returns - The value that was read.

double[] ReadDoubleArray()
: Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
: Returns - The array that was read.

System.Drawing.Font ReadFont()
: Reads a  from the archive.
: Returns - The element that was read.

Geometry.GeometryBase ReadGeometry()
: Reads a -derived object from the archive.
     The  class is abstract.
: Returns - The element that was read.

Geometry.GeometryBase[] ReadGeometryArray()
: 
: since 7.0

Guid ReadGuid()
: Reads a  from the archive.
: Returns - The value that was read.

Guid[] ReadGuidArray()
: Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
: Returns - The array that was read.

int ReadInt()
: Reads a  from the archive.
: Returns - The value that was read.

Int64 ReadInt64()
: Reads a  from the archive.
: Returns - The value that was read.

int[] ReadIntArray()
: Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
: Returns - The array that was read.

Geometry.Interval ReadInterval()
: Reads a  from the archive.
: Returns - The element that was read.

Geometry.Line ReadLine()
: Reads a  from the archive.
: Returns - The element that was read.

Geometry.MeshingParameters ReadMeshingParameters()
: Reads a  from the archive.
: Returns - The element that was read.

DocObjects.ObjRef ReadObjRef()
: Reads a  from the archive
: Returns - the element that was read
: since 5.8

DocObjects.ObjRef[] ReadObjRefArray()
: Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
: Returns - The array that was read.
: since 5.8

Geometry.Plane ReadPlane()
: Reads a  from the archive.
: Returns - The element that was read.

System.Drawing.Point ReadPoint()
: Reads a  from the archive.
: Returns - The element that was read.

Geometry.Point2d ReadPoint2d()
: Reads a  from the archive.
: Returns - The element that was read.

Geometry.Point3d ReadPoint3d()
: Reads a  from the archive.
: Returns - The element that was read.

Geometry.Point3f ReadPoint3f()
: Reads a  from the archive.
: Returns - The element that was read.

Geometry.Point4d ReadPoint4d()
: Reads a  from the archive.
: Returns - The element that was read.

System.Drawing.PointF ReadPointF()
: Reads a  from the archive.
: Returns - The element that was read.

Geometry.Ray3d ReadRay3d()
: Reads a  from the archive.
: Returns - The element that was read.

System.Drawing.Rectangle ReadRectangle()
: Reads a  from the archive.
: Returns - The element that was read.

System.Drawing.RectangleF ReadRectangleF()
: Reads a  from the archive.
: Returns - The element that was read.

[RenderSettings](/rhinocommon/rhino/render/rendersettings/) ReadRenderSettings()
: Reads a -derived object from the archive.
: Returns - The element that was read.
: since 6.0

sbyte ReadSByte()
: Reads a  from the archive.
: Returns - The value that was read.

sbyte[] ReadSByteArray()
: Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
: Returns - The array that was read.

short ReadShort()
: Reads a  from the archive.
: Returns - The value that was read.

short[] ReadShortArray()
: Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
: Returns - The array that was read.

float ReadSingle()
: Reads a  from the archive.
: Returns - The value that was read.

float[] ReadSingleArray()
: Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
: Returns - The array that was read.

System.Drawing.Size ReadSize()
: Reads a  from the archive.
: Returns - The element that was read.

System.Drawing.SizeF ReadSizeF()
: Reads a  from the archive.
: Returns - The element that was read.

string ReadString()
: Reads a  from the archive.
: Returns - The value that was read.

string[] ReadStringArray()
: Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
: Returns - The array that was read.

Geometry.Transform ReadTransform()
: Reads a  from the archive.
: Returns - The element that was read.

uint ReadUInt()
: Reads a  from the archive.
: Returns - The value that was read.

ushort ReadUShort()
: Reads a  from the archive.
: Returns - The value that was read.

string ReadUtf8String()
: Reads a  from the archive.
: Returns - The value that was read.
: since 6.0

Geometry.Vector2d ReadVector2d()
: Reads a  from the archive.
: Returns - The element that was read.

Geometry.Vector3d ReadVector3d()
: Reads a  from the archive.
: Returns - The element that was read.

Geometry.Vector3f ReadVector3f()
: Reads a  from the archive.
: Returns - The element that was read.

bool SeekFromCurrentPosition(long byteOffset)
: seek from current position ( like fseek( ,SEEK_CUR) )
: since (unknown)

bool SeekFromCurrentPosition(ulong byteOffset,bool forward)
: seek from current position ( like fseek( ,SEEK_CUR) )
: since (unknown)

bool SeekFromStart(ulong byteOffset)
: seek from start position ( like fseek( ,SEEK_SET) )
: since (unknown)
