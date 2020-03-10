---
title: "CollapsibleSectionViewModel"
draft: false
---

*Namespace: Rhino.UI.Controls*

   Derive from this class to implement your own view model that wraps around a built
   in implementation of IRdkViewModel.  Use GetData etc to implement your properties.
   
## Constructors
#### Rhino.UI.Controls.CollapsibleSectionViewModel(ICollapsibleSection section)
- (summary) 
     Construct from your section - the view model should be a member of the section
     
- (since) 6.0
## Properties
#### IntPtr CppPointer
- (summary) 
- (since) 6.0
## Methods
#### void Commit(Guid uuidDataType)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### void Discard(Guid uuidDataType)
- (summary) 
- (since) 6.0
- (returns) void This is some return comment
#### object GetData(Guid uuidDataType,bool bForWrite,bool bAutoChangeBracket)
- (summary) 
     Call for an interface to data
     
- (since) 6.0
- (returns) object This is some return comment
#### UndoRecord UndoHelper(string description)
- (summary) 
     Helper function to ease the use of undo records
     
- (since) 6.0
- (returns) UndoRecord This is some return comment
