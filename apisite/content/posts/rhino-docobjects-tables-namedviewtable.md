---
title: "Rhino.DocObjects.Tables.NamedViewTable"
date: 2020-03-10 09:24:56Z
draft: false
---

# Properties
## int Count
- (summary) Number of named views in the table.
- (since) 5.0
## RhinoDoc Document
- (summary) Document that owns this table.
- (since) 5.0
# Methods
## int Add(string name,Guid viewportId)
- (summary) 
     Adds named view to document which is based on an existing viewport.
     
- (since) 5.0
- (returns) int This is some return comment
## int Add(ViewInfo view)
- (summary) 
- (since) 5.0
- (returns) int This is some return comment
## bool Delete(int index)
- (summary) Remove named view from the document.
- (since) 5.0
- (returns) bool This is some return comment
## bool Delete(string name)
- (summary) Remove named view from the document.
- (since) 5.0
- (returns) bool This is some return comment
## int FindByName(string name)
- (summary) Finds a named view.
- (since) 5.0
- (returns) int This is some return comment
## IEnumerator<ViewInfo> GetEnumerator()
- (summary) 
- (since) 5.0
- (returns) IEnumerator<ViewInfo> This is some return comment
## bool Rename(int index,string newName)
- (summary) 
     Renames a named view.
     
- (since) 7.0
- (returns) bool This is some return comment
## bool Rename(string oldName,string newName)
- (summary) 
     Renames a named view.
     
- (since) 7.0
- (returns) bool This is some return comment
## bool Restore(int index,RhinoView view,bool backgroundBitmap)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool Restore(int index,RhinoViewport viewport)
- (summary) 
     Sets the MainViewport of a standard RhinoView to a named views settings
     
- (since) 6.0
- (returns) bool This is some return comment
## bool Restore(int index,RhinoViewport viewport,bool backgroundBitmap)
- (summary) 
- (since) 5.9
- (returns) bool This is some return comment
## bool RestoreAnimated(int index,RhinoView view,bool backgroundBitmap)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool RestoreAnimated(int index,RhinoView view,bool backgroundBitmap,int frames,int frameRate)
- (summary) 
- (since) 5.0
- (returns) bool This is some return comment
## bool RestoreAnimated(int index,RhinoViewport viewport,bool backgroundBitmap)
- (summary) 
- (since) 5.9
- (returns) bool This is some return comment
## bool RestoreAnimated(int index,RhinoViewport viewport,bool backgroundBitmap,int frames,int frameRate)
- (summary) 
- (since) 5.9
- (returns) bool This is some return comment
## bool RestoreAnimatedConstantSpeed(int index,RhinoViewport viewport,double units_per_frame,int ms_delay)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool RestoreAnimatedConstantTime(int index,RhinoViewport viewport,int frames,int ms_delay)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
## bool RestoreWithAspectRatio(int index,RhinoViewport viewport)
- (summary) 
- (since) 6.0
- (returns) bool This is some return comment
