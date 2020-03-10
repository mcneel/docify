---
title: "LinetypeTable"
draft: false
---

*Namespace: Rhino.DocObjects.Tables*
## Properties
#### int ActiveCount
- (summary) 
     Returns number of linetypes in the linetypes table, excluding deleted linetypes.
     
- (since) 5.0
#### string ByLayerLinetypeName
- (summary) 
     Returns the text name of the bylayer linetype.
     
- (since) 5.0
#### string ByParentLinetypeName
- (summary) 
     Returns the text name of the byparent linetype.
     
- (since) 6.0
#### ModelComponentType ComponentType
- (summary) 
- (since) 6.0
#### string ContinuousLinetypeName
- (summary) 
     Returns the text name of the continuous linetype.
     
- (since) 5.0
#### int Count
- (summary) 
     Returns number of linetypes in the linetypes table, including deleted linetypes.
     
- (since) 5.0
#### DocObjects.Linetype CurrentLinetype
- (summary) 
     Returns reference to the current linetype. Note that this reference may
     become invalid after a call to AddLinetype().
     
- (since) 5.0
#### int CurrentLinetypeIndex
- (summary) 
     At all times, there is a "current" linetype.  Unless otherwise specified,
     new objects are assigned to the current linetype. If the current linetype
     source is LinetypeFromLayer the object's layer's linetype is used instead.
     
- (since) 5.0
#### Rhino.DocObjects.ObjectLinetypeSource CurrentLinetypeSource
- (summary) 
     Source used by an object to determine its current linetype to be used by new objects.
     
- (since) 5.0
#### RhinoDoc Document
- (summary) Document that owns this table.
- (since) 5.0
#### double LinetypeScale
- (summary) 
     For display in Rhino viewports, the linetypes are scaled by a single scale
     factor for all viewports. This is not used for printing, where all linetype
     patterns are scaled to print in their defined size 1:1 on the paper.
     
- (since) 5.0
## Methods
#### int Add(Linetype linetype)
- (summary) 
     Adds a new linetype with specified definition to the linetype table.
     
- (since) 5.0
- (returns) int This is some return comment
#### int Add(string name,IEnumerable<double> segmentLengths)
- (summary) 
     Adds a new linetype with specified definition to the linetype table.
     
- (since) 5.0
- (returns) int This is some return comment
#### int AddReferenceLinetype(Linetype linetype)
- (summary) 
     Adds a reference linetypes that will not be saved in files.
     
- (since) 5.0
- (returns) int This is some return comment
#### bool Delete(IEnumerable<int> indices,bool quiet)
- (summary) Deletes multiple linetypes.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Delete(int index,bool quiet)
- (summary) Deletes linetype.
- (since) 5.0
- (returns) bool This is some return comment
#### bool Delete(Linetype item)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
#### int Find(Guid id,bool ignoreDeletedLinetypes)
- (summary) Finds a linetype with a matching ID.
- (since) 5.0
- (returns) int This is some return comment
#### int Find(string name)
- (summary) Finds the linetype with a given name.
- (since) 6.0
- (returns) int This is some return comment
#### int Find(string name,bool ignoreDeletedLinetypes)
- (summary) Obsolete. Use the other overload.
- (since) 5.0
- (returns) int This is some return comment
#### Linetype FindIndex(int index)
- (summary) 
     Retrieves a Linetype object based on Index. This seach type of search is discouraged.
     We are moving towards using only IDs for all tables.
     
- (since) 6.0
- (returns) Linetype This is some return comment
#### Linetype FindName(string name)
- (summary) Finds the linetype with a given name.
- (since) 6.0
- (returns) Linetype This is some return comment
#### IEnumerator<Linetype> GetEnumerator()
- (summary) 
- (since) 5.0
- (returns) IEnumerator<Linetype> This is some return comment
#### string GetUnusedLinetypeName()
- (summary) 
     Gets unused linetype name used as default when creating new linetypes.
     
- (since) 6.0
- (returns) string This is some return comment
#### string GetUnusedLinetypeName(bool ignoreDeleted)
- (summary) 
     Obsolete. Use the other overload. Gets unused linetype name used as default when creating new linetypes.
     
- (since) 5.0
- (returns) string This is some return comment
#### int LinetypeIndexForObject(RhinoObject rhinoObject)
- (summary) 
     Returns the effective linetype index to be used to find the 
     linetype definition to draw an object. If an object's linetype
     source is LinetypeFromObject, the linetype index in the object's
     attributes is used. If an object's linetype source is LinetypeFromLayer
     the linetype index from the object's layer is used.
     
- (since) 5.0
- (returns) int This is some return comment
#### int LoadDefaultLinetypes()
- (summary) 
     Fills in the linetype table with any default linetypes not already included.
     
- (since) 6.0
- (returns) int This is some return comment
#### bool Modify(Linetype linetype,int index,bool quiet)
- (summary) Modify linetype settings.
- (since) 5.0
- (returns) bool This is some return comment
#### bool SetCurrentLinetypeIndex(int linetypeIndex,bool quiet)
- (summary) 
     At all times, there is a "current" linetype. Unless otherwise specified, new objects
     are assigned to the current linetype. The current linetype is never deleted.
     
- (since) 5.0
- (returns) bool This is some return comment
#### bool Undelete(int index)
- (summary) Restores a linetype that has been deleted.
- (since) 5.0
- (returns) bool This is some return comment
#### bool UndoModify(int index)
- (summary) 
     If the linetype has been modified and the modifcation can be undone,
     then UndoModify() will restore the linetype to its previous state.
     
- (since) 5.0
- (returns) bool This is some return comment
