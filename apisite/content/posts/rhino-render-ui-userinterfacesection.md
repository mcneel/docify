---
title: "UserInterfaceSection"
draft: false
---

*Namespace: Rhino.Render.UI*

   Custom user interface section manager
   
## Properties
#### RenderContent RenderContent
- (summary) 
     The RenderContent object that created this user interface object.
     
- (since) 5.1
#### object Window
- (summary) 
     The user control associated with this user interface object.
     
- (since) 5.1
## Methods
#### static UserInterfaceSection FromWindow(object window)
- (summary) 
     Find the UserInterfaceSection that created the specified instance of a
     window.
     
- (since) 6.0
- (returns) UserInterfaceSection This is some return comment
#### void Expand(bool expand)
- (summary) 
     Expand or collapse this content section.
     
- (since) 5.1
- (returns) void This is some return comment
#### RenderContent[] GetContentList()
- (summary) 
     Returns a list of currently selected content items to be edited.
     
- (since) 5.1
- (returns) RenderContent[] This is some return comment
#### void Show(bool visible)
- (summary) 
     Show or hide this content section.
     
- (since) 5.1
- (returns) void This is some return comment
