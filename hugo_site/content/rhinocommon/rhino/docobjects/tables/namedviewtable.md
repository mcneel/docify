---
title: "NamedViewTable"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.DocObjects.Tables](../)*

All named views in a rhino document.
```cs
public class NamedViewTable : IEnumerable<ViewInfo>, Collections.IRhinoTable<ViewInfo>
```
## Properties

int Count
: Number of named views in the table.

[RhinoDoc](/rhinocommon/rhino/rhinodoc/) Document
: Document that owns this table.
## Methods

int Add(string name,Guid viewportId)
: Adds named view to document which is based on an existing viewport.
: Returns - 0 based index of named view.
     -1 on failure.

int Add(ViewInfo view)
: 

bool Delete(int index)
: Remove named view from the document.
: Returns - True if successful.

bool Delete(string name)
: Remove named view from the document.
: Returns - True if successful.

int FindByName(string name)
: Finds a named view.
: Returns - >=0 index of the found named view
     -1 no named view found.

IEnumerator<ViewInfo> GetEnumerator()
: 

bool Rename(int index,string newName)
: Renames a named view.
: Returns - True if successful, False otherwise.
: since 7.0

bool Rename(string oldName,string newName)
: Renames a named view.
: Returns - True if successful, False otherwise.
: since 7.0

bool Restore(int index,RhinoView view,bool backgroundBitmap)
: 

bool Restore(int index,RhinoViewport viewport)
: Sets the MainViewport of a standard RhinoView to a named views settings
: since 6.0

bool Restore(int index,RhinoViewport viewport,bool backgroundBitmap)
: 
: since 5.9

bool RestoreAnimated(int index,RhinoView view,bool backgroundBitmap)
: 

bool RestoreAnimated(int index,RhinoView view,bool backgroundBitmap,int frames,int frameRate)
: 

bool RestoreAnimated(int index,RhinoViewport viewport,bool backgroundBitmap)
: 
: since 5.9

bool RestoreAnimated(int index,RhinoViewport viewport,bool backgroundBitmap,int frames,int frameRate)
: 
: since 5.9

bool RestoreAnimatedConstantSpeed(int index,RhinoViewport viewport,double units_per_frame,int ms_delay)
: 
: since 6.0

bool RestoreAnimatedConstantTime(int index,RhinoViewport viewport,int frames,int ms_delay)
: 
: since 6.0

bool RestoreWithAspectRatio(int index,RhinoViewport viewport)
: 
: since 6.0
