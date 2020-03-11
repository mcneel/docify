---
title: "RuntimeDocumentDataTable"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

Collection of document runtime data. This is a good place to
   put non-serialized, per document data.
```cs
public class RuntimeDocumentDataTable : Dictionary<object, object>
```
## Properties

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: 
: since 6.3
## Methods

T GetValue(object key,Func<RhinoDoc, T> newT)
: Checks the dictionary for the specified key, if found and the value is not
     None then then the value is returned.  If the key is not found or its value
     is None then newT(Document) is called to create a new value instnce which
     is put in the dictionary and returned.
: Returns - Returns the document specific instance of type T using the specified
     dictionary key.
: since (unknown)

T TryGetValue(object key)
: Check dictionary for value and return it properly cast if
     found.
: Returns - Returns the document specific instance of type T using the specified
     dictionary key or None if not found.
: since 6.15
