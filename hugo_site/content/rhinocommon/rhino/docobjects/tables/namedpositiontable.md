---
title: "NamedPositionTable"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

All named positions in a rhino document.
```cs
public class NamedPositionTable
```
## Properties

int Count
: Number of Named Positions in the table.
: since 6.0

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Document that owns this table.
: since 6.0

Guid[] Ids
: Array of Named Position guids.
: Returns - Guid array of each Named Position in the document.
: since 6.0

string[] Names
: Array of Named Position names.
: Returns - A string array with the names all Named Positions in the document.
: since 6.0
## Methods

bool Append(Guid id,IEnumerable<Guid> objectIds)
: Append objects to a Named Position.
: Returns - True or False depending on whether the Append was successful.
: since 6.0

bool Append(Guid id,IEnumerable<RhinoObject> objects)
: Append objects to a Named Position.
: Returns - True or False depending on whether the Append was successful.
: since 6.0

bool Append(string name,IEnumerable<Guid> objectIds)
: Append objects to a Named Position.
: Returns - True or False depending on whether the Append was successful.
: since 6.0

bool Append(string name,IEnumerable<RhinoObject> objects)
: Append objects to a Named Position.
: Returns - True or False depending on whether the Append was successful.
: since 6.0

bool Delete(Guid id)
: Delete a Named Position.
: Returns - True or False depending on whether the Delete was successful, Null in case the id does not exist as a Named Position.
: since 6.0

bool Delete(string name)
: Delete a Named Position.
: Returns - True or False depending on whether the Delete was successful, Null in case the id does not exist as a Named Position.
: since 6.0

Guid Id(string name)
: Guid of a Named Position.
: Returns - The Guid of the Named Position.  If not found, an empty Guid is returned.
: since 6.0

string Name(Guid id)
: Name of a Named Position.
: Returns - The name of the Named Position as a string.
: since 6.0

Guid[] ObjectIds(Guid id)
: Array of Rhino Object Guids related to a Named Position.
: Returns - Array of Guid which pertain to the objects tracked by the Named Position.
: since 6.0

Guid[] ObjectIds(string name)
: Array of Rhino Object Guids related to a Named Position.
: Returns - Array of Guid which pertain to the objects tracked by the Named Position, or None in case no such Named Position is found.
: since 6.0

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] Objects(Guid id)
: Array of Rhino Objects related to a Named Position.
: Returns - Array of Rhino Objects which are tracked by the Named Position.
: since 6.0

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] Objects(string name)
: Array of Rhino Objects related to a Named Position.
: Returns - Array of Rhino Objects which are tracked by the Named Position if successful, None if no such Named Position exists.
: since 6.0

bool ObjectXform(Guid id,Guid objId,Transform xform)
: Retrieve the Transform of a Rhino Object relate dto a Named Position.
: Returns - Transform of the RhinoObject related to the Named Position.
: since 6.0

bool ObjectXform(Guid id,RhinoObject obj,Transform xform)
: Retrieve the Transform of a Rhino Object relate dto a Named Position.
: Returns - Transform of the RhinoObject related to the Named Position.
: since 6.0

bool Rename(Guid id,string name)
: Rename a Named Position.
: Returns - True or False depending on whether the Rename was successful.  For example, this method might return False if you attempt to remane the Named Position with the currently assigned name.
: since 6.0

bool Rename(string oldName,string name)
: Rename a Named Position.
: Returns - True or False depending on whether the Rename was successful.  For example, this method might return False if you attempt to remane the Named Position with the currently assigned name.
: since 6.0

bool Restore(Guid id)
: Restore a Named Position.
: Returns - True or False based on whether the Named Position was able to be restored.
: since 6.0

bool Restore(string name)
: Restore a Named Position.
: Returns - True or False based on whether the Named Position was able to be restored.
: since 6.0

Guid Save(string name,IEnumerable<Guid> objectIds)
: Save a new Named Position.
: Returns - Guid of the newly saved Named Position.
: since 6.0

Guid Save(string name,IEnumerable<RhinoObject> objects)
: Save a new Named Position.
: Returns - Guid of the newly saved Named Position.
: since 6.0

bool Update(Guid id)
: Updates a Named Position, effectively storing the current positions of the objects which the Named Position is tracking.
: Returns - True or False depending on whether the Update was successful.
: since 6.0

bool Update(string name)
: Updates a Named Position, effectively storing the current positions of the objects which the Named Position is tracking.
: Returns - True or False depending on whether the Update was successful.
: since 6.0
