---
title: "ArchivableDictionary"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Collections](../)*

Represents a dictionary class that can be attached to objects and
   can be serialized (saved) at necessity.See remarks for layout.
```cs
[Serializable]
public class ArchivableDictionary : ICloneable, IDictionary<string, object>, ISerializable
```
## Constructors

ArchivableDictionary()
: Initializes an instance of a dictionary for writing to a 3dm archive.

ArchivableDictionary(int version)
: Initializes an instance of a dictionary for writing to a 3dm archive.

ArchivableDictionary(int version,string name)
: Initializes an instance of a dictionary for writing to a 3dm archive.

ArchivableDictionary(UserData parentUserData)
: Initializes an instance of a dictionary for writing to a 3dm archive
## Properties

int Count
: Gets the number of key/value pairs contained in the dictionary.

string[] Keys
: Gets all entry names or keys.

string Name
: Gets or sets the name string of this .

[UserData](/rhinocommon/rhino/docobjects/custom/userdata/) ParentUserData
: If this dictionary is part of userdata (or is a UserDictionary), then
     this is the parent user data. None if this dictionary is not part of
     userdata

object[] Values
: Gets all values in this dictionary.

int Version
: Gets or sets the version of this .
## Methods

bool AddContentsFrom(ArchivableDictionary source)
: Add the contents from the source dictionary.
: since 5.4

void Clear()
: Removes all keys and values from the dictionary.

ArchivableDictionary Clone()
: Constructs a deep copy of this object.
: Returns - The copy of this object.

bool ContainsKey(string key)
: Determines whether the dictionary contains the specified key.
: Returns - True if the dictionary contains an element with the specified key; otherwise, false.

bool GetBool(string key)
: Get value as bool, will only succeed if value was created using Set(string key, bool value)

bool GetBool(string key,bool defaultValue)
: Get value as bool, will return defaultValue unless value was created using Set(string key, bool value)

byte[] GetBytes(string key)
: Get value as byte[], will only succeed if value was created
     using Set(string key, byte[] value)
: since 5.9

byte[] GetBytes(string key,byte[] defaultValue)
: Get value as byte[], will return defaultValue unless
     value was created using Set(string key, byte[] value)
: since 5.9

ArchivableDictionary GetDictionary(string key)
: Get value as ArchivableDictionary, will only succeed if value was created
     using Set(string key, ArchivableDictionary value)
: since 5.9

ArchivableDictionary GetDictionary(string key,ArchivableDictionary defaultValue)
: Get value as ArchivableDictionary, will return defaultValue unless
     value was created using Set(string key, ArchivableDictionary value)
: since 5.9

double GetDouble(string key)
: Get value as double, will only succeed if value was created using Set(string key, double value)

double GetDouble(string key,double defaultValue)
: Get value as double, will only succeed if value was created using Set(string key, double value)
: since 5.10

IEnumerator<KeyValuePair<string, object>> GetEnumerator()
: Gets the enumerator of this dictionary.
: Returns - A , where T is an instance of , with T0 set as string, and T1 as Syste.Object.

T GetEnumValue()
: Get an enum value
: since 5.4

T GetEnumValue(string key)
: Get an enum value from the dictionary using a custom key.
: since 5.4

float GetFloat(string key)
: Get value as float, will only succeed if value was created using Set(string key, float value)

float GetFloat(string key,float defaultValue)
: Get value as float, will return defaultValue unless value was created using Set(string key, float value)

Guid GetGuid(string key)
: Get value as Guid, will only succeed if value was created using Set(string key, Guid value)

Guid GetGuid(string key,Guid defaultValue)
: Get value as Guid, will return defaultValue unless value was created using Set(string key, Guid value)

int Getint(string key,int defaultValue)
: Get value as int, will return defaultValue unless value was created using Set(string key, int value)

int GetInteger(string key)
: Get value as int, will only succeed if value was created using Set(string key, int value)

int GetInteger(string key,int defaultValue)
: Get value as int, will return defaultValue unless value was created using Set(string key, int value)

void GetObjectData(SerializationInfo info,StreamingContext context)
: Populates a System.Runtime.Serialization.SerializationInfo with the data needed to serialize the target object.
: since 7.0

Geometry.Plane GetPlane(string key)
: Get value as Plane, will return defaultValue unless value was created using Set(string key, Plane value)
: Returns - The value as Plane.
: since 6.11

Geometry.Plane GetPlane(string key,Plane defaultValue)
: Get value as Plane, will return defaultValue unless value was created using Set(string key, Plane value)
: Returns - The value as Plane.
: since 6.11

Geometry.Point3d GetPoint3d(string key)
: Get value as Point3d, will only succeed if value was created using Set(string key, Point3d value)

Geometry.Point3d GetPoint3d(string key,Point3d defaultValue)
: Get value as Point3d, will return defaultValue unless value was created using Set(string key, Point3d value)

Geometry.Point3f GetPoint3f(string key)
: Get value as Point3f, will only succeed if value was created using Set(string key, Point3f value)

Geometry.Point3f GetPoint3f(string key,Point3f defaultValue)
: Get value as Point3f, will return defaultValue unless value was created using Set(string key, Point3f value)

string GetString(string key)
: Get value as string, will only succeed if value was created using Set(string key, string value)
: Returns - The string

string GetString(string key,string defaultValue)
: Get value as string, will return defaultValue unless value was created using Set(string key, string value)

Geometry.Vector3d GetVector3d(string key)
: Get value as Vector3d, will only succeed if value was created using Set(string key, Vector3d value)

