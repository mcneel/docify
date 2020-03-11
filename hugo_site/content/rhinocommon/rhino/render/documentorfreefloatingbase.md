---
title: "DocumentOrFreeFloatingBase"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino.Render](../)*

Base class for Rhino.Render objects that are owned by the document, or can be delivered separately
   from other functions.  In general, you cannot create these objects yourself.
```cs
public class DocumentOrFreeFloatingBase : FreeFloatingBase
```
## Methods

void BeginChange(ChangeContexts cc)
: Call this function before making any change to this object (calling a setter) otherwise undo will not work correctly.  Calls to BeginChange must be paired with a call to EndChange.
: since 6.0

bool EndChange()
: See BeginChange
: Returns - True if the object has returned to no-changes mode.
: since 6.0
