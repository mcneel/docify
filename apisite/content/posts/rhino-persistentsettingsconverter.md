---
title: "Rhino.PersistentSettingsConverter"
date: 2020-03-10 09:24:56Z
draft: false
---

# Methods
## static bool IsStringDictionary(string s)
- (summary) 
     Determines if the string value is formatted as a key value pair
     string list.
     
- (since) 6.0
- (returns) bool This is some return comment
## static bool IsStringList(string s)
- (summary) 
     Determines if the string value is formatted as a string list.
     
- (since) 6.0
- (returns) bool This is some return comment
## static string ToString(double value)
- (summary) 
     Converts a double value to a string.
     
- (since) 6.10
- (returns) string This is some return comment
## static string ToString(KeyValuePair<string, string>[] value)
- (summary) 
     Converts a key value string pair array to a properly formatted string
     dictionary XML string.
     
- (since) (unknown)
- (returns) string This is some return comment
## static string ToString(string[] values)
- (summary) 
     Converts a string array to a properly formatted string list XML string.
     
- (since) 6.0
- (returns) string This is some return comment
## static bool TryParseDouble(string s,double value)
- (summary) 
     Converts the string representation of a number to its double-precision
     floating-point number equivalent. A return value indicates whether the
     conversion succeeded or failed.
     system culture.
     
- (since) 6.10
- (returns) bool This is some return comment
## static bool TryParseEnum(Type type,string enumValueName,int value)
- (summary) 
     Converts an enum value name to its integer
     equivalent.
     
- (since) 6.0
- (returns) bool This is some return comment
## static bool TryParseEnum(Type type,string intValueAsString,string value)
- (summary) 
     Converts an enum value string (integer as string) to
     a enum value name.
     
- (since) 6.0
- (returns) bool This is some return comment
## static bool TryParseStringDictionary(string s,KeyValuePair<string, string>[] value)
- (summary) 
     Attempts to convert a string to a key value string pair array.
     
- (since) (unknown)
- (returns) bool This is some return comment
## static bool TryParseStringList(string s,string[] value)
- (summary) 
     Attempts to convert a string to a string value list.
     
- (since) 6.0
- (returns) bool This is some return comment
