---
title: "ObjectPropertiesPageEventArgs"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.UI](../)*

```cs
public class ObjectPropertiesPageEventArgs
```
## Constructors

ObjectPropertiesPageEventArgs(ObjectPropertiesPage page)
: Used by  to notify the page when
     updating, modifying or determining if the page should be included
     in the navigation bar
: since 6.0
## Properties

uint DocRuntimeSerialNumber
: Document containing the objects and views
: since 6.0

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Document containing the objects and views
: since 6.0

uint EventRuntimeSerialNumber
: Gets the runtime serial number.
: since 6.14

int ObjectCount
: 
: since 6.0

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] Objects
: Return a list of Rhino objects to be processed by this object properties page
: since 6.0

uint ObjectTypes
: 
: since 6.0

[ObjectPropertiesPage](/rhinocommon/rhino/ui/objectpropertiespage/) Page
: The page sending these arguments
: since 6.0

[RhinoView](/rhinocommon/rhino/display/rhinoview/) View
: Active view
: since 6.0

[RhinoViewport](/rhinocommon/rhino/display/rhinoviewport/) Viewport
: Active viewport
: since 6.0
## Methods

T[] GetObjects()
: Get selected objects of a given type
: since 6.0

[RhinoObject](/rhinocommon/rhino/docobjects/rhinoobject/)[] GetObjects(ObjectType filter)
: Get selected objects that match a given filter
: since 6.0

bool IncludesObjectsType()
: Return True if any of the selected objects match the given type
: since 6.0

bool IncludesObjectsType(bool allMustMatch)
: Return True if any of the selected objects match the given type
: since 6.7

bool IncludesObjectsType(ObjectType objectTypes)
: 
: since 6.0

bool IncludesObjectsType(ObjectType objectTypes,bool allMustMatch)
: 
: since 6.7
