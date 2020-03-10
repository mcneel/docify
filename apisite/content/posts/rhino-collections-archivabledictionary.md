---
title: "Rhino.Collections.ArchivableDictionary"
draft: false
---

# Constructors
## Rhino.Collections.ArchivableDictionary()
- (summary) Initializes an instance of a dictionary for writing to a 3dm archive.
- (since) 5.0
## Rhino.Collections.ArchivableDictionary(int version)
- (summary) Initializes an instance of a dictionary for writing to a 3dm archive.
- (since) 5.0
## Rhino.Collections.ArchivableDictionary(int version,string name)
- (summary) Initializes an instance of a dictionary for writing to a 3dm archive.
- (since) 5.0
## Rhino.Collections.ArchivableDictionary(UserData parentUserData)
- (summary) Initializes an instance of a dictionary for writing to a 3dm archive
- (since) 5.0
# Properties
## int Count
- (summary) 
     Gets the number of key/value pairs contained in the dictionary.
     
- (since) 5.0
## string[] Keys
- (summary) Gets all entry names or keys.
- (since) 5.0
## string Name
- (summary) 
     Gets or sets the name string of this .
     
- (since) 5.0
## DocObjects.Custom.UserData ParentUserData
- (summary) 
     If this dictionary is part of userdata (or is a UserDictionary), then
     this is the parent user data. None if this dictionary is not part of
     userdata
     
- (since) 5.0
## object[] Values
- (summary) Gets all values in this dictionary.
- (since) 5.0
## int Version
- (summary) 
     Gets or sets the version of this .
     
- (since) 5.0
# Methods
## bool AddContentsFrom(ArchivableDictionary source)
- (summary) 
     Add the contents from the source dictionary.
     
- (since) 5.4
- (returns) bool This is some return comment
## void Clear()
- (summary) 
     Removes all keys and values from the dictionary.
     
- (since) 5.0
- (returns) void This is some return comment
## ArchivableDictionary Clone()
- (summary) 
     Constructs a deep copy of this object.
     
- (since) 5.0
- (returns) ArchivableDictionary This is some return comment
## bool ContainsKey(string key)
- (summary) 
     Determines whether the dictionary contains the specified key.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool GetBool(string key)
- (summary) 
     Get value as bool, will only succeed if value was created using Set(string key, bool value)
     
- (since) 5.0
- (returns) bool This is some return comment
## bool GetBool(string key,bool defaultValue)
- (summary) 
     Get value as bool, will return defaultValue unless value was created using Set(string key, bool value)
     
- (since) 5.0
- (returns) bool This is some return comment
## byte[] GetBytes(string key)
- (summary) 
     Get value as byte[], will only succeed if value was created
     using Set(string key, byte[] value)
     
- (since) 5.9
- (returns) byte[] This is some return comment
## byte[] GetBytes(string key,byte[] defaultValue)
- (summary) 
     Get value as byte[], will return defaultValue unless
     value was created using Set(string key, byte[] value)
     
- (since) 5.9
- (returns) byte[] This is some return comment
## ArchivableDictionary GetDictionary(string key)
- (summary) 
     Get value as ArchivableDictionary, will only succeed if value was created
     using Set(string key, ArchivableDictionary value)
     
- (since) 5.9
- (returns) ArchivableDictionary This is some return comment
## ArchivableDictionary GetDictionary(string key,ArchivableDictionary defaultValue)
- (summary) 
     Get value as ArchivableDictionary, will return defaultValue unless
     value was created using Set(string key, ArchivableDictionary value)
     
- (since) 5.9
- (returns) ArchivableDictionary This is some return comment
## double GetDouble(string key)
- (summary) 
     Get value as double, will only succeed if value was created using Set(string key, double value)
     
- (since) 5.0
- (returns) double This is some return comment
## double GetDouble(string key,double defaultValue)
- (summary) 
     Get value as double, will only succeed if value was created using Set(string key, double value)
     
- (since) 5.10
- (returns) double This is some return comment
## IEnumerator<KeyValuePair<string, object>> GetEnumerator()
- (summary) 
     Gets the enumerator of this dictionary.
     
- (since) 5.0
- (returns) IEnumerator<KeyValuePair<string, object>> This is some return comment
## T GetEnumValue()
- (summary) 
     Get an enum value
     
- (since) 5.4
- (returns) T This is some return comment
## T GetEnumValue(string key)
- (summary) 
     Get an enum value from the dictionary using a custom key.
     
- (since) 5.4
- (returns) T This is some return comment
## float GetFloat(string key)
- (summary) 
     Get value as float, will only succeed if value was created using Set(string key, float value)
     
