---
title: "ContentUndoBlocker"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

```cs
public class ContentUndoBlocker : IDisposable
```
## Constructors

ContentUndoBlocker()
: Constructs a ContentUndoBlocker object inside a using block to block undo when modifying a RenderContent
     while a ContentUndoHelper is active. Alternatively - create the ContentUndoBlocker and explicitly call Dispose when you are done.
: since 5.10
## Methods

void Dispose()
: 
: since 5.10
