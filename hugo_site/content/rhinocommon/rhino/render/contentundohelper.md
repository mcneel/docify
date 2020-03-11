---
title: "ContentUndoHelper"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Content undo helper to be used with "using {}" to enclose a block of changes.
```cs
public class ContentUndoHelper : IDisposable
```
## Constructors

ContentUndoHelper(RhinoDoc doc,String description)
: Constructs a ContentUndoHelper object inside a using block to handle undo when modifying a RenderContent
     or - alternatively - create the ContentUndoHelper and explicitly call Dispose when you are done.
: since 6.0
## Methods

bool AddContent(RenderContent content,RenderContent parent)
: Call this *after* adding a content. Undo will cause the content to be deleted.
: Returns - True if the content was added.
: since 6.0

void Dispose()
: 
: since 6.0

bool ModifyContent(RenderContent content)
: Call this before modifying or deleting a content. Undo will cause the content to be restored.
: Returns - True if the content was modified.
: since 6.0

bool TweakContent(RenderContent content,String parameterName)
: Call this before tweaking a single content parameter. Undo will cause the parameter to be restored.
: Returns - True if the content was tweaked.
: since 6.0