- (since) 5.0
- (returns) float This is some return comment
## float GetFloat(string key,float defaultValue)
- (summary) 
     Get value as float, will return defaultValue unless value was created using Set(string key, float value)
     
- (since) 5.0
- (returns) float This is some return comment
## Guid GetGuid(string key)
- (summary) 
     Get value as Guid, will only succeed if value was created using Set(string key, Guid value)
     
- (since) 5.0
- (returns) Guid This is some return comment
## Guid GetGuid(string key,Guid defaultValue)
- (summary) 
     Get value as Guid, will return defaultValue unless value was created using Set(string key, Guid value)
     
- (since) 5.0
- (returns) Guid This is some return comment
## int Getint(string key,int defaultValue)
- (summary) 
     Get value as int, will return defaultValue unless value was created using Set(string key, int value)
     
- (since) 5.0
- (returns) int This is some return comment
## int GetInteger(string key)
- (summary) 
     Get value as int, will only succeed if value was created using Set(string key, int value)
     
- (since) 5.0
- (returns) int This is some return comment
## int GetInteger(string key,int defaultValue)
- (summary) 
     Get value as int, will return defaultValue unless value was created using Set(string key, int value)
     
- (since) 5.0
- (returns) int This is some return comment
## void GetObjectData(SerializationInfo info,StreamingContext context)
- (summary) 
     Populates a System.Runtime.Serialization.SerializationInfo with the data needed to serialize the target object.
     
- (since) 7.0
- (returns) void This is some return comment
## Geometry.Plane GetPlane(string key)
- (summary) 
     Get value as Plane, will return defaultValue unless value was created using Set(string key, Plane value)
     
- (since) 6.11
- (returns) Geometry.Plane This is some return comment
## Geometry.Plane GetPlane(string key,Plane defaultValue)
- (summary) 
     Get value as Plane, will return defaultValue unless value was created using Set(string key, Plane value)
     
- (since) 6.11
- (returns) Geometry.Plane This is some return comment
## Geometry.Point3d GetPoint3d(string key)
- (summary) 
     Get value as Point3d, will only succeed if value was created using Set(string key, Point3d value)
     
- (since) 5.0
- (returns) Geometry.Point3d This is some return comment
## Geometry.Point3d GetPoint3d(string key,Point3d defaultValue)
- (summary) 
     Get value as Point3d, will return defaultValue unless value was created using Set(string key, Point3d value)
     
- (since) 5.0
- (returns) Geometry.Point3d This is some return comment
## Geometry.Point3f GetPoint3f(string key)
- (summary) 
     Get value as Point3f, will only succeed if value was created using Set(string key, Point3f value)
     
- (since) 5.0
- (returns) Geometry.Point3f This is some return comment
## Geometry.Point3f GetPoint3f(string key,Point3f defaultValue)
- (summary) 
     Get value as Point3f, will return defaultValue unless value was created using Set(string key, Point3f value)
     
- (since) 5.0
- (returns) Geometry.Point3f This is some return comment
## string GetString(string key)
- (summary) 
     Get value as string, will only succeed if value was created using Set(string key, string value)
     
- (since) 5.0
- (returns) string This is some return comment
## string GetString(string key,string defaultValue)
- (summary) 
     Get value as string, will return defaultValue unless value was created using Set(string key, string value)
     
- (since) 5.0
- (returns) string This is some return comment
## Geometry.Vector3d GetVector3d(string key)
- (summary) 
     Get value as Vector3d, will only succeed if value was created using Set(string key, Vector3d value)
     
- (since) 5.0
- (returns) Geometry.Vector3d This is some return comment
## Geometry.Vector3d GetVector3d(string key,Vector3d defaultValue)
- (summary) 
     Get value as Vector3d, will return defaultValue unless value was created using Set(string key, Vector3d value)
     
- (since) 5.0
- (returns) Geometry.Vector3d This is some return comment
## bool Remove(string key)
- (summary) 
     Removes the value with the specified key from the dictionary.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool RemoveEnumValue()
- (summary) 
     Remmove an enum value from the dictionary.
     
- (since) 5.4
- (returns) bool This is some return comment
## bool ReplaceContentsWith(ArchivableDictionary source)
- (summary) 
     Replace the contents of the dictionary with that of the given source dictionary.
     
- (since) 5.4
- (returns) bool This is some return comment
## bool Set(string key,ArchivableDictionary val)
- (summary) 
     Sets another  as entry in this dictionary.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,bool val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,BoundingBox val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,byte val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Color val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,double val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,float val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Font val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,GeometryBase val)
