---
title: "PageViewSpaceChangeEventArgs"
date: 2020-03-11 15:29:46Z
draft: false
---

*Namespace: [Rhino.Display](../)*

```cs
public class PageViewSpaceChangeEventArgs : EventArgs
```
## Properties

Guid NewActiveDetailId
: The id of the detail object was set active.  Note, if this id is
     equal to Guid.Empty, then the active detail object is the page
     view itself.

Guid OldActiveDetailId
: The id of the previously active detail object. Note, if this id
     is equal to Guid.Empty, then the active detail object was the
     page view itself.

[RhinoPageView](/rhinocommon/rhino/display/rhinopageview/) PageView
: The page view on which a different detail object was set active.
