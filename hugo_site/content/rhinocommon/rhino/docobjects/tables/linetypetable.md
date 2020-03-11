---
title: "LinetypeTable"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

```cs
public class LinetypeTable :
    RhinoDocCommonTable<Linetype>, ICollection<Linetype>
```
## Properties

int ActiveCount
: Returns number of linetypes in the linetypes table, excluding deleted linetypes.

string ByLayerLinetypeName
: Returns the text name of the bylayer linetype.

string ByParentLinetypeName
: Returns the text name of the byparent linetype.
: since 6.0

ModelComponentType ComponentType
: 
: since 6.0

string ContinuousLinetypeName
: Returns the text name of the continuous linetype.

int Count
: Returns number of linetypes in the linetypes table, including deleted linetypes.

[Linetype](/rhinocommon/rhino/docobjects/linetype/) CurrentLinetype
: Returns reference to the current linetype. Note that this reference may
     become invalid after a call to AddLinetype().

int CurrentLinetypeIndex
: At all times, there is a "current" linetype.  Unless otherwise specified,
     new objects are assigned to the current linetype. If the current linetype
     source is LinetypeFromLayer the object's layer's linetype is used instead.

[ObjectLinetypeSource](/rhinocommon/rhino/docobjects/objectlinetypesource/) CurrentLinetypeSource
: Source used by an object to determine its current linetype to be used by new objects.

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Document that owns this table.

double LinetypeScale
: For display in Rhino viewports, the linetypes are scaled by a single scale
     factor for all viewports. This is not used for printing, where all linetype
     patterns are scaled to print in their defined size 1:1 on the paper.
## Methods

int Add(Linetype linetype)
: Adds a new linetype with specified definition to the linetype table.
: Returns - Index of newline type or -1 on error.

int Add(string name,IEnumerable<double> segmentLengths)
: Adds a new linetype with specified definition to the linetype table.
: Returns - Index of new linetype or -1 on error.

int AddReferenceLinetype(Linetype linetype)
: Adds a reference linetypes that will not be saved in files.
: Returns - Index of new linetype or -1 on error.

bool Delete(IEnumerable<int> indices,bool quiet)
: Deletes multiple linetypes.
: Returns - True if operation succeeded.

bool Delete(int index,bool quiet)
: Deletes linetype.
: Returns - True if successful. False if linetypeIndex is out of range or the
     linetype cannot be deleted because it is the current linetype or
     because it linetype is referenced by active geometry.

bool Delete(Linetype item)
: 
: since 6.0

int Find(Guid id,bool ignoreDeletedLinetypes)
: Finds a linetype with a matching ID.
: Returns - Zero or a positive value if the index of the linetype with the given ID is found.
     -1 if no linetype has the given ID.

int Find(string name)
: Finds the linetype with a given name.
: Returns - >=0 index of the linetype with the given name
     -1  no linetype has the given name.
: since 6.0

int Find(string name,bool ignoreDeletedLinetypes)
: Obsolete. Use the other overload.
: Returns - >=0 index of the linetype with the given name
     -1  no linetype has the given name.

[Linetype](/rhinocommon/rhino/docobjects/linetype/) FindIndex(int index)
: Retrieves a Linetype object based on Index. This seach type of search is discouraged.
     We are moving towards using only IDs for all tables.
: Returns - A Linetype object, or None if none was found.
: since 6.0

[Linetype](/rhinocommon/rhino/docobjects/linetype/) FindName(string name)
: Finds the linetype with a given name.
: Returns - A linetype, or None if the name does not exist.
: since 6.0

IEnumerator<Linetype> GetEnumerator()
: 

string GetUnusedLinetypeName()
: Gets unused linetype name used as default when creating new linetypes.
: Returns - The unused linetype name.
: since 6.0

string GetUnusedLinetypeName(bool ignoreDeleted)
: Obsolete. Use the other overload. Gets unused linetype name used as default when creating new linetypes.
: Returns - The unused linetype name.

int LinetypeIndexForObject(RhinoObject rhinoObject)
: Returns the effective linetype index to be used to find the 
     linetype definition to draw an object. If an object's linetype
     source is LinetypeFromObject, the linetype index in the object's
     attributes is used. If an object's linetype source is LinetypeFromLayer
     the linetype index from the object's layer is used.
: Returns - The effective linetype index.

int LoadDefaultLinetypes()
: Fills in the linetype table with any default linetypes not already included.
: Returns - The number of default linetypes added to the linetype table.
: since 6.0

bool Modify(Linetype linetype,int index,bool quiet)
: Modify linetype settings.
: Returns - True if successful. False if linetype_index is out of range or the
     settings attempt to lock or hide the current linetype.

bool SetCurrentLinetypeIndex(int linetypeIndex,bool quiet)
: At all times, there is a "current" linetype. Unless otherwise specified, new objects
     are assigned to the current linetype. The current linetype is never deleted.
: Returns - True if current linetype index successfully set.

bool Undelete(int index)
: Restores a linetype that has been deleted.
: Returns - True if successful.

bool UndoModify(int index)
: If the linetype has been modified and the modifcation can be undone,
     then UndoModify() will restore the linetype to its previous state.
: Returns - True if this linetype had been modified and the modifications were undone.
