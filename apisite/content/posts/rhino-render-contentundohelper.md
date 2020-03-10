---
title: "Rhino.Render.ContentUndoHelper"
date: 2020-03-10 09:24:55Z
draft: false
---

# Constructors
## Rhino.Render.ContentUndoHelper(RhinoDoc doc,String description)
- (summary) 
     Constructs a ContentUndoHelper object inside a using block to handle undo when modifying a RenderContent
     or - alternatively - create the ContentUndoHelper and explicitly call Dispose when you are done.
     
- (since) 6.0
# Methods
## bool AddContent(RenderContent content,RenderContent parent)
- (summary) 
     Call this *after* adding a content. Undo will cause the content to be deleted.
     
- (since) 6.0
- (returns) bool This is some return comment
## void Dispose()
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
## bool ModifyContent(RenderContent content)
- (summary) 
      Call this before modifying or deleting a content. Undo will cause the content to be restored.
     
- (since) 6.0
- (returns) bool This is some return comment
## bool TweakContent(RenderContent content,String parameterName)
- (summary) 
     Call this before tweaking a single content parameter. Undo will cause the parameter to be restored.
     
- (since) 6.0
- (returns) bool This is some return comment
