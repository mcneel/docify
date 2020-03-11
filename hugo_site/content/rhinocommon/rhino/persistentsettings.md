---
title: "PersistentSettings"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino](../)*

A dictionary of SettingValue items.
```cs
[Serializable]
public class PersistentSettings : ISerializable
```
## Properties

static PersistentSettings RhinoAppSettings
: 
: since 6.14

static string StringListRootKey
: Adding this string to a string list when calling SetStringList will cause the ProgramData setting to
     get inserted at that location in the list.

ICollection<string> ChildKeys
: Gets a collection containing the keys in the settings dictionary.
: since 6.0

bool HiddenFromUserInterface
: If False then values will appear in the EditOptions window
: since 6.0

ICollection<string> Keys
: Gets a collection containing the keys in the settings dictionary.
: since 6.0
## Methods

static PersistentSettings FromPlugInId(Guid pluginId)
: 

PersistentSettings AddChild(string key)
: Call this method to add a new child key, if the key is exists then the
     existing key is returned otherwise a new empty 
     child key is added and the new settings are returned.
: Returns - If the key is exists then the existing key is returned otherwise a new
     empty  child key is added and the new
     settings are returned.
: since 6.0

void ClearChangedFlag()
: 
: since 6.0

bool ContainsChangedValues()
: 
: since 6.0

bool ContainsModifiedValues(PersistentSettings allUserSettings)
: 

void DeleteChild(string key)
: Call this method to delete a child settings key.
: since 6.0

void DeleteItem(string key)
: 

bool GetBool(string key)
: 

bool GetBool(string key,bool defaultValue)
: 

bool GetBool(string key,bool defaultValue,IEnumerable<string> legacyKeyList)
: 
: since 6.0

byte GetByte(string key)
: 

byte GetByte(string key,byte defaultValue)
: 

byte GetByte(string key,byte defaultValue,IEnumerable<string> legacyKeyList)
: 
: since 6.0

char GetChar(string key)
: 

char GetChar(string key,char defaultValue)
: 

char GetChar(string key,char defaultValue,IEnumerable<string> legacyKeyList)
: 
: since 6.0

PersistentSettings GetChild(string key)
: Call this method to get a nested settings 
     instance, will throw a  exception if
     the key does not exist.
: Returns - Returns persistent settings for the specified key or throws an
     exception if the key is invalid.
: since 6.0

Color GetColor(string key)
: 

Color GetColor(string key,Color defaultValue)
: 

Color GetColor(string key,Color defaultValue,IEnumerable<string> legacyKeyList)
: 
: since 6.0

DateTime GetDate(string key)
: 

DateTime GetDate(string key,DateTime defaultValue)
: 

DateTime GetDate(string key,DateTime defaultValue,IEnumerable<string> legacyKeyList)
: 
: since 6.0

double GetDouble(string key)
: 

double GetDouble(string key,double defaultValue)
: 

double GetDouble(string key,double defaultValue,IEnumerable<string> legacyKeyList)
: 
: since 6.0

T GetEnumValue(String key)
: Get a stored enum value using a custom key.
: since 5.4

T GetEnumValue(String key,T defaultValue)
: Gets a stored enum value using a custom key, or return default value if not found.
: since 5.4

T GetEnumValue(T defaultValue)
: Get a stored enum value, or return default value if not found
: since 5.4

Guid GetGuid(string key)
: 
: since 6.0

Guid GetGuid(string key,Guid defaultValue)
: 
: since 6.0

Guid GetGuid(string key,Guid defaultValue,IEnumerable<string> legacyKeyList)
: 
: since 6.0

int GetInteger(string key)
: 

int GetInteger(string key,int defaultValue)
: 

int GetInteger(string key,int defaultValue,IEnumerable<string> legacyKeyList)
: 
: since 6.0

int GetInteger(string key,int defaultValue,int bound,bool boundIsLower)
: 
: since 6.0

int GetInteger(string key,int defaultValue,int lowerBound,int upperBound)
: 
: since 6.0

System.Drawing.Point GetPoint(string key)
: 

System.Drawing.Point GetPoint(string key,Point defaultValue)
: 

System.Drawing.Point GetPoint(string key,Point defaultValue,IEnumerable<string> legacyKeyList)
: 
: since 6.0

[Point3d](/rhinocommon/rhino/geometry/point3d/) GetPoint3d(string key)
: 

[Point3d](/rhinocommon/rhino/geometry/point3d/) GetPoint3d(string key,Point3d defaultValue)
: 

[Point3d](/rhinocommon/rhino/geometry/point3d/) GetPoint3d(string key,Point3d defaultValue,IEnumerable<string> legacyKeyList)
: 
: since 6.0

Rectangle GetRectangle(string key)
: 

Rectangle GetRectangle(string key,Rectangle defaultValue)
: 

