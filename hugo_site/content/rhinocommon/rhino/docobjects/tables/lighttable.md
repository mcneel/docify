---
title: "LightTable"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

```cs
public class LightTable :
    RhinoDocCommonTable<LightObject>
```
## Properties

ModelComponentType ComponentType
: 
: since 6.0

int Count
: Number of lights in the light table.  Does not include Sun or Skylight.

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Document that owns this light table.

[Skylight](/rhinocommon/rhino/render/changequeue/skylight/) Skylight
: 
: since 6.0

[Sun](/rhinocommon/rhino/render/sun/) Sun
: Gets the Sun instance that is applied to the document.
     If the RDK is loaded, an instance is always returned.
## Methods

int Add(Light light)
: 

int Add(Light light,ObjectAttributes attributes)
: 

bool Delete(int index,bool quiet)
: 
: since 6.0

bool Delete(LightObject item)
: 
: since 6.0

int Find(Guid id,bool ignoreDeleted)
: 

[LightObject](/rhinocommon/rhino/docobjects/lightobject/) FindIndex(int index)
: Retrieves a  object based on Index. This seach type of search is discouraged.
     We are moving towards using only IDs for all tables.
: Returns - A  object, or None if none was found.
: since 6.0

[LightObject](/rhinocommon/rhino/docobjects/lightobject/) FindName(string name)
: Finds the LightObject with a given name.
     Deleted lights have no name.
: Returns - A layer. If no layer is found, None is returned.
: since 6.0

[LightObject](/rhinocommon/rhino/docobjects/lightobject/) FindNameHash(NameHash nameHash)
: Finds a LightObject given its name hash.
: Returns - A LightObject, or None on error.
: since 6.0

IEnumerator<LightObject> GetEnumerator()
: 

bool Modify(Guid id,Light light)
: 

bool Modify(int index,Light light)
: 
