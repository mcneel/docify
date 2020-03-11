---
title: "BitmapEntry"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Rhino.DocObjects.Tables.BitmapTable entry
```cs
[Serializable]
public class BitmapEntry : ModelComponent
```
## Properties

ModelComponentType ComponentType
: Returns .
: since 6.0

string FileName
: The name of this bitmap.
: since 5.1

bool IsReference
: Gets a value indicting whether this bitmap is a referenced bitmap. 
     Referenced bitmaps are part of referenced documents.
: since 5.1
## Methods

bool Save(string fileName)
: 
: since 5.1
