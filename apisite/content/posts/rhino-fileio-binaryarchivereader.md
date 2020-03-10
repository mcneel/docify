---
title: "Rhino.FileIO.BinaryArchiveReader"
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
## ulong CurrentPosition
- (summary) current offset (in bytes) into archive ( like ftell() )
- (since) 6.0
## bool ReadErrorOccured
- (summary) 
     Gets or sets whether en error occurred during reading.
     
- (since) 5.0
# Methods
## bool AtEnd()
- (summary) 
     True if at end of a file
     
- (since) 5.1
- (returns) bool This is some return comment
## bool BeginRead3dmChunk(uint expectedTypeCode,int majorVersion,int minorVersion)
- (summary) 
     Begins reading a chunk that must be in the archive at this location.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool BeginRead3dmChunk(uint typeCode,long value)
- (summary) 
     Begins reading a chunk that must be in the archive at this location.
     
- (since) (unknown)
- (returns) bool This is some return comment
## uint Dump3dmChunk(TextLog log)
- (summary) 
     Fnction for studying contents of a file.  The primary use is as an aid
     to help dig through files that have been damaged (bad disks, transmission
     errors, etc.) If an error is found, a line that begins with the word
     "ERROR" is printed.
     
- (since) 5.1
- (returns) uint This is some return comment
## bool EnableCRCCalculation(bool enable)
- (summary) 
     Expert user function to control CRC calculation while reading and writing.
     Typically this is used when seeking around and reading/writing information
     in non-serial order.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool EndRead3dmChunk(bool suppressPartiallyReadChunkWarning)
- (summary) 
     Calling this will skip rest of stuff in chunk if it was only partially read.
     
- (since) 6.0
- (returns) bool This is some return comment
## void Read3dmChunkVersion(int major,int minor)
- (summary) 
     A chunk version is a single byte that encodes a major.minor
     version number.  Useful when creating I/O code for 3dm chunks
     that may change in the future.  Increment the minor version 
     number if new information is added to the end of the chunk. 
     Increment the major version if the format of the chunk changes
     in some other way.
     
- (since) 5.0
- (returns) void This is some return comment
## bool Read3dmStartSection(int version,string comment)
- (summary) 
- (since) 5.1
- (returns) bool This is some return comment
## bool ReadBool()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool[] ReadBoolArray()
- (summary) 
     Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
- (since) 5.0
- (returns) bool[] This is some return comment
## Geometry.BoundingBox ReadBoundingBox()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Geometry.BoundingBox This is some return comment
## byte ReadByte()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) byte This is some return comment
## byte[] ReadByteArray()
- (summary) 
     Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
- (since) 5.0
- (returns) byte[] This is some return comment
## void ReadCheckSum()
- (summary) 
     Reads a legacy ON_CheckSum, only provided to read data chunks from old
     V5 files, the CheckSum read is discarded
     
- (since) 6.0
- (returns) void This is some return comment
## System.Drawing.Color ReadColor()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) System.Drawing.Color This is some return comment
## byte[] ReadCompressedBuffer()
- (summary) 
     Reads an array of compressed  information from the archive and uncompresses it.
     An array is returned even if the input was another enumerable type.
- (since) 5.9
- (returns) byte[] This is some return comment
## Rhino.Collections.ArchivableDictionary ReadDictionary()
- (summary) 
     Reads a complete  from the archive.
     
- (since) 5.0
- (returns) Rhino.Collections.ArchivableDictionary This is some return comment
## double ReadDouble()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) double This is some return comment
## double[] ReadDoubleArray()
- (summary) 
     Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
- (since) 5.0
- (returns) double[] This is some return comment
## System.Drawing.Font ReadFont()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) System.Drawing.Font This is some return comment
## Geometry.GeometryBase ReadGeometry()
- (summary) 
     Reads a -derived object from the archive.
     The  class is abstract.
- (since) 5.0
- (returns) Geometry.GeometryBase This is some return comment
## Geometry.GeometryBase[] ReadGeometryArray()
- (summary) 
- (since) 7.0
- (returns) Geometry.GeometryBase[] This is some return comment
## Guid ReadGuid()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Guid This is some return comment
## Guid[] ReadGuidArray()
- (summary) 
     Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
