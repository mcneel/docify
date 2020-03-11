---
title: "PersistentSettingsConverter"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino](../)*

Used to convert string to string lists and string dictionaries and back
   to strings again.
```cs
public class PersistentSettingsConverter
```
## Methods

static bool IsStringDictionary(string s)
: Determines if the string value is formatted as a key value pair
     string list.
: Returns - Returns True if it is a XML key value pair list otherwise return false.
: since 6.0

static bool IsStringList(string s)
: Determines if the string value is formatted as a string list.
: Returns - Returns True if it is a XML string list otherwise return false.
: since 6.0

static string ToString(double value)
: Converts a double value to a string.
: Returns - Returns the double value as a settings file formatted string.
: since 6.10

static string ToString(KeyValuePair<string, string>[] value)
: Converts a key value string pair array to a properly formatted string
     dictionary XML string.
: Returns - Returns a properly formatted XML string that represents the string
     dictionary.
: since (unknown)

static string ToString(string[] values)
: Converts a string array to a properly formatted string list XML string.
: Returns - Returns a properly formatted XML string that represents the list of
     strings.
: since 6.0

static bool TryParseDouble(string s,double value)
: Converts the string representation of a number to its double-precision
     floating-point number equivalent. A return value indicates whether the
     conversion succeeded or failed.
     system culture.
: Returns - Returns True if s was converted successfully; otherwise, false..
: since 6.10

static bool TryParseEnum(Type type,string enumValueName,int value)
: Converts an enum value name to its integer
     equivalent.
: Returns - Returns True if the the successfully converted or False if not.
: since 6.0

static bool TryParseEnum(Type type,string intValueAsString,string value)
: Converts an enum value string (integer as string) to
     a enum value name.
: Returns - Returns True if the the successfully converted or False if not.
: since 6.0

static bool TryParseStringDictionary(string s,KeyValuePair<string, string>[] value)
: Attempts to convert a string to a key value string pair array.
: Returns - Returns True if the string is not empty and properly formatted as a
     key value string pair list otherwise returns false.
: since (unknown)

static bool TryParseStringList(string s,string[] value)
: Attempts to convert a string to a string value list.
: Returns - Returns True if the string is not empty and properly formatted as a
     string list otherwise returns false.
: since 6.0
