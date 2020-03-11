---
title: "CustomUndoEventArgs"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Commands](../)*

Argument package that is passed to a custom undo delegate
```cs
public class CustomUndoEventArgs : EventArgs
```
## Properties

string ActionDescription
: 

Guid CommandId
: 

bool CreatedByRedo
: 

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: 

object Tag
: 

uint UndoSerialNumber
: 
