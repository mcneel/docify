---
title: "ToolbarFile"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.UI](../)*

```cs
public class ToolbarFile
```
## Properties

int GroupCount
: 

Guid Id
: 

string Name
: 

string Path
: Full path to this file on disk

int ToolbarCount
: 
## Methods

bool Close(bool prompt)
: 

[ToolbarGroup](/rhinocommon/rhino/ui/toolbargroup/) GetGroup(int index)
: 

[ToolbarGroup](/rhinocommon/rhino/ui/toolbargroup/) GetGroup(string name)
: 

[Toolbar](/rhinocommon/rhino/ui/toolbar/) GetToolbar(int index)
: 

bool Save()
: 

bool SaveAs(string path)
: 
