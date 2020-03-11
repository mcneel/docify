---
title: "File3dmPlugInDataTable"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.FileIO](../)*

Table of custom data provided by plug-ins
```cs
public class File3dmPlugInDataTable :
    //FileIO.File3dmCommonComponentTable<File3dmPlugInData>,
    IEnumerable<File3dmPlugInData>, Collections.IRhinoTable<File3dmPlugInData>
```
## Properties

int Count
: Gets the number of File3dmPlugInData in this table.
## Methods

void Clear()
: Remove all entries from this table

string Dump()
: Prepares a text dump of table.
: Returns - A string containing the dump.

IEnumerator<File3dmPlugInData> GetEnumerator()
: Gets the enumerator that visits any  in this table.
: Returns - The enumerator.