Geometry.Vector3d GetVector3d(string key,Vector3d defaultValue)
: Get value as Vector3d, will return defaultValue unless value was created using Set(string key, Vector3d value)

bool Remove(string key)
: Removes the value with the specified key from the dictionary.
: Returns - True if the element is successfully found and removed; otherwise, false.
     This method returns False if key is not found.

bool RemoveEnumValue()
: Remmove an enum value from the dictionary.
: since 5.4

bool ReplaceContentsWith(ArchivableDictionary source)
: Replace the contents of the dictionary with that of the given source dictionary.
: since 5.4

bool Set(string key,ArchivableDictionary val)
: Sets another  as entry in this dictionary.

bool Set(string key,bool val)
: Sets a .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,BoundingBox val)
: Sets a .

bool Set(string key,byte val)
: Sets a .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,Color val)
: Sets a .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,double val)
: Sets a .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,float val)
: Sets a .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,Font val)
: Sets a .

bool Set(string key,GeometryBase val)
: Sets any class deriving from the  base class.

bool Set(string key,Guid val)
: Sets a .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,IEnumerable<bool> val)
: Sets a list, an array or any enumerable of .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,IEnumerable<byte> val)
: Sets a list, an array or any enumerable of .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,IEnumerable<double> val)
: Sets a list, an array or any enumerable of .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,IEnumerable<float> val)
: Sets a list, an array or any enumerable of .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,IEnumerable<GeometryBase> val)
: 
: since 7.0

bool Set(string key,IEnumerable<Guid> val)
: Sets a list, an array or any enumerable of .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,IEnumerable<int> val)
: Sets a list, an array or any enumerable of .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,IEnumerable<ObjRef> val)
: Sets an array of
: since 5.8

bool Set(string key,IEnumerable<sbyte> val)
: Sets a list, an array or any enumerable of .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,IEnumerable<short> val)
: Sets a list, an array or any enumerable of .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,IEnumerable<string> val)
: Sets a list, an array or any enumerable of .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,int val)
: Sets a .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,Int64 val)
: Sets a .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,Interval val)
: Sets an .

bool Set(string key,Line val)
: Sets a .

bool Set(string key,MeshingParameters val)
: Sets a .

bool Set(string key,ObjRef val)
: Sets a
: since 5.8

bool Set(string key,Plane val)
: Sets a .

bool Set(string key,Point val)
: Sets a .

bool Set(string key,Point2d val)
: Sets a .

bool Set(string key,Point3d val)
: Sets a .

bool Set(string key,Point3f val)
: Sets a .

bool Set(string key,Point4d val)
: Sets a .

bool Set(string key,PointF val)
: Sets a .

bool Set(string key,Ray3d val)
: Sets a .

bool Set(string key,Rectangle val)
: Sets a .

bool Set(string key,RectangleF val)
: Sets a .

bool Set(string key,sbyte val)
: Sets a .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,short val)
: Sets a .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,Size val)
: Sets a .

bool Set(string key,SizeF val)
: Sets a .

bool Set(string key,string val)
: Sets a .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,Transform val)
: Sets a .

bool Set(string key,uint val)
: Sets a .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,ushort val)
: Sets a .
: Returns - True if set operation succeeded, otherwise false.

bool Set(string key,Vector2d val)
: Sets a .

bool Set(string key,Vector3d val)
: Sets a .

bool Set(string key,Vector3f val)
: Sets a .

bool SetEnumValue(string key,T enumValue)
: Set an enum value in the dictionary with a custom key.
: since 5.4

bool SetEnumValue(T enumValue)
: Set an enum value
: since 5.4

bool TryGetBool(string key,bool value)
: Get value as bool, will only succeed if value was created using Set(string key, bool value)

bool TryGetBytes(string key,byte[] value)
: Get value as byte[], will only succeed if value was
     created using Set(string key, byte[] value)
: since 5.9

bool TryGetDictionary(string key,ArchivableDictionary value)
: Get value as ArchivableDictionary, will only succeed if value was
     created using Set(string key, ArchivableDictionary value)
: since 5.9

bool TryGetDouble(string key,double value)
: Get value as double, will only succeed if value was created using Set(string key, double value)

bool TryGetEnumValue(string key,T enumValue)
: Attempt to get an enum value from the dictionary using a custom key.
: since 5.4

bool TryGetFloat(string key,float value)
: Get value as float, will only succeed if value was created using Set(string key, float value)

bool TryGetGuid(string key,Guid value)
: Get value as Guid, will only succeed if value was created using Set(string key, Guid value)

bool TryGetInteger(string key,int value)
: Get value as int, will only succeed if value was created using Set(string key, int value)

bool TryGetPlane(string key,Plane value)
: Get value as Plane, will only succeed if value was created using Set(string key, Plane value)
: Returns - The value as Plane.
: since 6.11

bool TryGetPoint3d(string key,Point3d value)
: Get value as Point3d, will only succeed if value was created using Set(string key, Point3d value)

bool TryGetPoint3f(string key,Point3f value)
: Get value as Point3f, will only succeed if value was created using Set(string key, Point3f value)

bool TryGetString(string key,string value)
: Get value as string, will only succeed if value was created using Set(string key, string value)

bool TryGetValue(string key,object value)
: Gets the value associated with the specified key.
: Returns - True if the dictionary contains an element with the specified key; otherwise, false.

bool TryGetVector3d(string key,Vector3d value)
: Get value as Vector3d, will only succeed if value was created using Set(string key, Vector3d value)
