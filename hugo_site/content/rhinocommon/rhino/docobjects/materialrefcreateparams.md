---
title: "MaterialRefCreateParams"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects](../)*

Options passed to MaterialRefs.Create
```cs
public class MaterialRefCreateParams
```
## Properties

Guid BackFaceMaterialId
: The Id of the Material used to render the back of an object.
: since 5.10

int BackFaceMaterialIndex
: The index of the material used to render the back of an object
: since 5.10

Guid FrontFaceMaterialId
: The Id of the Material used to render the front of an object.
: since 5.10

int FrontFaceMaterialIndex
: The index of the material used to render the front of an object
: since 5.10

[ObjectMaterialSource](/rhinocommon/rhino/docobjects/objectmaterialsource/) MaterialSource
: Determines if the simple material should come from the object or from
     it's layer.
: since 5.10

Guid PlugInId
: Identifies a rendering plug-in
: since 5.10