- (summary) 
     Sets any class deriving from the  base class.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Guid val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,IEnumerable<bool> val)
- (summary) 
     Sets a list, an array or any enumerable of .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,IEnumerable<byte> val)
- (summary) 
     Sets a list, an array or any enumerable of .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,IEnumerable<double> val)
- (summary) 
     Sets a list, an array or any enumerable of .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,IEnumerable<float> val)
- (summary) 
     Sets a list, an array or any enumerable of .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,IEnumerable<GeometryBase> val)
- (summary) 
- (since) 7.0
- (returns) bool This is some return comment
## bool Set(string key,IEnumerable<Guid> val)
- (summary) 
     Sets a list, an array or any enumerable of .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,IEnumerable<int> val)
- (summary) 
     Sets a list, an array or any enumerable of .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,IEnumerable<ObjRef> val)
- (summary) 
     Sets an array of 
- (since) 5.8
- (returns) bool This is some return comment
## bool Set(string key,IEnumerable<sbyte> val)
- (summary) 
     Sets a list, an array or any enumerable of .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,IEnumerable<short> val)
- (summary) 
     Sets a list, an array or any enumerable of .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,IEnumerable<string> val)
- (summary) 
     Sets a list, an array or any enumerable of .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,int val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Int64 val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Interval val)
- (summary) 
     Sets an .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Line val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,MeshingParameters val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,ObjRef val)
- (summary) 
     Sets a 
- (since) 5.8
- (returns) bool This is some return comment
## bool Set(string key,Plane val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Point val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Point2d val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Point3d val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Point3f val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Point4d val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,PointF val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Ray3d val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Rectangle val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,RectangleF val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,sbyte val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,short val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Size val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,SizeF val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,string val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Transform val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,uint val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,ushort val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Vector2d val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Vector3d val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool Set(string key,Vector3f val)
- (summary) 
     Sets a .
     
- (since) 5.0
- (returns) bool This is some return comment
## bool SetEnumValue(string key,T enumValue)
- (summary) 
     Set an enum value in the dictionary with a custom key.
     
- (since) 5.4
- (returns) bool This is some return comment
## bool SetEnumValue(T enumValue)
- (summary) 
     Set an enum value
     
- (since) 5.4
- (returns) bool This is some return comment
## bool TryGetBool(string key,bool value)
- (summary) 
     Get value as bool, will only succeed if value was created using Set(string key, bool value)
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetBytes(string key,byte[] value)
- (summary) 
     Get value as byte[], will only succeed if value was
     created using Set(string key, byte[] value)
     
- (since) 5.9
- (returns) bool This is some return comment
## bool TryGetDictionary(string key,ArchivableDictionary value)
- (summary) 
     Get value as ArchivableDictionary, will only succeed if value was
     created using Set(string key, ArchivableDictionary value)
     
- (since) 5.9
- (returns) bool This is some return comment
## bool TryGetDouble(string key,double value)
- (summary) 
     Get value as double, will only succeed if value was created using Set(string key, double value)
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetEnumValue(string key,T enumValue)
- (summary) 
     Attempt to get an enum value from the dictionary using a custom key.
     
- (since) 5.4
- (returns) bool This is some return comment
## bool TryGetFloat(string key,float value)
- (summary) 
     Get value as float, will only succeed if value was created using Set(string key, float value)
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetGuid(string key,Guid value)
- (summary) 
     Get value as Guid, will only succeed if value was created using Set(string key, Guid value)
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetInteger(string key,int value)
- (summary) 
     Get value as int, will only succeed if value was created using Set(string key, int value)
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetPlane(string key,Plane value)
- (summary) 
     Get value as Plane, will only succeed if value was created using Set(string key, Plane value)
     
- (since) 6.11
- (returns) bool This is some return comment
## bool TryGetPoint3d(string key,Point3d value)
- (summary) 
     Get value as Point3d, will only succeed if value was created using Set(string key, Point3d value)
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetPoint3f(string key,Point3f value)
- (summary) 
     Get value as Point3f, will only succeed if value was created using Set(string key, Point3f value)
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetString(string key,string value)
- (summary) 
     Get value as string, will only succeed if value was created using Set(string key, string value)
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetValue(string key,object value)
- (summary) 
     Gets the value associated with the specified key.
     
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetVector3d(string key,Vector3d value)
- (summary) 
     Get value as Vector3d, will only succeed if value was created using Set(string key, Vector3d value)
     
- (since) 5.0
- (returns) bool This is some return comment
