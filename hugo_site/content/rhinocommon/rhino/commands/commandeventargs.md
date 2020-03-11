---
title: "CommandEventArgs"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Commands](../)*

```cs
public class CommandEventArgs : EventArgs
```
## Properties

string CommandEnglishName
: Gets the English name of the command that raised this event.

Guid CommandId
: Gets the ID of the command that raised this event.

string CommandLocalName
: Gets the name of the command that raised this event in the local language.

string CommandPluginName
: Gets the name of the plug-in that this command belongs to.  If the command is internal
     to Rhino, then this propert is an empty string.

[Result](/rhinocommon/rhino/commands/result/) CommandResult
: Gets the result of the command that raised this event. 
     This value is only meaningful during EndCommand events.

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: 
: since 6.0

uint DocumentRuntimeSerialNumber
: 
: since 6.0