- (since) 5.0
- (returns) Guid[] This is some return comment
## int ReadInt()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) int This is some return comment
## Int64 ReadInt64()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Int64 This is some return comment
## int[] ReadIntArray()
- (summary) 
     Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
- (since) 5.0
- (returns) int[] This is some return comment
## Geometry.Interval ReadInterval()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Geometry.Interval This is some return comment
## Geometry.Line ReadLine()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Geometry.Line This is some return comment
## Geometry.MeshingParameters ReadMeshingParameters()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Geometry.MeshingParameters This is some return comment
## DocObjects.ObjRef ReadObjRef()
- (summary) 
     Reads a  from the archive
     
- (since) 5.8
- (returns) DocObjects.ObjRef This is some return comment
## DocObjects.ObjRef[] ReadObjRefArray()
- (summary) 
     Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
- (since) 5.8
- (returns) DocObjects.ObjRef[] This is some return comment
## Geometry.Plane ReadPlane()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Geometry.Plane This is some return comment
## System.Drawing.Point ReadPoint()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) System.Drawing.Point This is some return comment
## Geometry.Point2d ReadPoint2d()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Geometry.Point2d This is some return comment
## Geometry.Point3d ReadPoint3d()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Geometry.Point3d This is some return comment
## Geometry.Point3f ReadPoint3f()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Geometry.Point3f This is some return comment
## Geometry.Point4d ReadPoint4d()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Geometry.Point4d This is some return comment
## System.Drawing.PointF ReadPointF()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) System.Drawing.PointF This is some return comment
## Geometry.Ray3d ReadRay3d()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Geometry.Ray3d This is some return comment
## System.Drawing.Rectangle ReadRectangle()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) System.Drawing.Rectangle This is some return comment
## System.Drawing.RectangleF ReadRectangleF()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) System.Drawing.RectangleF This is some return comment
## RenderSettings ReadRenderSettings()
- (summary) 
     Reads a -derived object from the archive.
     
- (since) 6.0
- (returns) RenderSettings This is some return comment
## sbyte ReadSByte()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) sbyte This is some return comment
## sbyte[] ReadSByteArray()
- (summary) 
     Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
- (since) 5.0
- (returns) sbyte[] This is some return comment
## short ReadShort()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) short This is some return comment
## short[] ReadShortArray()
- (summary) 
     Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
- (since) 5.0
- (returns) short[] This is some return comment
## float ReadSingle()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) float This is some return comment
## float[] ReadSingleArray()
- (summary) 
     Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
- (since) 5.0
- (returns) float[] This is some return comment
## System.Drawing.Size ReadSize()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) System.Drawing.Size This is some return comment
## System.Drawing.SizeF ReadSizeF()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) System.Drawing.SizeF This is some return comment
## string ReadString()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) string This is some return comment
## string[] ReadStringArray()
- (summary) 
     Reads an array of  from the archive.
     An array is returned even if the input was another enumerable type.
- (since) 5.0
- (returns) string[] This is some return comment
## Geometry.Transform ReadTransform()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Geometry.Transform This is some return comment
## uint ReadUInt()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) uint This is some return comment
## ushort ReadUShort()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) ushort This is some return comment
## string ReadUtf8String()
- (summary) 
     Reads a  from the archive.
     
- (since) 6.0
- (returns) string This is some return comment
## Geometry.Vector2d ReadVector2d()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Geometry.Vector2d This is some return comment
## Geometry.Vector3d ReadVector3d()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Geometry.Vector3d This is some return comment
## Geometry.Vector3f ReadVector3f()
- (summary) 
     Reads a  from the archive.
     
- (since) 5.0
- (returns) Geometry.Vector3f This is some return comment
## bool SeekFromCurrentPosition(long byteOffset)
- (summary) 
     seek from current position ( like fseek( ,SEEK_CUR) )
     
- (since) (unknown)
- (returns) bool This is some return comment
## bool SeekFromCurrentPosition(ulong byteOffset,bool forward)
- (summary) 
     seek from current position ( like fseek( ,SEEK_CUR) )
     
- (since) (unknown)
- (returns) bool This is some return comment
## bool SeekFromStart(ulong byteOffset)
- (summary) 
     seek from start position ( like fseek( ,SEEK_SET) )
     
- (since) (unknown)
- (returns) bool This is some return comment
