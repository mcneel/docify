---
title: "File3dmLayerTable"
draft: false
---

*Namespace: Rhino.FileIO*

   Provides access to layers in the 3dm file.
   
## Properties
#### ModelComponentType ComponentType
- (summary) 
     Returns .
     
- (since) 6.0
## Methods
#### Layer FindIndex(int index)
- (summary) 
     Retrieves a Layer object based on Index. This search type of search is discouraged.
     We are moving towards using only IDs for all tables.
     
- (since) 6.0
- (returns) Layer This is some return comment
#### Layer FindName(string name,Guid parentId)
- (summary) 
     Finds a Layer given its name.
     
- (since) 6.0
- (returns) Layer This is some return comment
#### Layer FindNameHash(NameHash nameHash)
- (summary) 
     Finds a Layer given its name hash.
     
- (since) 6.0
- (returns) Layer This is some return comment
