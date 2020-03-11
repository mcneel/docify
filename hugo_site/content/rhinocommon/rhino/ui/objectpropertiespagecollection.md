---
title: "ObjectPropertiesPageCollection"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.UI](../)*

Passed to Rhino.PlugIns.PlugIn.ObjectPropertiesPages to allow a plug-in
   to add custom ObjectPropertiesPage pages to the Rhino properties panel.
```cs
public class ObjectPropertiesPageCollection
```
## Properties

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Document associated with the Rhino properties panel.
: since 7.0

uint DocumentRuntimeSerailNumber
: Document associated with the Rhino properties panel.
: since 7.0
## Methods

void Add(ObjectPropertiesPage page)
: Custom page to add
: since 7.0
