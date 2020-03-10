---
title: "Rhino.Runtime.CommonObject"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## static bool PerformCorruptionTesting
- (summary) 
     Used to test ON_Object* pointers to see if they are a brep or mesh that is corrupt enough to crash Rhino.
     
- (since) 6.10
## bool Disposed
- (summary) 
     Indicates if this object has been disposed or the
     document it originally belonged to has been disposed.
     
- (since) 6.0
## bool HasUserData
- (summary) 
     Gets True if this class has any custom information attached to it through UserData.
     
- (since) 5.0
## bool IsDocumentControlled
- (summary) 
     If True this object may not be modified. Any properties or functions that attempt
     to modify this object when it is set to "IsReadOnly" will throw a NotSupportedException.
     
- (since) 5.0
## bool IsValid
- (summary) Tests an object to see if it is valid.
- (since) 5.0
## DocObjects.Custom.UserDataList UserData
- (summary) 
     List of custom information that is attached to this class.
     
- (since) 5.0
## Collections.ArchivableDictionary UserDictionary
- (summary) 
     Dictionary of custom information attached to this class. The dictionary is actually user
     data provided as an easy to use sharable set of information.
     
- (since) 5.0
# Methods
## static CommonObject FromBase64String(int archive3dm,int opennurbs,string base64Data)
- (summary) 
     Create a CommonObject instance from a Base64 encoded string. This is typically the values
     used when passing common objects around as JSON data
     
- (since) 7.0
- (returns) CommonObject This is some return comment
## static CommonObject FromJSON(Dictionary<string,string> jsonDictionary)
- (summary) 
     Create a CommonObject instance from a JSON dictionary
     
- (since) 7.0
- (returns) CommonObject This is some return comment
## void Dispose()
- (summary) 
     Actively reclaims unmanaged resources that this instance uses.
     
- (since) 5.0
- (returns) void This is some return comment
## void EnsurePrivateCopy()
- (summary) 
     If you want to keep a copy of this class around by holding onto it in a variable after a command
     completes, call EnsurePrivateCopy to make sure that this class is not tied to the document. You can
     call this function as many times as you want.
     
- (since) 5.0
- (returns) void This is some return comment
## void GetObjectData(SerializationInfo info,StreamingContext context)
- (summary) 
     Populates a System.Runtime.Serialization.SerializationInfo with the data needed to serialize the target object.
     
- (since) 5.0
- (returns) void This is some return comment
## bool IsValidWithLog(string log)
- (summary) 
     Determines if an object is valid. Also provides a report on errors if this
     object happens not to be valid.
     
- (since) 5.0
- (returns) bool This is some return comment
## string ToJSON(SerializationOptions options)
- (summary) 
     Create a JSON string representation of this object
     
- (since) 7.0
- (returns) string This is some return comment
