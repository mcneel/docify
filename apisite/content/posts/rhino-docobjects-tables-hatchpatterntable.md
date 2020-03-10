---
title: "HatchPatternTable"
draft: false
---

*Namespace: Rhino.DocObjects.Tables*

   All of the hatch pattern definitions contained in a rhino document.
   
## Properties
#### ModelComponentType ComponentType
- (summary) 
- (since) 6.0
#### int CurrentHatchPatternIndex
- (summary) 
     At all times, there is a "current" hatch pattern.  Unless otherwise
     specified, new objects are assigned to the current hatch pattern.
     The current hatch pattern is never locked, hidden, or deleted.
     
- (since) 5.0
## Methods
#### int Add(HatchPattern pattern)
- (summary) 
     Adds a new hatch pattern with specified definition to the table.
     
- (since) 5.0
- (returns) int This is some return comment
#### bool Delete(HatchPattern item)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
#### bool Delete(HatchPattern item,bool quiet)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
#### int Find(string name,bool ignoreDeleted)
- (summary) 
     Finds the hatch pattern with a given name. Search ignores case.
     
- (since) 5.0
- (returns) int This is some return comment
#### HatchPattern FindIndex(int index)
- (summary) 
     Retrieves a HatchPattern object based on Index. This seach type of search is discouraged.
     We are moving towards using only IDs for all tables.
     
- (since) 6.0
- (returns) HatchPattern This is some return comment
#### HatchPattern FindName(string name)
- (summary) 
     Finds the hatch pattern with a given name. Search ignores case.
     
- (since) 6.0
- (returns) HatchPattern This is some return comment
#### HatchPattern FindNameHash(NameHash nameHash)
- (summary) 
     Finds a HatchPattern given its name hash.
     
- (since) 6.0
- (returns) HatchPattern This is some return comment
