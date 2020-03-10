---
title: "Rhino.PersistentSettings"
draft: false
---

# Properties
## static PersistentSettings RhinoAppSettings
- (summary) 
- (since) 6.14
## static string StringListRootKey
- (summary) 
     Adding this string to a string list when calling SetStringList will cause the ProgramData setting to
     get inserted at that location in the list.
     
- (since) 5.0
## ICollection<string> ChildKeys
- (summary) 
     Gets a collection containing the keys in the settings dictionary.
     
- (since) 6.0
## bool HiddenFromUserInterface
- (summary) 
     If False then values will appear in the EditOptions window
     
- (since) 6.0
## ICollection<string> Keys
- (summary) 
     Gets a collection containing the keys in the settings dictionary.
     
- (since) 6.0
# Methods
## static PersistentSettings FromPlugInId(Guid pluginId)
- (summary) 
- (since) 5.0
- (returns) PersistentSettings This is some return comment
## PersistentSettings AddChild(string key)
- (summary) 
     Call this method to add a new child key, if the key is exists then the
     existing key is returned otherwise a new empty 
     child key is added and the new settings are returned.
     
- (since) 6.0
- (returns) PersistentSettings This is some return comment
## void ClearChangedFlag()
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## bool ContainsChangedValues()
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool ContainsModifiedValues(PersistentSettings allUserSettings)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## void DeleteChild(string key)
- (summary) 
     Call this method to delete a child settings key.
     
- (since) 6.0
- (returns) void This is some return comment
## void DeleteItem(string key)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## bool GetBool(string key)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool GetBool(string key,bool defaultValue)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool GetBool(string key,bool defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## byte GetByte(string key)
- (summary) 
- (since) 5.0
- (returns) byte This is some return comment
## byte GetByte(string key,byte defaultValue)
- (summary) 
- (since) 5.0
- (returns) byte This is some return comment
## byte GetByte(string key,byte defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) byte This is some return comment
## char GetChar(string key)
- (summary) 
- (since) 5.0
- (returns) char This is some return comment
## char GetChar(string key,char defaultValue)
- (summary) 
- (since) 5.0
- (returns) char This is some return comment
## char GetChar(string key,char defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) char This is some return comment
## PersistentSettings GetChild(string key)
- (summary) 
     Call this method to get a nested settings 
     instance, will throw a  exception if
     the key does not exist.
     
- (since) 6.0
- (returns) PersistentSettings This is some return comment
## Color GetColor(string key)
- (summary) 
- (since) 5.0
- (returns) Color This is some return comment
## Color GetColor(string key,Color defaultValue)
- (summary) 
- (since) 5.0
- (returns) Color This is some return comment
## Color GetColor(string key,Color defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) Color This is some return comment
## DateTime GetDate(string key)
- (summary) 
- (since) 5.0
- (returns) DateTime This is some return comment
## DateTime GetDate(string key,DateTime defaultValue)
- (summary) 
- (since) 5.0
- (returns) DateTime This is some return comment
## DateTime GetDate(string key,DateTime defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) DateTime This is some return comment
## double GetDouble(string key)
- (summary) 
- (since) 5.0
- (returns) double This is some return comment
## double GetDouble(string key,double defaultValue)
- (summary) 
- (since) 5.0
- (returns) double This is some return comment
## double GetDouble(string key,double defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) double This is some return comment
## T GetEnumValue(String key)
- (summary) 
     Get a stored enum value using a custom key.
     
- (since) 5.4
- (returns) T This is some return comment
## T GetEnumValue(String key,T defaultValue)
- (summary) 
     Gets a stored enum value using a custom key, or return default value if not found. 
     
- (since) 5.4
- (returns) T This is some return comment
## T GetEnumValue(T defaultValue)
- (summary) 
     Get a stored enum value, or return default value if not found
     
