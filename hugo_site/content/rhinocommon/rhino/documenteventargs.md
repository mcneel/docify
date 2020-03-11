---
title: "DocumentEventArgs"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino](../)*

Provides document information for RhinoDoc events.
```cs
public class DocumentEventArgs : EventArgs
```
## Properties

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Gets the document for this event. This field might be null.

int DocumentId
: Gets the document Id of the document for this event.

uint DocumentSerialNumber
: Gets the uniques document serial number for this event
: since 6.0
