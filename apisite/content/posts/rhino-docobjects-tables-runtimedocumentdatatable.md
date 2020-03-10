---
title: "Rhino.DocObjects.Tables.RuntimeDocumentDataTable"
draft: false
---

# Properties
## RhinoDoc Document
- (summary) 
- (since) 6.3
# Methods
## T GetValue(object key,Func<RhinoDoc, T> newT)
- (summary) 
     Checks the dictionary for the specified key, if found and the value is not
     None then then the value is returned.  If the key is not found or its value
     is None then newT(Document) is called to create a new value instnce which
     is put in the dictionary and returned.
     
- (since) (unknown)
- (returns) T This is some return comment
## T TryGetValue(object key)
- (summary) 
     Check dictionary for value and return it properly cast if
     found.
     
- (since) 6.15
- (returns) T This is some return comment
