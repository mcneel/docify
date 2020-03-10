---
title: "Rhino.DocObjects.Tables.NamedPositionTable"
date: 2020-03-10 09:24:56Z
draft: false
---

# Properties
## int Count
- (summary) Number of Named Positions in the table.
- (since) 6.0
## RhinoDoc Document
- (summary) Document that owns this table.
- (since) 6.0
## Guid[] Ids
- (summary) Array of Named Position guids.
- (since) 6.0
## string[] Names
- (summary) Array of Named Position names.
- (since) 6.0
# Methods
## bool Append(Guid id,IEnumerable<Guid> objectIds)
- (summary) Append objects to a Named Position.
- (since) 6.0
- (returns) bool This is some return comment
## bool Append(Guid id,IEnumerable<RhinoObject> objects)
- (summary) Append objects to a Named Position.
- (since) 6.0
- (returns) bool This is some return comment
## bool Append(string name,IEnumerable<Guid> objectIds)
- (summary) Append objects to a Named Position.
- (since) 6.0
- (returns) bool This is some return comment
## bool Append(string name,IEnumerable<RhinoObject> objects)
- (summary) Append objects to a Named Position.
- (since) 6.0
- (returns) bool This is some return comment
## bool Delete(Guid id)
- (summary) Delete a Named Position.
- (since) 6.0
- (returns) bool This is some return comment
## bool Delete(string name)
- (summary) Delete a Named Position.
- (since) 6.0
- (returns) bool This is some return comment
## Guid Id(string name)
- (summary) Guid of a Named Position.
- (since) 6.0
- (returns) Guid This is some return comment
## string Name(Guid id)
- (summary) Name of a Named Position.
- (since) 6.0
- (returns) string This is some return comment
## Guid[] ObjectIds(Guid id)
- (summary) Array of Rhino Object Guids related to a Named Position.
- (since) 6.0
- (returns) Guid[] This is some return comment
## Guid[] ObjectIds(string name)
- (summary) Array of Rhino Object Guids related to a Named Position.
- (since) 6.0
- (returns) Guid[] This is some return comment
## RhinoObject[] Objects(Guid id)
- (summary) Array of Rhino Objects related to a Named Position.
- (since) 6.0
- (returns) RhinoObject[] This is some return comment
## RhinoObject[] Objects(string name)
- (summary) Array of Rhino Objects related to a Named Position.
- (since) 6.0
- (returns) RhinoObject[] This is some return comment
## bool ObjectXform(Guid id,Guid objId,Transform xform)
- (summary) Retrieve the Transform of a Rhino Object relate dto a Named Position.
- (since) 6.0
- (returns) bool This is some return comment
## bool ObjectXform(Guid id,RhinoObject obj,Transform xform)
- (summary) Retrieve the Transform of a Rhino Object relate dto a Named Position.
- (since) 6.0
- (returns) bool This is some return comment
## bool Rename(Guid id,string name)
- (summary) Rename a Named Position.
- (since) 6.0
- (returns) bool This is some return comment
## bool Rename(string oldName,string name)
- (summary) Rename a Named Position.
- (since) 6.0
- (returns) bool This is some return comment
## bool Restore(Guid id)
- (summary) Restore a Named Position.
- (since) 6.0
- (returns) bool This is some return comment
## bool Restore(string name)
- (summary) Restore a Named Position.
- (since) 6.0
- (returns) bool This is some return comment
## Guid Save(string name,IEnumerable<Guid> objectIds)
- (summary) Save a new Named Position.
- (since) 6.0
- (returns) Guid This is some return comment
## Guid Save(string name,IEnumerable<RhinoObject> objects)
- (summary) Save a new Named Position.
- (since) 6.0
- (returns) Guid This is some return comment
## bool Update(Guid id)
- (summary) 
         Updates a Named Position, effectively storing the current positions of the objects which the Named Position is tracking.
         
- (since) 6.0
- (returns) bool This is some return comment
## bool Update(string name)
- (summary) 
         Updates a Named Position, effectively storing the current positions of the objects which the Named Position is tracking.
         
- (since) 6.0
- (returns) bool This is some return comment