- (since) 5.4
- (returns) T This is some return comment
## Guid GetGuid(string key)
- (summary) 
- (since) 6.0
- (returns) Guid This is some return comment
## Guid GetGuid(string key,Guid defaultValue)
- (summary) 
- (since) 6.0
- (returns) Guid This is some return comment
## Guid GetGuid(string key,Guid defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) Guid This is some return comment
## int GetInteger(string key)
- (summary) 
- (since) 5.0
- (returns) int This is some return comment
## int GetInteger(string key,int defaultValue)
- (summary) 
- (since) 5.0
- (returns) int This is some return comment
## int GetInteger(string key,int defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) int This is some return comment
## int GetInteger(string key,int defaultValue,int bound,bool boundIsLower)
- (summary) 
- (since) 6.0
- (returns) int This is some return comment
## int GetInteger(string key,int defaultValue,int lowerBound,int upperBound)
- (summary) 
- (since) 6.0
- (returns) int This is some return comment
## System.Drawing.Point GetPoint(string key)
- (summary) 
- (since) 5.0
- (returns) System.Drawing.Point This is some return comment
## System.Drawing.Point GetPoint(string key,Point defaultValue)
- (summary) 
- (since) 5.0
- (returns) System.Drawing.Point This is some return comment
## System.Drawing.Point GetPoint(string key,Point defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) System.Drawing.Point This is some return comment
## Point3d GetPoint3d(string key)
- (summary) 
- (since) 5.0
- (returns) Point3d This is some return comment
## Point3d GetPoint3d(string key,Point3d defaultValue)
- (summary) 
- (since) 5.0
- (returns) Point3d This is some return comment
## Point3d GetPoint3d(string key,Point3d defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) Point3d This is some return comment
## Rectangle GetRectangle(string key)
- (summary) 
- (since) 5.0
- (returns) Rectangle This is some return comment
## Rectangle GetRectangle(string key,Rectangle defaultValue)
- (summary) 
- (since) 5.0
- (returns) Rectangle This is some return comment
## Rectangle GetRectangle(string key,Rectangle defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) Rectangle This is some return comment
## bool GetSettingIsHiddenFromUserInterface(string key)
- (summary) 
     Values read from all users settings files will be marked as read-only
     which will cause any future calls to Set... to fail.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool GetSettingIsHiddenFromUserInterface(string key,IEnumerable<string> legacyKeyList)
- (summary) 
     Values read from all users settings files will be marked as read-only
     which will cause any future calls to Set... to fail.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool GetSettingIsReadOnly(string key)
- (summary) 
     Values read from all users settings files will be marked as read-only
     which will cause any future calls to Set... to fail.
     
- (since) 6.0
- (returns) bool This is some return comment
## Type GetSettingType(string key)
- (summary) 
     Gets the type of the last value passed to Set... or Get... for the
     specified setting.
     
- (since) 6.0
- (returns) Type This is some return comment
## Size GetSize(string key)
- (summary) 
- (since) 5.0
- (returns) Size This is some return comment
## Size GetSize(string key,Size defaultValue)
- (summary) 
- (since) 5.0
- (returns) Size This is some return comment
## Size GetSize(string key,Size defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) Size This is some return comment
## string GetString(string key)
- (summary) 
- (since) 5.0
- (returns) string This is some return comment
## string GetString(string key,string defaultValue)
- (summary) 
- (since) 5.0
- (returns) string This is some return comment
## string GetString(string key,string defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) string This is some return comment
## KeyValuePair<string, string>[] GetStringDictionary(string key)
- (summary) 
- (since) 6.0
- (returns) KeyValuePair<string, string>[] This is some return comment
## KeyValuePair<string, string>[] GetStringDictionary(string key,KeyValuePair<string, string>[] defaultValue)
- (summary) 
- (since) (unknown)
- (returns) KeyValuePair<string, string>[] This is some return comment
## KeyValuePair<string, string>[] GetStringDictionary(string key,KeyValuePair<string, string>[] defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) (unknown)
- (returns) KeyValuePair<string, string>[] This is some return comment
## string[] GetStringList(string key)
- (summary) 
- (since) 5.0
- (returns) string[] This is some return comment
## string[] GetStringList(string key,string[] defaultValue)
- (summary) 
- (since) 5.0
- (returns) string[] This is some return comment
## string[] GetStringList(string key,string[] defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) string[] This is some return comment
## uint GetUnsignedInteger(string key)
- (summary) 
- (since) 5.0
- (returns) uint This is some return comment
## uint GetUnsignedInteger(string key,uint defaultValue)
- (summary) 
- (since) 5.0
- (returns) uint This is some return comment
## uint GetUnsignedInteger(string key,uint defaultValue,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) uint This is some return comment
## EventHandler<PersistentSettingsEventArgs<T>> GetValidator(string key)
- (summary) 
     Provides a way to find a ready-to-use validator for the
     PersistentSetting class for the given the key, or obtaining null.
     
- (since) 5.0
- (returns) EventHandler<PersistentSettingsEventArgs<T>> This is some return comment
## void HideSettingFromUserInterface(string key)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## void RegisterSettingsValidator(string key,EventHandler<PersistentSettingsEventArgs<T>> validator)
- (summary) 
     Sets a validator for a given key.
     Note to implementers: parameter T should be one of the
     supported types for the PersistentSettings class and should match the type associated with the key.This method allows to use anonymous methods and lambda expressions.
