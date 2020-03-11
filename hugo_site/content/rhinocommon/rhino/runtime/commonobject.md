---
title: "CommonObject"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.Runtime](../)*

Base class for .NET classes that wrap C++ unmanaged Rhino classes.
```cs
[Serializable]
public class CommonObject : IDisposable, ISerializable
```
## Properties

static bool PerformCorruptionTesting
: Used to test ON_Object* pointers to see if they are a brep or mesh that is corrupt enough to crash Rhino.
: since 6.10

bool Disposed
: Indicates if this object has been disposed or the
     document it originally belonged to has been disposed.
: since 6.0

bool HasUserData
: Gets True if this class has any custom information attached to it through UserData.

bool IsDocumentControlled
: If True this object may not be modified. Any properties or functions that attempt
     to modify this object when it is set to "IsReadOnly" will throw a NotSupportedException.

bool IsValid
: Tests an object to see if it is valid.

[UserDataList](/rhinocommon/rhino/docobjects/custom/userdatalist/) UserData
: List of custom information that is attached to this class.

[ArchivableDictionary](/rhinocommon/rhino/collections/archivabledictionary/) UserDictionary
: Dictionary of custom information attached to this class. The dictionary is actually user
     data provided as an easy to use sharable set of information.
## Methods

static CommonObject FromBase64String(int archive3dm,int opennurbs,string base64Data)
: Create a CommonObject instance from a Base64 encoded string. This is typically the values
     used when passing common objects around as JSON data
: since 7.0

static CommonObject FromJSON(Dictionary<string,string> jsonDictionary)
: Create a CommonObject instance from a JSON dictionary
: since 7.0

void Dispose()
: Actively reclaims unmanaged resources that this instance uses.

void EnsurePrivateCopy()
: If you want to keep a copy of this class around by holding onto it in a variable after a command
     completes, call EnsurePrivateCopy to make sure that this class is not tied to the document. You can
     call this function as many times as you want.

void GetObjectData(SerializationInfo info,StreamingContext context)
: Populates a System.Runtime.Serialization.SerializationInfo with the data needed to serialize the target object.

bool IsValidWithLog(string log)
: Determines if an object is valid. Also provides a report on errors if this
     object happens not to be valid.
: Returns - True if this object is valid; False otherwise.

string ToJSON(SerializationOptions options)
: Create a JSON string representation of this object
: since 7.0
