---
title: "StringTable"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

Collection of document user data strings
```cs
public class StringTable
```
## Properties

int Count
: The number of user data strings in the current document.

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Document that owns this object table.

int DocumentDataCount
: 
: since 6.0

int DocumentUserTextCount
: 
: since 6.0
## Methods

void Delete(string key)
: 

void Delete(string section,string entry)
: Removes user data strings from the document.

string[] GetEntryNames(string section)
: Return list of all entry names for a given section of user data strings in the document.
: Returns - An array of section names. This can be empty, but not null.

string GetKey(int i)
: 

string[] GetSectionNames()
: Returns a list of all the section names for user data strings in the document.
     By default a section name is a key that is prefixed with a string separated by a backslash.
: Returns - An array of section names. This can be empty, but not null.

string GetValue(int i)
: 

string GetValue(string key)
: 

string GetValue(string section,string entry)
: Gets a user data string from the document.
: Returns - The user data.

string SetString(string key,string value)
: Adds or sets a user data string to the document.
: Returns - The previous value if successful and a previous value existed.

string SetString(string section,string entry,string value)
: Adds or sets a user data string to the document.
: Returns - The previous value if successful and a previous value existed.
