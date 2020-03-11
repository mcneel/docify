---
title: "CollapsibleSectionViewModel"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.UI.Controls](../)*

Derive from this class to implement your own view model that wraps around a built
   in implementation of IRdkViewModel.  Use GetData etc to implement your properties.
```cs
public class CollapsibleSectionViewModel : IRdkViewModel
```
## Constructors

CollapsibleSectionViewModel(ICollapsibleSection section)
: Construct from your section - the view model should be a member of the section
: since 6.0
## Properties

IntPtr CppPointer
: 
: since 6.0
## Methods

void Commit(Guid uuidDataType)
: 
: since 6.0

void Discard(Guid uuidDataType)
: 
: since 6.0

object GetData(Guid uuidDataType,bool bForWrite,bool bAutoChangeBracket)
: Call for an interface to data
: since 6.0

[UndoRecord](/rhinocommon/rhino/ui/controls/undorecord/) UndoHelper(string description)
: Helper function to ease the use of undo records
: Returns - Return the undo record
: since 6.0
