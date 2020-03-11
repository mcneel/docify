---
title: "SelCommand"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Commands](../)*

For adding nestable selection commands that work like the native Rhino
   SelCrv command, derive your command from SelCommand and override the
   virtual SelFilter function.
```cs
public class SelCommand : Command
```
## Properties

bool BeQuiet
: 

bool TestGrips
: 

bool TestLights
: 
