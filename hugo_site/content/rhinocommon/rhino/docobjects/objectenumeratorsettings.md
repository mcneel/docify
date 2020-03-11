---
title: "ObjectEnumeratorSettings"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Settings used for getting an enumerator of objects in a document
   See Rhino.Collections.ObjectTable.GetEnumerator()
```cs
public class ObjectEnumeratorSettings
```
## Constructors

ObjectEnumeratorSettings()
: 
## Properties

bool ActiveObjects
: 

Type ClassTypeFilter
: 

bool DeletedObjects
: 

bool HiddenObjects
: 

bool IdefObjects
: When true, ONLY Instance Definitions will be returned

bool IncludeGrips
: 

bool IncludeLights
: 

bool IncludePhantoms
: 

int LayerIndexFilter
: 

bool LockedObjects
: 

string NameFilter
: 

bool NormalObjects
: 

[ObjectType](/rhinocommon/rhino/docobjects/objecttype/) ObjectTypeFilter
: 

bool ReferenceObjects
: 

bool SelectedObjectsFilter
: 

[RhinoViewport](/rhinocommon/rhino/display/rhinoviewport/) ViewportFilter
: Filter on value of object->IsActiveInViewport()
: since 5.6

bool VisibleFilter
: 
