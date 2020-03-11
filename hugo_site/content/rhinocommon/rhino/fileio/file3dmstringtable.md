---
title: "File3dmStringTable"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Provides access to document strings in the 3dm file.
```cs
public class File3dmStringTable
```
## Properties

int Count
: Returns the number of document strings in the 3dm file.
: since 6.0

int DocumentUserTextCount
: Returns the number of Section/Entry-style key values.
: since 6.0
## Methods

void Delete(string key)
: Removes a document string from the 3dm file.
: since 6.0

void Delete(string section,string entry)
: Removes document strings from the 3dm file.
: since 6.0

string[] GetEntryNames(string section)
: Return list of all entry names for a given section of document strings in the 3dm file.
: Returns - An array of section names. This can be empty, but not null.
: since 6.0

string GetKey(int i)
: Returns a key value at a given index.
: Returns - The key if successful.
: since 6.0

string[] GetSectionNames()
: Returns a list of all the section names for document strings in the 3dm file.
     By default a section name is a key that is prefixed with a string separated by a backslash.
: Returns - An array of section names. This can be empty, but not null.
: since 6.0

string GetValue(int i)
: Returns a string value at a given index.
: Returns - The string value if successful.
: since 6.0

string GetValue(string key)
: Returns a string value at a key.
: Returns - The string value if successful.
: since 6.0

string GetValue(string section,string entry)
: Returns a string value given a section and entry.
: Returns - The string value if successful.
: since 6.0

string SetString(string key,string value)
: Adds or sets a a document string in the 3dm file.
: Returns - The previous value if successful.
: since 6.0

string SetString(string section,string entry,string value)
: Adds or sets a document string in the 3dm file.
: Returns - The previous value if successful.
: since 6.0
