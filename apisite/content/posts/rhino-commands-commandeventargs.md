---
title: "CommandEventArgs"
draft: false
---

*Namespace: Rhino.Commands*
## Properties
#### string CommandEnglishName
- (summary) 
     Gets the English name of the command that raised this event.
     
- (since) 5.0
#### Guid CommandId
- (summary) 
     Gets the ID of the command that raised this event.
     
- (since) 5.0
#### string CommandLocalName
- (summary) 
     Gets the name of the command that raised this event in the local language.
     
- (since) 5.0
#### string CommandPluginName
- (summary) 
     Gets the name of the plug-in that this command belongs to.  If the command is internal
     to Rhino, then this propert is an empty string.
     
- (since) 5.0
#### Result CommandResult
- (summary) 
     Gets the result of the command that raised this event. 
     This value is only meaningful during EndCommand events.
     
- (since) 5.0
#### RhinoDoc Document
- (summary) 
- (since) 6.0
#### uint DocumentRuntimeSerialNumber
- (summary) 
- (since) 6.0