Rectangle GetRectangle(string key,Rectangle defaultValue,IEnumerable<string> legacyKeyList)
: 
: since 6.0

bool GetSettingIsHiddenFromUserInterface(string key)
: Values read from all users settings files will be marked as read-only
     which will cause any future calls to Set... to fail.
: Returns - Returns True if the setting is read-only otherwise false.
: since 6.0

bool GetSettingIsHiddenFromUserInterface(string key,IEnumerable<string> legacyKeyList)
: Values read from all users settings files will be marked as read-only
     which will cause any future calls to Set... to fail.
: Returns - Returns True if the setting is read-only otherwise false.
: since 6.0

bool GetSettingIsReadOnly(string key)
: Values read from all users settings files will be marked as read-only
     which will cause any future calls to Set... to fail.
: Returns - Returns True if the setting is read-only otherwise false.
: since 6.0

Type GetSettingType(string key)
: Gets the type of the last value passed to Set... or Get... for the
     specified setting.
: Returns - Type of the last value passed to Set... or Get... for the specified
     setting.
: since 6.0

Size GetSize(string key)
: 

Size GetSize(string key,Size defaultValue)
: 

Size GetSize(string key,Size defaultValue,IEnumerable<string> legacyKeyList)
: 
: since 6.0

string GetString(string key)
: 

string GetString(string key,string defaultValue)
: 

string GetString(string key,string defaultValue,IEnumerable<string> legacyKeyList)
: 
: since 6.0

KeyValuePair<string, string>[] GetStringDictionary(string key)
: 
: since 6.0

KeyValuePair<string, string>[] GetStringDictionary(string key,KeyValuePair<string, string>[] defaultValue)
: 
: since (unknown)

KeyValuePair<string, string>[] GetStringDictionary(string key,KeyValuePair<string, string>[] defaultValue,IEnumerable<string> legacyKeyList)
: 
: since (unknown)

string[] GetStringList(string key)
: 

string[] GetStringList(string key,string[] defaultValue)
: 

string[] GetStringList(string key,string[] defaultValue,IEnumerable<string> legacyKeyList)
: 
: since 6.0

uint GetUnsignedInteger(string key)
: 

uint GetUnsignedInteger(string key,uint defaultValue)
: 

uint GetUnsignedInteger(string key,uint defaultValue,IEnumerable<string> legacyKeyList)
: 
: since 6.0

EventHandler<PersistentSettingsEventArgs<T>> GetValidator(string key)
: Provides a way to find a ready-to-use validator for the
     PersistentSetting class for the given the key, or obtaining null.
: Returns - A valid validator, or None if no validator was found.

void HideSettingFromUserInterface(string key)
: 
: since 6.0

void RegisterSettingsValidator(string key,EventHandler<PersistentSettingsEventArgs<T>> validator)
: Sets a validator for a given key.
     Note to implementers: parameter T should be one of the
     supported types for the PersistentSettings class and should match the type associated with the key.This method allows to use anonymous methods and lambda expressions.
: since (unknown)

void SetBool(string key,bool value)
: 

void SetByte(string key,byte value)
: 

void SetChar(string key,char value)
: 

void SetColor(string key,Color value)
: 

void SetDate(string key,DateTime value)
: 

void SetDefault(string key,bool value)
: 

void SetDefault(string key,byte value)
: 

void SetDefault(string key,char value)
: 

void SetDefault(string key,Color value)
: 

void SetDefault(string key,DateTime value)
: 

void SetDefault(string key,double value)
: 

void SetDefault(string key,Guid value)
: 
: since 6.0

void SetDefault(string key,int value)
: 

void SetDefault(string key,KeyValuePair<string, string>[] value)
: 
: since (unknown)

void SetDefault(string key,Point value)
: 

void SetDefault(string key,Point3d value)
: 

void SetDefault(string key,Rectangle value)
: 

void SetDefault(string key,Size value)
: 

void SetDefault(string key,string value)
: 

void SetDefault(string key,string[] value)
: 

void SetDouble(string key,double value)
: 

void SetEnumValue(String key,T value)
: Set an enum value in the settings using a custom key
: since 5.4

void SetEnumValue(T enumValue)
: Set an enum value in the settings.
: since 5.4

void SetGuid(string key,Guid value)
: 
: since 6.0

void SetInteger(string key,int value)
: 

void SetPoint(string key,Point value)
: 

void SetPoint3d(string key,Point3d value)
: 

void SetRectangle(string key,Rectangle value)
: 

void SetSize(string key,Size value)
: 

void SetString(string key,string value)
: 

void SetStringDictionary(string key,KeyValuePair<string, string>[] value)
: 
: since (unknown)

void SetStringList(string key,string[] value)
: Including a item with the value of StringListRootKey will cause the ProgramData value to get inserted at
     that location in the list when calling GetStringList.

