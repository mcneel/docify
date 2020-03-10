---
title: "DocumentOrFreeFloatingBase"
draft: false
---

*Namespace: Rhino.Render*

   Base class for Rhino.Render objects that are owned by the document, or can be delivered separately
   from other functions.  In general, you cannot create these objects yourself.
   
## Methods
#### void BeginChange(ChangeContexts cc)
- (summary) 
     Call this function before making any change to this object (calling a setter) otherwise undo will not work correctly.  Calls to BeginChange must be paired with a call to EndChange.
     
- (since) 6.0
- (returns) void This is some return comment
#### bool EndChange()
- (summary) 
     See BeginChange
     
- (since) 6.0
- (returns) bool This is some return comment
