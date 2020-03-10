---
title: "Rhino.FileIO.File3dmStringTable"
date: 2020-03-10 09:24:55Z
draft: false
---

# Properties
## int Count
- (summary) 
     Returns the number of document strings in the 3dm file.
     
- (since) 6.0
## int DocumentUserTextCount
- (summary) 
     Returns the number of Section/Entry-style key values.
     
- (since) 6.0
# Methods
## void Delete(string key)
- (summary) 
     Removes a document string from the 3dm file.
     
- (since) 6.0
- (returns) void This is some return comment
## void Delete(string section,string entry)
- (summary) 
     Removes document strings from the 3dm file.
     
- (since) 6.0
- (returns) void This is some return comment
## string[] GetEntryNames(string section)
- (summary) 
     Return list of all entry names for a given section of document strings in the 3dm file.
     
- (since) 6.0
- (returns) string[] This is some return comment
## string GetKey(int i)
- (summary) 
     Returns a key value at a given index.
     
- (since) 6.0
- (returns) string This is some return comment
## string[] GetSectionNames()
- (summary) 
     Returns a list of all the section names for document strings in the 3dm file.
     By default a section name is a key that is prefixed with a string separated by a backslash.
- (since) 6.0
- (returns) string[] This is some return comment
## string GetValue(int i)
- (summary) 
     Returns a string value at a given index.
     
- (since) 6.0
- (returns) string This is some return comment
## string GetValue(string key)
- (summary) 
     Returns a string value at a key.
     
- (since) 6.0
- (returns) string This is some return comment
## string GetValue(string section,string entry)
- (summary) 
     Returns a string value given a section and entry.
     
- (since) 6.0
- (returns) string This is some return comment
## string SetString(string key,string value)
- (summary) 
     Adds or sets a a document string in the 3dm file.
     
- (since) 6.0
- (returns) string This is some return comment
## string SetString(string section,string entry,string value)
- (summary) 
     Adds or sets a document string in the 3dm file.
     
- (since) 6.0
- (returns) string This is some return comment
