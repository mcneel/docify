---
title: "NamedConstructionPlaneTable"
draft: false
---

*Namespace: Rhino.DocObjects.Tables*

   Contains all named construction planes in a rhino document.
   This class cannot be inherited.
## Properties
#### int Count
- (summary) Number of construction planes in the table.
- (since) 5.0
#### RhinoDoc Document
- (summary) Gets the document that owns this table.
- (since) 5.0
## Methods
#### int Add(string name,Plane plane)
- (summary) 
     Adds named construction plane to document.
     
- (since) 5.0
- (returns) int This is some return comment
#### bool Delete(int index)
- (summary) 
     Remove named construction plane from the document.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Delete(string name)
- (summary) 
     Remove named construction plane from the document.
     
- (since) 5.0
- (returns) bool This is some return comment
#### int Find(string name)
- (summary) Finds a named construction plane.
- (since) 5.0
- (returns) int This is some return comment
#### IEnumerator<ConstructionPlane> GetEnumerator()
- (summary) 
- (since) 5.0
- (returns) IEnumerator<ConstructionPlane> This is some return comment
