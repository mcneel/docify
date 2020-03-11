---
title: "UserDictionary"
date: 2020-03-11 15:29:44Z
draft: false
---

*Namespace: [Rhino.DocObjects.Custom](../)*

Defines the storage data class for a user dictionary.
```cs
[System.Runtime.InteropServices.Guid("171E831F-7FEF-40E2-9857-E5CCD39446F0")]
public class UserDictionary : UserData
```
## Properties

string Description
: Gets the text "RhinoCommon UserDictionary".

[ArchivableDictionary](/rhinocommon/rhino/collections/archivabledictionary/) Dictionary
: Gets the dictionary that is associated with this class.
     This dictionary is unique.

bool ShouldWrite
: Writes this entity if the count is larger than 0.
