---
title: "Rhino.DocObjects.Tables.LightTable"
draft: false
---

# Properties
## ModelComponentType ComponentType
- (summary) 
- (since) 6.0
## int Count
- (summary) Number of lights in the light table.  Does not include Sun or Skylight.
- (since) 5.0
## RhinoDoc Document
- (summary) Document that owns this light table.
- (since) 5.0
## Render.Skylight Skylight
- (summary) 
- (since) 6.0
## Render.Sun Sun
- (summary) 
     Gets the Sun instance that is applied to the document.
     If the RDK is loaded, an instance is always returned.
- (since) 5.0
# Methods
## int Add(Light light)
- (summary) 
- (since) 5.0
- (returns) int This is some return comment
## int Add(Light light,ObjectAttributes attributes)
- (summary) 
- (since) 5.0
- (returns) int This is some return comment
## bool Delete(int index,bool quiet)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool Delete(LightObject item)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## int Find(Guid id,bool ignoreDeleted)
- (summary) 
- (since) 5.0
- (returns) int This is some return comment
## LightObject FindIndex(int index)
- (summary) 
     Retrieves a  object based on Index. This seach type of search is discouraged.
     We are moving towards using only IDs for all tables.
     
- (since) 6.0
- (returns) LightObject This is some return comment
## LightObject FindName(string name)
- (summary) 
     Finds the LightObject with a given name.
     Deleted lights have no name.
- (since) 6.0
- (returns) LightObject This is some return comment
## LightObject FindNameHash(NameHash nameHash)
- (summary) 
     Finds a LightObject given its name hash.
     
- (since) 6.0
- (returns) LightObject This is some return comment
## IEnumerator<LightObject> GetEnumerator()
- (summary) 
- (since) 5.0
- (returns) IEnumerator<LightObject> This is some return comment
## bool Modify(Guid id,Light light)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool Modify(int index,Light light)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
