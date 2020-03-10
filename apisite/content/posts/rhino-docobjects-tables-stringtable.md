---
title: "Rhino.DocObjects.Tables.StringTable"
draft: false
---

# Properties
## int Count
- (summary) 
     The number of user data strings in the current document.
     
- (since) 5.0
## RhinoDoc Document
- (summary) Document that owns this object table.
- (since) 5.0
## int DocumentDataCount
- (summary) 
- (since) 6.0
## int DocumentUserTextCount
- (summary) 
- (since) 6.0
# Methods
## void Delete(string key)
- (summary) 
- (since) 5.0
- (returns) void This is some return comment
## void Delete(string section,string entry)
- (summary) 
     Removes user data strings from the document.
     
- (since) 5.0
- (returns) void This is some return comment
## string[] GetEntryNames(string section)
- (summary) 
     Return list of all entry names for a given section of user data strings in the document.
     
- (since) 5.0
- (returns) string[] This is some return comment
## string GetKey(int i)
- (summary) 
- (since) 5.0
- (returns) string This is some return comment
## string[] GetSectionNames()
- (summary) 
     Returns a list of all the section names for user data strings in the document.
     By default a section name is a key that is prefixed with a string separated by a backslash.
- (since) 5.0
- (returns) string[] This is some return comment
## string GetValue(int i)
- (summary) 
- (since) 5.0
- (returns) string This is some return comment
## string GetValue(string key)
- (summary) 
- (since) 5.0
- (returns) string This is some return comment
## string GetValue(string section,string entry)
- (summary) 
     Gets a user data string from the document.
     
- (since) 5.0
- (returns) string This is some return comment
## string SetString(string key,string value)
- (summary) 
     Adds or sets a user data string to the document.
     
- (since) 5.0
- (returns) string This is some return comment
## string SetString(string section,string entry,string value)
- (summary) 
     Adds or sets a user data string to the document.
     
- (since) 5.0
- (returns) string This is some return comment