void SetUnsignedInteger(string key,uint value)
: 

bool TryGetBool(string key,bool value)
: 

bool TryGetBool(string key,bool value,IEnumerable<string> legacyKeyList)
: 
: since 6.0

bool TryGetByte(string key,byte value)
: 

bool TryGetByte(string key,byte value,IEnumerable<string> legacyKeyList)
: 
: since 6.0

bool TryGetChar(string key,char value)
: 

bool TryGetChar(string key,char value,IEnumerable<string> legacyKeyList)
: 
: since 6.0

bool TryGetChild(string key,PersistentSettings value)
: Call this method to get a nested settings 
     instance, will return True if the key exists and value was set
     otherwise; will return False and value will be set to null.
: Returns - Returns True if the key exists and value was set otherwise; returns
     false.
: since 6.0

bool TryGetColor(string key,Color value)
: 

bool TryGetColor(string key,Color value,IEnumerable<string> legacyKeyList)
: 
: since 6.0

bool TryGetDate(string key,DateTime value)
: 

bool TryGetDate(string key,DateTime value,IEnumerable<string> legacyKeyList)
: 
: since 6.0

bool TryGetDefault(string key,bool value)
: 

bool TryGetDefault(string key,byte value)
: 

bool TryGetDefault(string key,char value)
: 

bool TryGetDefault(string key,Color value)
: 

bool TryGetDefault(string key,DateTime value)
: 

bool TryGetDefault(string key,double value)
: 

bool TryGetDefault(string key,int value)
: 

bool TryGetDefault(string key,Point3d value)
: 

bool TryGetDefault(string key,Rectangle value)
: 

bool TryGetDefault(string key,Size value)
: 

bool TryGetDefault(string key,string value)
: 

bool TryGetDefault(string key,string[] value)
: 

bool TryGetDouble(string key,double value)
: 

bool TryGetDouble(string key,double value,IEnumerable<string> legacyKeyList)
: 
: since 6.0

bool TryGetEnumValue(String key,T enumValue)
: Attempt to get the stored value for an enum setting using a custom key. Note: the enum value ALWAYS gets assigned!
     Be sure to check for success of this method to prevent erroneous use of the value.
: Returns - True if successful
: since 5.4

bool TryGetGuid(string key,Guid value)
: 
: since 6.0

bool TryGetGuid(string key,Guid value,IEnumerable<string> legacyKeyList)
: 
: since 6.0

bool TryGetInteger(string key,int value)
: 

bool TryGetInteger(string key,int value,IEnumerable<string> legacyKeyList)
: 
: since 6.0

bool TryGetPoint(string key,Point value)
: 

bool TryGetPoint(string key,Point value,IEnumerable<string> legacyKeyList)
: 
: since 6.0

bool TryGetPoint3d(string key,Point3d value)
: 

bool TryGetPoint3d(string key,Point3d value,IEnumerable<string> legacyKeyList)
: 
: since 6.0

bool TryGetRectangle(string key,Rectangle value)
: 

bool TryGetRectangle(string key,Rectangle value,IEnumerable<string> legacyKeyList)
: 
: since 6.0

bool TryGetSettingIsHiddenFromUserInterface(string key,bool value)
: Values read from all users settings files will be marked as read-only
     which will cause any future calls to Set... to fail.
: since 6.0

bool TryGetSettingIsHiddenFromUserInterface(string key,bool value,IEnumerable<string> legacyKeyList)
: Values read from all users settings files will be marked as read-only
     which will cause any future calls to Set... to fail.
: since 6.0

bool TryGetSettingIsReadOnly(string key,bool value)
: Values read from all users settings files will be marked as read-only
     which will cause any future calls to Set... to fail.
: since 6.0

bool TryGetSettingType(string key,Type type)
: Get the type of the last value passed to Set... or Get... for the
     specified setting.
: since 6.0

bool TryGetSize(string key,Size value)
: 

bool TryGetSize(string key,Size value,IEnumerable<string> legacyKeyList)
: 
: since 6.0

bool TryGetString(string key,string value)
: 

bool TryGetString(string key,string value,IEnumerable<string> legacyKeyList)
: 
: since 6.0

bool TryGetStringDictionary(string key,KeyValuePair<string, string>[] value)
: 
: since (unknown)

bool TryGetStringDictionary(string key,KeyValuePair<string, string>[] value,IEnumerable<string> legacyKeyList)
: 
: since (unknown)

bool TryGetStringList(string key,string[] value)
: 

bool TryGetStringList(string key,string[] value,IEnumerable<string> legacyKeyList)
: 
: since 6.0

bool TryGetUnsignedInteger(string key,uint value)
: 

bool TryGetUnsignedInteger(string key,uint value,IEnumerable<string> legacyKeyList)
: 
: since 6.0
