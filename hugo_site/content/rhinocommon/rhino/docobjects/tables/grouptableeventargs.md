---
title: "GroupTableEventArgs"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

Contains group table event data.
```cs
public class GroupTableEventArgs : EventArgs
```
## Properties

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: The document in which the event occurred.

[GroupTableEventType](/rhinocommon/rhino/docobjects/tables/grouptableeventtype/) EventType
: The event type.

int GroupIndex
: The index of the Group that has changed.
: since 6.10

[Group](/rhinocommon/rhino/docobjects/group/) NewState
: The Group that has changed.
: since 6.10

[Group](/rhinocommon/rhino/docobjects/group/) OldState
: If the event is GroupTableEventType.Modified, then the old Group.
: since 6.10