- (since) (unknown)
- (returns) void This is some return comment
## void SetBool(string key,bool value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetByte(string key,byte value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetChar(string key,char value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetColor(string key,Color value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetDate(string key,DateTime value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetDefault(string key,bool value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetDefault(string key,byte value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetDefault(string key,char value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetDefault(string key,Color value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetDefault(string key,DateTime value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetDefault(string key,double value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetDefault(string key,Guid value)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## void SetDefault(string key,int value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetDefault(string key,KeyValuePair<string, string>[] value)
- (summary) 
- (since) (unknown)
- (returns) void This is some return comment
## void SetDefault(string key,Point value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetDefault(string key,Point3d value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetDefault(string key,Rectangle value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetDefault(string key,Size value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetDefault(string key,string value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetDefault(string key,string[] value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetDouble(string key,double value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetEnumValue(String key,T value)
- (summary) 
     Set an enum value in the settings using a custom key
     
- (since) 5.4
- (returns) void This is some return comment
## void SetEnumValue(T enumValue)
- (summary) 
     Set an enum value in the settings.
     
- (since) 5.4
- (returns) void This is some return comment
## void SetGuid(string key,Guid value)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## void SetInteger(string key,int value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetPoint(string key,Point value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetPoint3d(string key,Point3d value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetRectangle(string key,Rectangle value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetSize(string key,Size value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetString(string key,string value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void SetStringDictionary(string key,KeyValuePair<string, string>[] value)
- (summary) 
- (since) (unknown)
- (returns) void This is some return comment
## void SetStringList(string key,string[] value)
- (summary) 
     Including a item with the value of StringListRootKey will cause the ProgramData value to get inserted at
     that location in the list when calling GetStringList.
     
- (since) 5.0
- (returns) void This is some return comment
## void SetUnsignedInteger(string key,uint value)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## bool TryGetBool(string key,bool value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetBool(string key,bool value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetByte(string key,byte value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetByte(string key,byte value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetChar(string key,char value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetChar(string key,char value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetChild(string key,PersistentSettings value)
- (summary) 
     Call this method to get a nested settings 
     instance, will return True if the key exists and value was set
     otherwise; will return False and value will be set to null.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetColor(string key,Color value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetColor(string key,Color value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetDate(string key,DateTime value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDate(string key,DateTime value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetDefault(string key,bool value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDefault(string key,byte value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDefault(string key,char value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDefault(string key,Color value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDefault(string key,DateTime value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDefault(string key,double value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDefault(string key,int value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDefault(string key,Point3d value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDefault(string key,Rectangle value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDefault(string key,Size value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDefault(string key,string value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDefault(string key,string[] value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDouble(string key,double value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetDouble(string key,double value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetEnumValue(String key,T enumValue)
- (summary) 
     Attempt to get the stored value for an enum setting using a custom key. Note: the enum value ALWAYS gets assigned!
     Be sure to check for success of this method to prevent erroneous use of the value.
     
- (since) 5.4
- (returns) bool This is some return comment
## bool TryGetGuid(string key,Guid value)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetGuid(string key,Guid value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetInteger(string key,int value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetInteger(string key,int value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetPoint(string key,Point value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetPoint(string key,Point value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetPoint3d(string key,Point3d value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetPoint3d(string key,Point3d value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetRectangle(string key,Rectangle value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetRectangle(string key,Rectangle value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetSettingIsHiddenFromUserInterface(string key,bool value)
- (summary) 
     Values read from all users settings files will be marked as read-only
     which will cause any future calls to Set... to fail.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetSettingIsHiddenFromUserInterface(string key,bool value,IEnumerable<string> legacyKeyList)
- (summary) 
     Values read from all users settings files will be marked as read-only
     which will cause any future calls to Set... to fail.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetSettingIsReadOnly(string key,bool value)
- (summary) 
     Values read from all users settings files will be marked as read-only
     which will cause any future calls to Set... to fail.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetSettingType(string key,Type type)
- (summary) 
     Get the type of the last value passed to Set... or Get... for the
     specified setting.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetSize(string key,Size value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetSize(string key,Size value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetString(string key,string value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetString(string key,string value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetStringDictionary(string key,KeyValuePair<string, string>[] value)
- (summary) 
- (since) (unknown)
- (returns) bool This is some return comment
## bool TryGetStringDictionary(string key,KeyValuePair<string, string>[] value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) (unknown)
- (returns) bool This is some return comment
## bool TryGetStringList(string key,string[] value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetStringList(string key,string[] value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool TryGetUnsignedInteger(string key,uint value)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool TryGetUnsignedInteger(string key,uint value,IEnumerable<string> legacyKeyList)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
