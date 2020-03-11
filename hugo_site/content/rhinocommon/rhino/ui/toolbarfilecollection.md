---
title: "ToolbarFileCollection"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.UI](../)*

```cs
public class ToolbarFileCollection : IEnumerable<ToolbarFile>
```
## Properties

static bool MruSidebarIsVisible
: 

static bool SidebarIsVisible
: 

int Count
: Number of open toolbar files
## Methods

[ToolbarFile](/rhinocommon/rhino/ui/toolbarfile/) FindByName(string name,bool ignoreCase)
: 

[ToolbarFile](/rhinocommon/rhino/ui/toolbarfile/) FindByPath(string path)
: 

IEnumerator<ToolbarFile> GetEnumerator()
: 

[ToolbarFile](/rhinocommon/rhino/ui/toolbarfile/) Open(string path)
: 
